// _runtime/03999_t.js
import t from "03978_t.js";

if (typeof exports === "object") {
  if (undefined !== module) {
    if (typeof require === "function") {
      const _module = t;
      let obj = { months: null, monthsShort: null, weekdays: null, weekdaysShort: null, weekdaysMin: null, longDateFormat: null, calendar: null, relativeTime: null, dayOfMonthOrdinalParse: null, ordinal: null, week: null };
      const split = "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split;
      obj[0] = "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_");
      const split2 = "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split;
      obj[1] = "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_");
      const split3 = "s\u00F6ndag_m\u00E5ndag_tisdag_onsdag_torsdag_fredag_l\u00F6rdag".split;
      obj[2] = "s\u00F6ndag_m\u00E5ndag_tisdag_onsdag_torsdag_fredag_l\u00F6rdag".split("_");
      const split4 = "s\u00F6n_m\u00E5n_tis_ons_tor_fre_l\u00F6r".split;
      obj[3] = "s\u00F6n_m\u00E5n_tis_ons_tor_fre_l\u00F6r".split("_");
      const split5 = "s\u00F6_m\u00E5_ti_on_to_fr_l\u00F6".split;
      obj[4] = "s\u00F6_m\u00E5_ti_on_to_fr_l\u00F6".split("_");
      obj[5] = { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [kl.] HH:mm", LLLL: "dddd D MMMM YYYY [kl.] HH:mm", lll: "D MMM YYYY HH:mm", llll: "ddd D MMM YYYY HH:mm" };
      obj[6] = { sameDay: "[Idag] LT", nextDay: "[Imorgon] LT", lastDay: "[Ig\u00E5r] LT", nextWeek: "[P\u00E5] dddd LT", lastWeek: "[I] dddd[s] LT", sameElse: "L" };
      obj[7] = { future: "om %s", past: "f\u00F6r %s sedan", s: "n\u00E5gra sekunder", ss: "%d sekunder", m: "en minut", mm: "%d minuter", h: "en timme", hh: "%d timmar", d: "en dag", dd: "%d dagar", M: "en m\u00E5nad", MM: "%d m\u00E5nader", y: "ett \u00E5r", yy: "%d \u00E5r" };
      obj[8] = /\d{1,2}(e|a)/;
      obj[9] = function ordinal(arg0) {
        const result = arg0 % 10;
        let str = "e";
        let str2 = "e";
        if (1 !== ~~arg0 % 100 / 10) {
          if (1 === result) {
            str = "a";
          }
          str2 = str;
        }
        return arg0 + str2;
      };
      obj[10] = { dow: 1, doy: 4 };
      _module.defineLocale("sv", obj);
    }
  }
}
if (typeof globalThis.define === "function") {
  if (globalThis.define.amd) {
    globalThis.define(["../moment"], function t(defineLocale) {
      return defineLocale.defineLocale("sv", {
        months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
        monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
        weekdays: "s\u00F6ndag_m\u00E5ndag_tisdag_onsdag_torsdag_fredag_l\u00F6rdag".split("_"),
        weekdaysShort: "s\u00F6n_m\u00E5n_tis_ons_tor_fre_l\u00F6r".split("_"),
        weekdaysMin: "s\u00F6_m\u00E5_ti_on_to_fr_l\u00F6".split("_"),
        longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [kl.] HH:mm", LLLL: "dddd D MMMM YYYY [kl.] HH:mm", lll: "D MMM YYYY HH:mm", llll: "ddd D MMM YYYY HH:mm" },
        calendar: { sameDay: "[Idag] LT", nextDay: "[Imorgon] LT", lastDay: "[Ig\u00E5r] LT", nextWeek: "[P\u00E5] dddd LT", lastWeek: "[I] dddd[s] LT", sameElse: "L" },
        relativeTime: { future: "om %s", past: "f\u00F6r %s sedan", s: "n\u00E5gra sekunder", ss: "%d sekunder", m: "en minut", mm: "%d minuter", h: "en timme", hh: "%d timmar", d: "en dag", dd: "%d dagar", M: "en m\u00E5nad", MM: "%d m\u00E5nader", y: "ett \u00E5r", yy: "%d \u00E5r" },
        dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
        ordinal(arg0) {
          const result = arg0 % 10;
          let str = "e";
          let str2 = "e";
          if (1 !== ~~arg0 % 100 / 10) {
            if (1 === result) {
              str = "a";
            }
            str2 = str;
          }
          return arg0 + str2;
        },
        week: { dow: 1, doy: 4 }
      });
    });
  }
}
const moment = this.moment;
obj = {
  months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
  monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
  weekdays: "s\u00F6ndag_m\u00E5ndag_tisdag_onsdag_torsdag_fredag_l\u00F6rdag".split("_"),
  weekdaysShort: "s\u00F6n_m\u00E5n_tis_ons_tor_fre_l\u00F6r".split("_"),
  weekdaysMin: "s\u00F6_m\u00E5_ti_on_to_fr_l\u00F6".split("_"),
  longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [kl.] HH:mm", LLLL: "dddd D MMMM YYYY [kl.] HH:mm", lll: "D MMM YYYY HH:mm", llll: "ddd D MMM YYYY HH:mm" },
  calendar: { sameDay: "[Idag] LT", nextDay: "[Imorgon] LT", lastDay: "[Ig\u00E5r] LT", nextWeek: "[P\u00E5] dddd LT", lastWeek: "[I] dddd[s] LT", sameElse: "L" },
  relativeTime: { future: "om %s", past: "f\u00F6r %s sedan", s: "n\u00E5gra sekunder", ss: "%d sekunder", m: "en minut", mm: "%d minuter", h: "en timme", hh: "%d timmar", d: "en dag", dd: "%d dagar", M: "en m\u00E5nad", MM: "%d m\u00E5nader", y: "ett \u00E5r", yy: "%d \u00E5r" },
  dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
  ordinal(arg0) {
    const result = arg0 % 10;
    let str = "e";
    let str2 = "e";
    if (1 !== ~~arg0 % 100 / 10) {
      if (1 === result) {
        str = "a";
      }
      str2 = str;
    }
    return arg0 + str2;
  },
  week: { dow: 1, doy: 4 }
};
moment.defineLocale("sv", obj);