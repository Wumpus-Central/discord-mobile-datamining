// _runtime/03979_t.js
import t from "03978_t.js";

const fn = function t(moment) {
  const parts = "leden_\u00FAnor_b\u0159ezen_duben_kv\u011Bten_\u010Derven_\u010Dervenec_srpen_z\u00E1\u0159\u00ED_\u0159\u00EDjen_listopad_prosinec".split("_");
  const parts1 = "led_\u00FAno_b\u0159e_dub_kv\u011B_\u010Dvn_\u010Dvc_srp_z\u00E1\u0159_\u0159\u00EDj_lis_pro".split("_");
  const obj = { months: parts, monthsShort: parts1, monthsParse: null, shortMonthsParse: null, longMonthsParse: null, weekdays: null, weekdaysShort: null, weekdaysMin: null, longDateFormat: null, calendar: null, relativeTime: null, dayOfMonthOrdinalParse: null, ordinal: "%d.", week: null };
  const items = [];
  let num = 0;
  do {
    let _RegExp = RegExp;
    let tmp3 = new.target;
    let tmp4 = new.target;
    let str = "i";
    let regExp = new RegExp("^" + parts[num] + "$|^" + parts1[num] + "$", "i");
    let tmp6 = regExp;
    items[num] = regExp;
    num = num + 1;
  } while (num < 12);
  obj[2] = items;
  const items1 = [];
  let num2 = 0;
  do {
    let _RegExp2 = RegExp;
    let tmp7 = new.target;
    let tmp8 = new.target;
    let str2 = "i";
    let regExp1 = new RegExp("^" + parts1[num2] + "$", "i");
    let tmp10 = regExp1;
    items1[num2] = regExp1;
    num2 = num2 + 1;
  } while (num2 < 12);
  obj[3] = items1;
  const items2 = [];
  let num3 = 0;
  do {
    let _RegExp3 = RegExp;
    let tmp11 = new.target;
    let tmp12 = new.target;
    let str3 = "i";
    let regExp2 = new RegExp("^" + parts[num3] + "$", "i");
    let tmp14 = regExp2;
    items2[num3] = regExp2;
    num3 = num3 + 1;
  } while (num3 < 12);
  function translate(arg0, arg1, arg2, arg3) {
    if (!tmp) {
      if (!tmp2) {
        let text = `${tmp4}lety`;
      }
      return text;
    }
    let tmp6 = tmp3 > 1;
    if (tmp6) {
      tmp6 = tmp3 < 5;
    }
    if (tmp6) {
      tmp6 = 1 !== ~~tmp3 / 10;
    }
    let str2 = "let";
    if (tmp6) {
      str2 = "roky";
    }
    text = tmp4 + str2;
  }
  obj[4] = items2;
  obj[5] = "ned\u011Ble_pond\u011Bl\u00ED_\u00FAter\u00FD_st\u0159eda_\u010Dtvrtek_p\u00E1tek_sobota".split("_");
  obj[6] = "ne_po_\u00FAt_st_\u010Dt_p\u00E1_so".split("_");
  obj[7] = "ne_po_\u00FAt_st_\u010Dt_p\u00E1_so".split("_");
  obj[8] = { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd D. MMMM YYYY H:mm", l: "D. M. YYYY" };
  obj[9] = {
    sameDay: "[dnes v] LT",
    nextDay: "[z\u00EDtra v] LT",
    nextWeek() {
      const dayResult = this.day();
      if (0 === dayResult) {
        return "[v ned\u011Bli v] LT";
      } else {
        if (1 !== dayResult) {
          if (2 !== dayResult) {
            if (3 === dayResult) {
              return "[ve st\u0159edu v] LT";
            } else if (4 === dayResult) {
              return "[ve \u010Dtvrtek v] LT";
            } else if (5 === dayResult) {
              return "[v p\u00E1tek v] LT";
            } else if (6 === dayResult) {
              return "[v sobotu v] LT";
            }
          }
        }
        return "[v] dddd [v] LT";
      }
    },
    lastDay: "[v\u010Dera v] LT",
    lastWeek() {
      const dayResult = this.day();
      if (0 === dayResult) {
        return "[minulou ned\u011Bli v] LT";
      } else {
        if (1 !== dayResult) {
          if (2 !== dayResult) {
            if (3 === dayResult) {
              return "[minulou st\u0159edu v] LT";
            } else {
              if (4 !== dayResult) {
                if (5 !== dayResult) {
                  if (6 === dayResult) {
                    return "[minulou sobotu v] LT";
                  }
                }
              }
              return "[minul\u00FD] dddd [v] LT";
            }
          }
        }
        return "[minul\u00E9] dddd [v] LT";
      }
    },
    sameElse: "L"
  };
  obj[10] = { future: "za %s", past: "p\u0159ed %s", s: translate, ss: translate, m: translate, mm: translate, h: translate, hh: translate, d: translate, dd: translate, M: translate, MM: translate, y: translate, yy: translate };
  obj[11] = /\d{1,2}\./;
  obj[13] = { dow: 1, doy: 4 };
  return moment.defineLocale("cs", obj);
};
if (typeof exports === "object") {
  if (undefined !== module) {
    if (typeof require === "function") {
      fn(t);
    }
  }
}
if (typeof globalThis.define === "function") {
  if (globalThis.define.amd) {
    globalThis.define(["../moment"], fn);
  }
}
fn(this.moment);