// === Module 4049: hooks ===

// Module 4049 (hooks)
import hooks from "hooks" /* 4044 */;

if (typeof exports === "object") {
  if (undefined !== module) {
    if (typeof require === "function") {
      const _module = hooks;
      let obj = { months: null, monthsShort: null, weekdays: null, weekdaysShort: null, weekdaysMin: null, longDateFormat: null, calendar: null, relativeTime: null, dayOfMonthOrdinalParse: null, ordinal: null, week: null };
      const split = "January_February_March_April_May_June_July_August_September_October_November_December".split;
      obj[0] = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
      const split2 = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split;
      obj[1] = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
      const split3 = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split;
      obj[2] = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
      const split4 = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split;
      obj[3] = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
      const split5 = "Su_Mo_Tu_We_Th_Fr_Sa".split;
      obj[4] = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
      obj[5] = { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" };
      obj[6] = { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" };
      obj[7] = { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };
      obj[8] = /\d{1,2}(st|nd|rd|th)/;
      obj[9] = function ordinal(arg0) {
        const result = arg0 % 10;
        let str = "th";
        let str2 = "th";
        if (1 !== ~~arg0 % 100 / 10) {
          let str3 = "st";
          if (1 !== result) {
            let str4 = "nd";
            if (2 !== result) {
              if (3 === result) {
                str = "rd";
              }
              str4 = str;
            }
            str3 = str4;
          }
          str2 = str3;
        }
        return arg0 + str2;
      };
      obj[10] = { dow: 1, doy: 4 };
      _module.defineLocale("en-gb", obj);
    }
  }
}
if (typeof globalThis.define === "function") {
  if (globalThis.define.amd) {
    globalThis.define(["../moment"], function n(defineLocale) {
      return defineLocale.defineLocale("en-gb", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" },
        calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" },
        relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal(arg0) {
          const result = arg0 % 10;
          let str = "th";
          let str2 = "th";
          if (1 !== ~~arg0 % 100 / 10) {
            let str3 = "st";
            if (1 !== result) {
              let str4 = "nd";
              if (2 !== result) {
                if (3 === result) {
                  str = "rd";
                }
                str4 = str;
              }
              str3 = str4;
            }
            str2 = str3;
          }
          return arg0 + str2;
        },
        week: { dow: 1, doy: 4 }
      });
    });
  }
}
const moment = this.moment;
obj = {
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
  monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
  weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
  longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" },
  calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" },
  relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" },
  dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
  ordinal(arg0) {
    const result = arg0 % 10;
    let str = "th";
    let str2 = "th";
    if (1 !== ~~arg0 % 100 / 10) {
      let str3 = "st";
      if (1 !== result) {
        let str4 = "nd";
        if (2 !== result) {
          if (3 === result) {
            str = "rd";
          }
          str4 = str;
        }
        str3 = str4;
      }
      str2 = str3;
    }
    return arg0 + str2;
  },
  week: { dow: 1, doy: 4 }
};
moment.defineLocale("en-gb", obj);