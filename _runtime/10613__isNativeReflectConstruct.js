// === Module 10613: _isNativeReflectConstruct ===

// Module 10613 (_isNativeReflectConstruct)
import now from "now" /* 10474 */;
import _isNativeReflectConstruct2 from "_isNativeReflectConstruct" /* 10606 */;
import closure_2 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

let self = this;
const UKCasualTimeParser = require;
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
  } catch (err) {
  }
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
    class UKCasualTimeParser {
      constructor() {
        self = this;
        tmp = closure_2(this, UKCasualTimeParser);
        tmp2 = closure_4;
        obj = closure_4(UKCasualTimeParser);
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
    _inherits(UKCasualTimeParser, _isNativeReflectConstruct2.AbstractParserWithLeftRightBoundaryChecking);
    let obj = { key: "innerPatternString", value: null };
    obj[1] = function innerPatternString(arg0) {
      return "(\u0437\u0430\u0440\u0430\u0437|\u043C\u0438\u043D\u0443\u043B\u043E\u0433\u043E\\s*\u0432\u0435\u0447\u043E\u0440\u0430|\u043C\u0438\u043D\u0443\u043B\u043E\u0457\\s*\u043D\u043E\u0447\u0456|\u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u0457\\s*\u043D\u043E\u0447\u0456|\u0441\u044C\u043E\u0433\u043E\u0434\u043D\u0456\\s*\u0432\u043D\u043E\u0447\u0456|\u0446\u0456\u0454\u0457\\s*\u043D\u043E\u0447\u0456|\u0446\u044C\u043E\u0433\u043E \u0440\u0430\u043D\u043A\u0443|\u0432\u0440\u0430\u043D\u0446\u0456|\u0440\u0430\u043D\u043A\u0443|\u0437\u0440\u0430\u043D\u043A\u0443|\u043E\u043F\u0456\u0432\u0434\u043D\u0456|\u0432\u0432\u0435\u0447\u0435\u0440\u0456|\u0432\u0435\u0447\u043E\u0440\u0430|\u043E\u043F\u0456\u0432\u043D\u043E\u0447\u0456|\u0432\u043D\u043E\u0447\u0456)";
    };
    let items = [obj, ];
    obj = { key: "innerExtract", value: null };
    obj[1] = function innerExtract(refDate) {
      refDate = refDate.refDate;
      const str2 = arg1[0].toLowerCase();
      let parsingComponents = refDate.createParsingComponents();
      if ("\u0437\u0430\u0440\u0430\u0437" === str2) {
        return closure_9.now(refDate.reference);
      } else {
        if ("\u0432\u0432\u0435\u0447\u0435\u0440\u0456" !== str2) {
          if ("\u0432\u0435\u0447\u043E\u0440\u0430" !== str2) {
            if (!str2.endsWith("\u0432\u0440\u0430\u043D\u0446\u0456")) {
              if (!str2.endsWith("\u0440\u0430\u043D\u043A\u0443")) {
                if (!str2.endsWith("\u0437\u0440\u0430\u043D\u043A\u0443")) {
                  if (str2.endsWith("\u043E\u043F\u0456\u0432\u0434\u043D\u0456")) {
                    return closure_9.noon(refDate.reference);
                  } else if (str2.match(/минулої\s*ночі/)) {
                    return closure_9.lastNight(refDate.reference);
                  } else if (str2.match(/минулого\s*вечора/)) {
                    return closure_9.yesterdayEvening(refDate.reference);
                  } else {
                    if (str2.match(/наступної\s*ночі/)) {
                      let num2 = 2;
                      if (refDate.getHours() < 22) {
                        num2 = 1;
                      }
                      const _Date = Date;
                      const date = new Date(refDate.getTime());
                      date.setDate(date.getDate() + num2);
                      UKCasualTimeParser(10456).assignSimilarDate(parsingComponents, date);
                      parsingComponents.imply("hour", 1);
                    }
                    if (!str2.match(/цієї\s*ночі/)) {
                      return parsingComponents;
                    }
                    parsingComponents = closure_9.midnight(refDate.reference);
                  }
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
    exports.default = _createClass(UKCasualTimeParser, items);
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}