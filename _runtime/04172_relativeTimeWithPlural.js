// _runtime/04172_relativeTimeWithPlural.js
import _mod4153 from "metro/04153__.js";

if (typeof exports === "object") {
  if (undefined !== module) {
    if (typeof require === "function") {
      const _module = _mod4153;
      const relativeTimeWithPlural2 = function relativeTimeWithPlural(arg0, arg1, arg2) {
        const result = arg0 % 100;
        let tmp2 = result >= 20;
        if (20 > result) {
          let tmp3 = arg0 >= 100;
          if (tmp3) {
            tmp3 = arg0 % 100 === 0;
          }
          tmp2 = tmp3;
        }
        let str = " ";
        if (tmp2) {
          str = " de ";
        }
        return (
          arg0 +
          str +
          { ss: "secunde", mm: "minute", hh: "ore", dd: "zile", ww: "s\u0103pt\u0103m\u00E2ni", MM: "luni", yy: "ani" }[
            arg2
          ]
        );
      };
      let obj = {
        months: null,
        monthsShort: null,
        monthsParseExact: true,
        weekdays: null,
        weekdaysShort: null,
        weekdaysMin: null,
        longDateFormat: null,
        calendar: null,
        relativeTime: null,
        week: null,
      };
      const split = "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie"
        .split;
      obj.months =
        "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_");
      const split2 = "ian._feb._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split;
      obj.monthsShort = "ian._feb._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_");
      const split3 = "duminic\u0103_luni_mar\u021Bi_miercuri_joi_vineri_s\u00E2mb\u0103t\u0103".split;
      obj.weekdays = "duminic\u0103_luni_mar\u021Bi_miercuri_joi_vineri_s\u00E2mb\u0103t\u0103".split("_");
      const split4 = "Dum_Lun_Mar_Mie_Joi_Vin_S\u00E2m".split;
      obj.weekdaysShort = "Dum_Lun_Mar_Mie_Joi_Vin_S\u00E2m".split("_");
      const split5 = "Du_Lu_Ma_Mi_Jo_Vi_S\u00E2".split;
      obj.weekdaysMin = "Du_Lu_Ma_Mi_Jo_Vi_S\u00E2".split("_");
      obj.longDateFormat = {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY H:mm",
        LLLL: "dddd, D MMMM YYYY H:mm",
      };
      obj.calendar = {
        sameDay: "[azi la] LT",
        nextDay: "[m\u00E2ine la] LT",
        nextWeek: "dddd [la] LT",
        lastDay: "[ieri la] LT",
        lastWeek: "[fosta] dddd [la] LT",
        sameElse: "L",
      };
      obj = {
        future: "peste %s",
        past: "%s \u00EEn urm\u0103",
        s: "c\u00E2teva secunde",
        ss: relativeTimeWithPlural2,
        m: "un minut",
        mm: relativeTimeWithPlural2,
        h: "o or\u0103",
        hh: relativeTimeWithPlural2,
        d: "o zi",
        dd: relativeTimeWithPlural2,
        w: "o s\u0103pt\u0103m\u00E2n\u0103",
        ww: relativeTimeWithPlural2,
        M: "o lun\u0103",
        MM: relativeTimeWithPlural2,
        y: "un an",
        yy: relativeTimeWithPlural2,
      };
      obj.relativeTime = obj;
      obj.week = { dow: 1, doy: 7 };
      _module.defineLocale("ro", obj);
    }
  }
}
if (typeof globalThis.define === "function") {
  if (globalThis.define.amd) {
    globalThis.define(["../moment"], function n(defineLocale) {
      function relativeTimeWithPlural(arg0, arg1, arg2) {
        const result = arg0 % 100;
        let tmp2 = result >= 20;
        if (20 > result) {
          let tmp3 = arg0 >= 100;
          if (tmp3) {
            tmp3 = arg0 % 100 === 0;
          }
          tmp2 = tmp3;
        }
        let str = " ";
        if (tmp2) {
          str = " de ";
        }
        return (
          arg0 +
          str +
          { ss: "secunde", mm: "minute", hh: "ore", dd: "zile", ww: "s\u0103pt\u0103m\u00E2ni", MM: "luni", yy: "ani" }[
            arg2
          ]
        );
      }
      return defineLocale.defineLocale("ro", {
        months:
          "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split(
            "_",
          ),
        monthsShort: "ian._feb._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
        monthsParseExact: true,
        weekdays: "duminic\u0103_luni_mar\u021Bi_miercuri_joi_vineri_s\u00E2mb\u0103t\u0103".split("_"),
        weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_S\u00E2m".split("_"),
        weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_S\u00E2".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY H:mm",
          LLLL: "dddd, D MMMM YYYY H:mm",
        },
        calendar: {
          sameDay: "[azi la] LT",
          nextDay: "[m\u00E2ine la] LT",
          nextWeek: "dddd [la] LT",
          lastDay: "[ieri la] LT",
          lastWeek: "[fosta] dddd [la] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "peste %s",
          past: "%s \u00EEn urm\u0103",
          s: "c\u00E2teva secunde",
          ss: relativeTimeWithPlural,
          m: "un minut",
          mm: relativeTimeWithPlural,
          h: "o or\u0103",
          hh: relativeTimeWithPlural,
          d: "o zi",
          dd: relativeTimeWithPlural,
          w: "o s\u0103pt\u0103m\u00E2n\u0103",
          ww: relativeTimeWithPlural,
          M: "o lun\u0103",
          MM: relativeTimeWithPlural,
          y: "un an",
          yy: relativeTimeWithPlural,
        },
        week: { dow: 1, doy: 7 },
      });
    });
  }
}
const moment = this.moment;
function relativeTimeWithPlural(arg0, arg1, arg2) {
  const result = arg0 % 100;
  let tmp2 = result >= 20;
  if (20 > result) {
    let tmp3 = arg0 >= 100;
    if (tmp3) {
      tmp3 = arg0 % 100 === 0;
    }
    tmp2 = tmp3;
  }
  let str = " ";
  if (tmp2) {
    str = " de ";
  }
  return (
    arg0 +
    str +
    { ss: "secunde", mm: "minute", hh: "ore", dd: "zile", ww: "s\u0103pt\u0103m\u00E2ni", MM: "luni", yy: "ani" }[arg2]
  );
}
obj = {
  months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split(
    "_",
  ),
  monthsShort: "ian._feb._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
  monthsParseExact: true,
  weekdays: "duminic\u0103_luni_mar\u021Bi_miercuri_joi_vineri_s\u00E2mb\u0103t\u0103".split("_"),
  weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_S\u00E2m".split("_"),
  weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_S\u00E2".split("_"),
  longDateFormat: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY H:mm",
    LLLL: "dddd, D MMMM YYYY H:mm",
  },
  calendar: {
    sameDay: "[azi la] LT",
    nextDay: "[m\u00E2ine la] LT",
    nextWeek: "dddd [la] LT",
    lastDay: "[ieri la] LT",
    lastWeek: "[fosta] dddd [la] LT",
    sameElse: "L",
  },
  relativeTime: {
    future: "peste %s",
    past: "%s \u00EEn urm\u0103",
    s: "c\u00E2teva secunde",
    ss: relativeTimeWithPlural,
    m: "un minut",
    mm: relativeTimeWithPlural,
    h: "o or\u0103",
    hh: relativeTimeWithPlural,
    d: "o zi",
    dd: relativeTimeWithPlural,
    w: "o s\u0103pt\u0103m\u00E2n\u0103",
    ww: relativeTimeWithPlural,
    M: "o lun\u0103",
    MM: relativeTimeWithPlural,
    y: "un an",
    yy: relativeTimeWithPlural,
  },
  week: { dow: 1, doy: 7 },
};
moment.defineLocale("ro", obj);
