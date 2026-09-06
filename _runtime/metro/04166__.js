// === Module 4166: ? ===

// Module 4166
import _mod4153 from "module_4153" /* 4153 */;

if (typeof exports === "object") {
  if (undefined !== module) {
    if (typeof require === "function") {
      const _module = _mod4153;
      let obj = { months: null, monthsShort: null, weekdays: null, weekdaysShort: null, weekdaysMin: null, longDateFormat: null, calendar: null, relativeTime: null, dayOfMonthOrdinalParse: null, ordinal: null, meridiemParse: null, isPM: null, meridiem: null };
      const split3 = "1\uC6D4_2\uC6D4_3\uC6D4_4\uC6D4_5\uC6D4_6\uC6D4_7\uC6D4_8\uC6D4_9\uC6D4_10\uC6D4_11\uC6D4_12\uC6D4".split;
      obj.months = "1\uC6D4_2\uC6D4_3\uC6D4_4\uC6D4_5\uC6D4_6\uC6D4_7\uC6D4_8\uC6D4_9\uC6D4_10\uC6D4_11\uC6D4_12\uC6D4".split("_");
      const split4 = "1\uC6D4_2\uC6D4_3\uC6D4_4\uC6D4_5\uC6D4_6\uC6D4_7\uC6D4_8\uC6D4_9\uC6D4_10\uC6D4_11\uC6D4_12\uC6D4".split;
      obj.monthsShort = "1\uC6D4_2\uC6D4_3\uC6D4_4\uC6D4_5\uC6D4_6\uC6D4_7\uC6D4_8\uC6D4_9\uC6D4_10\uC6D4_11\uC6D4_12\uC6D4".split("_");
      const split5 = "\uC77C\uC694\uC77C_\uC6D4\uC694\uC77C_\uD654\uC694\uC77C_\uC218\uC694\uC77C_\uBAA9\uC694\uC77C_\uAE08\uC694\uC77C_\uD1A0\uC694\uC77C".split;
      obj.weekdays = "\uC77C\uC694\uC77C_\uC6D4\uC694\uC77C_\uD654\uC694\uC77C_\uC218\uC694\uC77C_\uBAA9\uC694\uC77C_\uAE08\uC694\uC77C_\uD1A0\uC694\uC77C".split("_");
      const split6 = "\uC77C_\uC6D4_\uD654_\uC218_\uBAA9_\uAE08_\uD1A0".split;
      obj.weekdaysShort = "\uC77C_\uC6D4_\uD654_\uC218_\uBAA9_\uAE08_\uD1A0".split("_");
      const split7 = "\uC77C_\uC6D4_\uD654_\uC218_\uBAA9_\uAE08_\uD1A0".split;
      obj.weekdaysMin = "\uC77C_\uC6D4_\uD654_\uC218_\uBAA9_\uAE08_\uD1A0".split("_");
      obj.longDateFormat = { LT: "A h:mm", LTS: "A h:mm:ss", L: "YYYY.MM.DD.", LL: "YYYY\uB144 MMMM D\uC77C", LLL: "YYYY\uB144 MMMM D\uC77C A h:mm", LLLL: "YYYY\uB144 MMMM D\uC77C dddd A h:mm", l: "YYYY.MM.DD.", ll: "YYYY\uB144 MMMM D\uC77C", lll: "YYYY\uB144 MMMM D\uC77C A h:mm", llll: "YYYY\uB144 MMMM D\uC77C dddd A h:mm" };
      obj.calendar = { sameDay: "\uC624\uB298 LT", nextDay: "\uB0B4\uC77C LT", nextWeek: "dddd LT", lastDay: "\uC5B4\uC81C LT", lastWeek: "\uC9C0\uB09C\uC8FC dddd LT", sameElse: "L" };
      obj.relativeTime = { future: "%s \uD6C4", past: "%s \uC804", s: "\uBA87 \uCD08", ss: "%d\uCD08", m: "1\uBD84", mm: "%d\uBD84", h: "\uD55C \uC2DC\uAC04", hh: "%d\uC2DC\uAC04", d: "\uD558\uB8E8", dd: "%d\uC77C", M: "\uD55C \uB2EC", MM: "%d\uB2EC", y: "\uC77C \uB144", yy: "%d\uB144" };
      obj.dayOfMonthOrdinalParse = /\d{1,2}(일|월|주)/;
      obj.ordinal = function ordinal(arg0, arg1) {
        if ("d" !== arg1) {
          if ("D" !== arg1) {
            if ("DDD" !== arg1) {
              if ("M" === arg1) {
                return arg0 + "\uC6D4";
              } else {
                if ("w" !== arg1) {
                  if ("W" !== arg1) {
                    return arg0;
                  }
                }
                return arg0 + "\uC8FC";
              }
            }
          }
        }
        return arg0 + "\uC77C";
      };
      obj.meridiemParse = /오전|오후/;
      obj.isPM = function isPM(arg0) {
        return "\uC624\uD6C4" === arg0;
      };
      obj.meridiem = function meridiem(arg0, arg1, arg2) {
        let str = "\uC624\uD6C4";
        if (arg0 < 12) {
          str = "\uC624\uC804";
        }
        return str;
      };
      _module.defineLocale("ko", obj);
    }
  }
}
if (typeof globalThis.define === "function") {
  if (globalThis.define.amd) {
    globalThis.define(["../moment"], function t(defineLocale) {
      ({ split, split: split2 } = "\uC77C_\uC6D4_\uD654_\uC218_\uBAA9_\uAE08_\uD1A0");
      return defineLocale.defineLocale("ko", {
        months: "1\uC6D4_2\uC6D4_3\uC6D4_4\uC6D4_5\uC6D4_6\uC6D4_7\uC6D4_8\uC6D4_9\uC6D4_10\uC6D4_11\uC6D4_12\uC6D4".split("_"),
        monthsShort: "1\uC6D4_2\uC6D4_3\uC6D4_4\uC6D4_5\uC6D4_6\uC6D4_7\uC6D4_8\uC6D4_9\uC6D4_10\uC6D4_11\uC6D4_12\uC6D4".split("_"),
        weekdays: "\uC77C\uC694\uC77C_\uC6D4\uC694\uC77C_\uD654\uC694\uC77C_\uC218\uC694\uC77C_\uBAA9\uC694\uC77C_\uAE08\uC694\uC77C_\uD1A0\uC694\uC77C".split("_"),
        weekdaysShort: "\uC77C_\uC6D4_\uD654_\uC218_\uBAA9_\uAE08_\uD1A0".split("_"),
        weekdaysMin: "\uC77C_\uC6D4_\uD654_\uC218_\uBAA9_\uAE08_\uD1A0".split("_"),
        longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "YYYY.MM.DD.", LL: "YYYY\uB144 MMMM D\uC77C", LLL: "YYYY\uB144 MMMM D\uC77C A h:mm", LLLL: "YYYY\uB144 MMMM D\uC77C dddd A h:mm", l: "YYYY.MM.DD.", ll: "YYYY\uB144 MMMM D\uC77C", lll: "YYYY\uB144 MMMM D\uC77C A h:mm", llll: "YYYY\uB144 MMMM D\uC77C dddd A h:mm" },
        calendar: { sameDay: "\uC624\uB298 LT", nextDay: "\uB0B4\uC77C LT", nextWeek: "dddd LT", lastDay: "\uC5B4\uC81C LT", lastWeek: "\uC9C0\uB09C\uC8FC dddd LT", sameElse: "L" },
        relativeTime: { future: "%s \uD6C4", past: "%s \uC804", s: "\uBA87 \uCD08", ss: "%d\uCD08", m: "1\uBD84", mm: "%d\uBD84", h: "\uD55C \uC2DC\uAC04", hh: "%d\uC2DC\uAC04", d: "\uD558\uB8E8", dd: "%d\uC77C", M: "\uD55C \uB2EC", MM: "%d\uB2EC", y: "\uC77C \uB144", yy: "%d\uB144" },
        dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
        ordinal(arg0, arg1) {
          if ("d" !== arg1) {
            if ("D" !== arg1) {
              if ("DDD" !== arg1) {
                if ("M" === arg1) {
                  return arg0 + "\uC6D4";
                } else {
                  if ("w" !== arg1) {
                    if ("W" !== arg1) {
                      return arg0;
                    }
                  }
                  return arg0 + "\uC8FC";
                }
              }
            }
          }
          return arg0 + "\uC77C";
        },
        meridiemParse: /오전|오후/,
        isPM(arg0) {
          return "\uC624\uD6C4" === arg0;
        },
        meridiem(arg0, arg1, arg2) {
          let str = "\uC624\uD6C4";
          if (arg0 < 12) {
            str = "\uC624\uC804";
          }
          return str;
        }
      });
    });
  }
}
const moment = this.moment;
obj = {
  months: "1\uC6D4_2\uC6D4_3\uC6D4_4\uC6D4_5\uC6D4_6\uC6D4_7\uC6D4_8\uC6D4_9\uC6D4_10\uC6D4_11\uC6D4_12\uC6D4".split("_"),
  monthsShort: "1\uC6D4_2\uC6D4_3\uC6D4_4\uC6D4_5\uC6D4_6\uC6D4_7\uC6D4_8\uC6D4_9\uC6D4_10\uC6D4_11\uC6D4_12\uC6D4".split("_"),
  weekdays: "\uC77C\uC694\uC77C_\uC6D4\uC694\uC77C_\uD654\uC694\uC77C_\uC218\uC694\uC77C_\uBAA9\uC694\uC77C_\uAE08\uC694\uC77C_\uD1A0\uC694\uC77C".split("_"),
  weekdaysShort: "\uC77C_\uC6D4_\uD654_\uC218_\uBAA9_\uAE08_\uD1A0".split("_"),
  weekdaysMin: "\uC77C_\uC6D4_\uD654_\uC218_\uBAA9_\uAE08_\uD1A0".split("_"),
  longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "YYYY.MM.DD.", LL: "YYYY\uB144 MMMM D\uC77C", LLL: "YYYY\uB144 MMMM D\uC77C A h:mm", LLLL: "YYYY\uB144 MMMM D\uC77C dddd A h:mm", l: "YYYY.MM.DD.", ll: "YYYY\uB144 MMMM D\uC77C", lll: "YYYY\uB144 MMMM D\uC77C A h:mm", llll: "YYYY\uB144 MMMM D\uC77C dddd A h:mm" },
  calendar: { sameDay: "\uC624\uB298 LT", nextDay: "\uB0B4\uC77C LT", nextWeek: "dddd LT", lastDay: "\uC5B4\uC81C LT", lastWeek: "\uC9C0\uB09C\uC8FC dddd LT", sameElse: "L" },
  relativeTime: { future: "%s \uD6C4", past: "%s \uC804", s: "\uBA87 \uCD08", ss: "%d\uCD08", m: "1\uBD84", mm: "%d\uBD84", h: "\uD55C \uC2DC\uAC04", hh: "%d\uC2DC\uAC04", d: "\uD558\uB8E8", dd: "%d\uC77C", M: "\uD55C \uB2EC", MM: "%d\uB2EC", y: "\uC77C \uB144", yy: "%d\uB144" },
  dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
  ordinal(arg0, arg1) {
    if ("d" !== arg1) {
      if ("D" !== arg1) {
        if ("DDD" !== arg1) {
          if ("M" === arg1) {
            return arg0 + "\uC6D4";
          } else {
            if ("w" !== arg1) {
              if ("W" !== arg1) {
                return arg0;
              }
            }
            return arg0 + "\uC8FC";
          }
        }
      }
    }
    return arg0 + "\uC77C";
  },
  meridiemParse: /오전|오후/,
  isPM(arg0) {
    return "\uC624\uD6C4" === arg0;
  },
  meridiem(arg0, arg1, arg2) {
    let str = "\uC624\uD6C4";
    if (arg0 < 12) {
      str = "\uC624\uC804";
    }
    return str;
  }
};
({ split, split: split2 } = "\uC77C_\uC6D4_\uD654_\uC218_\uBAA9_\uAE08_\uD1A0");
moment.defineLocale("ko", obj);