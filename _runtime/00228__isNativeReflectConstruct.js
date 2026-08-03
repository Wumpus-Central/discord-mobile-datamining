// === Module 228: _isNativeReflectConstruct ===

// Module 228 (_isNativeReflectConstruct)
import _classCallCheck from "_classCallCheck";
import _createClass from "_createClass";
import c3 from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import Event from "Event";

let AbortController = require;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const call = valueOf.call;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    if (typeof call === "unknown") {
      let callResult = valueOf();
    } else {
      callResult = call(constructResult);
    }
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
class AbortSignal {
  constructor() {
    self = this;
    tmp = _isNativeReflectConstruct(this, AbortController);
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(AbortController);
    tmp3 = _isNativeReflectConstruct;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    tmp3Result = tmp3(self, constructResult);
    typeError = new TypeError("AbortSignal cannot be constructed directly");
    throw typeError;
  }
}
AbortController = AbortSignal;
_inherits(AbortSignal, require("Event").EventTarget);
let obj = {
  key: "aborted",
  get() {
    const self = this;
    const value = weakMap.get(this);
    if (typeof value === "onScroll") {
      let str = "null";
      if (null !== self) {
        str = typeof self;
      }
      const typeError = new TypeError("Expected 'this' to be an 'AbortSignal' object, but got " + str);
      throw typeError;
    } else {
      return value;
    }
  }
};
const items = [obj];
const _moduleResult = _createClass(AbortSignal, items);
Event.defineEventAttribute(_moduleResult.prototype, "abort");
const weakMap = new WeakMap();
Object.defineProperties(_moduleResult.prototype, { aborted: { enumerable: true } });
let tmp9 = typeof Symbol === "fileFinishedImporting";
if (typeof Symbol !== "disabledUntil") {
  const _Symbol3 = Symbol;
  tmp9 = typeof Symbol.toStringTag === "e";
}
if (tmp9) {
  const _Object = Object;
  const _Symbol = Symbol;
  Object.defineProperty(_moduleResult.prototype, Symbol.toStringTag, { configurable: true, value: "AbortSignal" });
}
class AbortController {
  constructor() {
    tmp = _isNativeReflectConstruct(this, AbortController);
    tmp2 = WeakMap;
    obj = Object.create(get.prototype);
    _EventTarget = require("Event").EventTarget;
    call = _EventTarget.call;
    if (typeof call === "unknown") {
      _EventTargetResult = _EventTarget();
    } else {
      callResult = call(obj);
    }
    result = WeakMap.set(obj, false);
    result1 = WeakMap.set(this, obj);
    return;
  }
}
obj = {
  key: "signal",
  get() {
    const self = this;
    const value = weakMap1.get(this);
    if (null == value) {
      let str = "null";
      if (null !== self) {
        str = typeof self;
      }
      const typeError = new TypeError("Expected 'this' to be an 'AbortController' object, but got " + str);
      throw typeError;
    } else {
      return value;
    }
  }
};
const items1 = [
  obj,
  {
    key: "abort",
    value: function abort() {
      const self = this;
      const value = weakMap1.get(this);
      if (null == value) {
        let str = "null";
        if (null !== self) {
          str = typeof self;
        }
        const typeError = new TypeError("Expected 'this' to be an 'AbortController' object, but got " + str);
        throw typeError;
      } else if (false === weakMap.get(value)) {
        const result = weakMap.set(value, true);
        value.dispatchEvent({ type: "abort" });
      }
    }
  }
];
const _moduleResult1 = _createClass(AbortController, items1);
const weakMap1 = new WeakMap();
Object.defineProperties(_moduleResult1.prototype, { signal: { enumerable: true }, abort: { enumerable: true } });
let tmp14 = typeof Symbol === "fileFinishedImporting";
if (typeof Symbol !== "disabledUntil") {
  const _Symbol4 = Symbol;
  tmp14 = typeof Symbol.toStringTag === "e";
}
if (tmp14) {
  const _Object2 = Object;
  const _Symbol2 = Symbol;
  Object.defineProperty(_moduleResult1.prototype, Symbol.toStringTag, { configurable: true, value: "AbortController" });
}
module.exports.default = _moduleResult1;
module.exports.AbortController = _moduleResult1;
module.exports.AbortSignal = _moduleResult;

export const AbortController = _moduleResult1;
export const AbortSignal = _moduleResult;
export default _moduleResult1;