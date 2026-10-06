// _runtime/04267_DateToSystemTimezoneSetter.js
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
const _createSuperInternal2 = function _createSuperInternal() {
  let constructResult;
  let tmp9;
  const self = this;
  const obj = _getPrototypeOf(_createSuperInternal);
  if (DateToSystemTimezoneSetter) {
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
function _setPrototypeOf(DateToSystemTimezoneSetter, Setter) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(DateToSystemTimezoneSetter, Setter) {
      DateToSystemTimezoneSetter.__proto__ = Setter;
      return DateToSystemTimezoneSetter;
    };
  return _setPrototypeOf(DateToSystemTimezoneSetter, Setter);
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
function _createClass(DateToSystemTimezoneSetter, items, arg2) {
  let num;
  for (let num = 0; num < items.length; num = num + 1) {
    let tmp2 = items[num];
    let flag = tmp2.enumerable;
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
class Setter {
  constructor() {
    const self = this;
    if (this instanceof Setter) {
      if ("subPriority" in self) {
        const _Object = Object;
        Object.defineProperty(self, "subPriority", { value: 0, enumerable: true, configurable: true, writable: true });
      } else {
        self.subPriority = 0;
      }
    } else {
      const _TypeError = TypeError;
      const self2 = this;
      const self3 = this;
      const typeError = new TypeError("Cannot call a class as a function");
      throw typeError;
    }
  }
}
const entry = {
  key: "validate",
  value: function validate(arg0, arg1) {
    return true;
  },
};
let items = [entry];
_createClass(Setter, items);
let _createSuperInternal;
class ValueSetter {
  constructor(value, validate, set, priority, subPriority) {
    if (this instanceof ValueSetter) {
      const callResult = _createSuperInternal.call(tmp);
      callResult.value = value;
      callResult.validateValue = validate;
      callResult.setValue = set;
      callResult.priority = priority;
      if (subPriority) {
        callResult.subPriority = subPriority;
      }
      return callResult;
    } else {
      const _TypeError = TypeError;
      const self = this;
      const self2 = this;
      const typeError = new TypeError("Cannot call a class as a function");
      throw typeError;
    }
  }
}
let obj = { constructor: { value: ValueSetter, writable: true, configurable: true } };
ValueSetter.prototype = Object.create(Setter.prototype, obj);
let tmp3 = _setPrototypeOf(ValueSetter, Setter);
let closure_1 = _isNativeReflectConstruct();
const entry1 = {
  key: "validate",
  value: function validate(arg0, arg1) {
    return this.validateValue(arg0, this.value, arg1);
  },
};
const items1 = [
  entry1,
  {
    key: "set",
    value: function set(arg0, arg1, arg2) {
      return this.setValue(arg0, arg1, this.value, arg2);
    },
  },
];
_createClass(ValueSetter, items1);
_createSuperInternal = undefined;
class DateToSystemTimezoneSetter {
  constructor() {
    if (this instanceof DateToSystemTimezoneSetter) {
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
            value: 10,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          applyResult.priority = 10;
        }
        if (undefined === applyResult) {
          const _ReferenceError = ReferenceError;
          const self5 = this;
          const self6 = this;
          const referenceError1 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
          throw referenceError1;
        } else {
          if ("subPriority" in applyResult) {
            const _Object2 = Object;
            Object.defineProperty(applyResult, "subPriority", {
              value: -1,
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            applyResult.subPriority = -1;
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
const obj2 = { constructor: { value: DateToSystemTimezoneSetter, writable: true, configurable: true } };
DateToSystemTimezoneSetter.prototype = Object.create(Setter.prototype, obj2);
_setPrototypeOf(DateToSystemTimezoneSetter, Setter);
closure_1 = _isNativeReflectConstruct();
_createSuperInternal = _createSuperInternal2;
const entry2 = {
  key: "set",
  value: function set(getUTCFullYear, timestampIsSet) {
    if (timestampIsSet.timestampIsSet) {
      return getUTCFullYear;
    } else {
      const _Date = Date;
      const self = this;
      const self2 = this;
      const date = new Date(0);
      const setFullYear = date.setFullYear;
      const uTCFullYear = getUTCFullYear.getUTCFullYear();
      const uTCMonth = getUTCFullYear.getUTCMonth();
      setFullYear(uTCFullYear, uTCMonth, getUTCFullYear.getUTCDate());
      const setHours = date.setHours;
      const uTCHours = getUTCFullYear.getUTCHours();
      const uTCMinutes = getUTCFullYear.getUTCMinutes();
      const uTCSeconds = getUTCFullYear.getUTCSeconds();
      setHours(uTCHours, uTCMinutes, uTCSeconds, getUTCFullYear.getUTCMilliseconds());
      return date;
    }
  },
};
const items2 = [entry2];
_createClass(DateToSystemTimezoneSetter, items2);

export { Setter };
export { ValueSetter };
export { DateToSystemTimezoneSetter };
