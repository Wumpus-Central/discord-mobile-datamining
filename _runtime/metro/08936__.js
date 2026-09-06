// _runtime/metro/08936__.js
import _wrapNativeSuper from "00158__wrapNativeSuper.js";
import _createClass from "00042__createClass.js";
import _classCallCheck from "00041__classCallCheck.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

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
  } catch (err) {}
}
export function $ZodAsyncError() {
  const self = this;
  _classCallCheck(this, $ZodEncodeError);
  const items = ["Encountered Promise during synchronous parse. Use .parseAsync() instead."];
  const obj = _getPrototypeOf($ZodEncodeError);
  if (metroRequire()) {
    const _Reflect = Reflect;
    let constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
  } else {
    constructResult = obj.apply(self, items);
  }
  return _possibleConstructorReturn(self, constructResult);
}
_inherits($ZodAsyncError, _wrapNativeSuper(Error));
export function $ZodEncodeError(name) {
  const self = this;
  _classCallCheck(this, $ZodEncodeError);
  const items = ["Encountered unidirectional transform during encode: " + name];
  const obj = _getPrototypeOf($ZodEncodeError);
  if (metroRequire()) {
    const _Reflect = Reflect;
    let constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
  } else {
    constructResult = obj.apply(self, items);
  }
  const tmp3Result = _possibleConstructorReturn(self, constructResult);
  tmp3Result.name = "ZodEncodeError";
  return tmp3Result;
}
_inherits($ZodEncodeError, _wrapNativeSuper(Error));

export const $constructor = function $constructor(ZodError, initializer, Parent) {
  closure_0 = ZodError;
  _createClass = initializer;
  _classCallCheck = Parent;
  function init(_zod, def) {
    if (!_zod._zod) {
      const _Object = Object;
      let obj = { value: null, enumerable: false };
      obj = { def, constr, traits: null };
      const _Set = Set;
      const set = new Set();
      obj.traits = set;
      obj.value = obj;
      Object.defineProperty(_zod, "_zod", obj);
    }
    const traits = _zod._zod.traits;
    if (!traits.has(closure_0)) {
      const traits2 = _zod._zod.traits;
      traits2.add(closure_0);
      initializer(_zod, def);
      const prototype = constr.prototype;
      const _Object2 = Object;
      const keys = Object.keys(prototype);
      for (let num = 0; num < keys.length; num = num + 1) {
        let tmp14 = keys[num];
        if (!(tmp14 in _zod)) {
          let obj3 = prototype[tmp14];
          _zod[tmp14] = obj3.bind(_zod);
        }
      }
    }
  }
  const constr = function _(Definition) {
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
      tmp = closure_2(this, closure_0);
      tmp2 = closure_4;
      obj = closure_4(closure_0);
      tmp3 = closure_3;
      if (_isNativeReflectConstruct()) {
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
  closure_129_0 = Definition;
  constr(Definition, Parent);
  const tmp4 = _createClass(Definition);
  _getPrototypeOf = tmp4;
  let obj = { value: ZodError };
  Object.defineProperty(tmp4, "name", obj);
  Object.defineProperty(constr, "init", { value: init });
  obj = {
    value(_zod) {
      Parent = undefined;
      if (Parent != null) {
        Parent = Parent.Parent;
      }
      if (Parent) {
        Parent = _zod instanceof Parent.Parent;
      }
      let tmp3 = Parent;
      if (!tmp3) {
        let hasItem;
        if (_zod != null) {
          _zod = _zod._zod;
          if (_zod != null) {
            const traits = _zod.traits;
            if (traits != null) {
              hasItem = traits.has(closure_0);
            }
          }
        }
        tmp3 = hasItem;
      }
      return tmp3;
    },
  };
  Object.defineProperty(constr, Symbol.hasInstance, obj);
  obj = { value: ZodError };
  Object.defineProperty(constr, "name", obj);
  return constr;
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
export const globalConfig = {};
