// _runtime/04162_translate.js
import hooks from "04153_hooks.js";

if (typeof exports === "object") {
  if (undefined !== module) {
    if (typeof require === "function") {
      const _module = hooks;
      const translate2 = function translate(arg0, arg1, arg2) {
        const text = `${arg0} `;
        if ("ss" === arg2) {
          let str13 = "sekunda";
          if (1 !== arg0) {
            if (2 !== arg0) {
              if (3 !== arg0) {
                let str14 = "sekundi";
              }
              str13 = str14;
            }
            str14 = "sekunde";
          }
          return text + str13;
        } else if ("m" === arg2) {
          let str12 = "jedne minute";
          if (arg1) {
            str12 = "jedna minuta";
          }
          return str12;
        } else if ("mm" === arg2) {
          let str10 = "minuta";
          let str11 = "minuta";
          if (1 !== arg0) {
            if (2 !== arg0) {
              str11 = str10;
            }
            str10 = "minute";
          }
          return text + str11;
        } else if ("h" === arg2) {
          let str9 = "jednog sata";
          if (arg1) {
            str9 = "jedan sat";
          }
          return str9;
        } else if ("hh" === arg2) {
          let str7 = "sat";
          if (1 !== arg0) {
            if (2 !== arg0) {
              if (3 !== arg0) {
                let str8 = "sati";
              }
              str7 = str8;
            }
            str8 = "sata";
          }
          return text + str7;
        } else if ("dd" === arg2) {
          let str6 = "dana";
          if (1 === arg0) {
            str6 = "dan";
          }
          return text + str6;
        } else if ("MM" === arg2) {
          let str4 = "mjesec";
          if (1 !== arg0) {
            if (2 !== arg0) {
              if (3 !== arg0) {
                let str5 = "mjeseci";
              }
              str4 = str5;
            }
            str5 = "mjeseca";
          }
          return text + str4;
        } else if ("yy" === arg2) {
          let str2 = "godina";
          let str3 = "godina";
          if (1 !== arg0) {
            if (2 !== arg0) {
              str3 = str2;
            }
            str2 = "godine";
          }
          return text + str3;
        }
      };
      let obj = {
        months: null,
        monthsShort: null,
        monthsParseExact: true,
        weekdays: null,
        weekdaysShort: null,
        weekdaysMin: null,
        weekdaysParseExact: true,
        longDateFormat: null,
        calendar: null,
        relativeTime: null,
        dayOfMonthOrdinalParse: null,
        ordinal: "%d.",
        week: null,
      };
      obj = { format: null, standalone: null };
      const split =
        "sije\u010Dnja_velja\u010De_o\u017Eujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca"
          .split;
      obj[0] =
        "sije\u010Dnja_velja\u010De_o\u017Eujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split(
          "_",
        );
      const split2 =
        "sije\u010Danj_velja\u010Da_o\u017Eujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac"
          .split;
      obj[1] =
        "sije\u010Danj_velja\u010Da_o\u017Eujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split(
          "_",
        );
      obj[0] = obj;
      const split3 = "sij._velj._o\u017Eu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split;
      obj[1] = "sij._velj._o\u017Eu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_");
      const split4 = "nedjelja_ponedjeljak_utorak_srijeda_\u010Detvrtak_petak_subota".split;
      obj[3] = "nedjelja_ponedjeljak_utorak_srijeda_\u010Detvrtak_petak_subota".split("_");
      const split5 = "ned._pon._uto._sri._\u010Det._pet._sub.".split;
      obj[4] = "ned._pon._uto._sri._\u010Det._pet._sub.".split("_");
      const split6 = "ne_po_ut_sr_\u010De_pe_su".split;
      obj[5] = "ne_po_ut_sr_\u010De_pe_su".split("_");
      obj[7] = {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "Do MMMM YYYY",
        LLL: "Do MMMM YYYY H:mm",
        LLLL: "dddd, Do MMMM YYYY H:mm",
      };
      const obj1 = {
        sameDay: "[danas u] LT",
        nextDay: "[sutra u] LT",
        nextWeek: null,
        lastDay: "[ju\u010Der u] LT",
        lastWeek: null,
        sameElse: "L",
      };
      obj1[2] = function nextWeek() {
        const dayResult = this.day();
        if (0 === dayResult) {
          return "[u] [nedjelju] [u] LT";
        } else if (3 === dayResult) {
          return "[u] [srijedu] [u] LT";
        } else if (6 === dayResult) {
          return "[u] [subotu] [u] LT";
        } else {
          return "[u] dddd [u] LT";
        }
      };
      obj1[4] = function lastWeek() {
        const dayResult = this.day();
        if (0 === dayResult) {
          return "[pro\u0161lu] [nedjelju] [u] LT";
        } else if (3 === dayResult) {
          return "[pro\u0161lu] [srijedu] [u] LT";
        } else if (6 === dayResult) {
          return "[pro\u0161le] [subote] [u] LT";
        } else {
          return "[pro\u0161li] dddd [u] LT";
        }
      };
      obj[8] = obj1;
      const obj2 = {
        future: "za %s",
        past: "prije %s",
        s: "par sekundi",
        ss: null,
        m: null,
        mm: null,
        h: null,
        hh: null,
        d: "dan",
        dd: null,
        M: "mjesec",
        MM: null,
        y: "godinu",
        yy: null,
      };
      obj2[3] = translate2;
      obj2[4] = translate2;
      obj2[5] = translate2;
      obj2[6] = translate2;
      obj2[7] = translate2;
      obj2[9] = translate2;
      obj2[11] = translate2;
      obj2[13] = translate2;
      obj[9] = obj2;
      obj[10] = /\d{1,2}\./;
      obj[12] = { dow: 1, doy: 7 };
      _module.defineLocale("hr", obj);
    }
  }
}
if (typeof globalThis.define === "function") {
  if (globalThis.define.amd) {
    globalThis.define(["../moment"], function t(defineLocale) {
      function translate(arg0, arg1, arg2) {
        const text = `${arg0} `;
        if ("ss" === arg2) {
          let str13 = "sekunda";
          if (1 !== arg0) {
            if (2 !== arg0) {
              if (3 !== arg0) {
                let str14 = "sekundi";
              }
              str13 = str14;
            }
            str14 = "sekunde";
          }
          return text + str13;
        } else if ("m" === arg2) {
          let str12 = "jedne minute";
          if (arg1) {
            str12 = "jedna minuta";
          }
          return str12;
        } else if ("mm" === arg2) {
          let str10 = "minuta";
          let str11 = "minuta";
          if (1 !== arg0) {
            if (2 !== arg0) {
              str11 = str10;
            }
            str10 = "minute";
          }
          return text + str11;
        } else if ("h" === arg2) {
          let str9 = "jednog sata";
          if (arg1) {
            str9 = "jedan sat";
          }
          return str9;
        } else if ("hh" === arg2) {
          let str7 = "sat";
          if (1 !== arg0) {
            if (2 !== arg0) {
              if (3 !== arg0) {
                let str8 = "sati";
              }
              str7 = str8;
            }
            str8 = "sata";
          }
          return text + str7;
        } else if ("dd" === arg2) {
          let str6 = "dana";
          if (1 === arg0) {
            str6 = "dan";
          }
          return text + str6;
        } else if ("MM" === arg2) {
          let str4 = "mjesec";
          if (1 !== arg0) {
            if (2 !== arg0) {
              if (3 !== arg0) {
                let str5 = "mjeseci";
              }
              str4 = str5;
            }
            str5 = "mjeseca";
          }
          return text + str4;
        } else if ("yy" === arg2) {
          let str2 = "godina";
          let str3 = "godina";
          if (1 !== arg0) {
            if (2 !== arg0) {
              str3 = str2;
            }
            str2 = "godine";
          }
          return text + str3;
        }
      }
      let obj = {
        months: null,
        monthsShort: null,
        monthsParseExact: true,
        weekdays: null,
        weekdaysShort: null,
        weekdaysMin: null,
        weekdaysParseExact: true,
        longDateFormat: null,
        calendar: null,
        relativeTime: null,
        dayOfMonthOrdinalParse: null,
        ordinal: "%d.",
        week: null,
      };
      obj = {
        format:
          "sije\u010Dnja_velja\u010De_o\u017Eujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split(
            "_",
          ),
        standalone:
          "sije\u010Danj_velja\u010Da_o\u017Eujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split(
            "_",
          ),
      };
      obj[0] = obj;
      obj[1] = "sij._velj._o\u017Eu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_");
      obj[3] = "nedjelja_ponedjeljak_utorak_srijeda_\u010Detvrtak_petak_subota".split("_");
      obj[4] = "ned._pon._uto._sri._\u010Det._pet._sub.".split("_");
      obj[5] = "ne_po_ut_sr_\u010De_pe_su".split("_");
      obj[7] = {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "Do MMMM YYYY",
        LLL: "Do MMMM YYYY H:mm",
        LLLL: "dddd, Do MMMM YYYY H:mm",
      };
      obj[8] = {
        sameDay: "[danas u] LT",
        nextDay: "[sutra u] LT",
        nextWeek() {
          const dayResult = this.day();
          if (0 === dayResult) {
            return "[u] [nedjelju] [u] LT";
          } else if (3 === dayResult) {
            return "[u] [srijedu] [u] LT";
          } else if (6 === dayResult) {
            return "[u] [subotu] [u] LT";
          } else {
            return "[u] dddd [u] LT";
          }
        },
        lastDay: "[ju\u010Der u] LT",
        lastWeek() {
          const dayResult = this.day();
          if (0 === dayResult) {
            return "[pro\u0161lu] [nedjelju] [u] LT";
          } else if (3 === dayResult) {
            return "[pro\u0161lu] [srijedu] [u] LT";
          } else if (6 === dayResult) {
            return "[pro\u0161le] [subote] [u] LT";
          } else {
            return "[pro\u0161li] dddd [u] LT";
          }
        },
        sameElse: "L",
      };
      obj[9] = {
        future: "za %s",
        past: "prije %s",
        s: "par sekundi",
        ss: translate,
        m: translate,
        mm: translate,
        h: translate,
        hh: translate,
        d: "dan",
        dd: translate,
        M: "mjesec",
        MM: translate,
        y: "godinu",
        yy: translate,
      };
      obj[10] = /\d{1,2}\./;
      obj[12] = { dow: 1, doy: 7 };
      return defineLocale.defineLocale("hr", obj);
    });
  }
}
const moment = this.moment;
function translate(arg0, arg1, arg2) {
  const text = `${arg0} `;
  if ("ss" === arg2) {
    let str13 = "sekunda";
    if (1 !== arg0) {
      if (2 !== arg0) {
        if (3 !== arg0) {
          let str14 = "sekundi";
        }
        str13 = str14;
      }
      str14 = "sekunde";
    }
    return text + str13;
  } else if ("m" === arg2) {
    let str12 = "jedne minute";
    if (arg1) {
      str12 = "jedna minuta";
    }
    return str12;
  } else if ("mm" === arg2) {
    let str10 = "minuta";
    let str11 = "minuta";
    if (1 !== arg0) {
      if (2 !== arg0) {
        str11 = str10;
      }
      str10 = "minute";
    }
    return text + str11;
  } else if ("h" === arg2) {
    let str9 = "jednog sata";
    if (arg1) {
      str9 = "jedan sat";
    }
    return str9;
  } else if ("hh" === arg2) {
    let str7 = "sat";
    if (1 !== arg0) {
      if (2 !== arg0) {
        if (3 !== arg0) {
          let str8 = "sati";
        }
        str7 = str8;
      }
      str8 = "sata";
    }
    return text + str7;
  } else if ("dd" === arg2) {
    let str6 = "dana";
    if (1 === arg0) {
      str6 = "dan";
    }
    return text + str6;
  } else if ("MM" === arg2) {
    let str4 = "mjesec";
    if (1 !== arg0) {
      if (2 !== arg0) {
        if (3 !== arg0) {
          let str5 = "mjeseci";
        }
        str4 = str5;
      }
      str5 = "mjeseca";
    }
    return text + str4;
  } else if ("yy" === arg2) {
    let str2 = "godina";
    let str3 = "godina";
    if (1 !== arg0) {
      if (2 !== arg0) {
        str3 = str2;
      }
      str2 = "godine";
    }
    return text + str3;
  }
}
obj = {
  months: {
    format:
      "sije\u010Dnja_velja\u010De_o\u017Eujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split(
        "_",
      ),
    standalone:
      "sije\u010Danj_velja\u010Da_o\u017Eujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split(
        "_",
      ),
  },
  monthsShort: "sij._velj._o\u017Eu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
  monthsParseExact: true,
  weekdays: "nedjelja_ponedjeljak_utorak_srijeda_\u010Detvrtak_petak_subota".split("_"),
  weekdaysShort: "ned._pon._uto._sri._\u010Det._pet._sub.".split("_"),
  weekdaysMin: "ne_po_ut_sr_\u010De_pe_su".split("_"),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "DD.MM.YYYY",
    LL: "Do MMMM YYYY",
    LLL: "Do MMMM YYYY H:mm",
    LLLL: "dddd, Do MMMM YYYY H:mm",
  },
  calendar: {
    sameDay: "[danas u] LT",
    nextDay: "[sutra u] LT",
    nextWeek() {
      const dayResult = this.day();
      if (0 === dayResult) {
        return "[u] [nedjelju] [u] LT";
      } else if (3 === dayResult) {
        return "[u] [srijedu] [u] LT";
      } else if (6 === dayResult) {
        return "[u] [subotu] [u] LT";
      } else {
        return "[u] dddd [u] LT";
      }
    },
    lastDay: "[ju\u010Der u] LT",
    lastWeek() {
      const dayResult = this.day();
      if (0 === dayResult) {
        return "[pro\u0161lu] [nedjelju] [u] LT";
      } else if (3 === dayResult) {
        return "[pro\u0161lu] [srijedu] [u] LT";
      } else if (6 === dayResult) {
        return "[pro\u0161le] [subote] [u] LT";
      } else {
        return "[pro\u0161li] dddd [u] LT";
      }
    },
    sameElse: "L",
  },
  relativeTime: {
    future: "za %s",
    past: "prije %s",
    s: "par sekundi",
    ss: translate,
    m: translate,
    mm: translate,
    h: translate,
    hh: translate,
    d: "dan",
    dd: translate,
    M: "mjesec",
    MM: translate,
    y: "godinu",
    yy: translate,
  },
  dayOfMonthOrdinalParse: /\d{1,2}\./,
  ordinal: "%d.",
  week: { dow: 1, doy: 7 },
};
moment.defineLocale("hr", obj);
