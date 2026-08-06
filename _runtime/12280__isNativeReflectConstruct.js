// _runtime/12280__isNativeReflectConstruct.js
import _wrapNativeSuper from "_wrapNativeSuper";
import _createClass from "_createClass";
import _classCallCheck from "_classCallCheck";
import c3 from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

let $ZodEncodeError = exports;
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
export function $ZodAsyncError() {
  const self = this;
  _classCallCheck(this, $ZodEncodeError);
  const items = ["Encountered Promise during synchronous parse. Use .parseAsync() instead."];
  const obj = _getPrototypeOf($ZodEncodeError);
  if (_isNativeReflectConstruct()) {
    const _Reflect = Reflect;
    let constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
  } else {
    constructResult = obj.apply(self, items);
  }
  return _possibleConstructorReturn(self, constructResult);
}
$ZodEncodeError = $ZodAsyncError;
_inherits($ZodAsyncError, _wrapNativeSuper(Error));
$ZodEncodeError = function $ZodEncodeError(name) {
  const self = this;
  _classCallCheck(this, $ZodEncodeError);
  const items = ["Encountered unidirectional transform during encode: " + name];
  const obj = _getPrototypeOf($ZodEncodeError);
  if (_isNativeReflectConstruct()) {
    const _Reflect = Reflect;
    let constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
  } else {
    constructResult = obj.apply(self, items);
  }
  const tmp3Result = _possibleConstructorReturn(self, constructResult);
  tmp3Result.name = "ZodEncodeError";
  return tmp3Result;
};
_inherits($ZodEncodeError, _wrapNativeSuper(Error));

export const $constructor = function $constructor(ZodError, initializer, Parent) {
  const Definition = ZodError;
  const _createClass = initializer;
  let closure_2 = Parent;
  function init(_zod) {
    if (!_zod._zod) {
      const _Object = Object;
      let obj = { value: null, enumerable: false };
      obj = { def: null, constr: null, traits: null };
      obj[0] = arg1;
      obj[1] = fn;
      const _Set = Set;
      const set = new Set();
      obj[2] = set;
      obj[0] = obj;
      Object.defineProperty(_zod, "_zod", obj);
    }
    const traits = _zod._zod.traits;
    if (!traits.has(Definition)) {
      const traits2 = _zod._zod.traits;
      traits2.add(Definition);
      initializer(_zod, arg1);
      const prototype = fn.prototype;
      const _Object2 = Object;
      const keys = Object.keys(prototype);
      for (let num = 0; num < keys.length; num = num + 1) {
        let tmp14 = keys[num];
        let tmp15 = num;
        if (!(tmp14 in _zod)) {
          let obj3 = prototype[tmp14];
          _zod[tmp14] = obj3.bind(_zod);
        }
      }
    }
  }
  const fn = function _(Definition, Parent) {
    Parent = undefined;
    if (Parent != null) {
      Parent = Parent.Parent;
    }
    let self = this;
    if (Parent) {
      self = new closure_4();
    }
    init(self, Definition);
    const _zod = self._zod;
    if (_zod.deferred == null) {
      _zod.deferred = [];
    }
    for (const item10021 of tmp6) {
      let item10021Result = item10021();
      continue;
    }
    return self;
  };
  Parent = undefined;
  if (Parent != null) {
    Parent = Parent.Parent;
  }
  if (Parent == null) {
    Parent = Object;
  }
  class Definition {
    constructor() {
      self = this;
      tmp = closure_2(this, Definition);
      tmp2 = outer1_4;
      obj = outer1_4(Definition);
      tmp3 = init;
      if (outer1_6()) {
        tmp7 = globalThis;
        _Reflect = Reflect;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
      } else {
        tmp4 = arguments;
        tmp5 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp3(self, constructResult);
    }
  }
  fn(Definition, Parent);
  let tmp4 = _createClass(Definition);
  const _getPrototypeOf = tmp4;
  let obj = { value: ZodError };
  Object.defineProperty(tmp4, "name", obj);
  Object.defineProperty(fn, "init", { value: init });
  obj = {
    value(_zod) {
      let Parent;
      if (closure_2 != null) {
        Parent = tmp.Parent;
      }
      if (Parent) {
        Parent = _zod instanceof tmp.Parent;
      }
      let tmp3 = Parent;
      if (!tmp3) {
        let hasItem;
        if (_zod != null) {
          _zod = _zod._zod;
          if (_zod != null) {
            const traits = _zod.traits;
            if (traits != null) {
              hasItem = traits.has(Definition);
            }
          }
        }
        tmp3 = hasItem;
      }
      return tmp3;
    }
  };
  Object.defineProperty(fn, Symbol.hasInstance, obj);
  obj = { value: ZodError };
  Object.defineProperty(fn, "name", obj);
  return fn;
};
export const config = function config(arg0) {
  if (arg0) {
    const _Object = Object;
    const merged = Object.assign($ZodEncodeError.globalConfig, arg0);
  }
  return $ZodEncodeError.globalConfig;
};
export const NEVER = Object.freeze({ status: "aborted" });
export const $brand = Symbol("zod_brand");
export const $ZodEncodeError = _createClass($ZodEncodeError);
export const globalConfig = {};