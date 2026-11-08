/*
 * 入口ページ（index.html）が開く相談者アプリの URL（Google Apps Script の Web アプリ。…/exec）。
 * デプロイの ID が変わったら、ここだけを直す。秘密の値ではない（QR コードを読めば分かる URL）。
 * いまの値はテスト環境の相談者アプリ（2026-11-08）。本番に切り替えるときは、本番の相談者アプリの URL に置き換える。
 */
window.ENTRY_APPS = {
  DE: 'https://script.google.com/macros/s/AKfycbyuVfz5qrDKi73xJnIpLQwWGiYWLAyn51ckmJd-f9Aea8BbT8dOHnRARdSpJyc9w2xQ5g/exec',
  DJ: 'https://script.google.com/macros/s/AKfycbwwTZC1KqCeIU-AuEnF_Q8SWZitX8avIj_YgdU75f9UNnE254LXGuWKhTFJ9LKLidV7/exec',
  DH: 'https://script.google.com/macros/s/AKfycbxTuVOrJZC-EjXuqtxChuIKry_I9zJFT_L1OumzmoPEFdHqls3_xfdu448S91FIcIMXAQ/exec',
  W: 'https://script.google.com/macros/s/AKfycbzHZcpRON9pTh9_I1q9ZP4LQQC9Nwc2h4DekT5qBJnRrzD-tMvYV_a3_mUIqsOROMwlqw/exec',
  L: 'https://script.google.com/macros/s/AKfycbzD5udKyGMAlrbfpOgX23Cb02b1up_olv4MRpr-ErO1NUHaNZpz7gWsOMnMr4B53VIPzQ/exec'
};
