// === Module 14444: ? ===

// Module 14444
import _mod950 from "module_950" /* 950 */;
import _mod14445 from "module_14445" /* 14445 */;
import finalizeParams from "finalizeParams" /* 14447 */;
import node from "node" /* 14448 */;
import _validateAsync from "_validateAsync" /* 14449 */;
import _mod14450 from "module_14450" /* 14450 */;
import _mod14451 from "module_14451" /* 14451 */;
import _mod14452 from "module_14452" /* 14452 */;
import Doc from "Doc" /* 14453 */;
import _mod14454 from "module_14454" /* 14454 */;
import $output from "$output" /* 14455 */;
import _mod14456 from "module_14456" /* 14456 */;
import _mod14457 from "module_14457" /* 14457 */;
import assignProps from "assignProps" /* 14458 */;
import _mod14461 from "module_14461" /* 14461 */;

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
      fn = self.__exportStar;
    }
    if (!fn) {
      fn = (obj, exports) => {
        for (const key10007 in arg0) {
          let tmp6 = "default" === key10007;
          if (tmp6) {
            if (tmp6) {
              continue;
            } else {
              let tmp4 = self2(arg1, arg0, key10007);
              continue;
            }
            continue;
          } else {
            let _Object = Object;
            hasOwnProperty = Object.prototype.hasOwnProperty;
            let call = hasOwnProperty.call;
            if (typeof call === "unknown") {
              let hasOwnPropertyResult = hasOwnProperty(key10007);
            } else {
              hasOwnPropertyResult = call(arg1, key10007);
            }
          }
        }
      };
    }
    let fn2 = self;
    if (self) {
      fn2 = self.__importStar;
    }
    if (!fn2) {
      fn2 = (__esModule) => {
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
    exports.util = undefined;
    exports.toZod = undefined;
    exports.regexes = undefined;
    exports.locales = undefined;
    exports.toJSONSchema = undefined;
    exports.JSONSchemaGenerator = undefined;
    exports.JSONSchema = undefined;
    fn(_mod14445, exports);
    fn(finalizeParams, exports);
    fn(node, exports);
    fn(_validateAsync, exports);
    fn(_mod14454, exports);
    fn(_mod14450, exports);
    fn(_mod14452, exports);
    exports.util = fn2(require("sourceShape"));
    const _Object4 = Object;
    let obj = {
      enumerable: true,
      get() {
            return require("sourceShape").toZod;
          }
    };
    Object.defineProperty(exports, "toZod", obj);
    exports.regexes = fn2(_mod14451);
    exports.locales = fn2(_mod950);
    fn($output, exports);
    fn(Doc, exports);
    fn(_mod14456, exports);
    fn(_mod14457, exports);
    fn(assignProps, exports);
    const _Object5 = Object;
    const obj2 = {
      enumerable: true,
      get() {
            return require("aggregateChecks").toJSONSchema;
          }
    };
    Object.defineProperty(exports, "toJSONSchema", obj2);
    const _Object6 = Object;
    const obj3 = {
      enumerable: true,
      get() {
            return require("JSONSchemaGenerator").JSONSchemaGenerator;
          }
    };
    Object.defineProperty(exports, "JSONSchemaGenerator", obj3);
    exports.JSONSchema = fn2(_mod14461);
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
              } catch (err) {
              }
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