// _runtime/03990_t.js
import t from "03978_t.js";

if (typeof exports === "object") {
  if (undefined !== module) {
    if (typeof require === "function") {
      const _module = t;
      let obj = { months: null, monthsShort: null, weekdays: null, weekdaysShort: null, weekdaysMin: null, longDateFormat: null, meridiemParse: null, isPM: null, meridiem: null, calendar: null, dayOfMonthOrdinalParse: null, ordinal: null, relativeTime: null };
      const split3 = "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split;
      obj[0] = "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_");
      const split4 = "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split;
      obj[1] = "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_");
      const split5 = "\u65E5\u66DC\u65E5_\u6708\u66DC\u65E5_\u706B\u66DC\u65E5_\u6C34\u66DC\u65E5_\u6728\u66DC\u65E5_\u91D1\u66DC\u65E5_\u571F\u66DC\u65E5".split;
      obj[2] = "\u65E5\u66DC\u65E5_\u6708\u66DC\u65E5_\u706B\u66DC\u65E5_\u6C34\u66DC\u65E5_\u6728\u66DC\u65E5_\u91D1\u66DC\u65E5_\u571F\u66DC\u65E5".split("_");
      const split6 = "\u65E5_\u6708_\u706B_\u6C34_\u6728_\u91D1_\u571F".split;
      obj[3] = "\u65E5_\u6708_\u706B_\u6C34_\u6728_\u91D1_\u571F".split("_");
      const split7 = "\u65E5_\u6708_\u706B_\u6C34_\u6728_\u91D1_\u571F".split;
      obj[4] = "\u65E5_\u6708_\u706B_\u6C34_\u6728_\u91D1_\u571F".split("_");
      obj[5] = { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY\u5E74M\u6708D\u65E5", LLL: "YYYY\u5E74M\u6708D\u65E5 HH:mm", LLLL: "YYYY\u5E74M\u6708D\u65E5 dddd HH:mm", l: "YYYY/MM/DD", ll: "YYYY\u5E74M\u6708D\u65E5", lll: "YYYY\u5E74M\u6708D\u65E5 HH:mm", llll: "YYYY\u5E74M\u6708D\u65E5(ddd) HH:mm" };
      obj[6] = /午前|午後/i;
      obj[7] = function isPM(arg0) {
        return "\u5348\u5F8C" === arg0;
      };
      obj[8] = function meridiem(arg0, arg1, arg2) {
        let str = "\u5348\u5F8C";
        if (arg0 < 12) {
          str = "\u5348\u524D";
        }
        return str;
      };
      obj = { sameDay: "[\u4ECA\u65E5] LT", nextDay: "[\u660E\u65E5] LT", nextWeek: null, lastDay: "[\u6628\u65E5] LT", lastWeek: null, sameElse: "L" };
      obj[2] = function nextWeek(week) {
        let str = "dddd LT";
        if (weekResult < this.week()) {
          str = "[\u6765\u9031]dddd LT";
        }
        return str;
      };
      obj[4] = function lastWeek(week) {
        let str = "dddd LT";
        if (weekResult < week.week()) {
          str = "[\u5148\u9031]dddd LT";
        }
        return str;
      };
      obj[9] = obj;
      obj[10] = /\d{1,2}日/;
      obj[11] = function ordinal(arg0, arg1) {
        if ("d" !== arg1) {
          if ("D" !== arg1) {
            if ("DDD" !== arg1) {
              return arg0;
            }
          }
        }
        return arg0 + "\u65E5";
      };
      obj[12] = { future: "%s\u5F8C", past: "%s\u524D", s: "\u6570\u79D2", ss: "%d\u79D2", m: "1\u5206", mm: "%d\u5206", h: "1\u6642\u9593", hh: "%d\u6642\u9593", d: "1\u65E5", dd: "%d\u65E5", M: "1\u30F6\u6708", MM: "%d\u30F6\u6708", y: "1\u5E74", yy: "%d\u5E74" };
      _module.defineLocale("ja", obj);
    }
  }
}
if (typeof globalThis.define === "function") {
  if (globalThis.define.amd) {
    globalThis.define(["../moment"], function _(defineLocale) {
      obj = {
        months: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
        monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
        weekdays: "\u65E5\u66DC\u65E5_\u6708\u66DC\u65E5_\u706B\u66DC\u65E5_\u6C34\u66DC\u65E5_\u6728\u66DC\u65E5_\u91D1\u66DC\u65E5_\u571F\u66DC\u65E5".split("_"),
        weekdaysShort: "\u65E5_\u6708_\u706B_\u6C34_\u6728_\u91D1_\u571F".split("_"),
        weekdaysMin: "\u65E5_\u6708_\u706B_\u6C34_\u6728_\u91D1_\u571F".split("_"),
        longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY\u5E74M\u6708D\u65E5", LLL: "YYYY\u5E74M\u6708D\u65E5 HH:mm", LLLL: "YYYY\u5E74M\u6708D\u65E5 dddd HH:mm", l: "YYYY/MM/DD", ll: "YYYY\u5E74M\u6708D\u65E5", lll: "YYYY\u5E74M\u6708D\u65E5 HH:mm", llll: "YYYY\u5E74M\u6708D\u65E5(ddd) HH:mm" },
        meridiemParse: /午前|午後/i,
        isPM(arg0) {
          return "\u5348\u5F8C" === arg0;
        },
        meridiem(arg0, arg1, arg2) {
          let str = "\u5348\u5F8C";
          if (arg0 < 12) {
            str = "\u5348\u524D";
          }
          return str;
        },
        calendar: obj,
        dayOfMonthOrdinalParse: /\d{1,2}日/,
        ordinal(arg0, arg1) {
          if ("d" !== arg1) {
            if ("D" !== arg1) {
              if ("DDD" !== arg1) {
                return arg0;
              }
            }
          }
          return arg0 + "\u65E5";
        },
        relativeTime: { future: "%s\u5F8C", past: "%s\u524D", s: "\u6570\u79D2", ss: "%d\u79D2", m: "1\u5206", mm: "%d\u5206", h: "1\u6642\u9593", hh: "%d\u6642\u9593", d: "1\u65E5", dd: "%d\u65E5", M: "1\u30F6\u6708", MM: "%d\u30F6\u6708", y: "1\u5E74", yy: "%d\u5E74" }
      };
      ({ split, split: split2 } = "\u65E5_\u6708_\u706B_\u6C34_\u6728_\u91D1_\u571F");
      obj = {
        sameDay: "[\u4ECA\u65E5] LT",
        nextDay: "[\u660E\u65E5] LT",
        nextWeek(week) {
          let str = "dddd LT";
          if (weekResult < this.week()) {
            str = "[\u6765\u9031]dddd LT";
          }
          return str;
        },
        lastDay: "[\u6628\u65E5] LT",
        lastWeek(week) {
          let str = "dddd LT";
          if (weekResult < week.week()) {
            str = "[\u5148\u9031]dddd LT";
          }
          return str;
        },
        sameElse: "L"
      };
      return defineLocale.defineLocale("ja", obj);
    });
  }
}
const moment = this.moment;
obj = {
  months: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
  monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
  weekdays: "\u65E5\u66DC\u65E5_\u6708\u66DC\u65E5_\u706B\u66DC\u65E5_\u6C34\u66DC\u65E5_\u6728\u66DC\u65E5_\u91D1\u66DC\u65E5_\u571F\u66DC\u65E5".split("_"),
  weekdaysShort: "\u65E5_\u6708_\u706B_\u6C34_\u6728_\u91D1_\u571F".split("_"),
  weekdaysMin: "\u65E5_\u6708_\u706B_\u6C34_\u6728_\u91D1_\u571F".split("_"),
  longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY\u5E74M\u6708D\u65E5", LLL: "YYYY\u5E74M\u6708D\u65E5 HH:mm", LLLL: "YYYY\u5E74M\u6708D\u65E5 dddd HH:mm", l: "YYYY/MM/DD", ll: "YYYY\u5E74M\u6708D\u65E5", lll: "YYYY\u5E74M\u6708D\u65E5 HH:mm", llll: "YYYY\u5E74M\u6708D\u65E5(ddd) HH:mm" },
  meridiemParse: /午前|午後/i,
  isPM(arg0) {
    return "\u5348\u5F8C" === arg0;
  },
  meridiem(arg0, arg1, arg2) {
    let str = "\u5348\u5F8C";
    if (arg0 < 12) {
      str = "\u5348\u524D";
    }
    return str;
  },
  calendar: obj1,
  dayOfMonthOrdinalParse: /\d{1,2}日/,
  ordinal(arg0, arg1) {
    if ("d" !== arg1) {
      if ("D" !== arg1) {
        if ("DDD" !== arg1) {
          return arg0;
        }
      }
    }
    return arg0 + "\u65E5";
  },
  relativeTime: { future: "%s\u5F8C", past: "%s\u524D", s: "\u6570\u79D2", ss: "%d\u79D2", m: "1\u5206", mm: "%d\u5206", h: "1\u6642\u9593", hh: "%d\u6642\u9593", d: "1\u65E5", dd: "%d\u65E5", M: "1\u30F6\u6708", MM: "%d\u30F6\u6708", y: "1\u5E74", yy: "%d\u5E74" }
};
({ split, split: split2 } = "\u65E5_\u6708_\u706B_\u6C34_\u6728_\u91D1_\u571F");
moment.defineLocale("ja", obj);