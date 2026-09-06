// === Module 10478: parseNumberPattern ===

// Module 10478 (parseNumberPattern)
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 10432 */;
import findMostLikelyADYear from "findMostLikelyADYear" /* 10433 */;

function parseNumberPattern(str) {
  str = str.toLowerCase();
  if (undefined !== exports.INTEGER_WORD_DICTIONARY[str]) {
    let num6 = exports.INTEGER_WORD_DICTIONARY[str];
  } else {
    num6 = 1;
    if ("ein" !== str) {
      num6 = 1;
      if ("einer" !== str) {
        num6 = 1;
        if ("einem" !== str) {
          num6 = 1;
          if ("einen" !== str) {
            num6 = 1;
            if ("eine" !== str) {
              let num5 = 2;
              if (!str.match(/wenigen/)) {
                let num2 = 0.5;
                if (!str.match(/halb/)) {
                  num2 = 0.5;
                  if (!str.match(/halben/)) {
                    let num3 = 3;
                    if (!str.match(/einigen/)) {
                      let num4 = 7;
                      if (!str.match(/mehreren/)) {
                        const _parseFloat = parseFloat;
                        num4 = parseFloat(str);
                      }
                      num3 = num4;
                    }
                    num2 = num3;
                  }
                }
                num5 = num2;
              }
              num6 = num5;
            }
          }
        }
      }
    }
  }
  return num6;
}
const combined = "(" + exports.NUMBER_PATTERN + ")\\s{0,5}(" + repeatedTimeunitPattern.matchAnyPattern(exports.TIME_UNIT_DICTIONARY) + ")\\s{0,5}";
const regExp = new RegExp(combined, "i");

export { parseNumberPattern };
export const parseYear = function parseYear(joined) {
  if (obj.test(joined)) {
    const _parseInt3 = parseInt;
    return -parseInt(joined.replace(/[^0-9]+/gi, ""));
  } else {
    if (obj2.test(joined)) {
      const _parseInt2 = parseInt;
      return parseInt(joined.replace(/[^0-9]+/gi, ""));
    } else {
      const _parseInt = parseInt;
      if (obj3.test(joined)) {
        return _parseInt(joined.replace(/[^0-9]+/gi, ""));
      } else {
        return findMostLikelyADYear.findMostLikelyADYear(_parseInt(joined));
      }
      obj3 = /z/i;
    }
    obj2 = /n/i;
  }
  obj = /v/i;
};
export const parseDuration = function parseDuration(arg0) {
  let str = arg0;
  const obj = {};
  let match = regExp.exec(arg0);
  while (match) {
    let tmp2 = parseNumberPattern;
    let tmp4 = exports;
    let str2 = match[2];
    let tmp3 = parseNumberPattern(match[1]);
    obj[exports.TIME_UNIT_DICTIONARY[str2.toLowerCase(str2)]] = tmp3;
    let substr = str.substring(match[0].length);
    let tmp6 = regExp;
    match = regExp.exec(substr);
    str = substr;
  }
  return obj;
};
export const WEEKDAY_DICTIONARY = { sonntag: 0, so: 0, montag: 1, mo: 1, dienstag: 2, di: 2, mittwoch: 3, mi: 3, donnerstag: 4, do: 4, freitag: 5, fr: 5, samstag: 6, sa: 6 };
export const MONTH_DICTIONARY = { januar: 1, "jänner": 1, janner: 1, jan: 1, "jan.": 1, februar: 2, feber: 2, feb: 2, "feb.": 2, "märz": 3, maerz: 3, "mär": 3, "mär.": 3, mrz: 3, "mrz.": 3, april: 4, apr: 4, "apr.": 4, mai: 5, juni: 6, jun: 6, "jun.": 6, juli: 7, jul: 7, "jul.": 7, august: 8, aug: 8, "aug.": 8, september: 9, sep: 9, "sep.": 9, sept: 9, "sept.": 9, oktober: 10, okt: 10, "okt.": 10, november: 11, nov: 11, "nov.": 11, dezember: 12, dez: 12, "dez.": 12 };
export const INTEGER_WORD_DICTIONARY = { eins: 1, eine: 1, einem: 1, einen: 1, einer: 1, zwei: 2, drei: 3, vier: 4, "fünf": 5, fuenf: 5, sechs: 6, sieben: 7, acht: 8, neun: 9, zehn: 10, elf: 11, "zwölf": 12, zwoelf: 12 };
export const TIME_UNIT_DICTIONARY = { sek: "second", sekunde: "second", sekunden: "second", min: "minute", minute: "minute", minuten: "minute", h: "hour", std: "hour", stunde: "hour", stunden: "hour", tag: "day", tage: "day", tagen: "day", woche: "week", wochen: "week", monat: "month", monate: "month", monaten: "month", monats: "month", quartal: "quarter", quartals: "quarter", quartale: "quarter", quartalen: "quarter", a: "year", j: "year", jr: "year", jahr: "year", jahre: "year", jahren: "year", jahres: "year" };
export const NUMBER_PATTERN = "(?:" + repeatedTimeunitPattern.matchAnyPattern(exports.INTEGER_WORD_DICTIONARY) + "|[0-9]+|[0-9]+\\.[0-9]+|halb?|halbe?|einigen?|wenigen?|mehreren?)";
export const YEAR_PATTERN = "(?:[0-9]{1,4}(?:\\s*[vn]\\.?\\s*(?:C(?:hr)?|(?:u\\.?|d\\.?(?:\\s*g\\.?)?)?\\s*Z)\\.?|\\s*(?:u\\.?|d\\.?(?:\\s*g\\.)?)\\s*Z\\.?)?)";
export const TIME_UNITS_PATTERN = repeatedTimeunitPattern.repeatedTimeunitPattern("", combined);