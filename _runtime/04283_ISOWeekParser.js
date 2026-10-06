// === Module 4283: ISOWeekParser ===

// Module 4283 (ISOWeekParser)
import Parser2 from "Parser" /* 4270 */;
import dayPeriodEnumToHours from "dayPeriodEnumToHours" /* 4272 */;
import numericPatterns from "numericPatterns" /* 4273 */;
import setUTCISOWeek_mod from "setUTCISOWeek" /* 4284 */;
import startOfUTCISOWeek_mod from "startOfUTCISOWeek" /* 4201 */;

let tmp3;
let tmp5;
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
function _setPrototypeOf(ISOWeekParser, Parser) {
  _setPrototypeOf = Object.setPrototypeOf || (function _setPrototypeOf(ISOWeekParser, Parser) {
    ISOWeekParser.__proto__ = Parser;
    return ISOWeekParser;
  });
  return _setPrototypeOf(ISOWeekParser, Parser);
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
let setUTCISOWeek = setUTCISOWeek_mod;
if (!setUTCISOWeek) {
  let obj = { default: setUTCISOWeek };
  tmp3 = obj;
} else {
  tmp3 = setUTCISOWeek;
}
setUTCISOWeek = tmp3;
let startOfUTCISOWeek = startOfUTCISOWeek_mod;
if (!startOfUTCISOWeek) {
  tmp5 = { default: startOfUTCISOWeek };
  const obj2 = { default: startOfUTCISOWeek };
} else {
  tmp5 = startOfUTCISOWeek;
}
startOfUTCISOWeek = tmp5;
const Parser = Parser2.Parser;
let _createSuperInternal;
class ISOWeekParser {
  constructor() {
    if (this instanceof ISOWeekParser) {
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
          Object.defineProperty(applyResult, "priority", { value: 100, enumerable: true, configurable: true, writable: true });
        } else {
          applyResult.priority = 100;
        }
        if (undefined === applyResult) {
          const _ReferenceError = ReferenceError;
          const self5 = this;
          const self6 = this;
          const referenceError1 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
          throw referenceError1;
        } else {
          const items1 = ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"];
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
const obj3 = { constructor: { value: ISOWeekParser, writable: true, configurable: true } };
ISOWeekParser.prototype = create(prototype, obj3);
if (Parser) {
  _setPrototypeOf(ISOWeekParser, Parser);
}
let num = 0;
let closure_1 = _isNativeReflectConstruct();
_createSuperInternal = function _createSuperInternal() {
  let constructResult;
  let tmp9;
  const self = this;
  const obj = _getPrototypeOf(_createSuperInternal);
  if (ISOWeekParser) {
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
  value: function parse(arg0, arg1, ordinalNumber) {
    if ("I" === arg1) {
      return dayPeriodEnumToHours.parseNumericPattern(numericPatterns.numericPatterns.week, arg0);
    } else if ("Io" === arg1) {
      return ordinalNumber.ordinalNumber(arg0, { unit: "week" });
    } else {
      return dayPeriodEnumToHours.parseNDigits(arg1.length, arg0);
    }
  }
};
let items = [
  entry,
  {
    key: "validate",
    value: function validate(arg0, arg1) {
      return arg1 >= 1 && arg1 <= 53;
    }
  },
  {
    key: "set",
    value: function set(arg0, arg1, arg2) {
      return startOfUTCISOWeek.default(setUTCISOWeek.default(arg0, arg2));
    }
  }
];
if (0 < items.length) {
  do {
    let tmp9 = items[num];
    let flag = tmp9.enumerable;
    if (!flag) {
      flag = false;
    }
    tmp9.enumerable = flag;
    tmp9.configurable = true;
    if ("value" in tmp9) {
      tmp9.writable = true;
    }
    let _Object2 = Object;
    let definePropertyResult1 = Object.defineProperty(tmp8, tmp9.key, tmp9);
    num = num + 1;
  } while (num < items.length);
}

export { ISOWeekParser };