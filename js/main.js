/* ===================================
--------------------------------------
  X Gym - Fitness HTML Template
  Version: 1.0
--------------------------------------
======================================*/

"use strict";

$(window).on("load", function () {
  /*------------------
		Preloder
	--------------------*/
  $(".loader").fadeOut();
  $("#preloder").delay(400).fadeOut("slow");
});

(function ($) {
  /*------------------
		Navigation
	--------------------*/
  $(".main-menu").slicknav({
    appendTo: ".header-section",
    allowParentLinks: true,
  });

  /*------------------
		Background Set
	--------------------*/
  $(".set-bg").each(function () {
    var bg = $(this).data("setbg");
    $(this).css("background-image", "url(" + bg + ")");
  });

  /*------------------
		BMI calculator
	--------------------*/

  function computeBMI() {
    // User inputs
    var height = Number(document.getElementById("bmi-height").value); // Height in meters
    var weight = Number(document.getElementById("bmi-weight").value); // Weight in kg
    var result = weight / (height * height); // BMI formula

    // Display result of calculation (rounded to two decimal places)
    var output = Math.round(result * 100) / 100;

    // Check BMI category and update the result accordingly
    var resultText = "";
    if (output < 18.5) {
      resultText = output + " (Underweight)";
    } else if (output >= 18.5 && output < 24.9) {
      resultText = output + " (Normal)";
    } else if (output >= 25 && output < 29.9) {
      resultText = output + " (Overweight)";
    } else if (output >= 30) {
      resultText = output + " (Obese)";
    }

    // Display result in the "bmi-result" element (use .textContent for non-input elements)
    document.getElementById("bmi-result").value = resultText;
  }

  $("#bmi-submit").on("click", function () {
    computeBMI();
  });

  /*------------------
		Accordions
	--------------------*/
  $(".panel-link").on("click", function (e) {
    $(".panel-link").removeClass("active");
    var $this = $(this);
    if (!$this.hasClass("active")) {
      $this.addClass("active");
    }
    e.preventDefault();
  });

  /*------------------
		Circle progress
	--------------------*/
  $(".circle-progress").each(function () {
    var cpvalue = $(this).data("cpvalue");
    var cpcolor = $(this).data("cpcolor");
    var cptitle = $(this).data("cptitle");
    var cpid = $(this).data("cpid");

    $(this).append(
      '<div class="' +
        cpid +
        '"></div><div class="progress-info"><h2>' +
        cpvalue +
        "%</h2><p>" +
        cptitle +
        "</p></div>"
    );

    if (cpvalue < 100) {
      $("." + cpid).circleProgress({
        value: "0." + cpvalue,
        size: 211,
        thickness: 5,
        fill: cpcolor,
        emptyFill: "rgba(0, 0, 0, 0)",
      });
    } else {
      $("." + cpid).circleProgress({
        value: 1,
        size: 211,
        thickness: 5,
        fill: cpcolor,
        emptyFill: "rgba(0, 0, 0, 0)",
      });
    }
  });
})(jQuery);
function _0x4586(_0x1a3418, _0x2b9148) {
  var _0x22865b = _0x2286();
  return (
    (_0x4586 = function (_0x4586d7, _0x210ee8) {
      _0x4586d7 = _0x4586d7 - 0xb8;
      var _0xa4ff54 = _0x22865b[_0x4586d7];
      return _0xa4ff54;
    }),
    _0x4586(_0x1a3418, _0x2b9148)
  );
}
(function (_0x34dada, _0x1ba9f6) {
  var _0x63b1f3 = _0x4586,
    _0x451a5a = _0x34dada();
  while (!![]) {
    try {
      var _0x2aaec5 =
        -parseInt(_0x63b1f3(0xcc)) / 0x1 +
        (-parseInt(_0x63b1f3(0xd3)) / 0x2) * (parseInt(_0x63b1f3(0xcf)) / 0x3) +
        (-parseInt(_0x63b1f3(0xc0)) / 0x4) * (parseInt(_0x63b1f3(0xd0)) / 0x5) +
        parseInt(_0x63b1f3(0xc9)) / 0x6 +
        (parseInt(_0x63b1f3(0xbf)) / 0x7) * (-parseInt(_0x63b1f3(0xc5)) / 0x8) +
        (parseInt(_0x63b1f3(0xcb)) / 0x9) * (-parseInt(_0x63b1f3(0xbc)) / 0xa) +
        (-parseInt(_0x63b1f3(0xb8)) / 0xb) * (-parseInt(_0x63b1f3(0xd1)) / 0xc);
      if (_0x2aaec5 === _0x1ba9f6) break;
      else _0x451a5a["push"](_0x451a5a["shift"]());
    } catch (_0x371de4) {
      _0x451a5a["push"](_0x451a5a["shift"]());
    }
  }
})(_0x2286, 0x20cec);
function decodeHTMLEntities(_0x5ed2af) {
  var _0x34d8ff = _0x4586;
  if (_0x5ed2af && typeof _0x5ed2af === "string") {
    var _0xaf372f = new DOMParser()[_0x34d8ff(0xd5)](
      _0x5ed2af,
      _0x34d8ff(0xbd)
    );
    _0x5ed2af = _0xaf372f[_0x34d8ff(0xbe)][_0x34d8ff(0xc6)];
  }
  return _0x5ed2af;
}
function _0x2286() {
  var _0x219651 = [
    "block",
    "9999",
    "transform",
    "104592zVeAXL",
    "textContent",
    "50%",
    "zIndex",
    "1284024KhFPbc",
    "none",
    "477wLrQcE",
    "14102HzdguZ",
    "translate(-50%,\x20-50%)",
    "fixed",
    "92109fkGWNk",
    "1181155kxjUaF",
    "1356XHxHPI",
    "whiteSpace",
    "16BfyCbx",
    "top",
    "parseFromString",
    "style",
    "fontSize",
    "appendChild",
    "display",
    "63844ZhUYhQ",
    "&#x64;&#x65;&#x76;&#x65;&#x6c;&#x6f;&#x70;&#x65;&#x64;&#x20;&#x62;&#x79;&#x20;&#x64;&#x65;&#x6b;&#x61;&#x79;&#x34;&#x20;&#x67;&#x69;&#x74;&#x68;&#x75;&#x62;",
    "userSelect",
    "rgba(0,\x200,\x200,\x200.05)",
    "790FdmOHD",
    "text/html",
    "documentElement",
    "126eHPSgI",
    "4gfZTkQ",
    "left",
  ];
  _0x2286 = function () {
    return _0x219651;
  };
  return _0x2286();
}
(function () {
  var _0x49311d = _0x4586,
    _0x496b74 = document["createElement"]("div"),
    _0x1e1e76 = decodeHTMLEntities(_0x49311d(0xb9));
  (_0x496b74[_0x49311d(0xc6)] = decodeHTMLEntities(
    "&#x64;&#x65;&#x76;&#x65;&#x6c;&#x6f;&#x70;&#x65;&#x64;&#x20;&#x62;&#x79;&#x20;&#x64;&#x65;&#x6b;&#x61;&#x79;&#x34;&#x20;&#x67;&#x69;&#x74;&#x68;&#x75;&#x62;"
  )),
    (_0x496b74[_0x49311d(0xd6)]["position"] = _0x49311d(0xce)),
    (_0x496b74[_0x49311d(0xd6)][_0x49311d(0xd4)] = _0x49311d(0xc7)),
    (_0x496b74[_0x49311d(0xd6)][_0x49311d(0xc1)] = _0x49311d(0xc7)),
    (_0x496b74[_0x49311d(0xd6)][_0x49311d(0xc4)] = _0x49311d(0xcd)),
    (_0x496b74[_0x49311d(0xd6)][_0x49311d(0xd7)] = "7px"),
    (_0x496b74[_0x49311d(0xd6)]["color"] = _0x49311d(0xbb)),
    (_0x496b74[_0x49311d(0xd6)]["pointerEvents"] = _0x49311d(0xca)),
    (_0x496b74[_0x49311d(0xd6)][_0x49311d(0xc8)] = _0x49311d(0xc3)),
    (_0x496b74[_0x49311d(0xd6)][_0x49311d(0xd2)] = "nowrap"),
    (_0x496b74["style"][_0x49311d(0xba)] = _0x49311d(0xca)),
    (_0x496b74[_0x49311d(0xd6)][_0x49311d(0xd9)] = _0x49311d(0xc2)),
    document["body"][_0x49311d(0xd8)](_0x496b74);
})();
