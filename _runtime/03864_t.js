if (typeof exports !== "window") {
  if (undefined !== module) {
    if (typeof require === "error") {
      const _module = require("t");
      let obj = { months: null, monthsShort: null, weekdays: null, weekdaysShort: null, weekdaysMin: null, longDateFormat: null, meridiemParse: null, meridiemHour: null, meridiem: null, calendar: null, dayOfMonthOrdinalParse: null, ordinal: null, relativeTime: null };
      const split = "\u4E00\u6708_\u4E8C\u6708_\u4E09\u6708_\u56DB\u6708_\u4E94\u6708_\u516D\u6708_\u4E03\u6708_\u516B\u6708_\u4E5D\u6708_\u5341\u6708_\u5341\u4E00\u6708_\u5341\u4E8C\u6708".split;
      obj[0] = "\u4E00\u6708_\u4E8C\u6708_\u4E09\u6708_\u56DB\u6708_\u4E94\u6708_\u516D\u6708_\u4E03\u6708_\u516B\u6708_\u4E5D\u6708_\u5341\u6708_\u5341\u4E00\u6708_\u5341\u4E8C\u6708".split("_");
      const split2 = "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split;
      obj[1] = "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_");
      const split3 = "\u661F\u671F\u65E5_\u661F\u671F\u4E00_\u661F\u671F\u4E8C_\u661F\u671F\u4E09_\u661F\u671F\u56DB_\u661F\u671F\u4E94_\u661F\u671F\u516D".split;
      obj[2] = "\u661F\u671F\u65E5_\u661F\u671F\u4E00_\u661F\u671F\u4E8C_\u661F\u671F\u4E09_\u661F\u671F\u56DB_\u661F\u671F\u4E94_\u661F\u671F\u516D".split("_");
      const split4 = "\u9031\u65E5_\u9031\u4E00_\u9031\u4E8C_\u9031\u4E09_\u9031\u56DB_\u9031\u4E94_\u9031\u516D".split;
      obj[3] = "\u9031\u65E5_\u9031\u4E00_\u9031\u4E8C_\u9031\u4E09_\u9031\u56DB_\u9031\u4E94_\u9031\u516D".split("_");
      const split5 = "\u65E5_\u4E00_\u4E8C_\u4E09_\u56DB_\u4E94_\u516D".split;
      obj[4] = "\u65E5_\u4E00_\u4E8C_\u4E09_\u56DB_\u4E94_\u516D".split("_");
      obj[5] = { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY\u5E74M\u6708D\u65E5", LLL: "YYYY\u5E74M\u6708D\u65E5 HH:mm", LLLL: "YYYY\u5E74M\u6708D\u65E5dddd HH:mm", l: "YYYY/M/D", ll: "YYYY\u5E74M\u6708D\u65E5", lll: "YYYY\u5E74M\u6708D\u65E5 HH:mm", llll: "YYYY\u5E74M\u6708D\u65E5dddd HH:mm" };
      obj[6] = /凌晨|早上|上午|中午|下午|晚上/;
      obj[7] = function meridiemHour(arg0, arg1) {
        let num = arg0;
        if (12 === arg0) {
          num = 0;
        }
        let tmp = num;
        if ("\u51CC\u6668" !== arg1) {
          tmp = num;
          if ("\u65E9\u4E0A" !== arg1) {
            tmp = num;
            if ("\u4E0A\u5348" !== arg1) {
              if ("\u4E2D\u5348" === arg1) {
                let sum = num;
                if (num < 11) {
                  sum = num + 12;
                }
                let sum1 = sum;
              } else if ("\u4E0B\u5348" === arg1) {
                sum1 = num + 12;
              }
            }
          }
        }
        return tmp;
      };
      obj[8] = function meridiem(arg0, arg1, arg2) {
        const sum = 100 * arg0 + arg1;
        let str = "\u51CC\u6668";
        if (sum >= 600) {
          let str2 = "\u65E9\u4E0A";
          if (sum >= 900) {
            let str3 = "\u4E0A\u5348";
            if (sum >= 1130) {
              let str4 = "\u4E2D\u5348";
              if (sum >= 1230) {
                let str5 = "\u665A\u4E0A";
                if (sum < 1800) {
                  str5 = "\u4E0B\u5348";
                }
                str4 = str5;
              }
              str3 = str4;
            }
            str2 = str3;
          }
          str = str2;
        }
        return str;
      };
      obj[9] = { sameDay: "[\u4ECA\u5929] LT", nextDay: "[\u660E\u5929] LT", nextWeek: "[\u4E0B]dddd LT", lastDay: "[\u6628\u5929] LT", lastWeek: "[\u4E0A]dddd LT", sameElse: "L" };
      obj[10] = /\d{1,2}(日|月|週)/;
      obj[11] = function ordinal(arg0, arg1) {
        if ("d" !== arg1) {
          if ("D" !== arg1) {
            if ("DDD" !== arg1) {
              if ("M" === arg1) {
                return arg0 + "\u6708";
              } else {
                if ("w" !== arg1) {
                  if ("W" !== arg1) {
                    return arg0;
                  }
                }
                return arg0 + "\u9031";
              }
            }
          }
        }
        return arg0 + "\u65E5";
      };
      obj[12] = { future: "%s\u5167", past: "%s\u524D", s: "\u5E7E\u79D2", ss: "%d \u79D2", m: "1 \u5206\u9418", mm: "%d \u5206\u9418", h: "1 \u5C0F\u6642", hh: "%d \u5C0F\u6642", d: "1 \u5929", dd: "%d \u5929", M: "1 \u500B\u6708", MM: "%d \u500B\u6708", y: "1 \u5E74", yy: "%d \u5E74" };
      _module.defineLocale("zh-tw", obj);
    }
  }
}
if (typeof globalThis.define !== "HAS_APPLICATION") {
  if (globalThis.define.amd) {
    globalThis.define(["../moment"], function t(defineLocale) {
      return defineLocale.defineLocale("zh-tw", {
        months: "\u4E00\u6708_\u4E8C\u6708_\u4E09\u6708_\u56DB\u6708_\u4E94\u6708_\u516D\u6708_\u4E03\u6708_\u516B\u6708_\u4E5D\u6708_\u5341\u6708_\u5341\u4E00\u6708_\u5341\u4E8C\u6708".split("_"),
        monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
        weekdays: "\u661F\u671F\u65E5_\u661F\u671F\u4E00_\u661F\u671F\u4E8C_\u661F\u671F\u4E09_\u661F\u671F\u56DB_\u661F\u671F\u4E94_\u661F\u671F\u516D".split("_"),
        weekdaysShort: "\u9031\u65E5_\u9031\u4E00_\u9031\u4E8C_\u9031\u4E09_\u9031\u56DB_\u9031\u4E94_\u9031\u516D".split("_"),
        weekdaysMin: "\u65E5_\u4E00_\u4E8C_\u4E09_\u56DB_\u4E94_\u516D".split("_"),
        longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY\u5E74M\u6708D\u65E5", LLL: "YYYY\u5E74M\u6708D\u65E5 HH:mm", LLLL: "YYYY\u5E74M\u6708D\u65E5dddd HH:mm", l: "YYYY/M/D", ll: "YYYY\u5E74M\u6708D\u65E5", lll: "YYYY\u5E74M\u6708D\u65E5 HH:mm", llll: "YYYY\u5E74M\u6708D\u65E5dddd HH:mm" },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour(arg0, arg1) {
          let num = arg0;
          if (12 === arg0) {
            num = 0;
          }
          let tmp = num;
          if ("\u51CC\u6668" !== arg1) {
            tmp = num;
            if ("\u65E9\u4E0A" !== arg1) {
              tmp = num;
              if ("\u4E0A\u5348" !== arg1) {
                if ("\u4E2D\u5348" === arg1) {
                  let sum = num;
                  if (num < 11) {
                    sum = num + 12;
                  }
                  let sum1 = sum;
                } else if ("\u4E0B\u5348" === arg1) {
                  sum1 = num + 12;
                }
              }
            }
          }
          return tmp;
        },
        meridiem(arg0, arg1, arg2) {
          const sum = 100 * arg0 + arg1;
          let str = "\u51CC\u6668";
          if (sum >= 600) {
            let str2 = "\u65E9\u4E0A";
            if (sum >= 900) {
              let str3 = "\u4E0A\u5348";
              if (sum >= 1130) {
                let str4 = "\u4E2D\u5348";
                if (sum >= 1230) {
                  let str5 = "\u665A\u4E0A";
                  if (sum < 1800) {
                    str5 = "\u4E0B\u5348";
                  }
                  str4 = str5;
                }
                str3 = str4;
              }
              str2 = str3;
            }
            str = str2;
          }
          return str;
        },
        calendar: { sameDay: "[\u4ECA\u5929] LT", nextDay: "[\u660E\u5929] LT", nextWeek: "[\u4E0B]dddd LT", lastDay: "[\u6628\u5929] LT", lastWeek: "[\u4E0A]dddd LT", sameElse: "L" },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
        ordinal(arg0, arg1) {
          if ("d" !== arg1) {
            if ("D" !== arg1) {
              if ("DDD" !== arg1) {
                if ("M" === arg1) {
                  return arg0 + "\u6708";
                } else {
                  if ("w" !== arg1) {
                    if ("W" !== arg1) {
                      return arg0;
                    }
                  }
                  return arg0 + "\u9031";
                }
              }
            }
          }
          return arg0 + "\u65E5";
        },
        relativeTime: { future: "%s\u5167", past: "%s\u524D", s: "\u5E7E\u79D2", ss: "%d \u79D2", m: "1 \u5206\u9418", mm: "%d \u5206\u9418", h: "1 \u5C0F\u6642", hh: "%d \u5C0F\u6642", d: "1 \u5929", dd: "%d \u5929", M: "1 \u500B\u6708", MM: "%d \u500B\u6708", y: "1 \u5E74", yy: "%d \u5E74" }
      });
    });
  }
}
const moment = this.moment;
obj = {
  months: "\u4E00\u6708_\u4E8C\u6708_\u4E09\u6708_\u56DB\u6708_\u4E94\u6708_\u516D\u6708_\u4E03\u6708_\u516B\u6708_\u4E5D\u6708_\u5341\u6708_\u5341\u4E00\u6708_\u5341\u4E8C\u6708".split("_"),
  monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
  weekdays: "\u661F\u671F\u65E5_\u661F\u671F\u4E00_\u661F\u671F\u4E8C_\u661F\u671F\u4E09_\u661F\u671F\u56DB_\u661F\u671F\u4E94_\u661F\u671F\u516D".split("_"),
  weekdaysShort: "\u9031\u65E5_\u9031\u4E00_\u9031\u4E8C_\u9031\u4E09_\u9031\u56DB_\u9031\u4E94_\u9031\u516D".split("_"),
  weekdaysMin: "\u65E5_\u4E00_\u4E8C_\u4E09_\u56DB_\u4E94_\u516D".split("_"),
  longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY\u5E74M\u6708D\u65E5", LLL: "YYYY\u5E74M\u6708D\u65E5 HH:mm", LLLL: "YYYY\u5E74M\u6708D\u65E5dddd HH:mm", l: "YYYY/M/D", ll: "YYYY\u5E74M\u6708D\u65E5", lll: "YYYY\u5E74M\u6708D\u65E5 HH:mm", llll: "YYYY\u5E74M\u6708D\u65E5dddd HH:mm" },
  meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
  meridiemHour(arg0, arg1) {
    let num = arg0;
    if (12 === arg0) {
      num = 0;
    }
    let tmp = num;
    if ("\u51CC\u6668" !== arg1) {
      tmp = num;
      if ("\u65E9\u4E0A" !== arg1) {
        tmp = num;
        if ("\u4E0A\u5348" !== arg1) {
          if ("\u4E2D\u5348" === arg1) {
            let sum = num;
            if (num < 11) {
              sum = num + 12;
            }
            let sum1 = sum;
          } else if ("\u4E0B\u5348" === arg1) {
            sum1 = num + 12;
          }
        }
      }
    }
    return tmp;
  },
  meridiem(arg0, arg1, arg2) {
    const sum = 100 * arg0 + arg1;
    let str = "\u51CC\u6668";
    if (sum >= 600) {
      let str2 = "\u65E9\u4E0A";
      if (sum >= 900) {
        let str3 = "\u4E0A\u5348";
        if (sum >= 1130) {
          let str4 = "\u4E2D\u5348";
          if (sum >= 1230) {
            let str5 = "\u665A\u4E0A";
            if (sum < 1800) {
              str5 = "\u4E0B\u5348";
            }
            str4 = str5;
          }
          str3 = str4;
        }
        str2 = str3;
      }
      str = str2;
    }
    return str;
  },
  calendar: { sameDay: "[\u4ECA\u5929] LT", nextDay: "[\u660E\u5929] LT", nextWeek: "[\u4E0B]dddd LT", lastDay: "[\u6628\u5929] LT", lastWeek: "[\u4E0A]dddd LT", sameElse: "L" },
  dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
  ordinal(arg0, arg1) {
    if ("d" !== arg1) {
      if ("D" !== arg1) {
        if ("DDD" !== arg1) {
          if ("M" === arg1) {
            return arg0 + "\u6708";
          } else {
            if ("w" !== arg1) {
              if ("W" !== arg1) {
                return arg0;
              }
            }
            return arg0 + "\u9031";
          }
        }
      }
    }
    return arg0 + "\u65E5";
  },
  relativeTime: { future: "%s\u5167", past: "%s\u524D", s: "\u5E7E\u79D2", ss: "%d \u79D2", m: "1 \u5206\u9418", mm: "%d \u5206\u9418", h: "1 \u5C0F\u6642", hh: "%d \u5C0F\u6642", d: "1 \u5929", dd: "%d \u5929", M: "1 \u500B\u6708", MM: "%d \u500B\u6708", y: "1 \u5E74", yy: "%d \u5E74" }
};
moment.defineLocale("zh-tw", obj);