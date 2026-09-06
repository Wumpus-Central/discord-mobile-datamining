// _runtime/metro/03952__.js
import throwProtectedError from "../03897_throwProtectedError.js";
import parsers from "../03954_parsers.js";
import code from "03896__.js";
import subMilliseconds from "../03883_subMilliseconds.js";
import _typeof from "03650__.js";
import assign from "../03900_assign.js";
import dateLongFormatter from "../03895_dateLongFormatter.js";
import 03813__ from "03813__.js";
import 03654__ from "03654__.js";
import requiredArgs from "../03651_requiredArgs.js";

function _typeof(arg0) {
  if (typeof Symbol === "function") {
    let _Symbol = Symbol;
    if (typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(arg0) {
        return typeof arg0;
      };
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
function _createForOfIteratorHelper(str, arg1) {
  closure_0 = str;
  if (typeof Symbol !== "undefined") {
    const _Symbol = Symbol;
    if (null != str[Symbol.iterator]) {
      let done = true;
      c5 = false;
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
              closure_3 = arg0;
            },
        f() {
              try {
                let tmp = done;
                if (!done) {
                  tmp = null == closure_1.return;
                }
                if (!tmp) {
                  closure_1.return();
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
        tmp3 = "Object" === substr && "Object".constructor;
      }
    }
    closure_1 = arr;
    if (!arr) {
      const _TypeError = TypeError;
      const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      throw typeError;
    }
  }
  if (closure_1) {
    closure_0 = closure_1;
  }
  closure_2 = 0;
  class F {
    constructor() {
      return;
    }
  }
  obj = {
    s: F,
    n() {
      if (closure_2 >= closure_0.length) {
        let obj = { done: true };
      } else {
        obj = { done: false, value: null };
        closure_2 = tmp3 + 1;
        obj.value = tmp[+closure_2];
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
  let obj = { default: code };
  let tmp3 = obj;
} else {
  tmp3 = code;
}
code = tmp3;
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
if (!assign) {
  let obj1 = { default: assign };
  let tmp9 = obj1;
} else {
  tmp9 = assign;
}
assign = tmp9;
if (!dateLongFormatter) {
  let obj2 = { default: dateLongFormatter };
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
const re12 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
const re13 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
const re14 = /^'([^]*?)'?$/;
const re15 = /''/g;
const re16 = /\S/;
const re17 = /[a-zA-Z]/;

export default function parse(arg0, arg1, arg2, locale) {
  _require = arg0;
  dependencyMap = locale;
  requiredArgs.default(3, arguments);
  closure_2 = String(arg0);
  const str = String(arg1);
  const defaultOptions = require("03655__.js").getDefaultOptions();
  locale = undefined;
  if (null != locale) {
    locale = locale.locale;
  }
  if (null === locale) {
    locale = defaultOptions.locale;
  }
  if (null === locale) {
    locale = closure_2.default;
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
    const defaultResult1 = module_3654.default(num2);
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
        const defaultResult2 = module_3654.default(num5);
        if (defaultResult2 >= 0) {
          if (defaultResult2 <= 6) {
            if ("" === str) {
              if ("" === closure_2) {
                let defaultResult3 = locale.default(arg2);
              } else {
                const _Date4 = Date;
                defaultResult3 = new Date(NaN);
              }
              return defaultResult3;
            } else {
              let obj = { firstWeekContainsDate: defaultResult1, weekStartsOn: defaultResult2, locale };
              const dateToSystemTimezoneSetter = new tmp2(3953).DateToSystemTimezoneSetter();
              const items = [dateToSystemTimezoneSetter];
              const match = str.match(closure_13);
              const mapped = match.map((item) => {
                const first = item[0];
                let tmp2 = item;
                if (first in dateLongFormatter.default) {
                  tmp2 = dateLongFormatter.default[first](item, locale.formatLong);
                }
                return tmp2;
              });
              module_3654 = [];
              const obj11 = _createForOfIteratorHelper(mapped.join("").match(closure_12));
              try {
                function _loop() {
                  let tmp2 = null != locale && locale.useAdditionalWeekYearTokens;
                  if (!tmp2) {
                    tmp2 = !throwProtectedError.isProtectedWeekYearToken(str);
                  }
                  if (!tmp2) {
                    throwProtectedError.throwProtectedError(str, str, closure_0);
                  }
                  let tmp10 = null != locale && locale.useAdditionalDayOfYearTokens;
                  if (!tmp10) {
                    tmp10 = !throwProtectedError.isProtectedDayOfYearToken(str);
                  }
                  if (!tmp10) {
                    throwProtectedError.throwProtectedError(str, str, closure_0);
                  }
                  obj = parsers.parsers[str2];
                  if (obj) {
                    const incompatibleTokens = obj.incompatibleTokens;
                    const _Array = Array;
                    if (Array.isArray(incompatibleTokens)) {
                      const found = closure_8.find((token) => {
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
                      if (closure_8.length > 0) {
                        const _RangeError2 = RangeError;
                        const concat = "The format string mustn't contain `".concat;
                        const rangeError1 = new RangeError("The format string mustn't contain `".concat(str, "` and any other token at the same time"));
                        throw rangeError1;
                      }
                    }
                    obj = { token: str2, fullToken: str };
                    closure_8.push(obj);
                    const runResult = obj.run(rest, str, locale.match, obj);
                    if (runResult) {
                      items.push(runResult.setter);
                      rest = runResult.rest;
                    } else {
                      obj = { v: null };
                      const _Date2 = Date;
                      const date = new Date(NaN);
                      obj.v = date;
                      return obj;
                    }
                  } else if (str2.match(re17)) {
                    const _RangeError = RangeError;
                    const rangeError2 = new RangeError("Format string contains an unescaped latin alphabet character `" + str2 + "`");
                    throw rangeError2;
                  } else {
                    let str5 = "'";
                    if ("''" !== str) {
                      str5 = str;
                      if ("'" === str2) {
                        str5 = str.match(re14)[1].replace(re15, "'");
                        const str6 = str.match(re14)[1];
                      }
                    }
                    if (0 !== rest.indexOf(str5)) {
                      const obj1 = { v: null };
                      const _Date = Date;
                      const date1 = new Date(NaN);
                      obj1.v = date1;
                      return obj1;
                    } else {
                      rest = rest.slice(str5.length);
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
                if (closure_2.length > 0) {
                  if (regex.test(closure_2)) {
                    const _Date3 = Date;
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
                      value = iter4.value;
                      while (value.validate(defaultResult5, obj)) {
                        let result = value.set(defaultResult5, obj, obj);
                        let tmp55 = result;
                        let _Array = Array;
                        if (Array.isArray(result)) {
                          defaultResult5 = tmp55[0];
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