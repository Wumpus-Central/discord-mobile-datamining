// _runtime/04161_s.js
import hooks from "04153_hooks.js";

const fn = function s(moment) {
  const tmp =
    /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?|janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i;
  const items = [
    /^janv/i,
    /^févr/i,
    /^mars/i,
    /^avr/i,
    /^mai/i,
    /^juin/i,
    /^juil/i,
    /^août/i,
    /^sept/i,
    /^oct/i,
    /^nov/i,
    /^déc/i,
  ];
  return moment.defineLocale("fr", {
    months: "janvier_f\u00E9vrier_mars_avril_mai_juin_juillet_ao\u00FBt_septembre_octobre_novembre_d\u00E9cembre".split(
      "_",
    ),
    monthsShort: "janv._f\u00E9vr._mars_avr._mai_juin_juil._ao\u00FBt_sept._oct._nov._d\u00E9c.".split("_"),
    monthsRegex: tmp,
    monthsShortRegex: tmp,
    monthsStrictRegex: /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,
    monthsShortStrictRegex: /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?)/i,
    monthsParse: items,
    longMonthsParse: items,
    shortMonthsParse: items,
    weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
    weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
    weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D MMMM YYYY HH:mm",
    },
    calendar: {
      sameDay: "[Aujourd\u2019hui \u00E0] LT",
      nextDay: "[Demain \u00E0] LT",
      nextWeek: "dddd [\u00E0] LT",
      lastDay: "[Hier \u00E0] LT",
      lastWeek: "dddd [dernier \u00E0] LT",
      sameElse: "L",
    },
    relativeTime: {
      future: "dans %s",
      past: "il y a %s",
      s: "quelques secondes",
      ss: "%d secondes",
      m: "une minute",
      mm: "%d minutes",
      h: "une heure",
      hh: "%d heures",
      d: "un jour",
      dd: "%d jours",
      w: "une semaine",
      ww: "%d semaines",
      M: "un mois",
      MM: "%d mois",
      y: "un an",
      yy: "%d ans",
    },
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
    week: { dow: 1, doy: 4 },
  });
};
if (typeof exports === "object") {
  if (undefined !== module) {
    if (typeof require === "function") {
      fn(hooks);
    }
  }
}
if (typeof globalThis.define === "function") {
  if (globalThis.define.amd) {
    globalThis.define(["../moment"], fn);
  }
}
fn(this.moment);
