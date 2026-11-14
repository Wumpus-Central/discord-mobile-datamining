// _runtime/metro/12246__.js
import _mod12158 from "12158__.js";

const require = globalThis.__r;

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
    exports.ZodISODate = undefined;
    exports.ZodISODateTime = undefined;
    exports.ZodISODuration = undefined;
    exports.ZodISOTime = undefined;
    exports.datetime = function datetime(zodLazy) {
      return closure_5._isoDateTime(require("12240__.js").ZodISODateTime, zodLazy);
    };
    exports.date = function date(zodLazy) {
      return closure_5._isoDate(require("12240__.js").ZodISODate, zodLazy);
    };
    exports.time = function time(zodLazy) {
      return closure_5._isoTime(require("12240__.js").ZodISOTime, zodLazy);
    };
    exports.duration = function duration(zodLazy) {
      return closure_5._isoDuration(require("12240__.js").ZodISODuration, zodLazy);
    };
    let closure_5 = fn(_mod12158);
    const _Object4 = Object;
    let obj = {
      enumerable: true,
      get() {
        return require("12240__.js").ZodISODate;
      },
    };
    Object.defineProperty(exports, "ZodISODate", obj);
    const _Object5 = Object;
    const obj2 = {
      enumerable: true,
      get() {
        return require("12240__.js").ZodISODateTime;
      },
    };
    Object.defineProperty(exports, "ZodISODateTime", obj2);
    const _Object6 = Object;
    const obj3 = {
      enumerable: true,
      get() {
        return require("12240__.js").ZodISODuration;
      },
    };
    Object.defineProperty(exports, "ZodISODuration", obj3);
    const _Object7 = Object;
    const obj4 = {
      enumerable: true,
      get() {
        return require("12240__.js").ZodISOTime;
      },
    };
    Object.defineProperty(exports, "ZodISOTime", obj4);
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
