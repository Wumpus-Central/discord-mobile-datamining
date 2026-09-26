// === Module 4423: ? ===

// Module 4423
import _mod4421 from "module_4421" /* 4421 */;

if (typeof exports === "object") {
  if (undefined !== module) {
    if (typeof require === "function") {
      const _module = _mod4421;
      const obj2 = { months: null, monthsShort: null, weekdays: null, weekdaysShort: null, weekdaysMin: null, longDateFormat: null, calendar: null, relativeTime: null, dayOfMonthOrdinalParse: null, ordinal: "%d.", week: null };
      const split = "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split;
      obj2.months = "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_");
      const split2 = "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split;
      obj2.monthsShort = "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_");
      const split3 = "s\u00F8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\u00F8rdag".split;
      obj2.weekdays = "s\u00F8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\u00F8rdag".split("_");
      const split4 = "s\u00F8n_man_tir_ons_tor_fre_l\u00F8r".split;
      obj2.weekdaysShort = "s\u00F8n_man_tir_ons_tor_fre_l\u00F8r".split("_");
      const split5 = "s\u00F8_ma_ti_on_to_fr_l\u00F8".split;
      obj2.weekdaysMin = "s\u00F8_ma_ti_on_to_fr_l\u00F8".split("_");
      obj2.longDateFormat = { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm" };
      obj2.calendar = { sameDay: "[i dag kl.] LT", nextDay: "[i morgen kl.] LT", nextWeek: "p\u00E5 dddd [kl.] LT", lastDay: "[i g\u00E5r kl.] LT", lastWeek: "[i] dddd[s kl.] LT", sameElse: "L" };
      obj2.relativeTime = { future: "om %s", past: "%s siden", s: "f\u00E5 sekunder", ss: "%d sekunder", m: "et minut", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dage", M: "en m\u00E5ned", MM: "%d m\u00E5neder", y: "et \u00E5r", yy: "%d \u00E5r" };
      obj2.dayOfMonthOrdinalParse = /\d{1,2}\./;
      obj2.week = { dow: 1, doy: 4 };
      _module.defineLocale("da", obj2);
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
moment.defineLocale("da", { months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekdays: "s\u00F8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\u00F8rdag".split("_"), weekdaysShort: "s\u00F8n_man_tir_ons_tor_fre_l\u00F8r".split("_"), weekdaysMin: "s\u00F8_ma_ti_on_to_fr_l\u00F8".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm" }, calendar: { sameDay: "[i dag kl.] LT", nextDay: "[i morgen kl.] LT", nextWeek: "p\u00E5 dddd [kl.] LT", lastDay: "[i g\u00E5r kl.] LT", lastWeek: "[i] dddd[s kl.] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s siden", s: "f\u00E5 sekunder", ss: "%d sekunder", m: "et minut", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dage", M: "en m\u00E5ned", MM: "%d m\u00E5neder", y: "et \u00E5r", yy: "%d \u00E5r" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
const obj = { months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekdays: "s\u00F8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\u00F8rdag".split("_"), weekdaysShort: "s\u00F8n_man_tir_ons_tor_fre_l\u00F8r".split("_"), weekdaysMin: "s\u00F8_ma_ti_on_to_fr_l\u00F8".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm" }, calendar: { sameDay: "[i dag kl.] LT", nextDay: "[i morgen kl.] LT", nextWeek: "p\u00E5 dddd [kl.] LT", lastDay: "[i g\u00E5r kl.] LT", lastWeek: "[i] dddd[s kl.] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s siden", s: "f\u00E5 sekunder", ss: "%d sekunder", m: "et minut", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dage", M: "en m\u00E5ned", MM: "%d m\u00E5neder", y: "et \u00E5r", yy: "%d \u00E5r" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } };