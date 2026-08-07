// _runtime/03906_t.js
if (typeof exports === "object") {
  if (undefined !== module) {
    if (typeof require === "function") {
      const _module = require("t");
      let closure_0 = { 1: "'inci", 5: "'inci", 8: "'inci", 70: "'inci", 80: "'inci", 2: "'nci", 7: "'nci", 20: "'nci", 50: "'nci", 3: "'\u00FCnc\u00FC", 4: "'\u00FCnc\u00FC", 100: "'\u00FCnc\u00FC", 6: "'nc\u0131", 9: "'uncu", 10: "'uncu", 30: "'uncu", 60: "'\u0131nc\u0131", 90: "'\u0131nc\u0131" };
      let obj = { months: null, monthsShort: null, weekdays: null, weekdaysShort: null, weekdaysMin: null, longDateFormat: null, calendar: null, relativeTime: null, ordinal: null, week: null };
      const split = "Ocak_\u015Eubat_Mart_Nisan_May\u0131s_Haziran_Temmuz_A\u011Fustos_Eyl\u00FCl_Ekim_Kas\u0131m_Aral\u0131k".split;
      obj[0] = "Ocak_\u015Eubat_Mart_Nisan_May\u0131s_Haziran_Temmuz_A\u011Fustos_Eyl\u00FCl_Ekim_Kas\u0131m_Aral\u0131k".split("_");
      const split2 = "Oca_\u015Eub_Mar_Nis_May_Haz_Tem_A\u011Fu_Eyl_Eki_Kas_Ara".split;
      obj[1] = "Oca_\u015Eub_Mar_Nis_May_Haz_Tem_A\u011Fu_Eyl_Eki_Kas_Ara".split("_");
      const split3 = "Pazar_Pazartesi_Sal\u0131_\u00C7ar\u015Famba_Per\u015Fembe_Cuma_Cumartesi".split;
      obj[2] = "Pazar_Pazartesi_Sal\u0131_\u00C7ar\u015Famba_Per\u015Fembe_Cuma_Cumartesi".split("_");
      const split4 = "Paz_Pts_Sal_\u00C7ar_Per_Cum_Cts".split;
      obj[3] = "Paz_Pts_Sal_\u00C7ar_Per_Cum_Cts".split("_");
      const split5 = "Pz_Pt_Sa_\u00C7a_Pe_Cu_Ct".split;
      obj[4] = "Pz_Pt_Sa_\u00C7a_Pe_Cu_Ct".split("_");
      obj[5] = { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" };
      obj[6] = { sameDay: "[bug\u00FCn saat] LT", nextDay: "[yar\u0131n saat] LT", nextWeek: "[gelecek] dddd [saat] LT", lastDay: "[d\u00FCn] LT", lastWeek: "[ge\u00E7en] dddd [saat] LT", sameElse: "L" };
      obj[7] = { future: "%s sonra", past: "%s \u00F6nce", s: "birka\u00E7 saniye", ss: "%d saniye", m: "bir dakika", mm: "%d dakika", h: "bir saat", hh: "%d saat", d: "bir g\u00FCn", dd: "%d g\u00FCn", M: "bir ay", MM: "%d ay", y: "bir y\u0131l", yy: "%d y\u0131l" };
      obj[8] = function ordinal(arg0, arg1) {
        if ("d" !== arg1) {
          if ("D" !== arg1) {
            if ("Do" !== arg1) {
              if ("DD" !== arg1) {
                if (0 === arg0) {
                  return arg0 + "'\u0131nc\u0131";
                } else {
                  const result = arg0 % 10;
                  let tmp3 = table[result];
                  if (!tmp3) {
                    tmp3 = tmp2[arg0 % 100 - result];
                  }
                  if (!tmp3) {
                    let num5 = null;
                    if (arg0 >= 100) {
                      num5 = 100;
                    }
                    tmp3 = tmp2[num5];
                  }
                  return arg0 + tmp3;
                }
              }
            }
          }
        }
        return arg0;
      };
      obj[9] = { dow: 1, doy: 7 };
      _module.defineLocale("tr", obj);
    }
  }
}
if (typeof globalThis.define === "function") {
  if (globalThis.define.amd) {
    globalThis.define(["../moment"], function n(defineLocale) {
      let closure_0 = { 1: "'inci", 5: "'inci", 8: "'inci", 70: "'inci", 80: "'inci", 2: "'nci", 7: "'nci", 20: "'nci", 50: "'nci", 3: "'\u00FCnc\u00FC", 4: "'\u00FCnc\u00FC", 100: "'\u00FCnc\u00FC", 6: "'nc\u0131", 9: "'uncu", 10: "'uncu", 30: "'uncu", 60: "'\u0131nc\u0131", 90: "'\u0131nc\u0131" };
      return defineLocale.defineLocale("tr", {
        months: "Ocak_\u015Eubat_Mart_Nisan_May\u0131s_Haziran_Temmuz_A\u011Fustos_Eyl\u00FCl_Ekim_Kas\u0131m_Aral\u0131k".split("_"),
        monthsShort: "Oca_\u015Eub_Mar_Nis_May_Haz_Tem_A\u011Fu_Eyl_Eki_Kas_Ara".split("_"),
        weekdays: "Pazar_Pazartesi_Sal\u0131_\u00C7ar\u015Famba_Per\u015Fembe_Cuma_Cumartesi".split("_"),
        weekdaysShort: "Paz_Pts_Sal_\u00C7ar_Per_Cum_Cts".split("_"),
        weekdaysMin: "Pz_Pt_Sa_\u00C7a_Pe_Cu_Ct".split("_"),
        longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" },
        calendar: { sameDay: "[bug\u00FCn saat] LT", nextDay: "[yar\u0131n saat] LT", nextWeek: "[gelecek] dddd [saat] LT", lastDay: "[d\u00FCn] LT", lastWeek: "[ge\u00E7en] dddd [saat] LT", sameElse: "L" },
        relativeTime: { future: "%s sonra", past: "%s \u00F6nce", s: "birka\u00E7 saniye", ss: "%d saniye", m: "bir dakika", mm: "%d dakika", h: "bir saat", hh: "%d saat", d: "bir g\u00FCn", dd: "%d g\u00FCn", M: "bir ay", MM: "%d ay", y: "bir y\u0131l", yy: "%d y\u0131l" },
        ordinal(arg0, arg1) {
          if ("d" !== arg1) {
            if ("D" !== arg1) {
              if ("Do" !== arg1) {
                if ("DD" !== arg1) {
                  if (0 === arg0) {
                    return arg0 + "'\u0131nc\u0131";
                  } else {
                    const result = arg0 % 10;
                    let tmp3 = table[result];
                    if (!tmp3) {
                      tmp3 = tmp2[arg0 % 100 - result];
                    }
                    if (!tmp3) {
                      let num5 = null;
                      if (arg0 >= 100) {
                        num5 = 100;
                      }
                      tmp3 = tmp2[num5];
                    }
                    return arg0 + tmp3;
                  }
                }
              }
            }
          }
          return arg0;
        },
        week: { dow: 1, doy: 7 }
      });
    });
  }
}
const moment = this.moment;
closure_0 = { 1: "'inci", 5: "'inci", 8: "'inci", 70: "'inci", 80: "'inci", 2: "'nci", 7: "'nci", 20: "'nci", 50: "'nci", 3: "'\u00FCnc\u00FC", 4: "'\u00FCnc\u00FC", 100: "'\u00FCnc\u00FC", 6: "'nc\u0131", 9: "'uncu", 10: "'uncu", 30: "'uncu", 60: "'\u0131nc\u0131", 90: "'\u0131nc\u0131" };
obj = {
  months: "Ocak_\u015Eubat_Mart_Nisan_May\u0131s_Haziran_Temmuz_A\u011Fustos_Eyl\u00FCl_Ekim_Kas\u0131m_Aral\u0131k".split("_"),
  monthsShort: "Oca_\u015Eub_Mar_Nis_May_Haz_Tem_A\u011Fu_Eyl_Eki_Kas_Ara".split("_"),
  weekdays: "Pazar_Pazartesi_Sal\u0131_\u00C7ar\u015Famba_Per\u015Fembe_Cuma_Cumartesi".split("_"),
  weekdaysShort: "Paz_Pts_Sal_\u00C7ar_Per_Cum_Cts".split("_"),
  weekdaysMin: "Pz_Pt_Sa_\u00C7a_Pe_Cu_Ct".split("_"),
  longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" },
  calendar: { sameDay: "[bug\u00FCn saat] LT", nextDay: "[yar\u0131n saat] LT", nextWeek: "[gelecek] dddd [saat] LT", lastDay: "[d\u00FCn] LT", lastWeek: "[ge\u00E7en] dddd [saat] LT", sameElse: "L" },
  relativeTime: { future: "%s sonra", past: "%s \u00F6nce", s: "birka\u00E7 saniye", ss: "%d saniye", m: "bir dakika", mm: "%d dakika", h: "bir saat", hh: "%d saat", d: "bir g\u00FCn", dd: "%d g\u00FCn", M: "bir ay", MM: "%d ay", y: "bir y\u0131l", yy: "%d y\u0131l" },
  ordinal(arg0, arg1) {
    if ("d" !== arg1) {
      if ("D" !== arg1) {
        if ("Do" !== arg1) {
          if ("DD" !== arg1) {
            if (0 === arg0) {
              return arg0 + "'\u0131nc\u0131";
            } else {
              const result = arg0 % 10;
              let tmp3 = table[result];
              if (!tmp3) {
                tmp3 = tmp2[arg0 % 100 - result];
              }
              if (!tmp3) {
                let num5 = null;
                if (arg0 >= 100) {
                  num5 = 100;
                }
                tmp3 = tmp2[num5];
              }
              return arg0 + tmp3;
            }
          }
        }
      }
    }
    return arg0;
  },
  week: { dow: 1, doy: 7 }
};
moment.defineLocale("tr", obj);