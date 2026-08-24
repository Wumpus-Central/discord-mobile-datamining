// _runtime/03974_t.js
import t from "03975_t.js";

if (typeof exports === "object") {
  if (undefined !== module) {
    if (typeof require === "function") {
      const _module = t;
      let obj = { months: null, monthsShort: null, weekdays: null, weekdaysShort: null, weekdaysMin: null, longDateFormat: null, calendar: null, relativeTime: null, dayOfMonthOrdinalParse: null, ordinal: null, week: null };
      const split = "\u044F\u043D\u0443\u0430\u0440\u0438_\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438_\u043C\u0430\u0440\u0442_\u0430\u043F\u0440\u0438\u043B_\u043C\u0430\u0439_\u044E\u043D\u0438_\u044E\u043B\u0438_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043F\u0442\u0435\u043C\u0432\u0440\u0438_\u043E\u043A\u0442\u043E\u043C\u0432\u0440\u0438_\u043D\u043E\u0435\u043C\u0432\u0440\u0438_\u0434\u0435\u043A\u0435\u043C\u0432\u0440\u0438".split;
      obj[0] = "\u044F\u043D\u0443\u0430\u0440\u0438_\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438_\u043C\u0430\u0440\u0442_\u0430\u043F\u0440\u0438\u043B_\u043C\u0430\u0439_\u044E\u043D\u0438_\u044E\u043B\u0438_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043F\u0442\u0435\u043C\u0432\u0440\u0438_\u043E\u043A\u0442\u043E\u043C\u0432\u0440\u0438_\u043D\u043E\u0435\u043C\u0432\u0440\u0438_\u0434\u0435\u043A\u0435\u043C\u0432\u0440\u0438".split("_");
      const split2 = "\u044F\u043D\u0440_\u0444\u0435\u0432_\u043C\u0430\u0440_\u0430\u043F\u0440_\u043C\u0430\u0439_\u044E\u043D\u0438_\u044E\u043B\u0438_\u0430\u0432\u0433_\u0441\u0435\u043F_\u043E\u043A\u0442_\u043D\u043E\u0435_\u0434\u0435\u043A".split;
      obj[1] = "\u044F\u043D\u0440_\u0444\u0435\u0432_\u043C\u0430\u0440_\u0430\u043F\u0440_\u043C\u0430\u0439_\u044E\u043D\u0438_\u044E\u043B\u0438_\u0430\u0432\u0433_\u0441\u0435\u043F_\u043E\u043A\u0442_\u043D\u043E\u0435_\u0434\u0435\u043A".split("_");
      const split3 = "\u043D\u0435\u0434\u0435\u043B\u044F_\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u043D\u0438\u043A_\u0432\u0442\u043E\u0440\u043D\u0438\u043A_\u0441\u0440\u044F\u0434\u0430_\u0447\u0435\u0442\u0432\u044A\u0440\u0442\u044A\u043A_\u043F\u0435\u0442\u044A\u043A_\u0441\u044A\u0431\u043E\u0442\u0430".split;
      obj[2] = "\u043D\u0435\u0434\u0435\u043B\u044F_\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u043D\u0438\u043A_\u0432\u0442\u043E\u0440\u043D\u0438\u043A_\u0441\u0440\u044F\u0434\u0430_\u0447\u0435\u0442\u0432\u044A\u0440\u0442\u044A\u043A_\u043F\u0435\u0442\u044A\u043A_\u0441\u044A\u0431\u043E\u0442\u0430".split("_");
      const split4 = "\u043D\u0435\u0434_\u043F\u043E\u043D_\u0432\u0442\u043E_\u0441\u0440\u044F_\u0447\u0435\u0442_\u043F\u0435\u0442_\u0441\u044A\u0431".split;
      obj[3] = "\u043D\u0435\u0434_\u043F\u043E\u043D_\u0432\u0442\u043E_\u0441\u0440\u044F_\u0447\u0435\u0442_\u043F\u0435\u0442_\u0441\u044A\u0431".split("_");
      const split5 = "\u043D\u0434_\u043F\u043D_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043F\u0442_\u0441\u0431".split;
      obj[4] = "\u043D\u0434_\u043F\u043D_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043F\u0442_\u0441\u0431".split("_");
      obj[5] = { LT: "H:mm", LTS: "H:mm:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" };
      obj = { sameDay: "[\u0414\u043D\u0435\u0441 \u0432] LT", nextDay: "[\u0423\u0442\u0440\u0435 \u0432] LT", nextWeek: "dddd [\u0432] LT", lastDay: "[\u0412\u0447\u0435\u0440\u0430 \u0432] LT", lastWeek: null, sameElse: "L" };
      obj[4] = function lastWeek() {
        const dayResult = this.day();
        if (0 !== dayResult) {
          if (3 !== dayResult) {
            if (6 !== dayResult) {
              return "[\u0412 \u0438\u0437\u043C\u0438\u043D\u0430\u043B\u0438\u044F] dddd [\u0432] LT";
            }
          }
        }
        return "[\u0412 \u0438\u0437\u043C\u0438\u043D\u0430\u043B\u0430\u0442\u0430] dddd [\u0432] LT";
      };
      obj[6] = obj;
      obj[7] = { future: "\u0441\u043B\u0435\u0434 %s", past: "\u043F\u0440\u0435\u0434\u0438 %s", s: "\u043D\u044F\u043A\u043E\u043B\u043A\u043E \u0441\u0435\u043A\u0443\u043D\u0434\u0438", ss: "%d \u0441\u0435\u043A\u0443\u043D\u0434\u0438", m: "\u043C\u0438\u043D\u0443\u0442\u0430", mm: "%d \u043C\u0438\u043D\u0443\u0442\u0438", h: "\u0447\u0430\u0441", hh: "%d \u0447\u0430\u0441\u0430", d: "\u0434\u0435\u043D", dd: "%d \u0434\u043D\u0438", M: "\u043C\u0435\u0441\u0435\u0446", MM: "%d \u043C\u0435\u0441\u0435\u0446\u0430", y: "\u0433\u043E\u0434\u0438\u043D\u0430", yy: "%d \u0433\u043E\u0434\u0438\u043D\u0438" };
      obj[8] = /\d{1,2}-(ев|ен|ти|ви|ри|ми)/;
      obj[9] = function ordinal(arg0) {
        const result = arg0 % 10;
        const result1 = arg0 % 100;
        if (0 === arg0) {
          let text = `${arg0}-ев`;
        } else if (0 === result1) {
          text = `${arg0}-ен`;
        } else {
          if (10 < result1) {
            if (result1 < 20) {
              text = `${arg0}-ти`;
            }
          }
          if (1 === result) {
            text = `${arg0}-ви`;
          } else if (2 === result) {
            text = `${arg0}-ри`;
          } else {
            if (7 !== result) {
              if (8 !== result) {
                text = `${arg0}-ти`;
              }
            }
            text = `${arg0}-ми`;
          }
        }
        return text;
      };
      obj[10] = { dow: 1, doy: 7 };
      _module.defineLocale("bg", obj);
    }
  }
}
if (typeof globalThis.define === "function") {
  if (globalThis.define.amd) {
    globalThis.define(["../moment"], function t(defineLocale) {
      obj = {
        months: "\u044F\u043D\u0443\u0430\u0440\u0438_\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438_\u043C\u0430\u0440\u0442_\u0430\u043F\u0440\u0438\u043B_\u043C\u0430\u0439_\u044E\u043D\u0438_\u044E\u043B\u0438_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043F\u0442\u0435\u043C\u0432\u0440\u0438_\u043E\u043A\u0442\u043E\u043C\u0432\u0440\u0438_\u043D\u043E\u0435\u043C\u0432\u0440\u0438_\u0434\u0435\u043A\u0435\u043C\u0432\u0440\u0438".split("_"),
        monthsShort: "\u044F\u043D\u0440_\u0444\u0435\u0432_\u043C\u0430\u0440_\u0430\u043F\u0440_\u043C\u0430\u0439_\u044E\u043D\u0438_\u044E\u043B\u0438_\u0430\u0432\u0433_\u0441\u0435\u043F_\u043E\u043A\u0442_\u043D\u043E\u0435_\u0434\u0435\u043A".split("_"),
        weekdays: "\u043D\u0435\u0434\u0435\u043B\u044F_\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u043D\u0438\u043A_\u0432\u0442\u043E\u0440\u043D\u0438\u043A_\u0441\u0440\u044F\u0434\u0430_\u0447\u0435\u0442\u0432\u044A\u0440\u0442\u044A\u043A_\u043F\u0435\u0442\u044A\u043A_\u0441\u044A\u0431\u043E\u0442\u0430".split("_"),
        weekdaysShort: "\u043D\u0435\u0434_\u043F\u043E\u043D_\u0432\u0442\u043E_\u0441\u0440\u044F_\u0447\u0435\u0442_\u043F\u0435\u0442_\u0441\u044A\u0431".split("_"),
        weekdaysMin: "\u043D\u0434_\u043F\u043D_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043F\u0442_\u0441\u0431".split("_"),
        longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" },
        calendar: obj,
        relativeTime: { future: "\u0441\u043B\u0435\u0434 %s", past: "\u043F\u0440\u0435\u0434\u0438 %s", s: "\u043D\u044F\u043A\u043E\u043B\u043A\u043E \u0441\u0435\u043A\u0443\u043D\u0434\u0438", ss: "%d \u0441\u0435\u043A\u0443\u043D\u0434\u0438", m: "\u043C\u0438\u043D\u0443\u0442\u0430", mm: "%d \u043C\u0438\u043D\u0443\u0442\u0438", h: "\u0447\u0430\u0441", hh: "%d \u0447\u0430\u0441\u0430", d: "\u0434\u0435\u043D", dd: "%d \u0434\u043D\u0438", M: "\u043C\u0435\u0441\u0435\u0446", MM: "%d \u043C\u0435\u0441\u0435\u0446\u0430", y: "\u0433\u043E\u0434\u0438\u043D\u0430", yy: "%d \u0433\u043E\u0434\u0438\u043D\u0438" },
        dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
        ordinal(arg0) {
          const result = arg0 % 10;
          const result1 = arg0 % 100;
          if (0 === arg0) {
            let text = `${arg0}-ев`;
          } else if (0 === result1) {
            text = `${arg0}-ен`;
          } else {
            if (10 < result1) {
              if (result1 < 20) {
                text = `${arg0}-ти`;
              }
            }
            if (1 === result) {
              text = `${arg0}-ви`;
            } else if (2 === result) {
              text = `${arg0}-ри`;
            } else {
              if (7 !== result) {
                if (8 !== result) {
                  text = `${arg0}-ти`;
                }
              }
              text = `${arg0}-ми`;
            }
          }
          return text;
        },
        week: { dow: 1, doy: 7 }
      };
      obj = {
        sameDay: "[\u0414\u043D\u0435\u0441 \u0432] LT",
        nextDay: "[\u0423\u0442\u0440\u0435 \u0432] LT",
        nextWeek: "dddd [\u0432] LT",
        lastDay: "[\u0412\u0447\u0435\u0440\u0430 \u0432] LT",
        lastWeek() {
          const dayResult = this.day();
          if (0 !== dayResult) {
            if (3 !== dayResult) {
              if (6 !== dayResult) {
                return "[\u0412 \u0438\u0437\u043C\u0438\u043D\u0430\u043B\u0438\u044F] dddd [\u0432] LT";
              }
            }
          }
          return "[\u0412 \u0438\u0437\u043C\u0438\u043D\u0430\u043B\u0430\u0442\u0430] dddd [\u0432] LT";
        },
        sameElse: "L"
      };
      return defineLocale.defineLocale("bg", obj);
    });
  }
}
const moment = this.moment;
obj = {
  months: "\u044F\u043D\u0443\u0430\u0440\u0438_\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438_\u043C\u0430\u0440\u0442_\u0430\u043F\u0440\u0438\u043B_\u043C\u0430\u0439_\u044E\u043D\u0438_\u044E\u043B\u0438_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043F\u0442\u0435\u043C\u0432\u0440\u0438_\u043E\u043A\u0442\u043E\u043C\u0432\u0440\u0438_\u043D\u043E\u0435\u043C\u0432\u0440\u0438_\u0434\u0435\u043A\u0435\u043C\u0432\u0440\u0438".split("_"),
  monthsShort: "\u044F\u043D\u0440_\u0444\u0435\u0432_\u043C\u0430\u0440_\u0430\u043F\u0440_\u043C\u0430\u0439_\u044E\u043D\u0438_\u044E\u043B\u0438_\u0430\u0432\u0433_\u0441\u0435\u043F_\u043E\u043A\u0442_\u043D\u043E\u0435_\u0434\u0435\u043A".split("_"),
  weekdays: "\u043D\u0435\u0434\u0435\u043B\u044F_\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u043D\u0438\u043A_\u0432\u0442\u043E\u0440\u043D\u0438\u043A_\u0441\u0440\u044F\u0434\u0430_\u0447\u0435\u0442\u0432\u044A\u0440\u0442\u044A\u043A_\u043F\u0435\u0442\u044A\u043A_\u0441\u044A\u0431\u043E\u0442\u0430".split("_"),
  weekdaysShort: "\u043D\u0435\u0434_\u043F\u043E\u043D_\u0432\u0442\u043E_\u0441\u0440\u044F_\u0447\u0435\u0442_\u043F\u0435\u0442_\u0441\u044A\u0431".split("_"),
  weekdaysMin: "\u043D\u0434_\u043F\u043D_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043F\u0442_\u0441\u0431".split("_"),
  longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" },
  calendar: obj1,
  relativeTime: { future: "\u0441\u043B\u0435\u0434 %s", past: "\u043F\u0440\u0435\u0434\u0438 %s", s: "\u043D\u044F\u043A\u043E\u043B\u043A\u043E \u0441\u0435\u043A\u0443\u043D\u0434\u0438", ss: "%d \u0441\u0435\u043A\u0443\u043D\u0434\u0438", m: "\u043C\u0438\u043D\u0443\u0442\u0430", mm: "%d \u043C\u0438\u043D\u0443\u0442\u0438", h: "\u0447\u0430\u0441", hh: "%d \u0447\u0430\u0441\u0430", d: "\u0434\u0435\u043D", dd: "%d \u0434\u043D\u0438", M: "\u043C\u0435\u0441\u0435\u0446", MM: "%d \u043C\u0435\u0441\u0435\u0446\u0430", y: "\u0433\u043E\u0434\u0438\u043D\u0430", yy: "%d \u0433\u043E\u0434\u0438\u043D\u0438" },
  dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
  ordinal(arg0) {
    const result = arg0 % 10;
    const result1 = arg0 % 100;
    if (0 === arg0) {
      let text = `${arg0}-ев`;
    } else if (0 === result1) {
      text = `${arg0}-ен`;
    } else {
      if (10 < result1) {
        if (result1 < 20) {
          text = `${arg0}-ти`;
        }
      }
      if (1 === result) {
        text = `${arg0}-ви`;
      } else if (2 === result) {
        text = `${arg0}-ри`;
      } else {
        if (7 !== result) {
          if (8 !== result) {
            text = `${arg0}-ти`;
          }
        }
        text = `${arg0}-ми`;
      }
    }
    return text;
  },
  week: { dow: 1, doy: 7 }
};
moment.defineLocale("bg", obj);