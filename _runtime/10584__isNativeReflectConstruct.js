// _runtime/10584__isNativeReflectConstruct.js
import now from "10470_now.js";
import _isNativeReflectConstruct2 from "10577__isNativeReflectConstruct.js";
import closure_2 from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import closure_3 from "metro/00093__possibleConstructorReturn.js";
import closure_4 from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";

let self = this;
const RUCasualTimeParser = require;
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
      function c(arg0) {
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
          const arr = c(__esModule);
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
    let closure_9 = fn(now);
    class RUCasualTimeParser {
      constructor() {
        self = this;
        tmp = closure_2(this, RUCasualTimeParser);
        tmp2 = closure_4;
        obj = closure_4(RUCasualTimeParser);
        tmp3 = closure_3;
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
    _inherits(RUCasualTimeParser, _isNativeReflectConstruct2.AbstractParserWithLeftRightBoundaryChecking);
    let obj = { key: "innerPatternString", value: null };
    obj[1] = function innerPatternString(arg0) {
      return "(\u0441\u0435\u0439\u0447\u0430\u0441|\u043F\u0440\u043E\u0448\u043B\u044B\u043C\\s*\u0432\u0435\u0447\u0435\u0440\u043E\u043C|\u043F\u0440\u043E\u0448\u043B\u043E\u0439\\s*\u043D\u043E\u0447\u044C\u044E|\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439\\s*\u043D\u043E\u0447\u044C\u044E|\u0441\u0435\u0433\u043E\u0434\u043D\u044F\\s*\u043D\u043E\u0447\u044C\u044E|\u044D\u0442\u043E\u0439\\s*\u043D\u043E\u0447\u044C\u044E|\u043D\u043E\u0447\u044C\u044E|\u044D\u0442\u0438\u043C \u0443\u0442\u0440\u043E\u043C|\u0443\u0442\u0440\u043E\u043C|\u0443\u0442\u0440\u0430|\u0432\\s*\u043F\u043E\u043B\u0434\u0435\u043D\u044C|\u0432\u0435\u0447\u0435\u0440\u043E\u043C|\u0432\u0435\u0447\u0435\u0440\u0430|\u0432\\s*\u043F\u043E\u043B\u043D\u043E\u0447\u044C)";
    };
    let items = [obj];
    obj = { key: "innerExtract", value: null };
    obj[1] = function innerExtract(refDate) {
      refDate = refDate.refDate;
      const str2 = arg1[0].toLowerCase();
      let parsingComponents = refDate.createParsingComponents();
      if ("\u0441\u0435\u0439\u0447\u0430\u0441" === str2) {
        return closure_9.now(refDate.reference);
      } else {
        if ("\u0432\u0435\u0447\u0435\u0440\u043E\u043C" !== str2) {
          if ("\u0432\u0435\u0447\u0435\u0440\u0430" !== str2) {
            if (!str2.endsWith("\u0443\u0442\u0440\u043E\u043C")) {
              if (!str2.endsWith("\u0443\u0442\u0440\u0430")) {
                if (str2.match(/в\s*полдень/)) {
                  return closure_9.noon(refDate.reference);
                } else if (str2.match(/прошлой\s*ночью/)) {
                  return closure_9.lastNight(refDate.reference);
                } else if (str2.match(/прошлым\s*вечером/)) {
                  return closure_9.yesterdayEvening(refDate.reference);
                } else {
                  if (str2.match(/следующей\s*ночью/)) {
                    let num2 = 2;
                    if (refDate.getHours() < 22) {
                      num2 = 1;
                    }
                    const _Date = Date;
                    const date = new Date(refDate.getTime());
                    date.setDate(date.getDate() + num2);
                    RUCasualTimeParser(10452).assignSimilarDate(parsingComponents, date);
                    parsingComponents.imply("hour", 0);
                  }
                  if (str2.match(/в\s*полночь/)) {
                    parsingComponents = closure_9.midnight(refDate.reference);
                  }
                  return parsingComponents;
                }
              }
            }
            return closure_9.morning(refDate.reference);
          }
        }
        return closure_9.evening(refDate.reference);
      }
      const str = arg1[0];
    };
    items[1] = obj;
    exports.default = _createClass(RUCasualTimeParser, items);
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}
