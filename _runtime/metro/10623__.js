// === Module 10623: ? ===

// Module 10623
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10439 */;
import now from "now" /* 10456 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

let self = this;
const SVCasualDateParser = require;
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
      fn = function c(arg0) {
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
    const _RegExp = RegExp;
    const regExp = new RegExp("(nu|idag|imorgon|\u00F6vermorgon|ig\u00E5r|f\u00F6rrg\u00E5r|i\\s*f\u00F6rrg\u00E5r)(?:\\s*(?:p\u00E5\\s*)?(morgonen?|f\u00F6rmiddagen?|middagen?|eftermiddagen?|kv\u00E4llen?|natten?|midnatt))?(?=\\W|$)", "i");
    class SVCasualDateParser {
      constructor() {
        self = this;
        tmp = c2(this, SVCasualDateParser);
        tmp2 = closure_4;
        obj = closure_4(SVCasualDateParser);
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
    _inherits(SVCasualDateParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
    const entry = {
      key: "innerPattern",
      value: function innerPattern(arg0) {
            return regExp;
          }
    };
    let items = [entry, ];
    const entry1 = {
      key: "innerExtract",
      value: function innerExtract(refDate, arg1) {
            refDate = refDate.refDate;
            const formatted = arg1[1] || "".toLowerCase();
            const formatted1 = arg1[2] || "".toLowerCase();
            const parsingComponents = refDate.createParsingComponents();
            if ("nu" === formatted) {
              let nowResult = closure_9.now(refDate.reference);
            } else if ("idag" === formatted) {
              nowResult = closure_9.today(refDate.reference);
            } else {
              if ("imorgon" !== formatted) {
                if ("imorn" !== formatted) {
                  if ("ig\u00E5r" === formatted) {
                    const _Date2 = Date;
                    const date = new Date(refDate.getTime());
                    date.setDate(date.getDate() - 1);
                    SVCasualDateParser(10438).assignSimilarDate(parsingComponents, date);
                    SVCasualDateParser(10438).implySimilarTime(parsingComponents, date);
                    nowResult = parsingComponents;
                  } else if ("f\u00F6rrg\u00E5r" === formatted) {
                    const _Date = Date;
                    const date1 = new Date(refDate.getTime());
                    date1.setDate(date1.getDate() - 2);
                    SVCasualDateParser(10438).assignSimilarDate(parsingComponents, date1);
                    SVCasualDateParser(10438).implySimilarTime(parsingComponents, date1);
                    nowResult = parsingComponents;
                  } else {
                    nowResult = parsingComponents;
                  }
                }
              }
              const _Date3 = Date;
              const date2 = new Date(refDate.getTime());
              date2.setDate(date2.getDate() + 1);
              SVCasualDateParser(10438).assignSimilarDate(parsingComponents, date2);
              SVCasualDateParser(10438).implySimilarTime(parsingComponents, date2);
              nowResult = parsingComponents;
            }
            switch (formatted1) {
              case "morgon":
                nowResult.imply("hour", 6);
                nowResult.imply("minute", 0);
                nowResult.imply("second", 0);
                nowResult.imply("millisecond", 0);
                return nowResult;
              case "morgonen":
                nowResult.imply("hour", 6);
                nowResult.imply("minute", 0);
                nowResult.imply("second", 0);
                nowResult.imply("millisecond", 0);
                return nowResult;
              case "f\u00F6rmiddag":
                nowResult.imply("hour", 9);
                nowResult.imply("minute", 0);
                nowResult.imply("second", 0);
                nowResult.imply("millisecond", 0);
              break;
              case "f\u00F6rmiddagen":
                nowResult.imply("hour", 9);
                nowResult.imply("minute", 0);
                nowResult.imply("second", 0);
                nowResult.imply("millisecond", 0);
              break;
              case "middag":
                nowResult.imply("hour", 12);
                nowResult.imply("minute", 0);
                nowResult.imply("second", 0);
                nowResult.imply("millisecond", 0);
              break;
              case "middagen":
                nowResult.imply("hour", 12);
                nowResult.imply("minute", 0);
                nowResult.imply("second", 0);
                nowResult.imply("millisecond", 0);
              break;
              case "eftermiddag":
                nowResult.imply("hour", 15);
                nowResult.imply("minute", 0);
                nowResult.imply("second", 0);
                nowResult.imply("millisecond", 0);
              break;
              case "eftermiddagen":
                nowResult.imply("hour", 15);
                nowResult.imply("minute", 0);
                nowResult.imply("second", 0);
                nowResult.imply("millisecond", 0);
              break;
              case "kv\u00E4ll":
                nowResult.imply("hour", 20);
                nowResult.imply("minute", 0);
                nowResult.imply("second", 0);
                nowResult.imply("millisecond", 0);
              break;
              case "kv\u00E4llen":
                nowResult.imply("hour", 20);
                nowResult.imply("minute", 0);
                nowResult.imply("second", 0);
                nowResult.imply("millisecond", 0);
              break;
              case "natt":
                if ("midnatt" === formatted1) {
                  nowResult.imply("hour", 0);
                } else {
                  nowResult.imply("hour", 2);
                }
                nowResult.imply("minute", 0);
                nowResult.imply("second", 0);
                nowResult.imply("millisecond", 0);
              break;
              case "natten":
                if ("midnatt" === formatted1) {
                  nowResult.imply("hour", 0);
                } else {
                  nowResult.imply("hour", 2);
                }
                nowResult.imply("minute", 0);
                nowResult.imply("second", 0);
                nowResult.imply("millisecond", 0);
              break;
              case "midnatt":
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
            const str = arg1[1] || "";
            const str2 = arg1[2] || "";
          }
    };
    items[1] = entry1;
    exports.default = _createClass(SVCasualDateParser, items);
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}