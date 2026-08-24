// === Module 3994: t ===

// Module 3994 (t)
import t from "t" /* 3978 */;

if (typeof exports === "object") {
  if (undefined !== module) {
    if (typeof require === "function") {
      const _module = t;
      let obj = { months: null, monthsShort: null, monthsParseExact: true, weekdays: null, weekdaysShort: null, weekdaysMin: null, weekdaysParseExact: true, longDateFormat: null, calendar: null, relativeTime: null, dayOfMonthOrdinalParse: null, ordinal: "%d.", week: null };
      const split = "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split;
      obj[0] = "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_");
      const split2 = "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split;
      obj[1] = "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_");
      const split3 = "s\u00F8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\u00F8rdag".split;
      obj[3] = "s\u00F8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\u00F8rdag".split("_");
      const split4 = "s\u00F8._ma._ti._on._to._fr._l\u00F8.".split;
      obj[4] = "s\u00F8._ma._ti._on._to._fr._l\u00F8.".split("_");
      const split5 = "s\u00F8_ma_ti_on_to_fr_l\u00F8".split;
      obj[5] = "s\u00F8_ma_ti_on_to_fr_l\u00F8".split("_");
      obj[7] = { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] HH:mm", LLLL: "dddd D. MMMM YYYY [kl.] HH:mm" };
      obj[8] = { sameDay: "[i dag kl.] LT", nextDay: "[i morgen kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[i g\u00E5r kl.] LT", lastWeek: "[forrige] dddd [kl.] LT", sameElse: "L" };
      obj[9] = { future: "om %s", past: "%s siden", s: "noen sekunder", ss: "%d sekunder", m: "ett minutt", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dager", M: "en m\u00E5ned", MM: "%d m\u00E5neder", y: "ett \u00E5r", yy: "%d \u00E5r" };
      obj[10] = /\d{1,2}\./;
      obj[12] = { dow: 1, doy: 4 };
      _module.defineLocale("nb", obj);
    }
  }
}
if (typeof globalThis.define === "function") {
  if (globalThis.define.amd) {
    globalThis.define(["../moment"], function n(defineLocale) {
      return defineLocale.defineLocale("nb", { months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"), monthsParseExact: true, weekdays: "s\u00F8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\u00F8rdag".split("_"), weekdaysShort: "s\u00F8._ma._ti._on._to._fr._l\u00F8.".split("_"), weekdaysMin: "s\u00F8_ma_ti_on_to_fr_l\u00F8".split("_"), weekdaysParseExact: true, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] HH:mm", LLLL: "dddd D. MMMM YYYY [kl.] HH:mm" }, calendar: { sameDay: "[i dag kl.] LT", nextDay: "[i morgen kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[i g\u00E5r kl.] LT", lastWeek: "[forrige] dddd [kl.] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s siden", s: "noen sekunder", ss: "%d sekunder", m: "ett minutt", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dager", M: "en m\u00E5ned", MM: "%d m\u00E5neder", y: "ett \u00E5r", yy: "%d \u00E5r" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
    });
  }
}
const moment = this.moment;
obj = { months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"), monthsParseExact: true, weekdays: "s\u00F8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\u00F8rdag".split("_"), weekdaysShort: "s\u00F8._ma._ti._on._to._fr._l\u00F8.".split("_"), weekdaysMin: "s\u00F8_ma_ti_on_to_fr_l\u00F8".split("_"), weekdaysParseExact: true, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] HH:mm", LLLL: "dddd D. MMMM YYYY [kl.] HH:mm" }, calendar: { sameDay: "[i dag kl.] LT", nextDay: "[i morgen kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[i g\u00E5r kl.] LT", lastWeek: "[forrige] dddd [kl.] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s siden", s: "noen sekunder", ss: "%d sekunder", m: "ett minutt", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dager", M: "en m\u00E5ned", MM: "%d m\u00E5neder", y: "ett \u00E5r", yy: "%d \u00E5r" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } };
moment.defineLocale("nb", obj);