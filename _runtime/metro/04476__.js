// _runtime/metro/04476__.js
import _mod4467 from "04467__.js";

let obj3;
let obj4;
let obj5;
const translate3 = function translate(arg0, arg1, arg2) {
  const text = `${arg0} `;
  if ("ss" === arg2) {
    let str13 = "sekunda";
    if (1 !== arg0) {
      if (2 !== arg0) {
        let str14;
        if (3 !== arg0) {
          str14 = "sekundi";
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
        let str8;
        if (3 !== arg0) {
          str8 = "sati";
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
        let str5;
        if (3 !== arg0) {
          str5 = "mjeseci";
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
function nextWeek() {
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
}
function lastWeek() {
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
}
if (typeof exports === "object") {
  if (undefined !== module) {
    if (typeof require === "function") {
      const _module = _mod4467;
      const translate2 = translate3;
      const obj2 = {
        months: obj3,
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
        calendar: obj4,
        relativeTime: obj5,
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 7 },
      };
      const split =
        "sije\u010Dnja_velja\u010De_o\u017Eujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca"
          .split;
      let str2 = "_";
      const defineLocale2 = _module.defineLocale;
      let str3 =
        "sije\u010Danj_velja\u010Da_o\u017Eujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac";
      const split2 =
        "sije\u010Danj_velja\u010Da_o\u017Eujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac"
          .split;
      let str4 = "sij._velj._o\u017Eu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.";
      const split3 = "sij._velj._o\u017Eu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split;
      let str5 = "nedjelja_ponedjeljak_utorak_srijeda_\u010Detvrtak_petak_subota";
      const split4 = "nedjelja_ponedjeljak_utorak_srijeda_\u010Detvrtak_petak_subota".split;
      let str6 = "ned._pon._uto._sri._\u010Det._pet._sub.";
      const split5 = "ned._pon._uto._sri._\u010Det._pet._sub.".split;
      let str7 = "ne_po_ut_sr_\u010De_pe_su";
      const split6 = "ne_po_ut_sr_\u010De_pe_su".split;
      let str8 = "hr";
      obj3 = {
        format:
          "sije\u010Dnja_velja\u010De_o\u017Eujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split(
            "_",
          ),
        standalone:
          "sije\u010Danj_velja\u010Da_o\u017Eujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split(
            "_",
          ),
      };
      obj4 = {
        sameDay: "[danas u] LT",
        nextDay: "[sutra u] LT",
        nextWeek,
        lastDay: "[ju\u010Der u] LT",
        lastWeek,
        sameElse: "L",
      };
      obj5 = {
        future: "za %s",
        past: "prije %s",
        s: "par sekundi",
        ss: translate2,
        m: translate2,
        mm: translate2,
        h: translate2,
        hh: translate2,
        d: "dan",
        dd: translate2,
        M: "mjesec",
        MM: translate2,
        y: "godinu",
        yy: translate2,
      };
      defineLocale2("hr", obj2);
    }
  }
}
if (typeof globalThis.define === "function") {
  const define2 = globalThis.define;
  if (globalThis.define.amd) {
    globalThis.define(["../moment"], function t(defineLocale) {
      const translate = translate3;
      defineLocale = defineLocale.defineLocale;
      const obj = {
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
          nextWeek,
          lastDay: "[ju\u010Der u] LT",
          lastWeek,
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
      ({
        format:
          "sije\u010Dnja_velja\u010De_o\u017Eujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split(
            "_",
          ),
        standalone:
          "sije\u010Danj_velja\u010Da_o\u017Eujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split(
            "_",
          ),
      });
      return defineLocale("hr", obj);
    });
  }
}
const moment = this.moment;
let translate = translate3;
let obj = {
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
    nextWeek,
    lastDay: "[ju\u010Der u] LT",
    lastWeek,
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
let defineLocale = moment.defineLocale;
({
  format:
    "sije\u010Dnja_velja\u010De_o\u017Eujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split(
      "_",
    ),
  standalone:
    "sije\u010Danj_velja\u010Da_o\u017Eujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split(
      "_",
    ),
});
defineLocale("hr", obj);
