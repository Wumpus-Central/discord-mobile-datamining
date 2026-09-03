// _runtime/10544_WEEKDAY_DICTIONARY.js
import repeatedTimeunitPattern from "10450_repeatedTimeunitPattern.js";
import findMostLikelyADYear from "10451_findMostLikelyADYear.js";

const combined =
  "(" +
  exports.NUMBER_PATTERN +
  ")\\s{0,5}(" +
  repeatedTimeunitPattern.matchAnyPattern(exports.TIME_UNIT_DICTIONARY) +
  ")\\s{0,5}";
const regExp = new RegExp(combined, "i");

export const parseNumberPattern = function parseNumberPattern(str) {
  str = str.toLowerCase();
  if (undefined !== exports.INTEGER_WORD_DICTIONARY[str]) {
    let num = exports.INTEGER_WORD_DICTIONARY[str];
  } else {
    num = 2;
    if ("paar" !== str) {
      let num3 = 0.5;
      if ("half" !== str) {
        num3 = 0.5;
        if (!str.match(/halve?/)) {
          const _parseFloat = parseFloat;
          num3 = parseFloat(str.replace(",", "."));
        }
      }
      num = num3;
    }
  }
  return num;
};
export const parseOrdinalNumberPattern = function parseOrdinalNumberPattern(str) {
  str = str.toLowerCase();
  if (undefined !== exports.ORDINAL_WORD_DICTIONARY[str]) {
    return exports.ORDINAL_WORD_DICTIONARY[str];
  } else {
    const _parseInt = parseInt;
    return parseInt(str.replace(/(?:ste|de)$/i, ""));
  }
};
export const parseYear = function parseYear(joined) {
  if (obj.test(joined)) {
    const _parseInt3 = parseInt;
    return -parseInt(joined.replace(/voor Christus/i, ""));
  } else {
    if (obj2.test(joined)) {
      const _parseInt2 = parseInt;
      return parseInt(joined.replace(/na Christus/i, ""));
    } else {
      const _parseInt = parseInt;
      const parsed = parseInt(joined);
      return findMostLikelyADYear.findMostLikelyADYear(parsed);
    }
    obj2 = /na Christus/i;
  }
  obj = /voor Christus/i;
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
      let num = tmp2.INTEGER_WORD_DICTIONARY[str3];
    } else {
      num = 2;
      if ("paar" !== str3) {
        let num2 = 0.5;
        if ("half" !== str3) {
          num2 = 0.5;
          if (!str3.match(/halve?/)) {
            let _parseFloat = parseFloat;
            num2 = parseFloat(str3.replace(",", "."));
          }
        }
        num = num2;
      }
    }
    let str4 = match[2];
    obj[tmp2.TIME_UNIT_DICTIONARY[str4.toLowerCase(str4)]] = num;
    let substr = str.substring(match[0].length);
    let tmp6 = regExp;
    match = regExp.exec(substr);
    str = substr;
  }
  return obj;
};
export const WEEKDAY_DICTIONARY = {
  zondag: 0,
  zon: 0,
  "zon.": 0,
  zo: 0,
  "zo.": 0,
  maandag: 1,
  ma: 1,
  "ma.": 1,
  dinsdag: 2,
  din: 2,
  "din.": 2,
  di: 2,
  "di.": 2,
  woensdag: 3,
  woe: 3,
  "woe.": 3,
  wo: 3,
  "wo.": 3,
  donderdag: 4,
  dond: 4,
  "dond.": 4,
  do: 4,
  "do.": 4,
  vrijdag: 5,
  vrij: 5,
  "vrij.": 5,
  vr: 5,
  "vr.": 5,
  zaterdag: 6,
  zat: 6,
  "zat.": 6,
  za: 6,
  "za.": 6,
};
export const MONTH_DICTIONARY = {
  januari: 1,
  jan: 1,
  "jan.": 1,
  februari: 2,
  feb: 2,
  "feb.": 2,
  maart: 3,
  mar: 3,
  "mar.": 3,
  mrt: 3,
  "mrt.": 3,
  april: 4,
  apr: 4,
  "apr.": 4,
  mei: 5,
  juni: 6,
  jun: 6,
  "jun.": 6,
  juli: 7,
  jul: 7,
  "jul.": 7,
  augustus: 8,
  aug: 8,
  "aug.": 8,
  september: 9,
  sep: 9,
  "sep.": 9,
  sept: 9,
  "sept.": 9,
  oktober: 10,
  okt: 10,
  "okt.": 10,
  november: 11,
  nov: 11,
  "nov.": 11,
  december: 12,
  dec: 12,
  "dec.": 12,
};
export const INTEGER_WORD_DICTIONARY = {
  een: 1,
  twee: 2,
  drie: 3,
  vier: 4,
  vijf: 5,
  zes: 6,
  zeven: 7,
  acht: 8,
  negen: 9,
  tien: 10,
  elf: 11,
  twaalf: 12,
};
export const ORDINAL_WORD_DICTIONARY = {
  eerste: 1,
  tweede: 2,
  derde: 3,
  vierde: 4,
  vijfde: 5,
  zesde: 6,
  zevende: 7,
  achtste: 8,
  negende: 9,
  tiende: 10,
  elfde: 11,
  twaalfde: 12,
  dertiende: 13,
  veertiende: 14,
  vijftiende: 15,
  zestiende: 16,
  zeventiende: 17,
  achttiende: 18,
  negentiende: 19,
  twintigste: 20,
  eenentwintigste: 21,
  tweeëntwintigste: 22,
  drieentwintigste: 23,
  vierentwintigste: 24,
  vijfentwintigste: 25,
  zesentwintigste: 26,
  zevenentwintigste: 27,
  achtentwintig: 28,
  negenentwintig: 29,
  dertigste: 30,
  eenendertigste: 31,
};
export const TIME_UNIT_DICTIONARY = {
  sec: "second",
  second: "second",
  seconden: "second",
  min: "minute",
  mins: "minute",
  minute: "minute",
  minuut: "minute",
  minuten: "minute",
  minuutje: "minute",
  h: "hour",
  hr: "hour",
  hrs: "hour",
  uur: "hour",
  u: "hour",
  uren: "hour",
  dag: "day",
  dagen: "day",
  week: "week",
  weken: "week",
  maand: "month",
  maanden: "month",
  jaar: "year",
  jr: "year",
  jaren: "year",
};
export const NUMBER_PATTERN =
  "(?:" +
  repeatedTimeunitPattern.matchAnyPattern(exports.INTEGER_WORD_DICTIONARY) +
  "|[0-9]+|[0-9]+[\\.,][0-9]+|halve?|half|paar)";
export const ORDINAL_NUMBER_PATTERN =
  "(?:" + repeatedTimeunitPattern.matchAnyPattern(exports.ORDINAL_WORD_DICTIONARY) + "|[0-9]{1,2}(?:ste|de)?)";
export const YEAR_PATTERN = "(?:[1-9][0-9]{0,3}\\s*(?:voor Christus|na Christus)|[1-2][0-9]{3}|[5-9][0-9])";
export const TIME_UNITS_PATTERN = repeatedTimeunitPattern.repeatedTimeunitPattern("(?:(?:binnen|in)\\s*)?", combined);
