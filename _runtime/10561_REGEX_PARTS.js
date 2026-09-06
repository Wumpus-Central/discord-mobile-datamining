// === Module 10561: REGEX_PARTS ===

// Module 10561 (REGEX_PARTS)
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 10432 */;
import findMostLikelyADYear from "findMostLikelyADYear" /* 10433 */;

const combined = "(" + exports.NUMBER_PATTERN + ")\\s{0,3}(" + repeatedTimeunitPattern.matchAnyPattern(exports.TIME_UNIT_DICTIONARY) + ")";
const regExp = new RegExp(combined, "i");

export const parseNumberPattern = function parseNumberPattern(str) {
  str = str.toLowerCase();
  if (undefined !== exports.INTEGER_WORD_DICTIONARY[str]) {
    let num4 = exports.INTEGER_WORD_DICTIONARY[str];
  } else {
    num4 = 3;
    if (!str.match(/несколько/)) {
      let num = 0.5;
      if (!str.match(/пол/)) {
        let num2 = 2;
        if (!str.match(/пар/)) {
          let num3 = 1;
          if ("" !== str) {
            const _parseFloat = parseFloat;
            num3 = parseFloat(str);
          }
          num2 = num3;
        }
        num = num2;
      }
      num4 = num;
    }
  }
  return num4;
};
export const parseOrdinalNumberPattern = function parseOrdinalNumberPattern(joined) {
  const formatted = joined.toLowerCase();
  if (undefined !== exports.ORDINAL_WORD_DICTIONARY[formatted]) {
    return exports.ORDINAL_WORD_DICTIONARY[formatted];
  } else {
    const _parseInt = parseInt;
    return parseInt(formatted);
  }
};
export const parseYear = function parseYear(joined) {
  let str = joined;
  if (obj.test(joined)) {
    str = joined.replace(/(год|года|г|г.)/i, "");
  }
  if (obj2.test(str)) {
    const _parseInt3 = parseInt;
    return -parseInt(str.replace(/(до н.э.|до н. э.)/i, ""));
  } else {
    if (obj3.test(str)) {
      const _parseInt2 = parseInt;
      return parseInt(str.replace(/(н. э.|н.э.)/i, ""));
    } else {
      const _parseInt = parseInt;
      const parsed = parseInt(str);
      return findMostLikelyADYear.findMostLikelyADYear(parsed);
    }
    obj3 = /(н. э.|н.э.)/i;
  }
  obj = /(год|года|г|г.)/i;
  obj2 = /(до н.э.|до н. э.)/i;
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
      num = 3;
      if (!str3.match(/несколько/)) {
        let num2 = 0.5;
        if (!str3.match(/пол/)) {
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
    let tmp6 = regExp;
    match = regExp.exec(trimmed);
    str = trimmed;
  }
  return obj;
};
export const REGEX_PARTS = { leftBoundary: "([^\\p{L}\\p{N}_]|^)", rightBoundary: "(?=[^\\p{L}\\p{N}_]|$)", flags: "iu" };
export const WEEKDAY_DICTIONARY = { "воскресенье": 0, "воскресенья": 0, "вск": 0, "вск.": 0, "понедельник": 1, "понедельника": 1, "пн": 1, "пн.": 1, "вторник": 2, "вторника": 2, "вт": 2, "вт.": 2, "среда": 3, "среды": 3, "среду": 3, "ср": 3, "ср.": 3, "четверг": 4, "четверга": 4, "чт": 4, "чт.": 4, "пятница": 5, "пятницу": 5, "пятницы": 5, "пт": 5, "пт.": 5, "суббота": 6, "субботу": 6, "субботы": 6, "сб": 6, "сб.": 6 };
export const FULL_MONTH_NAME_DICTIONARY = { "январь": 1, "января": 1, "январе": 1, "февраль": 2, "февраля": 2, "феврале": 2, "март": 3, "марта": 3, "марте": 3, "апрель": 4, "апреля": 4, "апреле": 4, "май": 5, "мая": 5, "мае": 5, "июнь": 6, "июня": 6, "июне": 6, "июль": 7, "июля": 7, "июле": 7, "август": 8, "августа": 8, "августе": 8, "сентябрь": 9, "сентября": 9, "сентябре": 9, "октябрь": 10, "октября": 10, "октябре": 10, "ноябрь": 11, "ноября": 11, "ноябре": 11, "декабрь": 12, "декабря": 12, "декабре": 12 };
export const MONTH_DICTIONARY = Object.assign(Object.assign({}, exports.FULL_MONTH_NAME_DICTIONARY), { "янв": 1, "янв.": 1, "фев": 2, "фев.": 2, "мар": 3, "мар.": 3, "апр": 4, "апр.": 4, "авг": 8, "авг.": 8, "сен": 9, "сен.": 9, "окт": 10, "окт.": 10, "ноя": 11, "ноя.": 11, "дек": 12, "дек.": 12 });
export const INTEGER_WORD_DICTIONARY = { "один": 1, "одна": 1, "одной": 1, "одну": 1, "две": 2, "два": 2, "двух": 2, "три": 3, "трех": 3, "трёх": 3, "четыре": 4, "четырех": 4, "четырёх": 4, "пять": 5, "пяти": 5, "шесть": 6, "шести": 6, "семь": 7, "семи": 7, "восемь": 8, "восьми": 8, "девять": 9, "девяти": 9, "десять": 10, "десяти": 10, "одиннадцать": 11, "одиннадцати": 11, "двенадцать": 12, "двенадцати": 12 };
export const ORDINAL_WORD_DICTIONARY = { "первое": 1, "первого": 1, "второе": 2, "второго": 2, "третье": 3, "третьего": 3, "четвертое": 4, "четвертого": 4, "пятое": 5, "пятого": 5, "шестое": 6, "шестого": 6, "седьмое": 7, "седьмого": 7, "восьмое": 8, "восьмого": 8, "девятое": 9, "девятого": 9, "десятое": 10, "десятого": 10, "одиннадцатое": 11, "одиннадцатого": 11, "двенадцатое": 12, "двенадцатого": 12, "тринадцатое": 13, "тринадцатого": 13, "четырнадцатое": 14, "четырнадцатого": 14, "пятнадцатое": 15, "пятнадцатого": 15, "шестнадцатое": 16, "шестнадцатого": 16, "семнадцатое": 17, "семнадцатого": 17, "восемнадцатое": 18, "восемнадцатого": 18, "девятнадцатое": 19, "девятнадцатого": 19, "двадцатое": 20, "двадцатого": 20, "двадцать первое": 21, "двадцать первого": 21, "двадцать второе": 22, "двадцать второго": 22, "двадцать третье": 23, "двадцать третьего": 23, "двадцать четвертое": 24, "двадцать четвертого": 24, "двадцать пятое": 25, "двадцать пятого": 25, "двадцать шестое": 26, "двадцать шестого": 26, "двадцать седьмое": 27, "двадцать седьмого": 27, "двадцать восьмое": 28, "двадцать восьмого": 28, "двадцать девятое": 29, "двадцать девятого": 29, "тридцатое": 30, "тридцатого": 30, "тридцать первое": 31, "тридцать первого": 31 };
export const TIME_UNIT_DICTIONARY = { "сек": "second", "секунда": "second", "секунд": "second", "секунды": "second", "секунду": "second", "секундочка": "second", "секундочки": "second", "секундочек": "second", "секундочку": "second", "мин": "minute", "минута": "minute", "минут": "minute", "минуты": "minute", "минуту": "minute", "минуток": "minute", "минутки": "minute", "минутку": "minute", "минуточек": "minute", "минуточки": "minute", "минуточку": "minute", "час": "hour", "часов": "hour", "часа": "hour", "часу": "hour", "часиков": "hour", "часика": "hour", "часике": "hour", "часик": "hour", "день": "day", "дня": "day", "дней": "day", "суток": "day", "сутки": "day", "неделя": "week", "неделе": "week", "недели": "week", "неделю": "week", "недель": "week", "недельке": "week", "недельки": "week", "неделек": "week", "месяц": "month", "месяце": "month", "месяцев": "month", "месяца": "month", "квартал": "quarter", "квартале": "quarter", "кварталов": "quarter", "год": "year", "года": "year", "году": "year", "годов": "year", "лет": "year", "годик": "year", "годика": "year", "годиков": "year" };
export const NUMBER_PATTERN = "(?:" + repeatedTimeunitPattern.matchAnyPattern(exports.INTEGER_WORD_DICTIONARY) + "|[0-9]+|[0-9]+\\.[0-9]+|\u043F\u043E\u043B|\u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E|\u043F\u0430\u0440(?:\u044B|\u0443)|\\s{0,3})";
export const ORDINAL_NUMBER_PATTERN = "(?:" + repeatedTimeunitPattern.matchAnyPattern(exports.ORDINAL_WORD_DICTIONARY) + "|[0-9]{1,2}(?:\u0433\u043E|\u043E\u0433\u043E|\u0435|\u043E\u0435)?)";
export const YEAR_PATTERN = "(?:[1-9][0-9]{0,3}" + "(?:\\s+(?:\u0433\u043E\u0434\u0443|\u0433\u043E\u0434\u0430|\u0433\u043E\u0434|\u0433|\u0433.))?" + "\\s*(?:\u043D.\u044D.|\u0434\u043E \u043D.\u044D.|\u043D. \u044D.|\u0434\u043E \u043D. \u044D.)|[1-2][0-9]{3}" + "(?:\\s+(?:\u0433\u043E\u0434\u0443|\u0433\u043E\u0434\u0430|\u0433\u043E\u0434|\u0433|\u0433.))?" + "|[5-9][0-9]" + "(?:\\s+(?:\u0433\u043E\u0434\u0443|\u0433\u043E\u0434\u0430|\u0433\u043E\u0434|\u0433|\u0433.))?" + ")";
export const TIME_UNITS_PATTERN = repeatedTimeunitPattern.repeatedTimeunitPattern("(?:(?:\u043E\u043A\u043E\u043B\u043E|\u043F\u0440\u0438\u043C\u0435\u0440\u043D\u043E)\\s{0,3})?", combined);