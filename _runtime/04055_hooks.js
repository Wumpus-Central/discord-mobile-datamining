// _runtime/04055_hooks.js
import hooks from "04044_hooks.js";

if (typeof exports === "object") {
  if (undefined !== module) {
    if (typeof require === "function") {
      const _module = hooks;
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
      obj = { sameDay: null, nextDay: null, nextWeek: null, lastDay: null, lastWeek: null, sameElse: "L" };
      obj[0] = function sameDay() {
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
      };
      obj[1] = function nextDay() {
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
      };
      obj[2] = function nextWeek() {
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
      };
      obj[3] = function lastDay() {
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
      };
      obj[4] = function lastWeek() {
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
          let combined = "[La scorsa] dddd [a" + str5 + "]LT";
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
      };
      obj[6] = obj;
      obj[7] = { future: "tra %s", past: "%s fa", s: "alcuni secondi", ss: "%d secondi", m: "un minuto", mm: "%d minuti", h: "un'ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", w: "una settimana", ww: "%d settimane", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni" };
      obj[8] = /\d{1,2}º/;
      obj[10] = { dow: 1, doy: 4 };
      _module.defineLocale("it", obj);
    }
  }
}
if (typeof globalThis.define === "function") {
  if (globalThis.define.amd) {
    globalThis.define(["../moment"], function t(defineLocale) {
      obj = { months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"), monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"), weekdays: "domenica_luned\u00EC_marted\u00EC_mercoled\u00EC_gioved\u00EC_venerd\u00EC_sabato".split("_"), weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"), weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: obj, relativeTime: { future: "tra %s", past: "%s fa", s: "alcuni secondi", ss: "%d secondi", m: "un minuto", mm: "%d minuti", h: "un'ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", w: "una settimana", ww: "%d settimane", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%d\u00BA", week: { dow: 1, doy: 4 } };
      obj = {
        sameDay() {
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
        },
        nextDay() {
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
        },
        nextWeek() {
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
        },
        lastDay() {
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
        },
        lastWeek() {
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
            let combined = "[La scorsa] dddd [a" + str5 + "]LT";
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
        },
        sameElse: "L"
      };
      return defineLocale.defineLocale("it", obj);
    });
  }
}
const moment = this.moment;
obj = { months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"), monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"), weekdays: "domenica_luned\u00EC_marted\u00EC_mercoled\u00EC_gioved\u00EC_venerd\u00EC_sabato".split("_"), weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"), weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: obj1, relativeTime: { future: "tra %s", past: "%s fa", s: "alcuni secondi", ss: "%d secondi", m: "un minuto", mm: "%d minuti", h: "un'ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", w: "una settimana", ww: "%d settimane", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%d\u00BA", week: { dow: 1, doy: 4 } };
moment.defineLocale("it", obj);