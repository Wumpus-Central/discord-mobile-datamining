// _runtime/metro/03701__typeof.js
import code from "code";
import subMilliseconds from "subMilliseconds";
import _typeof from "_typeof";
import assign from "assign";
import dateLongFormatter from "dateLongFormatter";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";
import toInteger from "toInteger";
import requiredArgs from "requiredArgs";
import { getDefaultOptions } from "../03404_getDefaultOptions.js";

function _typeof(arg0) {
  if (typeof Symbol === "function") {
    let _Symbol = Symbol;
    if (typeof Symbol.iterator === "symbol") {
      function _typeof(arg0) {
        return typeof arg0;
      }
    }
    return _typeof(arg0);
  }
  _typeof = function _typeof(arg0) {
    if (arg0) {
      const _Symbol = Symbol;
      if (typeof Symbol === "function") {
        const _Symbol3 = Symbol;
        if (arg0.constructor === Symbol) {
          const _Symbol2 = Symbol;
          let str = "symbol";
        }
        return str;
      }
    }
    str = typeof arg0;
  };
}
function _createForOfIteratorHelper(str) {
  let closure_0 = str;
  if (typeof Symbol !== "undefined") {
    const _Symbol = Symbol;
    if (null != str[Symbol.iterator]) {
      let c4 = true;
      let c5 = false;
      let obj = { s: null, n: null, e: null, f: null };
      obj[0] = function s() {
        let closure_1 = lib[Symbol.iterator]();
      };
      obj[1] = function n() {
        const iter = arr.next();
        const done = iter.done;
        return iter;
      };
      obj[2] = function e(arg0) {
        let c5 = true;
        let closure_3 = arg0;
      };
      obj[3] = function f() {
        try {
          let tmp = c4;
          if (!c4) {
            tmp = null == arr.return;
          }
          if (!tmp) {
            arr.return();
          }
          if (c5) {
            throw closure_3;
          }
        } catch (tmp8) {
          if (c5) {
            throw closure_3;
          } else {
            throw tmp8;
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
        const _Array3 = Array;
        let array = new Array(length2);
        let num5 = 0;
        arr = array;
        if (0 < str.length) {
          do {
            array[num5] = str[num5];
            num5 = num5 + 1;
            arr = array;
          } while (num5 < length2);
        }
      } else {
        const _Object = Object;
        const call = toString.call;
        arr = typeof call === "unknown" ? toString() : call(str);
        const substr = arr.slice(8, -1);
        let name = substr;
        if (tmp3) {
          name = str.constructor.name;
        }
        class F {
          constructor() {
            return;
          }
        }
        if ("Map" !== name) {
          if ("Set" !== name) {
            if ("Arguments" === name) {
              const _Array = Array;
              array = new Array(length);
              let num3 = 0;
              arr = array;
              if (0 < str.length) {
                do {
                  array[num3] = str[num3];
                  num3 = num3 + 1;
                  arr = array;
                } while (num3 < length);
              }
            } else {
              const obj2 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            }
          }
        }
        const _Array2 = Array;
        arr = Array.from(str);
        tmp3 = "Object" === substr && str.constructor;
      }
    }
    if (!arr) {
      const _TypeError = TypeError;
      const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      throw typeError;
    }
  }
  if (arr) {
    closure_0 = arr;
  }
  let c2 = 0;
  class F {
    constructor() {
      return;
    }
  }
  obj = {
    s: F,
    n() {
      if (closure_2 >= lib.length) {
        let obj = { done: true };
      } else {
        obj = { done: false, value: null };
        closure_2 = tmp3 + 1;
        obj[1] = tmp[+closure_2];
      }
      return obj;
    },
    e(arg0) {
      throw arg0;
    },
    f: F
  };
  return obj;
}
if (!code) {
  let obj = { default: null };
  obj[0] = code;
  let tmp3 = obj;
} else {
  tmp3 = code;
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
if (!assign) {
  obj1 = { default: null };
  obj1[0] = assign;
  let tmp9 = obj1;
} else {
  tmp9 = assign;
}
let c5 = tmp9;
if (!dateLongFormatter) {
  let obj2 = { default: null };
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
const re12 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
const re13 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
const re14 = /^'([^]*?)'?$/;
const re15 = /''/g;
const re16 = /\S/;
const re17 = /[a-zA-Z]/;

export default function parse(arg0, arg1, arg2, locale) {
  const _require = arg0;
  const dependencyMap = locale;
  tmp17.default(3, arguments);
  let tmp3 = String(arg0);
  const str = String(arg1);
  tmp3 = dependencyMap;
  const defaultOptions = _getDefaultOptions.getDefaultOptions();
  locale = undefined;
  if (null != locale) {
    locale = locale.locale;
  }
  if (null === locale) {
    locale = defaultOptions.locale;
  }
  if (null === locale) {
    locale = tmp3.default;
  }
  if (locale.match) {
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
    let num2 = 1;
    if (null !== prop) {
      num2 = 1;
      if (undefined !== prop) {
        num2 = prop;
      }
    }
    const defaultResult1 = tmp15.default(num2);
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
        let num5 = 0;
        if (null !== weekStartsOn) {
          num5 = 0;
          if (undefined !== weekStartsOn) {
            num5 = weekStartsOn;
          }
        }
        const defaultResult2 = tmp15.default(num5);
        if (defaultResult2 >= 0) {
          if (defaultResult2 <= 6) {
            if ("" === str) {
              if ("" === tmp3) {
                let defaultResult3 = locale.default(arg2);
              } else {
                const _Date4 = Date;
                defaultResult3 = new Date(NaN);
              }
              return defaultResult3;
            } else {
              let obj = { firstWeekContainsDate: null, weekStartsOn: null, locale: null };
              obj[0] = defaultResult1;
              obj[1] = defaultResult2;
              obj[2] = locale;
              const dateToSystemTimezoneSetter = new tmp2(3702).DateToSystemTimezoneSetter();
              const items = [dateToSystemTimezoneSetter];
              const match = str.match(closure_13);
              const mapped = match.map((arg0) => {
                const first = arg0[0];
                let tmp2 = arg0;
                if (first in obj.default) {
                  tmp2 = obj.default[first](arg0, locale.formatLong);
                }
                return tmp2;
              });
              tmp15 = [];
              const obj11 = _createForOfIteratorHelper(mapped.join("").match(closure_12));
              try {
                function _loop() {
                  let tmp2 = null != incompatibleTokens && tmp.useAdditionalWeekYearTokens;
                  if (!tmp2) {
                    tmp2 = !callback(locale[10]).isProtectedWeekYearToken(str);
                  }
                  if (!tmp2) {
                    callback(locale[10]).throwProtectedError(str, str, str2);
                  }
                  let tmp10 = null != tmp && tmp.useAdditionalDayOfYearTokens;
                  if (!tmp10) {
                    tmp10 = !callback(locale[10]).isProtectedDayOfYearToken(str);
                  }
                  if (!tmp10) {
                    callback(locale[10]).throwProtectedError(str, str, str2);
                  }
                  str2 = str[0];
                  let obj = callback(locale[11]).parsers[str2];
                  if (obj) {
                    incompatibleTokens = obj.incompatibleTokens;
                    const _Array = Array;
                    if (Array.isArray(incompatibleTokens)) {
                      const found = arr2.find((token) => {
                        let hasItem = incompatibleTokens.includes(token.token);
                        if (!hasItem) {
                          hasItem = token.token === str2;
                        }
                        return hasItem;
                      });
                      if (found) {
                        const _RangeError3 = RangeError;
                        const concat2 = "The format string mustn't contain `".concat;
                        const combined = "The format string mustn't contain `".concat(found.fullToken, "` and `");
                        const rangeError = new RangeError(combined.concat(str, "` at the same time"));
                        throw rangeError;
                      }
                    } else if ("*" === obj.incompatibleTokens) {
                      if (arr2.length > 0) {
                        const _RangeError2 = RangeError;
                        const concat = "The format string mustn't contain `".concat;
                        const rangeError1 = new RangeError("The format string mustn't contain `".concat(str, "` and any other token at the same time"));
                        throw rangeError1;
                      }
                    }
                    obj = { token: null, fullToken: null };
                    obj[0] = str2;
                    obj[1] = str;
                    let arr = arr2.push(obj);
                    const runResult = obj.run(arr, str, locale.match, obj);
                    if (runResult) {
                      arr = items.push(runResult.setter);
                      arr = runResult.rest;
                    } else {
                      obj = { v: null };
                      const _Date2 = Date;
                      const date = new Date(NaN);
                      obj[0] = date;
                      return obj;
                    }
                  } else if (str2.match(outer1_17)) {
                    const _RangeError = RangeError;
                    const rangeError2 = new RangeError("Format string contains an unescaped latin alphabet character `" + str2 + "`");
                    throw rangeError2;
                  } else {
                    let str5 = "'";
                    if ("''" !== str) {
                      str5 = str;
                      if ("'" === str2) {
                        str5 = str.match(outer1_14)[1].replace(outer1_15, "'");
                        const str6 = str.match(outer1_14)[1];
                      }
                    }
                    if (0 !== arr.indexOf(str5)) {
                      const obj1 = { v: null };
                      const _Date = Date;
                      const date1 = new Date(NaN);
                      obj1[0] = date1;
                      return obj1;
                    } else {
                      arr = arr.slice(str5.length);
                    }
                  }
                }
                obj11.s();
                const iter = obj11.n();
                let iter2 = iter;
                if (!iter.done) {
                  const _loopResult = _loop();
                  while ("object" !== _typeof(_loopResult)) {
                    iter2 = obj11.n();
                  }
                  obj11.f();
                  return _loopResult.v;
                }
                obj11.f();
                if (tmp3.length > 0) {
                  if (regex.test(tmp3)) {
                    const _Date3 = Date;
                    let date = new Date(NaN);
                    return date;
                  }
                }
                const mapped1 = items.map((priority) => priority.priority);
                const sorted = mapped1.sort((arg0, arg1) => arg1 - arg0);
                let found = sorted.filter((arg0, arg1, arr) => arr.indexOf(arg0) === arg1);
                const mapped2 = found.map((arg0) => {
                  let closure_0 = arg0;
                  const found = items.filter((priority) => priority.priority === closure_0);
                  return found.sort((subPriority, subPriority2) => subPriority2.subPriority - subPriority.subPriority);
                });
                const mapped3 = mapped2.map((arg0) => arg0[0]);
                const defaultResult4 = locale.default(arg2);
                const _isNaN = isNaN;
                if (isNaN(defaultResult4.getTime())) {
                  let _Date2 = Date;
                  let date1 = new Date(NaN);
                  return date1;
                } else {
                  let defaultResult5 = str.default(defaultResult4, items.default(defaultResult4));
                  obj = {};
                  const obj7 = _createForOfIteratorHelper(mapped3);
                  try {
                    obj7.s();
                    const iter3 = obj7.n();
                    let iter4 = iter3;
                    if (!iter3.done) {
                      const value = iter4.value;
                      while (value.validate(defaultResult5, obj)) {
                        let tmp52 = value;
                        let tmp53 = defaultResult5;
                        let result = value.set(defaultResult5, obj, obj);
                        let tmp55 = result;
                        let _Array = Array;
                        let tmp56 = result;
                        if (Array.isArray(result)) {
                          defaultResult5 = tmp55[0];
                          let tmp57 = iter2;
                          let defaultResult6 = iter2.default(obj, tmp55[1]);
                        } else {
                          defaultResult5 = tmp55;
                        }
                        let iter5 = obj7.n();
                        iter4 = iter5;
                      }
                      let _Date = Date;
                      const date2 = new Date(NaN);
                      obj7.f();
                      return date2;
                    }
                    obj7.f();
                    return defaultResult5;
                  } catch (tmp60) {
                    obj2.f();
                    throw tmp60;
                  }
                }
              } catch (tmp70) {
                obj.f();
                throw tmp70;
              }
              const str7 = mapped.join("");
            }
          }
        }
        let _RangeError3 = RangeError;
        let rangeError = new RangeError("weekStartsOn must be between 0 and 6 inclusively");
        throw rangeError;
      }
    }
    let _RangeError2 = RangeError;
    tmp15 = new.target;
    let rangeError1 = new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    throw rangeError1;
  } else {
    let _RangeError = RangeError;
    let rangeError2 = new RangeError("locale must contain match property");
    throw rangeError2;
  }
  tmp2 = _require;
};
export default exports.default;