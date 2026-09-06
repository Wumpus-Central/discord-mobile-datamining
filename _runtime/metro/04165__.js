// _runtime/metro/04165__.js
import _mod4153 from "04153__.js";

const fn = function t(moment) {
  const obj = {
    eras: null,
    eraYearOrdinalRegex: /(元|\d+)年/,
    eraYearOrdinalParse(match, match) {
      let num = 1;
      if ("\u5143" !== match[1]) {
        let tmp2 = match[1];
        if (!tmp2) {
          tmp2 = match;
        }
        num = parseInt(tmp2, 10);
      }
      return num;
    },
    months: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split(
      "_",
    ),
    monthsShort:
      "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
    weekdays:
      "\u65E5\u66DC\u65E5_\u6708\u66DC\u65E5_\u706B\u66DC\u65E5_\u6C34\u66DC\u65E5_\u6728\u66DC\u65E5_\u91D1\u66DC\u65E5_\u571F\u66DC\u65E5".split(
        "_",
      ),
    weekdaysShort: "\u65E5_\u6708_\u706B_\u6C34_\u6728_\u91D1_\u571F".split("_"),
    weekdaysMin: "\u65E5_\u6708_\u706B_\u6C34_\u6728_\u91D1_\u571F".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "YYYY/MM/DD",
      LL: "YYYY\u5E74M\u6708D\u65E5",
      LLL: "YYYY\u5E74M\u6708D\u65E5 HH:mm",
      LLLL: "YYYY\u5E74M\u6708D\u65E5 dddd HH:mm",
      l: "YYYY/MM/DD",
      ll: "YYYY\u5E74M\u6708D\u65E5",
      lll: "YYYY\u5E74M\u6708D\u65E5 HH:mm",
      llll: "YYYY\u5E74M\u6708D\u65E5(ddd) HH:mm",
    },
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
    calendar: {
      sameDay: "[\u4ECA\u65E5] LT",
      nextDay: "[\u660E\u65E5] LT",
      nextWeek(week) {
        let str = "dddd LT";
        if (weekResult !== this.week()) {
          str = "[\u6765\u9031]dddd LT";
        }
        return str;
      },
      lastDay: "[\u6628\u65E5] LT",
      lastWeek(week) {
        let str = "dddd LT";
        if (weekResult !== week.week()) {
          str = "[\u5148\u9031]dddd LT";
        }
        return str;
      },
      sameElse: "L",
    },
    dayOfMonthOrdinalParse: /\d{1,2}日/,
    ordinal(arg0, arg1) {
      if ("y" === arg1) {
        let str5 = "\u5143\u5E74";
        if (1 !== arg0) {
          str5 = `${arg0}年`;
        }
        return str5;
      } else {
        if ("d" !== arg1) {
          if ("D" !== arg1) {
            if ("DDD" !== arg1) {
              return arg0;
            }
          }
        }
        return arg0 + "\u65E5";
      }
    },
    relativeTime: {
      future: "%s\u5F8C",
      past: "%s\u524D",
      s: "\u6570\u79D2",
      ss: "%d\u79D2",
      m: "1\u5206",
      mm: "%d\u5206",
      h: "1\u6642\u9593",
      hh: "%d\u6642\u9593",
      d: "1\u65E5",
      dd: "%d\u65E5",
      M: "1\u30F6\u6708",
      MM: "%d\u30F6\u6708",
      y: "1\u5E74",
      yy: "%d\u5E74",
    },
  };
  const items = [
    { since: "2019-05-01", offset: 1, name: "\u4EE4\u548C", narrow: "\u32FF", abbr: "R" },
    { since: "1989-01-08", until: "2019-04-30", offset: 1, name: "\u5E73\u6210", narrow: "\u337B", abbr: "H" },
    { since: "1926-12-25", until: "1989-01-07", offset: 1, name: "\u662D\u548C", narrow: "\u337C", abbr: "S" },
    { since: "1912-07-30", until: "1926-12-24", offset: 1, name: "\u5927\u6B63", narrow: "\u337D", abbr: "T" },
    { since: "1873-01-01", until: "1912-07-29", offset: 6, name: "\u660E\u6CBB", narrow: "\u337E", abbr: "M" },
    { since: "0001-01-01", until: "1873-12-31", offset: 1, name: "\u897F\u66A6", narrow: "AD", abbr: "AD" },
    { since: "0000-12-31", until: -Infinity, offset: 1, name: "\u7D00\u5143\u524D", narrow: "BC", abbr: "BC" },
  ];
  obj.eras = items;
  ({ split, split: split2 } = "\u65E5_\u6708_\u706B_\u6C34_\u6728_\u91D1_\u571F");
  return moment.defineLocale("ja", obj);
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
