// _runtime/10552_createConfiguration.js
import Chrono from "10442_Chrono.js";
import ReferenceWithTimezone from "10449_ReferenceWithTimezone.js";
import _mod10451 from "metro/10451__.js";
import includeCommonConfiguration from "10482_includeCommonConfiguration.js";
import regExp from "10484_regExp.js";
import _isNativeReflectConstruct from "10553__isNativeReflectConstruct.js";
import _isNativeReflectConstruct2 from "10555__isNativeReflectConstruct.js";
import _isNativeReflectConstruct3 from "10556__isNativeReflectConstruct.js";
import _isNativeReflectConstruct4 from "10557__isNativeReflectConstruct.js";
import _isNativeReflectConstruct5 from "10558__isNativeReflectConstruct.js";
import _isNativeReflectConstruct6 from "10559__isNativeReflectConstruct.js";
import _isNativeReflectConstruct7 from "10560__isNativeReflectConstruct.js";
import _isNativeReflectConstruct8 from "10562__isNativeReflectConstruct.js";
import _isNativeReflectConstruct9 from "10563__isNativeReflectConstruct.js";
import _isNativeReflectConstruct10 from "10564__isNativeReflectConstruct.js";
import _isNativeReflectConstruct11 from "10565__isNativeReflectConstruct.js";
import _isNativeReflectConstruct12 from "10566__isNativeReflectConstruct.js";
import _isNativeReflectConstruct13 from "10567__isNativeReflectConstruct.js";
import createConfiguration2 from "10568_createConfiguration.js";
import createConfiguration3 from "10569_createConfiguration.js";

const self = this;
function createConfiguration() {
  const obj = { parsers: null, refiners: null };
  const items = [new mod7.default(), , , , , , , , ,];
  const _default = new mod7.default();
  items[1] = new mod.default();
  const _default1 = new mod.default();
  items[2] = new mod9.default();
  const _default2 = new mod9.default();
  items[3] = new mod3.default();
  const _default3 = new mod3.default();
  items[4] = new mod11.default();
  const _default4 = new mod11.default();
  items[5] = new mod5.default();
  const _default5 = new mod5.default();
  items[6] = new mod10.default();
  const _default6 = new mod10.default();
  items[7] = new mod4.default();
  const _default7 = new mod4.default();
  items[8] = new mod8.default();
  const _default8 = new mod8.default();
  items[9] = new mod2.default();
  obj[0] = items;
  const _default9 = new mod2.default();
  const items1 = [new mod12.default()];
  const _default10 = new mod12.default();
  items1[1] = new mod13.default();
  obj[1] = items1;
  const result = includeCommonConfiguration.includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((arg0) => !(arg0 instanceof mod.default));
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
    let fn2 = self;
    if (self) {
      fn2 = self.__importDefault;
    }
    if (!fn2) {
      fn2 = (__esModule) => {
        if (!__esModule) {
          const obj = { default: null };
          obj[0] = __esModule;
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
      parsers.unshift(new mod6.default());
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
    let obj = { enumerable: true, get: null };
    obj[1] = function get() {
      return Chrono.Chrono;
    };
    Object.defineProperty(exports, "Chrono", obj);
    const _Object5 = Object;
    obj = { enumerable: true, get: null };
    obj[1] = function get() {
      return ReferenceWithTimezone.ParsingResult;
    };
    Object.defineProperty(exports, "ParsingResult", obj);
    const _Object6 = Object;
    obj = { enumerable: true, get: null };
    obj[1] = function get() {
      return ReferenceWithTimezone.ParsingComponents;
    };
    Object.defineProperty(exports, "ParsingComponents", obj);
    const _Object7 = Object;
    const obj1 = { enumerable: true, get: null };
    obj1[1] = function get() {
      return ReferenceWithTimezone.ReferenceWithTimezone;
    };
    Object.defineProperty(exports, "ReferenceWithTimezone", obj1);
    const _Object8 = Object;
    const obj2 = { enumerable: true, get: null };
    obj2[1] = function get() {
      return _mod10451.Meridiem;
    };
    Object.defineProperty(exports, "Meridiem", obj2);
    const _Object9 = Object;
    const obj3 = { enumerable: true, get: null };
    obj3[1] = function get() {
      return _mod10451.Weekday;
    };
    Object.defineProperty(exports, "Weekday", obj3);
    let closure_6 = fn2(regExp);
    let closure_7 = fn2(_isNativeReflectConstruct);
    let closure_8 = fn2(_isNativeReflectConstruct2);
    let closure_9 = fn2(_isNativeReflectConstruct3);
    let closure_10 = fn2(_isNativeReflectConstruct4);
    let closure_11 = fn2(_isNativeReflectConstruct5);
    const fn2Result = fn2(_isNativeReflectConstruct6);
    let closure_13 = fn2(_isNativeReflectConstruct7);
    let closure_14 = fn2(_isNativeReflectConstruct8);
    let closure_15 = fn2(_isNativeReflectConstruct9);
    let closure_16 = fn2(_isNativeReflectConstruct10);
    let closure_17 = fn2(_isNativeReflectConstruct11);
    let closure_18 = fn2(_isNativeReflectConstruct12);
    let closure_19 = fn2(_isNativeReflectConstruct13);
    exports.hant = fn(createConfiguration2);
    exports.hans = fn(createConfiguration3);
    const configuration = createConfiguration();
    let parsers = configuration.parsers;
    let _default = new fn2Result.default();
    parsers.unshift(_default);
    const chrono = new Chrono.Chrono(configuration);
    exports.casual = chrono;
    const chrono1 = new Chrono.Chrono(createConfiguration());
    exports.strict = chrono1;
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}
