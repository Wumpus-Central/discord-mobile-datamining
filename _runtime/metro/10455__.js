// === Module 10455: ? ===

// Module 10455
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10439 */;
import now from "now" /* 10456 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

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
      fn = function i(arg0) {
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
    let closure_9 = fn(now);
    const re10 = /(now|today|tonight|tomorrow|overmorrow|tmr|tmrw|yesterday|last\s*night)(?=\W|$)/i;
    class ENCasualDateParser {
      constructor() {
        self = this;
        tmp = c2(this, ENCasualDateParser);
        tmp2 = closure_4;
        obj = closure_4(ENCasualDateParser);
        tmp3 = closure_3;
        if (hasOwnProperty()) {
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
    const entry = {
      key: "innerPattern",
      value: function innerPattern(arg0) {
            return re10;
          }
    };
    let items = [entry, ];
    const entry1 = {
      key: "innerExtract",
      value: function innerExtract(refDate, arg1) {
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
                        ENCasualDateParser(10438).assignSimilarDate(parsingComponents, tmp);
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
          }
    };
    items[1] = entry1;
    exports.default = _createClass(ENCasualDateParser, items);
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}