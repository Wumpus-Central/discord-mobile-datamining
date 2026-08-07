// _runtime/03908_t.js
let split;
let split2;
if (typeof exports === "object") {
  if (undefined !== module) {
    if (typeof require === "function") {
      const _module = require("t");
      let obj = { months: null, monthsShort: null, monthsParseExact: true, weekdays: null, weekdaysShort: null, weekdaysMin: null, weekdaysParseExact: true, meridiemParse: null, isPM: null, meridiem: null, longDateFormat: null, calendar: null, relativeTime: null, dayOfMonthOrdinalParse: null, ordinal: null, week: null };
      const split3 = "th\u00E1ng 1_th\u00E1ng 2_th\u00E1ng 3_th\u00E1ng 4_th\u00E1ng 5_th\u00E1ng 6_th\u00E1ng 7_th\u00E1ng 8_th\u00E1ng 9_th\u00E1ng 10_th\u00E1ng 11_th\u00E1ng 12".split;
      obj[0] = "th\u00E1ng 1_th\u00E1ng 2_th\u00E1ng 3_th\u00E1ng 4_th\u00E1ng 5_th\u00E1ng 6_th\u00E1ng 7_th\u00E1ng 8_th\u00E1ng 9_th\u00E1ng 10_th\u00E1ng 11_th\u00E1ng 12".split("_");
      const split4 = "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split;
      obj[1] = "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_");
      const split5 = "ch\u1EE7 nh\u1EADt_th\u1EE9 hai_th\u1EE9 ba_th\u1EE9 t\u01B0_th\u1EE9 n\u0103m_th\u1EE9 s\u00E1u_th\u1EE9 b\u1EA3y".split;
      obj[3] = "ch\u1EE7 nh\u1EADt_th\u1EE9 hai_th\u1EE9 ba_th\u1EE9 t\u01B0_th\u1EE9 n\u0103m_th\u1EE9 s\u00E1u_th\u1EE9 b\u1EA3y".split("_");
      const split6 = "CN_T2_T3_T4_T5_T6_T7".split;
      obj[4] = "CN_T2_T3_T4_T5_T6_T7".split("_");
      const split7 = "CN_T2_T3_T4_T5_T6_T7".split;
      obj[5] = "CN_T2_T3_T4_T5_T6_T7".split("_");
      obj[7] = /sa|ch/i;
      obj[8] = function isPM(arg0) {
        return /^ch$/i.test(arg0);
      };
      obj[9] = function meridiem(arg0, arg1, arg2) {
        if (arg0 < 12) {
          let str2 = "SA";
          if (arg2) {
            str2 = "sa";
          }
          let str = str2;
        } else {
          str = "CH";
          if (arg2) {
            str = "ch";
          }
        }
        return str;
      };
      obj[10] = { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM [n\u0103m] YYYY", LLL: "D MMMM [n\u0103m] YYYY HH:mm", LLLL: "dddd, D MMMM [n\u0103m] YYYY HH:mm", l: "DD/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" };
      obj[11] = { sameDay: "[H\u00F4m nay l\u00FAc] LT", nextDay: "[Ng\u00E0y mai l\u00FAc] LT", nextWeek: "dddd [tu\u1EA7n t\u1EDBi l\u00FAc] LT", lastDay: "[H\u00F4m qua l\u00FAc] LT", lastWeek: "dddd [tu\u1EA7n r\u1ED3i l\u00FAc] LT", sameElse: "L" };
      obj[12] = { future: "%s t\u1EDBi", past: "%s tr\u01B0\u1EDBc", s: "v\u00E0i gi\u00E2y", ss: "%d gi\u00E2y", m: "m\u1ED9t ph\u00FAt", mm: "%d ph\u00FAt", h: "m\u1ED9t gi\u1EDD", hh: "%d gi\u1EDD", d: "m\u1ED9t ng\u00E0y", dd: "%d ng\u00E0y", M: "m\u1ED9t th\u00E1ng", MM: "%d th\u00E1ng", y: "m\u1ED9t n\u0103m", yy: "%d n\u0103m" };
      obj[13] = /\d{1,2}/;
      obj[14] = function ordinal(arg0) {
        return arg0;
      };
      obj[15] = { dow: 1, doy: 4 };
      _module.defineLocale("vi", obj);
    }
  }
}
if (typeof globalThis.define === "function") {
  if (globalThis.define.amd) {
    globalThis.define(["../moment"], function n(defineLocale) {
      let split;
      let split2;
      ({ split, split: split2 } = "CN_T2_T3_T4_T5_T6_T7");
      return defineLocale.defineLocale("vi", {
        months: "th\u00E1ng 1_th\u00E1ng 2_th\u00E1ng 3_th\u00E1ng 4_th\u00E1ng 5_th\u00E1ng 6_th\u00E1ng 7_th\u00E1ng 8_th\u00E1ng 9_th\u00E1ng 10_th\u00E1ng 11_th\u00E1ng 12".split("_"),
        monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
        monthsParseExact: true,
        weekdays: "ch\u1EE7 nh\u1EADt_th\u1EE9 hai_th\u1EE9 ba_th\u1EE9 t\u01B0_th\u1EE9 n\u0103m_th\u1EE9 s\u00E1u_th\u1EE9 b\u1EA3y".split("_"),
        weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
        weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
        weekdaysParseExact: true,
        meridiemParse: /sa|ch/i,
        isPM(arg0) {
          return /^ch$/i.test(arg0);
        },
        meridiem(arg0, arg1, arg2) {
          if (arg0 < 12) {
            let str2 = "SA";
            if (arg2) {
              str2 = "sa";
            }
            let str = str2;
          } else {
            str = "CH";
            if (arg2) {
              str = "ch";
            }
          }
          return str;
        },
        longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM [n\u0103m] YYYY", LLL: "D MMMM [n\u0103m] YYYY HH:mm", LLLL: "dddd, D MMMM [n\u0103m] YYYY HH:mm", l: "DD/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" },
        calendar: { sameDay: "[H\u00F4m nay l\u00FAc] LT", nextDay: "[Ng\u00E0y mai l\u00FAc] LT", nextWeek: "dddd [tu\u1EA7n t\u1EDBi l\u00FAc] LT", lastDay: "[H\u00F4m qua l\u00FAc] LT", lastWeek: "dddd [tu\u1EA7n r\u1ED3i l\u00FAc] LT", sameElse: "L" },
        relativeTime: { future: "%s t\u1EDBi", past: "%s tr\u01B0\u1EDBc", s: "v\u00E0i gi\u00E2y", ss: "%d gi\u00E2y", m: "m\u1ED9t ph\u00FAt", mm: "%d ph\u00FAt", h: "m\u1ED9t gi\u1EDD", hh: "%d gi\u1EDD", d: "m\u1ED9t ng\u00E0y", dd: "%d ng\u00E0y", M: "m\u1ED9t th\u00E1ng", MM: "%d th\u00E1ng", y: "m\u1ED9t n\u0103m", yy: "%d n\u0103m" },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal(arg0) {
          return arg0;
        },
        week: { dow: 1, doy: 4 }
      });
    });
  }
}
const moment = this.moment;
obj = {
  months: "th\u00E1ng 1_th\u00E1ng 2_th\u00E1ng 3_th\u00E1ng 4_th\u00E1ng 5_th\u00E1ng 6_th\u00E1ng 7_th\u00E1ng 8_th\u00E1ng 9_th\u00E1ng 10_th\u00E1ng 11_th\u00E1ng 12".split("_"),
  monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
  monthsParseExact: true,
  weekdays: "ch\u1EE7 nh\u1EADt_th\u1EE9 hai_th\u1EE9 ba_th\u1EE9 t\u01B0_th\u1EE9 n\u0103m_th\u1EE9 s\u00E1u_th\u1EE9 b\u1EA3y".split("_"),
  weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
  weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
  weekdaysParseExact: true,
  meridiemParse: /sa|ch/i,
  isPM(arg0) {
    return /^ch$/i.test(arg0);
  },
  meridiem(arg0, arg1, arg2) {
    if (arg0 < 12) {
      let str2 = "SA";
      if (arg2) {
        str2 = "sa";
      }
      let str = str2;
    } else {
      str = "CH";
      if (arg2) {
        str = "ch";
      }
    }
    return str;
  },
  longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM [n\u0103m] YYYY", LLL: "D MMMM [n\u0103m] YYYY HH:mm", LLLL: "dddd, D MMMM [n\u0103m] YYYY HH:mm", l: "DD/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" },
  calendar: { sameDay: "[H\u00F4m nay l\u00FAc] LT", nextDay: "[Ng\u00E0y mai l\u00FAc] LT", nextWeek: "dddd [tu\u1EA7n t\u1EDBi l\u00FAc] LT", lastDay: "[H\u00F4m qua l\u00FAc] LT", lastWeek: "dddd [tu\u1EA7n r\u1ED3i l\u00FAc] LT", sameElse: "L" },
  relativeTime: { future: "%s t\u1EDBi", past: "%s tr\u01B0\u1EDBc", s: "v\u00E0i gi\u00E2y", ss: "%d gi\u00E2y", m: "m\u1ED9t ph\u00FAt", mm: "%d ph\u00FAt", h: "m\u1ED9t gi\u1EDD", hh: "%d gi\u1EDD", d: "m\u1ED9t ng\u00E0y", dd: "%d ng\u00E0y", M: "m\u1ED9t th\u00E1ng", MM: "%d th\u00E1ng", y: "m\u1ED9t n\u0103m", yy: "%d n\u0103m" },
  dayOfMonthOrdinalParse: /\d{1,2}/,
  ordinal(arg0) {
    return arg0;
  },
  week: { dow: 1, doy: 4 }
};
({ split, split: split2 } = "CN_T2_T3_T4_T5_T6_T7");
moment.defineLocale("vi", obj);