// _runtime/03887_setDay.js
import addDays from "addDays";
import _typeof from "_typeof";
import toInteger from "toInteger";
import requiredArgs from "requiredArgs";
import { getDefaultOptions } from "03477_getDefaultOptions.js";

if (!addDays) {
  let obj = { default: null };
  obj[0] = addDays;
  let tmp3 = obj;
} else {
  tmp3 = addDays;
}
let obj1 = tmp3;
if (!_typeof) {
  obj = { default: null };
  obj[0] = _typeof;
  let tmp5 = obj;
} else {
  tmp5 = _typeof;
}
let c3 = tmp5;
if (!toInteger) {
  obj = { default: null };
  obj[0] = toInteger;
  let tmp7 = obj;
} else {
  tmp7 = toInteger;
}
let c4 = tmp7;
if (!requiredArgs) {
  obj1 = { default: null };
  obj1[0] = requiredArgs;
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
let c5 = tmp9;

export default function setDay(arg0, arg1, weekStartsOn) {
  tmp9.default(2, arguments);
  const defaultOptions = getDefaultOptions.getDefaultOptions();
  weekStartsOn = undefined;
  if (null != weekStartsOn) {
    weekStartsOn = weekStartsOn.weekStartsOn;
  }
  if (null === weekStartsOn) {
    let weekStartsOn1;
    if (null != weekStartsOn) {
      const locale = weekStartsOn.locale;
      if (null !== locale) {
        if (undefined !== locale) {
          const options = locale.options;
          if (null !== options) {
            if (undefined !== options) {
              weekStartsOn1 = options.weekStartsOn;
            }
          }
        }
      }
    }
    weekStartsOn = weekStartsOn1;
  }
  if (null === weekStartsOn) {
    weekStartsOn = defaultOptions.weekStartsOn;
  }
  if (null === weekStartsOn) {
    const locale2 = defaultOptions.locale;
    let weekStartsOn2;
    if (null !== locale2) {
      if (undefined !== locale2) {
        const options2 = locale2.options;
        if (null !== options2) {
          if (undefined !== options2) {
            weekStartsOn2 = options2.weekStartsOn;
          }
        }
      }
    }
    weekStartsOn = weekStartsOn2;
  }
  let num = 0;
  if (null !== weekStartsOn) {
    num = 0;
    if (undefined !== weekStartsOn) {
      num = weekStartsOn;
    }
  }
  const defaultResult1 = tmp7.default(num);
  if (defaultResult1 >= 0) {
    if (defaultResult1 <= 6) {
      const defaultResult2 = tmp5.default(arg0);
      const defaultResult3 = tmp7.default(arg1);
      const day = defaultResult2.getDay();
      const diff = 7 - defaultResult1;
      if (defaultResult3 >= 0) {
        if (defaultResult3 <= 6) {
          let diff1 = ((defaultResult3 % 7 + 7) % 7 + diff) % 7 - (day + diff) % 7;
        }
        return tmp3.default(defaultResult2, diff1);
      }
      diff1 = defaultResult3 - (day + diff) % 7;
      tmp9 = arg1;
    }
  }
  const rangeError = new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  throw rangeError;
};
export default exports.default;