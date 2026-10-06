// _runtime/metro/04492__.js
import _mod4467 from "04467__.js";

let split;
let split2;
function isPM(arg0) {
  const obj = /^ch$/i;
  return obj.test(arg0);
}
function meridiem(arg0, arg1, arg2) {
  let str;
  if (arg0 < 12) {
    let str2 = "SA";
    if (arg2) {
      str2 = "sa";
    }
    str = str2;
  } else {
    str = "CH";
    if (arg2) {
      str = "ch";
    }
  }
  return str;
}
function ordinal(arg0) {
  return arg0;
}
if (typeof exports === "object") {
  if (undefined !== module) {
    if (typeof require === "function") {
      const _module = _mod4467;
      let str =
        "th\u00E1ng 1_th\u00E1ng 2_th\u00E1ng 3_th\u00E1ng 4_th\u00E1ng 5_th\u00E1ng 6_th\u00E1ng 7_th\u00E1ng 8_th\u00E1ng 9_th\u00E1ng 10_th\u00E1ng 11_th\u00E1ng 12";
      const split3 =
        "th\u00E1ng 1_th\u00E1ng 2_th\u00E1ng 3_th\u00E1ng 4_th\u00E1ng 5_th\u00E1ng 6_th\u00E1ng 7_th\u00E1ng 8_th\u00E1ng 9_th\u00E1ng 10_th\u00E1ng 11_th\u00E1ng 12"
          .split;
      let str2 = "_";
      const defineLocale = _module.defineLocale;
      const split4 = "Thg 01_Thg 02_Thg 03_Thg 04_Thg 05_Thg 06_Thg 07_Thg 08_Thg 09_Thg 10_Thg 11_Thg 12".split;
      const split5 =
        "ch\u1EE7 nh\u1EADt_th\u1EE9 hai_th\u1EE9 ba_th\u1EE9 t\u01B0_th\u1EE9 n\u0103m_th\u1EE9 s\u00E1u_th\u1EE9 b\u1EA3y"
          .split;
      const split6 = "CN_T2_T3_T4_T5_T6_T7".split;
      const split7 = "CN_T2_T3_T4_T5_T6_T7".split;
      const obj2 = {
        months:
          "th\u00E1ng 1_th\u00E1ng 2_th\u00E1ng 3_th\u00E1ng 4_th\u00E1ng 5_th\u00E1ng 6_th\u00E1ng 7_th\u00E1ng 8_th\u00E1ng 9_th\u00E1ng 10_th\u00E1ng 11_th\u00E1ng 12".split(
            "_",
          ),
        monthsShort: "Thg 01_Thg 02_Thg 03_Thg 04_Thg 05_Thg 06_Thg 07_Thg 08_Thg 09_Thg 10_Thg 11_Thg 12".split("_"),
        monthsParseExact: true,
        weekdays:
          "ch\u1EE7 nh\u1EADt_th\u1EE9 hai_th\u1EE9 ba_th\u1EE9 t\u01B0_th\u1EE9 n\u0103m_th\u1EE9 s\u00E1u_th\u1EE9 b\u1EA3y".split(
            "_",
          ),
        weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
        weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
        weekdaysParseExact: true,
        meridiemParse: /sa|ch/i,
        isPM,
        meridiem,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM [n\u0103m] YYYY",
          LLL: "D MMMM [n\u0103m] YYYY HH:mm",
          LLLL: "dddd, D MMMM [n\u0103m] YYYY HH:mm",
          l: "DD/M/YYYY",
          ll: "D MMM YYYY",
          lll: "D MMM YYYY HH:mm",
          llll: "ddd, D MMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[H\u00F4m nay l\u00FAc] LT",
          nextDay: "[Ng\u00E0y mai l\u00FAc] LT",
          nextWeek: "dddd [tu\u1EA7n t\u1EDBi l\u00FAc] LT",
          lastDay: "[H\u00F4m qua l\u00FAc] LT",
          lastWeek: "dddd [tu\u1EA7n tr\u01B0\u1EDBc l\u00FAc] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s t\u1EDBi",
          past: "%s tr\u01B0\u1EDBc",
          s: "v\u00E0i gi\u00E2y",
          ss: "%d gi\u00E2y",
          m: "m\u1ED9t ph\u00FAt",
          mm: "%d ph\u00FAt",
          h: "m\u1ED9t gi\u1EDD",
          hh: "%d gi\u1EDD",
          d: "m\u1ED9t ng\u00E0y",
          dd: "%d ng\u00E0y",
          w: "m\u1ED9t tu\u1EA7n",
          ww: "%d tu\u1EA7n",
          M: "m\u1ED9t th\u00E1ng",
          MM: "%d th\u00E1ng",
          y: "m\u1ED9t n\u0103m",
          yy: "%d n\u0103m",
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal,
        week: { dow: 1, doy: 4 },
      };
      defineLocale("vi", obj2);
    }
  }
}
if (typeof globalThis.define === "function") {
  const define2 = globalThis.define;
  if (globalThis.define.amd) {
    globalThis.define(["../moment"], function n(defineLocale) {
      let split;
      let split2;
      let obj = {
        months:
          "th\u00E1ng 1_th\u00E1ng 2_th\u00E1ng 3_th\u00E1ng 4_th\u00E1ng 5_th\u00E1ng 6_th\u00E1ng 7_th\u00E1ng 8_th\u00E1ng 9_th\u00E1ng 10_th\u00E1ng 11_th\u00E1ng 12".split(
            "_",
          ),
        monthsShort: "Thg 01_Thg 02_Thg 03_Thg 04_Thg 05_Thg 06_Thg 07_Thg 08_Thg 09_Thg 10_Thg 11_Thg 12".split("_"),
        monthsParseExact: true,
        weekdays:
          "ch\u1EE7 nh\u1EADt_th\u1EE9 hai_th\u1EE9 ba_th\u1EE9 t\u01B0_th\u1EE9 n\u0103m_th\u1EE9 s\u00E1u_th\u1EE9 b\u1EA3y".split(
            "_",
          ),
        weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
        weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
        weekdaysParseExact: true,
        meridiemParse: /sa|ch/i,
        isPM,
        meridiem,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM [n\u0103m] YYYY",
          LLL: "D MMMM [n\u0103m] YYYY HH:mm",
          LLLL: "dddd, D MMMM [n\u0103m] YYYY HH:mm",
          l: "DD/M/YYYY",
          ll: "D MMM YYYY",
          lll: "D MMM YYYY HH:mm",
          llll: "ddd, D MMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[H\u00F4m nay l\u00FAc] LT",
          nextDay: "[Ng\u00E0y mai l\u00FAc] LT",
          nextWeek: "dddd [tu\u1EA7n t\u1EDBi l\u00FAc] LT",
          lastDay: "[H\u00F4m qua l\u00FAc] LT",
          lastWeek: "dddd [tu\u1EA7n tr\u01B0\u1EDBc l\u00FAc] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s t\u1EDBi",
          past: "%s tr\u01B0\u1EDBc",
          s: "v\u00E0i gi\u00E2y",
          ss: "%d gi\u00E2y",
          m: "m\u1ED9t ph\u00FAt",
          mm: "%d ph\u00FAt",
          h: "m\u1ED9t gi\u1EDD",
          hh: "%d gi\u1EDD",
          d: "m\u1ED9t ng\u00E0y",
          dd: "%d ng\u00E0y",
          w: "m\u1ED9t tu\u1EA7n",
          ww: "%d tu\u1EA7n",
          M: "m\u1ED9t th\u00E1ng",
          MM: "%d th\u00E1ng",
          y: "m\u1ED9t n\u0103m",
          yy: "%d n\u0103m",
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal,
        week: { dow: 1, doy: 4 },
      };
      ({ split, split: split2 } = "CN_T2_T3_T4_T5_T6_T7");
      return defineLocale.defineLocale("vi", obj);
    });
  }
}
const moment = this.moment;
let obj = {
  months:
    "th\u00E1ng 1_th\u00E1ng 2_th\u00E1ng 3_th\u00E1ng 4_th\u00E1ng 5_th\u00E1ng 6_th\u00E1ng 7_th\u00E1ng 8_th\u00E1ng 9_th\u00E1ng 10_th\u00E1ng 11_th\u00E1ng 12".split(
      "_",
    ),
  monthsShort: "Thg 01_Thg 02_Thg 03_Thg 04_Thg 05_Thg 06_Thg 07_Thg 08_Thg 09_Thg 10_Thg 11_Thg 12".split("_"),
  monthsParseExact: true,
  weekdays:
    "ch\u1EE7 nh\u1EADt_th\u1EE9 hai_th\u1EE9 ba_th\u1EE9 t\u01B0_th\u1EE9 n\u0103m_th\u1EE9 s\u00E1u_th\u1EE9 b\u1EA3y".split(
      "_",
    ),
  weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
  weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
  weekdaysParseExact: true,
  meridiemParse: /sa|ch/i,
  isPM,
  meridiem,
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D MMMM [n\u0103m] YYYY",
    LLL: "D MMMM [n\u0103m] YYYY HH:mm",
    LLLL: "dddd, D MMMM [n\u0103m] YYYY HH:mm",
    l: "DD/M/YYYY",
    ll: "D MMM YYYY",
    lll: "D MMM YYYY HH:mm",
    llll: "ddd, D MMM YYYY HH:mm",
  },
  calendar: {
    sameDay: "[H\u00F4m nay l\u00FAc] LT",
    nextDay: "[Ng\u00E0y mai l\u00FAc] LT",
    nextWeek: "dddd [tu\u1EA7n t\u1EDBi l\u00FAc] LT",
    lastDay: "[H\u00F4m qua l\u00FAc] LT",
    lastWeek: "dddd [tu\u1EA7n tr\u01B0\u1EDBc l\u00FAc] LT",
    sameElse: "L",
  },
  relativeTime: {
    future: "%s t\u1EDBi",
    past: "%s tr\u01B0\u1EDBc",
    s: "v\u00E0i gi\u00E2y",
    ss: "%d gi\u00E2y",
    m: "m\u1ED9t ph\u00FAt",
    mm: "%d ph\u00FAt",
    h: "m\u1ED9t gi\u1EDD",
    hh: "%d gi\u1EDD",
    d: "m\u1ED9t ng\u00E0y",
    dd: "%d ng\u00E0y",
    w: "m\u1ED9t tu\u1EA7n",
    ww: "%d tu\u1EA7n",
    M: "m\u1ED9t th\u00E1ng",
    MM: "%d th\u00E1ng",
    y: "m\u1ED9t n\u0103m",
    yy: "%d n\u0103m",
  },
  dayOfMonthOrdinalParse: /\d{1,2}/,
  ordinal,
  week: { dow: 1, doy: 4 },
};
({ split, split: split2 } = "CN_T2_T3_T4_T5_T6_T7");
moment.defineLocale("vi", obj);
