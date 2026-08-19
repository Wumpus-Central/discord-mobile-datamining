// === Module 4003: t ===

// Module 4003 (t)
import t from "t" /* 3975 */;

if (typeof exports === "object") {
  if (undefined !== module) {
    if (typeof require === "function") {
      const _module = t;
      let closure_0 = { 1: "\u0967", 2: "\u0968", 3: "\u0969", 4: "\u096A", 5: "\u096B", 6: "\u096C", 7: "\u096D", 8: "\u096E", 9: "\u096F", 0: "\u0966" };
      let closure_1 = { "१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0" };
      let obj = { months: null, monthsShort: null, monthsParseExact: true, weekdays: null, weekdaysShort: null, weekdaysMin: null, longDateFormat: null, calendar: null, relativeTime: null, preparse: null, postformat: null, meridiemParse: null, meridiemHour: null, meridiem: null, week: null };
      const split = "\u091C\u0928\u0935\u0930\u0940_\u092B\u093C\u0930\u0935\u0930\u0940_\u092E\u093E\u0930\u094D\u091A_\u0905\u092A\u094D\u0930\u0948\u0932_\u092E\u0908_\u091C\u0942\u0928_\u091C\u0941\u0932\u093E\u0908_\u0905\u0917\u0938\u094D\u0924_\u0938\u093F\u0924\u092E\u094D\u092C\u0930_\u0905\u0915\u094D\u091F\u0942\u092C\u0930_\u0928\u0935\u092E\u094D\u092C\u0930_\u0926\u093F\u0938\u092E\u094D\u092C\u0930".split;
      obj[0] = "\u091C\u0928\u0935\u0930\u0940_\u092B\u093C\u0930\u0935\u0930\u0940_\u092E\u093E\u0930\u094D\u091A_\u0905\u092A\u094D\u0930\u0948\u0932_\u092E\u0908_\u091C\u0942\u0928_\u091C\u0941\u0932\u093E\u0908_\u0905\u0917\u0938\u094D\u0924_\u0938\u093F\u0924\u092E\u094D\u092C\u0930_\u0905\u0915\u094D\u091F\u0942\u092C\u0930_\u0928\u0935\u092E\u094D\u092C\u0930_\u0926\u093F\u0938\u092E\u094D\u092C\u0930".split("_");
      const split2 = "\u091C\u0928._\u092B\u093C\u0930._\u092E\u093E\u0930\u094D\u091A_\u0905\u092A\u094D\u0930\u0948._\u092E\u0908_\u091C\u0942\u0928_\u091C\u0941\u0932._\u0905\u0917._\u0938\u093F\u0924._\u0905\u0915\u094D\u091F\u0942._\u0928\u0935._\u0926\u093F\u0938.".split;
      obj[1] = "\u091C\u0928._\u092B\u093C\u0930._\u092E\u093E\u0930\u094D\u091A_\u0905\u092A\u094D\u0930\u0948._\u092E\u0908_\u091C\u0942\u0928_\u091C\u0941\u0932._\u0905\u0917._\u0938\u093F\u0924._\u0905\u0915\u094D\u091F\u0942._\u0928\u0935._\u0926\u093F\u0938.".split("_");
      const split3 = "\u0930\u0935\u093F\u0935\u093E\u0930_\u0938\u094B\u092E\u0935\u093E\u0930_\u092E\u0902\u0917\u0932\u0935\u093E\u0930_\u092C\u0941\u0927\u0935\u093E\u0930_\u0917\u0941\u0930\u0942\u0935\u093E\u0930_\u0936\u0941\u0915\u094D\u0930\u0935\u093E\u0930_\u0936\u0928\u093F\u0935\u093E\u0930".split;
      obj[3] = "\u0930\u0935\u093F\u0935\u093E\u0930_\u0938\u094B\u092E\u0935\u093E\u0930_\u092E\u0902\u0917\u0932\u0935\u093E\u0930_\u092C\u0941\u0927\u0935\u093E\u0930_\u0917\u0941\u0930\u0942\u0935\u093E\u0930_\u0936\u0941\u0915\u094D\u0930\u0935\u093E\u0930_\u0936\u0928\u093F\u0935\u093E\u0930".split("_");
      const split4 = "\u0930\u0935\u093F_\u0938\u094B\u092E_\u092E\u0902\u0917\u0932_\u092C\u0941\u0927_\u0917\u0941\u0930\u0942_\u0936\u0941\u0915\u094D\u0930_\u0936\u0928\u093F".split;
      obj[4] = "\u0930\u0935\u093F_\u0938\u094B\u092E_\u092E\u0902\u0917\u0932_\u092C\u0941\u0927_\u0917\u0941\u0930\u0942_\u0936\u0941\u0915\u094D\u0930_\u0936\u0928\u093F".split("_");
      const split5 = "\u0930_\u0938\u094B_\u092E\u0902_\u092C\u0941_\u0917\u0941_\u0936\u0941_\u0936".split;
      obj[5] = "\u0930_\u0938\u094B_\u092E\u0902_\u092C\u0941_\u0917\u0941_\u0936\u0941_\u0936".split("_");
      obj[6] = { LT: "A h:mm \u092C\u091C\u0947", LTS: "A h:mm:ss \u092C\u091C\u0947", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm \u092C\u091C\u0947", LLLL: "dddd, D MMMM YYYY, A h:mm \u092C\u091C\u0947" };
      obj[7] = { sameDay: "[\u0906\u091C] LT", nextDay: "[\u0915\u0932] LT", nextWeek: "dddd, LT", lastDay: "[\u0915\u0932] LT", lastWeek: "[\u092A\u093F\u091B\u0932\u0947] dddd, LT", sameElse: "L" };
      obj[8] = { future: "%s \u092E\u0947\u0902", past: "%s \u092A\u0939\u0932\u0947", s: "\u0915\u0941\u091B \u0939\u0940 \u0915\u094D\u0937\u0923", ss: "%d \u0938\u0947\u0915\u0902\u0921", m: "\u090F\u0915 \u092E\u093F\u0928\u091F", mm: "%d \u092E\u093F\u0928\u091F", h: "\u090F\u0915 \u0918\u0902\u091F\u093E", hh: "%d \u0918\u0902\u091F\u0947", d: "\u090F\u0915 \u0926\u093F\u0928", dd: "%d \u0926\u093F\u0928", M: "\u090F\u0915 \u092E\u0939\u0940\u0928\u0947", MM: "%d \u092E\u0939\u0940\u0928\u0947", y: "\u090F\u0915 \u0935\u0930\u094D\u0937", yy: "%d \u0935\u0930\u094D\u0937" };
      obj[9] = function preparse(_i) {
        return _i.replace(/[१२३४५६७८९०]/g, (arg0) => table[arg0]);
      };
      obj[10] = function postformat(pastFutureResult) {
        return pastFutureResult.replace(/\d/g, (arg0) => table[arg0]);
      };
      obj[11] = /रात|सुबह|दोपहर|शाम/;
      obj[12] = function meridiemHour(arg0, arg1) {
        let num = arg0;
        if (12 === arg0) {
          num = 0;
        }
        if ("\u0930\u093E\u0924" === arg1) {
          let sum = num;
          if (num >= 4) {
            sum = num + 12;
          }
          let tmp = sum;
        } else {
          tmp = num;
          if ("\u0938\u0941\u092C\u0939" !== arg1) {
            if ("\u0926\u094B\u092A\u0939\u0930" === arg1) {
              let sum1 = num;
              if (num < 10) {
                sum1 = num + 12;
              }
              let sum2 = sum1;
            } else if ("\u0936\u093E\u092E" === arg1) {
              sum2 = num + 12;
            }
          }
        }
        return tmp;
      };
      obj[13] = function meridiem(arg0, arg1, arg2) {
        let str = "\u0930\u093E\u0924";
        let str2 = "\u0930\u093E\u0924";
        if (arg0 >= 4) {
          let str3 = "\u0938\u0941\u092C\u0939";
          if (arg0 >= 10) {
            let str4 = "\u0926\u094B\u092A\u0939\u0930";
            if (arg0 >= 17) {
              if (arg0 < 20) {
                str = "\u0936\u093E\u092E";
              }
              str4 = str;
            }
            str3 = str4;
          }
          str2 = str3;
        }
        return str2;
      };
      obj[14] = { dow: 0, doy: 6 };
      _module.defineLocale("hi", obj);
    }
  }
}
if (typeof globalThis.define === "function") {
  if (globalThis.define.amd) {
    globalThis.define(["../moment"], function _(defineLocale) {
      closure_0 = { 1: "\u0967", 2: "\u0968", 3: "\u0969", 4: "\u096A", 5: "\u096B", 6: "\u096C", 7: "\u096D", 8: "\u096E", 9: "\u096F", 0: "\u0966" };
      closure_1 = { "१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0" };
      return defineLocale.defineLocale("hi", {
        months: "\u091C\u0928\u0935\u0930\u0940_\u092B\u093C\u0930\u0935\u0930\u0940_\u092E\u093E\u0930\u094D\u091A_\u0905\u092A\u094D\u0930\u0948\u0932_\u092E\u0908_\u091C\u0942\u0928_\u091C\u0941\u0932\u093E\u0908_\u0905\u0917\u0938\u094D\u0924_\u0938\u093F\u0924\u092E\u094D\u092C\u0930_\u0905\u0915\u094D\u091F\u0942\u092C\u0930_\u0928\u0935\u092E\u094D\u092C\u0930_\u0926\u093F\u0938\u092E\u094D\u092C\u0930".split("_"),
        monthsShort: "\u091C\u0928._\u092B\u093C\u0930._\u092E\u093E\u0930\u094D\u091A_\u0905\u092A\u094D\u0930\u0948._\u092E\u0908_\u091C\u0942\u0928_\u091C\u0941\u0932._\u0905\u0917._\u0938\u093F\u0924._\u0905\u0915\u094D\u091F\u0942._\u0928\u0935._\u0926\u093F\u0938.".split("_"),
        monthsParseExact: true,
        weekdays: "\u0930\u0935\u093F\u0935\u093E\u0930_\u0938\u094B\u092E\u0935\u093E\u0930_\u092E\u0902\u0917\u0932\u0935\u093E\u0930_\u092C\u0941\u0927\u0935\u093E\u0930_\u0917\u0941\u0930\u0942\u0935\u093E\u0930_\u0936\u0941\u0915\u094D\u0930\u0935\u093E\u0930_\u0936\u0928\u093F\u0935\u093E\u0930".split("_"),
        weekdaysShort: "\u0930\u0935\u093F_\u0938\u094B\u092E_\u092E\u0902\u0917\u0932_\u092C\u0941\u0927_\u0917\u0941\u0930\u0942_\u0936\u0941\u0915\u094D\u0930_\u0936\u0928\u093F".split("_"),
        weekdaysMin: "\u0930_\u0938\u094B_\u092E\u0902_\u092C\u0941_\u0917\u0941_\u0936\u0941_\u0936".split("_"),
        longDateFormat: { LT: "A h:mm \u092C\u091C\u0947", LTS: "A h:mm:ss \u092C\u091C\u0947", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm \u092C\u091C\u0947", LLLL: "dddd, D MMMM YYYY, A h:mm \u092C\u091C\u0947" },
        calendar: { sameDay: "[\u0906\u091C] LT", nextDay: "[\u0915\u0932] LT", nextWeek: "dddd, LT", lastDay: "[\u0915\u0932] LT", lastWeek: "[\u092A\u093F\u091B\u0932\u0947] dddd, LT", sameElse: "L" },
        relativeTime: { future: "%s \u092E\u0947\u0902", past: "%s \u092A\u0939\u0932\u0947", s: "\u0915\u0941\u091B \u0939\u0940 \u0915\u094D\u0937\u0923", ss: "%d \u0938\u0947\u0915\u0902\u0921", m: "\u090F\u0915 \u092E\u093F\u0928\u091F", mm: "%d \u092E\u093F\u0928\u091F", h: "\u090F\u0915 \u0918\u0902\u091F\u093E", hh: "%d \u0918\u0902\u091F\u0947", d: "\u090F\u0915 \u0926\u093F\u0928", dd: "%d \u0926\u093F\u0928", M: "\u090F\u0915 \u092E\u0939\u0940\u0928\u0947", MM: "%d \u092E\u0939\u0940\u0928\u0947", y: "\u090F\u0915 \u0935\u0930\u094D\u0937", yy: "%d \u0935\u0930\u094D\u0937" },
        preparse(_i) {
          return _i.replace(/[१२३४५६७८९०]/g, (arg0) => table[arg0]);
        },
        postformat(pastFutureResult) {
          return pastFutureResult.replace(/\d/g, (arg0) => table[arg0]);
        },
        meridiemParse: /रात|सुबह|दोपहर|शाम/,
        meridiemHour(arg0, arg1) {
          let num = arg0;
          if (12 === arg0) {
            num = 0;
          }
          if ("\u0930\u093E\u0924" === arg1) {
            let sum = num;
            if (num >= 4) {
              sum = num + 12;
            }
            let tmp = sum;
          } else {
            tmp = num;
            if ("\u0938\u0941\u092C\u0939" !== arg1) {
              if ("\u0926\u094B\u092A\u0939\u0930" === arg1) {
                let sum1 = num;
                if (num < 10) {
                  sum1 = num + 12;
                }
                let sum2 = sum1;
              } else if ("\u0936\u093E\u092E" === arg1) {
                sum2 = num + 12;
              }
            }
          }
          return tmp;
        },
        meridiem(arg0, arg1, arg2) {
          let str = "\u0930\u093E\u0924";
          let str2 = "\u0930\u093E\u0924";
          if (arg0 >= 4) {
            let str3 = "\u0938\u0941\u092C\u0939";
            if (arg0 >= 10) {
              let str4 = "\u0926\u094B\u092A\u0939\u0930";
              if (arg0 >= 17) {
                if (arg0 < 20) {
                  str = "\u0936\u093E\u092E";
                }
                str4 = str;
              }
              str3 = str4;
            }
            str2 = str3;
          }
          return str2;
        },
        week: { dow: 0, doy: 6 }
      });
    });
  }
}
const moment = this.moment;
closure_0 = { 1: "\u0967", 2: "\u0968", 3: "\u0969", 4: "\u096A", 5: "\u096B", 6: "\u096C", 7: "\u096D", 8: "\u096E", 9: "\u096F", 0: "\u0966" };
closure_1 = { "१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0" };
obj = {
  months: "\u091C\u0928\u0935\u0930\u0940_\u092B\u093C\u0930\u0935\u0930\u0940_\u092E\u093E\u0930\u094D\u091A_\u0905\u092A\u094D\u0930\u0948\u0932_\u092E\u0908_\u091C\u0942\u0928_\u091C\u0941\u0932\u093E\u0908_\u0905\u0917\u0938\u094D\u0924_\u0938\u093F\u0924\u092E\u094D\u092C\u0930_\u0905\u0915\u094D\u091F\u0942\u092C\u0930_\u0928\u0935\u092E\u094D\u092C\u0930_\u0926\u093F\u0938\u092E\u094D\u092C\u0930".split("_"),
  monthsShort: "\u091C\u0928._\u092B\u093C\u0930._\u092E\u093E\u0930\u094D\u091A_\u0905\u092A\u094D\u0930\u0948._\u092E\u0908_\u091C\u0942\u0928_\u091C\u0941\u0932._\u0905\u0917._\u0938\u093F\u0924._\u0905\u0915\u094D\u091F\u0942._\u0928\u0935._\u0926\u093F\u0938.".split("_"),
  monthsParseExact: true,
  weekdays: "\u0930\u0935\u093F\u0935\u093E\u0930_\u0938\u094B\u092E\u0935\u093E\u0930_\u092E\u0902\u0917\u0932\u0935\u093E\u0930_\u092C\u0941\u0927\u0935\u093E\u0930_\u0917\u0941\u0930\u0942\u0935\u093E\u0930_\u0936\u0941\u0915\u094D\u0930\u0935\u093E\u0930_\u0936\u0928\u093F\u0935\u093E\u0930".split("_"),
  weekdaysShort: "\u0930\u0935\u093F_\u0938\u094B\u092E_\u092E\u0902\u0917\u0932_\u092C\u0941\u0927_\u0917\u0941\u0930\u0942_\u0936\u0941\u0915\u094D\u0930_\u0936\u0928\u093F".split("_"),
  weekdaysMin: "\u0930_\u0938\u094B_\u092E\u0902_\u092C\u0941_\u0917\u0941_\u0936\u0941_\u0936".split("_"),
  longDateFormat: { LT: "A h:mm \u092C\u091C\u0947", LTS: "A h:mm:ss \u092C\u091C\u0947", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm \u092C\u091C\u0947", LLLL: "dddd, D MMMM YYYY, A h:mm \u092C\u091C\u0947" },
  calendar: { sameDay: "[\u0906\u091C] LT", nextDay: "[\u0915\u0932] LT", nextWeek: "dddd, LT", lastDay: "[\u0915\u0932] LT", lastWeek: "[\u092A\u093F\u091B\u0932\u0947] dddd, LT", sameElse: "L" },
  relativeTime: { future: "%s \u092E\u0947\u0902", past: "%s \u092A\u0939\u0932\u0947", s: "\u0915\u0941\u091B \u0939\u0940 \u0915\u094D\u0937\u0923", ss: "%d \u0938\u0947\u0915\u0902\u0921", m: "\u090F\u0915 \u092E\u093F\u0928\u091F", mm: "%d \u092E\u093F\u0928\u091F", h: "\u090F\u0915 \u0918\u0902\u091F\u093E", hh: "%d \u0918\u0902\u091F\u0947", d: "\u090F\u0915 \u0926\u093F\u0928", dd: "%d \u0926\u093F\u0928", M: "\u090F\u0915 \u092E\u0939\u0940\u0928\u0947", MM: "%d \u092E\u0939\u0940\u0928\u0947", y: "\u090F\u0915 \u0935\u0930\u094D\u0937", yy: "%d \u0935\u0930\u094D\u0937" },
  preparse(_i) {
    return _i.replace(/[१२३४५६७८९०]/g, (arg0) => table[arg0]);
  },
  postformat(pastFutureResult) {
    return pastFutureResult.replace(/\d/g, (arg0) => table[arg0]);
  },
  meridiemParse: /रात|सुबह|दोपहर|शाम/,
  meridiemHour(arg0, arg1) {
    let num = arg0;
    if (12 === arg0) {
      num = 0;
    }
    if ("\u0930\u093E\u0924" === arg1) {
      let sum = num;
      if (num >= 4) {
        sum = num + 12;
      }
      let tmp = sum;
    } else {
      tmp = num;
      if ("\u0938\u0941\u092C\u0939" !== arg1) {
        if ("\u0926\u094B\u092A\u0939\u0930" === arg1) {
          let sum1 = num;
          if (num < 10) {
            sum1 = num + 12;
          }
          let sum2 = sum1;
        } else if ("\u0936\u093E\u092E" === arg1) {
          sum2 = num + 12;
        }
      }
    }
    return tmp;
  },
  meridiem(arg0, arg1, arg2) {
    let str = "\u0930\u093E\u0924";
    let str2 = "\u0930\u093E\u0924";
    if (arg0 >= 4) {
      let str3 = "\u0938\u0941\u092C\u0939";
      if (arg0 >= 10) {
        let str4 = "\u0926\u094B\u092A\u0939\u0930";
        if (arg0 >= 17) {
          if (arg0 < 20) {
            str = "\u0936\u093E\u092E";
          }
          str4 = str;
        }
        str3 = str4;
      }
      str2 = str3;
    }
    return str2;
  },
  week: { dow: 0, doy: 6 }
};
moment.defineLocale("hi", obj);