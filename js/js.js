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
var data_2010 = {
  labels: [
    "小泉あきお(自・当)",
    "中西けんじ(み・当)",
    "かねこ洋一(民・当)",
    "ちば景子(民)",
    "はたの君枝(共)",
    "木村えい子(社)",
    "甲斐たかひろ(新)",
    "松田まなぶ(た)",
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

$(document).ready
(
  function($)
  {
    // chart
    var chart_flag_2013 = false;
    $(window).scroll
    (
      function()
      {
        view_chart(1, 2013);
      }
    );
    //===================================
    // pararax
    //===================================
    //initialise Stellar.js
    $(window).stellar();
    //Cache some variables
    slide = $('.slide');
    button = $('.button_base');
    mywindow = $(window);
    htmlbody = $('html,body');
    //Setup waypoints plugin
    slide.waypoint
    (
      function (event, direction)
      {
        //cache the variable of the data-slide attribute associated with each slide
        dataslide = $(this).attr('data-slide');
        //If the user scrolls up change the navigation link that has the same data-slide attribute as the slide to active and
        //remove the active class from the previous navigation link
        if (direction === 'down')
        {
          $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        }
        // else If the user scrolls down change the navigation link that has the same data-slide attribute as the slide to active and
        //remove the active class from the next navigation link
        else
        {
          $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
        }
      }
    );
    //waypoints doesnt detect the first slide when user scrolls back up to the top so we add this little bit of code, that removes the class
    //from navigation link slide 2 and adds it to navigation link slide 1.
    mywindow.scroll
    (
      function ()
      {
        if (mywindow.scrollTop() == 0)
        {
          // $('.navigation li[data-slide="1"]').addClass('active');
          // $('.navigation li[data-slide="2"]').removeClass('active');
        }
      }
    );
    //Create a function that will be passed a slide number and then will scroll to that slide using jquerys animate. The Jquery
    //easing plugin is also used, so we passed in the easing method of 'easeInOutQuint' which is available throught the plugin.
    function goToByScroll(dataslide)
    {
      htmlbody.animate
      (
        {
          scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 2000, 'easeInOutQuint'
      );
    }
    //When the user clicks on the button, get the get the data-slide attribute value of the button and pass that variable to the goToByScroll function
    button.click
    (
      function (e)
      {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
      }
    );
  }
);

function view_chart(num, year)
{
  var cur_pos = $(document).scrollTop() + (window.innerHeight/2);
  eval ("var pos_" + year + "=" + $('#slide'+num).offset().top + 150 + ";");
  if(cur_pos >= pos_2013 && chart_flag_2013 == false)
  {
    chart_flag_2013 = true;
    var canvas_2013 = document.getElementById("chart_2013");
    var options =
    {
      legend:
      {
        display: false,
      },
      tooltips:
      {
        titleMarginBottom: 10,
        custom: function(tooltip) {
          $(".2013").removeClass('highlight');
          $(".2013").children().removeClass('highlight');
          var tooltipEl = $('#chartjs-tooltip');
          if (!tooltip || !tooltip.body)
          {
            tooltipEl.css({
              opacity: 0
            });
            return;
          };
          tooltipEl.removeClass('above below');
          tooltipEl.addClass(tooltip.yAlign);
          name = tooltip.body[0];
          // var parts = tooltip.body[0].split(":");
          // var innerHtml = '<h1>' + parts[0].trim() + '</h1><span><b>' + Number(parts[1].trim()).toLocaleString() + '</b></span>';
          // console.log(innerHtml);
          // table
          var filtered = $.grep($("[data-name-2013]"),
          function(elem, index)
          {
            if (elem.innerText.substr(0, 2).indexOf(name.substr(0, 2)) != -1)
            {
              innerHtml = "";
              $("#2013_"+index).addClass('highlight');
              $("#2013_"+index).children().addClass('highlight');
              image = $("#2013_"+index).attr("data-image");
              if (image != null)
              innerHtml = '<img src="' + $("#2013_"+index).attr("data-image") + '" width="250px">';
              tooltipEl.html(innerHtml);
              tooltipEl.css({
                opacity: 0.8,
                left: tooltip.x + 320 + 'px',
                top: tooltip.y - 50 + 'px',
              });
              return index;
            }
          }
        );
      }
    },
  }
  var chart_2013 = new Chart
  (
    canvas_2013,
    {
      type:'doughnut',
      data: data_2013,
      options: options,
    }
  );
};

// table.hover
$(".desc3 td").hover
(
  function()
  {
    $(this).addClass('highlight');
    $(this).siblings().addClass('highlight');
  }, function()
  {
    $(this).removeClass('highlight');
    $(this).siblings().removeClass('highlight');
  }
);
