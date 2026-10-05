// === Module 4260: parse ===

// Module 4260 (parse)
import throwProtectedError from "throwProtectedError" /* 4205 */;
import parsers from "parsers" /* 4262 */;
import code_mod from "module_4204" /* 4204 */;
import subMilliseconds_mod from "subMilliseconds" /* 4191 */;
import toDate_mod from "toDate" /* 3958 */;
import assign_mod from "assign" /* 4208 */;
import P from "P" /* 4203 */;
import getTimezoneOffsetInMilliseconds_mod from "getTimezoneOffsetInMilliseconds" /* 4121 */;
import toInteger_mod from "toInteger" /* 3962 */;
import requiredArgs_mod from "requiredArgs" /* 3959 */;

const require = globalThis.__r;
let _require, dependencyMap;

let tmp11;
let tmp13;
let tmp15;
let tmp17;
let tmp3;
let tmp5;
let tmp7;
let tmp9;
function _typeof(arg0) {
  if (typeof Symbol === "function") {
    let _Symbol = Symbol;
    if (typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(arg0) {
        return typeof arg0;
      };
    }
    let tmp = arg0;
    return _typeof(arg0);
  }
  _typeof = function _typeof(arg0) {
    const tmp = arg0;
    if (tmp) {
      const _Symbol = Symbol;
      if (typeof Symbol === "function") {
        let str;
        const _Symbol3 = Symbol;
        if (arg0.constructor === Symbol) {
          const _Symbol2 = Symbol;
          str = "symbol";
        }
        return str;
      }
    }
    str = typeof arg0;
  };
}
function _createForOfIteratorHelper(str, arg1) {
  let closure_1;
  let closure_0 = str;
  if (typeof Symbol !== "undefined") {
    const _Symbol = Symbol;
    if (null != str[Symbol.iterator]) {
      let done = true;
      let c5 = false;
      let obj = {
        s() {
              closure_1 = closure_0[Symbol.iterator]();
            },
        n() {
              const iter = closure_1.next();
              done = iter.done;
              return iter;
            },
        e(arg0) {
              c5 = true;
              let closure_1_3 = arg0;
            },
        f() {
              try {
                const tmp = done || null == closure_1.return;
                if (!tmp) {
                  closure_1.return();
                }
                if (c5) {
                  throw subMilliseconds;
                }
              } catch (tmp8) {
                if (c5) {
                  throw subMilliseconds;
                } else {
                  throw tmp8;
                }
              }
            }
      };
      return obj;
    }
  }
  if (!Array.isArray(str)) {
    let arr;
    if (str) {
      if (typeof str === "string") {
        const _Array2 = Array;
        const self = this;
        const self2 = this;
        const array = new Array(length);
        let num3 = 0;
        arr = array;
        if (0 < str.length) {
          do {
            array[num3] = str[num3];
            num3 = num3 + 1;
            arr = array;
          } while (num3 < str.length);
        }
      } else {
        const _Object = Object;
        const callResult = toString.call(str);
        const substr = callResult.slice(8, -1);
        const tmp3 = "Object" === substr && str.constructor;
        let name = substr;
        if (tmp3) {
          name = str.constructor.name;
        }
        class F {
          constructor() {

          }
        }
        const _Array = Array;
        arr = Array.from(str);
      }
    }
    closure_1 = arr;
    if (!closure_1) {
      const _TypeError = TypeError;
      const self3 = this;
      const self4 = this;
      const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      const tmp8 = typeError;
      throw typeError;
    }
  }
  if (closure_1) {
    closure_0 = closure_1;
  }
  let closure_2 = 0;
  class F {
    constructor() {

    }
  }
  return {
    s: F,
    n() {
      let obj;
      if (closure_2 >= closure_0.length) {
        obj = { done: true };
      } else {
        obj = { done: false, value: tmp[+closure_2] };
        closure_2 = tmp3 + 1;
      }
      return obj;
    },
    e(arg0) {
      throw arg0;
    },
    f: F
  };
}
let code = code_mod;
if (!code) {
  let obj = { default: code };
  tmp3 = obj;
} else {
  tmp3 = code;
}
code = tmp3;
let subMilliseconds = subMilliseconds_mod;
if (!subMilliseconds) {
  let obj2 = { default: subMilliseconds };
  tmp5 = obj2;
} else {
  tmp5 = subMilliseconds;
}
subMilliseconds = tmp5;
let toDate = toDate_mod;
if (!toDate) {
  let obj3 = { default: toDate };
  tmp7 = obj3;
} else {
  tmp7 = toDate;
}
toDate = tmp7;
let assign = assign_mod;
if (!assign) {
  let obj4 = { default: assign };
  tmp9 = obj4;
} else {
  tmp9 = assign;
}
assign = tmp9;
if (!P) {
  let obj5 = { default: P };
  tmp11 = obj5;
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
  let obj8 = { default: requiredArgs };
  tmp17 = obj8;
} else {
  tmp17 = requiredArgs;
}
requiredArgs = tmp17;
const re12 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
const re13 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
const re14 = /^'([^]*?)'?$/;
const re15 = /''/g;
const re16 = /\S/;
const re17 = /[a-zA-Z]/;

export default function parse(arg0, arg1, arg2, locale) {
  let closure_2;
  let closure_8;
  _require = arg0;
  dependencyMap = locale;
  requiredArgs.default(3, arguments);
  code = String(arg0);
  const str = String(arg1);
  let tmp2 = _require;
  const defaultOptions = require("module_3963").getDefaultOptions();
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
  if (locale1.match) {
    let prop;
    const _default = toInteger.default;
    const tmp9 = toInteger;
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
    let num2 = 1;
    if (null !== prop) {
      num2 = 1;
      if (undefined !== prop) {
        num2 = prop;
      }
    }
    const _defaultResult = _default(num2);
    if (_defaultResult >= 1) {
      if (_defaultResult <= 7) {
        let weekStartsOn;
        const _default2 = tmp9.default;
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
        let num5 = 0;
        if (null !== weekStartsOn) {
          num5 = 0;
          if (undefined !== weekStartsOn) {
            num5 = weekStartsOn;
          }
        }
        const _default2Result = _default2(num5);
        if (_default2Result >= 0) {
          if (_default2Result <= 6) {
            let str5 = "";
            if ("" === str) {
              let defaultResult1;
              if ("" === code) {
                defaultResult1 = locale1.default(arg2);
              } else {
                const _Date4 = Date;
                const self13 = this;
                const self14 = this;
                defaultResult1 = new Date(NaN);
              }
              return defaultResult1;
            } else {
              let obj = { firstWeekContainsDate: _defaultResult, weekStartsOn: _default2Result, locale: locale1 };
              const self15 = this;
              const self16 = this;
              const dateToSystemTimezoneSetter = new tmp2(4261).DateToSystemTimezoneSetter();
              const items = [dateToSystemTimezoneSetter];
              const match = str.match(closure_13);
              const mapped = match.map((item) => {
                const first = item[0];
                let tmp2 = item;
                if (first in closure_6.default) {
                  tmp2 = closure_6.default[first](item, locale1.formatLong);
                }
                return tmp2;
              });
              toInteger = [];
              const str7 = mapped.join("");
              const obj8 = _createForOfIteratorHelper(str7.match(closure_12));
              try {
                function _loop() {
                  let date;
                  let date1;
                  let rest;
                  const tmp2 = null != locale && locale.useAdditionalWeekYearTokens || !throwProtectedError.isProtectedWeekYearToken(str);
                  if (!tmp2) {
                    throwProtectedError.throwProtectedError(iter2.value, iter2.value, closure_0);
                  }
                  const tmp10 = null != locale && locale.useAdditionalDayOfYearTokens || !throwProtectedError.isProtectedDayOfYearToken(str);
                  if (!tmp10) {
                    throwProtectedError.throwProtectedError(iter2.value, iter2.value, closure_0);
                  }
                  const str2 = str[0];
                  obj = parsers.parsers[str2];
                  if (obj) {
                    const incompatibleTokens = obj.incompatibleTokens;
                    const _Array = Array;
                    if (Array.isArray(incompatibleTokens)) {
                      const found = closure_8.find((token) => {
                        const hasItem = incompatibleTokens.includes(token.token) || token.token === str2;
                        return hasItem;
                      });
                      if (found) {
                        const _RangeError3 = RangeError;
                        const concat2 = "The format string mustn't contain `".concat;
                        const combined = "The format string mustn't contain `".concat(found.fullToken, "` and `");
                        const self9 = this;
                        const self10 = this;
                        const rangeError = new RangeError(combined.concat(str, "` at the same time"));
                        throw rangeError;
                      }
                    } else if ("*" === obj.incompatibleTokens) {
                      if (closure_8.length > 0) {
                        const _RangeError2 = RangeError;
                        const concat = "The format string mustn't contain `".concat;
                        const self5 = this;
                        const self6 = this;
                        const rangeError1 = new RangeError("The format string mustn't contain `".concat(str, "` and any other token at the same time"));
                        throw rangeError1;
                      }
                    }
                    const obj2 = { token: str2, fullToken: iter2.value };
                    closure_8.push(obj2);
                    const runResult = obj.run(rest, iter2.value, locale1.match, obj);
                    if (runResult) {
                      items.push(runResult.setter);
                      rest = runResult.rest;
                    } else {
                      const _Date2 = Date;
                      const self7 = this;
                      const self8 = this;
                      const obj3 = { v: date };
                      date = new Date(NaN);
                      return obj3;
                    }
                  } else if (str2.match(re17)) {
                    const _RangeError = RangeError;
                    const self3 = this;
                    const self4 = this;
                    const rangeError2 = new RangeError("Format string contains an unescaped latin alphabet character `" + str2 + "`");
                    throw rangeError2;
                  } else {
                    let str5 = "'";
                    if ("''" !== iter2.value) {
                      str5 = str;
                      if ("'" === str2) {
                        const str6 = iter2.value.match(re14)[1];
                        str5 = str6.replace(re15, "'");
                      }
                    }
                    if (0 !== rest.indexOf(str5)) {
                      const _Date = Date;
                      const self = this;
                      const self2 = this;
                      const obj4 = { v: date1 };
                      date1 = new Date(NaN);
                      return obj4;
                    } else {
                      rest = rest.slice(str5.length);
                    }
                  }
                }
                obj8.s();
                const iter = obj8.n();
                let iter2 = iter;
                let str6 = "object";
                if (!iter.done) {
                  const _loopResult = _loop();
                  while ("object" !== _typeof(_loopResult)) {
                    iter2 = obj8.n();
                  }
                  const v = _loopResult.v;
                  obj8.f();
                  return v;
                }
                obj8.f();
                if (code.length > 0) {
                  if (regex.test(code)) {
                    const _Date3 = Date;
                    const self11 = this;
                    const self12 = this;
                    let date = new Date(NaN);
                    return date;
                  }
                }
                const mapped1 = items.map((priority) => priority.priority);
                const sorted = mapped1.sort((arg0, arg1) => arg1 - arg0);
                let found = sorted.filter((item, index, arr) => arr.indexOf(item) === index);
                const mapped2 = found.map((item) => {
                  closure_0 = item;
                  const found = items.filter((priority) => priority.priority === closure_0);
                  return found.sort((subPriority, subPriority2) => subPriority2.subPriority - subPriority.subPriority);
                });
                const mapped3 = mapped2.map((item) => item[0]);
                const defaultResult2 = locale1.default(arg2);
                const _isNaN = isNaN;
                if (isNaN(defaultResult2.getTime())) {
                  let _Date2 = Date;
                  let self9 = this;
                  let self10 = this;
                  let date1 = new Date(NaN);
                  return date1;
                } else {
                  let defaultResult3 = str.default(defaultResult2, items.default(defaultResult2));
                  let obj2 = {};
                  let obj4 = _createForOfIteratorHelper(mapped3);
                  try {
                    obj4.s();
                    const iter3 = obj4.n();
                    let iter4 = iter3;
                    if (!iter3.done) {
                      const value = iter4.value;
                      const obj5 = value;
                      while (value.validate(defaultResult3, obj)) {
                        let result = obj5.set(defaultResult3, obj2, obj);
                        let tmp48 = result;
                        let _Array = Array;
                        if (Array.isArray(result)) {
                          defaultResult3 = tmp48[0];
                          let defaultResult4 = iter2.default(obj2, tmp48[1]);
                        } else {
                          defaultResult3 = tmp48;
                        }
                        let iter5 = obj4.n();
                        iter4 = iter5;
                      }
                      let _Date = Date;
                      let self7 = this;
                      let self8 = this;
                      const date2 = new Date(NaN);
                      obj4.f();
                      return date2;
                    }
                    obj4.f();
                    return defaultResult3;
                  } catch (tmp53) {
                    obj4.f();
                    throw tmp53;
                  }
                }
              } catch (tmp59) {
                obj8.f();
                throw tmp59;
              }
            }
          }
        }
        let _RangeError3 = RangeError;
        let self5 = this;
        let self6 = this;
        let rangeError = new RangeError("weekStartsOn must be between 0 and 6 inclusively");
        throw rangeError;
      }
    }
    let _RangeError2 = RangeError;
    let self3 = this;
    let self4 = this;
    let rangeError1 = new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    throw rangeError1;
  } else {
    let _RangeError = RangeError;
    let self = this;
    let str2 = "locale must contain match property";
    let self2 = this;
    let rangeError2 = new RangeError("locale must contain match property");
    throw rangeError2;
  }
};