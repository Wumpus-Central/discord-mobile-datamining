// === Module 8399: ? ===

// Module 8399
import _mod8400 from "module_8400" /* 8400 */;
import _mod8401 from "module_8401" /* 8401 */;
import _mod8402 from "module_8402" /* 8402 */;
import _mod8403 from "module_8403" /* 8403 */;
import _mod8404 from "module_8404" /* 8404 */;
import _mod8405 from "module_8405" /* 8405 */;
import _mod8406 from "module_8406" /* 8406 */;
import _mod8407 from "module_8407" /* 8407 */;
import Doc from "Doc" /* 8408 */;
import ar from "ar" /* 8409 */;
import $output from "$output" /* 8459 */;
import _mod8460 from "module_8460" /* 8460 */;
import initializeContext from "initializeContext" /* 8461 */;
import _mod8464 from "module_8464" /* 8464 */;

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
    fn(_mod8400, exports);
    fn(_mod8401, exports);
    fn(_mod8402, exports);
    fn(_mod8404, exports);
    fn(_mod8405, exports);
    fn(_mod8407, exports);
    exports.util = fn2(_mod8403);
    exports.regexes = fn2(_mod8406);
    exports.locales = fn2(ar);
    fn($output, exports);
    fn(Doc, exports);
    fn(_mod8460, exports);
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
    exports.JSONSchema = fn2(_mod8464);
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}