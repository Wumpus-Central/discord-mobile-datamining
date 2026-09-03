// _runtime/10473__isNativeReflectConstruct.js
import AbstractParserWithWordBoundaryChecking from "10457_AbstractParserWithWordBoundaryChecking.js";
import now from "10474_now.js";
import closure_2 from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import closure_3 from "metro/00093__possibleConstructorReturn.js";
import closure_4 from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";

let self = this;
const ENCasualDateParser = require;
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
      function i(arg0) {
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
          const arr = i(__esModule);
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
    const re10 = /(now|today|tonight|tomorrow|overmorrow|tmr|tmrw|yesterday|last\s*night)(?=\W|$)/i;
    class ENCasualDateParser {
      constructor() {
        self = this;
        tmp = closure_2(this, ENCasualDateParser);
        tmp2 = closure_4;
        obj = closure_4(ENCasualDateParser);
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
    _inherits(ENCasualDateParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
    let obj = { key: "innerPattern", value: null };
    obj[1] = function innerPattern(arg0) {
      return closure_10;
    };
    let items = [obj];
    obj = { key: "innerExtract", value: null };
    obj[1] = function innerExtract(refDate) {
      refDate = refDate.refDate;
      const str2 = arg1[0].toLowerCase();
      const parsingComponents = refDate.createParsingComponents();
      if ("now" === str2) {
        let nowResult = closure_9.now(refDate.reference);
      } else if ("today" === str2) {
        nowResult = closure_9.today(refDate.reference);
      } else if ("yesterday" === str2) {
        nowResult = closure_9.yesterday(refDate.reference);
      } else {
        if ("tomorrow" !== str2) {
          if ("tmr" !== str2) {
            if ("tmrw" !== str2) {
              if ("tonight" === str2) {
                nowResult = closure_9.tonight(refDate.reference);
              } else if ("overmorrow" === str2) {
                nowResult = closure_9.theDayAfter(refDate.reference, 2);
              } else {
                nowResult = parsingComponents;
                if (str2.match(/last\s*night/)) {
                  let tmp = refDate;
                  if (refDate.getHours() > 6) {
                    const _Date = Date;
                    const date = new Date(refDate.getTime());
                    date.setDate(date.getDate() - 1);
                    tmp = date;
                  }
                  ENCasualDateParser(10456).assignSimilarDate(parsingComponents, tmp);
                  parsingComponents.imply("hour", 0);
                  nowResult = parsingComponents;
                }
              }
            }
          }
        }
        nowResult = closure_9.tomorrow(refDate.reference);
      }
      nowResult.addTag("parser/ENCasualDateParser");
      return nowResult;
    };
    items[1] = obj;
    exports.default = _createClass(ENCasualDateParser, items);
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}
