// _runtime/04218_formatRelative.js
import _mod3963 from "metro/03963__.js";
import differenceInCalendarDays_mod from "04120_differenceInCalendarDays.js";
import format_mod from "04190_format.js";
import code_mod from "metro/04204__.js";
import subMilliseconds_mod from "04191_subMilliseconds.js";
import toDate_mod from "03958_toDate.js";
import getTimezoneOffsetInMilliseconds_mod from "04121_getTimezoneOffsetInMilliseconds.js";
import requiredArgs_mod from "03959_requiredArgs.js";
import toInteger_mod from "03962_toInteger.js";

let tmp11;
let tmp13;
let tmp15;
let tmp17;
let tmp3;
let tmp5;
let tmp7;
let tmp9;
let differenceInCalendarDays = differenceInCalendarDays_mod;
if (!differenceInCalendarDays) {
  let obj = { default: differenceInCalendarDays };
  tmp3 = obj;
} else {
  tmp3 = differenceInCalendarDays;
}
differenceInCalendarDays = tmp3;
let format = format_mod;
if (!format) {
  let obj2 = { default: format };
  tmp5 = obj2;
} else {
  tmp5 = format;
}
format = tmp5;
let code = code_mod;
if (!code) {
  tmp7 = { default: code };
  const obj3 = { default: code };
} else {
  tmp7 = code;
}
code = tmp7;
let subMilliseconds = subMilliseconds_mod;
if (!subMilliseconds) {
  tmp9 = { default: subMilliseconds };
  const obj4 = { default: subMilliseconds };
} else {
  tmp9 = subMilliseconds;
}
subMilliseconds = tmp9;
let toDate = toDate_mod;
if (!toDate) {
  tmp11 = { default: toDate };
  const obj5 = { default: toDate };
} else {
  tmp11 = toDate;
}
toDate = tmp11;
let getTimezoneOffsetInMilliseconds = getTimezoneOffsetInMilliseconds_mod;
if (!getTimezoneOffsetInMilliseconds) {
  tmp13 = { default: getTimezoneOffsetInMilliseconds };
  const obj6 = { default: getTimezoneOffsetInMilliseconds };
} else {
  tmp13 = getTimezoneOffsetInMilliseconds;
}
getTimezoneOffsetInMilliseconds = tmp13;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp15 = { default: requiredArgs };
  const obj7 = { default: requiredArgs };
} else {
  tmp15 = requiredArgs;
}
requiredArgs = tmp15;
let toInteger = toInteger_mod;
if (!toInteger) {
  tmp17 = { default: toInteger };
  const obj8 = { default: toInteger };
} else {
  tmp17 = toInteger;
}
toInteger = tmp17;

export default function formatRelative(arg0, arg1, locale) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = toDate.default(arg0);
  const defaultResult2 = toDate.default(arg1);
  const defaultOptions = _mod3963.getDefaultOptions();
  let locale1;
  if (null != locale) {
    locale1 = locale.locale;
  }
  if (null === locale1) {
    locale1 = defaultOptions.locale;
  }
  if (null === locale1) {
    locale1 = code.default;
  }
  let weekStartsOn;
  const _default = toInteger.default;
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
  const _defaultResult = _default(num);
  if (locale1.localize) {
    if (locale1.formatLong) {
      if (locale1.formatRelative) {
        const defaultResult3 = differenceInCalendarDays.default(defaultResult1, defaultResult2);
        const _isNaN = isNaN;
        if (isNaN(defaultResult3)) {
          const _RangeError4 = RangeError;
          const self7 = this;
          const self8 = this;
          const rangeError = new RangeError("Invalid time value");
          throw rangeError;
        } else {
          let str4 = "other";
          let str5 = "other";
          if (defaultResult3 >= -6) {
            let str6 = "lastWeek";
            if (defaultResult3 >= -1) {
              let str7 = "yesterday";
              if (defaultResult3 >= 0) {
                let str8 = "today";
                if (defaultResult3 >= 1) {
                  let str9 = "tomorrow";
                  if (defaultResult3 >= 2) {
                    if (defaultResult3 < 7) {
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
          const defaultResult4 = subMilliseconds.default(
            defaultResult1,
            getTimezoneOffsetInMilliseconds.default(defaultResult1),
          );
          const obj = { locale: locale1, weekStartsOn: _defaultResult };
          const obj2 = { locale: locale1, weekStartsOn: _defaultResult };
          return format.default(
            defaultResult1,
            locale1.formatRelative(
              str5,
              defaultResult4,
              subMilliseconds.default(defaultResult2, getTimezoneOffsetInMilliseconds.default(defaultResult2)),
              obj,
            ),
            obj2,
          );
        }
      } else {
        const _RangeError3 = RangeError;
        const self5 = this;
        const self6 = this;
        const rangeError1 = new RangeError("locale must contain formatRelative property");
        throw rangeError1;
      }
    } else {
      const _RangeError2 = RangeError;
      const self3 = this;
      const self4 = this;
      const rangeError2 = new RangeError("locale must contain formatLong property");
      throw rangeError2;
    }
  } else {
    const _RangeError = RangeError;
    const self = this;
    const self2 = this;
    const rangeError3 = new RangeError("locale must contain localize property");
    throw rangeError3;
  }
}
