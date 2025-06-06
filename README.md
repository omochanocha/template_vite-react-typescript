# Vite+React+TypeScriptの環境構築用テンプレート

Vite+React+TypeScriptで始める環境のテンプレート

eslint, prettier, stylelintインストール済みで、コミットすると自動でリントと整形を行う。

## リポジトリ作成

右上の「Use this template」から「create a new repository」を押してリポジトリ作成

## asdfでnodeのインストール

1. `asdf list nodejsで`インストールしたnodeのバージョン一覧を確認
2. `asdf local nodejs [バージョン番号]`でローカルにnodeをインストール

## `node_modules`のインストール

リポジトリが作れたらローカルに`clone`し、`npm`で`node_modules`をインストールする

## npmパッケージのアップデート

アップデートを確認

```bash
ncu
```

アップデート実行

```bash
ncu -u
npm i
```
