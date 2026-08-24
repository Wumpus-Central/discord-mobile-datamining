// === Module 3986: t ===

// Module 3986 (t)
import t from "t" /* 3975 */;

if (typeof exports === "object") {
  if (undefined !== module) {
    if (typeof require === "function") {
      const _module = t;
      let obj = { months: null, monthsShort: null, weekdays: null, weekdaysShort: null, weekdaysMin: null, longDateFormat: null, calendar: null, relativeTime: null, dayOfMonthOrdinalParse: null, ordinal: "%d\u00BA", week: null };
      const split = "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split;
      obj[0] = "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_");
      const split2 = "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split;
      obj[1] = "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_");
      const split3 = "domenica_luned\u00EC_marted\u00EC_mercoled\u00EC_gioved\u00EC_venerd\u00EC_sabato".split;
      obj[2] = "domenica_luned\u00EC_marted\u00EC_mercoled\u00EC_gioved\u00EC_venerd\u00EC_sabato".split("_");
      const split4 = "dom_lun_mar_mer_gio_ven_sab".split;
      obj[3] = "dom_lun_mar_mer_gio_ven_sab".split("_");
      const split5 = "do_lu_ma_me_gi_ve_sa".split;
      obj[4] = "do_lu_ma_me_gi_ve_sa".split("_");
      obj[5] = { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" };
      obj = { sameDay: "[Oggi alle] LT", nextDay: "[Domani alle] LT", nextWeek: "dddd [alle] LT", lastDay: "[Ieri alle] LT", lastWeek: null, sameElse: "L" };
      obj[4] = function lastWeek() {
        let str = "[lo scorso] dddd [alle] LT";
        if (0 === this.day()) {
          str = "[la scorsa] dddd [alle] LT";
        }
        return str;
      };
      obj[6] = obj;
      const obj1 = { future: null, past: "%s fa", s: "alcuni secondi", ss: "%d secondi", m: "un minuto", mm: "%d minuti", h: "un'ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni" };
      obj1[0] = function future(arg0) {
        let str = "in";
        if (obj.test(arg0)) {
          str = "tra";
        }
        return str + " " + arg0;
      };
      obj[7] = obj1;
      obj[8] = /\d{1,2}º/;
      obj[10] = { dow: 1, doy: 4 };
      _module.defineLocale("it", obj);
    }
  }
}
if (typeof globalThis.define === "function") {
  if (globalThis.define.amd) {
    globalThis.define(["../moment"], function o(defineLocale) {
      obj = { months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"), monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"), weekdays: "domenica_luned\u00EC_marted\u00EC_mercoled\u00EC_gioved\u00EC_venerd\u00EC_sabato".split("_"), weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"), weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: obj, relativeTime: obj, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%d\u00BA", week: { dow: 1, doy: 4 } };
      obj = {
        sameDay: "[Oggi alle] LT",
        nextDay: "[Domani alle] LT",
        nextWeek: "dddd [alle] LT",
        lastDay: "[Ieri alle] LT",
        lastWeek() {
          let str = "[lo scorso] dddd [alle] LT";
          if (0 === this.day()) {
            str = "[la scorsa] dddd [alle] LT";
          }
          return str;
        },
        sameElse: "L"
      };
      obj = {
        future(arg0) {
          let str = "in";
          if (obj.test(arg0)) {
            str = "tra";
          }
          return str + " " + arg0;
        },
        past: "%s fa",
        s: "alcuni secondi",
        ss: "%d secondi",
        m: "un minuto",
        mm: "%d minuti",
        h: "un'ora",
        hh: "%d ore",
        d: "un giorno",
        dd: "%d giorni",
        M: "un mese",
        MM: "%d mesi",
        y: "un anno",
        yy: "%d anni"
      };
      return defineLocale.defineLocale("it", obj);
    });
  }
}
const moment = this.moment;
obj = { months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"), monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"), weekdays: "domenica_luned\u00EC_marted\u00EC_mercoled\u00EC_gioved\u00EC_venerd\u00EC_sabato".split("_"), weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"), weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: obj2, relativeTime: obj3, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%d\u00BA", week: { dow: 1, doy: 4 } };
moment.defineLocale("it", obj);