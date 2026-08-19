// === Module 228: _isNativeReflectConstruct ===

// Module 228 (_isNativeReflectConstruct)
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import Event from "Event" /* 229 */;

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
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
class AbortSignal {
  constructor() {
    self = this;
    tmp = closure_2(this, AbortController);
    tmp2 = closure_4;
    obj = closure_4(AbortController);
    tmp3 = closure_3;
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
_inherits(AbortSignal, Event.EventTarget);
let obj = {
  key: "aborted",
  get() {
    const self = this;
    const value = weakMap.get(this);
    if (typeof value !== "boolean") {
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
let tmp9 = typeof Symbol === "function";
if (typeof Symbol === "function") {
  const _Symbol3 = Symbol;
  tmp9 = typeof Symbol.toStringTag === "symbol";
}
if (tmp9) {
  const _Object = Object;
  const _Symbol = Symbol;
  Object.defineProperty(_moduleResult.prototype, Symbol.toStringTag, { configurable: true, value: "AbortSignal" });
}
class AbortController {
  constructor() {
    tmp = closure_2(this, AbortController);
    tmp2 = closure_8;
    obj = Object.create(closure_6.prototype);
    _EventTarget = require("Event").EventTarget;
    call = _EventTarget.call;
    if (typeof call === "unknown") {
      _EventTargetResult = _EventTarget();
    } else {
      callResult = call(obj);
    }
    result = closure_7.set(obj, false);
    result1 = closure_8.set(this, obj);
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
let tmp14 = typeof Symbol === "function";
if (typeof Symbol === "function") {
  const _Symbol4 = Symbol;
  tmp14 = typeof Symbol.toStringTag === "symbol";
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