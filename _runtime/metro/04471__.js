// === Module 4471: ? ===

// Module 4471
import _mod4461 from "module_4461" /* 4461 */;

const fn = function n(moment) {
  function translate(arg0, arg1, arg2, arg3) {
    switch (arg2) {
      case "s":
      {
        let str17;
        if (arg3) {
          str17 = "n\u00E9h\u00E1ny m\u00E1sodperc";
        } else {
          str17 = "n\u00E9h\u00E1ny m\u00E1sodperce";
        }
        return str17;
      }
      case "ss":
      {
        let str16 = " m\u00E1sodperce";
        const tmp = arg3 || arg1;
        if (arg0 + tmp) {
          str16 = " m\u00E1sodperc";
        }
        return str16;
      }
      case "m":
      {
        let str14;
        if (arg3) {
          str14 = " perc";
        } else {
          str14 = " perce";
        }
        return "egy" + str14;
      }
      case "mm":
      {
        let str13;
        if (arg3) {
          str13 = " perc";
        } else {
          str13 = " perce";
        }
        return arg0 + str13;
      }
      case "h":
      {
        let str11;
        if (arg3) {
          str11 = " \u00F3ra";
        } else {
          str11 = " \u00F3r\u00E1ja";
        }
        return "egy" + str11;
      }
      case "hh":
      {
        let str10;
        if (arg3) {
          str10 = " \u00F3ra";
        } else {
          str10 = " \u00F3r\u00E1ja";
        }
        return arg0 + str10;
      }
      case "d":
      {
        let str8;
        if (arg3) {
          str8 = " nap";
        } else {
          str8 = " napja";
        }
        return "egy" + str8;
      }
      case "dd":
      {
        let str7;
        if (arg3) {
          str7 = " nap";
        } else {
          str7 = " napja";
        }
        return arg0 + str7;
      }
      case "M":
      {
        let str5;
        if (arg3) {
          str5 = " h\u00F3nap";
        } else {
          str5 = " h\u00F3napja";
        }
        return "egy" + str5;
      }
      case "MM":
      {
        let str4;
        if (arg3) {
          str4 = " h\u00F3nap";
        } else {
          str4 = " h\u00F3napja";
        }
        return arg0 + str4;
      }
      case "y":
      {
        let str2;
        if (arg3) {
          str2 = " \u00E9v";
        } else {
          str2 = " \u00E9ve";
        }
        return "egy" + str2;
      }
      case "yy":
      {
        let str;
        if (arg3) {
          str = " \u00E9v";
        } else {
          str = " \u00E9ve";
        }
        return arg0 + str;
      }
      default:
      {
        return "";
      }
    }
  }
  function week(arg0) {
    let str = "[m\u00FAlt] ";
    const tmp = arg0;
    if (tmp) {
      str = "";
    }
    return str + "[" + closure_0[this.day(this)] + "] LT[-kor]";
  }
  let closure_0 = "vas\u00E1rnap h\u00E9tf\u0151n kedden szerd\u00E1n cs\u00FCt\u00F6rt\u00F6k\u00F6n p\u00E9nteken szombaton".split(" ");
  const obj = {
    months: "janu\u00E1r_febru\u00E1r_m\u00E1rcius_\u00E1prilis_m\u00E1jus_j\u00FAnius_j\u00FAlius_augusztus_szeptember_okt\u00F3ber_november_december".split("_"),
    monthsShort: "jan._feb._m\u00E1rc._\u00E1pr._m\u00E1j._j\u00FAn._j\u00FAl._aug._szept._okt._nov._dec.".split("_"),
    monthsParseExact: true,
    weekdays: "vas\u00E1rnap_h\u00E9tf\u0151_kedd_szerda_cs\u00FCt\u00F6rt\u00F6k_p\u00E9ntek_szombat".split("_"),
    weekdaysShort: "vas_h\u00E9t_kedd_sze_cs\u00FCt_p\u00E9n_szo".split("_"),
    weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
    longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "YYYY.MM.DD.", LL: "YYYY. MMMM D.", LLL: "YYYY. MMMM D. H:mm", LLLL: "YYYY. MMMM D., dddd H:mm" },
    meridiemParse: /de|du/i,
    isPM(str) {
      str = str.charAt(1);
      return "u" === str.toLowerCase();
    },
    meridiem(arg0, arg1, arg2) {
      let str;
      if (arg0 < 12) {
        let str2 = "DE";
        if (true === arg2) {
          str2 = "de";
        }
        str = str2;
      } else {
        str = "DU";
        if (true === arg2) {
          str = "du";
        }
      }
      return str;
    },
    calendar: {
      sameDay: "[ma] LT[-kor]",
      nextDay: "[holnap] LT[-kor]",
      nextWeek() {
        return week.call(this, true);
      },
      lastDay: "[tegnap] LT[-kor]",
      lastWeek() {
        return week.call(this, false);
      },
      sameElse: "L"
    },
    relativeTime: { future: "%s m\u00FAlva", past: "%s", s: translate, ss: translate, m: translate, mm: translate, h: translate, hh: translate, d: translate, dd: translate, M: translate, MM: translate, y: translate, yy: translate },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: { dow: 1, doy: 4 }
  };
  return moment.defineLocale("hu", obj);
};
if (typeof exports === "object") {
  if (undefined !== module) {
    if (typeof require === "function") {
      fn(_mod4461);
    }
  }
}
if (typeof globalThis.define === "function") {
  const define2 = globalThis.define;
  if (globalThis.define.amd) {
    globalThis.define(["../moment"], fn);
  }
}
fn(this.moment);