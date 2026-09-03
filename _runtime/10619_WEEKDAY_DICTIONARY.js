// === Module 10619: WEEKDAY_DICTIONARY ===

// Module 10619 (WEEKDAY_DICTIONARY)
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 10450 */;
import findMostLikelyADYear from "findMostLikelyADYear" /* 10451 */;

const combined = "(" + exports.NUMBER_PATTERN + ")\\s{0,3}(" + repeatedTimeunitPattern.matchAnyPattern(exports.TIME_UNIT_DICTIONARY) + ")";
const regExp = new RegExp(combined, "i");

export const parseNumberPattern = function parseNumberPattern(str) {
  str = str.toLowerCase();
  if (undefined !== exports.INTEGER_WORD_DICTIONARY[str]) {
    let num5 = exports.INTEGER_WORD_DICTIONARY[str];
  } else {
    num5 = 1;
    if ("un" !== str) {
      num5 = 1;
      if ("una" !== str) {
        let num4 = 3;
        if (!str.match(/alcuni/)) {
          let num = 0.5;
          if (!str.match(/metá/)) {
            let num2 = 2;
            if (!str.match(/paio/)) {
              let num3 = 7;
              if (!str.match(/molti/)) {
                const _parseFloat = parseFloat;
                num3 = parseFloat(str);
              }
              num2 = num3;
            }
            num = num2;
          }
          num4 = num;
        }
        num5 = num4;
      }
    }
  }
  return num5;
};
export const parseOrdinalNumberPattern = function parseOrdinalNumberPattern(str) {
  str = str.toLowerCase();
  if (undefined !== exports.ORDINAL_WORD_DICTIONARY[str]) {
    return exports.ORDINAL_WORD_DICTIONARY[str];
  } else {
    const _parseInt = parseInt;
    return parseInt(str.replace(/(?:imo|ndo|rzo|rto|nto|sto|tavo|nono|cimo|timo|esimo)$/i, ""));
  }
};
export const parseYear = function parseYear(joined) {
  if (obj.test(joined)) {
    const _parseInt4 = parseInt;
    return parseInt(joined.replace(/BE/i, "")) - 543;
  } else {
    if (obj2.test(joined)) {
      const _parseInt3 = parseInt;
      return -parseInt(joined.replace(/BCE?/i, ""));
    } else {
      if (obj3.test(joined)) {
        const _parseInt2 = parseInt;
        return parseInt(joined.replace(/(AD|CE)/i, ""));
      } else {
        const _parseInt = parseInt;
        const parsed = parseInt(joined);
        return findMostLikelyADYear.findMostLikelyADYear(parsed);
      }
      obj3 = /(AD|CE)/i;
    }
    obj2 = /BCE?/i;
  }
  obj = /BE/i;
};
export const parseDuration = function parseDuration(arg0) {
  let str = arg0;
  const obj = {};
  let match = regExp.exec(arg0);
  while (match) {
    let str2 = match[1];
    let str3 = str2.toLowerCase();
    let tmp2 = exports;
    let tmp3 = match;
    let tmp4 = str;
    if (undefined !== exports.INTEGER_WORD_DICTIONARY[str3]) {
      let num5 = tmp2.INTEGER_WORD_DICTIONARY[str3];
    } else {
      num5 = 1;
      if ("un" !== str3) {
        num5 = 1;
        if ("una" !== str3) {
          let num4 = 3;
          if (!str3.match(/alcuni/)) {
            let num = 0.5;
            if (!str3.match(/metá/)) {
              let num2 = 2;
              if (!str3.match(/paio/)) {
                let num3 = 7;
                if (!str3.match(/molti/)) {
                  let _parseFloat = parseFloat;
                  num3 = parseFloat(str3);
                }
                num2 = num3;
              }
              num = num2;
            }
            num4 = num;
          }
          num5 = num4;
        }
      }
    }
    let str4 = match[2];
    obj[tmp2.TIME_UNIT_DICTIONARY[str4.toLowerCase(str4)]] = num5;
    let str5 = str.substring(match[0].length);
    let trimmed = str5.trim();
    let tmp6 = regExp;
    match = regExp.exec(trimmed);
    str = trimmed;
  }
  return obj;
};
export const WEEKDAY_DICTIONARY = { domenica: 0, dom: 0, "lunedì": 1, lun: 1, "martedì": 2, mar: 2, "mercoledì": 3, merc: 3, "giovedì": 4, giov: 4, "venerdì": 5, ven: 5, sabato: 6, sab: 6 };
export const FULL_MONTH_NAME_DICTIONARY = {};
export const MONTH_DICTIONARY = Object.assign(Object.assign({}, exports.FULL_MONTH_NAME_DICTIONARY), { gennaio: 1, gen: 1, "gen.": 1, febbraio: 2, feb: 2, "feb.": 2, febraio: 2, febb: 2, "febb.": 2, marzo: 3, mar: 3, "mar.": 3, aprile: 4, apr: 4, "apr.": 4, maggio: 5, mag: 5, giugno: 6, giu: 6, luglio: 7, lug: 7, lugl: 7, "lug.": 7, agosto: 8, ago: 8, settembre: 9, set: 9, "set.": 9, sett: 9, "sett.": 9, ottobre: 10, ott: 10, "ott.": 10, novembre: 11, nov: 11, "nov.": 11, dicembre: 12, dic: 12, dice: 12, "dic.": 12 });
export const INTEGER_WORD_DICTIONARY = { uno: 1, due: 2, tre: 3, quattro: 4, cinque: 5, sei: 6, sette: 7, otto: 8, nove: 9, dieci: 10, undici: 11, dodici: 12 };
export const ORDINAL_WORD_DICTIONARY = { primo: 1, secondo: 2, terzo: 3, quarto: 4, quinto: 5, sesto: 6, settimo: 7, ottavo: 8, nono: 9, decimo: 10, undicesimo: 11, dodicesimo: 12, tredicesimo: 13, quattordicesimo: 14, quindicesimo: 15, sedicesimo: 16, diciassettesimo: 17, diciottesimo: 18, diciannovesimo: 19, ventesimo: 20, ventunesimo: 21, ventiduesimo: 22, ventitreesimo: 23, ventiquattresimo: 24, venticinquesimo: 25, ventiseiesimo: 26, ventisettesimo: 27, ventottesimo: 28, ventinovesimo: 29, trentesimo: 30, trentunesimo: 31 };
export const TIME_UNIT_DICTIONARY = { sec: "second", secondo: "second", secondi: "second", min: "minute", mins: "minute", minuti: "minute", h: "hour", hr: "hour", o: "hour", ora: "hour", ore: "hour", giorno: "day", giorni: "day", settimana: "week", settimane: "week", mese: "month", trimestre: "quarter", trimestri: "quarter", anni: "year", anno: "year" };
export const NUMBER_PATTERN = "(?:" + repeatedTimeunitPattern.matchAnyPattern(exports.INTEGER_WORD_DICTIONARY) + "|[0-9]+|[0-9]+\\.[0-9]+|half(?:\\s{0,2}un?)?|un?\\b(?:\\s{0,2}qualcuno)?|qualcuno|molti|a?\\s{0,2}alcuni\\s{0,2}(?:of)?)";
export const ORDINAL_NUMBER_PATTERN = "(?:" + repeatedTimeunitPattern.matchAnyPattern(exports.ORDINAL_WORD_DICTIONARY) + "|[0-9]{1,2}(?:mo|ndo|rzo|simo|esimo)?)";
export const YEAR_PATTERN = "(?:[1-9][0-9]{0,3}\\s{0,2}(?:BE|AD|BC|BCE|CE)|[1-2][0-9]{3}|[5-9][0-9])";
export const TIME_UNITS_PATTERN = repeatedTimeunitPattern.repeatedTimeunitPattern("(?:(?:about|around)\\s{0,3})?", combined);