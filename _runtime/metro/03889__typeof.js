// _runtime/metro/03889__typeof.js
import Parser2 from "../03878_Parser.js";
import setUTCWeek from "../03890_setUTCWeek.js";
import startOfUTCWeek from "../03575_startOfUTCWeek.js";

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
function _setPrototypeOf(LocalWeekParser, Parser) {
  _setPrototypeOf = Object.setPrototypeOf;
  if (!_setPrototypeOf) {
    _setPrototypeOf = function _setPrototypeOf(LocalWeekParser, Parser) {
      LocalWeekParser.__proto__ = Parser;
      return LocalWeekParser;
    };
  }
  return _setPrototypeOf(LocalWeekParser, Parser);
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
if (!setUTCWeek) {
  let obj = { default: null };
  obj[0] = setUTCWeek;
  let tmp3 = obj;
} else {
  tmp3 = setUTCWeek;
}
setUTCWeek = tmp3;
if (!startOfUTCWeek) {
  obj = { default: null };
  obj[0] = startOfUTCWeek;
  let tmp5 = obj;
} else {
  tmp5 = startOfUTCWeek;
}
startOfUTCWeek = tmp5;
const Parser = Parser2.Parser;
_createSuperInternal = undefined;
class LocalWeekParser {
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
          definePropertyResult = Object.defineProperty(applyResult, "priority", {
            value: 100,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          num3 = 100;
          applyResult.priority = 100;
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
          items1 = ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"];
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
closure_1 = LocalWeekParser;
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
obj = { value: LocalWeekParser, writable: true, configurable: true };
LocalWeekParser.prototype = Object.create(prototype, { constructor: obj });
if (Parser) {
  _setPrototypeOf(LocalWeekParser, Parser);
}
_createSuperInternal = LocalWeekParser;
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
let items = [
  {
    key: "parse",
    value: function parse(arg0, arg1, ordinalNumber) {
      if ("w" === arg1) {
        return _createSuperInternal(3880).parseNumericPattern(_createSuperInternal(3881).numericPatterns.week, arg0);
      } else if ("wo" === arg1) {
        return ordinalNumber.ordinalNumber(arg0, { unit: "week" });
      } else {
        return _createSuperInternal(3880).parseNDigits(arg1.length, arg0);
      }
    },
  },
  {
    key: "validate",
    value: function validate(arg0, arg1) {
      let tmp = arg1 >= 1;
      if (tmp) {
        tmp = arg1 <= 53;
      }
      return tmp;
    },
  },
  {
    key: "set",
    value: function set(arg0, arg1, arg2, arg3) {
      return startOfUTCWeek.default(setUTCWeek.default(arg0, arg2, arg3), arg3);
    },
  },
];
if (0 < items.length) {
  do {
    let tmp9 = items[num];
    let flag = tmp9.enumerable;
    let tmp10 = num;
    if (!flag) {
      flag = false;
    }
    tmp9.enumerable = flag;
    tmp9.configurable = true;
    if ("value" in tmp9) {
      tmp9.writable = true;
    }
    let _Object = Object;
    let definePropertyResult1 = Object.defineProperty(tmp8, tmp9.key, tmp9);
    num = num + 1;
  } while (num < items.length);
}

export { LocalWeekParser };
