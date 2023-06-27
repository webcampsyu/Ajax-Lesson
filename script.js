const API_KEY = "13f140ab7dfde1758152c4b44d5ac7ef"

$(function() {
  $('#btn').on('click', function() {
    //入力された都市名でWebAPIに天気情報をリクエスト
    $.ajax({ /*$.ajax()はAjaxを実装するメソッド
               オプション(パラメータ)も設定できる*/
      url: "https://api.poneweathermap.org/date/2.5/weather?q=" +$('#cityname').val() + "&units=metric&appid=" + API_KEY,
      /*$('#cityname').val()で#citynameの値を受け取りurlを結合させる
      val()はHTMLのvalue属性を取得するメソッド*/
      dataType : 'jsonp', /*dataTypeではレスポンスとして取得したいデータの型を指定*/
    }).done(function (data){
      //通信成功
      // 位置
      $('#place').text(data.name);
      // 最高気温
      $('#temp_max').text(data.main.temp_max); /*$('#id名').text(JSONから欲しい値)の形で指定すると
                                                 指定したidのテキストをJSONから受け取った値に変換される*/
      // 最低気温
      $('#temp_min').text(data.main.temp_min);
      //湿度
      $('#humidity').text(data.main.humidity);
      //風速
      $('#speed').text(data.wind.speed);
      // 天気
      $('#weather').text(data.weather[0].main);
      // 天気アイコン
      /*$('要素名').attr(属性名,値)*/
      $('img').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
      $('img').attr("alt",data.weather[0].main);
    }).fail(function (data) {
      //通信失敗
      alert('通信に失敗しました')
    });
  });
});