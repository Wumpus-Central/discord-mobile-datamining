// === Module 10426: ? ===

// Module 10426
import Chrono from "Chrono" /* 10427 */;
import Chrono2 from "Chrono" /* 10428 */;
import ReferenceWithTimezone from "ReferenceWithTimezone" /* 10435 */;
import _mod10437 from "module_10437" /* 10437 */;
import createConfiguration from "createConfiguration" /* 10475 */;
import createConfiguration2 from "createConfiguration" /* 10487 */;
import createConfiguration3 from "createConfiguration" /* 10500 */;
import createConfiguration4 from "createConfiguration" /* 10511 */;
import createConfiguration5 from "createConfiguration" /* 10520 */;
import createConfiguration6 from "createConfiguration" /* 10538 */;
import createConfiguration7 from "createConfiguration" /* 10559 */;
import createConfiguration8 from "createConfiguration" /* 10574 */;
import createConfiguration9 from "createConfiguration" /* 10584 */;
import createConfiguration10 from "createConfiguration" /* 10599 */;
import createCasualConfiguration from "createCasualConfiguration" /* 10618 */;

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
      function t(arg0) {
        let fn = Object.getOwnPropertyNames;
        if (!fn) {
          fn = (obj) => {
            const items = [];
            for (const key10005 in arg0) {
              let tmp2 = key10005;
              let _Object = Object;
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
      }
      fn = (__esModule) => {
        if (__esModule) {
          if (__esModule.__esModule) {
            return __esModule;
          }
        }
        const obj = {};
        if (null != __esModule) {
          const arr = t(__esModule);
          for (let num = 0; num < arr.length; num = num + 1) {
            let tmp2 = num;
            if ("default" !== arr[num]) {
              let tmp3 = self2;
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
    let obj = { enumerable: true, get: null };
    obj[1] = function get() {
      return Chrono2.Chrono;
    };
    Object.defineProperty(exports, "Chrono", obj);
    const _Object5 = Object;
    obj = { enumerable: true, get: null };
    obj[1] = function get() {
      return Chrono2.ParsingContext;
    };
    Object.defineProperty(exports, "ParsingContext", obj);
    const _Object6 = Object;
    obj = { enumerable: true, get: null };
    obj[1] = function get() {
      return ReferenceWithTimezone.ParsingResult;
    };
    Object.defineProperty(exports, "ParsingResult", obj);
    const _Object7 = Object;
    const obj1 = { enumerable: true, get: null };
    obj1[1] = function get() {
      return ReferenceWithTimezone.ParsingComponents;
    };
    Object.defineProperty(exports, "ParsingComponents", obj1);
    const _Object8 = Object;
    const obj2 = { enumerable: true, get: null };
    obj2[1] = function get() {
      return ReferenceWithTimezone.ReferenceWithTimezone;
    };
    Object.defineProperty(exports, "ReferenceWithTimezone", obj2);
    const _Object9 = Object;
    const obj3 = { enumerable: true, get: null };
    obj3[1] = function get() {
      return _mod10437.Meridiem;
    };
    Object.defineProperty(exports, "Meridiem", obj3);
    const _Object10 = Object;
    const obj4 = { enumerable: true, get: null };
    obj4[1] = function get() {
      return _mod10437.Weekday;
    };
    Object.defineProperty(exports, "Weekday", obj4);
    exports.de = fn(createConfiguration);
    exports.fr = fn(createConfiguration2);
    exports.ja = fn(createConfiguration3);
    exports.pt = fn(createConfiguration4);
    exports.nl = fn(createConfiguration5);
    exports.zh = fn(createConfiguration6);
    exports.ru = fn(createConfiguration7);
    exports.es = fn(createConfiguration8);
    exports.uk = fn(createConfiguration9);
    exports.it = fn(createConfiguration10);
    exports.sv = fn(createCasualConfiguration);
    ({ strict: exports.strict, casual: exports.casual } = fnResult);
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}