// _runtime/04360_parseISO.js
import daysInWeek from "04143_daysInWeek.js";
import requiredArgs_mod from "03965_requiredArgs.js";
import toInteger_mod from "03968_toInteger.js";

let tmp3;
let tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  let obj = { default: requiredArgs };
  tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;
let toInteger = toInteger_mod;
if (!toInteger) {
  let obj2 = { default: toInteger };
  tmp5 = obj2;
} else {
  tmp5 = toInteger;
}
toInteger = tmp5;
const dateTimeDelimiter = { dateTimeDelimiter: /[T ]/, timeZoneDelimiter: /[Z ]/i, timezone: /([Z+-].*)$/ };
const re5 = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
const re6 = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
const re7 = /^([+-])(\d{2})(?::?(\d{2}))?$/;
let closure_8 = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export default function parseISO(claimedAt, arg1) {
  let arr2;
  let restDateString;
  let slice;
  let year;
  let num = 1;
  requiredArgs.default(1, arguments);
  let additionalDigits;
  const _default = toInteger.default;
  if (null != arg1) {
    additionalDigits = arg1.additionalDigits;
  }
  let num2 = 2;
  if (null !== additionalDigits) {
    num2 = 2;
    if (undefined !== additionalDigits) {
      num2 = additionalDigits;
    }
  }
  const _defaultResult = _default(num2);
  if (2 !== _defaultResult) {
    if (num !== _defaultResult) {
      if (0 !== _defaultResult) {
        const _RangeError = RangeError;
        const self24 = this;
        const self25 = this;
        const rangeError = new RangeError("additionalDigits must be 0, 1 or 2");
        throw rangeError;
      }
    }
  }
  if (typeof claimedAt !== "string") {
    const _Object = Object;
    if ("[object String]" !== toString.call(claimedAt)) {
      const _Date10 = Date;
      const self22 = this;
      const self23 = this;
      const date = new Date(NaN);
      return date;
    }
  }
  const obj = {};
  const parts = claimedAt.split(dateTimeDelimiter.dateTimeDelimiter);
  if (parts.length <= 2) {
    let str2;
    const first = parts[0];
    const obj7 = /:/;
    if (obj7.test(parts[0])) {
      str2 = first;
    } else {
      obj.date = first;
      str2 = parts[1];
      const timeZoneDelimiter = dateTimeDelimiter.timeZoneDelimiter;
      if (timeZoneDelimiter.test(obj.date)) {
        obj.date = claimedAt.split(dateTimeDelimiter.timeZoneDelimiter)[0];
        str2 = claimedAt.substr(obj.date.length, claimedAt.length);
      }
    }
    if (str2) {
      const timezone = dateTimeDelimiter.timezone;
      const match = timezone.exec(str2);
      if (match) {
        obj.time = str2.replace(match[1], "");
        obj.timezone = match[1];
      } else {
        obj.time = str2;
      }
    }
  }
  let tmp6;
  if (obj.date) {
    let obj3;
    let date1;
    const _RegExp = RegExp;
    const self = this;
    const self2 = this;
    const regExp = new RegExp(
      "^(?:(\\d{4}|[+-]\\d{" + (4 + _defaultResult) + "})|(\\d{2}|[+-]\\d{" + (2 + _defaultResult) + "})$)",
    );
    const match1 = str4.match(regExp);
    if (match1) {
      let parsed = null;
      if (match1[1]) {
        const _parseInt = parseInt;
        parsed = parseInt(match1[1]);
      }
      let parsed1 = null;
      if (match1[2]) {
        const _parseInt2 = parseInt;
        parsed1 = parseInt(match1[2]);
      }
      if (null !== parsed1) {
        parsed = 100 * parsed1;
      }
      const obj2 = { year: parsed, restDateString: slice(arr2.length) };
      arr2 = match1[1];
      slice = str4.slice;
      if (!arr2) {
        arr2 = match1[2];
      }
      obj3 = obj2;
    } else {
      obj3 = { year: NaN, restDateString: "" };
    }
    ({ restDateString, year } = obj3);
    if (null === year) {
      const _Date5 = Date;
      const self10 = this;
      const self11 = this;
      date1 = new Date(NaN);
    } else {
      const match2 = restDateString.match(re5);
      if (match2) {
        let parsed2 = num;
        const tmp14 = !match2[4];
        if (match2[1]) {
          const _parseInt3 = parseInt;
          parsed2 = parseInt(tmp15);
        }
        let parsed3 = num;
        if (match2[2]) {
          const _parseInt4 = parseInt;
          parsed3 = parseInt(tmp17);
        }
        const diff = parsed3 - num;
        let parsed4 = num;
        if (match2[3]) {
          const _parseInt5 = parseInt;
          parsed4 = parseInt(tmp20);
        }
        let parsed5 = num;
        if (match2[4]) {
          const _parseInt6 = parseInt;
          parsed5 = parseInt(tmp22);
        }
        let parsed6 = num;
        if (match2[5]) {
          const _parseInt7 = parseInt;
          parsed6 = parseInt(tmp24);
        }
        const diff1 = parsed6 - num;
        if (!tmp14) {
          let _Date42;
          const _Date4 = Date;
          const self9 = this;
          const tmp42 = parsed5 >= num && parsed5 <= 53 && diff1 >= 0 && diff1 <= 6;
          if (tmp42) {
            const _Date41 = new _Date4(0);
            _Date41.setUTCFullYear(year, 0, 4);
            const diff2 = 7 * (parsed5 - num) + diff1 + num - (_Date41.getUTCDay() || 7);
            _Date41.getUTCDay() || 7;
            _Date41.setUTCDate(_Date41.getUTCDate() + diff2);
            _Date42 = _Date41;
          } else {
            _Date42 = new _Date4(NaN);
          }
          date1 = _Date42;
        } else {
          const _Date2 = Date;
          const self5 = this;
          const self6 = this;
          const date2 = new Date(0);
          let tmp27 = diff >= 0;
          if (0 <= diff) {
            tmp27 = diff <= 11;
          }
          if (tmp27) {
            tmp27 = parsed4 >= num;
          }
          if (tmp27) {
            let tmp29 = closure_8[diff];
            if (!tmp29) {
              const result = year % 400;
              let tmp31 = result === 0;
              if (!tmp31) {
                const result1 = year % 4;
                let tmp33 = result1 === 0;
                if (result1 === 0) {
                  tmp33 = year % 100 !== 0;
                }
                tmp31 = tmp33;
              }
              let num12 = 28;
              if (tmp31) {
                num12 = 29;
              }
              tmp29 = num12;
            }
            tmp27 = parsed4 <= tmp29;
          }
          if (tmp27) {
            let date3;
            let tmp34 = parsed2 >= num;
            if (tmp34) {
              const result2 = year % 400;
              let tmp36 = result2 === 0;
              if (!tmp36) {
                const result3 = year % 4;
                let tmp38 = result3 === 0;
                if (result3 === 0) {
                  tmp38 = year % 100 !== 0;
                }
                tmp36 = tmp38;
              }
              let num15 = 365;
              if (tmp36) {
                num15 = 366;
              }
              tmp34 = parsed2 <= num15;
            }
            if (tmp34) {
              const _Math = Math;
              date2.setUTCFullYear(year, diff, Math.max(parsed2, parsed4));
              date3 = date2;
            }
            date1 = date3;
          }
          const _Date3 = Date;
          const self7 = this;
          const self8 = this;
          date3 = new Date(NaN);
        }
      } else {
        const _Date = Date;
        const self3 = this;
        const self4 = this;
        date1 = new Date(NaN);
      }
    }
    tmp6 = date1;
  }
  if (tmp6) {
    const _isNaN = isNaN;
    if (!isNaN(tmp6.getTime())) {
      const time = tmp6.getTime();
      let num26 = 0;
      if (obj.time) {
        const str8 = obj.time;
        const match3 = str8.match(re6);
        let num28 = NaN;
        if (match3) {
          let tmp55;
          let num29 = str9;
          if (num29) {
            const _parseFloat = parseFloat;
            num29 = parseFloat(str9.replace(",", "."));
          }
          if (!num29) {
            num29 = 0;
          }
          let num30 = str12;
          if (num30) {
            const _parseFloat2 = parseFloat;
            num30 = parseFloat(str12.replace(",", "."));
          }
          if (!num30) {
            num30 = 0;
          }
          let num31 = str15;
          if (num31) {
            const _parseFloat3 = parseFloat;
            num31 = parseFloat(str15.replace(",", "."));
          }
          if (!num31) {
            num31 = 0;
          }
          if (24 === num29) {
            tmp55 = 0 === num30 && 0 === num31;
          } else {
            tmp55 = num31 >= 0 && num31 < 60 && num30 >= 0 && num30 < 60 && num29 >= 0 && num29 < 25;
          }
          num28 = NaN;
          if (tmp55) {
            const result4 = num29 * daysInWeek.millisecondsInHour;
            num28 = result4 + num30 * daysInWeek.millisecondsInMinute + 1000 * num31;
          }
        }
        const _isNaN2 = isNaN;
        num26 = num28;
        if (isNaN(num28)) {
          const _Date9 = Date;
          const self20 = this;
          const self21 = this;
          const date4 = new Date(NaN);
          return date4;
        }
      }
      if (obj.timezone) {
        let num38 = 0;
        if ("Z" !== obj.timezone) {
          const match4 = str18.match(re7);
          num38 = 0;
          if (match4) {
            if ("+" === match4[1]) {
              num = -1;
            }
            const _parseInt8 = parseInt;
            let num39 = match4[3];
            const parsed7 = parseInt(match4[2]);
            if (num39) {
              const _parseInt9 = parseInt;
              num39 = parseInt(match4[3]);
            }
            if (!num39) {
              num39 = 0;
            }
            num38 = NaN;
            const tmp72 = num39 >= 0 && num39 <= 59;
            if (tmp72) {
              const result5 = parsed7 * daysInWeek.millisecondsInHour;
              num38 = num * (result5 + num39 * daysInWeek.millisecondsInMinute);
            }
          }
        }
        const _isNaN3 = isNaN;
        const _Date8 = Date;
        if (isNaN(num38)) {
          const self18 = this;
          const self19 = this;
          const _Date81 = new _Date8(NaN);
          return _Date81;
        } else {
          const self16 = this;
          const self17 = this;
          const _Date82 = new _Date8(time + num26 + num38);
          return _Date82;
        }
      } else {
        const _Date6 = Date;
        const self12 = this;
        const self13 = this;
        const date5 = new Date(time + num26);
        const _Date7 = Date;
        const self14 = this;
        const self15 = this;
        const date6 = new Date(0);
        const setFullYear = date6.setFullYear;
        const uTCFullYear = date5.getUTCFullYear();
        const uTCMonth = date5.getUTCMonth();
        setFullYear(uTCFullYear, uTCMonth, date5.getUTCDate());
        const setHours = date6.setHours;
        const uTCHours = date5.getUTCHours();
        const uTCMinutes = date5.getUTCMinutes();
        const uTCSeconds = date5.getUTCSeconds();
        setHours(uTCHours, uTCMinutes, uTCSeconds, date5.getUTCMilliseconds());
        return date6;
      }
    }
  }
  const date7 = new Date(NaN);
  return date7;
}
