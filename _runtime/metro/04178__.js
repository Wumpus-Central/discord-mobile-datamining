// _runtime/metro/04178__.js
import _mod3923 from "03923__.js";
import differenceInCalendarDays_mod from "../04080_differenceInCalendarDays.js";
import format_mod from "04150__.js";
import code_mod from "04164__.js";
import subMilliseconds_mod from "../04151_subMilliseconds.js";
import _typeof_mod from "03918__.js";
import module_4081_mod from "04081__.js";
import requiredArgs_mod from "../03919_requiredArgs.js";
import module_3922_mod from "03922__.js";

let differenceInCalendarDays = differenceInCalendarDays_mod;
if (!differenceInCalendarDays) {
  let obj = { default: differenceInCalendarDays };
  let tmp3 = obj;
} else {
  tmp3 = differenceInCalendarDays;
}
differenceInCalendarDays = tmp3;
let format = format_mod;
if (!format) {
  let obj2 = { default: format };
  let tmp5 = obj2;
} else {
  tmp5 = format;
}
format = tmp5;
let code = code_mod;
if (!code) {
  const obj3 = { default: code };
  let tmp7 = obj3;
} else {
  tmp7 = code;
}
code = tmp7;
let subMilliseconds = subMilliseconds_mod;
if (!subMilliseconds) {
  const obj4 = { default: subMilliseconds };
  let tmp9 = obj4;
} else {
  tmp9 = subMilliseconds;
}
subMilliseconds = tmp9;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj5 = { default: _typeof };
  let tmp11 = obj5;
} else {
  tmp11 = _typeof;
}
_typeof = tmp11;
let module_4081 = module_4081_mod;
if (!module_4081) {
  const obj6 = { default: module_4081 };
  let tmp13 = obj6;
} else {
  tmp13 = module_4081;
}
module_4081 = tmp13;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj7 = { default: requiredArgs };
  let tmp15 = obj7;
} else {
  tmp15 = requiredArgs;
}
requiredArgs = tmp15;
let module_3922 = module_3922_mod;
if (!module_3922) {
  const obj8 = { default: module_3922 };
  let tmp17 = obj8;
} else {
  tmp17 = module_3922;
}
module_3922 = tmp17;

export default function formatRelative(arg0, arg1, locale) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = _typeof.default(arg1);
  const defaultOptions = _mod3923.getDefaultOptions();
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
  const defaultResult3 = module_3922.default(num);
  if (locale1.localize) {
    if (locale1.formatLong) {
      if (locale1.formatRelative) {
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
          const defaultResult5 = subMilliseconds.default(defaultResult1, module_4081.default(defaultResult1));
          const obj = { locale: locale1, weekStartsOn: defaultResult3 };
          const obj2 = { locale: locale1, weekStartsOn: defaultResult3 };
          return format.default(defaultResult1, locale1.formatRelative(str5, defaultResult5, subMilliseconds.default(defaultResult2, module_4081.default(defaultResult2)), obj), obj2);
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