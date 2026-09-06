// _runtime/10569__isNativeReflectConstruct.js
import now from "10456_now.js";
import _isNativeReflectConstruct2 from "10563__isNativeReflectConstruct.js";
import RUCasualDateParser from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import closure_1 from "metro/00093__possibleConstructorReturn.js";
import closure_2 from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";

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
      function o(arg0) {
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
          const arr = o(__esModule);
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
    let closure_7 = fn(now);
    class RUCasualDateParser {
      constructor() {
        self = this;
        tmp = RUCasualDateParser(this, RUCasualDateParser);
        tmp2 = closure_2;
        obj = closure_2(RUCasualDateParser);
        tmp3 = closure_1;
        if (_isNativeReflectConstruct()) {
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
    _inherits(RUCasualDateParser, _isNativeReflectConstruct2.AbstractParserWithLeftRightBoundaryChecking);
    let obj = { key: "innerPatternString", value: null };
    obj[1] = function innerPatternString(arg0) {
      return "(?:\u0441|\u0441\u043E)?\\s*(\u0441\u0435\u0433\u043E\u0434\u043D\u044F|\u0432\u0447\u0435\u0440\u0430|\u0437\u0430\u0432\u0442\u0440\u0430|\u043F\u043E\u0441\u043B\u0435\u0437\u0430\u0432\u0442\u0440\u0430|\u043F\u043E\u0441\u043B\u0435\u043F\u043E\u0441\u043B\u0435\u0437\u0430\u0432\u0442\u0440\u0430|\u043F\u043E\u0437\u0430\u043F\u043E\u0437\u0430\u0432\u0447\u0435\u0440\u0430|\u043F\u043E\u0437\u0430\u0432\u0447\u0435\u0440\u0430)";
    };
    let items = [obj];
    obj = { key: "innerExtract", value: null };
    obj[1] = function innerExtract(reference) {
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
        "\u043F\u043E\u0441\u043B\u0435\u043F\u043E\u0441\u043B\u0435\u0437\u0430\u0432\u0442\u0440\u0430" === formatted
      ) {
        return closure_7.theDayAfter(reference.reference, 3);
      } else if ("\u043F\u043E\u0437\u0430\u0432\u0447\u0435\u0440\u0430" === formatted) {
        return closure_7.theDayBefore(reference.reference, 2);
      } else if ("\u043F\u043E\u0437\u0430\u043F\u043E\u0437\u0430\u0432\u0447\u0435\u0440\u0430" === formatted) {
        return closure_7.theDayBefore(reference.reference, 3);
      } else {
        return tmp2;
      }
      const str = arg1[1];
    };
    items[1] = obj;
    exports.default = _createClass(RUCasualDateParser, items);
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}
