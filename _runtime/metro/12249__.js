// _runtime/metro/12249__.js
import _mod12160 from "12160__.js";
import _mod12240 from "12240__.js";
import _mod12248 from "12248__.js";

const self = this;
let self2 = this;
if (this) {
  self2 = self.__createBinding;
}
if (self2) {
  let __setModuleDefault = self;
  if (self) {
    __setModuleDefault = self.__setModuleDefault;
  }
  if (__setModuleDefault) {
    let fn = self;
    if (self) {
      fn = self.__importStar;
    }
    if (!fn) {
      fn = (__esModule) => {
        if (__esModule) {
          if (__esModule.__esModule) {
            return __esModule;
          }
        }
        const obj = {};
        if (null != __esModule) {
          for (const key10009 in arg0) {
            let tmp9 = "default" !== key10009;
            if (!tmp9) {
              if (!tmp9) {
                continue;
              } else {
                let tmp6 = self2(obj, arg0, key10009);
                continue;
              }
              continue;
            } else {
              let _Object = Object;
              hasOwnProperty = Object.prototype.hasOwnProperty;
              let call = hasOwnProperty.call;
              if (typeof call === "unknown") {
                let hasOwnPropertyResult = hasOwnProperty(key10009);
              } else {
                hasOwnPropertyResult = call(arg0, key10009);
              }
            }
          }
        }
        __setModuleDefault(obj, __esModule);
        return obj;
      };
    }
    const _Object3 = Object;
    exports.input = function input(arg0) {
      return _mod12248.visit(arg0, {
        pipe(_zod) {
          const def = _zod._zod.def;
          const traits = def.in._zod.traits;
          if (traits.has("$ZodTransform")) {
            ({ out, checks } = def);
            length = undefined;
            if (checks != null) {
              length = checks.length;
            }
            let cloneResult = out;
            if (length) {
              const def2 = out._zod.def;
              let checks1 = def2.checks;
              if (checks1 == null) {
                checks1 = [];
              }
              const obj = { checks: null };
              items = [];
              HermesBuiltin.arraySpread(checks, HermesBuiltin.arraySpread(checks1, 0));
              obj.checks = items;
              cloneResult = _mod12160.clone(out, _mod12160.mergeDefs(def2, obj), { parent: true });
            }
            let _in = cloneResult;
          } else {
            _in = def.in;
          }
          return _in;
        },
        default(_zod, arg1) {
          let optionalResult = _zod;
          if (arg1) {
            optionalResult = closure_1_5.optional(_zod._zod.def.innerType);
          }
          return optionalResult;
        },
        catch(_zod, arg1) {
          let innerType = _zod;
          if (arg1) {
            innerType = _zod._zod.def.innerType;
          }
          return innerType;
        },
      });
    };
    exports.output = function output(arg0) {
      return _mod12248.visit(arg0, {
        pipe(_zod) {
          ({ out, checks } = _zod._zod.def);
          length = undefined;
          if (checks != null) {
            length = checks.length;
          }
          let cloneResult = out;
          if (length) {
            const def = out._zod.def;
            let checks1 = def.checks;
            if (checks1 == null) {
              checks1 = [];
            }
            const obj = { checks: null };
            items = [];
            HermesBuiltin.arraySpread(checks, HermesBuiltin.arraySpread(checks1, 0));
            obj.checks = items;
            cloneResult = _mod12160.clone(out, _mod12160.mergeDefs(def, obj), { parent: true });
          }
          return cloneResult;
        },
        prefault(_zod, arg1) {
          let innerType = _zod;
          if (arg1) {
            innerType = _zod._zod.def.innerType;
          }
          return innerType;
        },
      });
    };
    let closure_5 = fn(_mod12240);
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
                  const obj = {
                    value,
                    writable: false,
                    enumerable: ownPropertyDescriptor.enumerable,
                    configurable: false,
                  };
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
  } else {
    let _Object2 = Object;
  }
} else {
  let _Object = Object;
}
