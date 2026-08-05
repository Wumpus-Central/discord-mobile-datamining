// _runtime/03843_n.js
const fn = function n(moment) {
  let closure_0 = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_");
  let closure_1 = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
  const items = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
  const tmp = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
  obj = {
    months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
    monthsShort(arg0, arg1) {
      if (arg0) {
        if (obj.test(arg1)) {
          let tmp3 = table2[arg0.month(arg0)];
        } else {
          tmp3 = table[arg0.month(arg0)];
        }
        obj = /-MMM-/;
      } else {
        return table;
      }
    },
    monthsRegex: tmp,
    monthsShortRegex: tmp,
    monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
    monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
    monthsParse: items,
    longMonthsParse: items,
    shortMonthsParse: items,
    weekdays: "domingo_lunes_martes_mi\u00E9rcoles_jueves_viernes_s\u00E1bado".split("_"),
    weekdaysShort: "dom._lun._mar._mi\u00E9._jue._vie._s\u00E1b.".split("_"),
    weekdaysMin: "do_lu_ma_mi_ju_vi_s\u00E1".split("_"),
    weekdaysParseExact: true,
    longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" },
    calendar: obj,
    relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", ss: "%d segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un d\u00EDa", dd: "%d d\u00EDas", M: "un mes", MM: "%d meses", y: "un a\u00F1o", yy: "%d a\u00F1os" },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: "%d\u00BA",
    week: { dow: 1, doy: 4 }
  };
  obj = {
    sameDay() {
      let str = "";
      if (1 !== this.hours()) {
        str = "s";
      }
      return "[hoy a la" + str + "] LT";
    },
    nextDay() {
      let str = "";
      if (1 !== this.hours()) {
        str = "s";
      }
      return "[ma\u00F1ana a la" + str + "] LT";
    },
    nextWeek() {
      let str = "";
      if (1 !== this.hours()) {
        str = "s";
      }
      return "dddd [a la" + str + "] LT";
    },
    lastDay() {
      let str = "";
      if (1 !== this.hours()) {
        str = "s";
      }
      return "[ayer a la" + str + "] LT";
    },
    lastWeek() {
      let str = "";
      if (1 !== this.hours()) {
        str = "s";
      }
      return "[el] dddd [pasado a la" + str + "] LT";
    },
    sameElse: "L"
  };
  return moment.defineLocale("es", obj);
};
if (typeof exports === "object") {
  if (undefined !== module) {
    if (typeof require === "function") {
      fn(require("t"));
    }
  }
}
if (typeof globalThis.define === "function") {
  if (globalThis.define.amd) {
    globalThis.define(["../moment"], fn);
  }
}
fn(this.moment);