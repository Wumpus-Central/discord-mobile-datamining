// === Module 3843: _typeof ===

// Module 3843 (_typeof)
let _createSuperInternal = function _typeof(arg0) {
  if (typeof Symbol === "function") {
    let _Symbol = Symbol;
    if (typeof Symbol.iterator === "symbol") {
      function _typeof(arg0) {
        return typeof arg0;
      }
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
};
let store = function _setPrototypeOf(DateToSystemTimezoneSetter, Setter) {
  let _setPrototypeOf = Object.setPrototypeOf;
  if (!_setPrototypeOf) {
    _setPrototypeOf = function _setPrototypeOf(DateToSystemTimezoneSetter, Setter) {
      DateToSystemTimezoneSetter.__proto__ = Setter;
      return DateToSystemTimezoneSetter;
    };
  }
  return _setPrototypeOf(DateToSystemTimezoneSetter, Setter);
};
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
function _createClass(DateToSystemTimezoneSetter, items) {
  for (let num = 0; num < items.length; num = num + 1) {
    let tmp2 = items[num];
    let flag = tmp2.enumerable;
    let tmp3 = num;
    if (!flag) {
      flag = false;
    }
    tmp2.enumerable = flag;
    tmp2.configurable = true;
    if ("value" in tmp2) {
      tmp2.writable = true;
    }
    let _Object = Object;
    let definePropertyResult = Object.defineProperty(tmp, tmp2.key, tmp2);
  }
  return DateToSystemTimezoneSetter;
}
arg5.DateToSystemTimezoneSetter = undefined;
arg5.Setter = undefined;
arg5.ValueSetter = undefined;
class Setter {
  constructor() {
    self = this;
    if (this instanceof _createSuperInternal) {
      str2 = "subPriority";
      if ("subPriority" in self) {
        tmp6 = globalThis;
        _Object = Object;
        definePropertyResult = Object.defineProperty(self, "subPriority", { value: 0, enumerable: true, configurable: true, writable: true });
      } else {
        num = 0;
        self.subPriority = 0;
      }
      return;
    } else {
      tmp = globalThis;
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
_createSuperInternal = Setter;
let obj = {
  key: "validate",
  value: function validate(arg0, arg1) {
    return true;
  }
};
let items = [obj];
_createClass(Setter, items);
arg5.Setter = Setter;
_createSuperInternal = undefined;
class ValueSetter {
  constructor(arg0, arg1, arg2, arg3, arg4) {
    self = this;
    if (this instanceof closure_1) {
      tmp6 = _createSuperInternal;
      call = _createSuperInternal.call;
      tmp7 = typeof call === "unknown" ? tmp6() : call(self);
      tmp8 = arg0;
      tmp9 = arg1;
      tmp10 = arg2;
      tmp11 = arg3;
      tmp12 = arg4;
      tmp7.value = arg0;
      tmp7.validateValue = arg1;
      tmp7.setValue = arg2;
      tmp7.priority = arg3;
      if (arg4) {
        tmp7.subPriority = arg4;
      }
      return tmp7;
    } else {
      tmp = globalThis;
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
store = ValueSetter;
obj = { value: ValueSetter, writable: true, configurable: true };
ValueSetter.prototype = Object.create(Setter.prototype, { constructor: obj });
store(ValueSetter, Setter);
_createSuperInternal = ValueSetter;
store = (function _isNativeReflectConstruct() {
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
    if ("object" !== _createSuperInternal(constructResult)) {
      tmp8 = constructResult;
    }
  }
  return tmp8;
};
obj = {
  key: "validate",
  value: function validate(arg0, arg1) {
    return this.validateValue(arg0, this.value, arg1);
  }
};
const items1 = [
  obj,
  {
    key: "set",
    value: function set(arg0, arg1, arg2) {
      return this.setValue(arg0, arg1, this.value, arg2);
    }
  }
];
_createClass(ValueSetter, items1);
arg5.ValueSetter = ValueSetter;
_createSuperInternal = undefined;
class DateToSystemTimezoneSetter {
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
          definePropertyResult = Object.defineProperty(applyResult, "priority", { value: 10, enumerable: true, configurable: true, writable: true });
        } else {
          num3 = 10;
          applyResult.priority = 10;
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
          str3 = "subPriority";
          if ("subPriority" in applyResult) {
            _Object2 = Object;
            definePropertyResult1 = Object.defineProperty(applyResult, "subPriority", { value: -1, enumerable: true, configurable: true, writable: true });
          } else {
            num4 = -1;
            applyResult.subPriority = -1;
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
store = DateToSystemTimezoneSetter;
DateToSystemTimezoneSetter.prototype = Object.create(Setter.prototype, { constructor: { value: DateToSystemTimezoneSetter, writable: true, configurable: true } });
store(DateToSystemTimezoneSetter, Setter);
_createSuperInternal = DateToSystemTimezoneSetter;
store = (function _isNativeReflectConstruct() {
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
    if ("object" !== _createSuperInternal(constructResult)) {
      tmp8 = constructResult;
    }
  }
  return tmp8;
};
const items2 = [
  {
    key: "set",
    value: function set(getUTCFullYear, timestampIsSet) {
      if (timestampIsSet.timestampIsSet) {
        return getUTCFullYear;
      } else {
        const _Date = Date;
        const date = new Date(0);
        const uTCFullYear = getUTCFullYear.getUTCFullYear();
        const uTCMonth = getUTCFullYear.getUTCMonth();
        date.setFullYear(uTCFullYear, uTCMonth, getUTCFullYear.getUTCDate());
        const uTCHours = getUTCFullYear.getUTCHours();
        const uTCMinutes = getUTCFullYear.getUTCMinutes();
        const uTCSeconds = getUTCFullYear.getUTCSeconds();
        date.setHours(uTCHours, uTCMinutes, uTCSeconds, getUTCFullYear.getUTCMilliseconds());
        return date;
      }
    }
  }
];
_createClass(DateToSystemTimezoneSetter, items2);
arg5.DateToSystemTimezoneSetter = DateToSystemTimezoneSetter;