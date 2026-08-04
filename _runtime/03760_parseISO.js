import requiredArgs from "requiredArgs";
import toInteger from "toInteger";

if (!requiredArgs) {
  let obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
if (!toInteger) {
  obj = { default: null };
  obj[0] = toInteger;
  let tmp5 = obj;
} else {
  tmp5 = toInteger;
}
let c3 = tmp5;
let closure_4 = { dateTimeDelimiter: /[T ]/, timeZoneDelimiter: /[Z ]/i, timezone: /([Z+-].*)$/ };
const re5 = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
const re6 = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
const re7 = /^([+-])(\d{2})(?::?(\d{2}))?$/;
let closure_8 = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export default function parseISO(claimedAt) {
  let restDateString;
  let year;
  let num = 1;
  let defaultResult = tmp3.default(1, arguments);
  let additionalDigits;
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
  const defaultResult1 = tmp5.default(num2);
  if (2 !== defaultResult1) {
    if (num !== defaultResult1) {
      if (0 !== defaultResult1) {
        defaultResult = globalThis;
        const _RangeError = RangeError;
        defaultResult = new.target;
        defaultResult = new.target;
        defaultResult = new RangeError("additionalDigits must be 0, 1 or 2");
        throw defaultResult;
      }
    }
  }
  if (typeof claimedAt !== "y") {
    defaultResult = globalThis;
    const _Object = Object;
    const call = toString.call;
    if ("[object String]" !== (typeof call === "unknown" ? toString() : call(claimedAt))) {
      const _Date9 = Date;
      defaultResult = new.target;
      defaultResult = new.target;
      defaultResult = new Date(NaN);
      return defaultResult;
    }
  }
  let obj = {};
  const parts = claimedAt.split(dateTimeDelimiter.dateTimeDelimiter);
  if (parts.length <= 2) {
    defaultResult = parts[0];
    if (obj9.test(parts[0])) {
      let str2 = defaultResult;
    } else {
      obj.date = defaultResult;
      str2 = parts[1];
      const timeZoneDelimiter = tmp4.timeZoneDelimiter;
      if (timeZoneDelimiter.test(obj.date)) {
        obj.date = claimedAt.split(tmp4.timeZoneDelimiter)[0];
        str2 = claimedAt.substr(obj.date.length, claimedAt.length);
      }
    }
    if (str2) {
      const timezone = tmp4.timezone;
      const match = timezone.exec(str2);
      if (match) {
        obj.time = str2.replace(match[1], "");
        obj.timezone = match[1];
      } else {
        obj.time = str2;
      }
    }
    obj9 = /:/;
  }
  if (!obj.date) {
    if (undefined) {
      const _isNaN = isNaN;
      if (!isNaN(undefined.getTime())) {
        const time = undefined.getTime();
        let num26 = 0;
        if (obj.time) {
          const match1 = obj.time.match(closure_6);
          let num28 = NaN;
          if (match1) {
            let num29 = str9;
            if (match1[1]) {
              const _parseFloat = parseFloat;
              num29 = parseFloat(str9.replace(",", "."));
            }
            if (!num29) {
              num29 = 0;
            }
            let num30 = str12;
            if (match1[2]) {
              const _parseFloat2 = parseFloat;
              num30 = parseFloat(str12.replace(",", "."));
            }
            if (!num30) {
              num30 = 0;
            }
            let num31 = str15;
            if (match1[3]) {
              const _parseFloat3 = parseFloat;
              num31 = parseFloat(str15.replace(",", "."));
            }
            if (!num31) {
              num31 = 0;
            }
            if (24 === num29) {
              let tmp63 = 0 === num30 && 0 === num31;
              const tmp64 = 0 === num30 && 0 === num31;
            } else {
              tmp63 = num31 >= 0;
              if (tmp63) {
                tmp63 = num31 < 60;
              }
              if (tmp63) {
                tmp63 = num30 >= 0;
              }
              if (tmp63) {
                tmp63 = num30 < 60;
              }
              if (tmp63) {
                tmp63 = num29 >= 0;
              }
              if (tmp63) {
                tmp63 = num29 < 25;
              }
            }
            num28 = NaN;
            if (tmp63) {
              const result = num29 * require(3543) /* keys */.millisecondsInHour;
              num28 = result + num30 * require(3543) /* keys */.millisecondsInMinute + 1000 * num31;
            }
          }
          const _isNaN2 = isNaN;
          num26 = num28;
          if (isNaN(num28)) {
            const _Date7 = Date;
            const date = new Date(NaN);
            return date;
          }
          const str8 = obj.time;
        }
        if (obj.timezone) {
          let num38 = 0;
          if ("Z" !== obj.timezone) {
            defaultResult = closure_7;
            defaultResult = str18.match(closure_7);
            num38 = 0;
            if (defaultResult) {
              if ("+" === defaultResult[1]) {
                num = -1;
              }
              const _parseInt3 = parseInt;
              let num39 = defaultResult[3];
              const parsed = parseInt(defaultResult[2]);
              if (num39) {
                const _parseInt4 = parseInt;
                num39 = parseInt(defaultResult[3]);
              }
              if (!num39) {
                num39 = 0;
              }
              let tmp83 = num39 >= 0;
              if (tmp83) {
                tmp83 = num39 <= 59;
              }
              num38 = NaN;
              if (tmp83) {
                const result1 = parsed * require(3543) /* keys */.millisecondsInHour;
                num38 = num * (result1 + num39 * require(3543) /* keys */.millisecondsInMinute);
              }
            }
          }
          const _isNaN3 = isNaN;
          let _Date6 = Date;
          if (isNaN(num38)) {
            _Date6 = new _Date6(NaN);
            return _Date6;
          } else {
            const _Date61 = new _Date6(time + num26 + num38);
            return _Date61;
          }
        } else {
          const _Date4 = Date;
          const date1 = new Date(time + num26);
          const _Date5 = Date;
          const date2 = new Date(0);
          const uTCFullYear = date1.getUTCFullYear();
          const uTCMonth = date1.getUTCMonth();
          date2.setFullYear(uTCFullYear, uTCMonth, date1.getUTCDate());
          const uTCHours = date1.getUTCHours();
          const uTCMinutes = date1.getUTCMinutes();
          const uTCSeconds = date1.getUTCSeconds();
          date2.setHours(uTCHours, uTCMinutes, uTCSeconds, date1.getUTCMilliseconds());
          return date2;
        }
      }
    }
    const _Date8 = Date;
    defaultResult = new.target;
    defaultResult = new.target;
    defaultResult = new Date(NaN);
    return defaultResult;
  } else {
    let date3 = globalThis;
    const _RegExp = RegExp;
    let num4 = 4;
    const regExp = new RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + defaultResult1) + "})|(\\d{2}|[+-]\\d{" + (2 + defaultResult1) + "})$)");
    const match2 = str4.match(regExp);
    if (match2) {
      let parsed1 = null;
      if (match2[1]) {
        const _parseInt = parseInt;
        parsed1 = parseInt(match2[1]);
      }
      let parsed2 = null;
      if (match2[2]) {
        const _parseInt2 = parseInt;
        parsed2 = parseInt(match2[2]);
      }
      if (null !== parsed2) {
        parsed1 = 100 * parsed2;
      }
      obj = { year: null, restDateString: null };
      obj[0] = parsed1;
      let arr2 = match2[1];
      if (!arr2) {
        arr2 = match2[2];
      }
      obj[1] = str4.slice(arr2.length);
    } else {
      obj = { year: NaN, restDateString: "" };
    }
    ({ restDateString, year } = obj);
    if (null === year) {
      const _Date3 = Date;
      let match3 = new.target;
      date3 = new Date(NaN);
      let date4 = date3;
    } else {
      defaultResult = closure_5;
      match3 = restDateString.match(closure_5);
      if (!match3) {
        const _Date = Date;
        date4 = new Date(NaN);
      }
    }
    let parsed3 = num;
    if (match3[1]) {
      parsed3 = date3.parseInt(tmp17);
    }
    let parsed4 = num;
    if (match3[2]) {
      parsed4 = date3.parseInt(tmp19);
    }
    const diff = parsed4 - num;
    let parsed5 = num;
    if (match3[3]) {
      parsed5 = date3.parseInt(tmp22);
    }
    let parsed6 = num;
    if (match3[4]) {
      parsed6 = date3.parseInt(tmp24);
    }
    let parsed7 = num;
    if (match3[5]) {
      parsed7 = date3.parseInt(tmp26);
    }
    const diff1 = parsed7 - num;
    if (!tmp16) {
      let tmp48 = parsed6 >= num;
      if (tmp48) {
        tmp48 = parsed6 <= 53;
      }
      if (tmp48) {
        tmp48 = diff1 >= 0;
      }
      if (tmp48) {
        tmp48 = diff1 <= 6;
      }
      let _Date2 = date3.Date;
      if (tmp48) {
        _Date2 = new _Date2(0);
        _Date2.setUTCFullYear(year, 0, num4);
        num4 = parsed6 - num;
        const diff2 = 7 * num4 + diff1 + num - (_Date2.getUTCDay() || 7);
        _Date2.setUTCDate(_Date2.getUTCDate() + diff2);
        match3 = _Date2;
        const tmp54 = _Date2.getUTCDay() || 7;
      } else {
        match3 = new _Date2(NaN);
      }
      date4 = match3;
    } else {
      const date5 = new date3.Date(0);
      let tmp31 = diff >= 0;
      if (0 <= diff) {
        tmp31 = diff <= 11;
      }
      if (tmp31) {
        tmp31 = parsed5 >= num;
      }
      if (tmp31) {
        let tmp33 = table[diff];
        if (!tmp33) {
          const result2 = year % 400;
          let tmp35 = result2 === 0;
          if (result2 !== 0) {
            const result3 = year % num4;
            let tmp37 = result3 === 0;
            if (result3 === 0) {
              tmp37 = year % 100 !== 0;
            }
            tmp35 = tmp37;
          }
          let num12 = 28;
          if (tmp35) {
            num12 = 29;
          }
          tmp33 = num12;
        }
        tmp31 = parsed5 <= tmp33;
      }
      if (tmp31) {
        let tmp38 = parsed3 >= num;
        if (tmp38) {
          const result4 = year % 400;
          let tmp40 = result4 === 0;
          if (result4 !== 0) {
            const result5 = year % num4;
            let tmp42 = result5 === 0;
            if (result5 === 0) {
              tmp42 = year % 100 !== 0;
            }
            tmp40 = tmp42;
          }
          let num15 = 365;
          if (tmp40) {
            num15 = 366;
          }
          tmp38 = parsed3 <= num15;
        }
        if (tmp38) {
          const _Math = date3.Math;
          date5.setUTCFullYear(year, diff, _Math.max(parsed3, parsed5));
          match3 = date5;
          date4 = match3;
        }
      }
      match3 = new date3.Date(NaN);
    }
    tmp16 = !match3[4];
  }
};
export default exports.default;