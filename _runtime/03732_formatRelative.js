// _runtime/03732_formatRelative.js
import getDefaultOptions from "03477_getDefaultOptions.js";
import differenceInCalendarDays from "03634_differenceInCalendarDays.js";
import format from "03704_format.js";
import code from "03718_code.js";
import subMilliseconds from "03705_subMilliseconds.js";
import _typeof from "metro/03472__typeof.js";
import getTimezoneOffsetInMilliseconds from "03635_getTimezoneOffsetInMilliseconds.js";
import requiredArgs from "03473_requiredArgs.js";
import toInteger from "03476_toInteger.js";

if (!differenceInCalendarDays) {
  let obj = { default: null };
  obj[0] = differenceInCalendarDays;
  let tmp3 = obj;
} else {
  tmp3 = differenceInCalendarDays;
}
differenceInCalendarDays = tmp3;
if (!format) {
  obj = { default: null };
  obj[0] = format;
  let tmp5 = obj;
} else {
  tmp5 = format;
}
format = tmp5;
if (!code) {
  obj = { default: null };
  obj[0] = code;
  let tmp7 = obj;
} else {
  tmp7 = code;
}
code = tmp7;
if (!subMilliseconds) {
  const obj1 = { default: null };
  obj1[0] = subMilliseconds;
  let tmp9 = obj1;
} else {
  tmp9 = subMilliseconds;
}
subMilliseconds = tmp9;
if (!_typeof) {
  const obj2 = { default: null };
  obj2[0] = _typeof;
  let tmp11 = obj2;
} else {
  tmp11 = _typeof;
}
_typeof = tmp11;
if (!getTimezoneOffsetInMilliseconds) {
  const obj3 = { default: null };
  obj3[0] = getTimezoneOffsetInMilliseconds;
  let tmp13 = obj3;
} else {
  tmp13 = getTimezoneOffsetInMilliseconds;
}
getTimezoneOffsetInMilliseconds = tmp13;
if (!requiredArgs) {
  const obj4 = { default: null };
  obj4[0] = requiredArgs;
  let tmp15 = obj4;
} else {
  tmp15 = requiredArgs;
}
requiredArgs = tmp15;
if (!toInteger) {
  const obj5 = { default: null };
  obj5[0] = toInteger;
  let tmp17 = obj5;
} else {
  tmp17 = toInteger;
}
toInteger = tmp17;

export default function formatRelative(arg0, arg1, locale) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = _typeof.default(arg1);
  const defaultOptions = getDefaultOptions.getDefaultOptions();
  locale = undefined;
  if (null != locale) {
    locale = locale.locale;
  }
  if (null === locale) {
    locale = defaultOptions.locale;
  }
  if (null === locale) {
    locale = code.default;
  }
  let weekStartsOn;
  if (null != locale) {
    weekStartsOn = locale.weekStartsOn;
  }
  if (null === weekStartsOn) {
    let weekStartsOn1;
    if (null != locale) {
      locale = locale.locale;
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
  const defaultResult3 = toInteger.default(num);
  if (locale.localize) {
    if (locale.formatLong) {
      if (locale.formatRelative) {
        const defaultResult4 = differenceInCalendarDays.default(defaultResult1, defaultResult2);
        const _isNaN = isNaN;
        if (isNaN(defaultResult4)) {
          const _RangeError4 = RangeError;
          const rangeError = new RangeError("Invalid time value");
          throw rangeError;
        } else {
          let str4 = "other";
          let str5 = "other";
          if (defaultResult4 >= -6) {
            let str6 = "lastWeek";
            if (defaultResult4 >= -1) {
              let str7 = "yesterday";
              if (defaultResult4 >= 0) {
                let str8 = "today";
                if (defaultResult4 >= 1) {
                  let str9 = "tomorrow";
                  if (defaultResult4 >= 2) {
                    if (defaultResult4 < 7) {
                      str4 = "nextWeek";
                    }
                    str9 = str4;
                  }
                  str8 = str9;
                }
                str7 = str8;
              }
              str6 = str7;
            }
            str5 = str6;
          }
          const defaultResult5 = subMilliseconds.default(defaultResult1, getTimezoneOffsetInMilliseconds.default(defaultResult1));
          let obj = { locale: null, weekStartsOn: null };
          obj[0] = locale;
          obj[1] = defaultResult3;
          obj = { locale: null, weekStartsOn: null };
          obj[0] = locale;
          obj[1] = defaultResult3;
          return format.default(defaultResult1, locale.formatRelative(str5, defaultResult5, subMilliseconds.default(defaultResult2, getTimezoneOffsetInMilliseconds.default(defaultResult2)), obj), obj);
        }
      } else {
        const _RangeError3 = RangeError;
        const rangeError1 = new RangeError("locale must contain formatRelative property");
        throw rangeError1;
      }
    } else {
      const _RangeError2 = RangeError;
      const rangeError2 = new RangeError("locale must contain formatLong property");
      throw rangeError2;
    }
  } else {
    const _RangeError = RangeError;
    const rangeError3 = new RangeError("locale must contain localize property");
    throw rangeError3;
  }
};
export default exports.default;