// _runtime/metro/10569__.js
import now from "../10456_now.js";
import _mod10563 from "10563__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import _possibleConstructorReturn from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

let self = this;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const call = valueOf.call;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    if (typeof call === "unknown") {
      let callResult = valueOf();
    } else {
      callResult = call(constructResult);
    }
    closure_0 = !callResult;
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
      fn = function o(arg0) {
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
    let closure_7 = fn(now);
    class RUCasualDateParser {
      constructor() {
        self = this;
        tmp = closure_0(this, RUCasualDateParser);
        tmp2 = c2;
        obj = c2(RUCasualDateParser);
        tmp3 = closure_1;
        if (closure_3()) {
          tmp7 = globalThis;
          _Reflect = Reflect;
          tmp8 = arguments;
          constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
        } else {
          tmp4 = arguments;
          tmp5 = arguments;
          constructResult = obj(...arguments);
        }
        return tmp3(self, constructResult);
      }
    }
    _classCallCheck = RUCasualDateParser;
    _inherits(RUCasualDateParser, _mod10563.AbstractParserWithLeftRightBoundaryChecking);
    const entry = {
      key: "innerPatternString",
      value: function innerPatternString(arg0) {
        return "(?:\u0441|\u0441\u043E)?\\s*(\u0441\u0435\u0433\u043E\u0434\u043D\u044F|\u0432\u0447\u0435\u0440\u0430|\u0437\u0430\u0432\u0442\u0440\u0430|\u043F\u043E\u0441\u043B\u0435\u0437\u0430\u0432\u0442\u0440\u0430|\u043F\u043E\u0441\u043B\u0435\u043F\u043E\u0441\u043B\u0435\u0437\u0430\u0432\u0442\u0440\u0430|\u043F\u043E\u0437\u0430\u043F\u043E\u0437\u0430\u0432\u0447\u0435\u0440\u0430|\u043F\u043E\u0437\u0430\u0432\u0447\u0435\u0440\u0430)";
      },
    };
    let items = [entry];
    const entry1 = {
      key: "innerExtract",
      value: function innerExtract(reference, arg1) {
        const formatted = arg1[1].toLowerCase();
        if ("\u0441\u0435\u0433\u043E\u0434\u043D\u044F" === formatted) {
          return closure_7.today(reference.reference);
        } else if ("\u0432\u0447\u0435\u0440\u0430" === formatted) {
          return closure_7.yesterday(reference.reference);
        } else if ("\u0437\u0430\u0432\u0442\u0440\u0430" === formatted) {
          return closure_7.tomorrow(reference.reference);
        } else if ("\u043F\u043E\u0441\u043B\u0435\u0437\u0430\u0432\u0442\u0440\u0430" === formatted) {
          return closure_7.theDayAfter(reference.reference, 2);
        } else if (
          "\u043F\u043E\u0441\u043B\u0435\u043F\u043E\u0441\u043B\u0435\u0437\u0430\u0432\u0442\u0440\u0430" ===
          formatted
        ) {
          return closure_7.theDayAfter(reference.reference, 3);
        } else if ("\u043F\u043E\u0437\u0430\u0432\u0447\u0435\u0440\u0430" === formatted) {
          return closure_7.theDayBefore(reference.reference, 2);
        } else if ("\u043F\u043E\u0437\u0430\u043F\u043E\u0437\u0430\u0432\u0447\u0435\u0440\u0430" === formatted) {
          return closure_7.theDayBefore(reference.reference, 3);
        } else {
          return tmp2;
        }
      },
    };
    items[1] = entry1;
    exports.default = _createClass(RUCasualDateParser, items);
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}
