// _runtime/metro/03798__typeof.js
import Parser2 from "../03782_Parser.js";

let _createSuperInternal = require;
let closure_1 = dependencyMap;
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
function _setPrototypeOf(DayOfYearParser, Parser) {
  _setPrototypeOf = Object.setPrototypeOf;
  if (!_setPrototypeOf) {
    _setPrototypeOf = function _setPrototypeOf(DayOfYearParser, Parser) {
      DayOfYearParser.__proto__ = Parser;
      return DayOfYearParser;
    };
  }
  return _setPrototypeOf(DayOfYearParser, Parser);
}
function _getPrototypeOf(arg0) {
  if (Object.setPrototypeOf) {
    let _Object = Object;
    _getPrototypeOf = Object.getPrototypeOf;
  } else {
    _getPrototypeOf = function _getPrototypeOf(arg0) {
      let __proto__ = arg0.__proto__;
      if (!__proto__) {
        const _Object = Object;
        __proto__ = Object.getPrototypeOf(arg0);
      }
      return __proto__;
    };
  }
  return _getPrototypeOf(arg0);
}
const Parser = Parser2.Parser;
_createSuperInternal = undefined;
class DayOfYearParser {
  constructor() {
    if (this instanceof closure_1) {
      length = arguments.length;
      _Array = Array;
      tmp6 = new.target;
      tmp7 = new.target;
      tmp8 = length;
      array = new Array(length);
      tmp10 = array;
      num = 0;
      num2 = 1;
      if (0 < length) {
        do {
          array[num] = arguments[num];
          num = num + 1;
        } while (num < length);
      }
      tmp11 = _createSuperInternal;
      call = _createSuperInternal.call;
      items = [];
      items[0] = tmp;
      applyResult = call.apply(_createSuperInternal, items.concat(array));
      tmp13 = undefined === applyResult;
      if (tmp13) {
        _ReferenceError3 = ReferenceError;
        tmp25 = new.target;
        str7 = "this hasn't been initialised - super() hasn't been called";
        tmp26 = new.target;
        referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
        tmp28 = referenceError;
        throw referenceError;
      } else {
        str2 = "priority";
        if ("priority" in applyResult) {
          _Object = Object;
          definePropertyResult = Object.defineProperty(applyResult, "priority", { value: 90, enumerable: true, configurable: true, writable: true });
        } else {
          num3 = 90;
          applyResult.priority = 90;
        }
        if (tmp13) {
          _ReferenceError2 = ReferenceError;
          tmp21 = new.target;
          str6 = "this hasn't been initialised - super() hasn't been called";
          tmp22 = new.target;
          referenceError1 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
          tmp24 = referenceError1;
          throw referenceError1;
        } else {
          str3 = "subpriority";
          if ("subpriority" in applyResult) {
            _Object2 = Object;
            definePropertyResult1 = Object.defineProperty(applyResult, "subpriority", { value: 1, enumerable: true, configurable: true, writable: true });
          } else {
            applyResult.subpriority = 1;
          }
          if (tmp13) {
            _ReferenceError = ReferenceError;
            tmp17 = new.target;
            str5 = "this hasn't been initialised - super() hasn't been called";
            tmp18 = new.target;
            referenceError2 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
            tmp20 = referenceError2;
            throw referenceError2;
          } else {
            items1 = ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"];
            str4 = "incompatibleTokens";
            if ("incompatibleTokens" in applyResult) {
              _Object3 = Object;
              obj = { value: null, enumerable: true, configurable: true, writable: true };
              obj[0] = items1;
              definePropertyResult2 = Object.defineProperty(applyResult, "incompatibleTokens", obj);
            } else {
              applyResult.incompatibleTokens = items1;
            }
            return applyResult;
          }
        }
      }
    } else {
      _TypeError = TypeError;
      tmp2 = new.target;
      str = "Cannot call a class as a function";
      tmp3 = new.target;
      typeError = new TypeError("Cannot call a class as a function");
      tmp5 = typeError;
      throw typeError;
    }
  }
}
closure_1 = DayOfYearParser;
if (typeof Parser !== "function") {
  if (null !== Parser) {
    let _TypeError = TypeError;
    let typeError = new TypeError("Super expression must either be null or a function");
    throw typeError;
  }
}
let prototype = Parser;
if (Parser) {
  prototype = Parser.prototype;
}
let obj = { value: DayOfYearParser, writable: true, configurable: true };
DayOfYearParser.prototype = Object.create(prototype, { constructor: obj });
if (Parser) {
  _setPrototypeOf(DayOfYearParser, Parser);
}
_createSuperInternal = DayOfYearParser;
let num = 0;
closure_1 = (function _isNativeReflectConstruct() {
  if (typeof Reflect !== "undefined") {
    const _Reflect3 = Reflect;
    if (Reflect.construct) {
      const _Reflect = Reflect;
      if (Reflect.construct.sham) {
        return false;
      } else {
        const _Proxy = Proxy;
        if (typeof Proxy === "function") {
          return true;
        } else {
          try {
            const _Boolean = Boolean;
            const call = valueOf.call;
            const _Reflect2 = Reflect;
            const _Boolean2 = Boolean;
            if (typeof call === "unknown") {
              valueOf();
            } else {
              call(constructResult);
            }
            return true;
          } catch (err) {
            return false;
          }
        }
      }
    }
  }
  return false;
})();
_createSuperInternal = function _createSuperInternal() {
  const self = this;
  const obj = _getPrototypeOf(_createSuperInternal);
  if (closure_1) {
    const _Reflect = Reflect;
    let constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
  } else {
    constructResult = obj(...arguments);
  }
  if (!constructResult) {
    let tmp8 = self;
    if (undefined === self) {
      const _ReferenceError = ReferenceError;
      const referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
      throw referenceError;
    }
  } else {
    tmp8 = constructResult;
    if ("object" !== _typeof(constructResult)) {
      tmp8 = constructResult;
    }
  }
  return tmp8;
};
obj = {
  key: "parse",
  value: function parse(arg0, arg1, ordinalNumber) {
    if ("D" !== arg1) {
      if ("DD" !== arg1) {
        if ("Do" === arg1) {
          return ordinalNumber.ordinalNumber(arg0, { unit: "date" });
        } else {
          return _createSuperInternal(3784).parseNDigits(arg1.length, arg0);
        }
      }
    }
    return _createSuperInternal(3784).parseNumericPattern(_createSuperInternal(3785).numericPatterns.dayOfYear, arg0);
  }
};
let items = [
  obj,
  {
    key: "validate",
    value: function validate(getUTCFullYear) {
      const uTCFullYear = getUTCFullYear.getUTCFullYear();
      let tmp2 = arg1 >= 1;
      if (_createSuperInternal(3784).isLeapYearIndex(uTCFullYear)) {
        if (tmp2) {
          tmp2 = arg1 <= 366;
        }
        let tmp3 = tmp2;
      } else {
        tmp3 = tmp2;
        if (tmp2) {
          tmp3 = arg1 <= 365;
        }
      }
      return tmp3;
    }
  },
  {
    key: "set",
    value: function set(setUTCMonth) {
      setUTCMonth.setUTCMonth(0, arg2);
      setUTCMonth.setUTCHours(0, 0, 0, 0);
      return setUTCMonth;
    }
  }
];
if (0 < items.length) {
  do {
    let tmp5 = items[num];
    let flag = tmp5.enumerable;
    let tmp6 = num;
    if (!flag) {
      flag = false;
    }
    tmp5.enumerable = flag;
    tmp5.configurable = true;
    if ("value" in tmp5) {
      tmp5.writable = true;
    }
    let _Object = Object;
    let definePropertyResult1 = Object.defineProperty(tmp4, tmp5.key, tmp5);
    num = num + 1;
  } while (num < items.length);
}

export { DayOfYearParser };