let fn = function _(moment) {
  function relativeTimeWithPlural(arg0, arg1, arg2) {
    if ("m" === arg2) {
      let str7 = "\u0445\u0432\u0438\u043B\u0438\u043D\u0443";
      if (arg1) {
        str7 = "\u0445\u0432\u0438\u043B\u0438\u043D\u0430";
      }
      let sum = str7;
    } else if ("h" === arg2) {
      let str6 = "\u0433\u043E\u0434\u0438\u043D\u0443";
      if (arg1) {
        str6 = "\u0433\u043E\u0434\u0438\u043D\u0430";
      }
      sum = str6;
    } else {
      let str = "\u0441\u0435\u043A\u0443\u043D\u0434\u0443_\u0441\u0435\u043A\u0443\u043D\u0434\u0438_\u0441\u0435\u043A\u0443\u043D\u0434";
      const text = `${arg0} `;
      if (arg1) {
        str = "\u0441\u0435\u043A\u0443\u043D\u0434\u0430_\u0441\u0435\u043A\u0443\u043D\u0434\u0438_\u0441\u0435\u043A\u0443\u043D\u0434";
      }
      const obj = { ss: null, mm: null, hh: null, dd: "\u0434\u0435\u043D\u044C_\u0434\u043D\u0456_\u0434\u043D\u0456\u0432", MM: "\u043C\u0456\u0441\u044F\u0446\u044C_\u043C\u0456\u0441\u044F\u0446\u0456_\u043C\u0456\u0441\u044F\u0446\u0456\u0432", yy: "\u0440\u0456\u043A_\u0440\u043E\u043A\u0438_\u0440\u043E\u043A\u0456\u0432" };
      obj[0] = str;
      let str2 = "\u0445\u0432\u0438\u043B\u0438\u043D\u0443_\u0445\u0432\u0438\u043B\u0438\u043D\u0438_\u0445\u0432\u0438\u043B\u0438\u043D";
      if (arg1) {
        str2 = "\u0445\u0432\u0438\u043B\u0438\u043D\u0430_\u0445\u0432\u0438\u043B\u0438\u043D\u0438_\u0445\u0432\u0438\u043B\u0438\u043D";
      }
      obj[1] = str2;
      let str3 = "\u0433\u043E\u0434\u0438\u043D\u0443_\u0433\u043E\u0434\u0438\u043D\u0438_\u0433\u043E\u0434\u0438\u043D";
      if (arg1) {
        str3 = "\u0433\u043E\u0434\u0438\u043D\u0430_\u0433\u043E\u0434\u0438\u043D\u0438_\u0433\u043E\u0434\u0438\u043D";
      }
      obj[2] = str3;
      const parts = obj[arg2].split("_");
      const result = tmp % 10;
      if (result === 1) {
        if (tmp % 100 !== 11) {
          let first = parts[0];
        }
        sum = text + first;
      }
      if (2 <= result) {
        if (result <= 4) {
          const result1 = tmp % 100;
          first = parts[1];
        }
      }
      first = parts[2];
      const str4 = obj[arg2];
    }
    return sum;
  }
  let obj = { months: null, monthsShort: null, weekdays: null, weekdaysShort: null, weekdaysMin: null, longDateFormat: null, calendar: null, relativeTime: null, meridiemParse: null, isPM: null, meridiem: null, dayOfMonthOrdinalParse: null, ordinal: null, week: null };
  obj = { format: "\u0441\u0456\u0447\u043D\u044F_\u043B\u044E\u0442\u043E\u0433\u043E_\u0431\u0435\u0440\u0435\u0437\u043D\u044F_\u043A\u0432\u0456\u0442\u043D\u044F_\u0442\u0440\u0430\u0432\u043D\u044F_\u0447\u0435\u0440\u0432\u043D\u044F_\u043B\u0438\u043F\u043D\u044F_\u0441\u0435\u0440\u043F\u043D\u044F_\u0432\u0435\u0440\u0435\u0441\u043D\u044F_\u0436\u043E\u0432\u0442\u043D\u044F_\u043B\u0438\u0441\u0442\u043E\u043F\u0430\u0434\u0430_\u0433\u0440\u0443\u0434\u043D\u044F".split("_"), standalone: "\u0441\u0456\u0447\u0435\u043D\u044C_\u043B\u044E\u0442\u0438\u0439_\u0431\u0435\u0440\u0435\u0437\u0435\u043D\u044C_\u043A\u0432\u0456\u0442\u0435\u043D\u044C_\u0442\u0440\u0430\u0432\u0435\u043D\u044C_\u0447\u0435\u0440\u0432\u0435\u043D\u044C_\u043B\u0438\u043F\u0435\u043D\u044C_\u0441\u0435\u0440\u043F\u0435\u043D\u044C_\u0432\u0435\u0440\u0435\u0441\u0435\u043D\u044C_\u0436\u043E\u0432\u0442\u0435\u043D\u044C_\u043B\u0438\u0441\u0442\u043E\u043F\u0430\u0434_\u0433\u0440\u0443\u0434\u0435\u043D\u044C".split("_") };
  obj[0] = obj;
  obj[1] = "\u0441\u0456\u0447_\u043B\u044E\u0442_\u0431\u0435\u0440_\u043A\u0432\u0456\u0442_\u0442\u0440\u0430\u0432_\u0447\u0435\u0440\u0432_\u043B\u0438\u043F_\u0441\u0435\u0440\u043F_\u0432\u0435\u0440_\u0436\u043E\u0432\u0442_\u043B\u0438\u0441\u0442_\u0433\u0440\u0443\u0434".split("_");
  obj[2] = function weekdaysCaseReplace(arg0, arg1) {
    const obj = { nominative: "\u043D\u0435\u0434\u0456\u043B\u044F_\u043F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A_\u0432\u0456\u0432\u0442\u043E\u0440\u043E\u043A_\u0441\u0435\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440_\u043F\u2019\u044F\u0442\u043D\u0438\u0446\u044F_\u0441\u0443\u0431\u043E\u0442\u0430".split("_"), accusative: "\u043D\u0435\u0434\u0456\u043B\u044E_\u043F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A_\u0432\u0456\u0432\u0442\u043E\u0440\u043E\u043A_\u0441\u0435\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440_\u043F\u2019\u044F\u0442\u043D\u0438\u0446\u044E_\u0441\u0443\u0431\u043E\u0442\u0443".split("_"), genitive: "\u043D\u0435\u0434\u0456\u043B\u0456_\u043F\u043E\u043D\u0435\u0434\u0456\u043B\u043A\u0430_\u0432\u0456\u0432\u0442\u043E\u0440\u043A\u0430_\u0441\u0435\u0440\u0435\u0434\u0438_\u0447\u0435\u0442\u0432\u0435\u0440\u0433\u0430_\u043F\u2019\u044F\u0442\u043D\u0438\u0446\u0456_\u0441\u0443\u0431\u043E\u0442\u0438".split("_") };
    if (arg0) {
      let str = "accusative";
      if (!obj2.test(arg1)) {
        let str2 = "nominative";
        if (obj3.test(arg1)) {
          str2 = "genitive";
        }
        str = str2;
        obj3 = /\[?(?:минулої|наступної)? ?\] ?dddd/;
      }
      let nominative = obj[str][arg0.day(arg0)];
      obj2 = /(\[[ВвУу]\]) ?dddd/;
    } else {
      nominative = obj.nominative;
    }
    return nominative;
  };
  obj[3] = "\u043D\u0434_\u043F\u043D_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043F\u0442_\u0441\u0431".split("_");
  obj[4] = "\u043D\u0434_\u043F\u043D_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043F\u0442_\u0441\u0431".split("_");
  obj[5] = { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY \u0440.", LLL: "D MMMM YYYY \u0440., HH:mm", LLLL: "dddd, D MMMM YYYY \u0440., HH:mm" };
  obj = {
    sameDay: function() {
      let str = "";
      if (11 === this.hours()) {
        str = "\u0431";
      }
      return c0 + "\u043E" + str + "] LT";
    },
    nextDay: function() {
      let str = "";
      if (11 === this.hours()) {
        str = "\u0431";
      }
      return c0 + "\u043E" + str + "] LT";
    },
    lastDay: function() {
      let str = "";
      if (11 === this.hours()) {
        str = "\u0431";
      }
      return c0 + "\u043E" + str + "] LT";
    },
    nextWeek: function() {
      let str = "";
      if (11 === this.hours()) {
        str = "\u0431";
      }
      return c0 + "\u043E" + str + "] LT";
    },
    lastWeek() {
      const self = this;
      const dayResult = this.day();
      if (0 !== dayResult) {
        if (3 !== dayResult) {
          if (5 !== dayResult) {
            if (6 !== dayResult) {
              let c0 = "[\u041C\u0438\u043D\u0443\u043B\u043E\u0433\u043E] dddd [";
              const fn = function() {
                let str = "";
                if (11 === this.hours()) {
                  str = "\u0431";
                }
                return c0 + "\u043E" + str + "] LT";
              };
              const call = fn.call;
              if (typeof call === "unknown") {
                let str2 = "";
                if (11 === self.hours()) {
                  str2 = "\u0431";
                }
                const _HermesInternal = HermesInternal;
                let combined = "[\u041C\u0438\u043D\u0443\u043B\u043E\u0433\u043E] dddd [\u043E" + str2 + "] LT";
              } else {
                combined = call(self);
              }
              return combined;
            }
          }
        }
      }
      c0 = "[\u041C\u0438\u043D\u0443\u043B\u043E\u0457] dddd [";
      const fn2 = function() {
        let str = "";
        if (11 === this.hours()) {
          str = "\u0431";
        }
        return c0 + "\u043E" + str + "] LT";
      };
      const call2 = fn2.call;
      if (typeof call2 === "unknown") {
        let str5 = "";
        if (11 === self.hours()) {
          str5 = "\u0431";
        }
        const _HermesInternal2 = HermesInternal;
        let combined1 = "[\u041C\u0438\u043D\u0443\u043B\u043E\u0457] dddd [\u043E" + str5 + "] LT";
      } else {
        combined1 = call2(self);
      }
      return combined1;
    },
    sameElse: "L"
  };
  let c0 = "[\u0421\u044C\u043E\u0433\u043E\u0434\u043D\u0456 ";
  c0 = "[\u0417\u0430\u0432\u0442\u0440\u0430 ";
  c0 = "[\u0412\u0447\u043E\u0440\u0430 ";
  c0 = "[\u0423] dddd [";
  obj[6] = obj;
  obj[7] = { future: "\u0437\u0430 %s", past: "%s \u0442\u043E\u043C\u0443", s: "\u0434\u0435\u043A\u0456\u043B\u044C\u043A\u0430 \u0441\u0435\u043A\u0443\u043D\u0434", ss: relativeTimeWithPlural, m: relativeTimeWithPlural, mm: relativeTimeWithPlural, h: "\u0433\u043E\u0434\u0438\u043D\u0443", hh: relativeTimeWithPlural, d: "\u0434\u0435\u043D\u044C", dd: relativeTimeWithPlural, M: "\u043C\u0456\u0441\u044F\u0446\u044C", MM: relativeTimeWithPlural, y: "\u0440\u0456\u043A", yy: relativeTimeWithPlural };
  obj[8] = /ночі|ранку|дня|вечора/;
  obj[9] = function isPM(arg0) {
    return /^(дня|вечора)$/.test(arg0);
  };
  obj[10] = function meridiem(arg0, arg1, arg2) {
    let str = "\u043D\u043E\u0447\u0456";
    if (arg0 >= 4) {
      let str2 = "\u0440\u0430\u043D\u043A\u0443";
      if (arg0 >= 12) {
        let str3 = "\u0432\u0435\u0447\u043E\u0440\u0430";
        if (arg0 < 17) {
          str3 = "\u0434\u043D\u044F";
        }
        str2 = str3;
      }
      str = str2;
    }
    return str;
  };
  obj[11] = /\d{1,2}-(й|го)/;
  obj[12] = function ordinal(arg0, arg1) {
    if ("M" !== arg1) {
      if ("d" !== arg1) {
        if ("DDD" !== arg1) {
          if ("w" !== arg1) {
            if ("W" !== arg1) {
              if ("D" === arg1) {
                return arg0 + "-\u0433\u043E";
              } else {
                return arg0;
              }
            }
          }
        }
      }
    }
    return arg0 + "-\u0439";
  };
  obj[13] = { dow: 1, doy: 7 };
  return moment.defineLocale("uk", obj);
};
if (typeof exports !== "window") {
  if (undefined !== module) {
    if (typeof require === "find") {
      fn(require("t"));
    }
  }
}
if (typeof globalThis.define !== "three_button_mouse") {
  if (globalThis.define.amd) {
    globalThis.define(["../moment"], fn);
  }
}
fn(this.moment);