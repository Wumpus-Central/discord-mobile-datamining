// === Module 4283: LocalDayParser ===

// Module 4283 (LocalDayParser)
import Parser2 from "Parser" /* 4264 */;
import dayPeriodEnumToHours from "dayPeriodEnumToHours" /* 4266 */;
import setUTCDay_mod from "setUTCDay" /* 4282 */;

let tmp3;
function _isNativeReflectConstruct() {
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
            const _Reflect2 = Reflect;
            const _Boolean2 = Boolean;
            valueOf.call(Reflect.construct(Boolean, [], () => {

            }));
            return true;
          } catch (err) {
            return false;
          }
        }
      }
    }
  }
  return false;
}
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
function _setPrototypeOf(LocalDayParser, Parser) {
  _setPrototypeOf = Object.setPrototypeOf || (function _setPrototypeOf(LocalDayParser, Parser) {
    LocalDayParser.__proto__ = Parser;
    return LocalDayParser;
  });
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
let setUTCDay = setUTCDay_mod;
if (!setUTCDay) {
  let obj = { default: setUTCDay };
  tmp3 = obj;
} else {
  tmp3 = setUTCDay;
}
setUTCDay = tmp3;
const Parser = Parser2.Parser;
let _createSuperInternal;
class LocalDayParser {
  constructor() {
    if (this instanceof LocalDayParser) {
      let num;
      const length = arguments.length;
      const _Array = Array;
      const self3 = this;
      const self4 = this;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      const call = _createSuperInternal.call;
      const items = [tmp];
      const applyResult = call.apply(_createSuperInternal, items.concat(array));
      if (undefined === applyResult) {
        const _ReferenceError2 = ReferenceError;
        const self7 = this;
        const self8 = this;
        const referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
        throw referenceError;
      } else {
        if ("priority" in applyResult) {
          const _Object = Object;
          Object.defineProperty(applyResult, "priority", { value: 90, enumerable: true, configurable: true, writable: true });
        } else {
          applyResult.priority = 90;
        }
        if (undefined === applyResult) {
          const _ReferenceError = ReferenceError;
          const self5 = this;
          const self6 = this;
          const referenceError1 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
          throw referenceError1;
        } else {
          const items1 = ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"];
          if ("incompatibleTokens" in applyResult) {
            const _Object2 = Object;
            const obj = { value: items1, enumerable: true, configurable: true, writable: true };
            Object.defineProperty(applyResult, "incompatibleTokens", obj);
          } else {
            applyResult.incompatibleTokens = items1;
          }
          return applyResult;
        }
      }
    } else {
      const _TypeError = TypeError;
      const self = this;
      const self2 = this;
      const typeError = new TypeError("Cannot call a class as a function");
      throw typeError;
    }
  }
}
if (typeof Parser !== "function") {
  if (null !== Parser) {
    let _TypeError = TypeError;
    let self = this;
    let str = "Super expression must either be null or a function";
    let self2 = this;
    let typeError = new TypeError("Super expression must either be null or a function");
    throw typeError;
  }
}
let prototype = Parser;
let _Object = Object;
if (Parser) {
  prototype = Parser.prototype;
}
const obj2 = { constructor: { value: LocalDayParser, writable: true, configurable: true } };
LocalDayParser.prototype = create(prototype, obj2);
if (Parser) {
  _setPrototypeOf(LocalDayParser, Parser);
}
let num = 0;
let closure_1 = _isNativeReflectConstruct();
_createSuperInternal = function _createSuperInternal() {
  let constructResult;
  let tmp9;
  const self = this;
  const obj = _getPrototypeOf(_createSuperInternal);
  if (LocalDayParser) {
    const _Reflect = Reflect;
    constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
  } else {
    constructResult = obj(...arguments);
  }
  if (!constructResult) {
    tmp9 = self;
    if (undefined === self) {
      const _ReferenceError = ReferenceError;
      const self2 = this;
      const self3 = this;
      const referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
      throw referenceError;
    }
  } else {
    tmp9 = constructResult;
    if ("object" !== _typeof(constructResult)) {
      tmp9 = constructResult;
    }
  }
  return tmp9;
};
const entry = {
  key: "parse",
  value: function parse(arg0, arg1, ordinalNumber, arg3) {
    let closure_0 = arg3;
    function valueCallback(arg0) {
      return (arg0 + weekStartsOn.weekStartsOn + 6) % 7 + 7 * Math.floor((arg0 - 1) / 7);
    }
    if ("e" !== arg1) {
      if ("ee" !== arg1) {
        if ("eo" === arg1) {
          return dayPeriodEnumToHours.mapValue(ordinalNumber.ordinalNumber(arg0, { unit: "day" }), valueCallback);
        } else if ("eee" === arg1) {
          const tmp3 = ordinalNumber.day(arg0, { width: "abbreviated", context: "formatting" }) || ordinalNumber.day(arg0, { width: "short", context: "formatting" }) || ordinalNumber.day(arg0, { width: "narrow", context: "formatting" });
          return tmp3;
        } else if ("eeeee" === arg1) {
          return ordinalNumber.day(arg0, { width: "narrow", context: "formatting" });
        } else if ("eeeeee" === arg1) {
          const tmp2 = ordinalNumber.day(arg0, { width: "short", context: "formatting" }) || ordinalNumber.day(arg0, { width: "narrow", context: "formatting" });
          return tmp2;
        } else {
          const tmp = ordinalNumber.day(arg0, { width: "wide", context: "formatting" }) || ordinalNumber.day(arg0, { width: "abbreviated", context: "formatting" }) || ordinalNumber.day(arg0, { width: "short", context: "formatting" }) || ordinalNumber.day(arg0, { width: "narrow", context: "formatting" });
          return tmp;
        }
      }
    }
    return dayPeriodEnumToHours.mapValue(dayPeriodEnumToHours.parseNDigits(arg1.length, arg0), valueCallback);
  }
};
let items = [
  entry,
  {
    key: "validate",
    value: function validate(arg0, arg1) {
      return arg1 >= 0 && arg1 <= 6;
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
    if (!flag) {
      flag = false;
    }
    tmp7.enumerable = flag;
    tmp7.configurable = true;
    if ("value" in tmp7) {
      tmp7.writable = true;
    }
    let _Object2 = Object;
    let definePropertyResult1 = Object.defineProperty(tmp6, tmp7.key, tmp7);
    num = num + 1;
  } while (num < items.length);
}

export { LocalDayParser };