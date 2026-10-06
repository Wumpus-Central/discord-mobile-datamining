// _runtime/04196_format.js
import throwProtectedError from "04211_throwProtectedError.js";
import isValid_mod from "04146_isValid.js";
import subMilliseconds_mod from "04197_subMilliseconds.js";
import toDate_mod from "03964_toDate.js";
import G from "04198_G.js";
import P from "04209_P.js";
import getTimezoneOffsetInMilliseconds_mod from "04127_getTimezoneOffsetInMilliseconds.js";
import toInteger_mod from "03968_toInteger.js";
import requiredArgs_mod from "03965_requiredArgs.js";
import code_mod from "metro/04210__.js";

const require = globalThis.__r;
let _require, dependencyMap;

let tmp11;
let tmp13;
let tmp15;
let tmp17;
let tmp19;
let tmp3;
let tmp5;
let tmp7;
let tmp9;
let isValid = isValid_mod;
if (!isValid) {
  let obj = { default: isValid };
  tmp3 = obj;
} else {
  tmp3 = isValid;
}
isValid = tmp3;
let subMilliseconds = subMilliseconds_mod;
if (!subMilliseconds) {
  tmp5 = { default: subMilliseconds };
  const obj2 = { default: subMilliseconds };
} else {
  tmp5 = subMilliseconds;
}
subMilliseconds = tmp5;
let toDate = toDate_mod;
if (!toDate) {
  tmp7 = { default: toDate };
  const obj3 = { default: toDate };
} else {
  tmp7 = toDate;
}
toDate = tmp7;
if (!G) {
  tmp9 = { default: G };
  const obj4 = { default: G };
} else {
  tmp9 = G;
}
let closure_5 = tmp9;
if (!P) {
  tmp11 = { default: P };
  const obj5 = { default: P };
} else {
  tmp11 = P;
}
let closure_6 = tmp11;
let getTimezoneOffsetInMilliseconds = getTimezoneOffsetInMilliseconds_mod;
if (!getTimezoneOffsetInMilliseconds) {
  tmp13 = { default: getTimezoneOffsetInMilliseconds };
  const obj6 = { default: getTimezoneOffsetInMilliseconds };
} else {
  tmp13 = getTimezoneOffsetInMilliseconds;
}
getTimezoneOffsetInMilliseconds = tmp13;
let toInteger = toInteger_mod;
if (!toInteger) {
  tmp15 = { default: toInteger };
  const obj7 = { default: toInteger };
} else {
  tmp15 = toInteger;
}
toInteger = tmp15;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp17 = { default: requiredArgs };
  const obj8 = { default: requiredArgs };
} else {
  tmp17 = requiredArgs;
}
requiredArgs = tmp17;
let code = code_mod;
if (!code) {
  tmp19 = { default: code };
  const obj9 = { default: code };
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
  let closure_0;
  let closure_1;
  let closure_4;
  _require = arg0;
  dependencyMap = arg1;
  isValid = locale;
  requiredArgs.default(2, arguments);
  let str = String(arg1);
  const defaultOptions = require("metro/03969__.js").getDefaultOptions();
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
  const _default = toInteger.default;
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
  const _defaultResult = _default(num);
  if (_defaultResult >= 1) {
    if (_defaultResult <= 7) {
      let weekStartsOn;
      const _default2 = toInteger.default;
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
      const _default2Result = _default2(num4);
      if (_default2Result >= 0) {
        if (_default2Result <= 6) {
          if (locale1.localize) {
            if (locale1.formatLong) {
              const defaultResult1 = toDate.default(arg0);
              if (isValid.default(defaultResult1)) {
                toDate = locale1.default(defaultResult1, getTimezoneOffsetInMilliseconds.default(defaultResult1));
                const obj = {
                  firstWeekContainsDate: _defaultResult,
                  weekStartsOn: _default2Result,
                  locale: locale1,
                  _originalDate: defaultResult1,
                };
                let match = str.match(closure_12);
                const mapped = match.map((item) => {
                  let tmp2;
                  const first = item[0];
                  if ("p" === first) {
                    tmp2 = closure_6.default[first](item, locale1.formatLong);
                  } else {
                    tmp2 = item;
                  }
                  return tmp2;
                });
                const str6 = "";
                const str7 = mapped.join("");
                const match1 = str7.match(closure_11);
                const mapped1 = match1.map(function (item) {
                  let str = item;
                  if ("''" === item) {
                    return "'";
                  } else if ("'" === str[0]) {
                    const match = str.match(re13);
                    if (match) {
                      const str4 = match[1];
                      str = str4.replace(re14, "'");
                    }
                    return str;
                  } else if (closure_5.default[str[0]]) {
                    const tmp7 =
                      (null != locale && locale.useAdditionalWeekYearTokens) ||
                      !throwProtectedError.isProtectedWeekYearToken(str);
                    if (!tmp7) {
                      const _String = String;
                      throwProtectedError.throwProtectedError(str, closure_1, String(closure_0));
                    }
                    const tmp16 =
                      (null != locale && locale.useAdditionalDayOfYearTokens) ||
                      !throwProtectedError.isProtectedDayOfYearToken(str);
                    if (!tmp16) {
                      const _String2 = String;
                      throwProtectedError.throwProtectedError(str, closure_1, String(closure_0));
                    }
                    return closure_5.default[str[0]](closure_4, str, locale1.localize, obj);
                  } else if (str[0].match(re15)) {
                    const _RangeError = RangeError;
                    const self = this;
                    const self2 = this;
                    const rangeError = new RangeError(
                      "Format string contains an unescaped latin alphabet character `" + str6 + "`",
                    );
                    throw rangeError;
                  } else {
                    return str;
                  }
                });
                return mapped1.join("");
              } else {
                const _RangeError4 = RangeError;
                const self7 = this;
                const self8 = this;
                let rangeError = new RangeError("Invalid time value");
                throw rangeError;
              }
            } else {
              const _RangeError3 = RangeError;
              const self5 = this;
              let str4 = "locale must contain formatLong property";
              const self6 = this;
              const rangeError1 = new RangeError("locale must contain formatLong property");
              throw rangeError1;
            }
          } else {
            const _RangeError2 = RangeError;
            const self3 = this;
            const self4 = this;
            const rangeError2 = new RangeError("locale must contain localize property");
            throw rangeError2;
          }
        }
      }
      let _RangeError = RangeError;
      let self = this;
      let self2 = this;
      const rangeError3 = new RangeError("weekStartsOn must be between 0 and 6 inclusively");
      let tmp16 = rangeError3;
      throw rangeError3;
    }
  }
  const rangeError4 = new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  throw rangeError4;
}
