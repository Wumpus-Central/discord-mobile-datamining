// _runtime/metro/12159__.js
import _wrapNativeSuper from "00158__wrapNativeSuper.js";
import _createClass from "00042__createClass.js";
import _classCallCheck from "00041__classCallCheck.js";
import hasOwnProperty from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

let $ZodEncodeError = require;
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
let closure_9 = { value: "Path", enumerable: true };
let _Error = null;
if ("captureStackTrace" in Error) {
  _Error = Error;
}
export function $ZodAsyncError() {
  const self = this;
  _classCallCheck(this, $ZodEncodeError);
  items = ["Encountered Promise during synchronous parse. Use .parseAsync() instead."];
  const obj = _getPrototypeOf($ZodEncodeError);
  if (_isNativeReflectConstruct()) {
    const _Reflect = Reflect;
    let constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
  } else {
    constructResult = obj.apply(self, items);
  }
  return hasOwnProperty(self, constructResult);
}
_inherits($ZodAsyncError, _wrapNativeSuper(Error));
$ZodEncodeError = function $ZodEncodeError(name) {
  const self = this;
  _classCallCheck(this, $ZodEncodeError);
  items = ["Encountered unidirectional transform during encode: " + name];
  const obj = _getPrototypeOf($ZodEncodeError);
  if (_isNativeReflectConstruct()) {
    const _Reflect = Reflect;
    let constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
  } else {
    constructResult = obj.apply(self, items);
  }
  const tmp3Result = hasOwnProperty(self, constructResult);
  tmp3Result.name = "ZodEncodeError";
  return tmp3Result;
};
_inherits($ZodEncodeError, _wrapNativeSuper(Error));
if (globalThis.__zod_globalConfig == null) {
  tmp8.__zod_globalConfig = {};
}
(() => {
  let tmp = exports;
  const ownPropertyNames = Object.getOwnPropertyNames(exports);
  let num = 0;
  if (0 < ownPropertyNames.length) {
    const _Object = Object;
    const ownPropertyDescriptor = Object.getOwnPropertyDescriptor(exports, ownPropertyNames[num]);
    if (ownPropertyDescriptor) {
      if (ownPropertyDescriptor.get) {
        if (ownPropertyDescriptor.configurable) {
          try {
            value = ownPropertyDescriptor.get();
            if (undefined !== value) {
              const _Object2 = Object;
              const obj = { value, writable: false, enumerable: ownPropertyDescriptor.enumerable, configurable: false };
              Object.defineProperty(exports, ownPropertyNames[num], obj);
            }
          } catch (err) {}
        }
      }
    }
    num = num + 1;
    tmp = exports;
  }
  const frozen = Object.freeze(tmp);
})();

export function $constructor(ZodError, initializer, range3, Parent) {
  closure_0 = ZodError;
  let weakSet = range3;
  class Internals {
    constructor(arg0) {
      obj = { def: ZodError, constr: _ };
      set = new Set();
      obj.traits = set;
      return;
    }
  }
  function init(_zod, Definition) {
    if (_zod._zod) {
      const traits = _zod._zod.traits;
    } else {
      const obj3 = Object.create(Internals.prototype);
      new Internals(Definition);
      closure_9.value = obj3;
      try {
        const _Object = Object;
        Object.defineProperty(_zod, "_zod", closure_9);
        closure_9.value = undefined;
      } catch (tmp10) {
        tmp.value = undefined;
        throw tmp10;
      }
    }
    let traits2 = _zod._zod.traits;
    traits2.add(closure_0);
    initializer(_zod, Definition);
    if (weakSet) {
      const _Object2 = Object;
      const prototypeOf = Object.getPrototypeOf(_zod);
      const prototype = _zod._zod.constr.prototype;
      traits2 = prototypeOf;
      if (prototypeOf) {
        let tmp16 = prototypeOf;
        traits2 = prototypeOf;
        if (prototypeOf !== prototype) {
          const _Object3 = Object;
          const prototypeOf1 = Object.getPrototypeOf(tmp16);
          traits2 = prototypeOf1;
          while (prototypeOf1) {
            tmp16 = prototypeOf1;
            traits2 = prototypeOf1;
            if (prototypeOf1 === prototype) {
              break;
            }
          }
        }
      }
      if (traits2 == null) {
        traits2 = prototypeOf;
      }
      if (!weakSet.has(traits2)) {
        weakSet.add(traits2);
        $ZodEncodeError(12160).members(traits2, closure_4);
      }
    }
    const prototype2 = fn.prototype;
    for (const key10061 in prototype2) {
      let _Object4 = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      let call = hasOwnProperty.call;
      if (typeof call === "unknown") {
        let hasOwnPropertyResult = hasOwnProperty(key10061);
      } else {
        hasOwnPropertyResult = call(prototype2, key10061);
      }
      if (!hasOwnPropertyResult) {
        continue;
      } else {
        if (key10061 in arg0) {
          continue;
        } else {
          let obj2 = prototype2[key10061];
          arg0[key10061] = obj2.bind(arg0);
          continue;
        }
        continue;
      }
      continue;
    }
  }
  const constr = function _(arg0) {
    Parent = undefined;
    if (Parent != null) {
      Parent = Parent.Parent;
    }
    let self = this;
    if (Parent) {
      self = (function newError(arg0) {
        if (c10) {
          const stackTraceLimit = tmp4.stackTraceLimit;
          if (typeof stackTraceLimit === "number") {
            try {
              tmp4.stackTraceLimit = 0;
              try {
                const tmp8 = new arg0();
                tmp4.stackTraceLimit = stackTraceLimit;
                return tmp8;
              } catch (tmp10) {
                tmp3.stackTraceLimit = tmp2;
                throw tmp10;
              }
            } catch (err) {
              c10 = null;
              const tmp14 = new tmp();
              return tmp14;
            }
          }
        }
        return new arg0();
      })(closure_7);
    }
    init(self, arg0);
    const deferred = self._zod.deferred;
    if (deferred) {
      for (const item10017 of deferred) {
        let item10017Result = item10017();
        continue;
      }
      self._zod.deferred = undefined;
    }
    let postProcessor;
    if (__zod_globalConfig != null) {
      postProcessor = __zod_globalConfig.postProcessor;
    }
    if (postProcessor) {
      postProcessor(self);
    }
    return self;
  };
  _classCallCheck = range3;
  if (range3) {
    const _WeakSet = WeakSet;
    weakSet = new WeakSet();
  }
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
      tmp = closure_4(this, closure_0);
      tmp2 = closure_6;
      obj = closure_6(closure_0);
      tmp3 = closure_5;
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
  _inherits(Definition, Parent);
  let tmp8 = Internals(Definition);
  _inherits = tmp8;
  Object.defineProperty(tmp8, "name", { value: ZodError });
  Object.defineProperty(constr, "init", { value: init });
  Object.defineProperty(constr, Symbol.hasInstance, {
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
  });
  Object.defineProperty(constr, "name", { value: ZodError });
  return constr;
}
export function config(arg0) {
  if (arg0) {
    const _Object = Object;
    const merged = Object.assign(exports.globalConfig, arg0);
  }
  return exports.globalConfig;
}
export const NEVER = Object.freeze({ status: "aborted" });
export const $brand = Symbol("zod_brand");
export const $ZodEncodeError = _createClass($ZodEncodeError);
export const globalConfig = globalThis.__zod_globalConfig;
