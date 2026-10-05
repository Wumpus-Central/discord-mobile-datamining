// _runtime/04268_LocalWeekYearParser.js
import Parser2 from "04264_Parser.js";
import dayPeriodEnumToHours from "04266_dayPeriodEnumToHours.js";
import getUTCWeekYear_mod from "04200_getUTCWeekYear.js";
import startOfUTCWeek_mod from "03961_startOfUTCWeek.js";

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
function _setPrototypeOf(LocalWeekYearParser, Parser) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(LocalWeekYearParser, Parser) {
      LocalWeekYearParser.__proto__ = Parser;
      return LocalWeekYearParser;
    };
  return _setPrototypeOf(LocalWeekYearParser, Parser);
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
let getUTCWeekYear = getUTCWeekYear_mod;
if (!getUTCWeekYear) {
  let obj = { default: getUTCWeekYear };
  tmp3 = obj;
} else {
  tmp3 = getUTCWeekYear;
}
getUTCWeekYear = tmp3;
let startOfUTCWeek = startOfUTCWeek_mod;
if (!startOfUTCWeek) {
  tmp5 = { default: startOfUTCWeek };
  const obj2 = { default: startOfUTCWeek };
} else {
  tmp5 = startOfUTCWeek;
}
startOfUTCWeek = tmp5;
const Parser = Parser2.Parser;
let _createSuperInternal;
class LocalWeekYearParser {
  constructor() {
    if (this instanceof LocalWeekYearParser) {
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
          const items1 = ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"];
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
const obj3 = { constructor: { value: LocalWeekYearParser, writable: true, configurable: true } };
LocalWeekYearParser.prototype = create(prototype, obj3);
if (Parser) {
  _setPrototypeOf(LocalWeekYearParser, Parser);
}
let num = 0;
let closure_1 = _isNativeReflectConstruct();
_createSuperInternal = function _createSuperInternal() {
  let constructResult;
  let tmp9;
  const self = this;
  const obj = _getPrototypeOf(_createSuperInternal);
  if (LocalWeekYearParser) {
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
      return { year, isTwoDigitYear: "YY" === closure_0 };
    }
    if ("Y" === arg1) {
      return dayPeriodEnumToHours.mapValue(dayPeriodEnumToHours.parseNDigits(4, arg0), valueCallback);
    } else if ("Yo" === arg1) {
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
    value: function set(setUTCFullYear, era, isTwoDigitYear, firstWeekContainsDate) {
      if (isTwoDigitYear.isTwoDigitYear) {
        setUTCFullYear.setUTCFullYear(
          dayPeriodEnumToHours.normalizeTwoDigitYear(isTwoDigitYear.year, tmp),
          0,
          firstWeekContainsDate.firstWeekContainsDate,
        );
        setUTCFullYear.setUTCHours(0, 0, 0, 0);
        return startOfUTCWeek.default(setUTCFullYear, firstWeekContainsDate);
      } else {
        if ("era" in era) {
          let year;
          if (1 !== era.era) {
            year = 1 - isTwoDigitYear.year;
          }
          setUTCFullYear.setUTCFullYear(year, 0, firstWeekContainsDate.firstWeekContainsDate);
          setUTCFullYear.setUTCHours(0, 0, 0, 0);
          return startOfUTCWeek.default(setUTCFullYear, firstWeekContainsDate);
        }
        year = isTwoDigitYear.year;
      }
    },
  },
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

export { LocalWeekYearParser };
