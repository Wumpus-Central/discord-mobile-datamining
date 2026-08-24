// === Module 3985: n ===

// Module 3985 (n)
import t from "t" /* 3978 */;

const fn = function n(moment) {
  function translate(arg0, arg1, arg2, arg3) {
    while (true) {
      let tmp3 = arg0;
      let num = 10;
      let tmp4 = arg0;
      if (arg0 >= 10) {
        let str2 = " ";
        return arg0 + " " + tmp2;
      } else {
        if (tmp) {
          let tmp7 = items;
          let tmp6 = items[arg0];
        } else {
          let tmp5 = parts;
          tmp6 = parts[arg0];
        }
        let tmp8 = tmp6;
      }
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