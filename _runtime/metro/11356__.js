// === Module 11356: ? ===

// Module 11356
import Chrono from "Chrono" /* 11357 */;
import _mod11405 from "module_11405" /* 11405 */;
import _mod11417 from "module_11417" /* 11417 */;
import _mod11430 from "module_11430" /* 11430 */;
import _mod11441 from "module_11441" /* 11441 */;
import _mod11450 from "module_11450" /* 11450 */;
import _mod11468 from "module_11468" /* 11468 */;
import _mod11489 from "module_11489" /* 11489 */;
import _mod11504 from "module_11504" /* 11504 */;
import _mod11514 from "module_11514" /* 11514 */;
import _mod11529 from "module_11529" /* 11529 */;
import _mod11548 from "module_11548" /* 11548 */;

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
      fn = self.__importStar;
    }
    if (!fn) {
      fn = function t(arg0) {
        fn = Object.getOwnPropertyNames;
        if (!fn) {
          fn = (obj) => {
            items = [];
            for (const key10005 in arg0) {
              let _Object = Object;
              hasOwnProperty = Object.prototype.hasOwnProperty;
              let call = hasOwnProperty.call;
              if (typeof call === "unknown") {
                let hasOwnPropertyResult = hasOwnProperty(key10005);
              } else {
                hasOwnPropertyResult = call(arg0, key10005);
              }
              if (!hasOwnPropertyResult) {
                continue;
              } else {
                items[items.length] = key10005;
                continue;
              }
              continue;
            }
            return items;
          };
        }
        return fn(arg0);
      };
      fn = (__esModule) => {
        if (__esModule) {
          if (__esModule.__esModule) {
            return __esModule;
          }
        }
        const obj = {};
        if (null != __esModule) {
          const arr = fn(__esModule);
          for (let num = 0; num < arr.length; num = num + 1) {
            if ("default" !== arr[num]) {
              let tmp4 = self2(obj, __esModule, arr[num]);
            }
          }
        }
        __setModuleDefault(obj, __esModule);
        return obj;
      };
    }
    const _Object3 = Object;
    exports.en = undefined;
    exports.Chrono = undefined;
    exports.ParsingContext = undefined;
    exports.ParsingResult = undefined;
    exports.ParsingComponents = undefined;
    exports.ReferenceWithTimezone = undefined;
    exports.Meridiem = undefined;
    exports.Weekday = undefined;
    exports.de = undefined;
    exports.fr = undefined;
    exports.ja = undefined;
    exports.pt = undefined;
    exports.nl = undefined;
    exports.zh = undefined;
    exports.ru = undefined;
    exports.es = undefined;
    exports.uk = undefined;
    exports.it = undefined;
    exports.sv = undefined;
    exports.strict = undefined;
    exports.casual = undefined;
    exports.parse = function parse(arg0, arg1, arg2) {
      const casual = exports.casual;
      return casual.parse(arg0, arg1, arg2);
    };
    exports.parseDate = function parseDate(arg0, arg1, arg2) {
      const casual = exports.casual;
      return casual.parseDate(arg0, arg1, arg2);
    };
    const fnResult = fn(Chrono);
    exports.en = fnResult;
    const _Object4 = Object;
    let obj = {
      enumerable: true,
      get() {
            return require("module_11358").Chrono;
          }
    };
    Object.defineProperty(exports, "Chrono", obj);
    const _Object5 = Object;
    const obj2 = {
      enumerable: true,
      get() {
            return require("module_11358").ParsingContext;
          }
    };
    Object.defineProperty(exports, "ParsingContext", obj2);
    const _Object6 = Object;
    const obj3 = {
      enumerable: true,
      get() {
            return require("ReferenceWithTimezone").ParsingResult;
          }
    };
    Object.defineProperty(exports, "ParsingResult", obj3);
    const _Object7 = Object;
    const obj4 = {
      enumerable: true,
      get() {
            return require("ReferenceWithTimezone").ParsingComponents;
          }
    };
    Object.defineProperty(exports, "ParsingComponents", obj4);
    const _Object8 = Object;
    const obj5 = {
      enumerable: true,
      get() {
            return require("ReferenceWithTimezone").ReferenceWithTimezone;
          }
    };
    Object.defineProperty(exports, "ReferenceWithTimezone", obj5);
    const _Object9 = Object;
    const obj6 = {
      enumerable: true,
      get() {
            return require("Meridiem").Meridiem;
          }
    };
    Object.defineProperty(exports, "Meridiem", obj6);
    const _Object10 = Object;
    const obj7 = {
      enumerable: true,
      get() {
            return require("Meridiem").Weekday;
          }
    };
    Object.defineProperty(exports, "Weekday", obj7);
    exports.de = fn(_mod11405);
    exports.fr = fn(_mod11417);
    exports.ja = fn(_mod11430);
    exports.pt = fn(_mod11441);
    exports.nl = fn(_mod11450);
    exports.zh = fn(_mod11468);
    exports.ru = fn(_mod11489);
    exports.es = fn(_mod11504);
    exports.uk = fn(_mod11514);
    exports.it = fn(_mod11529);
    exports.sv = fn(_mod11548);
    ({ strict: exports.strict, casual: exports.casual } = fnResult);
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}