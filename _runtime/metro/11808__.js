// === Module 11808: ? ===

// Module 11808
import _mod11809 from "module_11809" /* 11809 */;
import _mod11810 from "module_11810" /* 11810 */;
import _mod11811 from "module_11811" /* 11811 */;
import _mod11812 from "module_11812" /* 11812 */;
import _mod11813 from "module_11813" /* 11813 */;
import _mod11814 from "module_11814" /* 11814 */;
import _mod11815 from "module_11815" /* 11815 */;
import _mod11816 from "module_11816" /* 11816 */;
import Doc from "Doc" /* 11817 */;
import ar from "ar" /* 11818 */;
import $output from "$output" /* 11868 */;
import _mod11869 from "module_11869" /* 11869 */;
import initializeContext from "initializeContext" /* 11870 */;
import _mod11873 from "module_11873" /* 11873 */;

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
    fn(_mod11809, exports);
    fn(_mod11810, exports);
    fn(_mod11811, exports);
    fn(_mod11813, exports);
    fn(_mod11814, exports);
    fn(_mod11816, exports);
    exports.util = fn2(_mod11812);
    exports.regexes = fn2(_mod11815);
    exports.locales = fn2(ar);
    fn($output, exports);
    fn(Doc, exports);
    fn(_mod11869, exports);
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
    exports.JSONSchema = fn2(_mod11873);
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}