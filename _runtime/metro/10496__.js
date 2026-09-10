// === Module 10496: ? ===

// Module 10496
import Chrono from "Chrono" /* 10497 */;
import _mod10545 from "module_10545" /* 10545 */;
import _mod10557 from "module_10557" /* 10557 */;
import _mod10570 from "module_10570" /* 10570 */;
import _mod10581 from "module_10581" /* 10581 */;
import _mod10590 from "module_10590" /* 10590 */;
import _mod10608 from "module_10608" /* 10608 */;
import _mod10629 from "module_10629" /* 10629 */;
import _mod10644 from "module_10644" /* 10644 */;
import _mod10654 from "module_10654" /* 10654 */;
import _mod10669 from "module_10669" /* 10669 */;
import _mod10688 from "module_10688" /* 10688 */;

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
            const items = [];
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
            return require("module_10498").Chrono;
          }
    };
    Object.defineProperty(exports, "Chrono", obj);
    const _Object5 = Object;
    obj = {
      enumerable: true,
      get() {
            return require("module_10498").ParsingContext;
          }
    };
    Object.defineProperty(exports, "ParsingContext", obj);
    const _Object6 = Object;
    obj = {
      enumerable: true,
      get() {
            return require("ReferenceWithTimezone").ParsingResult;
          }
    };
    Object.defineProperty(exports, "ParsingResult", obj);
    const _Object7 = Object;
    const obj1 = {
      enumerable: true,
      get() {
            return require("ReferenceWithTimezone").ParsingComponents;
          }
    };
    Object.defineProperty(exports, "ParsingComponents", obj1);
    const _Object8 = Object;
    const obj2 = {
      enumerable: true,
      get() {
            return require("ReferenceWithTimezone").ReferenceWithTimezone;
          }
    };
    Object.defineProperty(exports, "ReferenceWithTimezone", obj2);
    const _Object9 = Object;
    const obj3 = {
      enumerable: true,
      get() {
            return require("Meridiem").Meridiem;
          }
    };
    Object.defineProperty(exports, "Meridiem", obj3);
    const _Object10 = Object;
    const obj4 = {
      enumerable: true,
      get() {
            return require("Meridiem").Weekday;
          }
    };
    Object.defineProperty(exports, "Weekday", obj4);
    exports.de = fn(_mod10545);
    exports.fr = fn(_mod10557);
    exports.ja = fn(_mod10570);
    exports.pt = fn(_mod10581);
    exports.nl = fn(_mod10590);
    exports.zh = fn(_mod10608);
    exports.ru = fn(_mod10629);
    exports.es = fn(_mod10644);
    exports.uk = fn(_mod10654);
    exports.it = fn(_mod10669);
    exports.sv = fn(_mod10688);
    ({ strict: exports.strict, casual: exports.casual } = fnResult);
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}