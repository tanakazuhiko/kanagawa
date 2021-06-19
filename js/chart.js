//======================================
// chart
//======================================
$(document).ready(
  function(){
    var chart_flag_2004 = false;
    var chart_flag_2007 = false;
    var chart_flag_2010 = false;
    var chart_flag_2013 = false;
    var chart_flag_graph1 = false;
    var chart_flag_graph2 = false;
    var chart_flag_graph3 = false;
    var chart_flag_graph4 = false;
    var chart_flag_graph5 = false;
    var chart_flag_graph6 = false;
    var chart_flag_graph7 = false;
    var chart_flag_rader = false;
    jQuery(window).scroll(
      function(){
        var cur_pos = $(document).scrollTop() + (window.innerHeight/2); // ディスプレイの半分の高さを追加
        var pos_2004 = $('#slide1').offset().top + 200;
        var pos_2007 = $('#slide2').offset().top + 200;
        var pos_2010 = $('#slide3').offset().top + 200;
        var pos_2013 = $('#slide4').offset().top + 200;
        var pos_graph1 = $('#slide5').offset().top + 200;
        var pos_graph2 = $('#slide5').offset().top + 230;
        var pos_graph3 = $('#slide5').offset().top + 260;
        var pos_graph4 = $('#slide5').offset().top + 290;
        var pos_graph5 = $('#slide5').offset().top + 320;
        var pos_graph6 = $('#slide5').offset().top + 325;
        var pos_graph7 = $('#slide5').offset().top + 330;
        var pos_rader = $('#slide8').offset().top + 200;
        if(cur_pos >= pos_2004 && chart_flag_2004 == false){
          console.log("2004");
          chart_flag_2004 = true;
          view_chart(1, 2004);
        }
        if(cur_pos >= pos_2007 && chart_flag_2007 == false){
          console.log("2007");
          chart_flag_2007 = true;
          view_chart(2, 2007);
        }
        if(cur_pos >= pos_2010 && chart_flag_2010 == false){
          console.log("2010");
          chart_flag_2010 = true;
          view_chart(3, 2010);
        }
        if(cur_pos >= pos_2013 && chart_flag_2013 == false){
          console.log("2013");
          chart_flag_2013 = true;
          view_chart(4, 2013);
        }
        if(cur_pos >= pos_graph1 && chart_flag_graph1 == false){
          console.log("graph");
          chart_flag_graph1 = true;
          view_bar();
          $('#btnList_1').trigger("click");
        }
        if(cur_pos >= pos_graph2 && chart_flag_graph2 == false){
          chart_flag_graph2 = true;
          $('#btnList_2').trigger("click");
        }
        if(cur_pos >= pos_graph3 && chart_flag_graph3 == false){
          chart_flag_graph3 = true;
          $('#btnList_3').trigger("click");
        }
        if(cur_pos >= pos_graph4 && chart_flag_graph4 == false){
          chart_flag_graph4 = true;
          $('#btnList_4').trigger("click");
        }
        if(cur_pos >= pos_graph5 && chart_flag_graph5 == false){
          chart_flag_graph5 = true;
          $('#btnList_5').trigger("click");
        }
        if(cur_pos >= pos_graph6 && chart_flag_graph6 == false){
          chart_flag_graph6 = true;
          $('#btnList_6').trigger("click");
        }
        if(cur_pos >= pos_graph7 && chart_flag_graph7 == false){
          chart_flag_graph7 = true;
          $('#btnList_7').trigger("click");
        }
        if(cur_pos >= pos_rader && chart_flag_rader == false){
          chart_flag_rader = true;
          view_rader();
        }
      }
    );
    // table.hover
    $(".desc3 td").hover(
      function(e){
        $(this).addClass('highlight');
        $(this).siblings().addClass('highlight');
      },
      function(){
        $(this).removeClass('highlight');
        $(this).siblings().removeClass('highlight');
      }
    );
  }
);
//======================================
// view_bar
//======================================
function view_bar(){
  opacity = 0.8;
  var party = {
    "自民党" : {
      backgroundColor : "rgba(59,74,131,"+opacity+")",
      data : [1217100, 895752, 982220, 1130652]
    },
    "公明党" : {
      backgroundColor : "rgba(101,146,192,"+opacity+")",
      data : [0, 691842, 0, 629662]
    },
    "日本維新の会" : {
      backgroundColor : "rgba(131,147,17,"+opacity+")",
      data : [0, 0, 0, 242462]
    },
    "みんなの党" : {
      backgroundColor : "rgba(208,104,0,"+opacity+")",
      data : [0, 0, 788729, 740207]
    },
    "民主党" : {
      backgroundColor : "rgba(165,41,42,"+opacity+")",
      data : [1700263, 1792399, 1441882, 461006]
    },
    "共産党" : {
      backgroundColor : "rgba(131,90,161,"+opacity+")",
      data : [397660, 385619, 304059, 444955]
    },
    "社民党" : {
      backgroundColor : "rgba(162,163,153,"+opacity+")",
      data : [254944, 128757, 113712, 76792]
    },
  };
  var index = [];
  var data = {
    labels : ["2004","2007","2010","2013"],
    datasets : []
  };
  $(".btnList li").live("click", function(){
    if($(this).hasClass("on")){
      $(this).removeClass("on");
      for(var i=0;i<index.length;i++){
        if($(this).hasClass(index[i])){
          data.datasets.splice(i,1);
          index.splice(i,1);
        }
      }
    } else {
      $(this).addClass("on");
      if($(this).hasClass("自民党")){
        data.datasets.push(party["自民党"]);
        index.push("自民党");
      } else if($(this).hasClass("公明党")){
        data.datasets.push(party["公明党"]);
        index.push("公明党");
      } else if($(this).hasClass("日本維新の会")){
        data.datasets.push(party["日本維新の会"]);
        index.push("日本維新の会");
      } else if($(this).hasClass("みんなの党")){
        data.datasets.push(party["みんなの党"]);
        index.push("みんなの党");
      } else if($(this).hasClass("民主党")){
        data.datasets.push(party["民主党"]);
        index.push("民主党");
      } else if($(this).hasClass("共産党")){
        data.datasets.push(party["共産党"]);
        index.push("共産党");
      } else if($(this).hasClass("社民党")){
        data.datasets.push(party["社民党"]);
        index.push("社民党");
      }
    }
    var options = {
      responsive: true,
      scales: {
        yAxes: [{
          display: true,
          ticks: {
            beginAtZero: true,
            max: 2000000,
          },
        }]
      },
      legend: {
        display: false,
      },
      animation: {
        duration: 2000,
      },
    }
    var chart_graph = new Chart(
      document.getElementById("chart_graph"),{
        type: 'bar',
        data: data,
        options: options,
      }
    );
  });
}
//======================================
// view_rader
//======================================
function view_rader(){
  var data = {
    "あさか 由香 " : {
      backgroundColor : "rgba(59,74,131,"+opacity+")",
      data : [1217100, 895752, 982220, 1130652]
    },
    "いき 愛子" : {
      backgroundColor : "rgba(101,146,192,"+opacity+")",
      data : [0, 691842, 0, 629662]
    },
    "かねこ 洋一" : {
      backgroundColor : "rgba(131,147,17,"+opacity+")",
      data : [0, 0, 0, 242462]
    },
    "中西 けんじ " : {
      backgroundColor : "rgba(208,104,0,"+opacity+")",
      data : [0, 0, 788729, 740207]
    },
    "丹羽 大" : {
      backgroundColor : "rgba(165,41,42,"+opacity+")",
      data : [1700263, 1792399, 1441882, 461006]
    },
    "真山 勇一 " : {
      backgroundColor : "rgba(131,90,161,"+opacity+")",
      data : [397660, 385619, 304059, 444955]
    },
    "三浦 のぶひろ" : {
      backgroundColor : "rgba(162,163,153,"+opacity+")",
      data : [254944, 128757, 113712, 76792]
    },
    "三原 じゅん子" : {
      backgroundColor : "rgba(162,163,153,"+opacity+")",
      data : [254944, 128757, 113712, 76792]
    },
    "森 ひでお" : {
      backgroundColor : "rgba(162,163,153,"+opacity+")",
      data : [254944, 128757, 113712, 76792]
    },
  };
  var options = {
    responsive: true,
    scales: {
      yAxes: [{
        display: true,
        ticks: {
          beginAtZero: true,
          max: 2000000,
        },
      }]
    },
    legend: {
      display: false,
    },
    animation: {
      duration: 2000,
    },
  }
  console.log("rader");
  var chart_rader = new Chart(
    document.getElementById("chart_rader"),{
      type: 'radar',
      data: data,
      options: options,
    }
  );
}
//======================================
// view_chart
//======================================
function view_chart(num, year){
  var canvas = document.getElementById("chart_" + year);
  var options = {
    legend: {
      display: false,
    },
    animation: {
      duration: 3000,
    },
    tooltips: {
      custom: function(tooltip) {
        $("."+year).removeClass('highlight');
        $("."+year).children().removeClass('highlight');
        var tooltipEl = $('.chartjs-tooltip');
        eval("var tooltipEl_" + year + "= $('#chartjs-tooltip_" + year + "');");
        if (!tooltip || !tooltip.body){
          tooltipEl.css({opacity: 0});
          return;
        };
        tooltipEl.removeClass('above below');
        tooltipEl.addClass(tooltip.yAlign);
        name = tooltip.body[0];
        var filtered = $.grep(
          $("[data-name-" + year + "]"),
          function(elem, index){
            if (elem.innerText.substr(0, 2).indexOf(name.substr(0, 2)) != -1){
              innerHtml = "";
              $("#" + year + "_" + index).addClass('highlight');
              $("#" + year + "_" + index).children().addClass('highlight');
              image = $("#" + year + "_" + index).attr("data-image");
              if (image != null){
                innerHtml = '<img src="./images/' + year + "_" + index + '.jpg" width="250px">';
              }
              eval("tooltipEl_" + year + ".html(innerHtml);");
              eval("tooltipEl_" + year + ".css({opacity: 0.8, left: tooltip.x + 320 + 'px', top: tooltip.y - 50 + 'px'});");
              return index;
            }
          }
        );
      }
    },
  }
  eval("var data = data_" + year + ";");
  eval("var chart_" + year + " = new Chart (canvas,{ type:'doughnut', data: data, options: options });");
}
//======================================
// data
//======================================
var data_2004 = {
  labels: [
    "小泉あきお (自民・当)",
    "あさお慶一郎 (民主・当)",
    "ちば景子 (民主・当)",
    "はたの君枝 (共産)",
    "上田けい子 (社民)",
    "まなべ一 (無)",
    "川久保 勲 (諸派)",
    "棄権",
    "無効",
  ],
  datasets: [{
    data: [
      1217100,
      856504,
      843759,
      397660,
      254944,
      71170,
      22275,
      3190255,
      154475,
    ],
    backgroundColor: [
      "#3B4A83",
      "#A5292A",
      "#A5292A",
      "#835AA1",
      "#A2A399",
      "#A2A399",
      "#A2A399",
      "#e4d2d8",
      "#c8c2c6",
    ],
  }]
};
var data_2007 = {
  labels: [
    "牧山ひろえ (民主・当)",
    "小林ゆたか (自民・当)",
    "水戸まさし (民主・当)",
    "松あきら (公明)",
    "はたの君枝 (共産)",
    "和田しげる (社民)",
    "斉藤さちこ (国民)",
    "溝口 敏盛 (新風)",
    "棄権",
    "無効",
  ],
  datasets: [{
    data: [
      1010866,
      895752,
      781533,
      691842,
      385619,
      128757,
      61219,
      21645,
      3137533,
      68881,
    ],
    backgroundColor: [
      "#A5292A",
      "#3B4A83",
      "#A5292A",
      "#6592C0",
      "#835AA1",
      "#A2A399",
      "#A2A399",
      "#A2A399",
      "#e4d2d8",
      "#c8c2c6",
    ],
  }]
};
var data_2010 = {
  labels: [
    "小泉あきお (自民・当)",
    "中西けんじ (みんな・当)",
    "かねこ洋一 (民主・当)",
    "ちば景子 (民主)",
    "はたの君枝 (共産)",
    "木村えい子 (社民)",
    "甲斐たかひろ (新党)",
    "松田まなぶ (たちあがれ)",
    "棄権",
    "無効",
  ],
  datasets: [{
    data: [
      982220,
      788729,
      745143,
      696739,
      304059,
      113712,
      113453,
      93437,
      3241618,
      154216,
    ],
    backgroundColor: [
      "#3B4A83",
      "#D06800",
      "#A5292A",
      "#A5292A",
      "#835AA1",
      "#A2A399",
      "#A2A399",
      "#A2A399",
      "#e4d2d8",
      "#c8c2c6",
    ],
  }]
};
var data_2013 = {
  labels: [
    "島村 大 (自民・当)",
    "松沢しげふみ (みんな・当)",
    "佐々木さやか (公明・当)",
    "牧山ひろえ (民主・当)",
    "はたの君枝 (共産)",
    "水戸まさし (維新)",
    "つゆき順一 (みどり)",
    "木村えい子 (社民)",
    "棄権",
    "無効",
  ],
  datasets: [{
    data: [
      1130652,
      740207,
      629662,
      461006,
      444955,
      242462,
      119633,
      76792,
      3353142,
      84790,
    ],
    backgroundColor: [
      "#3B4A83",
      "#D06800",
      "#6592C0",
      "#A5292A",
      "#835AA1",
      "#839311",
      "#A2A399",
      "#A2A399",
      "#e4d2d8",
      "#c8c2c6",
    ],
  }]
};
