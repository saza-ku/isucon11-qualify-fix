# isucon11-qualify

## cloud-init

```
#cloud-config

timezone: Asia/Tokyo

packages:
  - ansible
  - curl
  - git

runcmd:
  - |
    set -e

    GITDIR="/tmp/isucon11-qualify"
    rm -rf ${GITDIR}
    git clone --depth=1 https://github.com/saza-ku/isucon11-qualify-fix.git ${GITDIR}
    (
      cd ${GITDIR}/provisioning/ansible
      # common
      sed -i -e '/timezone/d' roles/common/tasks/main.yml
      sed -i -e '/name.*Deploy/,/dest/d' -e 's/^$/    recurse: yes/' roles/common/tasks/isucon11-qualify.yml

      # bench
      curl -sL https://github.com/isucon/isucon11-qualify/releases/download/public/initialize.json > roles/bench/files/initialize.json
      curl -sL https://github.com/isucon/isucon11-qualify/releases/download/public/images.tgz > roles/bench/files/images.tgz

      # contestant
      curl -sL https://github.com/isucon/isucon11-qualify/releases/download/public/1_InitData.sql > roles/contestant/files/initial-data.sql
      openssl req -subj '/CN=*.t.isucon.dev' -nodes -newkey rsa:2048 -keyout roles/contestant/files/etc/nginx/certificates/tls-key.pem -out roles/contestant/files/etc/nginx/certificates/tls-csr.pem 
      echo "basicConstraints=critical,CA:true,pathlen:0\nsubjectAltName=DNS.1:*.t.isucon.dev" > roles/contestant/files/etc/nginx/certificates/tls-extfile.txt
      openssl x509 -in roles/contestant/files/etc/nginx/certificates/tls-csr.pem -req -signkey roles/contestant/files/etc/nginx/certificates/tls-key.pem -sha256 -days 3650 -out roles/contestant/files/etc/nginx/certificates/tls-cert.pem -extfile roles/contestant/files/etc/nginx/certificates/tls-extfile.txt
      mkdir -p /var/lib/cloud/scripts/per-instance
      sed -i -e '/^index=/s/=.*/=1/' roles/contestant/files/var/lib/cloud/scripts/per-instance/generate-env_aws.sh
      sed -i -e 's/192\.168\.0/127.0.0/' roles/contestant/files/etc/hosts

      ansible-playbook -i standalone.hosts --connection=local site.yml
      /var/lib/cloud/scripts/per-instance/generate-env.sh

      mkdir -p /usr/share/ca-certificates/isucon
      cp /etc/nginx/certificates/tls-cert.pem /usr/share/ca-certificates/isucon
      echo "isucon/tls-cert.pem" >> /etc/ca-certificates.conf
      update-ca-certificates
    )
    rm -rf ${GITDIR}
```

## ディレクトリ構成

```
.
├── webapp       # 各言語の参考実装
├── docs         # 競技用マニュアル
├── bench        # ベンチマーカー
├── provisioning # セットアップ用
├── development  # 開発用資材置場
└── extra        # その他のファイル
```

## JWT で利用する公開鍵・秘密鍵

ISUCON11 予選ではウェブアプリケーションのログインに JWT を利用しています。
JWT を生成・検証するための公開鍵・秘密鍵はそれぞれ以下に配置されています。

* bench/key/ec256-private.pem
* bench/key/ec256-public.pem
* webapp/ec256-public.pem (bench/key/ec256-public.pemのコピー)
* extra/jiaapi-mock/ec256-private.pem (bench/key/ec256-private.pemのコピー)

## ISUCON11 予選のインスタンスタイプ

* 競技者 VM * 3
    * InstanceType: c5.large
    * VolumeType: gp3 (20GB)
* ベンチ VM * 1
    * InstanceType: c4.xlarge
    * VolumeType: gp3 (20GB)

## AWS 上での過去問環境の構築方法

### 用意された AMI を利用する場合

[provisioning/cf-kakomon](./provisioning/cf-kakomon) を参照してください。なお AMI は ISUCON11 運営の解散を目処に公開を停止する予定です。上記イメージが参照不可である場合ひとつ下の手順で構築してください。

### AMI を自前で作成し構築する場合

手順準備中です。

#### git リポジトリに含まれていないファイルの配布

https://github.com/isucon/isucon11-qualify/releases/tag/public から取得できます

## Links

- [ISUCON11 予選レギュレーション](https://isucon.net/archives/55854734.html)
- [ISUCON11 予選当日マニュアル](./docs/manual.md)
- [ISUCON11 予選問題の解説と講評](https://isucon.net/archives/56044867.html)
- [ISUCON11 予選問題実践攻略法](https://isucon.net/archives/56082639.html)
