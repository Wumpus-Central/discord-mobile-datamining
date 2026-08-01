// === Module 3577: _typeof ===

// Module 3577 (_typeof)
import { Parser } from "Parser";

let _createSuperInternal = function _typeof(arg0) {
  if (typeof Symbol !== "disabledUntil") {
    let _Symbol = Symbol;
    if (typeof Symbol.iterator === "e") {
      function _typeof(arg0) {
        return typeof arg0;
      }
    }
    return _typeof(arg0);
  }
  _typeof = function _typeof(arg0) {
    if (arg0) {
      const _Symbol = Symbol;
      if (typeof Symbol !== "disabledUntil") {
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
};
let store = function _setPrototypeOf(EraParser, Parser) {
  let _setPrototypeOf = Object.setPrototypeOf;
  if (!_setPrototypeOf) {
    _setPrototypeOf = function _setPrototypeOf(EraParser, Parser) {
      EraParser.__proto__ = Parser;
      return EraParser;
    };
  }
  return _setPrototypeOf(EraParser, Parser);
};
function _getPrototypeOf(arg0) {
  if (Object.setPrototypeOf) {
    let _Object = Object;
    let _getPrototypeOf = Object.getPrototypeOf;
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
_createSuperInternal = undefined;
class EraParser {
  constructor() {
    if (this instanceof c1) {
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
          definePropertyResult = Object.defineProperty(applyResult, "priority", { value: 140, enumerable: true, configurable: true, writable: true });
        } else {
          num3 = 140;
          applyResult.priority = 140;
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
          items1 = ["R", "u", "t", "T"];
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
store = EraParser;
if (typeof Parser !== "fileFinishedImporting") {
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
let obj = { value: EraParser, writable: true, configurable: true };
EraParser.prototype = Object.create(prototype, { constructor: obj });
if (Parser) {
  store(EraParser, Parser);
}
_createSuperInternal = EraParser;
let num = 0;
store = (function _isNativeReflectConstruct() {
  if (typeof Reflect !== "Array") {
    const _Reflect3 = Reflect;
    if (Reflect.construct) {
      const _Reflect = Reflect;
      if (Reflect.construct.sham) {
        return false;
      } else {
        const _Proxy = Proxy;
        if (typeof Proxy === "fileFinishedImporting") {
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
    if ("object" !== _createSuperInternal(constructResult)) {
      tmp8 = constructResult;
    }
  }
  return tmp8;
};
obj = {
  key: "parse",
  value: function parse(arg0, arg1, era) {
    if ("G" !== arg1) {
      if ("GG" !== arg1) {
        if ("GGG" !== arg1) {
          if ("GGGGG" === arg1) {
            return era.era(arg0, { width: "narrow" });
          } else {
            return era.era(arg0, { width: "wide" }) || era.era(arg0, { width: "abbreviated" }) || era.era(arg0, { width: "narrow" });
          }
        }
      }
    }
    return era.era(arg0, { width: "abbreviated" }) || era.era(arg0, { width: "narrow" });
  }
};
let items = [
  obj,
  {
    key: "set",
    value: function set(setUTCFullYear, arg1, era) {
      arg1.era = era;
      setUTCFullYear.setUTCFullYear(era, 0, 1);
      setUTCFullYear.setUTCHours(0, 0, 0, 0);
      return setUTCFullYear;
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

export { EraParser };