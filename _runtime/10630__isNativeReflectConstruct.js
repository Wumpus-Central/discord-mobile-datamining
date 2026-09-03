// === Module 10630: _isNativeReflectConstruct ===

// Module 10630 (_isNativeReflectConstruct)
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10457 */;
import now from "now" /* 10474 */;
import closure_2 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

let self = this;
const ITCasualDateParser = require;
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
    const re10 = /(ora|oggi|stasera|questa sera|domani|dmn|ieri\s*sera)(?=\W|$)/i;
    class ITCasualDateParser {
      constructor() {
        self = this;
        tmp = closure_2(this, ITCasualDateParser);
        tmp2 = closure_4;
        obj = closure_4(ITCasualDateParser);
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
    _inherits(ITCasualDateParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
    let obj = { key: "innerPattern", value: null };
    obj[1] = function innerPattern(arg0) {
      return closure_10;
    };
    let items = [obj, ];
    obj = { key: "innerExtract", value: null };
    obj[1] = function innerExtract(refDate) {
      refDate = refDate.refDate;
      const str2 = arg1[0].toLowerCase();
      const parsingComponents = refDate.createParsingComponents();
      if ("ora" === str2) {
        return closure_9.now(refDate.reference);
      } else if ("oggi" === str2) {
        return closure_9.today(refDate.reference);
      } else if ("ieri" === str2) {
        return closure_9.yesterday(refDate.reference);
      } else {
        if ("domani" !== str2) {
          if ("dmn" !== str2) {
            if ("stasera" !== str2) {
              if ("questa sera" !== str2) {
                if (str2.match(/ieri\s*sera/)) {
                  let tmp = refDate;
                  if (refDate.getHours() > 6) {
                    const _Date = Date;
                    const date = new Date(refDate.getTime());
                    date.setDate(date.getDate() - 1);
                    tmp = date;
                  }
                  ITCasualDateParser(10456).assignSimilarDate(parsingComponents, tmp);
                  parsingComponents.imply("hour", 0);
                }
                return parsingComponents;
              }
            }
            return closure_9.tonight(refDate.reference);
          }
        }
        return closure_9.tomorrow(refDate.reference);
      }
      const str = arg1[0];
    };
    items[1] = obj;
    exports.default = _createClass(ITCasualDateParser, items);
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}