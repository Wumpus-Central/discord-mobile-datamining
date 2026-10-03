// === Module 8603: ? ===

// Module 8603
import _mod8604 from "module_8604" /* 8604 */;
import _mod8605 from "module_8605" /* 8605 */;
import _mod8606 from "module_8606" /* 8606 */;
import _mod8607 from "module_8607" /* 8607 */;
import _mod8608 from "module_8608" /* 8608 */;
import _mod8609 from "module_8609" /* 8609 */;
import _mod8610 from "module_8610" /* 8610 */;
import _mod8611 from "module_8611" /* 8611 */;
import Doc from "Doc" /* 8612 */;
import ar from "ar" /* 8613 */;
import $output from "$output" /* 8663 */;
import _mod8664 from "module_8664" /* 8664 */;
import initializeContext from "initializeContext" /* 8665 */;
import _mod8668 from "module_8668" /* 8668 */;

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
    fn(_mod8604, exports);
    fn(_mod8605, exports);
    fn(_mod8606, exports);
    fn(_mod8608, exports);
    fn(_mod8609, exports);
    fn(_mod8611, exports);
    exports.util = fn2(_mod8607);
    exports.regexes = fn2(_mod8610);
    exports.locales = fn2(ar);
    fn($output, exports);
    fn(Doc, exports);
    fn(_mod8664, exports);
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
    exports.JSONSchema = fn2(_mod8668);
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}