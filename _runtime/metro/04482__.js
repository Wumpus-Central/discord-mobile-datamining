// _runtime/metro/04482__.js
import _mod4467 from "04467__.js";

const fn = function t(moment) {
  let closure_0 = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_");
  let closure_1 = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_");
  const items = [
    /^jan/i,
    /^feb/i,
    /^(maart|mrt\.?)$/i,
    /^apr/i,
    /^mei$/i,
    /^jun[i.]?$/i,
    /^jul[i.]?$/i,
    /^aug/i,
    /^sep/i,
    /^okt/i,
    /^nov/i,
    /^dec/i,
  ];
  let tmp =
    /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
  let obj = {
    months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
    monthsShort(arg0, arg1) {
      let tmp2;
      const tmp = arg0;
      if (tmp) {
        let tmp5;
        const obj = /-MMM-/;
        if (obj.test(arg1)) {
          tmp5 = closure_1[arg0.month(arg0)];
        } else {
          tmp5 = closure_0[arg0.month(arg0)];
        }
        tmp2 = tmp5;
      } else {
        tmp2 = closure_0;
      }
      return tmp2;
    },
    monthsRegex: tmp,
    monthsShortRegex: tmp,
    monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
    monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
    monthsParse: items,
    longMonthsParse: items,
    shortMonthsParse: items,
    weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
    weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
    weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD-MM-YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D MMMM YYYY HH:mm",
    },
    calendar: {
      sameDay: "[vandaag om] LT",
      nextDay: "[morgen om] LT",
      nextWeek: "dddd [om] LT",
      lastDay: "[gisteren om] LT",
      lastWeek: "[afgelopen] dddd [om] LT",
      sameElse: "L",
    },
    relativeTime: {
      future: "over %s",
      past: "%s geleden",
      s: "een paar seconden",
      ss: "%d seconden",
      m: "\u00E9\u00E9n minuut",
      mm: "%d minuten",
      h: "\u00E9\u00E9n uur",
      hh: "%d uur",
      d: "\u00E9\u00E9n dag",
      dd: "%d dagen",
      w: "\u00E9\u00E9n week",
      ww: "%d weken",
      M: "\u00E9\u00E9n maand",
      MM: "%d maanden",
      y: "\u00E9\u00E9n jaar",
      yy: "%d jaar",
    },
    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
    ordinal(arg0) {
      if (1 !== arg0) {
        let str;
        if (8 !== arg0) {
          str = "de";
        }
        return arg0 + str;
      }
      str = "ste";
    },
    week: { dow: 1, doy: 4 },
  };
  return moment.defineLocale("nl", obj);
};
if (typeof exports === "object") {
  if (undefined !== module) {
    if (typeof require === "function") {
      fn(_mod4467);
    }
  }
}
if (typeof globalThis.define === "function") {
  const define2 = globalThis.define;
  if (globalThis.define.amd) {
    globalThis.define(["../moment"], fn);
  }
}
fn(this.moment);
