// === Module 4150: ? ===

// Module 4150
import throwProtectedError from "throwProtectedError" /* 4165 */;
import module_4100_mod from "module_4100" /* 4100 */;
import subMilliseconds_mod from "subMilliseconds" /* 4151 */;
import _typeof_mod from "module_3918" /* 3918 */;
import G from "G" /* 4152 */;
import dateLongFormatter_mod from "dateLongFormatter" /* 4163 */;
import module_4081_mod from "module_4081" /* 4081 */;
import module_3922_mod from "module_3922" /* 3922 */;
import requiredArgs_mod from "requiredArgs" /* 3919 */;
import code_mod from "module_4164" /* 4164 */;

const require = globalThis.__r;

let module_4100 = module_4100_mod;
if (!module_4100) {
  const obj = { default: module_4100 };
  let tmp3 = obj;
} else {
  tmp3 = module_4100;
}
module_4100 = tmp3;
let subMilliseconds = subMilliseconds_mod;
if (!subMilliseconds) {
  let obj2 = { default: subMilliseconds };
  let tmp5 = obj2;
} else {
  tmp5 = subMilliseconds;
}
subMilliseconds = tmp5;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj3 = { default: _typeof };
  let tmp7 = obj3;
} else {
  tmp7 = _typeof;
}
_typeof = tmp7;
if (!G) {
  const obj4 = { default: G };
  let tmp9 = obj4;
} else {
  tmp9 = G;
}
let closure_5 = tmp9;
let dateLongFormatter = dateLongFormatter_mod;
if (!dateLongFormatter) {
  const obj5 = { default: dateLongFormatter };
  let tmp11 = obj5;
} else {
  tmp11 = dateLongFormatter;
}
dateLongFormatter = tmp11;
let module_4081 = module_4081_mod;
if (!module_4081) {
  const obj6 = { default: module_4081 };
  let tmp13 = obj6;
} else {
  tmp13 = module_4081;
}
module_4081 = tmp13;
let module_3922 = module_3922_mod;
if (!module_3922) {
  const obj7 = { default: module_3922 };
  let tmp15 = obj7;
} else {
  tmp15 = module_3922;
}
module_3922 = tmp15;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj8 = { default: requiredArgs };
  let tmp17 = obj8;
} else {
  tmp17 = requiredArgs;
}
requiredArgs = tmp17;
let code = code_mod;
if (!code) {
  const obj9 = { default: code };
  let tmp19 = obj9;
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
  module_4100 = locale;
  requiredArgs.default(2, arguments);
  const defaultOptions = require("module_3923").getDefaultOptions();
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
  let prop;
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
  const defaultResult1 = module_3922.default(num);
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
      const defaultResult2 = module_3922.default(num4);
      if (defaultResult2 >= 0) {
        if (defaultResult2 <= 6) {
          if (locale1.localize) {
            if (locale1.formatLong) {
              const defaultResult3 = _typeof.default(arg0);
              if (module_4100.default(defaultResult3)) {
                _typeof = locale1.default(defaultResult3, module_4081.default(defaultResult3));
                const obj2 = { firstWeekContainsDate: defaultResult1, weekStartsOn: defaultResult2, locale: locale1, _originalDate: defaultResult3 };
                let match = str.match(closure_12);
                const mapped = match.map((item) => {
                  const first = item[0];
                  if ("p" === first) {
                    let tmp2 = dateLongFormatter.default[first](item, locale1.formatLong);
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
                  } else if (obj2.default[str6]) {
                    let tmp9 = null != locale && locale.useAdditionalWeekYearTokens;
                    if (!tmp9) {
                      tmp9 = !throwProtectedError.isProtectedWeekYearToken(str);
                    }
                    if (!tmp9) {
                      const _String = String;
                      throwProtectedError.throwProtectedError(str, closure_1, String(closure_0));
                    }
                    let tmp18 = null != locale && locale.useAdditionalDayOfYearTokens;
                    if (!tmp18) {
                      tmp18 = !throwProtectedError.isProtectedDayOfYearToken(str);
                    }
                    if (!tmp18) {
                      const _String2 = String;
                      throwProtectedError.throwProtectedError(str, closure_1, String(closure_0));
                    }
                    return tmp35(closure_4, str, locale1.localize, obj2);
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