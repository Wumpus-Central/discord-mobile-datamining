// === Module 4478: ? ===

// Module 4478
import _mod4467 from "module_4467" /* 4467 */;

let obj3;
let obj4;
function sameDay() {
  const self = this;
  let str = "lle ";
  if (this.hours() <= 1) {
    let str2 = "ll'";
    if (0 === self.hours()) {
      str2 = " ";
    }
    str = str2;
  }
  return "[Oggi a" + str + "]LT";
}
function nextDay() {
  const self = this;
  let str = "lle ";
  if (this.hours() <= 1) {
    let str2 = "ll'";
    if (0 === self.hours()) {
      str2 = " ";
    }
    str = str2;
  }
  return "[Domani a" + str + "]LT";
}
function nextWeek() {
  const self = this;
  let str = "lle ";
  if (this.hours() <= 1) {
    let str2 = "ll'";
    if (0 === self.hours()) {
      str2 = " ";
    }
    str = str2;
  }
  return "dddd [a" + str + "]LT";
}
function lastDay() {
  const self = this;
  let str = "lle ";
  if (this.hours() <= 1) {
    let str2 = "ll'";
    if (0 === self.hours()) {
      str2 = " ";
    }
    str = str2;
  }
  return "[Ieri a" + str + "]LT";
}
function lastWeek() {
  let combined;
  const self = this;
  if (0 === this.day()) {
    let str5 = "lle ";
    if (self.hours() <= 1) {
      let str6 = "ll'";
      if (0 === self.hours()) {
        str6 = " ";
      }
      str5 = str6;
    }
    const _HermesInternal2 = HermesInternal;
    combined = "[La scorsa] dddd [a" + str5 + "]LT";
  } else {
    let str = "lle ";
    if (self.hours() <= 1) {
      let str2 = "ll'";
      if (0 === self.hours()) {
        str2 = " ";
      }
      str = str2;
    }
    const _HermesInternal = HermesInternal;
    combined = "[Lo scorso] dddd [a" + str + "]LT";
  }
  return combined;
}
if (typeof exports === "object") {
  if (undefined !== module) {
    if (typeof require === "function") {
      const _module = _mod4467;
      let obj2 = { months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"), monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"), weekdays: "domenica_luned\u00EC_marted\u00EC_mercoled\u00EC_gioved\u00EC_venerd\u00EC_sabato".split("_"), weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"), weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: obj3, relativeTime: { future: "tra %s", past: "%s fa", s: "alcuni secondi", ss: "%d secondi", m: "un minuto", mm: "%d minuti", h: "un'ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", w: "una settimana", ww: "%d settimane", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%d\u00BA", week: { dow: 1, doy: 4 } };
      let str = "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre";
      const split = "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split;
      let str2 = "_";
      const defineLocale = _module.defineLocale;
      const split2 = "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split;
      const split3 = "domenica_luned\u00EC_marted\u00EC_mercoled\u00EC_gioved\u00EC_venerd\u00EC_sabato".split;
      let str5 = "dom_lun_mar_mer_gio_ven_sab";
      const split4 = "dom_lun_mar_mer_gio_ven_sab".split;
      let str6 = "do_lu_ma_me_gi_ve_sa";
      const split5 = "do_lu_ma_me_gi_ve_sa".split;
      obj3 = { sameDay, nextDay, nextWeek, lastDay, lastWeek, sameElse: "L" };
      defineLocale("it", obj2);
    }
  }
}
if (typeof globalThis.define === "function") {
  const define2 = globalThis.define;
  if (globalThis.define.amd) {
    globalThis.define(["../moment"], function t(defineLocale) {
      let obj2;
      const obj = { months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"), monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"), weekdays: "domenica_luned\u00EC_marted\u00EC_mercoled\u00EC_gioved\u00EC_venerd\u00EC_sabato".split("_"), weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"), weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: obj2, relativeTime: { future: "tra %s", past: "%s fa", s: "alcuni secondi", ss: "%d secondi", m: "un minuto", mm: "%d minuti", h: "un'ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", w: "una settimana", ww: "%d settimane", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%d\u00BA", week: { dow: 1, doy: 4 } };
      obj2 = { sameDay, nextDay, nextWeek, lastDay, lastWeek, sameElse: "L" };
      return defineLocale.defineLocale("it", obj);
    });
  }
}
const moment = this.moment;
let obj = { months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"), monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"), weekdays: "domenica_luned\u00EC_marted\u00EC_mercoled\u00EC_gioved\u00EC_venerd\u00EC_sabato".split("_"), weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"), weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: obj4, relativeTime: { future: "tra %s", past: "%s fa", s: "alcuni secondi", ss: "%d secondi", m: "un minuto", mm: "%d minuti", h: "un'ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", w: "una settimana", ww: "%d settimane", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%d\u00BA", week: { dow: 1, doy: 4 } };
obj4 = { sameDay, nextDay, nextWeek, lastDay, lastWeek, sameElse: "L" };
moment.defineLocale("it", obj);