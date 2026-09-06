// === Module 4159: ? ===

// Module 4159
import _mod4153 from "module_4153" /* 4153 */;

const fn = function n(moment) {
  closure_0 = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_");
  closure_1 = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
  const items = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
  const tmp = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
  let obj = {
    months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
    monthsShort(arg0, arg1) {
      if (arg0) {
        if (obj.test(arg1)) {
          let tmp3 = closure_1[arg0.month(arg0)];
        } else {
          tmp3 = closure_0[arg0.month(arg0)];
        }
        obj = /-MMM-/;
      } else {
        return closure_0;
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
    calendar: null,
    relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", ss: "%d segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un d\u00EDa", dd: "%d d\u00EDas", w: "una semana", ww: "%d semanas", M: "un mes", MM: "%d meses", y: "un a\u00F1o", yy: "%d a\u00F1os" },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: "%d\u00BA",
    week: { dow: 1, doy: 4 },
    invalidDate: "Fecha inv\u00E1lida"
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
  obj.calendar = obj;
  return moment.defineLocale("es", obj);
};
if (typeof exports === "object") {
  if (undefined !== module) {
    if (typeof require === "function") {
      fn(_mod4153);
    }
  }
}
if (typeof globalThis.define === "function") {
  if (globalThis.define.amd) {
    globalThis.define(["../moment"], fn);
  }
}
fn(this.moment);