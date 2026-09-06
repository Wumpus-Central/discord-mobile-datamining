// === Module 4160: ? ===

// Module 4160
import _mod4153 from "module_4153" /* 4153 */;

const fn = function n(moment) {
  function translate(arg0, arg1, arg2, arg3) {
    let str = "";
    switch (arg2) {
      case "s":
        let str13 = "muutama sekunti";
        if (arg3) {
          str13 = "muutaman sekunnin";
        }
        return str13;
      case "ss":
        let str12 = "sekuntia";
        if (arg3) {
          str12 = "sekunnin";
        }
        str = str12;
        if (arg0 >= 10) {
          return arg0 + " " + str;
        }
      break;
      case "m":
        let str11 = "minuutti";
        if (arg3) {
          str11 = "minuutin";
        }
        return str11;
      case "mm":
        let str10 = "minuuttia";
        if (arg3) {
          str10 = "minuutin";
        }
        str = str10;
      break;
      case "h":
        let str9 = "tunti";
        if (arg3) {
          str9 = "tunnin";
        }
        return str9;
      case "hh":
        let str8 = "tuntia";
        if (arg3) {
          str8 = "tunnin";
        }
        str = str8;
      break;
      case "d":
        let str7 = "p\u00E4iv\u00E4";
        if (arg3) {
          str7 = "p\u00E4iv\u00E4n";
        }
        return str7;
      case "dd":
        let str6 = "p\u00E4iv\u00E4\u00E4";
        if (arg3) {
          str6 = "p\u00E4iv\u00E4n";
        }
        str = str6;
      break;
      case "M":
        let str5 = "kuukausi";
        if (arg3) {
          str5 = "kuukauden";
        }
        return str5;
      case "MM":
        let str4 = "kuukautta";
        if (arg3) {
          str4 = "kuukauden";
        }
        str = str4;
      break;
      case "y":
        let str3 = "vuosi";
        if (arg3) {
          str3 = "vuoden";
        }
        return str3;
      case "yy":
        let str2 = "vuotta";
        if (arg3) {
          str2 = "vuoden";
        }
        str = str2;
      break;
    }
  }
  const parts = "nolla yksi kaksi kolme nelj\u00E4 viisi kuusi seitsem\u00E4n kahdeksan yhdeks\u00E4n".split(" ");
  const items = ["nolla", "yhden", "kahden", "kolmen", "nelj\u00E4n", "viiden", "kuuden", parts[7], parts[8], parts[9]];
  ({ split, split: split2 } = "su_ma_ti_ke_to_pe_la");
  return moment.defineLocale("fi", { months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kes\u00E4kuu_hein\u00E4kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"), monthsShort: "tammi_helmi_maalis_huhti_touko_kes\u00E4_hein\u00E4_elo_syys_loka_marras_joulu".split("_"), weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"), weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"), weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "Do MMMM[ta] YYYY", LLL: "Do MMMM[ta] YYYY, [klo] HH.mm", LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm", l: "D.M.YYYY", ll: "Do MMM YYYY", lll: "Do MMM YYYY, [klo] HH.mm", llll: "ddd, Do MMM YYYY, [klo] HH.mm" }, calendar: { sameDay: "[t\u00E4n\u00E4\u00E4n] [klo] LT", nextDay: "[huomenna] [klo] LT", nextWeek: "dddd [klo] LT", lastDay: "[eilen] [klo] LT", lastWeek: "[viime] dddd[na] [klo] LT", sameElse: "L" }, relativeTime: { future: "%s p\u00E4\u00E4st\u00E4", past: "%s sitten", s: translate, ss: translate, m: translate, mm: translate, h: translate, hh: translate, d: translate, dd: translate, M: translate, MM: translate, y: translate, yy: translate }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
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