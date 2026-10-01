// === Module 8590: ? ===

// Module 8590
import _mod8591 from "module_8591" /* 8591 */;
import _mod8592 from "module_8592" /* 8592 */;
import _mod8593 from "module_8593" /* 8593 */;
import _mod8594 from "module_8594" /* 8594 */;
import _mod8595 from "module_8595" /* 8595 */;
import _mod8596 from "module_8596" /* 8596 */;
import _mod8597 from "module_8597" /* 8597 */;
import _mod8598 from "module_8598" /* 8598 */;
import Doc from "Doc" /* 8599 */;
import ar from "ar" /* 8600 */;
import $output from "$output" /* 8650 */;
import _mod8651 from "module_8651" /* 8651 */;
import initializeContext from "initializeContext" /* 8652 */;
import _mod8655 from "module_8655" /* 8655 */;

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
    exports.regexes = undefined;
    exports.locales = undefined;
    exports.toJSONSchema = undefined;
    exports.JSONSchemaGenerator = undefined;
    exports.JSONSchema = undefined;
    fn(_mod8591, exports);
    fn(_mod8592, exports);
    fn(_mod8593, exports);
    fn(_mod8595, exports);
    fn(_mod8596, exports);
    fn(_mod8598, exports);
    exports.util = fn2(_mod8594);
    exports.regexes = fn2(_mod8597);
    exports.locales = fn2(ar);
    fn($output, exports);
    fn(Doc, exports);
    fn(_mod8651, exports);
    fn(initializeContext, exports);
    const _Object4 = Object;
    let obj = {
      enumerable: true,
      get() {
            return require("stringProcessor").toJSONSchema;
          }
    };
    Object.defineProperty(exports, "toJSONSchema", obj);
    const _Object5 = Object;
    const obj2 = {
      enumerable: true,
      get() {
            return require("JSONSchemaGenerator").JSONSchemaGenerator;
          }
    };
    Object.defineProperty(exports, "JSONSchemaGenerator", obj2);
    exports.JSONSchema = fn2(_mod8655);
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}