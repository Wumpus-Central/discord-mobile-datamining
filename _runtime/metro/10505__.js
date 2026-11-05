// === Module 10505: ? ===

// Module 10505
import Chrono from "Chrono" /* 10506 */;
import _mod10554 from "module_10554" /* 10554 */;
import _mod10566 from "module_10566" /* 10566 */;
import _mod10579 from "module_10579" /* 10579 */;
import _mod10590 from "module_10590" /* 10590 */;
import _mod10599 from "module_10599" /* 10599 */;
import _mod10617 from "module_10617" /* 10617 */;
import _mod10638 from "module_10638" /* 10638 */;
import _mod10653 from "module_10653" /* 10653 */;
import _mod10663 from "module_10663" /* 10663 */;
import _mod10678 from "module_10678" /* 10678 */;
import _mod10697 from "module_10697" /* 10697 */;

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
            return require("module_10507").Chrono;
          }
    };
    Object.defineProperty(exports, "Chrono", obj);
    const _Object5 = Object;
    const obj2 = {
      enumerable: true,
      get() {
            return require("module_10507").ParsingContext;
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
    exports.de = fn(_mod10554);
    exports.fr = fn(_mod10566);
    exports.ja = fn(_mod10579);
    exports.pt = fn(_mod10590);
    exports.nl = fn(_mod10599);
    exports.zh = fn(_mod10617);
    exports.ru = fn(_mod10638);
    exports.es = fn(_mod10653);
    exports.uk = fn(_mod10663);
    exports.it = fn(_mod10678);
    exports.sv = fn(_mod10697);
    ({ strict: exports.strict, casual: exports.casual } = fnResult);
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}