// _runtime/04092_n.js
import hooks from "04075_hooks.js";

const fn = function n(moment) {
  function translate(arg0, arg1, arg2) {
    const text = `${arg0} `;
    if ("ss" === arg2) {
      const result = arg0 % 10;
      let tmp13 = result < 5;
      if (result < 5) {
        tmp13 = arg0 % 10 > 1;
      }
      if (tmp13) {
        tmp13 = (~~arg0 / 10) % 10 !== 1;
      }
      let str9 = "sekund";
      if (tmp13) {
        str9 = "sekundy";
      }
      return text + str9;
    } else if ("m" === arg2) {
      let str8 = "minut\u0119";
      if (arg1) {
        str8 = "minuta";
      }
      return str8;
    } else if ("mm" === arg2) {
      const result1 = arg0 % 10;
      let tmp11 = result1 < 5;
      if (result1 < 5) {
        tmp11 = arg0 % 10 > 1;
      }
      if (tmp11) {
        tmp11 = (~~arg0 / 10) % 10 !== 1;
      }
      let str7 = "minut";
      if (tmp11) {
        str7 = "minuty";
      }
      return text + str7;
    } else if ("h" === arg2) {
      let str6 = "godzin\u0119";
      if (arg1) {
        str6 = "godzina";
      }
      return str6;
    } else if ("hh" === arg2) {
      const result2 = arg0 % 10;
      let tmp9 = result2 < 5;
      if (result2 < 5) {
        tmp9 = arg0 % 10 > 1;
      }
      if (tmp9) {
        tmp9 = (~~arg0 / 10) % 10 !== 1;
      }
      let str5 = "godzin";
      if (tmp9) {
        str5 = "godziny";
      }
      return text + str5;
    } else if ("ww" === arg2) {
      const result3 = arg0 % 10;
      let tmp7 = result3 < 5;
      if (result3 < 5) {
        tmp7 = arg0 % 10 > 1;
      }
      if (tmp7) {
        tmp7 = (~~arg0 / 10) % 10 !== 1;
      }
      let str4 = "tygodni";
      if (tmp7) {
        str4 = "tygodnie";
      }
      return text + str4;
    } else if ("MM" === arg2) {
      const result4 = arg0 % 10;
      let tmp5 = result4 < 5;
      if (result4 < 5) {
        tmp5 = arg0 % 10 > 1;
      }
      if (tmp5) {
        tmp5 = (~~arg0 / 10) % 10 !== 1;
      }
      let str3 = "miesi\u0119cy";
      if (tmp5) {
        str3 = "miesi\u0105ce";
      }
      return text + str3;
    } else if ("yy" === arg2) {
      const result5 = arg0 % 10;
      let tmp3 = result5 < 5;
      if (result5 < 5) {
        tmp3 = arg0 % 10 > 1;
      }
      if (tmp3) {
        tmp3 = (~~arg0 / 10) % 10 !== 1;
      }
      let str2 = "lat";
      if (tmp3) {
        str2 = "lata";
      }
      return text + str2;
    }
  }
  closure_0 =
    "stycze\u0144_luty_marzec_kwiecie\u0144_maj_czerwiec_lipiec_sierpie\u0144_wrzesie\u0144_pa\u017Adziernik_listopad_grudzie\u0144".split(
      "_",
    );
  closure_1 =
    "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrze\u015Bnia_pa\u017Adziernika_listopada_grudnia".split(
      "_",
    );
  const items = [
    /^sty/i,
    /^lut/i,
    /^mar/i,
    /^kwi/i,
    /^maj/i,
    /^cze/i,
    /^lip/i,
    /^sie/i,
    /^wrz/i,
    /^paź/i,
    /^lis/i,
    /^gru/i,
  ];
  obj = {
    months(arg0, arg1) {
      if (arg0) {
        if (obj.test(arg1)) {
          let tmp3 = table2[arg0.month(arg0)];
        } else {
          tmp3 = table[arg0.month(arg0)];
        }
        obj = /D MMMM/;
      } else {
        return table;
      }
    },
    monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_pa\u017A_lis_gru".split("_"),
    monthsParse: items,
    longMonthsParse: items,
    shortMonthsParse: items,
    weekdays: "niedziela_poniedzia\u0142ek_wtorek_\u015Broda_czwartek_pi\u0105tek_sobota".split("_"),
    weekdaysShort: "ndz_pon_wt_\u015Br_czw_pt_sob".split("_"),
    weekdaysMin: "Nd_Pn_Wt_\u015Ar_Cz_Pt_So".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm",
    },
    calendar: obj,
    relativeTime: {
      future: "za %s",
      past: "%s temu",
      s: "kilka sekund",
      ss: translate,
      m: translate,
      mm: translate,
      h: translate,
      hh: translate,
      d: "1 dzie\u0144",
      dd: "%d dni",
      w: "tydzie\u0144",
      ww: translate,
      M: "miesi\u0105c",
      MM: translate,
      y: "rok",
      yy: translate,
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: { dow: 1, doy: 4 },
  };
  obj = {
    sameDay: "[Dzi\u015B o] LT",
    nextDay: "[Jutro o] LT",
    nextWeek() {
      const dayResult = this.day();
      if (0 === dayResult) {
        return "[W niedziel\u0119 o] LT";
      } else if (2 === dayResult) {
        return "[We wtorek o] LT";
      } else if (3 === dayResult) {
        return "[W \u015Brod\u0119 o] LT";
      } else if (6 === dayResult) {
        return "[W sobot\u0119 o] LT";
      } else {
        return "[W] dddd [o] LT";
      }
    },
    lastDay: "[Wczoraj o] LT",
    lastWeek() {
      const dayResult = this.day();
      if (0 === dayResult) {
        return "[W zesz\u0142\u0105 niedziel\u0119 o] LT";
      } else if (3 === dayResult) {
        return "[W zesz\u0142\u0105 \u015Brod\u0119 o] LT";
      } else if (6 === dayResult) {
        return "[W zesz\u0142\u0105 sobot\u0119 o] LT";
      } else {
        return "[W zesz\u0142y] dddd [o] LT";
      }
    },
    sameElse: "L",
  };
  return moment.defineLocale("pl", obj);
};
if (typeof exports === "object") {
  if (undefined !== module) {
    if (typeof require === "function") {
      fn(hooks);
    }
  }
}
if (typeof globalThis.define === "function") {
  if (globalThis.define.amd) {
    globalThis.define(["../moment"], fn);
  }
}
fn(this.moment);
