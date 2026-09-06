// === Module 8935: ? ===

// Module 8935
import _isNativeReflectConstruct from "_isNativeReflectConstruct" /* 8936 */;
import _mod8937 from "module_8937" /* 8937 */;
import toDotPath from "toDotPath" /* 8938 */;
import mergeDefs from "mergeDefs" /* 8939 */;
import isValidBase64 from "isValidBase64" /* 8940 */;
import _mod8941 from "module_8941" /* 8941 */;
import mergeDefs2 from "mergeDefs" /* 8942 */;
import _mod8943 from "module_8943" /* 8943 */;
import Doc from "Doc" /* 8944 */;
import _mod8945 from "module_8945" /* 8945 */;
import $output from "$output" /* 8995 */;
import _mod8996 from "module_8996" /* 8996 */;
import initializeContext from "initializeContext" /* 8997 */;
import stringProcessor from "stringProcessor" /* 8998 */;
import JSONSchemaGenerator from "JSONSchemaGenerator" /* 8999 */;
import _mod9000 from "module_9000" /* 9000 */;

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
    fn(_mod8937, exports);
    fn(toDotPath, exports);
    fn(isValidBase64, exports);
    fn(_mod8941, exports);
    fn(_mod8943, exports);
    exports.util = fn2(mergeDefs);
    exports.regexes = fn2(mergeDefs2);
    exports.locales = fn2(_mod8945);
    fn($output, exports);
    fn(Doc, exports);
    fn(_mod8996, exports);
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
    exports.JSONSchema = fn2(_mod9000);
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}