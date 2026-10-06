// === Module 8639: NEVER ===

// Module 8639 (NEVER)
import _wrapNativeSuper from "_wrapNativeSuper" /* 158 */;
import _createClass_mod from "_createClass" /* 42 */;
import _classCallCheck_mod from "_classCallCheck" /* 41 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf_mod from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

let set;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
let _createClass = _createClass_mod;
let _classCallCheck = _classCallCheck_mod;
let _getPrototypeOf = _getPrototypeOf_mod;
export function $ZodAsyncError() {
  let constructResult;
  const self = this;
  _classCallCheck(this, $ZodAsyncError);
  const items = ["Encountered Promise during synchronous parse. Use .parseAsync() instead."];
  const obj = _getPrototypeOf($ZodAsyncError);
  if (_isNativeReflectConstruct()) {
    const _Reflect = Reflect;
    constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
  } else {
    constructResult = obj.apply(self, items);
  }
  return c3(self, constructResult);
}
_inherits($ZodAsyncError, _wrapNativeSuper(Error));
export function $ZodEncodeError(name) {
  let constructResult;
  const self = this;
  _classCallCheck(this, $ZodEncodeError);
  const items = ["Encountered unidirectional transform during encode: " + name];
  const obj = _getPrototypeOf($ZodEncodeError);
  if (_isNativeReflectConstruct()) {
    const _Reflect = Reflect;
    constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
  } else {
    constructResult = obj.apply(self, items);
  }
  const tmp3Result = c3(self, constructResult);
  tmp3Result.name = "ZodEncodeError";
  return tmp3Result;
}
_inherits($ZodEncodeError, _wrapNativeSuper(Error));

export const $constructor = function $constructor(ZodError, initializer, Parent) {
  let closure_4;
  let closure_0 = ZodError;
  _createClass = initializer;
  _classCallCheck = Parent;
  function init(_zod, def) {
    let obj2;
    if (!_zod._zod) {
      const _Object = Object;
      const obj = { value: obj2, enumerable: false };
      const _Set = Set;
      const self = this;
      const self2 = this;
      obj2 = { def, constr, traits: set };
      set = new Set();
      defineProperty(_zod, "_zod", obj);
    }
    const traits = _zod._zod.traits;
    if (!traits.has(ZodError)) {
      let num;
      const traits2 = _zod._zod.traits;
      traits2.add(ZodError);
      initializer(_zod, def);
      const prototype = constr.prototype;
      const _Object2 = Object;
      const keys = Object.keys(prototype);
      for (let num = 0; num < keys.length; num = num + 1) {
        let tmp12 = keys[num];
        if (!(tmp12 in _zod)) {
          let obj3 = prototype[tmp12];
          _zod[tmp12] = obj3.bind(_zod);
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
      const self2 = this;
      const self3 = this;
      self = new closure_4();
    }
    init(self, Definition);
    const _zod = self._zod;
    if (_zod.deferred == null) {
      _zod.deferred = [];
    }
    const deferred = self._zod.deferred;
    for (const item10021 of deferred) {
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
      let constructResult;
      const self = this;
      Parent(this, Definition);
      const obj = closure_4(Definition);
      if (_isNativeReflectConstruct()) {
        const _Reflect = Reflect;
        constructResult = Reflect.construct(obj, arguments, closure_4(self).constructor);
      } else {
        constructResult = obj(...arguments);
      }
      return init(self, constructResult);
    }
  }
  let tmp3 = constr(Definition, Parent);
  const tmp4 = _createClass(Definition);
  _getPrototypeOf = tmp4;
  let obj = { value: ZodError };
  Object.defineProperty(tmp4, "name", obj);
  Object.defineProperty(constr, "init", { value: init });
  let obj2 = {
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
              hasItem = traits.has(ZodError);
            }
          }
        }
        tmp3 = hasItem;
      }
      return tmp3;
    }
  };
  Object.defineProperty(constr, Symbol.hasInstance, obj2);
  let obj3 = { value: ZodError };
  Object.defineProperty(constr, "name", obj3);
  return constr;
};
export const config = function config(arg0) {
  const tmp = arg0;
  if (tmp) {
    const _Object = Object;
    const merged = Object.assign(exports.globalConfig, arg0);
  }
  return exports.globalConfig;
};
export const NEVER = Object.freeze({ status: "aborted" });
export const $brand = Symbol("zod_brand");
export const globalConfig = {};