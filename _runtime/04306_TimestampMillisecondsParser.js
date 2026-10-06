// _runtime/04306_TimestampMillisecondsParser.js
import Parser2 from "04270_Parser.js";
import dayPeriodEnumToHours from "04272_dayPeriodEnumToHours.js";

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
function _setPrototypeOf(TimestampMillisecondsParser, Parser) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(TimestampMillisecondsParser, Parser) {
      TimestampMillisecondsParser.__proto__ = Parser;
      return TimestampMillisecondsParser;
    };
  return _setPrototypeOf(TimestampMillisecondsParser, Parser);
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
class TimestampMillisecondsParser {
  constructor() {
    if (this instanceof TimestampMillisecondsParser) {
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
            value: 20,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          applyResult.priority = 20;
        }
        if (undefined === applyResult) {
          const _ReferenceError = ReferenceError;
          const self5 = this;
          const self6 = this;
          const referenceError1 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
          throw referenceError1;
        } else {
          if ("incompatibleTokens" in applyResult) {
            const _Object2 = Object;
            Object.defineProperty(applyResult, "incompatibleTokens", {
              value: "*",
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            applyResult.incompatibleTokens = "*";
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
let obj = { constructor: { value: TimestampMillisecondsParser, writable: true, configurable: true } };
TimestampMillisecondsParser.prototype = create(prototype, obj);
if (Parser) {
  _setPrototypeOf(TimestampMillisecondsParser, Parser);
}
let num = 0;
let closure_1 = _isNativeReflectConstruct();
_createSuperInternal = function _createSuperInternal() {
  let constructResult;
  let tmp9;
  const self = this;
  const obj = _getPrototypeOf(_createSuperInternal);
  if (TimestampMillisecondsParser) {
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
  value: function parse(arg0) {
    return dayPeriodEnumToHours.parseAnyDigitsSigned(arg0);
  },
};
let items = [
  entry,
  {
    key: "set",
    value: function set(arg0, arg1, arg2) {
      const items = [new Date(arg2), { timestampIsSet: true }];
      new Date(arg2);
      return items;
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

export { TimestampMillisecondsParser };
