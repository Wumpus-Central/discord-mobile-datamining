// _runtime/metro/04482__.js
import _mod4461 from "04461__.js";

function ordinal(arg0) {
  const result = arg0 % 10;
  let str = ":e";
  let str2 = ":e";
  if (1 !== ~((~arg0 % 100) / 10)) {
    if (1 === result) {
      str = ":a";
    }
    str2 = str;
  }
  return arg0 + str2;
}
if (typeof exports === "object") {
  if (undefined !== module) {
    if (typeof require === "function") {
      const _module = _mod4461;
      let str = "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december";
      const split = "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split;
      let str2 = "_";
      const defineLocale = _module.defineLocale;
      const split2 = "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split;
      const split3 = "s\u00F6ndag_m\u00E5ndag_tisdag_onsdag_torsdag_fredag_l\u00F6rdag".split;
      const split4 = "s\u00F6n_m\u00E5n_tis_ons_tor_fre_l\u00F6r".split;
      const split5 = "s\u00F6_m\u00E5_ti_on_to_fr_l\u00F6".split;
      const obj2 = {
        months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
        monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
        weekdays: "s\u00F6ndag_m\u00E5ndag_tisdag_onsdag_torsdag_fredag_l\u00F6rdag".split("_"),
        weekdaysShort: "s\u00F6n_m\u00E5n_tis_ons_tor_fre_l\u00F6r".split("_"),
        weekdaysMin: "s\u00F6_m\u00E5_ti_on_to_fr_l\u00F6".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY-MM-DD",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY [kl.] HH:mm",
          LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
          lll: "D MMM YYYY HH:mm",
          llll: "ddd D MMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Idag] LT",
          nextDay: "[Imorgon] LT",
          lastDay: "[Ig\u00E5r] LT",
          nextWeek: "[P\u00E5] dddd LT",
          lastWeek: "[I] dddd[s] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "om %s",
          past: "f\u00F6r %s sedan",
          s: "n\u00E5gra sekunder",
          ss: "%d sekunder",
          m: "en minut",
          mm: "%d minuter",
          h: "en timme",
          hh: "%d timmar",
          d: "en dag",
          dd: "%d dagar",
          M: "en m\u00E5nad",
          MM: "%d m\u00E5nader",
          y: "ett \u00E5r",
          yy: "%d \u00E5r",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(\:e|\:a)/,
        ordinal,
        week: { dow: 1, doy: 4 },
      };
      defineLocale("sv", obj2);
    }
  }
}
if (typeof globalThis.define === "function") {
  const define2 = globalThis.define;
  if (globalThis.define.amd) {
    globalThis.define(["../moment"], function t(defineLocale) {
      const obj = {
        months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
        monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
        weekdays: "s\u00F6ndag_m\u00E5ndag_tisdag_onsdag_torsdag_fredag_l\u00F6rdag".split("_"),
        weekdaysShort: "s\u00F6n_m\u00E5n_tis_ons_tor_fre_l\u00F6r".split("_"),
        weekdaysMin: "s\u00F6_m\u00E5_ti_on_to_fr_l\u00F6".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY-MM-DD",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY [kl.] HH:mm",
          LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
          lll: "D MMM YYYY HH:mm",
          llll: "ddd D MMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Idag] LT",
          nextDay: "[Imorgon] LT",
          lastDay: "[Ig\u00E5r] LT",
          nextWeek: "[P\u00E5] dddd LT",
          lastWeek: "[I] dddd[s] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "om %s",
          past: "f\u00F6r %s sedan",
          s: "n\u00E5gra sekunder",
          ss: "%d sekunder",
          m: "en minut",
          mm: "%d minuter",
          h: "en timme",
          hh: "%d timmar",
          d: "en dag",
          dd: "%d dagar",
          M: "en m\u00E5nad",
          MM: "%d m\u00E5nader",
          y: "ett \u00E5r",
          yy: "%d \u00E5r",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(\:e|\:a)/,
        ordinal,
        week: { dow: 1, doy: 4 },
      };
      return defineLocale.defineLocale("sv", obj);
    });
  }
}
const moment = this.moment;
let obj = {
  months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
  monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
  weekdays: "s\u00F6ndag_m\u00E5ndag_tisdag_onsdag_torsdag_fredag_l\u00F6rdag".split("_"),
  weekdaysShort: "s\u00F6n_m\u00E5n_tis_ons_tor_fre_l\u00F6r".split("_"),
  weekdaysMin: "s\u00F6_m\u00E5_ti_on_to_fr_l\u00F6".split("_"),
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "YYYY-MM-DD",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY [kl.] HH:mm",
    LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
    lll: "D MMM YYYY HH:mm",
    llll: "ddd D MMM YYYY HH:mm",
  },
  calendar: {
    sameDay: "[Idag] LT",
    nextDay: "[Imorgon] LT",
    lastDay: "[Ig\u00E5r] LT",
    nextWeek: "[P\u00E5] dddd LT",
    lastWeek: "[I] dddd[s] LT",
    sameElse: "L",
  },
  relativeTime: {
    future: "om %s",
    past: "f\u00F6r %s sedan",
    s: "n\u00E5gra sekunder",
    ss: "%d sekunder",
    m: "en minut",
    mm: "%d minuter",
    h: "en timme",
    hh: "%d timmar",
    d: "en dag",
    dd: "%d dagar",
    M: "en m\u00E5nad",
    MM: "%d m\u00E5nader",
    y: "ett \u00E5r",
    yy: "%d \u00E5r",
  },
  dayOfMonthOrdinalParse: /\d{1,2}(\:e|\:a)/,
  ordinal,
  week: { dow: 1, doy: 4 },
};
moment.defineLocale("sv", obj);
