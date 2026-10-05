// === Module 10184: ? ===

// Module 10184
import assignSimilarDate from "assignSimilarDate" /* 10167 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10168 */;
import now2 from "now" /* 10185 */;
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
  fn = function i(arg0) {
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
const now = fn(now2);
const re10 = /(now|today|tonight|tomorrow|overmorrow|tmr|tmrw|yesterday|last\s*night)(?=\W|$)/i;
class ENCasualDateParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ENCasualDateParser);
    const obj = _getPrototypeOf(ENCasualDateParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(ENCasualDateParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern(arg0) {
    return re10;
  }
};
let items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(refDate, arg1) {
      let nowResult;
      refDate = refDate.refDate;
      const str = arg1[0];
      const str2 = str.toLowerCase();
      const parsingComponents = refDate.createParsingComponents();
      if ("now" === str2) {
        nowResult = now.now(refDate.reference);
      } else if ("today" === str2) {
        nowResult = now.today(refDate.reference);
      } else if ("yesterday" === str2) {
        nowResult = now.yesterday(refDate.reference);
      } else {
        if ("tomorrow" !== str2) {
          if ("tmr" !== str2) {
            if ("tmrw" !== str2) {
              if ("tonight" === str2) {
                nowResult = now.tonight(refDate.reference);
              } else if ("overmorrow" === str2) {
                nowResult = now.theDayAfter(refDate.reference, 2);
              } else {
                nowResult = parsingComponents;
                if (str2.match(/last\s*night/)) {
                  let tmp = refDate;
                  if (refDate.getHours() > 6) {
                    const _Date = Date;
                    const self = this;
                    self2 = this;
                    const date = new Date(refDate.getTime());
                    date.setDate(date.getDate() - 1);
                    tmp = date;
                  }
                  assignSimilarDate.assignSimilarDate(parsingComponents, tmp);
                  parsingComponents.imply("hour", 0);
                  nowResult = parsingComponents;
                }
              }
            }
          }
        }
        nowResult = now.tomorrow(refDate.reference);
      }
      nowResult.addTag("parser/ENCasualDateParser");
      return nowResult;
    }
  }
];

export default _createClass(ENCasualDateParser, items);