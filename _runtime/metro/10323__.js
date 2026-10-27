// === Module 10323: ? ===

// Module 10323
import includeCommonConfiguration from "includeCommonConfiguration" /* 10253 */;
import _mod10255 from "module_10255" /* 10255 */;
import _mod10324 from "module_10324" /* 10324 */;
import _mod10326 from "module_10326" /* 10326 */;
import _mod10327 from "module_10327" /* 10327 */;
import _mod10328 from "module_10328" /* 10328 */;
import _mod10329 from "module_10329" /* 10329 */;
import _mod10330 from "module_10330" /* 10330 */;
import _mod10331 from "module_10331" /* 10331 */;
import _mod10333 from "module_10333" /* 10333 */;
import _mod10334 from "module_10334" /* 10334 */;
import _mod10335 from "module_10335" /* 10335 */;
import _mod10336 from "module_10336" /* 10336 */;
import _mod10337 from "module_10337" /* 10337 */;
import _mod10338 from "module_10338" /* 10338 */;
import _mod10339 from "module_10339" /* 10339 */;
import _mod10340 from "module_10340" /* 10340 */;

const require = globalThis.__r;

const self = this;
function createConfiguration() {
  const obj = { parsers: null, refiners: null };
  const items = [new closure_13.default(), , , , , , , , , ];
  const _default = new closure_13.default();
  items[1] = new closure_7.default();
  const _default1 = new closure_7.default();
  items[2] = new closure_15.default();
  const _default2 = new closure_15.default();
  items[3] = new closure_9.default();
  const _default3 = new closure_9.default();
  items[4] = new closure_17.default();
  const _default4 = new closure_17.default();
  items[5] = new closure_11.default();
  const _default5 = new closure_11.default();
  items[6] = new closure_16.default();
  const _default6 = new closure_16.default();
  items[7] = new closure_10.default();
  const _default7 = new closure_10.default();
  items[8] = new closure_14.default();
  const _default8 = new closure_14.default();
  items[9] = new closure_8.default();
  obj.parsers = items;
  const _default9 = new closure_8.default();
  const items1 = [new closure_18.default(), ];
  const _default10 = new closure_18.default();
  items1[1] = new closure_19.default();
  obj.refiners = items1;
  const result = includeCommonConfiguration.includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof closure_1_6.default));
  return result;
}
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
    let fn2 = self;
    if (self) {
      fn2 = self.__importDefault;
    }
    if (!fn2) {
      fn2 = (__esModule) => {
        if (!__esModule) {
          const obj = { default: __esModule };
          let tmp = obj;
        } else {
          tmp = __esModule;
        }
        return tmp;
      };
    }
    const _Object3 = Object;
    function createCasualConfiguration() {
      const tmp = createConfiguration();
      const parsers = tmp.parsers;
      parsers.unshift(new fn2Result.default());
      return tmp;
    }
    exports.hant = undefined;
    exports.hans = undefined;
    exports.Chrono = undefined;
    exports.ParsingResult = undefined;
    exports.ParsingComponents = undefined;
    exports.ReferenceWithTimezone = undefined;
    exports.Meridiem = undefined;
    exports.Weekday = undefined;
    exports.casual = undefined;
    exports.strict = undefined;
    exports.parse = function parse(arg0, arg1, arg2) {
      const casual = exports.casual;
      return casual.parse(arg0, arg1, arg2);
    };
    exports.parseDate = function parseDate(arg0, arg1, arg2) {
      const casual = exports.casual;
      return casual.parseDate(arg0, arg1, arg2);
    };
    exports.createCasualConfiguration = createCasualConfiguration;
    exports.createConfiguration = createConfiguration;
    const _Object4 = Object;
    let obj = {
      enumerable: true,
      get() {
            return require("module_10213").Chrono;
          }
    };
    Object.defineProperty(exports, "Chrono", obj);
    const _Object5 = Object;
    const obj2 = {
      enumerable: true,
      get() {
            return require("ReferenceWithTimezone").ParsingResult;
          }
    };
    Object.defineProperty(exports, "ParsingResult", obj2);
    const _Object6 = Object;
    const obj3 = {
      enumerable: true,
      get() {
            return require("ReferenceWithTimezone").ParsingComponents;
          }
    };
    Object.defineProperty(exports, "ParsingComponents", obj3);
    const _Object7 = Object;
    const obj4 = {
      enumerable: true,
      get() {
            return require("ReferenceWithTimezone").ReferenceWithTimezone;
          }
    };
    Object.defineProperty(exports, "ReferenceWithTimezone", obj4);
    const _Object8 = Object;
    const obj5 = {
      enumerable: true,
      get() {
            return require("Meridiem").Meridiem;
          }
    };
    Object.defineProperty(exports, "Meridiem", obj5);
    const _Object9 = Object;
    const obj6 = {
      enumerable: true,
      get() {
            return require("Meridiem").Weekday;
          }
    };
    Object.defineProperty(exports, "Weekday", obj6);
    let closure_6 = fn2(_mod10255);
    let closure_7 = fn2(_mod10324);
    let closure_8 = fn2(_mod10326);
    let closure_9 = fn2(_mod10327);
    let closure_10 = fn2(_mod10328);
    let closure_11 = fn2(_mod10329);
    const fn2Result = fn2(_mod10330);
    let closure_13 = fn2(_mod10331);
    let closure_14 = fn2(_mod10333);
    let closure_15 = fn2(_mod10334);
    let closure_16 = fn2(_mod10335);
    let closure_17 = fn2(_mod10336);
    let closure_18 = fn2(_mod10337);
    let closure_19 = fn2(_mod10338);
    exports.hant = fn(_mod10339);
    exports.hans = fn(_mod10340);
    const configuration = createConfiguration();
    let parsers = configuration.parsers;
    let _default = new fn2Result.default();
    parsers.unshift(_default);
    const chrono = new require("module_10213").Chrono(configuration);
    exports.casual = chrono;
    const chrono1 = new require("module_10213").Chrono(createConfiguration());
    exports.strict = chrono1;
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}