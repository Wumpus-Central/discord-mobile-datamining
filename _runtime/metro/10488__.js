// === Module 10488: ? ===

// Module 10488
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10439 */;
import now from "now" /* 10456 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

let self = this;
const FRCasualDateParser = require;
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
    class FRCasualDateParser {
      constructor() {
        self = this;
        tmp = c2(this, FRCasualDateParser);
        tmp2 = closure_4;
        obj = closure_4(FRCasualDateParser);
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
    _inherits(FRCasualDateParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
    const entry = {
      key: "innerPattern",
      value: function innerPattern(arg0) {
            return /(maintenant|aujourd'hui|demain|hier|cette\s*nuit|la\s*veille)(?=\W|$)/i;
          }
    };
    let items = [entry, ];
    const entry1 = {
      key: "innerExtract",
      value: function innerExtract(refDate, arg1) {
            refDate = refDate.refDate;
            const str2 = arg1[0].toLowerCase();
            const parsingComponents = refDate.createParsingComponents();
            if ("maintenant" === str2) {
              return closure_9.now(refDate.reference);
            } else if ("aujourd'hui" === str2) {
              return closure_9.today(refDate.reference);
            } else if ("hier" === str2) {
              return closure_9.yesterday(refDate.reference);
            } else if ("demain" === str2) {
              return closure_9.tomorrow(refDate.reference);
            } else {
              if (str2.match(/cette\s*nuit/)) {
                FRCasualDateParser(10438).assignSimilarDate(parsingComponents, refDate);
                parsingComponents.imply("hour", 22);
                parsingComponents.imply("meridiem", FRCasualDateParser(10437).Meridiem.PM);
              } else if (str2.match(/la\s*veille/)) {
                const _Date = Date;
                const date = new Date(refDate.getTime());
                date.setDate(date.getDate() - 1);
                FRCasualDateParser(10438).assignSimilarDate(parsingComponents, date);
                parsingComponents.imply("hour", 0);
              }
              return parsingComponents;
            }
          }
    };
    items[1] = entry1;
    exports.default = _createClass(FRCasualDateParser, items);
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}