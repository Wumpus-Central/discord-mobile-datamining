// === Module 4066: hooks ===

// Module 4066 (hooks)
import hooks from "hooks" /* 4043 */;

if (typeof exports === "object") {
  if (undefined !== module) {
    if (typeof require === "function") {
      const _module = hooks;
      let closure_0 = { 1: "'inci", 5: "'inci", 8: "'inci", 70: "'inci", 80: "'inci", 2: "'nci", 7: "'nci", 20: "'nci", 50: "'nci", 3: "'\u00FCnc\u00FC", 4: "'\u00FCnc\u00FC", 100: "'\u00FCnc\u00FC", 6: "'nc\u0131", 9: "'uncu", 10: "'uncu", 30: "'uncu", 60: "'\u0131nc\u0131", 90: "'\u0131nc\u0131" };
      let obj = { months: null, monthsShort: null, weekdays: null, weekdaysShort: null, weekdaysMin: null, meridiem: null, meridiemParse: null, isPM: null, longDateFormat: null, calendar: null, relativeTime: null, ordinal: null, week: null };
      const split = "Ocak_\u015Eubat_Mart_Nisan_May\u0131s_Haziran_Temmuz_A\u011Fustos_Eyl\u00FCl_Ekim_Kas\u0131m_Aral\u0131k".split;
      obj[0] = "Ocak_\u015Eubat_Mart_Nisan_May\u0131s_Haziran_Temmuz_A\u011Fustos_Eyl\u00FCl_Ekim_Kas\u0131m_Aral\u0131k".split("_");
      const split2 = "Oca_\u015Eub_Mar_Nis_May_Haz_Tem_A\u011Fu_Eyl_Eki_Kas_Ara".split;
      obj[1] = "Oca_\u015Eub_Mar_Nis_May_Haz_Tem_A\u011Fu_Eyl_Eki_Kas_Ara".split("_");
      const split3 = "Pazar_Pazartesi_Sal\u0131_\u00C7ar\u015Famba_Per\u015Fembe_Cuma_Cumartesi".split;
      obj[2] = "Pazar_Pazartesi_Sal\u0131_\u00C7ar\u015Famba_Per\u015Fembe_Cuma_Cumartesi".split("_");
      const split4 = "Paz_Pzt_Sal_\u00C7ar_Per_Cum_Cmt".split;
      obj[3] = "Paz_Pzt_Sal_\u00C7ar_Per_Cum_Cmt".split("_");
      const split5 = "Pz_Pt_Sa_\u00C7a_Pe_Cu_Ct".split;
      obj[4] = "Pz_Pt_Sa_\u00C7a_Pe_Cu_Ct".split("_");
      obj[5] = function meridiem(arg0, arg1, arg2) {
        if (arg0 < 12) {
          let str2 = "\u00D6\u00D6";
          if (arg2) {
            str2 = "\u00F6\u00F6";
          }
          let str = str2;
        } else {
          str = "\u00D6S";
          if (arg2) {
            str = "\u00F6s";
          }
        }
        return str;
      };
      obj[6] = /öö|ÖÖ|ös|ÖS/;
      obj[7] = function isPM(arg0) {
        let tmp = "\u00F6s" === arg0;
        if (!tmp) {
          tmp = "\u00D6S" === arg0;
        }
        return tmp;
      };
      obj[8] = { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" };
      obj[9] = { sameDay: "[bug\u00FCn saat] LT", nextDay: "[yar\u0131n saat] LT", nextWeek: "[gelecek] dddd [saat] LT", lastDay: "[d\u00FCn] LT", lastWeek: "[ge\u00E7en] dddd [saat] LT", sameElse: "L" };
      obj[10] = { future: "%s sonra", past: "%s \u00F6nce", s: "birka\u00E7 saniye", ss: "%d saniye", m: "bir dakika", mm: "%d dakika", h: "bir saat", hh: "%d saat", d: "bir g\u00FCn", dd: "%d g\u00FCn", w: "bir hafta", ww: "%d hafta", M: "bir ay", MM: "%d ay", y: "bir y\u0131l", yy: "%d y\u0131l" };
      obj[11] = function ordinal(arg0, arg1) {
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
      obj[12] = { dow: 1, doy: 7 };
      _module.defineLocale("tr", obj);
    }
  }
}
if (typeof globalThis.define === "function") {
  if (globalThis.define.amd) {
    globalThis.define(["../moment"], function n(defineLocale) {
      closure_0 = { 1: "'inci", 5: "'inci", 8: "'inci", 70: "'inci", 80: "'inci", 2: "'nci", 7: "'nci", 20: "'nci", 50: "'nci", 3: "'\u00FCnc\u00FC", 4: "'\u00FCnc\u00FC", 100: "'\u00FCnc\u00FC", 6: "'nc\u0131", 9: "'uncu", 10: "'uncu", 30: "'uncu", 60: "'\u0131nc\u0131", 90: "'\u0131nc\u0131" };
      return defineLocale.defineLocale("tr", {
        months: "Ocak_\u015Eubat_Mart_Nisan_May\u0131s_Haziran_Temmuz_A\u011Fustos_Eyl\u00FCl_Ekim_Kas\u0131m_Aral\u0131k".split("_"),
        monthsShort: "Oca_\u015Eub_Mar_Nis_May_Haz_Tem_A\u011Fu_Eyl_Eki_Kas_Ara".split("_"),
        weekdays: "Pazar_Pazartesi_Sal\u0131_\u00C7ar\u015Famba_Per\u015Fembe_Cuma_Cumartesi".split("_"),
        weekdaysShort: "Paz_Pzt_Sal_\u00C7ar_Per_Cum_Cmt".split("_"),
        weekdaysMin: "Pz_Pt_Sa_\u00C7a_Pe_Cu_Ct".split("_"),
        meridiem(arg0, arg1, arg2) {
          if (arg0 < 12) {
            let str2 = "\u00D6\u00D6";
            if (arg2) {
              str2 = "\u00F6\u00F6";
            }
            let str = str2;
          } else {
            str = "\u00D6S";
            if (arg2) {
              str = "\u00F6s";
            }
          }
          return str;
        },
        meridiemParse: /öö|ÖÖ|ös|ÖS/,
        isPM(arg0) {
          let tmp = "\u00F6s" === arg0;
          if (!tmp) {
            tmp = "\u00D6S" === arg0;
          }
          return tmp;
        },
        longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" },
        calendar: { sameDay: "[bug\u00FCn saat] LT", nextDay: "[yar\u0131n saat] LT", nextWeek: "[gelecek] dddd [saat] LT", lastDay: "[d\u00FCn] LT", lastWeek: "[ge\u00E7en] dddd [saat] LT", sameElse: "L" },
        relativeTime: { future: "%s sonra", past: "%s \u00F6nce", s: "birka\u00E7 saniye", ss: "%d saniye", m: "bir dakika", mm: "%d dakika", h: "bir saat", hh: "%d saat", d: "bir g\u00FCn", dd: "%d g\u00FCn", w: "bir hafta", ww: "%d hafta", M: "bir ay", MM: "%d ay", y: "bir y\u0131l", yy: "%d y\u0131l" },
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
  weekdaysShort: "Paz_Pzt_Sal_\u00C7ar_Per_Cum_Cmt".split("_"),
  weekdaysMin: "Pz_Pt_Sa_\u00C7a_Pe_Cu_Ct".split("_"),
  meridiem(arg0, arg1, arg2) {
    if (arg0 < 12) {
      let str2 = "\u00D6\u00D6";
      if (arg2) {
        str2 = "\u00F6\u00F6";
      }
      let str = str2;
    } else {
      str = "\u00D6S";
      if (arg2) {
        str = "\u00F6s";
      }
    }
    return str;
  },
  meridiemParse: /öö|ÖÖ|ös|ÖS/,
  isPM(arg0) {
    let tmp = "\u00F6s" === arg0;
    if (!tmp) {
      tmp = "\u00D6S" === arg0;
    }
    return tmp;
  },
  longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" },
  calendar: { sameDay: "[bug\u00FCn saat] LT", nextDay: "[yar\u0131n saat] LT", nextWeek: "[gelecek] dddd [saat] LT", lastDay: "[d\u00FCn] LT", lastWeek: "[ge\u00E7en] dddd [saat] LT", sameElse: "L" },
  relativeTime: { future: "%s sonra", past: "%s \u00F6nce", s: "birka\u00E7 saniye", ss: "%d saniye", m: "bir dakika", mm: "%d dakika", h: "bir saat", hh: "%d saat", d: "bir g\u00FCn", dd: "%d g\u00FCn", w: "bir hafta", ww: "%d hafta", M: "bir ay", MM: "%d ay", y: "bir y\u0131l", yy: "%d y\u0131l" },
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