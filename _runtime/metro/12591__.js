// _runtime/metro/12591__.js
import _isNativeReflectConstruct from "../12592__isNativeReflectConstruct.js";
import _mod12593 from "12593__.js";
import toDotPath from "../12594_toDotPath.js";
import mergeDefs from "../12595_mergeDefs.js";
import isValidBase64 from "../12596_isValidBase64.js";
import _mod12597 from "12597__.js";
import mergeDefs2 from "../12598_mergeDefs.js";
import _mod12599 from "12599__.js";
import Doc from "../12600_Doc.js";
import _mod12601 from "12601__.js";
import $output from "../12651__output.js";
import _mod12652 from "12652__.js";
import initializeContext from "../12653_initializeContext.js";
import stringProcessor from "../12654_stringProcessor.js";
import JSONSchemaGenerator from "../12655_JSONSchemaGenerator.js";
import _mod12656 from "12656__.js";

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
    fn(_mod12593, exports);
    fn(toDotPath, exports);
    fn(isValidBase64, exports);
    fn(_mod12597, exports);
    fn(_mod12599, exports);
    exports.util = fn2(mergeDefs);
    exports.regexes = fn2(mergeDefs2);
    exports.locales = fn2(_mod12601);
    fn($output, exports);
    fn(Doc, exports);
    fn(_mod12652, exports);
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
    exports.JSONSchema = fn2(_mod12656);
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}