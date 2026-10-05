// _runtime/00228_AbortController.js
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import c3 from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";
import get_type from "00229_get_type.js";

let set;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {}));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
class AbortSignal {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, AbortSignal);
    const obj = _getPrototypeOf(AbortSignal);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    c3(self, constructResult);
    const typeError = new TypeError("AbortSignal cannot be constructed directly");
    throw typeError;
  }
}
_inherits(AbortSignal, get_type.EventTarget);
let obj = {
  key: "aborted",
  get() {
    const self = this;
    const value = weakMap.get(this);
    if (typeof value !== "boolean") {
      let str = "null";
      const _TypeError = TypeError;
      if (null !== self) {
        str = typeof self;
      }
      const self2 = this;
      const self3 = this;
      const _TypeError1 = new _TypeError("Expected 'this' to be an 'AbortSignal' object, but got " + str);
      throw _TypeError1;
    } else {
      return value;
    }
  },
};
const items = [obj];
const _moduleResult = _createClass(AbortSignal, items);
const metroRequire = _moduleResult;
get_type.defineEventAttribute(_moduleResult.prototype, "abort");
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
    _classCallCheck(this, AbortController);
    set = weakMap1.set;
    const obj = Object.create(metroRequire.prototype);
    const _EventTarget = get_type.EventTarget;
    _EventTarget.call(obj);
    const result = weakMap.set(obj, false);
    const result1 = set(this, obj);
  }
}
const items1 = [,];
const obj2 = {
  key: "signal",
  get() {
    const self = this;
    const value = weakMap1.get(this);
    if (null == value) {
      let str = "null";
      const _TypeError = TypeError;
      if (null !== self) {
        str = typeof self;
      }
      const self2 = this;
      const self3 = this;
      const _TypeError1 = new _TypeError("Expected 'this' to be an 'AbortController' object, but got " + str);
      throw _TypeError1;
    } else {
      return value;
    }
  },
};
items1[0] = obj2;
items1[1] = {
  key: "abort",
  value: function abort() {
    const self = this;
    const value = weakMap1.get(this);
    if (null == value) {
      let str = "null";
      const _TypeError = TypeError;
      if (null !== self) {
        str = typeof self;
      }
      const self2 = this;
      const self3 = this;
      const _TypeError1 = new _TypeError("Expected 'this' to be an 'AbortController' object, but got " + str);
      throw _TypeError1;
    } else if (false === weakMap.get(value)) {
      const result = weakMap.set(value, true);
      value.dispatchEvent({ type: "abort" });
    }
  },
};
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
const AbortController_export = _moduleResult1;
const AbortSignal_export = _moduleResult;

export { AbortController_export as AbortController };
export { AbortSignal_export as AbortSignal };
export default _moduleResult1;
