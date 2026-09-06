// === Module 10523: _isNativeReflectConstruct ===

// Module 10523 (_isNativeReflectConstruct)
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10439 */;
import now from "now" /* 10456 */;
import NLCasualDateParser from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import closure_1 from "_possibleConstructorReturn" /* 93 */;
import closure_2 from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

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
    class NLCasualDateParser {
      constructor() {
        self = this;
        tmp = NLCasualDateParser(this, NLCasualDateParser);
        tmp2 = closure_2;
        obj = closure_2(NLCasualDateParser);
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
    _inherits(NLCasualDateParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
    let obj = { key: "innerPattern", value: null };
    obj[1] = function innerPattern(arg0) {
      return /(nu|vandaag|morgen|morgend|gisteren)(?=\W|$)/i;
    };
    let items = [obj, ];
    obj = { key: "innerExtract", value: null };
    obj[1] = function innerExtract(reference) {
      const formatted = arg1[0].toLowerCase();
      if ("nu" === formatted) {
        return closure_7.now(reference.reference);
      } else if ("vandaag" === formatted) {
        return closure_7.today(reference.reference);
      } else {
        if ("morgen" !== formatted) {
          if ("morgend" !== formatted) {
            if ("gisteren" === formatted) {
              return closure_7.yesterday(reference.reference);
            } else {
              return tmp2;
            }
          }
        }
        return closure_7.tomorrow(reference.reference);
      }
      const str = arg1[0];
    };
    items[1] = obj;
    exports.default = _createClass(NLCasualDateParser, items);
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}