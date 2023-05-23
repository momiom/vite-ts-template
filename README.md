# Vite + TS template

Vite と TS のライブラリ開発向けのテンプレート。

パッケージマネージャーには `pnpm` を利用。

## カスタマイズ方法

`./vite.config.js` で設定する。

```js
{
  // ...
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'lib', // 1
      formats: ['umd'], // 2
      fileName: (_) => 'lib.js' // 3
    }
  },
  // ...
}
```

1. script タグで読み込んだとき、ここで設定した名前がグローバルに利用できるようになる。
   `/src/main.ts` で export した関数等は `name` に設定した値のオブジェクトからアクセスできる。（今回の場合は `lib.hello()`）

2. モジュールの形式。サーバー側・クライアント側どちらでも動作する umd を利用。他に指定できるものは [ビルドオプション | Vite](https://ja.vitejs.dev/config/build-options.html#build-lib) を参照。

3. 出力されるファイル名。未指定の場合 `lib.umd.js` のようにモジュールの形式が含まれるようになる。

## 開発中の動作確認

`pnpm run dev` でサーバーを実行する。

`/index.html` には `/src/main.ts` が直接読み込まれており、ホットリロードされる。  
`/page/build.html` には `pnpm run build` によって作成された `/dist/lib.js` が読み込まれている。ソースを変更した場合は再度ビルドする必要がある。
