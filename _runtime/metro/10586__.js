// === Module 10586: ? ===

// Module 10586
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 10432 */;
import findMostLikelyADYear from "findMostLikelyADYear" /* 10433 */;

const combined = "(" + exports.NUMBER_PATTERN + ")\\s{0,3}(" + repeatedTimeunitPattern.matchAnyPattern(exports.TIME_UNIT_DICTIONARY) + ")";
const regExp = new RegExp(combined, "i");

export const parseNumberPattern = function parseNumberPattern(str) {
  str = str.toLowerCase();
  if (undefined !== exports.INTEGER_WORD_DICTIONARY[str]) {
    let num4 = exports.INTEGER_WORD_DICTIONARY[str];
  } else {
    let num3 = 2;
    num4 = 2;
    if (!str.match(/декілька/)) {
      let num = 0.5;
      if (!str.match(/пів/)) {
        if (!str.match(/пар/)) {
          let num2 = 1;
          if ("" !== str) {
            const _parseFloat = parseFloat;
            num2 = parseFloat(str);
          }
          num3 = num2;
        }
        num = num3;
      }
      num4 = num;
    }
  }
  return num4;
};
export const parseOrdinalNumberPattern = function parseOrdinalNumberPattern(match) {
  const formatted = match.toLowerCase();
  if (undefined !== exports.ORDINAL_WORD_DICTIONARY[formatted]) {
    return exports.ORDINAL_WORD_DICTIONARY[formatted];
  } else {
    const _parseInt = parseInt;
    return parseInt(formatted);
  }
};
export const parseYearPattern = function parseYearPattern(match) {
  let str = match;
  if (obj.test(match)) {
    str = match.replace(/(рік|року|р|р.)/i, "");
  }
  if (obj2.test(str)) {
    const _parseInt3 = parseInt;
    return -parseInt(str.replace(/(до н.е.|до н. е.)/i, ""));
  } else {
    if (obj3.test(str)) {
      const _parseInt2 = parseInt;
      return parseInt(str.replace(/(н. е.|н.е.)/i, ""));
    } else {
      const _parseInt = parseInt;
      const parsed = parseInt(str);
      return findMostLikelyADYear.findMostLikelyADYear(parsed);
    }
    obj3 = /(н. е.|н.е.)/i;
  }
  obj = /(рік|року|р|р.)/i;
  obj2 = /(до н.е.|до н. е.)/i;
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
      num = 2;
      if (!str3.match(/декілька/)) {
        let num2 = 0.5;
        if (!str3.match(/пів/)) {
          let num3 = 2;
          if (!str3.match(/пар/)) {
            let num4 = 1;
            if ("" !== str3) {
              let _parseFloat = parseFloat;
              num4 = parseFloat(str3);
            }
            num3 = num4;
          }
          num2 = num3;
        }
        num = num2;
      }
    }
    let str4 = match[2];
    obj[tmp2.TIME_UNIT_DICTIONARY[str4.toLowerCase(str4)]] = num;
    let str5 = str.substring(match[0].length);
    let trimmed = str5.trim();
    match = regExp.exec(trimmed);
    str = trimmed;
  }
  return obj;
};
export const REGEX_PARTS = { leftBoundary: "([^\\p{L}\\p{N}_]|^)", rightBoundary: "(?=[^\\p{L}\\p{N}_]|$)", flags: "iu" };
export const WEEKDAY_DICTIONARY = { "неділя": 0, "неділі": 0, "неділю": 0, "нд": 0, "нд.": 0, "понеділок": 1, "понеділка": 1, "пн": 1, "пн.": 1, "вівторок": 2, "вівторка": 2, "вт": 2, "вт.": 2, "середа": 3, "середи": 3, "середу": 3, "ср": 3, "ср.": 3, "четвер": 4, "четверга": 4, "четвергу": 4, "чт": 4, "чт.": 4, "п'ятниця": 5, "п'ятниці": 5, "п'ятницю": 5, "пт": 5, "пт.": 5, "субота": 6, "суботи": 6, "суботу": 6, "сб": 6, "сб.": 6 };
export const FULL_MONTH_NAME_DICTIONARY = { "січень": 1, "січня": 1, "січні": 1, "лютий": 2, "лютого": 2, "лютому": 2, "березень": 3, "березня": 3, "березні": 3, "квітень": 4, "квітня": 4, "квітні": 4, "травень": 5, "травня": 5, "травні": 5, "червень": 6, "червня": 6, "червні": 6, "липень": 7, "липня": 7, "липні": 7, "серпень": 8, "серпня": 8, "серпні": 8, "вересень": 9, "вересня": 9, "вересні": 9, "жовтень": 10, "жовтня": 10, "жовтні": 10, "листопад": 11, "листопада": 11, "листопаду": 11, "грудень": 12, "грудня": 12, "грудні": 12 };
export const MONTH_DICTIONARY = Object.assign(Object.assign({}, exports.FULL_MONTH_NAME_DICTIONARY), { "січ": 1, "січ.": 1, "лют": 2, "лют.": 2, "бер": 3, "бер.": 3, "квіт": 4, "квіт.": 4, "трав": 5, "трав.": 5, "черв": 6, "черв.": 6, "лип": 7, "лип.": 7, "серп": 8, "серп.": 8, "сер": 8, "cер.": 8, "вер": 9, "вер.": 9, "верес": 9, "верес.": 9, "жовт": 10, "жовт.": 10, "листоп": 11, "листоп.": 11, "груд": 12, "груд.": 12 });
export const INTEGER_WORD_DICTIONARY = { "один": 1, "одна": 1, "одної": 1, "одну": 1, "дві": 2, "два": 2, "двох": 2, "три": 3, "трьох": 3, "чотири": 4, "чотирьох": 4, "п'ять": 5, "п'яти": 5, "шість": 6, "шести": 6, "сім": 7, "семи": 7, "вісім": 8, "восьми": 8, "дев'ять": 9, "дев'яти": 9, "десять": 10, "десяти": 10, "одинадцять": 11, "одинадцяти": 11, "дванадцять": 12, "дванадцяти": 12 };
export const ORDINAL_WORD_DICTIONARY = { "перше": 1, "першого": 1, "друге": 2, "другого": 2, "третє": 3, "третього": 3, "четверте": 4, "четвертого": 4, "п'яте": 5, "п'ятого": 5, "шосте": 6, "шостого": 6, "сьоме": 7, "сьомого": 7, "восьме": 8, "восьмого": 8, "дев'яте": 9, "дев'ятого": 9, "десяте": 10, "десятого": 10, "одинадцяте": 11, "одинадцятого": 11, "дванадцяте": 12, "дванадцятого": 12, "тринадцяте": 13, "тринадцятого": 13, "чотирнадцяте": 14, "чотинрнадцятого": 14, "п'ятнадцяте": 15, "п'ятнадцятого": 15, "шістнадцяте": 16, "шістнадцятого": 16, "сімнадцяте": 17, "сімнадцятого": 17, "вісімнадцяте": 18, "вісімнадцятого": 18, "дев'ятнадцяте": 19, "дев'ятнадцятого": 19, "двадцяте": 20, "двадцятого": 20, "двадцять перше": 21, "двадцять першого": 21, "двадцять друге": 22, "двадцять другого": 22, "двадцять третє": 23, "двадцять третього": 23, "двадцять четверте": 24, "двадцять четвертого": 24, "двадцять п'яте": 25, "двадцять п'ятого": 25, "двадцять шосте": 26, "двадцять шостого": 26, "двадцять сьоме": 27, "двадцять сьомого": 27, "двадцять восьме": 28, "двадцять восьмого": 28, "двадцять дев'яте": 29, "двадцять дев'ятого": 29, "тридцяте": 30, "тридцятого": 30, "тридцять перше": 31, "тридцять першого": 31 };
export const TIME_UNIT_DICTIONARY = { "сек": "second", "секунда": "second", "секунд": "second", "секунди": "second", "секунду": "second", "секундочок": "second", "секундочки": "second", "секундочку": "second", "хв": "minute", "хвилина": "minute", "хвилин": "minute", "хвилини": "minute", "хвилину": "minute", "хвилинок": "minute", "хвилинки": "minute", "хвилинку": "minute", "хвилиночок": "minute", "хвилиночки": "minute", "хвилиночку": "minute", "год": "hour", "година": "hour", "годин": "hour", "години": "hour", "годину": "hour", "годинка": "hour", "годинок": "hour", "годинки": "hour", "годинку": "hour", "день": "day", "дня": "day", "днів": "day", "дні": "day", "доба": "day", "добу": "day", "тиждень": "week", "тижню": "week", "тижня": "week", "тижні": "week", "тижнів": "week", "місяць": "month", "місяців": "month", "місяці": "month", "місяця": "month", "квартал": "quarter", "кварталу": "quarter", "квартала": "quarter", "кварталів": "quarter", "кварталі": "quarter", "рік": "year", "року": "year", "році": "year", "років": "year", "роки": "year" };
export const NUMBER_PATTERN = "(?:" + repeatedTimeunitPattern.matchAnyPattern(exports.INTEGER_WORD_DICTIONARY) + "|[0-9]+|[0-9]+\\.[0-9]+|\u043F\u0456\u0432|\u0434\u0435\u043A\u0456\u043B\u044C\u043A\u0430|\u043F\u0430\u0440(?:\u0443)|\\s{0,3})";
export const ORDINAL_NUMBER_PATTERN = "(?:" + repeatedTimeunitPattern.matchAnyPattern(exports.ORDINAL_WORD_DICTIONARY) + "|[0-9]{1,2}(?:\u0433\u043E|\u043E\u0433\u043E|\u0435)?)";
export const YEAR_PATTERN = "(?:[1-9][0-9]{0,3}" + "(?:\\s+(?:\u0440\u043E\u043A\u0443|\u0440\u0456\u043A|\u0440|\u0440.))?" + "\\s*(?:\u043D.\u0435.|\u0434\u043E \u043D.\u0435.|\u043D. \u0435.|\u0434\u043E \u043D. \u0435.)|[1-2][0-9]{3}" + "(?:\\s+(?:\u0440\u043E\u043A\u0443|\u0440\u0456\u043A|\u0440|\u0440.))?" + "|[5-9][0-9]" + "(?:\\s+(?:\u0440\u043E\u043A\u0443|\u0440\u0456\u043A|\u0440|\u0440.))?" + ")";
export const TIME_UNITS_PATTERN = repeatedTimeunitPattern.repeatedTimeunitPattern("(?:(?:\u0431\u043B\u0438\u0437\u044C\u043A\u043E|\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E)\\s{0,3})?", combined);