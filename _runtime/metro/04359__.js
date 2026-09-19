// === Module 4359: ? ===

// Module 4359
import _mod4348 from "module_4348" /* 4348 */;

if (typeof exports === "object") {
  if (undefined !== module) {
    if (typeof require === "function") {
      const _module = _mod4348;
      const obj2 = { months: null, monthsShort: null, weekdays: null, weekdaysShort: null, weekdaysMin: null, longDateFormat: null, calendar: null, relativeTime: null, dayOfMonthOrdinalParse: null, ordinal: "%d\u00BA", week: null };
      const split = "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split;
      obj2.months = "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_");
      const split2 = "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split;
      obj2.monthsShort = "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_");
      const split3 = "domenica_luned\u00EC_marted\u00EC_mercoled\u00EC_gioved\u00EC_venerd\u00EC_sabato".split;
      obj2.weekdays = "domenica_luned\u00EC_marted\u00EC_mercoled\u00EC_gioved\u00EC_venerd\u00EC_sabato".split("_");
      const split4 = "dom_lun_mar_mer_gio_ven_sab".split;
      obj2.weekdaysShort = "dom_lun_mar_mer_gio_ven_sab".split("_");
      const split5 = "do_lu_ma_me_gi_ve_sa".split;
      obj2.weekdaysMin = "do_lu_ma_me_gi_ve_sa".split("_");
      obj2.longDateFormat = { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" };
      const obj3 = {
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
      obj2.calendar = obj3;
      obj2.relativeTime = { future: "tra %s", past: "%s fa", s: "alcuni secondi", ss: "%d secondi", m: "un minuto", mm: "%d minuti", h: "un'ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", w: "una settimana", ww: "%d settimane", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni" };
      obj2.dayOfMonthOrdinalParse = /\d{1,2}º/;
      obj2.week = { dow: 1, doy: 4 };
      _module.defineLocale("it", obj2);
    }
  }
}
if (typeof globalThis.define === "function") {
  if (globalThis.define.amd) {
    globalThis.define(["../moment"], function t(defineLocale) {
      const obj = {
        months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
        monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
        weekdays: "domenica_luned\u00EC_marted\u00EC_mercoled\u00EC_gioved\u00EC_venerd\u00EC_sabato".split("_"),
        weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
        weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
        longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" },
        calendar: {
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
        },
        relativeTime: { future: "tra %s", past: "%s fa", s: "alcuni secondi", ss: "%d secondi", m: "un minuto", mm: "%d minuti", h: "un'ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", w: "una settimana", ww: "%d settimane", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni" },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%d\u00BA",
        week: { dow: 1, doy: 4 }
      };
      return defineLocale.defineLocale("it", obj);
    });
  }
}
const moment = this.moment;
let obj = {
  months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
  monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
  weekdays: "domenica_luned\u00EC_marted\u00EC_mercoled\u00EC_gioved\u00EC_venerd\u00EC_sabato".split("_"),
  weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
  weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
  longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" },
  calendar: {
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
  },
  relativeTime: { future: "tra %s", past: "%s fa", s: "alcuni secondi", ss: "%d secondi", m: "un minuto", mm: "%d minuti", h: "un'ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", w: "una settimana", ww: "%d settimane", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni" },
  dayOfMonthOrdinalParse: /\d{1,2}º/,
  ordinal: "%d\u00BA",
  week: { dow: 1, doy: 4 }
};
moment.defineLocale("it", obj);
const obj4 = {
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