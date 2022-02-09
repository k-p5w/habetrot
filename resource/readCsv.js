// 公式サイトのサンプルに合ったコード。

// やること
// https://scrapbox.io/api/table/lolololol/三拍子年表/history.csv

'use strict';

const e = React.createElement;


// readCsvAPI is CSVファイルを読み込む関数
function readCsvAPI(callback) {

  var reader = new FileReader();
  // const csvURL = "https://scrapbox.io/api/table/lololololol/三拍子年表/history.csv";
  const csvURL ="https://scrapbox.io/api/table/cybernote/table記法/aaaa.csv"
  // let file = await fetch(csvURL).then(r => r);
  let csvdata =  fetch(csvURL, { method: 'GET' })
  if (!csvdata.ok) { // HTTP ステータスが 200-299 の場合
    alert("HTTP-Error: " + response.status);
  }
  // レスポンスの本文を取得(後述)
  let file =  csvdata.blob();
  reader.onload = function () {
    callback(reader.result);

    // var cols = reader.result.split('\n');
    // var data = [];
    // for (var i = 0; i < cols.length; i++) {
    //   data[i] = cols[i].split(',');
    // }
    // var insert = createTable(data);
    // result.appendChild(insert);
  }


  reader.readAsText(file);

}


class Csv2Table extends React.Component {

  constructor(props) {
    super(props);
    this.state = { liked: false };
  }


  // readCsvAPI()
  render() {
    return readCsvAPI()

  }
}

document.querySelectorAll('.history_Data_Area')
  .forEach(domContainer => {
    ReactDOM.render(
      e(Csv2Table),
      domContainer
    );
  });
