// === Module 12610: ? ===

// Module 12610
import _isNativeReflectConstruct from "_isNativeReflectConstruct" /* 12611 */;
import _mod12612 from "module_12612" /* 12612 */;
import toDotPath from "toDotPath" /* 12613 */;
import mergeDefs from "mergeDefs" /* 12614 */;
import isValidBase64 from "isValidBase64" /* 12615 */;
import _mod12616 from "module_12616" /* 12616 */;
import mergeDefs2 from "mergeDefs" /* 12617 */;
import _mod12618 from "module_12618" /* 12618 */;
import Doc from "Doc" /* 12619 */;
import _mod12620 from "module_12620" /* 12620 */;
import $output from "$output" /* 12670 */;
import _mod12671 from "module_12671" /* 12671 */;
import initializeContext from "initializeContext" /* 12672 */;
import stringProcessor from "stringProcessor" /* 12673 */;
import JSONSchemaGenerator from "JSONSchemaGenerator" /* 12674 */;
import _mod12675 from "module_12675" /* 12675 */;

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
          let tmp5 = key10007;
          let tmp6 = "default" === key10007;
          if (tmp6) {
            if (tmp6) {
              continue;
            } else {
              let tmp3 = self2;
              let tmp4 = self2(arg1, arg0, key10007);
              continue;
            }
            continue;
          } else {
            let _Object = Object;
            let call = hasOwnProperty.call;
            if (typeof call === "unknown") {
              let hasOwnPropertyResult = hasOwnProperty(key10007);
            } else {
              hasOwnPropertyResult = call(arg1, key10007);
            }
            let tmp2 = hasOwnPropertyResult;
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
            let tmp8 = key10009;
            let tmp9 = "default" !== key10009;
            if (!tmp9) {
              if (!tmp9) {
                continue;
              } else {
                let tmp5 = self2;
                let tmp6 = self2(obj, arg0, key10009);
                continue;
              }
              continue;
            } else {
              let _Object = Object;
              let call = hasOwnProperty.call;
              if (typeof call === "unknown") {
                let hasOwnPropertyResult = hasOwnProperty(key10009);
              } else {
                hasOwnPropertyResult = call(arg0, key10009);
              }
              let tmp4 = hasOwnPropertyResult;
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
    fn(_isNativeReflectConstruct, exports);
    fn(_mod12612, exports);
    fn(toDotPath, exports);
    fn(isValidBase64, exports);
    fn(_mod12616, exports);
    fn(_mod12618, exports);
    exports.util = fn2(mergeDefs);
    exports.regexes = fn2(mergeDefs2);
    exports.locales = fn2(_mod12620);
    fn($output, exports);
    fn(Doc, exports);
    fn(_mod12671, exports);
    fn(initializeContext, exports);
    const _Object4 = Object;
    let obj = { enumerable: true, get: null };
    obj[1] = function get() {
      return stringProcessor.toJSONSchema;
    };
    Object.defineProperty(exports, "toJSONSchema", obj);
    const _Object5 = Object;
    obj = { enumerable: true, get: null };
    obj[1] = function get() {
      return JSONSchemaGenerator.JSONSchemaGenerator;
    };
    Object.defineProperty(exports, "JSONSchemaGenerator", obj);
    exports.JSONSchema = fn2(_mod12675);
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}