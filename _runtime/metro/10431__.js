// === Module 10431: ? ===

// Module 10431
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 10432 */;
import findMostLikelyADYear from "findMostLikelyADYear" /* 10433 */;

const combined = "(" + exports.NUMBER_PATTERN + ")\\s{0,3}(" + repeatedTimeunitPattern.matchAnyPattern(exports.TIME_UNIT_DICTIONARY) + ")";
const regExp = new RegExp(combined, "i");
const combined1 = "(" + exports.NUMBER_PATTERN + ")\\s{0,3}(" + repeatedTimeunitPattern.matchAnyPattern(exports.TIME_UNIT_DICTIONARY_NO_ABBR) + ")";

export const parseNumberPattern = function parseNumberPattern(str) {
  str = str.toLowerCase();
  if (undefined !== exports.INTEGER_WORD_DICTIONARY[str]) {
    let num5 = exports.INTEGER_WORD_DICTIONARY[str];
  } else {
    num5 = 1;
    if ("a" !== str) {
      num5 = 1;
      if ("an" !== str) {
        num5 = 1;
        if ("the" != str) {
          let num = 3;
          if (!str.match(/few/)) {
            let num2 = 0.5;
            if (!str.match(/half/)) {
              let num3 = 2;
              if (!str.match(/couple/)) {
                let num4 = 7;
                if (!str.match(/several/)) {
                  const _parseFloat = parseFloat;
                  num4 = parseFloat(str);
                }
                num3 = num4;
              }
              num2 = num3;
            }
            num = num2;
          }
          num5 = num;
        }
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
    return parseInt(str.replace(/(?:st|nd|rd|th)$/i, ""));
  }
};
export const parseYear = function parseYear(match) {
  if (obj.test(match)) {
    const _parseInt4 = parseInt;
    return parseInt(match.replace(/BE/i, "")) - 543;
  } else {
    if (obj2.test(match)) {
      const _parseInt3 = parseInt;
      return -parseInt(match.replace(/BCE?/i, ""));
    } else {
      if (obj3.test(match)) {
        const _parseInt2 = parseInt;
        return parseInt(match.replace(/(AD|CE)/i, ""));
      } else {
        const _parseInt = parseInt;
        const parsed = parseInt(match);
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
  if (match) {
    while (str2.match(/^[a-zA-Z]+$/)) {
      let str5 = str.substring(match[0].length);
      let trimmed = str5.trim();
      match = regExp.exec(trimmed);
      str = trimmed;
    }
    let str4 = match[1].toLowerCase();
    let tmp4 = exports;
    if (undefined !== exports.INTEGER_WORD_DICTIONARY[str4]) {
      let num5 = tmp4.INTEGER_WORD_DICTIONARY[str4];
    } else {
      num5 = 1;
      if ("a" !== str4) {
        num5 = 1;
        if ("an" !== str4) {
          num5 = 1;
          if ("the" != str4) {
            let num = 3;
            if (!str4.match(/few/)) {
              let num2 = 0.5;
              if (!str4.match(/half/)) {
                let num3 = 2;
                if (!str4.match(/couple/)) {
                  let num4 = 7;
                  if (!str4.match(/several/)) {
                    const _parseFloat = parseFloat;
                    num4 = parseFloat(str4);
                  }
                  num3 = num4;
                }
                num2 = num3;
              }
              num = num2;
            }
            num5 = num;
          }
        }
      }
    }
    str4 = match[2];
    tmp4 = tmp4.TIME_UNIT_DICTIONARY[str4.toLowerCase(str4)];
    obj[tmp4] = num5;
    str2 = match[0];
  }
  if (0 == Object.keys(obj).length) {
    return null;
  } else {
    return obj;
  }
};
export const WEEKDAY_DICTIONARY = { sunday: 0, sun: 0, "sun.": 0, monday: 1, mon: 1, "mon.": 1, tuesday: 2, tue: 2, "tue.": 2, wednesday: 3, wed: 3, "wed.": 3, thursday: 4, thurs: 4, "thurs.": 4, thur: 4, "thur.": 4, thu: 4, "thu.": 4, friday: 5, fri: 5, "fri.": 5, saturday: 6, sat: 6, "sat.": 6 };
export const FULL_MONTH_NAME_DICTIONARY = { january: 1, february: 2, march: 3, april: 4, may: 5, june: 6, july: 7, august: 8, september: 9, october: 10, november: 11, december: 12 };
export const MONTH_DICTIONARY = Object.assign(Object.assign({}, exports.FULL_MONTH_NAME_DICTIONARY), { jan: 1, "jan.": 1, feb: 2, "feb.": 2, mar: 3, "mar.": 3, apr: 4, "apr.": 4, jun: 6, "jun.": 6, jul: 7, "jul.": 7, aug: 8, "aug.": 8, sep: 9, "sep.": 9, sept: 9, "sept.": 9, oct: 10, "oct.": 10, nov: 11, "nov.": 11, dec: 12, "dec.": 12 });
export const INTEGER_WORD_DICTIONARY = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12 };
export const ORDINAL_WORD_DICTIONARY = { first: 1, second: 2, third: 3, fourth: 4, fifth: 5, sixth: 6, seventh: 7, eighth: 8, ninth: 9, tenth: 10, eleventh: 11, twelfth: 12, thirteenth: 13, fourteenth: 14, fifteenth: 15, sixteenth: 16, seventeenth: 17, eighteenth: 18, nineteenth: 19, twentieth: 20, "twenty first": 21, "twenty-first": 21, "twenty second": 22, "twenty-second": 22, "twenty third": 23, "twenty-third": 23, "twenty fourth": 24, "twenty-fourth": 24, "twenty fifth": 25, "twenty-fifth": 25, "twenty sixth": 26, "twenty-sixth": 26, "twenty seventh": 27, "twenty-seventh": 27, "twenty eighth": 28, "twenty-eighth": 28, "twenty ninth": 29, "twenty-ninth": 29, thirtieth: 30, "thirty first": 31, "thirty-first": 31 };
export const TIME_UNIT_DICTIONARY_NO_ABBR = { second: "second", seconds: "second", minute: "minute", minutes: "minute", hour: "hour", hours: "hour", day: "day", days: "day", week: "week", weeks: "week", month: "month", months: "month", quarter: "quarter", quarters: "quarter", year: "year", years: "year" };
export const TIME_UNIT_DICTIONARY = Object.assign({ s: "second", sec: "second", second: "second", seconds: "second", m: "minute", min: "minute", mins: "minute", minute: "minute", minutes: "minute", h: "hour", hr: "hour", hrs: "hour", hour: "hour", hours: "hour", d: "day", day: "day", days: "day", w: "week", week: "week", weeks: "week", mo: "month", mon: "month", mos: "month", month: "month", months: "month", qtr: "quarter", quarter: "quarter", quarters: "quarter", y: "year", yr: "year", year: "year", years: "year" }, exports.TIME_UNIT_DICTIONARY_NO_ABBR);
export const NUMBER_PATTERN = "(?:" + repeatedTimeunitPattern.matchAnyPattern(exports.INTEGER_WORD_DICTIONARY) + "|[0-9]+|[0-9]+\\.[0-9]+|half(?:\\s{0,2}an?)?|an?\\b(?:\\s{0,2}few)?|few|several|the|a?\\s{0,2}couple\\s{0,2}(?:of)?)";
export const ORDINAL_NUMBER_PATTERN = "(?:" + repeatedTimeunitPattern.matchAnyPattern(exports.ORDINAL_WORD_DICTIONARY) + "|[0-9]{1,2}(?:st|nd|rd|th)?)";
export const YEAR_PATTERN = "(?:[1-9][0-9]{0,3}\\s{0,2}(?:BE|AD|BC|BCE|CE)|[1-2][0-9]{3}|[5-9][0-9]|2[0-5])";
export const TIME_UNITS_PATTERN = repeatedTimeunitPattern.repeatedTimeunitPattern("(?:(?:about|around)\\s{0,3})?", combined, "\\s{0,5},?(?:\\s*and)?\\s{0,5}");
export const TIME_UNITS_NO_ABBR_PATTERN = repeatedTimeunitPattern.repeatedTimeunitPattern("(?:(?:about|around)\\s{0,3})?", combined1, "\\s{0,5},?(?:\\s*and)?\\s{0,5}");