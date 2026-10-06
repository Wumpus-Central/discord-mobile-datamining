// _runtime/metro/10230__.js
import Meridiem from "../10179_Meridiem.js";
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
class FRCasualDateParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, FRCasualDateParser);
    const obj = _getPrototypeOf(FRCasualDateParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(FRCasualDateParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern(arg0) {
    return /(maintenant|aujourd'hui|demain|hier|cette\s*nuit|la\s*veille)(?=\W|$)/i;
  },
};
let items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(refDate, arg1) {
      refDate = refDate.refDate;
      const str = arg1[0];
      const str2 = str.toLowerCase();
      const parsingComponents = refDate.createParsingComponents();
      if ("maintenant" === str2) {
        return now.now(refDate.reference);
      } else if ("aujourd'hui" === str2) {
        return now.today(refDate.reference);
      } else if ("hier" === str2) {
        return now.yesterday(refDate.reference);
      } else if ("demain" === str2) {
        return now.tomorrow(refDate.reference);
      } else {
        if (str2.match(/cette\s*nuit/)) {
          assignSimilarDate.assignSimilarDate(parsingComponents, refDate);
          parsingComponents.imply("hour", 22);
          parsingComponents.imply("meridiem", Meridiem.Meridiem.PM);
        } else if (str2.match(/la\s*veille/)) {
          const _Date = Date;
          const self = this;
          self2 = this;
          const date = new Date(refDate.getTime());
          date.setDate(date.getDate() - 1);
          assignSimilarDate.assignSimilarDate(parsingComponents, date);
          parsingComponents.imply("hour", 0);
        }
        return parsingComponents;
      }
    },
  },
];

export default _createClass(FRCasualDateParser, items);
