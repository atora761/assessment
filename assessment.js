'use strict';
/*変数宣言*/
const userNameInput=document.getElementById('userName');/*inputのオブジェクトを取得する*/
const assessmentButton=document.getElementById('assessment');/*buttonのオブジェクトを取得する*/
const resultDivided=document.getElementById('result-area');/*resultのオブジェクトを取得する*/
const tweetDivided=document.getElementById('tweet-area');/*tweetのオブジェクトを取得する*/
const answers=[/*constは定数宣言*/
  '{userName}のいいところは声です。{userName}の特徴的な声は皆を惹きつけ、心に残ります。',
  '{userName}のいいところはまなざしです。{userName}に見つめられた人は気になって仕方ないでしょう。',
  '{userName}のいいところは情熱です。{userName}の情熱に周りの人は感化されます。',
  '{userName}のいいところは厳しさです。{userName}の厳しさが物事をいつも成功に導きます。',
  '{userName}のいいところは知識です。博識な{userName}を多くの人が頼りにしています。',
  '{userName}のいいところはユニークさです。{userName}だけのその特徴が皆を楽しくさせます。',
  '{userName}のいいところは用心深さです。{userName}の洞察に、多くの人が助けられる人がいます。',
  '{userName}のいいところは見た目です。内側から溢れ出る{userName}のよさに皆が気を惹かれます。',
  '{userName}のいいところは決断力です。{userName}がする決断にいつも助けられる人がいます。',
  '{userName}のいいところは思いやりです。{userName}に気をかけてもらった多くの人が感謝しています。',
  '{userName}のいいところは感受性です。{userName}が感じたことに皆が共感し、分かり合うことができます。',
  '{userName}のいいところは節度です。強引過ぎない{userName}の考えに皆が感謝しています。',
  '{userName}のいいところは好奇心です。新しいことに向かっていく{userName}の心構えが多くの人に魅力的に映ります',
  '{userName}のいいところは気配りです。{userName}の配慮が多くの人を救っています。',
  '{userName}のいいところはそのすべてです。ありのままの{userName}自身がいいところなのです。',
  '{userName}のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる{userName}が皆から評価されています。'
  '{userName}のいいところは優しさです。{userName}の優しい雰囲気や立ち振る舞いに多くの人が癒やされています。'
];
//main処理
/*診断するボタンを押された後の処理*/
assessmentButton.onclick = ()=>{/*assessmentButton.onclickに関数設定*/
  const userName=userNameInput.value;
  if(userName.lenghth===0){
    return;/*空だった場合プログラム終了*/
  }

  removeAllChildren(resultDivided);
  const header=document.createElement('h3');/*Java scriptからhtml文を作る(documentオブジェクトのcreateElementでhtml文を作るとwriteと違いタグ指定できる)*/
  header.innerText='診断結果';//h3タグの中身設定
  resultDivided.appendChild(header);//h3をresultDividedのdivの見出し要素として追加

  const paragraph=document.createElement('p');
  const result=assessment(userName);/*グローバル関数*/
  paragraph.innerText=result;/*pタグの中身設定*/
  resultDivided.appendChild(paragraph);//pをresultDividedのdivの見出し要素として追加

  removeAllChildren(tweetDivided);

};


/*グローバル関数*/
function assessment(userName){
  let sum0fCharCode=0;/*letとはスコープ内だけで有効な変数宣言*/
  for(let i=0; i < userName.length; i++) {/*入力された名前の文字コードを足し合わせる*/
    sum0fCharCode=sum0fCharCode + userName.charCodeAt(i);/*charCodeで文字コード番号を取得する*/
  }
  const index = sum0fCharCode % answers.length;/*lengthプロパティをつけると配列の要素数を取得する*/
  let result = answers[index];
  result=result.replace(/\{userName\}/g,userName);/*\を{の前につけることでその記号を探索する　replaceで文字置換*/
  return result;
}

//見出し全削除関数
function removeAllChildren(element){
  while(element.firstChild){
    element.removeChild(element.firstChild);//removeChileは指定された子要素を削除する関数
  }
}

/*テストコード*/
console.assert(
  assessment('太郎')==='太郎のいいところは決断力です。太郎がする決断にいつも助けられる人がいます。',
  '診断結果の文言の特定に部分を名前に置き換える処理が正しくありません。'
);
console.assert(
  assessment('太郎')===assessment('太郎'),
  '入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。'
);
