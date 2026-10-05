// === Module 4464: ? ===

// Module 4464
import _mod4461 from "module_4461" /* 4461 */;

let obj3;
const processRelativeTime3 = function processRelativeTime(arg0, arg1, arg2, arg3) {
  let items;
  let items1;
  let items2;
  const obj = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: items, w: ["eine Woche", "einer Woche"], M: ["ein Monat", "einem Monat"], MM: items1, y: ["ein Jahr", "einem Jahr"], yy: items2 };
  items = [`${arg0} Tage`, `${arg0} Tagen`];
  items1 = [`${arg0} Monate`, `${arg0} Monaten`];
  items2 = [`${arg0} Jahre`, `${arg0} Jahren`];
  return arg1 ? obj[arg2][0] : obj[arg2][1];
};
if (typeof exports === "object") {
  if (undefined !== module) {
    if (typeof require === "function") {
      const _module = _mod4461;
      const processRelativeTime2 = processRelativeTime3;
      const split = "Januar_Februar_M\u00E4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split;
      const defineLocale = _module.defineLocale;
      const split2 = "Jan._Feb._M\u00E4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split;
      const split3 = "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split;
      const split4 = "So._Mo._Di._Mi._Do._Fr._Sa.".split;
      const split5 = "So_Mo_Di_Mi_Do_Fr_Sa".split;
      const obj2 = { months: "Januar_Februar_M\u00E4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._M\u00E4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"), monthsParseExact: true, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: true, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: obj3, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } };
      obj3 = { future: "in %s", past: "vor %s", s: "ein paar Sekunden", ss: "%d Sekunden", m: processRelativeTime2, mm: "%d Minuten", h: processRelativeTime2, hh: "%d Stunden", d: processRelativeTime2, dd: processRelativeTime2, w: processRelativeTime2, ww: "%d Wochen", M: processRelativeTime2, MM: processRelativeTime2, y: processRelativeTime2, yy: processRelativeTime2 };
      defineLocale("de", obj2);
    }
  }
}
if (typeof globalThis.define === "function") {
  const define2 = globalThis.define;
  if (globalThis.define.amd) {
    globalThis.define(["../moment"], function t(defineLocale) {
      const processRelativeTime = processRelativeTime3;
      let obj = { months: "Januar_Februar_M\u00E4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._M\u00E4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"), monthsParseExact: true, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: true, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", ss: "%d Sekunden", m: processRelativeTime, mm: "%d Minuten", h: processRelativeTime, hh: "%d Stunden", d: processRelativeTime, dd: processRelativeTime, w: processRelativeTime, ww: "%d Wochen", M: processRelativeTime, MM: processRelativeTime, y: processRelativeTime, yy: processRelativeTime }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } };
      return defineLocale.defineLocale("de", obj);
    });
  }
}
const moment = this.moment;
let processRelativeTime = processRelativeTime3;
let obj = { months: "Januar_Februar_M\u00E4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._M\u00E4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"), monthsParseExact: true, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: true, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", ss: "%d Sekunden", m: processRelativeTime, mm: "%d Minuten", h: processRelativeTime, hh: "%d Stunden", d: processRelativeTime, dd: processRelativeTime, w: processRelativeTime, ww: "%d Wochen", M: processRelativeTime, MM: processRelativeTime, y: processRelativeTime, yy: processRelativeTime }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } };
moment.defineLocale("de", obj);