// === Module 10482: _isNativeReflectConstruct ===

// Module 10482 (_isNativeReflectConstruct)
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10439 */;
import now from "now" /* 10456 */;
import _isNativeReflectConstruct2 from "_isNativeReflectConstruct" /* 10483 */;
import closure_2 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

let self = this;
const DECasualDateParser = require;
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
      function u(arg0) {
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
          const arr = u(__esModule);
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
    let fn2 = self;
    if (self) {
      fn2 = self.__importDefault;
    }
    if (!fn2) {
      fn2 = (__esModule) => {
        if (!__esModule) {
          const obj = { default: null };
          obj[0] = __esModule;
          let tmp = obj;
        } else {
          tmp = __esModule;
        }
        return tmp;
      };
    }
    const _Object3 = Object;
    let closure_9 = fn2(_isNativeReflectConstruct2);
    let closure_10 = fn(now);
    const _RegExp = RegExp;
    const regExp = new RegExp("(jetzt|heute|morgen|\u00FCbermorgen|uebermorgen|gestern|vorgestern|letzte\\s*nacht)(?:\\s*(morgen|vormittag|mittags?|nachmittag|abend|nacht|mitternacht))?(?=\\W|$)", "i");
    class DECasualDateParser {
      constructor() {
        self = this;
        tmp = closure_2(this, DECasualDateParser);
        tmp2 = closure_4;
        obj = closure_4(DECasualDateParser);
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
    _inherits(DECasualDateParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
    let obj = { key: "innerPattern", value: null };
    obj[1] = function innerPattern(arg0) {
      return regExp;
    };
    let items = [obj, ];
    obj = { key: "innerExtract", value: null };
    obj[1] = function innerExtract(reference) {
      reference = reference.reference;
      const dateWithAdjustedTimezone = reference.getDateWithAdjustedTimezone();
      const str2 = arg1[1] || "".toLowerCase();
      const formatted = arg1[2] || "".toLowerCase();
      const parsingComponents = reference.createParsingComponents();
      if ("jetzt" === str2) {
        let nowResult = closure_10.now(reference.reference);
      } else if ("heute" === str2) {
        nowResult = closure_10.today(reference.reference);
      } else if ("morgen" === str2) {
        const addDurationResult = DECasualDateParser(10434).addDuration(dateWithAdjustedTimezone, { day: 1 });
        DECasualDateParser(10438).assignSimilarDate(parsingComponents, addDurationResult);
        DECasualDateParser(10438).implySimilarTime(parsingComponents, addDurationResult);
        nowResult = parsingComponents;
      } else {
        if ("\u00FCbermorgen" !== str2) {
          if ("uebermorgen" !== str2) {
            if ("gestern" === str2) {
              const addDurationResult1 = DECasualDateParser(10434).addDuration(dateWithAdjustedTimezone, { day: -1 });
              DECasualDateParser(10438).assignSimilarDate(parsingComponents, addDurationResult1);
              DECasualDateParser(10438).implySimilarTime(parsingComponents, addDurationResult1);
              nowResult = parsingComponents;
            } else if ("vorgestern" === str2) {
              const addDurationResult2 = DECasualDateParser(10434).addDuration(dateWithAdjustedTimezone, { day: -2 });
              DECasualDateParser(10438).assignSimilarDate(parsingComponents, addDurationResult2);
              DECasualDateParser(10438).implySimilarTime(parsingComponents, addDurationResult2);
              nowResult = parsingComponents;
            } else {
              nowResult = parsingComponents;
              if (str2.match(/letzte\s*nacht/)) {
                let addDurationResult3 = dateWithAdjustedTimezone;
                if (dateWithAdjustedTimezone.getHours() > 6) {
                  addDurationResult3 = DECasualDateParser(10434).addDuration(dateWithAdjustedTimezone, { day: -1 });
                }
                DECasualDateParser(10438).assignSimilarDate(parsingComponents, addDurationResult3);
                parsingComponents.imply("hour", 0);
                nowResult = parsingComponents;
              }
            }
          }
        }
        const addDurationResult4 = DECasualDateParser(10434).addDuration(dateWithAdjustedTimezone, { day: 2 });
        DECasualDateParser(10438).assignSimilarDate(parsingComponents, addDurationResult4);
        DECasualDateParser(10438).implySimilarTime(parsingComponents, addDurationResult4);
        nowResult = parsingComponents;
      }
      let result = nowResult;
      if (formatted) {
        result = mod.default.extractTimeComponents(nowResult, formatted);
        const _default = mod.default;
      }
      return result;
    };
    items[1] = obj;
    exports.default = _createClass(DECasualDateParser, items);
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}