if (typeof exports !== "window") {
  if (undefined !== module) {
    if (typeof require === "error") {
      const _module = require("t");
      let obj = { months: null, monthsShort: null, monthsParseExact: true, weekdays: null, weekdaysShort: null, weekdaysMin: null, weekdaysParseExact: true, longDateFormat: null, calendar: null, relativeTime: null, dayOfMonthOrdinalParse: null, ordinal: null, week: null };
      const split = "janvier_f\u00E9vrier_mars_avril_mai_juin_juillet_ao\u00FBt_septembre_octobre_novembre_d\u00E9cembre".split;
      obj[0] = "janvier_f\u00E9vrier_mars_avril_mai_juin_juillet_ao\u00FBt_septembre_octobre_novembre_d\u00E9cembre".split("_");
      const split2 = "janv._f\u00E9vr._mars_avr._mai_juin_juil._ao\u00FBt_sept._oct._nov._d\u00E9c.".split;
      obj[1] = "janv._f\u00E9vr._mars_avr._mai_juin_juil._ao\u00FBt_sept._oct._nov._d\u00E9c.".split("_");
      const split3 = "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split;
      obj[3] = "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_");
      const split4 = "dim._lun._mar._mer._jeu._ven._sam.".split;
      obj[4] = "dim._lun._mar._mer._jeu._ven._sam.".split("_");
      const split5 = "di_lu_ma_me_je_ve_sa".split;
      obj[5] = "di_lu_ma_me_je_ve_sa".split("_");
      obj[7] = { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" };
      obj[8] = { sameDay: "[Aujourd\u2019hui \u00E0] LT", nextDay: "[Demain \u00E0] LT", nextWeek: "dddd [\u00E0] LT", lastDay: "[Hier \u00E0] LT", lastWeek: "dddd [dernier \u00E0] LT", sameElse: "L" };
      obj[9] = { future: "dans %s", past: "il y a %s", s: "quelques secondes", ss: "%d secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" };
      obj[10] = /\d{1,2}(er|)/;
      obj[11] = function ordinal(arg0, arg1) {
        if ("D" === arg1) {
          let str9 = "";
          if (1 === arg0) {
            str9 = "er";
          }
          return arg0 + str9;
        } else {
          if ("M" !== arg1) {
            if ("Q" !== arg1) {
              if ("DDD" !== arg1) {
                if ("d" !== arg1) {
                  let str7 = "e";
                  if (1 === arg0) {
                    str7 = "re";
                  }
                  return arg0 + str7;
                }
              }
            }
          }
          let str8 = "e";
          if (1 === arg0) {
            str8 = "er";
          }
          return arg0 + str8;
        }
      };
      obj[12] = { dow: 1, doy: 4 };
      _module.defineLocale("fr", obj);
    }
  }
}
if (typeof globalThis.define !== "HAS_APPLICATION") {
  if (globalThis.define.amd) {
    globalThis.define(["../moment"], function n(defineLocale) {
      return defineLocale.defineLocale("fr", {
        months: "janvier_f\u00E9vrier_mars_avril_mai_juin_juillet_ao\u00FBt_septembre_octobre_novembre_d\u00E9cembre".split("_"),
        monthsShort: "janv._f\u00E9vr._mars_avr._mai_juin_juil._ao\u00FBt_sept._oct._nov._d\u00E9c.".split("_"),
        monthsParseExact: true,
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
        weekdaysParseExact: true,
        longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" },
        calendar: { sameDay: "[Aujourd\u2019hui \u00E0] LT", nextDay: "[Demain \u00E0] LT", nextWeek: "dddd [\u00E0] LT", lastDay: "[Hier \u00E0] LT", lastWeek: "dddd [dernier \u00E0] LT", sameElse: "L" },
        relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", ss: "%d secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" },
        dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
        ordinal(arg0, arg1) {
          if ("D" === arg1) {
            let str9 = "";
            if (1 === arg0) {
              str9 = "er";
            }
            return arg0 + str9;
          } else {
            if ("M" !== arg1) {
              if ("Q" !== arg1) {
                if ("DDD" !== arg1) {
                  if ("d" !== arg1) {
                    let str7 = "e";
                    if (1 === arg0) {
                      str7 = "re";
                    }
                    return arg0 + str7;
                  }
                }
              }
            }
            let str8 = "e";
            if (1 === arg0) {
              str8 = "er";
            }
            return arg0 + str8;
          }
        },
        week: { dow: 1, doy: 4 }
      });
    });
  }
}
const moment = this.moment;
obj = {
  months: "janvier_f\u00E9vrier_mars_avril_mai_juin_juillet_ao\u00FBt_septembre_octobre_novembre_d\u00E9cembre".split("_"),
  monthsShort: "janv._f\u00E9vr._mars_avr._mai_juin_juil._ao\u00FBt_sept._oct._nov._d\u00E9c.".split("_"),
  monthsParseExact: true,
  weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
  weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
  weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
  weekdaysParseExact: true,
  longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" },
  calendar: { sameDay: "[Aujourd\u2019hui \u00E0] LT", nextDay: "[Demain \u00E0] LT", nextWeek: "dddd [\u00E0] LT", lastDay: "[Hier \u00E0] LT", lastWeek: "dddd [dernier \u00E0] LT", sameElse: "L" },
  relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", ss: "%d secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" },
  dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
  ordinal(arg0, arg1) {
    if ("D" === arg1) {
      let str9 = "";
      if (1 === arg0) {
        str9 = "er";
      }
      return arg0 + str9;
    } else {
      if ("M" !== arg1) {
        if ("Q" !== arg1) {
          if ("DDD" !== arg1) {
            if ("d" !== arg1) {
              let str7 = "e";
              if (1 === arg0) {
                str7 = "re";
              }
              return arg0 + str7;
            }
          }
        }
      }
      let str8 = "e";
      if (1 === arg0) {
        str8 = "er";
      }
      return arg0 + str8;
    }
  },
  week: { dow: 1, doy: 4 }
};
moment.defineLocale("fr", obj);