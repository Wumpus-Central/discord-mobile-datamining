// _runtime/03884_translate.js
if (typeof exports === "object") {
  if (undefined !== module) {
    if (typeof require === "function") {
      const _module = require("t");
      let closure_0;
      let closure_1;
      const translate2 = function translate(arg0, arg1, arg2) {
        const text = `${arg0} `;
        if ("ss" === arg2) {
          const result = arg0 % 10;
          let tmp11 = result < 5;
          if (result < 5) {
            tmp11 = arg0 % 10 > 1;
          }
          if (tmp11) {
            tmp11 = ~~arg0 / 10 % 10 !== 1;
          }
          let str8 = "sekund";
          if (tmp11) {
            str8 = "sekundy";
          }
          return text + str8;
        } else if ("m" === arg2) {
          let str7 = "minut\u0119";
          if (arg1) {
            str7 = "minuta";
          }
          return str7;
        } else if ("mm" === arg2) {
          const result1 = arg0 % 10;
          let tmp9 = result1 < 5;
          if (result1 < 5) {
            tmp9 = arg0 % 10 > 1;
          }
          if (tmp9) {
            tmp9 = ~~arg0 / 10 % 10 !== 1;
          }
          let str6 = "minut";
          if (tmp9) {
            str6 = "minuty";
          }
          return text + str6;
        } else if ("h" === arg2) {
          let str5 = "godzin\u0119";
          if (arg1) {
            str5 = "godzina";
          }
          return str5;
        } else if ("hh" === arg2) {
          const result2 = arg0 % 10;
          let tmp7 = result2 < 5;
          if (result2 < 5) {
            tmp7 = arg0 % 10 > 1;
          }
          if (tmp7) {
            tmp7 = ~~arg0 / 10 % 10 !== 1;
          }
          let str4 = "godzin";
          if (tmp7) {
            str4 = "godziny";
          }
          return text + str4;
        } else if ("MM" === arg2) {
          const result3 = arg0 % 10;
          let tmp5 = result3 < 5;
          if (result3 < 5) {
            tmp5 = arg0 % 10 > 1;
          }
          if (tmp5) {
            tmp5 = ~~arg0 / 10 % 10 !== 1;
          }
          let str3 = "miesi\u0119cy";
          if (tmp5) {
            str3 = "miesi\u0105ce";
          }
          return text + str3;
        } else if ("yy" === arg2) {
          const result4 = arg0 % 10;
          let tmp3 = result4 < 5;
          if (result4 < 5) {
            tmp3 = arg0 % 10 > 1;
          }
          if (tmp3) {
            tmp3 = ~~arg0 / 10 % 10 !== 1;
          }
          let str2 = "lat";
          if (tmp3) {
            str2 = "lata";
          }
          return text + str2;
        }
      };
      const split = "stycze\u0144_luty_marzec_kwiecie\u0144_maj_czerwiec_lipiec_sierpie\u0144_wrzesie\u0144_pa\u017Adziernik_listopad_grudzie\u0144".split;
      closure_0 = "stycze\u0144_luty_marzec_kwiecie\u0144_maj_czerwiec_lipiec_sierpie\u0144_wrzesie\u0144_pa\u017Adziernik_listopad_grudzie\u0144".split("_");
      const split2 = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrze\u015Bnia_pa\u017Adziernika_listopada_grudnia".split;
      closure_1 = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrze\u015Bnia_pa\u017Adziernika_listopada_grudnia".split("_");
      let obj = { months: null, monthsShort: null, weekdays: null, weekdaysShort: null, weekdaysMin: null, longDateFormat: null, calendar: null, relativeTime: null, dayOfMonthOrdinalParse: null, ordinal: "%d.", week: null };
      obj[0] = function months(arg0, arg1) {
        if (arg0) {
          if ("" === arg1) {
            const text = `(${closure_1[arg0.month(arg0)]}`;
            let text1 = `${`(${closure_1[arg0.month(arg0)]}` + "|" + closure_0[arg0.month(arg0)]})`;
          } else {
            if (obj.test(arg1)) {
              text1 = dependencyMap2[arg0.month(arg0)];
            } else {
              text1 = dependencyMap[arg0.month(arg0)];
            }
            obj = /D MMMM/;
          }
        } else {
          return dependencyMap;
        }
      };
      const split3 = "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_pa\u017A_lis_gru".split;
      obj[1] = "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_pa\u017A_lis_gru".split("_");
      const split4 = "niedziela_poniedzia\u0142ek_wtorek_\u015Broda_czwartek_pi\u0105tek_sobota".split;
      obj[2] = "niedziela_poniedzia\u0142ek_wtorek_\u015Broda_czwartek_pi\u0105tek_sobota".split("_");
      const split5 = "ndz_pon_wt_\u015Br_czw_pt_sob".split;
      obj[3] = "ndz_pon_wt_\u015Br_czw_pt_sob".split("_");
      const split6 = "Nd_Pn_Wt_\u015Ar_Cz_Pt_So".split;
      obj[4] = "Nd_Pn_Wt_\u015Ar_Cz_Pt_So".split("_");
      obj[5] = { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" };
      obj = { sameDay: "[Dzi\u015B o] LT", nextDay: "[Jutro o] LT", nextWeek: null, lastDay: "[Wczoraj o] LT", lastWeek: null, sameElse: "L" };
      obj[2] = function nextWeek() {
        const dayResult = this.day();
        if (0 === dayResult) {
          return "[W niedziel\u0119 o] LT";
        } else if (2 === dayResult) {
          return "[We wtorek o] LT";
        } else if (3 === dayResult) {
          return "[W \u015Brod\u0119 o] LT";
        } else if (6 === dayResult) {
          return "[W sobot\u0119 o] LT";
        } else {
          return "[W] dddd [o] LT";
        }
      };
      obj[4] = function lastWeek() {
        const dayResult = this.day();
        if (0 === dayResult) {
          return "[W zesz\u0142\u0105 niedziel\u0119 o] LT";
        } else if (3 === dayResult) {
          return "[W zesz\u0142\u0105 \u015Brod\u0119 o] LT";
        } else if (6 === dayResult) {
          return "[W zesz\u0142\u0105 sobot\u0119 o] LT";
        } else {
          return "[W zesz\u0142y] dddd [o] LT";
        }
      };
      obj[6] = obj;
      const obj1 = { future: "za %s", past: "%s temu", s: "kilka sekund", ss: null, m: null, mm: null, h: null, hh: null, d: "1 dzie\u0144", dd: "%d dni", M: "miesi\u0105c", MM: null, y: "rok", yy: null };
      obj1[3] = translate2;
      obj1[4] = translate2;
      obj1[5] = translate2;
      obj1[6] = translate2;
      obj1[7] = translate2;
      obj1[11] = translate2;
      obj1[13] = translate2;
      obj[7] = obj1;
      obj[8] = /\d{1,2}\./;
      obj[10] = { dow: 1, doy: 4 };
      _module.defineLocale("pl", obj);
    }
  }
}
if (typeof globalThis.define === "function") {
  if (globalThis.define.amd) {
    globalThis.define(["../moment"], function n(defineLocale) {
      function translate(arg0, arg1, arg2) {
        const text = `${arg0} `;
        if ("ss" === arg2) {
          const result = arg0 % 10;
          let tmp11 = result < 5;
          if (result < 5) {
            tmp11 = arg0 % 10 > 1;
          }
          if (tmp11) {
            tmp11 = ~~arg0 / 10 % 10 !== 1;
          }
          let str8 = "sekund";
          if (tmp11) {
            str8 = "sekundy";
          }
          return text + str8;
        } else if ("m" === arg2) {
          let str7 = "minut\u0119";
          if (arg1) {
            str7 = "minuta";
          }
          return str7;
        } else if ("mm" === arg2) {
          const result1 = arg0 % 10;
          let tmp9 = result1 < 5;
          if (result1 < 5) {
            tmp9 = arg0 % 10 > 1;
          }
          if (tmp9) {
            tmp9 = ~~arg0 / 10 % 10 !== 1;
          }
          let str6 = "minut";
          if (tmp9) {
            str6 = "minuty";
          }
          return text + str6;
        } else if ("h" === arg2) {
          let str5 = "godzin\u0119";
          if (arg1) {
            str5 = "godzina";
          }
          return str5;
        } else if ("hh" === arg2) {
          const result2 = arg0 % 10;
          let tmp7 = result2 < 5;
          if (result2 < 5) {
            tmp7 = arg0 % 10 > 1;
          }
          if (tmp7) {
            tmp7 = ~~arg0 / 10 % 10 !== 1;
          }
          let str4 = "godzin";
          if (tmp7) {
            str4 = "godziny";
          }
          return text + str4;
        } else if ("MM" === arg2) {
          const result3 = arg0 % 10;
          let tmp5 = result3 < 5;
          if (result3 < 5) {
            tmp5 = arg0 % 10 > 1;
          }
          if (tmp5) {
            tmp5 = ~~arg0 / 10 % 10 !== 1;
          }
          let str3 = "miesi\u0119cy";
          if (tmp5) {
            str3 = "miesi\u0105ce";
          }
          return text + str3;
        } else if ("yy" === arg2) {
          const result4 = arg0 % 10;
          let tmp3 = result4 < 5;
          if (result4 < 5) {
            tmp3 = arg0 % 10 > 1;
          }
          if (tmp3) {
            tmp3 = ~~arg0 / 10 % 10 !== 1;
          }
          let str2 = "lat";
          if (tmp3) {
            str2 = "lata";
          }
          return text + str2;
        }
      }
      let closure_0 = "stycze\u0144_luty_marzec_kwiecie\u0144_maj_czerwiec_lipiec_sierpie\u0144_wrzesie\u0144_pa\u017Adziernik_listopad_grudzie\u0144".split("_");
      let closure_1 = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrze\u015Bnia_pa\u017Adziernika_listopada_grudnia".split("_");
      obj = {
        months(arg0, arg1) {
          if (arg0) {
            if ("" === arg1) {
              const text = `(${closure_1[arg0.month(arg0)]}`;
              let text1 = `${`(${closure_1[arg0.month(arg0)]}` + "|" + closure_0[arg0.month(arg0)]})`;
            } else {
              if (obj.test(arg1)) {
                text1 = dependencyMap2[arg0.month(arg0)];
              } else {
                text1 = dependencyMap[arg0.month(arg0)];
              }
              obj = /D MMMM/;
            }
          } else {
            return dependencyMap;
          }
        },
        monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_pa\u017A_lis_gru".split("_"),
        weekdays: "niedziela_poniedzia\u0142ek_wtorek_\u015Broda_czwartek_pi\u0105tek_sobota".split("_"),
        weekdaysShort: "ndz_pon_wt_\u015Br_czw_pt_sob".split("_"),
        weekdaysMin: "Nd_Pn_Wt_\u015Ar_Cz_Pt_So".split("_"),
        longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" },
        calendar: obj,
        relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", ss: translate, m: translate, mm: translate, h: translate, hh: translate, d: "1 dzie\u0144", dd: "%d dni", M: "miesi\u0105c", MM: translate, y: "rok", yy: translate },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 }
      };
      obj = {
        sameDay: "[Dzi\u015B o] LT",
        nextDay: "[Jutro o] LT",
        nextWeek() {
          const dayResult = this.day();
          if (0 === dayResult) {
            return "[W niedziel\u0119 o] LT";
          } else if (2 === dayResult) {
            return "[We wtorek o] LT";
          } else if (3 === dayResult) {
            return "[W \u015Brod\u0119 o] LT";
          } else if (6 === dayResult) {
            return "[W sobot\u0119 o] LT";
          } else {
            return "[W] dddd [o] LT";
          }
        },
        lastDay: "[Wczoraj o] LT",
        lastWeek() {
          const dayResult = this.day();
          if (0 === dayResult) {
            return "[W zesz\u0142\u0105 niedziel\u0119 o] LT";
          } else if (3 === dayResult) {
            return "[W zesz\u0142\u0105 \u015Brod\u0119 o] LT";
          } else if (6 === dayResult) {
            return "[W zesz\u0142\u0105 sobot\u0119 o] LT";
          } else {
            return "[W zesz\u0142y] dddd [o] LT";
          }
        },
        sameElse: "L"
      };
      return defineLocale.defineLocale("pl", obj);
    });
  }
}
const moment = this.moment;
closure_0 = undefined;
closure_1 = undefined;
function translate(arg0, arg1, arg2) {
  const text = `${arg0} `;
  if ("ss" === arg2) {
    const result = arg0 % 10;
    let tmp11 = result < 5;
    if (result < 5) {
      tmp11 = arg0 % 10 > 1;
    }
    if (tmp11) {
      tmp11 = ~~arg0 / 10 % 10 !== 1;
    }
    let str8 = "sekund";
    if (tmp11) {
      str8 = "sekundy";
    }
    return text + str8;
  } else if ("m" === arg2) {
    let str7 = "minut\u0119";
    if (arg1) {
      str7 = "minuta";
    }
    return str7;
  } else if ("mm" === arg2) {
    const result1 = arg0 % 10;
    let tmp9 = result1 < 5;
    if (result1 < 5) {
      tmp9 = arg0 % 10 > 1;
    }
    if (tmp9) {
      tmp9 = ~~arg0 / 10 % 10 !== 1;
    }
    let str6 = "minut";
    if (tmp9) {
      str6 = "minuty";
    }
    return text + str6;
  } else if ("h" === arg2) {
    let str5 = "godzin\u0119";
    if (arg1) {
      str5 = "godzina";
    }
    return str5;
  } else if ("hh" === arg2) {
    const result2 = arg0 % 10;
    let tmp7 = result2 < 5;
    if (result2 < 5) {
      tmp7 = arg0 % 10 > 1;
    }
    if (tmp7) {
      tmp7 = ~~arg0 / 10 % 10 !== 1;
    }
    let str4 = "godzin";
    if (tmp7) {
      str4 = "godziny";
    }
    return text + str4;
  } else if ("MM" === arg2) {
    const result3 = arg0 % 10;
    let tmp5 = result3 < 5;
    if (result3 < 5) {
      tmp5 = arg0 % 10 > 1;
    }
    if (tmp5) {
      tmp5 = ~~arg0 / 10 % 10 !== 1;
    }
    let str3 = "miesi\u0119cy";
    if (tmp5) {
      str3 = "miesi\u0105ce";
    }
    return text + str3;
  } else if ("yy" === arg2) {
    const result4 = arg0 % 10;
    let tmp3 = result4 < 5;
    if (result4 < 5) {
      tmp3 = arg0 % 10 > 1;
    }
    if (tmp3) {
      tmp3 = ~~arg0 / 10 % 10 !== 1;
    }
    let str2 = "lat";
    if (tmp3) {
      str2 = "lata";
    }
    return text + str2;
  }
}
closure_0 = "stycze\u0144_luty_marzec_kwiecie\u0144_maj_czerwiec_lipiec_sierpie\u0144_wrzesie\u0144_pa\u017Adziernik_listopad_grudzie\u0144".split("_");
closure_1 = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrze\u015Bnia_pa\u017Adziernika_listopada_grudnia".split("_");
obj = {
  months(arg0, arg1) {
    if (arg0) {
      if ("" === arg1) {
        const text = `(${closure_1[arg0.month(arg0)]}`;
        let text1 = `${`(${closure_1[arg0.month(arg0)]}` + "|" + closure_0[arg0.month(arg0)]})`;
      } else {
        if (obj.test(arg1)) {
          text1 = dependencyMap2[arg0.month(arg0)];
        } else {
          text1 = dependencyMap[arg0.month(arg0)];
        }
        obj = /D MMMM/;
      }
    } else {
      return dependencyMap;
    }
  },
  monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_pa\u017A_lis_gru".split("_"),
  weekdays: "niedziela_poniedzia\u0142ek_wtorek_\u015Broda_czwartek_pi\u0105tek_sobota".split("_"),
  weekdaysShort: "ndz_pon_wt_\u015Br_czw_pt_sob".split("_"),
  weekdaysMin: "Nd_Pn_Wt_\u015Ar_Cz_Pt_So".split("_"),
  longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" },
  calendar: obj2,
  relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", ss: translate, m: translate, mm: translate, h: translate, hh: translate, d: "1 dzie\u0144", dd: "%d dni", M: "miesi\u0105c", MM: translate, y: "rok", yy: translate },
  dayOfMonthOrdinalParse: /\d{1,2}\./,
  ordinal: "%d.",
  week: { dow: 1, doy: 4 }
};
moment.defineLocale("pl", obj);