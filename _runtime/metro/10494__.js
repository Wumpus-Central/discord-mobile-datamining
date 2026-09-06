// _runtime/metro/10494__.js
import repeatedTimeunitPattern from "../10432_repeatedTimeunitPattern.js";

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
    let num2 = exports.INTEGER_WORD_DICTIONARY[str];
  } else {
    num2 = 1;
    if ("une" !== str) {
      num2 = 1;
      if ("un" !== str) {
        let num3 = 3;
        if (!str.match(/quelques?/)) {
          let num4 = 0.5;
          if (!str.match(/demi-?/)) {
            const _parseFloat = parseFloat;
            num4 = parseFloat(str);
          }
          num3 = num4;
        }
        num2 = num3;
      }
    }
  }
  return num2;
};
export const parseOrdinalNumberPattern = function parseOrdinalNumberPattern(str) {
  str = str.toLowerCase();
  return parseInt(str.replace(/(?:er)$/i, ""));
};
export const parseYear = function parseYear(match) {
  if (obj.test(match)) {
    const _parseInt3 = parseInt;
    return -parseInt(match.replace(/BC/i, ""));
  } else {
    if (!obj2.test(match)) {
      if (!obj3.test(match)) {
        const _parseInt = parseInt;
        const parsed = parseInt(match);
        let sum = parsed;
        if (parsed < 100) {
          let num3 = 2000;
          if (parsed > 50) {
            num3 = 1900;
          }
          sum = parsed + num3;
        }
        return sum;
      }
      obj3 = /C/i;
    }
    const _parseInt2 = parseInt;
    return parseInt(match.replace(/[^\d]+/i, ""));
  }
  obj = /AC/i;
};
export const parseDuration = function parseDuration(arg0) {
  let str = arg0;
  const obj = {};
  let match = regExp.exec(arg0);
  while (match) {
    let str2 = match[1];
    let str3 = str2.toLowerCase();
    if (undefined !== exports.INTEGER_WORD_DICTIONARY[str3]) {
      let num = exports.INTEGER_WORD_DICTIONARY[str3];
    } else {
      num = 1;
      if ("une" !== str3) {
        num = 1;
        if ("un" !== str3) {
          let num2 = 3;
          if (!str3.match(/quelques?/)) {
            let num3 = 0.5;
            if (!str3.match(/demi-?/)) {
              let _parseFloat = parseFloat;
              num3 = parseFloat(str3);
            }
            num2 = num3;
          }
          num = num2;
        }
      }
    }
    let str4 = match[2];
    obj[exports.TIME_UNIT_DICTIONARY[str4.toLowerCase(str4)]] = num;
    let substr = str.substring(match[0].length);
    match = regExp.exec(substr);
    str = substr;
  }
  return obj;
};
export const WEEKDAY_DICTIONARY = {
  dimanche: 0,
  dim: 0,
  lundi: 1,
  lun: 1,
  mardi: 2,
  mar: 2,
  mercredi: 3,
  mer: 3,
  jeudi: 4,
  jeu: 4,
  vendredi: 5,
  ven: 5,
  samedi: 6,
  sam: 6,
};
export const MONTH_DICTIONARY = {
  janvier: 1,
  jan: 1,
  "jan.": 1,
  février: 2,
  fév: 2,
  "fév.": 2,
  fevrier: 2,
  fev: 2,
  "fev.": 2,
  mars: 3,
  mar: 3,
  "mar.": 3,
  avril: 4,
  avr: 4,
  "avr.": 4,
  mai: 5,
  juin: 6,
  jun: 6,
  juillet: 7,
  juil: 7,
  jul: 7,
  "jul.": 7,
  août: 8,
  aout: 8,
  septembre: 9,
  sep: 9,
  "sep.": 9,
  sept: 9,
  "sept.": 9,
  octobre: 10,
  oct: 10,
  "oct.": 10,
  novembre: 11,
  nov: 11,
  "nov.": 11,
  décembre: 12,
  decembre: 12,
  dec: 12,
  "dec.": 12,
};
export const INTEGER_WORD_DICTIONARY = {
  un: 1,
  deux: 2,
  trois: 3,
  quatre: 4,
  cinq: 5,
  six: 6,
  sept: 7,
  huit: 8,
  neuf: 9,
  dix: 10,
  onze: 11,
  douze: 12,
  treize: 13,
};
export const TIME_UNIT_DICTIONARY = {
  sec: "second",
  seconde: "second",
  secondes: "second",
  min: "minute",
  mins: "minute",
  minute: "minute",
  minutes: "minute",
  h: "hour",
  hr: "hour",
  hrs: "hour",
  heure: "hour",
  heures: "hour",
  jour: "day",
  jours: "day",
  semaine: "week",
  semaines: "week",
  mois: "month",
  trimestre: "quarter",
  trimestres: "quarter",
  ans: "year",
  année: "year",
  années: "year",
};
export const NUMBER_PATTERN =
  "(?:" +
  repeatedTimeunitPattern.matchAnyPattern(exports.INTEGER_WORD_DICTIONARY) +
  "|[0-9]+|[0-9]+\\.[0-9]+|une?\\b|quelques?|demi-?)";
export const ORDINAL_NUMBER_PATTERN = "(?:[0-9]{1,2}(?:er)?)";
export const YEAR_PATTERN = "(?:[1-9][0-9]{0,3}\\s*(?:AC|AD|p\\.\\s*C(?:hr?)?\\.\\s*n\\.)|[1-2][0-9]{3}|[5-9][0-9])";
export const TIME_UNITS_PATTERN = repeatedTimeunitPattern.repeatedTimeunitPattern("", combined);
