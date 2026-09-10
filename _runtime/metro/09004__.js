// === Module 9004: ? ===

// Module 9004
import _mod9005 from "module_9005" /* 9005 */;
import _mod9006 from "module_9006" /* 9006 */;
import _mod9007 from "module_9007" /* 9007 */;
import _mod9008 from "module_9008" /* 9008 */;
import _mod9009 from "module_9009" /* 9009 */;
import _mod9010 from "module_9010" /* 9010 */;
import _mod9011 from "module_9011" /* 9011 */;
import _mod9012 from "module_9012" /* 9012 */;
import Doc from "Doc" /* 9013 */;
import ar from "ar" /* 9014 */;
import $output from "$output" /* 9064 */;
import _mod9065 from "module_9065" /* 9065 */;
import initializeContext from "initializeContext" /* 9066 */;
import _mod9069 from "module_9069" /* 9069 */;

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
    fn(_mod9005, exports);
    fn(_mod9006, exports);
    fn(_mod9007, exports);
    fn(_mod9009, exports);
    fn(_mod9010, exports);
    fn(_mod9012, exports);
    exports.util = fn2(_mod9008);
    exports.regexes = fn2(_mod9011);
    exports.locales = fn2(ar);
    fn($output, exports);
    fn(Doc, exports);
    fn(_mod9065, exports);
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
    obj = {
      enumerable: true,
      get() {
            return require("JSONSchemaGenerator").JSONSchemaGenerator;
          }
    };
    Object.defineProperty(exports, "JSONSchemaGenerator", obj);
    exports.JSONSchema = fn2(_mod9069);
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}