// === Module 4156: processRelativeTime ===

// Module 4156 (processRelativeTime)
import _mod4153 from "module_4153" /* 4153 */;

if (typeof exports === "object") {
  if (undefined !== module) {
    if (typeof require === "function") {
      const _module = _mod4153;
      const processRelativeTime2 = function processRelativeTime(arg0, arg1, arg2, arg3) {
        const obj = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: null, w: ["eine Woche", "einer Woche"], M: ["ein Monat", "einem Monat"], MM: null, y: ["ein Jahr", "einem Jahr"], yy: null };
        const items = [`${arg0} Tage`, `${arg0} Tagen`];
        obj.dd = items;
        const items1 = [`${arg0} Monate`, `${arg0} Monaten`];
        obj.MM = items1;
        const items2 = [`${arg0} Jahre`, `${arg0} Jahren`];
        obj.yy = items2;
        return arg1 ? obj[arg2][0] : obj[arg2][1];
      };
      let obj = { months: null, monthsShort: null, monthsParseExact: true, weekdays: null, weekdaysShort: null, weekdaysMin: null, weekdaysParseExact: true, longDateFormat: null, calendar: null, relativeTime: null, dayOfMonthOrdinalParse: null, ordinal: "%d.", week: null };
      const split = "Januar_Februar_M\u00E4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split;
      obj.months = "Januar_Februar_M\u00E4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_");
      const split2 = "Jan._Feb._M\u00E4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split;
      obj.monthsShort = "Jan._Feb._M\u00E4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_");
      const split3 = "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split;
      obj.weekdays = "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_");
      const split4 = "So._Mo._Di._Mi._Do._Fr._Sa.".split;
      obj.weekdaysShort = "So._Mo._Di._Mi._Do._Fr._Sa.".split("_");
      const split5 = "So_Mo_Di_Mi_Do_Fr_Sa".split;
      obj.weekdaysMin = "So_Mo_Di_Mi_Do_Fr_Sa".split("_");
      obj.longDateFormat = { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" };
      obj.calendar = { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" };
      obj = { future: "in %s", past: "vor %s", s: "ein paar Sekunden", ss: "%d Sekunden", m: processRelativeTime2, mm: "%d Minuten", h: processRelativeTime2, hh: "%d Stunden", d: processRelativeTime2, dd: processRelativeTime2, w: processRelativeTime2, ww: "%d Wochen", M: processRelativeTime2, MM: processRelativeTime2, y: processRelativeTime2, yy: processRelativeTime2 };
      obj.relativeTime = obj;
      obj.dayOfMonthOrdinalParse = /\d{1,2}\./;
      obj.week = { dow: 1, doy: 4 };
      _module.defineLocale("de", obj);
    }
  }
}
if (typeof globalThis.define === "function") {
  if (globalThis.define.amd) {
    globalThis.define(["../moment"], function t(defineLocale) {
      function processRelativeTime(arg0, arg1, arg2, arg3) {
        const obj = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: null, w: ["eine Woche", "einer Woche"], M: ["ein Monat", "einem Monat"], MM: null, y: ["ein Jahr", "einem Jahr"], yy: null };
        const items = [`${arg0} Tage`, `${arg0} Tagen`];
        obj.dd = items;
        const items1 = [`${arg0} Monate`, `${arg0} Monaten`];
        obj.MM = items1;
        const items2 = [`${arg0} Jahre`, `${arg0} Jahren`];
        obj.yy = items2;
        return arg1 ? obj[arg2][0] : obj[arg2][1];
      }
      return defineLocale.defineLocale("de", { months: "Januar_Februar_M\u00E4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._M\u00E4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"), monthsParseExact: true, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: true, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", ss: "%d Sekunden", m: processRelativeTime, mm: "%d Minuten", h: processRelativeTime, hh: "%d Stunden", d: processRelativeTime, dd: processRelativeTime, w: processRelativeTime, ww: "%d Wochen", M: processRelativeTime, MM: processRelativeTime, y: processRelativeTime, yy: processRelativeTime }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
    });
  }
}
const moment = this.moment;
function processRelativeTime(arg0, arg1, arg2, arg3) {
  const obj = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: null, w: ["eine Woche", "einer Woche"], M: ["ein Monat", "einem Monat"], MM: null, y: ["ein Jahr", "einem Jahr"], yy: null };
  const items = [`${arg0} Tage`, `${arg0} Tagen`];
  obj.dd = items;
  const items1 = [`${arg0} Monate`, `${arg0} Monaten`];
  obj.MM = items1;
  const items2 = [`${arg0} Jahre`, `${arg0} Jahren`];
  obj.yy = items2;
  return arg1 ? obj[arg2][0] : obj[arg2][1];
}
obj = { months: "Januar_Februar_M\u00E4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._M\u00E4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"), monthsParseExact: true, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: true, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", ss: "%d Sekunden", m: processRelativeTime, mm: "%d Minuten", h: processRelativeTime, hh: "%d Stunden", d: processRelativeTime, dd: processRelativeTime, w: processRelativeTime, ww: "%d Wochen", M: processRelativeTime, MM: processRelativeTime, y: processRelativeTime, yy: processRelativeTime }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } };
moment.defineLocale("de", obj);