// _runtime/metro/10576__.js
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
    let num4 = exports.INTEGER_WORD_DICTIONARY[str];
  } else {
    num4 = 1;
    if ("un" !== str) {
      num4 = 1;
      if ("una" !== str) {
        num4 = 1;
        if ("uno" !== str) {
          let num2 = 3;
          if (!str.match(/algunos?/)) {
            num2 = 3;
            if (!str.match(/unos?/)) {
              let num3 = 0.5;
              if (!str.match(/media?/)) {
                const _parseFloat = parseFloat;
                num3 = parseFloat(str);
              }
              num2 = num3;
            }
          }
          num4 = num2;
        }
      }
    }
  }
  return num4;
};
export const parseYear = function parseYear(match) {
  if (match.match(/^[0-9]{1,4}$/)) {
    const _parseInt3 = parseInt;
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
  } else if (match.match(/a\.?\s*c\.?/i)) {
    const _parseInt2 = parseInt;
    return -parseInt(match.replace(/a\.?\s*c\.?/i, ""));
  } else {
    const _parseInt = parseInt;
    return parseInt(match);
  }
};
export const parseDuration = function parseDuration(arg0) {
  let str = arg0;
  const obj = {};
  let match = regExp.exec(arg0);
  while (match) {
    let str2 = match[1];
    let str3 = str2.toLowerCase();
    let tmp2 = exports;
    if (undefined !== exports.INTEGER_WORD_DICTIONARY[str3]) {
      let num = tmp2.INTEGER_WORD_DICTIONARY[str3];
    } else {
      num = 1;
      if ("un" !== str3) {
        num = 1;
        if ("una" !== str3) {
          num = 1;
          if ("uno" !== str3) {
            let num2 = 3;
            if (!str3.match(/algunos?/)) {
              num2 = 3;
              if (!str3.match(/unos?/)) {
                let num3 = 0.5;
                if (!str3.match(/media?/)) {
                  let _parseFloat = parseFloat;
                  num3 = parseFloat(str3);
                }
                num2 = num3;
              }
            }
            num = num2;
          }
        }
      }
    }
    let str4 = match[2];
    obj[tmp2.TIME_UNIT_DICTIONARY[str4.toLowerCase(str4)]] = num;
    let substr = str.substring(match[0].length);
    match = regExp.exec(substr);
    str = substr;
  }
  return obj;
};
export const WEEKDAY_DICTIONARY = {
  domingo: 0,
  dom: 0,
  lunes: 1,
  lun: 1,
  martes: 2,
  mar: 2,
  miércoles: 3,
  miercoles: 3,
  mié: 3,
  mie: 3,
  jueves: 4,
  jue: 4,
  viernes: 5,
  vie: 5,
  sábado: 6,
  sabado: 6,
  sáb: 6,
  sab: 6,
};
export const MONTH_DICTIONARY = {
  enero: 1,
  ene: 1,
  "ene.": 1,
  febrero: 2,
  feb: 2,
  "feb.": 2,
  marzo: 3,
  mar: 3,
  "mar.": 3,
  abril: 4,
  abr: 4,
  "abr.": 4,
  mayo: 5,
  may: 5,
  "may.": 5,
  junio: 6,
  jun: 6,
  "jun.": 6,
  julio: 7,
  jul: 7,
  "jul.": 7,
  agosto: 8,
  ago: 8,
  "ago.": 8,
  septiembre: 9,
  setiembre: 9,
  sep: 9,
  "sep.": 9,
  octubre: 10,
  oct: 10,
  "oct.": 10,
  noviembre: 11,
  nov: 11,
  "nov.": 11,
  diciembre: 12,
  dic: 12,
  "dic.": 12,
};
export const INTEGER_WORD_DICTIONARY = {
  uno: 1,
  dos: 2,
  tres: 3,
  cuatro: 4,
  cinco: 5,
  seis: 6,
  siete: 7,
  ocho: 8,
  nueve: 9,
  diez: 10,
  once: 11,
  doce: 12,
  trece: 13,
};
export const TIME_UNIT_DICTIONARY = {
  sec: "second",
  segundo: "second",
  segundos: "second",
  min: "minute",
  mins: "minute",
  minuto: "minute",
  minutos: "minute",
  h: "hour",
  hr: "hour",
  hrs: "hour",
  hora: "hour",
  horas: "hour",
  día: "day",
  días: "day",
  semana: "week",
  semanas: "week",
  mes: "month",
  meses: "month",
  cuarto: "quarter",
  cuartos: "quarter",
  año: "year",
  años: "year",
};
export const NUMBER_PATTERN =
  "(?:" +
  repeatedTimeunitPattern.matchAnyPattern(exports.INTEGER_WORD_DICTIONARY) +
  "|[0-9]+|[0-9]+\\.[0-9]+|un?|uno?|una?|algunos?|unos?|demi-?)";
export const YEAR_PATTERN = "[0-9]{1,4}(?![^\\s]\\d)(?:\\s*[a|d]\\.?\\s*c\\.?|\\s*a\\.?\\s*d\\.?)?";
export const TIME_UNITS_PATTERN = repeatedTimeunitPattern.repeatedTimeunitPattern("", combined);
