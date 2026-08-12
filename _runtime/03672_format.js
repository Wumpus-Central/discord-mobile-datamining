// _runtime/03672_format.js
import isValid from "isValid";
import subMilliseconds from "subMilliseconds";
import _typeof from "_typeof";
import G from "G";
import dateLongFormatter from "dateLongFormatter";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";
import toInteger from "toInteger";
import requiredArgs from "requiredArgs";
import code from "code";
import { getDefaultOptions } from "03445_getDefaultOptions.js";

if (!isValid) {
  let obj = { default: null };
  obj[0] = isValid;
  let tmp3 = obj;
} else {
  tmp3 = isValid;
}
let obj1 = tmp3;
if (!subMilliseconds) {
  obj = { default: null };
  obj[0] = subMilliseconds;
  let tmp5 = obj;
} else {
  tmp5 = subMilliseconds;
}
let c3 = tmp5;
if (!_typeof) {
  obj = { default: null };
  obj[0] = _typeof;
  let tmp7 = obj;
} else {
  tmp7 = _typeof;
}
let c4 = tmp7;
if (!G) {
  obj1 = { default: null };
  obj1[0] = G;
  let tmp9 = obj1;
} else {
  tmp9 = G;
}
let c5 = tmp9;
if (!dateLongFormatter) {
  const obj2 = { default: null };
  obj2[0] = dateLongFormatter;
  let tmp11 = obj2;
} else {
  tmp11 = dateLongFormatter;
}
let closure_6 = tmp11;
if (!getTimezoneOffsetInMilliseconds) {
  const obj3 = { default: null };
  obj3[0] = getTimezoneOffsetInMilliseconds;
  let tmp13 = obj3;
} else {
  tmp13 = getTimezoneOffsetInMilliseconds;
}
const error = tmp13;
if (!toInteger) {
  const obj4 = { default: null };
  obj4[0] = toInteger;
  let tmp15 = obj4;
} else {
  tmp15 = toInteger;
}
const metroImportAll = tmp15;
if (!requiredArgs) {
  const obj5 = { default: null };
  obj5[0] = requiredArgs;
  let tmp17 = obj5;
} else {
  tmp17 = requiredArgs;
}
let c9 = tmp17;
if (!code) {
  const obj6 = { default: null };
  obj6[0] = code;
  let tmp19 = obj6;
} else {
  tmp19 = code;
}
let c10 = tmp19;
const re11 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
const re12 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
const re13 = /^'([^]*?)'?$/;
const re14 = /''/g;
const re15 = /[a-zA-Z]/;

export default function format(arg0, arg1, locale) {
  const _require = arg0;
  const dependencyMap = arg1;
  tmp17.default(2, arguments);
  const defaultOptions = _getDefaultOptions.getDefaultOptions();
  locale = undefined;
  if (null != locale) {
    locale = locale.locale;
  }
  if (null === locale) {
    locale = defaultOptions.locale;
  }
  if (null === locale) {
    locale = tmp19.default;
  }
  let prop;
  let obj = tmp15;
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
  const defaultResult1 = tmp15.default(num);
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
              const defaultResult3 = tmp7.default(arg0);
              if (tmp3.default(defaultResult3)) {
                tmp7 = locale.default(defaultResult3, tmp13.default(defaultResult3));
                obj = { firstWeekContainsDate: null, weekStartsOn: null, locale: null, _originalDate: null };
                obj[0] = defaultResult1;
                obj[1] = defaultResult2;
                obj[2] = locale;
                obj[3] = defaultResult3;
                let match = str.match(closure_12);
                const mapped = match.map((arg0) => {
                  const first = arg0[0];
                  if ("p" === first) {
                    let tmp2 = outer1_6.default[first](arg0, locale.formatLong);
                  } else {
                    tmp2 = arg0;
                  }
                  return tmp2;
                });
                const match1 = mapped.join("").match(closure_11);
                const mapped1 = match1.map((arg0) => {
                  let str = arg0;
                  if ("''" === arg0) {
                    return "'";
                  } else if ("'" === str[0]) {
                    const match = str.match(outer1_13);
                    if (match) {
                      str = match[1].replace(outer1_14, "'");
                      const str4 = match[1];
                    }
                    return str;
                  } else if (obj.default[str6]) {
                    let tmp9 = null != closure_2 && tmp7.useAdditionalWeekYearTokens;
                    if (!tmp9) {
                      tmp9 = !callback(3687).isProtectedWeekYearToken(str);
                    }
                    if (!tmp9) {
                      const _String = String;
                      callback(3687).throwProtectedError(str, dependencyMap, String(callback));
                    }
                    let tmp18 = null != tmp7 && tmp7.useAdditionalDayOfYearTokens;
                    if (!tmp18) {
                      tmp18 = !callback(3687).isProtectedDayOfYearToken(str);
                    }
                    if (!tmp18) {
                      const _String2 = String;
                      callback(3687).throwProtectedError(str, dependencyMap, String(callback));
                    }
                    return tmp35(closure_4, str, locale.localize, obj);
                  } else if (str6.match(outer1_15)) {
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