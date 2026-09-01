// === Module 3897: _typeof ===

// Module 3897 (_typeof)
import Parser2 from "Parser" /* 3878 */;
import setUTCDay from "setUTCDay" /* 3896 */;

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
function _setPrototypeOf(LocalDayParser, Parser) {
  _setPrototypeOf = Object.setPrototypeOf;
  if (!_setPrototypeOf) {
    _setPrototypeOf = function _setPrototypeOf(LocalDayParser, Parser) {
      LocalDayParser.__proto__ = Parser;
      return LocalDayParser;
    };
  }
  return _setPrototypeOf(LocalDayParser, Parser);
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
if (!setUTCDay) {
  let obj = { default: null };
  obj[0] = setUTCDay;
  let tmp3 = obj;
} else {
  tmp3 = setUTCDay;
}
setUTCDay = tmp3;
const Parser = Parser2.Parser;
_createSuperInternal = undefined;
class LocalDayParser {
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
        _ReferenceError2 = ReferenceError;
        tmp20 = new.target;
        str5 = "this hasn't been initialised - super() hasn't been called";
        tmp21 = new.target;
        referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
        tmp23 = referenceError;
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
          _ReferenceError = ReferenceError;
          tmp16 = new.target;
          str4 = "this hasn't been initialised - super() hasn't been called";
          tmp17 = new.target;
          referenceError1 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
          tmp19 = referenceError1;
          throw referenceError1;
        } else {
          items1 = ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"];
          str3 = "incompatibleTokens";
          if ("incompatibleTokens" in applyResult) {
            _Object2 = Object;
            obj = { value: null, enumerable: true, configurable: true, writable: true };
            obj[0] = items1;
            definePropertyResult1 = Object.defineProperty(applyResult, "incompatibleTokens", obj);
          } else {
            applyResult.incompatibleTokens = items1;
          }
          return applyResult;
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
closure_1 = LocalDayParser;
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
obj = { value: LocalDayParser, writable: true, configurable: true };
LocalDayParser.prototype = Object.create(prototype, { constructor: obj });
if (Parser) {
  _setPrototypeOf(LocalDayParser, Parser);
}
_createSuperInternal = LocalDayParser;
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
    _createSuperInternal = arg3;
    function valueCallback(arg0) {
      return (arg0 + weekStartsOn.weekStartsOn + 6) % 7 + 7 * Math.floor((arg0 - 1) / 7);
    }
    if ("e" !== arg1) {
      if ("ee" !== arg1) {
        if ("eo" === arg1) {
          return _createSuperInternal(3880).mapValue(ordinalNumber.ordinalNumber(arg0, { unit: "day" }), valueCallback);
        } else if ("eee" === arg1) {
          return ordinalNumber.day(arg0, { width: "abbreviated", context: "formatting" }) || ordinalNumber.day(arg0, { width: "short", context: "formatting" }) || ordinalNumber.day(arg0, { width: "narrow", context: "formatting" });
        } else if ("eeeee" === arg1) {
          return ordinalNumber.day(arg0, { width: "narrow", context: "formatting" });
        } else if ("eeeeee" === arg1) {
          return ordinalNumber.day(arg0, { width: "short", context: "formatting" }) || ordinalNumber.day(arg0, { width: "narrow", context: "formatting" });
        } else {
          return ordinalNumber.day(arg0, { width: "wide", context: "formatting" }) || ordinalNumber.day(arg0, { width: "abbreviated", context: "formatting" }) || ordinalNumber.day(arg0, { width: "short", context: "formatting" }) || ordinalNumber.day(arg0, { width: "narrow", context: "formatting" });
        }
      }
    }
    return _createSuperInternal(3880).mapValue(_createSuperInternal(3880).parseNDigits(arg1.length, arg0), valueCallback);
  }
};
let items = [
  obj,
  {
    key: "validate",
    value: function validate(arg0, arg1) {
      let tmp = arg1 >= 0;
      if (tmp) {
        tmp = arg1 <= 6;
      }
      return tmp;
    }
  },
  {
    key: "set",
    value: function set(arg0, arg1, arg2, arg3) {
      const defaultResult = setUTCDay.default(arg0, arg2, arg3);
      defaultResult.setUTCHours(0, 0, 0, 0);
      return defaultResult;
    }
  }
];
if (0 < items.length) {
  do {
    let tmp7 = items[num];
    let flag = tmp7.enumerable;
    let tmp8 = num;
    if (!flag) {
      flag = false;
    }
    tmp7.enumerable = flag;
    tmp7.configurable = true;
    if ("value" in tmp7) {
      tmp7.writable = true;
    }
    let _Object = Object;
    let definePropertyResult1 = Object.defineProperty(tmp6, tmp7.key, tmp7);
    num = num + 1;
  } while (num < items.length);
}

export { LocalDayParser };