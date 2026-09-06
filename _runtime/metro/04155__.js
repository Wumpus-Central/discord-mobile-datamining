// === Module 4155: ? ===

// Module 4155
import _mod4153 from "module_4153" /* 4153 */;

if (typeof exports === "object") {
  if (undefined !== module) {
    if (typeof require === "function") {
      const _module = _mod4153;
      let obj = { months: null, monthsShort: null, weekdays: null, weekdaysShort: null, weekdaysMin: null, longDateFormat: null, calendar: null, relativeTime: null, dayOfMonthOrdinalParse: null, ordinal: "%d.", week: null };
      const split = "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split;
      obj.months = "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_");
      const split2 = "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split;
      obj.monthsShort = "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_");
      const split3 = "s\u00F8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\u00F8rdag".split;
      obj.weekdays = "s\u00F8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\u00F8rdag".split("_");
      const split4 = "s\u00F8n_man_tir_ons_tor_fre_l\u00F8r".split;
      obj.weekdaysShort = "s\u00F8n_man_tir_ons_tor_fre_l\u00F8r".split("_");
      const split5 = "s\u00F8_ma_ti_on_to_fr_l\u00F8".split;
      obj.weekdaysMin = "s\u00F8_ma_ti_on_to_fr_l\u00F8".split("_");
      obj.longDateFormat = { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm" };
      obj.calendar = { sameDay: "[i dag kl.] LT", nextDay: "[i morgen kl.] LT", nextWeek: "p\u00E5 dddd [kl.] LT", lastDay: "[i g\u00E5r kl.] LT", lastWeek: "[i] dddd[s kl.] LT", sameElse: "L" };
      obj.relativeTime = { future: "om %s", past: "%s siden", s: "f\u00E5 sekunder", ss: "%d sekunder", m: "et minut", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dage", M: "en m\u00E5ned", MM: "%d m\u00E5neder", y: "et \u00E5r", yy: "%d \u00E5r" };
      obj.dayOfMonthOrdinalParse = /\d{1,2}\./;
      obj.week = { dow: 1, doy: 4 };
      _module.defineLocale("da", obj);
    }
  }
}
if (typeof globalThis.define === "function") {
  if (globalThis.define.amd) {
    globalThis.define(["../moment"], function n(defineLocale) {
      return defineLocale.defineLocale("da", { months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekdays: "s\u00F8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\u00F8rdag".split("_"), weekdaysShort: "s\u00F8n_man_tir_ons_tor_fre_l\u00F8r".split("_"), weekdaysMin: "s\u00F8_ma_ti_on_to_fr_l\u00F8".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm" }, calendar: { sameDay: "[i dag kl.] LT", nextDay: "[i morgen kl.] LT", nextWeek: "p\u00E5 dddd [kl.] LT", lastDay: "[i g\u00E5r kl.] LT", lastWeek: "[i] dddd[s kl.] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s siden", s: "f\u00E5 sekunder", ss: "%d sekunder", m: "et minut", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dage", M: "en m\u00E5ned", MM: "%d m\u00E5neder", y: "et \u00E5r", yy: "%d \u00E5r" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
    });
  }
}
const moment = this.moment;
obj = { months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekdays: "s\u00F8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\u00F8rdag".split("_"), weekdaysShort: "s\u00F8n_man_tir_ons_tor_fre_l\u00F8r".split("_"), weekdaysMin: "s\u00F8_ma_ti_on_to_fr_l\u00F8".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm" }, calendar: { sameDay: "[i dag kl.] LT", nextDay: "[i morgen kl.] LT", nextWeek: "p\u00E5 dddd [kl.] LT", lastDay: "[i g\u00E5r kl.] LT", lastWeek: "[i] dddd[s kl.] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s siden", s: "f\u00E5 sekunder", ss: "%d sekunder", m: "et minut", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dage", M: "en m\u00E5ned", MM: "%d m\u00E5neder", y: "et \u00E5r", yy: "%d \u00E5r" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } };
moment.defineLocale("da", obj);