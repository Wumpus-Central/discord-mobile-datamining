// _runtime/metro/10365__.js
import assignSimilarDate from "../10180_assignSimilarDate.js";
import AbstractParserWithWordBoundaryChecking from "../10181_AbstractParserWithWordBoundaryChecking.js";
import now2 from "../10198_now.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

let hasOwnProperty;

let self = this;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {}));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
let self2 = this;
if (this) {
  self2 = self.__createBinding;
}
if (!self2) {
  let tmp3 = globalThis;
  let _Object = Object;
  self2 = Object.create
    ? (arg0, __esModule, arg2, arg3) => {
        function get() {
          return __esModule[closure_1];
        }
        let closure_0 = __esModule;
        let closure_1 = arg2;
        let tmp = arg3;
        if (undefined === arg3) {
          tmp = arg2;
        }
        let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(__esModule, arg2);
        let tmp3 = ownPropertyDescriptor;
        if (tmp3) {
          let tmp4;
          if ("get" in ownPropertyDescriptor) {
            tmp4 = !__esModule.__esModule;
          } else {
            tmp4 = ownPropertyDescriptor.writable || ownPropertyDescriptor.configurable;
          }
          tmp3 = !tmp4;
        }
        if (!tmp3) {
          ownPropertyDescriptor = { enumerable: true, get };
          const obj = { enumerable: true, get };
        }
        Object.defineProperty(arg0, tmp, ownPropertyDescriptor);
      }
    : (arg0, arg1, arg2, arg3) => {
        let tmp = arg3;
        if (undefined === arg3) {
          tmp = arg2;
        }
        arg0[tmp] = arg1[arg2];
      };
}
let tmp4 = self && self.__setModuleDefault;
if (!tmp4) {
  let tmp5 = globalThis;
  const _Object2 = Object;
  tmp4 = Object.create
    ? (arg0, value) => {
        const obj = { enumerable: true, value };
        Object.defineProperty(arg0, "default", obj);
      }
    : (arg0, arg1) => {
        arg0.default = arg1;
      };
}
let closure_8 = tmp4;
let fn = self && self.__importStar;
if (!fn) {
  fn = function c(arg0) {
    fn =
      Object.getOwnPropertyNames ||
      ((obj) => {
        const items = [];
        for (const key10005 in obj) {
          let _Object = Object;
          hasOwnProperty = Object.prototype.hasOwnProperty;
          if (!hasOwnProperty.call(obj, key10005)) {
            continue;
          } else {
            items[items.length] = key10005;
            continue;
          }
          continue;
        }
        return items;
      });
    return fn(arg0);
  };
  fn = (__esModule) => {
    const tmp = __esModule;
    if (tmp) {
      if (__esModule.__esModule) {
        return __esModule;
      }
    }
    const obj = {};
    if (null != __esModule) {
      let num;
      const arr = fn(__esModule);
      for (let num = 0; num < arr.length; num = num + 1) {
        if ("default" !== arr[num]) {
          let tmp5 = self2(obj, __esModule, arr[num]);
        }
      }
    }
    closure_8(obj, __esModule);
    return obj;
  };
}
const now = fn(now2);
const regExp = new RegExp(
  "(nu|idag|imorgon|\u00F6vermorgon|ig\u00E5r|f\u00F6rrg\u00E5r|i\\s*f\u00F6rrg\u00E5r)(?:\\s*(?:p\u00E5\\s*)?(morgonen?|f\u00F6rmiddagen?|middagen?|eftermiddagen?|kv\u00E4llen?|natten?|midnatt))?(?=\\W|$)",
  "i",
);
class SVCasualDateParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, SVCasualDateParser);
    const obj = _getPrototypeOf(SVCasualDateParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(SVCasualDateParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern(arg0) {
    return regExp;
  },
};
let items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(refDate, arg1) {
      let nowResult;
      refDate = refDate.refDate;
      const str = arg1[1] || "";
      const formatted = str.toLowerCase();
      const str2 = arg1[2] || "";
      const formatted1 = str2.toLowerCase();
      const parsingComponents = refDate.createParsingComponents();
      if ("nu" === formatted) {
        nowResult = now.now(refDate.reference);
      } else if ("idag" === formatted) {
        nowResult = now.today(refDate.reference);
      } else {
        if ("imorgon" !== formatted) {
          if ("imorn" !== formatted) {
            if ("ig\u00E5r" === formatted) {
              const _Date2 = Date;
              const self3 = this;
              const self4 = this;
              const date = new Date(refDate.getTime());
              date.setDate(date.getDate() - 1);
              assignSimilarDate.assignSimilarDate(parsingComponents, date);
              assignSimilarDate.implySimilarTime(parsingComponents, date);
              nowResult = parsingComponents;
            } else if ("f\u00F6rrg\u00E5r" === formatted) {
              const _Date = Date;
              const self = this;
              self2 = this;
              const date1 = new Date(refDate.getTime());
              date1.setDate(date1.getDate() - 2);
              assignSimilarDate.assignSimilarDate(parsingComponents, date1);
              assignSimilarDate.implySimilarTime(parsingComponents, date1);
              nowResult = parsingComponents;
            } else {
              nowResult = parsingComponents;
            }
          }
        }
        const _Date3 = Date;
        const self5 = this;
        const self6 = this;
        const date2 = new Date(refDate.getTime());
        date2.setDate(date2.getDate() + 1);
        assignSimilarDate.assignSimilarDate(parsingComponents, date2);
        assignSimilarDate.implySimilarTime(parsingComponents, date2);
        nowResult = parsingComponents;
      }
      switch (formatted1) {
        case "morgon": {
          nowResult.imply("hour", 6);
          nowResult.imply("minute", 0);
          nowResult.imply("second", 0);
          nowResult.imply("millisecond", 0);
          return nowResult;
        }
        case "morgonen": {
          nowResult.imply("hour", 6);
          nowResult.imply("minute", 0);
          nowResult.imply("second", 0);
          nowResult.imply("millisecond", 0);
          return nowResult;
        }
        case "f\u00F6rmiddag": {
          nowResult.imply("hour", 9);
          nowResult.imply("minute", 0);
          nowResult.imply("second", 0);
          nowResult.imply("millisecond", 0);
          break;
        }
        case "f\u00F6rmiddagen": {
          nowResult.imply("hour", 9);
          nowResult.imply("minute", 0);
          nowResult.imply("second", 0);
          nowResult.imply("millisecond", 0);
          break;
        }
        case "middag": {
          nowResult.imply("hour", 12);
          nowResult.imply("minute", 0);
          nowResult.imply("second", 0);
          nowResult.imply("millisecond", 0);
          break;
        }
        case "middagen": {
          nowResult.imply("hour", 12);
          nowResult.imply("minute", 0);
          nowResult.imply("second", 0);
          nowResult.imply("millisecond", 0);
          break;
        }
        case "eftermiddag": {
          nowResult.imply("hour", 15);
          nowResult.imply("minute", 0);
          nowResult.imply("second", 0);
          nowResult.imply("millisecond", 0);
          break;
        }
        case "eftermiddagen": {
          nowResult.imply("hour", 15);
          nowResult.imply("minute", 0);
          nowResult.imply("second", 0);
          nowResult.imply("millisecond", 0);
          break;
        }
        case "kv\u00E4ll": {
          nowResult.imply("hour", 20);
          nowResult.imply("minute", 0);
          nowResult.imply("second", 0);
          nowResult.imply("millisecond", 0);
          break;
        }
        case "kv\u00E4llen": {
          nowResult.imply("hour", 20);
          nowResult.imply("minute", 0);
          nowResult.imply("second", 0);
          nowResult.imply("millisecond", 0);
          break;
        }
        case "natt": {
          if ("midnatt" === formatted1) {
            nowResult.imply("hour", 0);
          } else {
            nowResult.imply("hour", 2);
          }
          nowResult.imply("minute", 0);
          nowResult.imply("second", 0);
          nowResult.imply("millisecond", 0);
          break;
        }
        case "natten": {
          if ("midnatt" === formatted1) {
            nowResult.imply("hour", 0);
          } else {
            nowResult.imply("hour", 2);
          }
          nowResult.imply("minute", 0);
          nowResult.imply("second", 0);
          nowResult.imply("millisecond", 0);
          break;
        }
        case "midnatt": {
          if ("midnatt" === formatted1) {
            nowResult.imply("hour", 0);
          } else {
            nowResult.imply("hour", 2);
          }
          nowResult.imply("minute", 0);
          nowResult.imply("second", 0);
          nowResult.imply("millisecond", 0);
          break;
        }
      }
    },
  },
];

export default _createClass(SVCasualDateParser, items);
