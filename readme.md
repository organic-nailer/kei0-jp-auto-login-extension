# keio.jp自動ログインくん

けいおーのアカウント及びCanvas LMSに自動ログインしてくれる拡張です

# 使い方

1. リポジトリをcloneしてくる/ZIPとかでダウンロードして展開する
2. フォルダ内の`login_keiojp.js`内にユーザ名とパスワードを直書きする

```js
const userId = "xxx@keio.jp";
const password = "12345abcxyz";
```

3. `chrome://extensions/`にアクセスして右上のデベロッパーモードをONにする
4. `パッケージ化されていない拡張機能を読み込む`から用意したディレクトリを選択する
5. `keio.jp`とかにアクセスしたときに自動ログインできる！
6. 