// === Module 3841: t ===

// Module 3841 (t)
if (typeof exports !== "window") {
  if (undefined !== module) {
    if (typeof require === "error") {
      const _module = require("t");
      let obj = { monthsNominativeEl: null, monthsGenitiveEl: null, months: null, monthsShort: null, weekdays: null, weekdaysShort: null, weekdaysMin: null, meridiem: null, isPM: null, meridiemParse: null, longDateFormat: null, calendarEl: null, calendar: null, relativeTime: null, dayOfMonthOrdinalParse: null, ordinal: "%d\u03B7", week: null };
      const split = "\u0399\u03B1\u03BD\u03BF\u03C5\u03AC\u03C1\u03B9\u03BF\u03C2_\u03A6\u03B5\u03B2\u03C1\u03BF\u03C5\u03AC\u03C1\u03B9\u03BF\u03C2_\u039C\u03AC\u03C1\u03C4\u03B9\u03BF\u03C2_\u0391\u03C0\u03C1\u03AF\u03BB\u03B9\u03BF\u03C2_\u039C\u03AC\u03B9\u03BF\u03C2_\u0399\u03BF\u03CD\u03BD\u03B9\u03BF\u03C2_\u0399\u03BF\u03CD\u03BB\u03B9\u03BF\u03C2_\u0391\u03CD\u03B3\u03BF\u03C5\u03C3\u03C4\u03BF\u03C2_\u03A3\u03B5\u03C0\u03C4\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2_\u039F\u03BA\u03C4\u03CE\u03B2\u03C1\u03B9\u03BF\u03C2_\u039D\u03BF\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2_\u0394\u03B5\u03BA\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2".split;
      obj[0] = "\u0399\u03B1\u03BD\u03BF\u03C5\u03AC\u03C1\u03B9\u03BF\u03C2_\u03A6\u03B5\u03B2\u03C1\u03BF\u03C5\u03AC\u03C1\u03B9\u03BF\u03C2_\u039C\u03AC\u03C1\u03C4\u03B9\u03BF\u03C2_\u0391\u03C0\u03C1\u03AF\u03BB\u03B9\u03BF\u03C2_\u039C\u03AC\u03B9\u03BF\u03C2_\u0399\u03BF\u03CD\u03BD\u03B9\u03BF\u03C2_\u0399\u03BF\u03CD\u03BB\u03B9\u03BF\u03C2_\u0391\u03CD\u03B3\u03BF\u03C5\u03C3\u03C4\u03BF\u03C2_\u03A3\u03B5\u03C0\u03C4\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2_\u039F\u03BA\u03C4\u03CE\u03B2\u03C1\u03B9\u03BF\u03C2_\u039D\u03BF\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2_\u0394\u03B5\u03BA\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2".split("_");
      const split2 = "\u0399\u03B1\u03BD\u03BF\u03C5\u03B1\u03C1\u03AF\u03BF\u03C5_\u03A6\u03B5\u03B2\u03C1\u03BF\u03C5\u03B1\u03C1\u03AF\u03BF\u03C5_\u039C\u03B1\u03C1\u03C4\u03AF\u03BF\u03C5_\u0391\u03C0\u03C1\u03B9\u03BB\u03AF\u03BF\u03C5_\u039C\u03B1\u0390\u03BF\u03C5_\u0399\u03BF\u03C5\u03BD\u03AF\u03BF\u03C5_\u0399\u03BF\u03C5\u03BB\u03AF\u03BF\u03C5_\u0391\u03C5\u03B3\u03BF\u03CD\u03C3\u03C4\u03BF\u03C5_\u03A3\u03B5\u03C0\u03C4\u03B5\u03BC\u03B2\u03C1\u03AF\u03BF\u03C5_\u039F\u03BA\u03C4\u03C9\u03B2\u03C1\u03AF\u03BF\u03C5_\u039D\u03BF\u03B5\u03BC\u03B2\u03C1\u03AF\u03BF\u03C5_\u0394\u03B5\u03BA\u03B5\u03BC\u03B2\u03C1\u03AF\u03BF\u03C5".split;
      obj[1] = "\u0399\u03B1\u03BD\u03BF\u03C5\u03B1\u03C1\u03AF\u03BF\u03C5_\u03A6\u03B5\u03B2\u03C1\u03BF\u03C5\u03B1\u03C1\u03AF\u03BF\u03C5_\u039C\u03B1\u03C1\u03C4\u03AF\u03BF\u03C5_\u0391\u03C0\u03C1\u03B9\u03BB\u03AF\u03BF\u03C5_\u039C\u03B1\u0390\u03BF\u03C5_\u0399\u03BF\u03C5\u03BD\u03AF\u03BF\u03C5_\u0399\u03BF\u03C5\u03BB\u03AF\u03BF\u03C5_\u0391\u03C5\u03B3\u03BF\u03CD\u03C3\u03C4\u03BF\u03C5_\u03A3\u03B5\u03C0\u03C4\u03B5\u03BC\u03B2\u03C1\u03AF\u03BF\u03C5_\u039F\u03BA\u03C4\u03C9\u03B2\u03C1\u03AF\u03BF\u03C5_\u039D\u03BF\u03B5\u03BC\u03B2\u03C1\u03AF\u03BF\u03C5_\u0394\u03B5\u03BA\u03B5\u03BC\u03B2\u03C1\u03AF\u03BF\u03C5".split("_");
      obj[2] = function months(month, str) {
        let self = this;
        if (month) {
          if (typeof str === "ge") {
            self._monthsNominativeEl[month.month(month)];
          } else {
            const obj = /D/;
          }
          self = month.month();
        } else {
          return self._monthsNominativeEl;
        }
      };
      const split3 = "\u0399\u03B1\u03BD_\u03A6\u03B5\u03B2_\u039C\u03B1\u03C1_\u0391\u03C0\u03C1_\u039C\u03B1\u03CA_\u0399\u03BF\u03C5\u03BD_\u0399\u03BF\u03C5\u03BB_\u0391\u03C5\u03B3_\u03A3\u03B5\u03C0_\u039F\u03BA\u03C4_\u039D\u03BF\u03B5_\u0394\u03B5\u03BA".split;
      obj[3] = "\u0399\u03B1\u03BD_\u03A6\u03B5\u03B2_\u039C\u03B1\u03C1_\u0391\u03C0\u03C1_\u039C\u03B1\u03CA_\u0399\u03BF\u03C5\u03BD_\u0399\u03BF\u03C5\u03BB_\u0391\u03C5\u03B3_\u03A3\u03B5\u03C0_\u039F\u03BA\u03C4_\u039D\u03BF\u03B5_\u0394\u03B5\u03BA".split("_");
      const split4 = "\u039A\u03C5\u03C1\u03B9\u03B1\u03BA\u03AE_\u0394\u03B5\u03C5\u03C4\u03AD\u03C1\u03B1_\u03A4\u03C1\u03AF\u03C4\u03B7_\u03A4\u03B5\u03C4\u03AC\u03C1\u03C4\u03B7_\u03A0\u03AD\u03BC\u03C0\u03C4\u03B7_\u03A0\u03B1\u03C1\u03B1\u03C3\u03BA\u03B5\u03C5\u03AE_\u03A3\u03AC\u03B2\u03B2\u03B1\u03C4\u03BF".split;
      obj[4] = "\u039A\u03C5\u03C1\u03B9\u03B1\u03BA\u03AE_\u0394\u03B5\u03C5\u03C4\u03AD\u03C1\u03B1_\u03A4\u03C1\u03AF\u03C4\u03B7_\u03A4\u03B5\u03C4\u03AC\u03C1\u03C4\u03B7_\u03A0\u03AD\u03BC\u03C0\u03C4\u03B7_\u03A0\u03B1\u03C1\u03B1\u03C3\u03BA\u03B5\u03C5\u03AE_\u03A3\u03AC\u03B2\u03B2\u03B1\u03C4\u03BF".split("_");
      const split5 = "\u039A\u03C5\u03C1_\u0394\u03B5\u03C5_\u03A4\u03C1\u03B9_\u03A4\u03B5\u03C4_\u03A0\u03B5\u03BC_\u03A0\u03B1\u03C1_\u03A3\u03B1\u03B2".split;
      obj[5] = "\u039A\u03C5\u03C1_\u0394\u03B5\u03C5_\u03A4\u03C1\u03B9_\u03A4\u03B5\u03C4_\u03A0\u03B5\u03BC_\u03A0\u03B1\u03C1_\u03A3\u03B1\u03B2".split("_");
      const split6 = "\u039A\u03C5_\u0394\u03B5_\u03A4\u03C1_\u03A4\u03B5_\u03A0\u03B5_\u03A0\u03B1_\u03A3\u03B1".split;
      obj[6] = "\u039A\u03C5_\u0394\u03B5_\u03A4\u03C1_\u03A4\u03B5_\u03A0\u03B5_\u03A0\u03B1_\u03A3\u03B1".split("_");
      obj[7] = function meridiem(arg0, arg1, arg2) {
        if (arg0 > 11) {
          let str2 = "\u039C\u039C";
          if (arg2) {
            str2 = "\u03BC\u03BC";
          }
          let str = str2;
        } else {
          str = "\u03A0\u039C";
          if (arg2) {
            str = "\u03C0\u03BC";
          }
        }
        return str;
      };
      obj[8] = function isPM(arg0) {
        return "\u03BC" === `${arg0}`.toLowerCase()[0];
      };
      obj[9] = /[ΠΜ]\.?Μ?\.?/i;
      obj[10] = { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" };
      obj = { sameDay: "[\u03A3\u03AE\u03BC\u03B5\u03C1\u03B1 {}] LT", nextDay: "[\u0391\u03CD\u03C1\u03B9\u03BF {}] LT", nextWeek: "dddd [{}] LT", lastDay: "[\u03A7\u03B8\u03B5\u03C2 {}] LT", lastWeek: null, sameElse: "L" };
      obj[4] = function lastWeek() {
        let str = "[\u03C4\u03B7\u03BD \u03C0\u03C1\u03BF\u03B7\u03B3\u03BF\u03CD\u03BC\u03B5\u03BD\u03B7] dddd [{}] LT";
        if (6 === this.day()) {
          str = "[\u03C4\u03BF \u03C0\u03C1\u03BF\u03B7\u03B3\u03BF\u03CD\u03BC\u03B5\u03BD\u03BF] dddd [{}] LT";
        }
        return str;
      };
      obj[11] = obj;
      obj[12] = function calendar(arg0, hours) {
        let hoursResult = hours;
        if (hours) {
          hoursResult = hours.hours();
        }
        if (this._calendarEl[arg0] instanceof Function) {
          let str2 = obj;
          if (tmp2) {
            str2 = obj.apply(hours);
          }
          let str3 = "\u03C3\u03C4\u03B9\u03C2";
          if (hoursResult % 12 === 1) {
            str3 = "\u03C3\u03C4\u03B7";
          }
          return str2.replace("{}", str3);
        } else {
          const _Object = Object;
          let str = Object.prototype.toString;
          const call = str.call;
          str = "[object Function]";
          const tmp3 = typeof call === "unknown" ? str() : call(obj);
        }
      };
      obj[13] = { future: "\u03C3\u03B5 %s", past: "%s \u03C0\u03C1\u03B9\u03BD", s: "\u03BB\u03AF\u03B3\u03B1 \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03B1", ss: "%d \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03B1", m: "\u03AD\u03BD\u03B1 \u03BB\u03B5\u03C0\u03C4\u03CC", mm: "%d \u03BB\u03B5\u03C0\u03C4\u03AC", h: "\u03BC\u03AF\u03B1 \u03CE\u03C1\u03B1", hh: "%d \u03CE\u03C1\u03B5\u03C2", d: "\u03BC\u03AF\u03B1 \u03BC\u03AD\u03C1\u03B1", dd: "%d \u03BC\u03AD\u03C1\u03B5\u03C2", M: "\u03AD\u03BD\u03B1\u03C2 \u03BC\u03AE\u03BD\u03B1\u03C2", MM: "%d \u03BC\u03AE\u03BD\u03B5\u03C2", y: "\u03AD\u03BD\u03B1\u03C2 \u03C7\u03C1\u03CC\u03BD\u03BF\u03C2", yy: "%d \u03C7\u03C1\u03CC\u03BD\u03B9\u03B1" };
      obj[14] = /\d{1,2}η/;
      obj[16] = { dow: 1, doy: 4 };
      _module.defineLocale("el", obj);
    }
  }
}
if (typeof globalThis.define !== "HAS_APPLICATION") {
  if (globalThis.define.amd) {
    globalThis.define(["../moment"], function n(defineLocale) {
      obj = {
        monthsNominativeEl: "\u0399\u03B1\u03BD\u03BF\u03C5\u03AC\u03C1\u03B9\u03BF\u03C2_\u03A6\u03B5\u03B2\u03C1\u03BF\u03C5\u03AC\u03C1\u03B9\u03BF\u03C2_\u039C\u03AC\u03C1\u03C4\u03B9\u03BF\u03C2_\u0391\u03C0\u03C1\u03AF\u03BB\u03B9\u03BF\u03C2_\u039C\u03AC\u03B9\u03BF\u03C2_\u0399\u03BF\u03CD\u03BD\u03B9\u03BF\u03C2_\u0399\u03BF\u03CD\u03BB\u03B9\u03BF\u03C2_\u0391\u03CD\u03B3\u03BF\u03C5\u03C3\u03C4\u03BF\u03C2_\u03A3\u03B5\u03C0\u03C4\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2_\u039F\u03BA\u03C4\u03CE\u03B2\u03C1\u03B9\u03BF\u03C2_\u039D\u03BF\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2_\u0394\u03B5\u03BA\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2".split("_"),
        monthsGenitiveEl: "\u0399\u03B1\u03BD\u03BF\u03C5\u03B1\u03C1\u03AF\u03BF\u03C5_\u03A6\u03B5\u03B2\u03C1\u03BF\u03C5\u03B1\u03C1\u03AF\u03BF\u03C5_\u039C\u03B1\u03C1\u03C4\u03AF\u03BF\u03C5_\u0391\u03C0\u03C1\u03B9\u03BB\u03AF\u03BF\u03C5_\u039C\u03B1\u0390\u03BF\u03C5_\u0399\u03BF\u03C5\u03BD\u03AF\u03BF\u03C5_\u0399\u03BF\u03C5\u03BB\u03AF\u03BF\u03C5_\u0391\u03C5\u03B3\u03BF\u03CD\u03C3\u03C4\u03BF\u03C5_\u03A3\u03B5\u03C0\u03C4\u03B5\u03BC\u03B2\u03C1\u03AF\u03BF\u03C5_\u039F\u03BA\u03C4\u03C9\u03B2\u03C1\u03AF\u03BF\u03C5_\u039D\u03BF\u03B5\u03BC\u03B2\u03C1\u03AF\u03BF\u03C5_\u0394\u03B5\u03BA\u03B5\u03BC\u03B2\u03C1\u03AF\u03BF\u03C5".split("_"),
        months(month, str) {
          let self = this;
          if (month) {
            if (typeof str === "ge") {
              self._monthsNominativeEl[month.month(month)];
            } else {
              const obj = /D/;
            }
            self = month.month();
          } else {
            return self._monthsNominativeEl;
          }
        },
        monthsShort: "\u0399\u03B1\u03BD_\u03A6\u03B5\u03B2_\u039C\u03B1\u03C1_\u0391\u03C0\u03C1_\u039C\u03B1\u03CA_\u0399\u03BF\u03C5\u03BD_\u0399\u03BF\u03C5\u03BB_\u0391\u03C5\u03B3_\u03A3\u03B5\u03C0_\u039F\u03BA\u03C4_\u039D\u03BF\u03B5_\u0394\u03B5\u03BA".split("_"),
        weekdays: "\u039A\u03C5\u03C1\u03B9\u03B1\u03BA\u03AE_\u0394\u03B5\u03C5\u03C4\u03AD\u03C1\u03B1_\u03A4\u03C1\u03AF\u03C4\u03B7_\u03A4\u03B5\u03C4\u03AC\u03C1\u03C4\u03B7_\u03A0\u03AD\u03BC\u03C0\u03C4\u03B7_\u03A0\u03B1\u03C1\u03B1\u03C3\u03BA\u03B5\u03C5\u03AE_\u03A3\u03AC\u03B2\u03B2\u03B1\u03C4\u03BF".split("_"),
        weekdaysShort: "\u039A\u03C5\u03C1_\u0394\u03B5\u03C5_\u03A4\u03C1\u03B9_\u03A4\u03B5\u03C4_\u03A0\u03B5\u03BC_\u03A0\u03B1\u03C1_\u03A3\u03B1\u03B2".split("_"),
        weekdaysMin: "\u039A\u03C5_\u0394\u03B5_\u03A4\u03C1_\u03A4\u03B5_\u03A0\u03B5_\u03A0\u03B1_\u03A3\u03B1".split("_"),
        meridiem(arg0, arg1, arg2) {
          if (arg0 > 11) {
            let str2 = "\u039C\u039C";
            if (arg2) {
              str2 = "\u03BC\u03BC";
            }
            let str = str2;
          } else {
            str = "\u03A0\u039C";
            if (arg2) {
              str = "\u03C0\u03BC";
            }
          }
          return str;
        },
        isPM(arg0) {
          return "\u03BC" === `${arg0}`.toLowerCase()[0];
        },
        meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
        longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" },
        calendarEl: obj,
        calendar(arg0, hours) {
          let hoursResult = hours;
          if (hours) {
            hoursResult = hours.hours();
          }
          if (this._calendarEl[arg0] instanceof Function) {
            let str2 = obj;
            if (tmp2) {
              str2 = obj.apply(hours);
            }
            let str3 = "\u03C3\u03C4\u03B9\u03C2";
            if (hoursResult % 12 === 1) {
              str3 = "\u03C3\u03C4\u03B7";
            }
            return str2.replace("{}", str3);
          } else {
            const _Object = Object;
            let str = Object.prototype.toString;
            const call = str.call;
            str = "[object Function]";
            const tmp3 = typeof call === "unknown" ? str() : call(obj);
          }
        },
        relativeTime: { future: "\u03C3\u03B5 %s", past: "%s \u03C0\u03C1\u03B9\u03BD", s: "\u03BB\u03AF\u03B3\u03B1 \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03B1", ss: "%d \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03B1", m: "\u03AD\u03BD\u03B1 \u03BB\u03B5\u03C0\u03C4\u03CC", mm: "%d \u03BB\u03B5\u03C0\u03C4\u03AC", h: "\u03BC\u03AF\u03B1 \u03CE\u03C1\u03B1", hh: "%d \u03CE\u03C1\u03B5\u03C2", d: "\u03BC\u03AF\u03B1 \u03BC\u03AD\u03C1\u03B1", dd: "%d \u03BC\u03AD\u03C1\u03B5\u03C2", M: "\u03AD\u03BD\u03B1\u03C2 \u03BC\u03AE\u03BD\u03B1\u03C2", MM: "%d \u03BC\u03AE\u03BD\u03B5\u03C2", y: "\u03AD\u03BD\u03B1\u03C2 \u03C7\u03C1\u03CC\u03BD\u03BF\u03C2", yy: "%d \u03C7\u03C1\u03CC\u03BD\u03B9\u03B1" },
        dayOfMonthOrdinalParse: /\d{1,2}η/,
        ordinal: "%d\u03B7",
        week: { dow: 1, doy: 4 }
      };
      obj = {
        sameDay: "[\u03A3\u03AE\u03BC\u03B5\u03C1\u03B1 {}] LT",
        nextDay: "[\u0391\u03CD\u03C1\u03B9\u03BF {}] LT",
        nextWeek: "dddd [{}] LT",
        lastDay: "[\u03A7\u03B8\u03B5\u03C2 {}] LT",
        lastWeek() {
          let str = "[\u03C4\u03B7\u03BD \u03C0\u03C1\u03BF\u03B7\u03B3\u03BF\u03CD\u03BC\u03B5\u03BD\u03B7] dddd [{}] LT";
          if (6 === this.day()) {
            str = "[\u03C4\u03BF \u03C0\u03C1\u03BF\u03B7\u03B3\u03BF\u03CD\u03BC\u03B5\u03BD\u03BF] dddd [{}] LT";
          }
          return str;
        },
        sameElse: "L"
      };
      return defineLocale.defineLocale("el", obj);
    });
  }
}
const moment = this.moment;
obj = {
  monthsNominativeEl: "\u0399\u03B1\u03BD\u03BF\u03C5\u03AC\u03C1\u03B9\u03BF\u03C2_\u03A6\u03B5\u03B2\u03C1\u03BF\u03C5\u03AC\u03C1\u03B9\u03BF\u03C2_\u039C\u03AC\u03C1\u03C4\u03B9\u03BF\u03C2_\u0391\u03C0\u03C1\u03AF\u03BB\u03B9\u03BF\u03C2_\u039C\u03AC\u03B9\u03BF\u03C2_\u0399\u03BF\u03CD\u03BD\u03B9\u03BF\u03C2_\u0399\u03BF\u03CD\u03BB\u03B9\u03BF\u03C2_\u0391\u03CD\u03B3\u03BF\u03C5\u03C3\u03C4\u03BF\u03C2_\u03A3\u03B5\u03C0\u03C4\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2_\u039F\u03BA\u03C4\u03CE\u03B2\u03C1\u03B9\u03BF\u03C2_\u039D\u03BF\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2_\u0394\u03B5\u03BA\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2".split("_"),
  monthsGenitiveEl: "\u0399\u03B1\u03BD\u03BF\u03C5\u03B1\u03C1\u03AF\u03BF\u03C5_\u03A6\u03B5\u03B2\u03C1\u03BF\u03C5\u03B1\u03C1\u03AF\u03BF\u03C5_\u039C\u03B1\u03C1\u03C4\u03AF\u03BF\u03C5_\u0391\u03C0\u03C1\u03B9\u03BB\u03AF\u03BF\u03C5_\u039C\u03B1\u0390\u03BF\u03C5_\u0399\u03BF\u03C5\u03BD\u03AF\u03BF\u03C5_\u0399\u03BF\u03C5\u03BB\u03AF\u03BF\u03C5_\u0391\u03C5\u03B3\u03BF\u03CD\u03C3\u03C4\u03BF\u03C5_\u03A3\u03B5\u03C0\u03C4\u03B5\u03BC\u03B2\u03C1\u03AF\u03BF\u03C5_\u039F\u03BA\u03C4\u03C9\u03B2\u03C1\u03AF\u03BF\u03C5_\u039D\u03BF\u03B5\u03BC\u03B2\u03C1\u03AF\u03BF\u03C5_\u0394\u03B5\u03BA\u03B5\u03BC\u03B2\u03C1\u03AF\u03BF\u03C5".split("_"),
  months(month, str) {
    let self = this;
    if (month) {
      if (typeof str === "ge") {
        self._monthsNominativeEl[month.month(month)];
      } else {
        const obj = /D/;
      }
      self = month.month();
    } else {
      return self._monthsNominativeEl;
    }
  },
  monthsShort: "\u0399\u03B1\u03BD_\u03A6\u03B5\u03B2_\u039C\u03B1\u03C1_\u0391\u03C0\u03C1_\u039C\u03B1\u03CA_\u0399\u03BF\u03C5\u03BD_\u0399\u03BF\u03C5\u03BB_\u0391\u03C5\u03B3_\u03A3\u03B5\u03C0_\u039F\u03BA\u03C4_\u039D\u03BF\u03B5_\u0394\u03B5\u03BA".split("_"),
  weekdays: "\u039A\u03C5\u03C1\u03B9\u03B1\u03BA\u03AE_\u0394\u03B5\u03C5\u03C4\u03AD\u03C1\u03B1_\u03A4\u03C1\u03AF\u03C4\u03B7_\u03A4\u03B5\u03C4\u03AC\u03C1\u03C4\u03B7_\u03A0\u03AD\u03BC\u03C0\u03C4\u03B7_\u03A0\u03B1\u03C1\u03B1\u03C3\u03BA\u03B5\u03C5\u03AE_\u03A3\u03AC\u03B2\u03B2\u03B1\u03C4\u03BF".split("_"),
  weekdaysShort: "\u039A\u03C5\u03C1_\u0394\u03B5\u03C5_\u03A4\u03C1\u03B9_\u03A4\u03B5\u03C4_\u03A0\u03B5\u03BC_\u03A0\u03B1\u03C1_\u03A3\u03B1\u03B2".split("_"),
  weekdaysMin: "\u039A\u03C5_\u0394\u03B5_\u03A4\u03C1_\u03A4\u03B5_\u03A0\u03B5_\u03A0\u03B1_\u03A3\u03B1".split("_"),
  meridiem(arg0, arg1, arg2) {
    if (arg0 > 11) {
      let str2 = "\u039C\u039C";
      if (arg2) {
        str2 = "\u03BC\u03BC";
      }
      let str = str2;
    } else {
      str = "\u03A0\u039C";
      if (arg2) {
        str = "\u03C0\u03BC";
      }
    }
    return str;
  },
  isPM(arg0) {
    return "\u03BC" === `${arg0}`.toLowerCase()[0];
  },
  meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
  longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" },
  calendarEl: obj1,
  calendar(arg0, hours) {
    let hoursResult = hours;
    if (hours) {
      hoursResult = hours.hours();
    }
    if (this._calendarEl[arg0] instanceof Function) {
      let str2 = obj;
      if (tmp2) {
        str2 = obj.apply(hours);
      }
      let str3 = "\u03C3\u03C4\u03B9\u03C2";
      if (hoursResult % 12 === 1) {
        str3 = "\u03C3\u03C4\u03B7";
      }
      return str2.replace("{}", str3);
    } else {
      const _Object = Object;
      let str = Object.prototype.toString;
      const call = str.call;
      str = "[object Function]";
      const tmp3 = typeof call === "unknown" ? str() : call(obj);
    }
  },
  relativeTime: { future: "\u03C3\u03B5 %s", past: "%s \u03C0\u03C1\u03B9\u03BD", s: "\u03BB\u03AF\u03B3\u03B1 \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03B1", ss: "%d \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03B1", m: "\u03AD\u03BD\u03B1 \u03BB\u03B5\u03C0\u03C4\u03CC", mm: "%d \u03BB\u03B5\u03C0\u03C4\u03AC", h: "\u03BC\u03AF\u03B1 \u03CE\u03C1\u03B1", hh: "%d \u03CE\u03C1\u03B5\u03C2", d: "\u03BC\u03AF\u03B1 \u03BC\u03AD\u03C1\u03B1", dd: "%d \u03BC\u03AD\u03C1\u03B5\u03C2", M: "\u03AD\u03BD\u03B1\u03C2 \u03BC\u03AE\u03BD\u03B1\u03C2", MM: "%d \u03BC\u03AE\u03BD\u03B5\u03C2", y: "\u03AD\u03BD\u03B1\u03C2 \u03C7\u03C1\u03CC\u03BD\u03BF\u03C2", yy: "%d \u03C7\u03C1\u03CC\u03BD\u03B9\u03B1" },
  dayOfMonthOrdinalParse: /\d{1,2}η/,
  ordinal: "%d\u03B7",
  week: { dow: 1, doy: 4 }
};
moment.defineLocale("el", obj);