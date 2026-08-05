import { keys } from "03543_keys.js";
import { 03673__ } from "metro/03673__.js";
// _runtime/03672_dayPeriodEnumToHours.js
const require = arg1;
const dependencyMap = arg6;
arg5.dayPeriodEnumToHours = function dayPeriodEnumToHours(arg0) {
  if ("morning" === arg0) {
    return 4;
  } else if ("evening" === arg0) {
    return 17;
  } else {
    if ("pm" !== arg0) {
      if ("noon" !== arg0) {
        if ("afternoon" !== arg0) {
          return 0;
        }
      }
    }
    return 12;
  }
};
arg5.isLeapYearIndex = function isLeapYearIndex(uTCFullYear) {
  const result = uTCFullYear % 400;
  let tmp2 = result === 0;
  if (result !== 0) {
    const result1 = uTCFullYear % 4;
    let tmp4 = result1 === 0;
    if (result1 === 0) {
      tmp4 = uTCFullYear % 100 !== 0;
    }
    tmp2 = tmp4;
  }
  return tmp2;
};
arg5.mapValue = function mapValue(value, valueCallback) {
  if (value) {
    const obj = { value: null, rest: null };
    obj[0] = valueCallback(value.value);
    obj[1] = value.rest;
    return obj;
  } else {
    return value;
  }
};
arg5.normalizeTwoDigitYear = function normalizeTwoDigitYear(year, arg1) {
  let diff = arg1;
  if (arg1 <= 0) {
    diff = 1 - arg1;
  }
  let num2 = year;
  if (diff <= 50) {
    if (!num2) {
      num2 = 100;
    }
    let diff1 = num2;
  } else {
    const sum = diff + 50;
    const _Math = Math;
    let num4 = 0;
    const sum1 = num2 + 100 * Math.floor(sum / 100);
    if (num2 >= sum % 100) {
      num4 = 100;
    }
    diff1 = sum1 - num4;
  }
  let diff2 = diff1;
  if (arg1 <= 0) {
    diff2 = 1 - diff1;
  }
  return diff2;
};
arg5.parseAnyDigitsSigned = function parseAnyDigitsSigned(str) {
  const match = str.match(03673__.numericPatterns.anyDigitsSigned);
  let tmp2 = null;
  if (match) {
    const obj = { value: null, rest: null };
    const _parseInt = parseInt;
    obj[0] = parseInt(match[0], 10);
    obj[1] = str.slice(match[0].length);
    tmp2 = obj;
  }
  return tmp2;
};
arg5.parseNDigits = function parseNDigits(length, str) {
  if (1 === length) {
    const match = str.match(03673__.numericPatterns.singleDigit);
    let tmp20 = null;
    if (match) {
      let obj = { value: null, rest: null };
      const _parseInt5 = parseInt;
      obj[0] = parseInt(match[0], 10);
      obj[1] = str.slice(match[0].length);
      tmp20 = obj;
    }
    return tmp20;
  } else if (2 === length) {
    const match1 = str.match(03673__.numericPatterns.twoDigits);
    let tmp15 = null;
    if (match1) {
      obj = { value: null, rest: null };
      const _parseInt4 = parseInt;
      obj[0] = parseInt(match1[0], 10);
      obj[1] = str.slice(match1[0].length);
      tmp15 = obj;
    }
    return tmp15;
  } else if (3 === length) {
    const match2 = str.match(03673__.numericPatterns.threeDigits);
    let tmp10 = null;
    if (match2) {
      const obj1 = { value: null, rest: null };
      const _parseInt3 = parseInt;
      obj1[0] = parseInt(match2[0], 10);
      obj1[1] = str.slice(match2[0].length);
      tmp10 = obj1;
    }
    return tmp10;
  } else if (4 === length) {
    const match3 = str.match(03673__.numericPatterns.fourDigits);
    let tmp5 = null;
    if (match3) {
      const obj2 = { value: null, rest: null };
      const _parseInt2 = parseInt;
      obj2[0] = parseInt(match3[0], 10);
      obj2[1] = str.slice(match3[0].length);
      tmp5 = obj2;
    }
    return tmp5;
  } else {
    const _RegExp = RegExp;
    const regExp = new RegExp("^\\d{1," + length + "}");
    const match4 = str.match(regExp);
    let tmp = null;
    if (match4) {
      obj = { value: null, rest: null };
      const _parseInt = parseInt;
      obj[0] = parseInt(match4[0], 10);
      obj[1] = str.slice(match4[0].length);
      tmp = obj;
    }
    return tmp;
  }
};
arg5.parseNDigitsSigned = function parseNDigitsSigned(length, str) {
  if (1 === length) {
    const match = str.match(03673__.numericPatterns.singleDigitSigned);
    let tmp20 = null;
    if (match) {
      let obj = { value: null, rest: null };
      const _parseInt5 = parseInt;
      obj[0] = parseInt(match[0], 10);
      obj[1] = str.slice(match[0].length);
      tmp20 = obj;
    }
    return tmp20;
  } else if (2 === length) {
    const match1 = str.match(03673__.numericPatterns.twoDigitsSigned);
    let tmp15 = null;
    if (match1) {
      obj = { value: null, rest: null };
      const _parseInt4 = parseInt;
      obj[0] = parseInt(match1[0], 10);
      obj[1] = str.slice(match1[0].length);
      tmp15 = obj;
    }
    return tmp15;
  } else if (3 === length) {
    const match2 = str.match(03673__.numericPatterns.threeDigitsSigned);
    let tmp10 = null;
    if (match2) {
      const obj1 = { value: null, rest: null };
      const _parseInt3 = parseInt;
      obj1[0] = parseInt(match2[0], 10);
      obj1[1] = str.slice(match2[0].length);
      tmp10 = obj1;
    }
    return tmp10;
  } else if (4 === length) {
    const match3 = str.match(03673__.numericPatterns.fourDigitsSigned);
    let tmp5 = null;
    if (match3) {
      const obj2 = { value: null, rest: null };
      const _parseInt2 = parseInt;
      obj2[0] = parseInt(match3[0], 10);
      obj2[1] = str.slice(match3[0].length);
      tmp5 = obj2;
    }
    return tmp5;
  } else {
    const _RegExp = RegExp;
    const regExp = new RegExp("^-?\\d{1," + length + "}");
    const match4 = str.match(regExp);
    let tmp = null;
    if (match4) {
      obj = { value: null, rest: null };
      const _parseInt = parseInt;
      obj[0] = parseInt(match4[0], 10);
      obj[1] = str.slice(match4[0].length);
      tmp = obj;
    }
    return tmp;
  }
};
arg5.parseNumericPattern = function parseNumericPattern(month, str) {
  const match = str.match(month);
  let tmp2 = null;
  if (match) {
    const obj = { value: null, rest: null };
    const _parseInt = parseInt;
    obj[0] = parseInt(match[0], 10);
    obj[1] = str.slice(match[0].length);
    tmp2 = obj;
  }
  return tmp2;
};
arg5.parseTimezonePattern = function parseTimezonePattern(basic, str) {
  const match = str.match(basic);
  if (match) {
    if ("Z" === match[0]) {
      let obj = { value: 0, rest: null };
      obj[1] = str.slice(1);
      return obj;
    } else {
      let num = -1;
      if ("+" === match[1]) {
        num = 1;
      }
      let num2 = 0;
      if (match[2]) {
        const _parseInt = parseInt;
        num2 = parseInt(match[2], 10);
      }
      let num4 = 0;
      if (match[3]) {
        const _parseInt2 = parseInt;
        num4 = parseInt(match[3], 10);
      }
      let num6 = 0;
      if (match[5]) {
        const _parseInt3 = parseInt;
        num6 = parseInt(match[5], 10);
      }
      obj = { value: null, rest: null };
      const result = num2 * keys /* keys */.millisecondsInHour;
      const sum = result + num4 * keys /* keys */.millisecondsInMinute;
      obj[0] = num * (sum + num6 * keys /* keys */.millisecondsInSecond);
      obj[1] = str.slice(match[0].length);
      return obj;
    }
  } else {
    return null;
  }
};