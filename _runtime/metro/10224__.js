// === Module 10224: ? ===

// Module 10224
import EmptyDuration from "EmptyDuration" /* 10176 */;
import assignSimilarDate from "assignSimilarDate" /* 10180 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10181 */;
import now2 from "now" /* 10198 */;
import _mod10225 from "module_10225" /* 10225 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

let hasOwnProperty;

let self = this;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
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
if (!self2) {
  let tmp3 = globalThis;
  let _Object = Object;
  self2 = Object.create ? ((arg0, __esModule, arg2, arg3) => {
    function get() {
      return __esModule[closure_1];
    }
    let closure_0 = __esModule;
    let closure_1 = arg2;
    let tmp = arg3;
    if (undefined === arg3) {
      tmp = arg2;
    }
    let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(__esModule, arg2);
    let tmp3 = ownPropertyDescriptor;
    if (tmp3) {
      let tmp4;
      if ("get" in ownPropertyDescriptor) {
        tmp4 = !__esModule.__esModule;
      } else {
        tmp4 = ownPropertyDescriptor.writable || ownPropertyDescriptor.configurable;
      }
      tmp3 = !tmp4;
    }
    if (!tmp3) {
      ownPropertyDescriptor = { enumerable: true, get };
      const obj = { enumerable: true, get };
    }
    Object.defineProperty(arg0, tmp, ownPropertyDescriptor);
  }) : ((arg0, arg1, arg2, arg3) => {
    let tmp = arg3;
    if (undefined === arg3) {
      tmp = arg2;
    }
    arg0[tmp] = arg1[arg2];
  });
}
let tmp4 = self && self.__setModuleDefault;
if (!tmp4) {
  let tmp5 = globalThis;
  const _Object2 = Object;
  tmp4 = Object.create ? ((arg0, value) => {
    const obj = { enumerable: true, value };
    Object.defineProperty(arg0, "default", obj);
  }) : ((arg0, arg1) => {
    arg0.default = arg1;
  });
}
let closure_8 = tmp4;
let fn = self && self.__importStar;
if (!fn) {
  fn = function u(arg0) {
    fn = Object.getOwnPropertyNames || ((obj) => {
      const items = [];
      for (const key10005 in obj) {
        let _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        if (!hasOwnProperty.call(obj, key10005)) {
          continue;
        } else {
          items[items.length] = key10005;
          continue;
        }
        continue;
      }
      return items;
    });
    return fn(arg0);
  };
  fn = (__esModule) => {
    const tmp = __esModule;
    if (tmp) {
      if (__esModule.__esModule) {
        return __esModule;
      }
    }
    const obj = {};
    if (null != __esModule) {
      let num;
      const arr = fn(__esModule);
      for (let num = 0; num < arr.length; num = num + 1) {
        if ("default" !== arr[num]) {
          let tmp5 = self2(obj, __esModule, arr[num]);
        }
      }
    }
    closure_8(obj, __esModule);
    return obj;
  };
}
const tmp6 = self && self.__importDefault || ((__esModule) => {
  let tmp2;
  const tmp = __esModule;
  if (!tmp) {
    tmp2 = { default: __esModule };
    const obj = { default: __esModule };
  } else {
    tmp2 = __esModule;
  }
  return tmp2;
});
const module_10225 = tmp6(_mod10225);
const now = fn(now2);
const regExp = new RegExp("(jetzt|heute|morgen|\u00FCbermorgen|uebermorgen|gestern|vorgestern|letzte\\s*nacht)(?:\\s*(morgen|vormittag|mittags?|nachmittag|abend|nacht|mitternacht))?(?=\\W|$)", "i");
class DECasualDateParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, DECasualDateParser);
    const obj = _getPrototypeOf(DECasualDateParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(DECasualDateParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern(arg0) {
    return regExp;
  }
};
let items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(reference, arg1) {
      let nowResult;
      reference = reference.reference;
      const dateWithAdjustedTimezone = reference.getDateWithAdjustedTimezone();
      const str = arg1[1] || "";
      const str2 = str.toLowerCase();
      const str3 = arg1[2] || "";
      const formatted = str3.toLowerCase();
      const parsingComponents = reference.createParsingComponents();
      if ("jetzt" === str2) {
        nowResult = now.now(reference.reference);
      } else if ("heute" === str2) {
        nowResult = now.today(reference.reference);
      } else if ("morgen" === str2) {
        const addDurationResult = EmptyDuration.addDuration(dateWithAdjustedTimezone, { day: 1 });
        assignSimilarDate.assignSimilarDate(parsingComponents, addDurationResult);
        assignSimilarDate.implySimilarTime(parsingComponents, addDurationResult);
        nowResult = parsingComponents;
      } else {
        if ("\u00FCbermorgen" !== str2) {
          if ("uebermorgen" !== str2) {
            if ("gestern" === str2) {
              const addDurationResult1 = EmptyDuration.addDuration(dateWithAdjustedTimezone, { day: -1 });
              assignSimilarDate.assignSimilarDate(parsingComponents, addDurationResult1);
              assignSimilarDate.implySimilarTime(parsingComponents, addDurationResult1);
              nowResult = parsingComponents;
            } else if ("vorgestern" === str2) {
              const addDurationResult2 = EmptyDuration.addDuration(dateWithAdjustedTimezone, { day: -2 });
              assignSimilarDate.assignSimilarDate(parsingComponents, addDurationResult2);
              assignSimilarDate.implySimilarTime(parsingComponents, addDurationResult2);
              nowResult = parsingComponents;
            } else {
              nowResult = parsingComponents;
              if (str2.match(/letzte\s*nacht/)) {
                let addDurationResult3 = dateWithAdjustedTimezone;
                if (dateWithAdjustedTimezone.getHours() > 6) {
                  addDurationResult3 = EmptyDuration.addDuration(dateWithAdjustedTimezone, { day: -1 });
                }
                assignSimilarDate.assignSimilarDate(parsingComponents, addDurationResult3);
                parsingComponents.imply("hour", 0);
                nowResult = parsingComponents;
              }
            }
          }
        }
        const addDurationResult4 = EmptyDuration.addDuration(dateWithAdjustedTimezone, { day: 2 });
        assignSimilarDate.assignSimilarDate(parsingComponents, addDurationResult4);
        assignSimilarDate.implySimilarTime(parsingComponents, addDurationResult4);
        nowResult = parsingComponents;
      }
      let result = nowResult;
      if (formatted) {
        const _default = module_10225.default;
        result = _default.extractTimeComponents(nowResult, formatted);
      }
      return result;
    }
  }
];

export default _createClass(DECasualDateParser, items);