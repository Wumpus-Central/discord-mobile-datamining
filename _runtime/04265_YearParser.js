// _runtime/04265_YearParser.js
import Parser2 from "04264_Parser.js";
import dayPeriodEnumToHours from "04266_dayPeriodEnumToHours.js";

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
            valueOf.call(Reflect.construct(Boolean, [], () => {}));
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
function _setPrototypeOf(YearParser, Parser) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(YearParser, Parser) {
      YearParser.__proto__ = Parser;
      return YearParser;
    };
  return _setPrototypeOf(YearParser, Parser);
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
let _createSuperInternal;
class YearParser {
  constructor() {
    if (this instanceof YearParser) {
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
          Object.defineProperty(applyResult, "priority", {
            value: 130,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          applyResult.priority = 130;
        }
        if (undefined === applyResult) {
          const _ReferenceError = ReferenceError;
          const self5 = this;
          const self6 = this;
          const referenceError1 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
          throw referenceError1;
        } else {
          const items1 = ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"];
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
    let tmp9 = typeError;
    throw typeError;
  }
}
let prototype = Parser;
let _Object = Object;
if (Parser) {
  prototype = Parser.prototype;
}
let obj = { constructor: { value: YearParser, writable: true, configurable: true } };
YearParser.prototype = create(prototype, obj);
if (Parser) {
  _setPrototypeOf(YearParser, Parser);
}
let num = 0;
let closure_1 = _isNativeReflectConstruct();
_createSuperInternal = function _createSuperInternal() {
  let constructResult;
  let tmp9;
  const self = this;
  const obj = _getPrototypeOf(_createSuperInternal);
  if (YearParser) {
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
    let closure_0 = arg1;
    function valueCallback(year) {
      return { year, isTwoDigitYear: "yy" === closure_0 };
    }
    if ("y" === arg1) {
      return dayPeriodEnumToHours.mapValue(dayPeriodEnumToHours.parseNDigits(4, arg0), valueCallback);
    } else if ("yo" === arg1) {
      return dayPeriodEnumToHours.mapValue(ordinalNumber.ordinalNumber(arg0, { unit: "year" }), valueCallback);
    } else {
      return dayPeriodEnumToHours.mapValue(dayPeriodEnumToHours.parseNDigits(arg1.length, arg0), valueCallback);
    }
  },
};
let items = [
  entry,
  {
    key: "validate",
    value: function validate(arg0, isTwoDigitYear) {
      isTwoDigitYear = isTwoDigitYear.isTwoDigitYear || isTwoDigitYear.year > 0;
      return isTwoDigitYear;
    },
  },
  {
    key: "set",
    value: function set(setUTCFullYear, era, isTwoDigitYear) {
      if (isTwoDigitYear.isTwoDigitYear) {
        setUTCFullYear.setUTCFullYear(dayPeriodEnumToHours.normalizeTwoDigitYear(isTwoDigitYear.year, tmp), 0, 1);
        setUTCFullYear.setUTCHours(0, 0, 0, 0);
        return setUTCFullYear;
      } else {
        if ("era" in era) {
          let year;
          if (1 !== era.era) {
            year = 1 - isTwoDigitYear.year;
          }
          setUTCFullYear.setUTCFullYear(year, 0, 1);
          setUTCFullYear.setUTCHours(0, 0, 0, 0);
          return setUTCFullYear;
        }
        year = isTwoDigitYear.year;
      }
    },
  },
];
if (0 < items.length) {
  do {
    let tmp5 = items[num];
    let flag = tmp5.enumerable;
    if (!flag) {
      flag = false;
    }
    tmp5.enumerable = flag;
    tmp5.configurable = true;
    if ("value" in tmp5) {
      tmp5.writable = true;
    }
    let _Object2 = Object;
    let definePropertyResult1 = Object.defineProperty(tmp4, tmp5.key, tmp5);
    num = num + 1;
  } while (num < items.length);
}

export { YearParser };
