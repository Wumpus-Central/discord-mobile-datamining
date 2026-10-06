// === Module 4291: ISODayParser ===

// Module 4291 (ISODayParser)
import Parser2 from "Parser" /* 4270 */;
import dayPeriodEnumToHours from "dayPeriodEnumToHours" /* 4272 */;
import setUTCISODay_mod from "setUTCISODay" /* 4292 */;

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
function _setPrototypeOf(ISODayParser, Parser) {
  _setPrototypeOf = Object.setPrototypeOf || (function _setPrototypeOf(ISODayParser, Parser) {
    ISODayParser.__proto__ = Parser;
    return ISODayParser;
  });
  return _setPrototypeOf(ISODayParser, Parser);
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
let setUTCISODay = setUTCISODay_mod;
if (!setUTCISODay) {
  let obj = { default: setUTCISODay };
  tmp3 = obj;
} else {
  tmp3 = setUTCISODay;
}
setUTCISODay = tmp3;
const Parser = Parser2.Parser;
let _createSuperInternal;
class ISODayParser {
  constructor() {
    if (this instanceof ISODayParser) {
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
          const items1 = ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"];
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
const obj2 = { constructor: { value: ISODayParser, writable: true, configurable: true } };
ISODayParser.prototype = create(prototype, obj2);
if (Parser) {
  let tmp4 = _setPrototypeOf;
  _setPrototypeOf(ISODayParser, Parser);
}
let num = 0;
let closure_1 = _isNativeReflectConstruct();
_createSuperInternal = function _createSuperInternal() {
  let constructResult;
  let tmp9;
  const self = this;
  const obj = _getPrototypeOf(_createSuperInternal);
  if (ISODayParser) {
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
    if ("i" !== arg1) {
      if ("ii" !== arg1) {
        if ("io" === arg1) {
          return ordinalNumber.ordinalNumber(arg0, { unit: "day" });
        } else {
          function valueCallback(arg0) {
            let num = 7;
            if (0 !== arg0) {
              num = arg0;
            }
            return num;
          }
          if ("iii" === arg1) {
            const mapValue2 = dayPeriodEnumToHours.mapValue;
            const tmp9 = ordinalNumber.day(arg0, { width: "abbreviated", context: "formatting" }) || ordinalNumber.day(arg0, { width: "short", context: "formatting" }) || ordinalNumber.day(arg0, { width: "narrow", context: "formatting" });
            return mapValue2(tmp9, valueCallback);
          } else if ("iiiii" === arg1) {
            return dayPeriodEnumToHours.mapValue(ordinalNumber.day(arg0, { width: "narrow", context: "formatting" }), valueCallback);
          } else if ("iiiiii" === arg1) {
            const mapValue = dayPeriodEnumToHours.mapValue;
            const tmp4 = ordinalNumber.day(arg0, { width: "short", context: "formatting" }) || ordinalNumber.day(arg0, { width: "narrow", context: "formatting" });
            return mapValue(tmp4, valueCallback);
          } else {
            const mapValue3 = dayPeriodEnumToHours.mapValue;
            const tmp = ordinalNumber.day(arg0, { width: "wide", context: "formatting" }) || ordinalNumber.day(arg0, { width: "abbreviated", context: "formatting" }) || ordinalNumber.day(arg0, { width: "short", context: "formatting" }) || ordinalNumber.day(arg0, { width: "narrow", context: "formatting" });
            return mapValue3(tmp, valueCallback);
          }
        }
      }
    }
    return dayPeriodEnumToHours.parseNDigits(arg1.length, arg0);
  }
};
let items = [
  entry,
  {
    key: "validate",
    value: function validate(arg0, arg1) {
      return arg1 >= 1 && arg1 <= 7;
    }
  },
  {
    key: "set",
    value: function set(arg0, arg1, arg2) {
      const defaultResult = setUTCISODay.default(arg0, arg2);
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

export { ISODayParser };