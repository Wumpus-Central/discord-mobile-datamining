// === Module 12479: ? ===

// Module 12479
import _mod12480 from "module_12480" /* 12480 */;
import _mod12481 from "module_12481" /* 12481 */;
import _mod12482 from "module_12482" /* 12482 */;
import _mod12483 from "module_12483" /* 12483 */;
import _mod12484 from "module_12484" /* 12484 */;
import _mod12485 from "module_12485" /* 12485 */;
import _mod12486 from "module_12486" /* 12486 */;
import _mod12487 from "module_12487" /* 12487 */;
import Doc from "Doc" /* 12488 */;
import ar from "ar" /* 12489 */;
import $output from "$output" /* 12539 */;
import _mod12540 from "module_12540" /* 12540 */;
import initializeContext from "initializeContext" /* 12541 */;
import _mod12544 from "module_12544" /* 12544 */;

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
    fn(_mod12480, exports);
    fn(_mod12481, exports);
    fn(_mod12482, exports);
    fn(_mod12484, exports);
    fn(_mod12485, exports);
    fn(_mod12487, exports);
    exports.util = fn2(_mod12483);
    exports.regexes = fn2(_mod12486);
    exports.locales = fn2(ar);
    fn($output, exports);
    fn(Doc, exports);
    fn(_mod12540, exports);
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
    exports.JSONSchema = fn2(_mod12544);
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}