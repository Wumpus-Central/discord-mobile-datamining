// === Module 3884: _typeof ===

// Module 3884 (_typeof)
import _typeof from "_typeof" /* 3472 */;
import setMonth from "setMonth" /* 3885 */;
import toInteger from "toInteger" /* 3476 */;
import requiredArgs from "requiredArgs" /* 3473 */;

if (!_typeof) {
  let obj = { default: null };
  obj[0] = _typeof;
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!setMonth) {
  obj = { default: null };
  obj[0] = setMonth;
  let tmp5 = obj;
} else {
  tmp5 = setMonth;
}
setMonth = tmp5;
if (!toInteger) {
  obj = { default: null };
  obj[0] = toInteger;
  let tmp7 = obj;
} else {
  tmp7 = toInteger;
}
toInteger = tmp7;
if (!requiredArgs) {
  const obj1 = { default: null };
  obj1[0] = requiredArgs;
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function set(arg0, year) {
  requiredArgs.default(2, arguments);
  if ("object" === _typeof(year)) {
    if (null !== year) {
      const defaultResult1 = _typeof.default(arg0);
      const _isNaN = isNaN;
      if (isNaN(defaultResult1.getTime())) {
        const _Date = Date;
        const date = new Date(NaN);
        return date;
      } else {
        if (null != year.year) {
          defaultResult1.setFullYear(year.year);
        }
        let defaultResult2 = defaultResult1;
        if (null != year.month) {
          defaultResult2 = setMonth.default(defaultResult1, year.month);
        }
        if (null != year.date) {
          defaultResult2.setDate(toInteger.default(year.date));
        }
        if (null != year.hours) {
          defaultResult2.setHours(toInteger.default(year.hours));
        }
        if (null != year.minutes) {
          defaultResult2.setMinutes(toInteger.default(year.minutes));
        }
        if (null != year.seconds) {
          defaultResult2.setSeconds(toInteger.default(year.seconds));
        }
        if (null != year.milliseconds) {
          defaultResult2.setMilliseconds(toInteger.default(year.milliseconds));
        }
        return defaultResult2;
      }
    }
  }
  const rangeError = new RangeError("values parameter must be an object");
  throw rangeError;
};
export default exports.default;