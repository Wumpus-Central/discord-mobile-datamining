// === Module 4048: processRelativeTime ===

// Module 4048 (processRelativeTime)
import hooks from "hooks" /* 4045 */;

if (typeof exports === "object") {
  if (undefined !== module) {
    if (typeof require === "function") {
      const _module = hooks;
      const processRelativeTime2 = function processRelativeTime(arg0, arg1, arg2, arg3) {
        const items = [`${arg0} Tage`, `${arg0} Tagen`];
        const items1 = [`${arg0} Monate`, `${arg0} Monaten`];
        const items2 = [`${arg0} Jahre`, `${arg0} Jahren`];
        const tmp = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: items, w: ["eine Woche", "einer Woche"], M: ["ein Monat", "einem Monat"], MM: items1, y: ["ein Jahr", "einem Jahr"], yy: items2 }[arg2];
        return arg1 ? tmp[0] : tmp[1];
      };
      let obj = { months: null, monthsShort: null, monthsParseExact: true, weekdays: null, weekdaysShort: null, weekdaysMin: null, weekdaysParseExact: true, longDateFormat: null, calendar: null, relativeTime: null, dayOfMonthOrdinalParse: null, ordinal: "%d.", week: null };
      const split = "Januar_Februar_M\u00E4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split;
      obj[0] = "Januar_Februar_M\u00E4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_");
      const split2 = "Jan._Feb._M\u00E4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split;
      obj[1] = "Jan._Feb._M\u00E4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_");
      const split3 = "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split;
      obj[3] = "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_");
      const split4 = "So._Mo._Di._Mi._Do._Fr._Sa.".split;
      obj[4] = "So._Mo._Di._Mi._Do._Fr._Sa.".split("_");
      const split5 = "So_Mo_Di_Mi_Do_Fr_Sa".split;
      obj[5] = "So_Mo_Di_Mi_Do_Fr_Sa".split("_");
      obj[7] = { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" };
      obj[8] = { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" };
      obj = { future: "in %s", past: "vor %s", s: "ein paar Sekunden", ss: "%d Sekunden", m: null, mm: "%d Minuten", h: null, hh: "%d Stunden", d: null, dd: null, w: null, ww: "%d Wochen", M: null, MM: null, y: null, yy: null };
      obj[4] = processRelativeTime2;
      obj[6] = processRelativeTime2;
      obj[8] = processRelativeTime2;
      obj[9] = processRelativeTime2;
      obj[10] = processRelativeTime2;
      obj[12] = processRelativeTime2;
      obj[13] = processRelativeTime2;
      obj[14] = processRelativeTime2;
      obj[15] = processRelativeTime2;
      obj[9] = obj;
      obj[10] = /\d{1,2}\./;
      obj[12] = { dow: 1, doy: 4 };
      _module.defineLocale("de", obj);
    }
  }
}
if (typeof globalThis.define === "function") {
  if (globalThis.define.amd) {
    globalThis.define(["../moment"], function t(defineLocale) {
      function processRelativeTime(arg0, arg1, arg2, arg3) {
        const items = [`${arg0} Tage`, `${arg0} Tagen`];
        const items1 = [`${arg0} Monate`, `${arg0} Monaten`];
        const items2 = [`${arg0} Jahre`, `${arg0} Jahren`];
        const tmp = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: items, w: ["eine Woche", "einer Woche"], M: ["ein Monat", "einem Monat"], MM: items1, y: ["ein Jahr", "einem Jahr"], yy: items2 }[arg2];
        return arg1 ? tmp[0] : tmp[1];
      }
      return defineLocale.defineLocale("de", { months: "Januar_Februar_M\u00E4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._M\u00E4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"), monthsParseExact: true, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: true, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", ss: "%d Sekunden", m: processRelativeTime, mm: "%d Minuten", h: processRelativeTime, hh: "%d Stunden", d: processRelativeTime, dd: processRelativeTime, w: processRelativeTime, ww: "%d Wochen", M: processRelativeTime, MM: processRelativeTime, y: processRelativeTime, yy: processRelativeTime }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
    });
  }
}
const moment = this.moment;
function processRelativeTime(arg0, arg1, arg2, arg3) {
  const items = [`${arg0} Tage`, `${arg0} Tagen`];
  const items1 = [`${arg0} Monate`, `${arg0} Monaten`];
  const items2 = [`${arg0} Jahre`, `${arg0} Jahren`];
  const tmp = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: items, w: ["eine Woche", "einer Woche"], M: ["ein Monat", "einem Monat"], MM: items1, y: ["ein Jahr", "einem Jahr"], yy: items2 }[arg2];
  return arg1 ? tmp[0] : tmp[1];
}
obj = { months: "Januar_Februar_M\u00E4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._M\u00E4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"), monthsParseExact: true, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: true, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", ss: "%d Sekunden", m: processRelativeTime, mm: "%d Minuten", h: processRelativeTime, hh: "%d Stunden", d: processRelativeTime, dd: processRelativeTime, w: processRelativeTime, ww: "%d Wochen", M: processRelativeTime, MM: processRelativeTime, y: processRelativeTime, yy: processRelativeTime }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } };
moment.defineLocale("de", obj);