# ItaSlack

Slackを痛くする

![ItaSlack](./beatheart.png "ItaSlack")

***

1. 背景にする画像をbase64エンコード
1. itaSlack.jsの『let kImgBase64』にbase64データを代入
1. 『Slack.app/Contents/Resources/app.asar.unpacked/src/static/ssb-interop.js』にitaSlack.jsのプログラムをコピペ
1. メッセージ表示領域の背景に設定した画像が表示される

チャンネルリスト領域内に表示されるアイコンをクリックで，OnOff可能

<span style="font-size:20px">※</span> Slack ver3.3.3 で動作確認済み

***

#### 参考
https://qiita.com/orange634/items/7c0f2fa0f52ba493b8bd
