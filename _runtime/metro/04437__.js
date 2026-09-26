// _runtime/metro/04437__.js
import _mod4421 from "04421__.js";

if (typeof exports === "object") {
  if (undefined !== module) {
    if (typeof require === "function") {
      const _module = _mod4421;
      const obj2 = {
        months: null,
        monthsShort: null,
        monthsParseExact: true,
        weekdays: null,
        weekdaysShort: null,
        weekdaysMin: null,
        weekdaysParseExact: true,
        longDateFormat: null,
        calendar: null,
        relativeTime: null,
        dayOfMonthOrdinalParse: null,
        ordinal: "%d.",
        week: null,
      };
      const split = "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split;
      obj2.months = "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_");
      const split2 = "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split;
      obj2.monthsShort = "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split("_");
      const split3 = "s\u00F8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\u00F8rdag".split;
      obj2.weekdays = "s\u00F8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\u00F8rdag".split("_");
      const split4 = "s\u00F8._ma._ti._on._to._fr._l\u00F8.".split;
      obj2.weekdaysShort = "s\u00F8._ma._ti._on._to._fr._l\u00F8.".split("_");
      const split5 = "s\u00F8_ma_ti_on_to_fr_l\u00F8".split;
      obj2.weekdaysMin = "s\u00F8_ma_ti_on_to_fr_l\u00F8".split("_");
      obj2.longDateFormat = {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY [kl.] HH:mm",
        LLLL: "dddd D. MMMM YYYY [kl.] HH:mm",
      };
      obj2.calendar = {
        sameDay: "[i dag kl.] LT",
        nextDay: "[i morgen kl.] LT",
        nextWeek: "dddd [kl.] LT",
        lastDay: "[i g\u00E5r kl.] LT",
        lastWeek: "[forrige] dddd [kl.] LT",
        sameElse: "L",
      };
      obj2.relativeTime = {
        future: "om %s",
        past: "%s siden",
        s: "noen sekunder",
        ss: "%d sekunder",
        m: "ett minutt",
        mm: "%d minutter",
        h: "\u00E9n time",
        hh: "%d timer",
        d: "\u00E9n dag",
        dd: "%d dager",
        w: "\u00E9n uke",
        ww: "%d uker",
        M: "\u00E9n m\u00E5ned",
        MM: "%d m\u00E5neder",
        y: "ett \u00E5r",
        yy: "%d \u00E5r",
      };
      obj2.dayOfMonthOrdinalParse = /\d{1,2}\./;
      obj2.week = { dow: 1, doy: 4 };
      _module.defineLocale("nb", obj2);
    }
  }
}
if (typeof globalThis.define === "function") {
  if (globalThis.define.amd) {
    globalThis.define(["../moment"], function n(defineLocale) {
      return defineLocale.defineLocale("nb", {
        months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
        monthsShort: "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
        monthsParseExact: true,
        weekdays: "s\u00F8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\u00F8rdag".split("_"),
        weekdaysShort: "s\u00F8._ma._ti._on._to._fr._l\u00F8.".split("_"),
        weekdaysMin: "s\u00F8_ma_ti_on_to_fr_l\u00F8".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY [kl.] HH:mm",
          LLLL: "dddd D. MMMM YYYY [kl.] HH:mm",
        },
        calendar: {
          sameDay: "[i dag kl.] LT",
          nextDay: "[i morgen kl.] LT",
          nextWeek: "dddd [kl.] LT",
          lastDay: "[i g\u00E5r kl.] LT",
          lastWeek: "[forrige] dddd [kl.] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "om %s",
          past: "%s siden",
          s: "noen sekunder",
          ss: "%d sekunder",
          m: "ett minutt",
          mm: "%d minutter",
          h: "\u00E9n time",
          hh: "%d timer",
          d: "\u00E9n dag",
          dd: "%d dager",
          w: "\u00E9n uke",
          ww: "%d uker",
          M: "\u00E9n m\u00E5ned",
          MM: "%d m\u00E5neder",
          y: "ett \u00E5r",
          yy: "%d \u00E5r",
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
      });
    });
  }
}
const moment = this.moment;
moment.defineLocale("nb", {
  months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
  monthsShort: "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
  monthsParseExact: true,
  weekdays: "s\u00F8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\u00F8rdag".split("_"),
  weekdaysShort: "s\u00F8._ma._ti._on._to._fr._l\u00F8.".split("_"),
  weekdaysMin: "s\u00F8_ma_ti_on_to_fr_l\u00F8".split("_"),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D. MMMM YYYY",
    LLL: "D. MMMM YYYY [kl.] HH:mm",
    LLLL: "dddd D. MMMM YYYY [kl.] HH:mm",
  },
  calendar: {
    sameDay: "[i dag kl.] LT",
    nextDay: "[i morgen kl.] LT",
    nextWeek: "dddd [kl.] LT",
    lastDay: "[i g\u00E5r kl.] LT",
    lastWeek: "[forrige] dddd [kl.] LT",
    sameElse: "L",
  },
  relativeTime: {
    future: "om %s",
    past: "%s siden",
    s: "noen sekunder",
    ss: "%d sekunder",
    m: "ett minutt",
    mm: "%d minutter",
    h: "\u00E9n time",
    hh: "%d timer",
    d: "\u00E9n dag",
    dd: "%d dager",
    w: "\u00E9n uke",
    ww: "%d uker",
    M: "\u00E9n m\u00E5ned",
    MM: "%d m\u00E5neder",
    y: "ett \u00E5r",
    yy: "%d \u00E5r",
  },
  dayOfMonthOrdinalParse: /\d{1,2}\./,
  ordinal: "%d.",
  week: { dow: 1, doy: 4 },
});
const obj = {
  months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
  monthsShort: "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
  monthsParseExact: true,
  weekdays: "s\u00F8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\u00F8rdag".split("_"),
  weekdaysShort: "s\u00F8._ma._ti._on._to._fr._l\u00F8.".split("_"),
  weekdaysMin: "s\u00F8_ma_ti_on_to_fr_l\u00F8".split("_"),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D. MMMM YYYY",
    LLL: "D. MMMM YYYY [kl.] HH:mm",
    LLLL: "dddd D. MMMM YYYY [kl.] HH:mm",
  },
  calendar: {
    sameDay: "[i dag kl.] LT",
    nextDay: "[i morgen kl.] LT",
    nextWeek: "dddd [kl.] LT",
    lastDay: "[i g\u00E5r kl.] LT",
    lastWeek: "[forrige] dddd [kl.] LT",
    sameElse: "L",
  },
  relativeTime: {
    future: "om %s",
    past: "%s siden",
    s: "noen sekunder",
    ss: "%d sekunder",
    m: "ett minutt",
    mm: "%d minutter",
    h: "\u00E9n time",
    hh: "%d timer",
    d: "\u00E9n dag",
    dd: "%d dager",
    w: "\u00E9n uke",
    ww: "%d uker",
    M: "\u00E9n m\u00E5ned",
    MM: "%d m\u00E5neder",
    y: "ett \u00E5r",
    yy: "%d \u00E5r",
  },
  dayOfMonthOrdinalParse: /\d{1,2}\./,
  ordinal: "%d.",
  week: { dow: 1, doy: 4 },
};
