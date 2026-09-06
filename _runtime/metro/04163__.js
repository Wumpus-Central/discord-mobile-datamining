// _runtime/metro/04163__.js
import _mod4153 from "04153__.js";

const fn = function n(moment) {
  function translate(arg0, arg1, arg2, arg3) {
    switch (arg2) {
      case "s":
        if (arg3) {
          let str17 = "n\u00E9h\u00E1ny m\u00E1sodperc";
        } else {
          str17 = "n\u00E9h\u00E1ny m\u00E1sodperce";
        }
        return str17;
      case "ss":
        let tmp = arg3;
        if (!arg3) {
          tmp = arg1;
        }
        let str16 = " m\u00E1sodperce";
        if (arg0 + tmp) {
          str16 = " m\u00E1sodperc";
        }
        return str16;
      case "m":
        if (arg3) {
          let str14 = " perc";
        } else {
          str14 = " perce";
        }
        return "egy" + str14;
      case "mm":
        if (arg3) {
          let str13 = " perc";
        } else {
          str13 = " perce";
        }
        return arg0 + str13;
      case "h":
        if (arg3) {
          let str11 = " \u00F3ra";
        } else {
          str11 = " \u00F3r\u00E1ja";
        }
        return "egy" + str11;
      case "hh":
        if (arg3) {
          let str10 = " \u00F3ra";
        } else {
          str10 = " \u00F3r\u00E1ja";
        }
        return arg0 + str10;
      case "d":
        if (arg3) {
          let str8 = " nap";
        } else {
          str8 = " napja";
        }
        return "egy" + str8;
      case "dd":
        if (arg3) {
          let str7 = " nap";
        } else {
          str7 = " napja";
        }
        return arg0 + str7;
      case "M":
        if (arg3) {
          let str5 = " h\u00F3nap";
        } else {
          str5 = " h\u00F3napja";
        }
        return "egy" + str5;
      case "MM":
        if (arg3) {
          let str4 = " h\u00F3nap";
        } else {
          str4 = " h\u00F3napja";
        }
        return arg0 + str4;
      case "y":
        if (arg3) {
          let str2 = " \u00E9v";
        } else {
          str2 = " \u00E9ve";
        }
        return "egy" + str2;
      case "yy":
        if (arg3) {
          let str = " \u00E9v";
        } else {
          str = " \u00E9ve";
        }
        return arg0 + str;
      default:
        return "";
    }
  }
  function week(arg0) {
    let str = "[m\u00FAlt] ";
    if (arg0) {
      str = "";
    }
    return str + "[" + dependencyMap[this.day(this)] + "] LT[-kor]";
  }
  dependencyMap =
    "vas\u00E1rnap h\u00E9tf\u0151n kedden szerd\u00E1n cs\u00FCt\u00F6rt\u00F6k\u00F6n p\u00E9nteken szombaton".split(
      " ",
    );
  return moment.defineLocale("hu", {
    months:
      "janu\u00E1r_febru\u00E1r_m\u00E1rcius_\u00E1prilis_m\u00E1jus_j\u00FAnius_j\u00FAlius_augusztus_szeptember_okt\u00F3ber_november_december".split(
        "_",
      ),
    monthsShort: "jan._feb._m\u00E1rc._\u00E1pr._m\u00E1j._j\u00FAn._j\u00FAl._aug._szept._okt._nov._dec.".split("_"),
    monthsParseExact: true,
    weekdays: "vas\u00E1rnap_h\u00E9tf\u0151_kedd_szerda_cs\u00FCt\u00F6rt\u00F6k_p\u00E9ntek_szombat".split("_"),
    weekdaysShort: "vas_h\u00E9t_kedd_sze_cs\u00FCt_p\u00E9n_szo".split("_"),
    weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "YYYY.MM.DD.",
      LL: "YYYY. MMMM D.",
      LLL: "YYYY. MMMM D. H:mm",
      LLLL: "YYYY. MMMM D., dddd H:mm",
    },
    meridiemParse: /de|du/i,
    isPM(str) {
      return "u" === str.charAt(1).toLowerCase();
    },
    meridiem(arg0, arg1, arg2) {
      if (arg0 < 12) {
        let str2 = "DE";
        if (true === arg2) {
          str2 = "de";
        }
        let str = str2;
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
        const self = this;
        const call = week.call;
        if (typeof call === "unknown") {
          let text = `${"[" + closure_0[self.day(self)]}] LT[-kor]`;
        } else {
          text = call(self, true);
        }
        return text;
      },
      lastDay: "[tegnap] LT[-kor]",
      lastWeek() {
        const self = this;
        const call = week.call;
        if (typeof call === "unknown") {
          let text = `${"[m\u00FAlt] [" + closure_0[self.day(self)]}] LT[-kor]`;
        } else {
          text = call(self, false);
        }
        return text;
      },
      sameElse: "L",
    },
    relativeTime: {
      future: "%s m\u00FAlva",
      past: "%s",
      s: translate,
      ss: translate,
      m: translate,
      mm: translate,
      h: translate,
      hh: translate,
      d: translate,
      dd: translate,
      M: translate,
      MM: translate,
      y: translate,
      yy: translate,
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: { dow: 1, doy: 4 },
  });
};
if (typeof exports === "object") {
  if (undefined !== module) {
    if (typeof require === "function") {
      fn(_mod4153);
    }
  }
}
if (typeof globalThis.define === "function") {
  if (globalThis.define.amd) {
    globalThis.define(["../moment"], fn);
  }
}
fn(this.moment);
