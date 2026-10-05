// _runtime/metro/10349__.js
import repeatedTimeunitPattern from "../10161_repeatedTimeunitPattern.js";
import findMostLikelyADYear from "../10162_findMostLikelyADYear.js";

const combined =
  "(" +
  exports.NUMBER_PATTERN +
  ")\\s{0,5}(" +
  repeatedTimeunitPattern.matchAnyPattern(exports.TIME_UNIT_DICTIONARY) +
  ")\\s{0,5}";
const regExp = new RegExp(combined, "i");
const combined1 =
  "(" +
  exports.NUMBER_PATTERN +
  ")\\s{0,5}(" +
  repeatedTimeunitPattern.matchAnyPattern(exports.TIME_UNIT_NO_ABBR_DICTIONARY) +
  ")\\s{0,5}";

export const parseDuration = function parseDuration(arg0) {
  let str = arg0;
  const obj = {};
  let match = regExp.exec(arg0);
  while (match) {
    let parsed;
    let str2 = match[1];
    let formatted = str2.toLowerCase();
    if (undefined !== exports.INTEGER_WORD_DICTIONARY[formatted]) {
      parsed = exports.INTEGER_WORD_DICTIONARY[formatted];
    } else {
      let _parseInt = parseInt;
      parsed = parseInt(formatted);
    }
    let str3 = match[2];
    obj[exports.TIME_UNIT_DICTIONARY[str3.toLowerCase(str3)]] = parsed;
    let substr = str.substring(match[0].length);
    match = regExp.exec(substr);
    str = substr;
  }
  return obj;
};
export const parseNumberPattern = function parseNumberPattern(match) {
  let parsed;
  const formatted = match.toLowerCase();
  if (undefined !== exports.INTEGER_WORD_DICTIONARY[formatted]) {
    parsed = exports.INTEGER_WORD_DICTIONARY[formatted];
  } else {
    const _parseInt = parseInt;
    parsed = parseInt(formatted);
  }
  return parsed;
};
export const parseOrdinalNumberPattern = function parseOrdinalNumberPattern(match) {
  const formatted = match.toLowerCase();
  if (undefined !== exports.ORDINAL_NUMBER_DICTIONARY[formatted]) {
    return exports.ORDINAL_NUMBER_DICTIONARY[formatted];
  } else {
    const _parseInt = parseInt;
    return parseInt(formatted);
  }
};
export const parseYear = function parseYear(match) {
  const obj = /\d+/;
  if (obj.test(match)) {
    const _parseInt2 = parseInt;
    const parsed = parseInt(match);
    let findMostLikelyADYearResult = parsed;
    if (parsed < 100) {
      findMostLikelyADYearResult = findMostLikelyADYear.findMostLikelyADYear(parsed);
    }
    return findMostLikelyADYearResult;
  } else {
    const formatted = match.toLowerCase();
    if (undefined !== exports.INTEGER_WORD_DICTIONARY[formatted]) {
      return exports.INTEGER_WORD_DICTIONARY[formatted];
    } else {
      const _parseInt = parseInt;
      return parseInt(match);
    }
  }
};
export const WEEKDAY_DICTIONARY = {
  "s\u00f6ndag": 0,
  "s\u00f6n": 0,
  so: 0,
  "m\u00e5ndag": 1,
  "m\u00e5n": 1,
  "m\u00e5": 1,
  tisdag: 2,
  tis: 2,
  ti: 2,
  onsdag: 3,
  ons: 3,
  on: 3,
  torsdag: 4,
  tors: 4,
  to: 4,
  fredag: 5,
  fre: 5,
  fr: 5,
  "l\u00f6rdag": 6,
  "l\u00f6r": 6,
  "l\u00f6": 6,
};
export const MONTH_DICTIONARY = {
  januari: 1,
  jan: 1,
  "jan.": 1,
  februari: 2,
  feb: 2,
  "feb.": 2,
  mars: 3,
  mar: 3,
  "mar.": 3,
  april: 4,
  apr: 4,
  "apr.": 4,
  maj: 5,
  juni: 6,
  jun: 6,
  "jun.": 6,
  juli: 7,
  jul: 7,
  "jul.": 7,
  augusti: 8,
  aug: 8,
  "aug.": 8,
  september: 9,
  sep: 9,
  "sep.": 9,
  sept: 9,
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
export const ORDINAL_NUMBER_DICTIONARY = {
  "f\u00f6rsta": 1,
  andra: 2,
  tredje: 3,
  "fj\u00e4rde": 4,
  femte: 5,
  "sj\u00e4tte": 6,
  sjunde: 7,
  "\u00e5ttonde": 8,
  nionde: 9,
  tionde: 10,
  elfte: 11,
  tolfte: 12,
  trettonde: 13,
  fjortonde: 14,
  femtonde: 15,
  sextonde: 16,
  sjuttonde: 17,
  artonde: 18,
  nittonde: 19,
  tjugonde: 20,
  "tjugof\u00f6rsta": 21,
  tjugoandra: 22,
  tjugotredje: 23,
  "tjugofj\u00e4rde": 24,
  tjugofemte: 25,
  "tjugosj\u00e4tte": 26,
  tjugosjunde: 27,
  "tjugo\u00e5ttonde": 28,
  tjugonionde: 29,
  trettionde: 30,
  "trettiof\u00f6rsta": 31,
};
export const INTEGER_WORD_DICTIONARY = {
  en: 1,
  ett: 1,
  "tv\u00e5": 2,
  tre: 3,
  fyra: 4,
  fem: 5,
  sex: 6,
  sju: 7,
  "\u00e5tta": 8,
  nio: 9,
  tio: 10,
  elva: 11,
  tolv: 12,
  tretton: 13,
  fjorton: 14,
  femton: 15,
  sexton: 16,
  sjutton: 17,
  arton: 18,
  nitton: 19,
  tjugo: 20,
  "tretti\u043e": 30,
  fyrtio: 40,
  femtio: 50,
  sextio: 60,
  sjuttio: 70,
  "\u00e5ttio": 80,
  nittio: 90,
  hundra: 100,
  tusen: 1000,
};
export const TIME_UNIT_DICTIONARY = {
  sek: "second",
  sekund: "second",
  sekunder: "second",
  min: "minute",
  minut: "minute",
  minuter: "minute",
  tim: "hour",
  timme: "hour",
  timmar: "hour",
  dag: "day",
  dagar: "day",
  vecka: "week",
  veckor: "week",
  "m\u00e5n": "month",
  "m\u00e5nad": "month",
  "m\u00e5nader": "month",
  "\u00e5r": "year",
  "kvart\u0430l": "quarter",
  kvartal: "quarter",
};
export const TIME_UNIT_NO_ABBR_DICTIONARY = {
  sekund: "second",
  sekunder: "second",
  minut: "minute",
  minuter: "minute",
  timme: "hour",
  timmar: "hour",
  dag: "day",
  dagar: "day",
  vecka: "week",
  veckor: "week",
  "m\u00e5nad": "month",
  "m\u00e5nader": "month",
  "\u00e5r": "year",
  kvartal: "quarter",
};
export const NUMBER_PATTERN =
  "(?:" + repeatedTimeunitPattern.matchAnyPattern(exports.INTEGER_WORD_DICTIONARY) + "|\\d+)";
export const ORDINAL_NUMBER_PATTERN =
  "(?:" + repeatedTimeunitPattern.matchAnyPattern(exports.ORDINAL_NUMBER_DICTIONARY) + "|\\d{1,2}(?:e|:e))";
export const TIME_UNIT_PATTERN = "(?:" + repeatedTimeunitPattern.matchAnyPattern(exports.TIME_UNIT_DICTIONARY) + ")";
export const TIME_UNITS_PATTERN = repeatedTimeunitPattern.repeatedTimeunitPattern("", combined);
export const TIME_UNITS_NO_ABBR_PATTERN = repeatedTimeunitPattern.repeatedTimeunitPattern("", combined1);
