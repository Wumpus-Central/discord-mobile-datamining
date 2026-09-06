// === Module 3882: ? ===

// Module 3882
import throwProtectedError from "throwProtectedError" /* 3897 */;
import module_3832 from "module_3832" /* 3832 */;
import subMilliseconds from "subMilliseconds" /* 3883 */;
import _typeof from "module_3650" /* 3650 */;
import G from "G" /* 3884 */;
import dateLongFormatter from "dateLongFormatter" /* 3895 */;
import module_3813 from "module_3813" /* 3813 */;
import module_3654 from "module_3654" /* 3654 */;
import requiredArgs from "requiredArgs" /* 3651 */;
import code from "module_3896" /* 3896 */;

if (!module_3832) {
  let obj = { default: module_3832 };
  let tmp3 = obj;
} else {
  tmp3 = module_3832;
}
module_3832 = tmp3;
if (!subMilliseconds) {
  obj = { default: subMilliseconds };
  let tmp5 = obj;
} else {
  tmp5 = subMilliseconds;
}
subMilliseconds = tmp5;
if (!_typeof) {
  obj = { default: _typeof };
  let tmp7 = obj;
} else {
  tmp7 = _typeof;
}
_typeof = tmp7;
if (!G) {
  const obj1 = { default: G };
  let tmp9 = obj1;
} else {
  tmp9 = G;
}
let closure_5 = tmp9;
if (!dateLongFormatter) {
  const obj2 = { default: dateLongFormatter };
  let tmp11 = obj2;
} else {
  tmp11 = dateLongFormatter;
}
dateLongFormatter = tmp11;
if (!module_3813) {
  const obj3 = { default: module_3813 };
  let tmp13 = obj3;
} else {
  tmp13 = module_3813;
}
module_3813 = tmp13;
if (!module_3654) {
  const obj4 = { default: module_3654 };
  let tmp15 = obj4;
} else {
  tmp15 = module_3654;
}
module_3654 = tmp15;
if (!requiredArgs) {
  const obj5 = { default: requiredArgs };
  let tmp17 = obj5;
} else {
  tmp17 = requiredArgs;
}
requiredArgs = tmp17;
if (!code) {
  const obj6 = { default: code };
  let tmp19 = obj6;
} else {
  tmp19 = code;
}
code = tmp19;
const re11 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
const re12 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
const re13 = /^'([^]*?)'?$/;
const re14 = /''/g;
const re15 = /[a-zA-Z]/;

export default function format(arg0, arg1, locale) {
  _require = arg0;
  dependencyMap = arg1;
  module_3832 = locale;
  requiredArgs.default(2, arguments);
  const defaultOptions = require("module_3655").getDefaultOptions();
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
  let prop;
  let obj = module_3654;
  if (null != locale) {
    prop = locale.firstWeekContainsDate;
  }
  if (null === prop) {
    let prop1;
    if (null != locale) {
      locale = locale.locale;
      if (null !== locale) {
        if (undefined !== locale) {
          const options = locale.options;
          if (null !== options) {
            if (undefined !== options) {
              prop1 = options.firstWeekContainsDate;
            }
          }
        }
      }
    }
    prop = prop1;
  }
  if (null === prop) {
    prop = defaultOptions.firstWeekContainsDate;
  }
  if (null === prop) {
    const locale2 = defaultOptions.locale;
    let prop2;
    if (null !== locale2) {
      if (undefined !== locale2) {
        const options2 = locale2.options;
        if (null !== options2) {
          if (undefined !== options2) {
            prop2 = options2.firstWeekContainsDate;
          }
        }
      }
    }
    prop = prop2;
  }
  let num = 1;
  if (null !== prop) {
    num = 1;
    if (undefined !== prop) {
      num = prop;
    }
  }
  const defaultResult1 = module_3654.default(num);
  if (defaultResult1 >= 1) {
    if (defaultResult1 <= 7) {
      let weekStartsOn;
      if (null != locale) {
        weekStartsOn = locale.weekStartsOn;
      }
      if (null === weekStartsOn) {
        let weekStartsOn1;
        if (null != locale) {
          const locale3 = locale.locale;
          if (null !== locale3) {
            if (undefined !== locale3) {
              const options3 = locale3.options;
              if (null !== options3) {
                if (undefined !== options3) {
                  weekStartsOn1 = options3.weekStartsOn;
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
        const locale4 = defaultOptions.locale;
        let weekStartsOn2;
        if (null !== locale4) {
          if (undefined !== locale4) {
            const options4 = locale4.options;
            if (null !== options4) {
              if (undefined !== options4) {
                weekStartsOn2 = options4.weekStartsOn;
              }
            }
          }
        }
        weekStartsOn = weekStartsOn2;
      }
      let num4 = 0;
      if (null !== weekStartsOn) {
        num4 = 0;
        if (undefined !== weekStartsOn) {
          num4 = weekStartsOn;
        }
      }
      const defaultResult2 = obj.default(num4);
      if (defaultResult2 >= 0) {
        if (defaultResult2 <= 6) {
          if (locale.localize) {
            if (locale.formatLong) {
              const defaultResult3 = _typeof.default(arg0);
              if (module_3832.default(defaultResult3)) {
                _typeof = locale.default(defaultResult3, module_3813.default(defaultResult3));
                obj = { firstWeekContainsDate: defaultResult1, weekStartsOn: defaultResult2, locale, _originalDate: defaultResult3 };
                let match = str.match(closure_12);
                const mapped = match.map((item) => {
                  const first = item[0];
                  if ("p" === first) {
                    let tmp2 = dateLongFormatter.default[first](item, locale.formatLong);
                  } else {
                    tmp2 = item;
                  }
                  return tmp2;
                });
                const match1 = mapped.join("").match(closure_11);
                const mapped1 = match1.map((item) => {
                  let str = item;
                  if ("''" === item) {
                    return "'";
                  } else if ("'" === str[0]) {
                    const match = str.match(re13);
                    if (match) {
                      str = match[1].replace(re14, "'");
                    }
                    return str;
                  } else if (closure_5.default[str6]) {
                    let tmp9 = null != closure_2 && tmp7.useAdditionalWeekYearTokens;
                    if (!tmp9) {
                      tmp9 = !throwProtectedError.isProtectedWeekYearToken(str);
                    }
                    if (!tmp9) {
                      const _String = String;
                      throwProtectedError.throwProtectedError(str, closure_1, String(closure_0));
                    }
                    let tmp18 = null != tmp7 && tmp7.useAdditionalDayOfYearTokens;
                    if (!tmp18) {
                      tmp18 = !throwProtectedError.isProtectedDayOfYearToken(str);
                    }
                    if (!tmp18) {
                      const _String2 = String;
                      throwProtectedError.throwProtectedError(str, closure_1, String(closure_0));
                    }
                    return tmp35(closure_4, str, locale.localize, obj);
                  } else if (str6.match(re15)) {
                    const _RangeError = RangeError;
                    const rangeError = new RangeError("Format string contains an unescaped latin alphabet character `" + str6 + "`");
                    throw rangeError;
                  } else {
                    return str;
                  }
                });
                return mapped1.join("");
              } else {
                const _RangeError4 = RangeError;
                let rangeError = new RangeError("Invalid time value");
                throw rangeError;
              }
            } else {
              const _RangeError3 = RangeError;
              const rangeError1 = new RangeError("locale must contain formatLong property");
              throw rangeError1;
            }
          } else {
            const _RangeError2 = RangeError;
            const rangeError2 = new RangeError("locale must contain localize property");
            throw rangeError2;
          }
        }
      }
      let _RangeError = RangeError;
      const rangeError3 = new RangeError("weekStartsOn must be between 0 and 6 inclusively");
      throw rangeError3;
    }
  }
  const rangeError4 = new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  throw rangeError4;
};
export default exports.default;