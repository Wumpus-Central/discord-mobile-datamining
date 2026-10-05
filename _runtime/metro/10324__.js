// === Module 10324: ? ===

// Module 10324
import assignSimilarDate from "assignSimilarDate" /* 10167 */;
import now2 from "now" /* 10185 */;
import _mod10317 from "module_10317" /* 10317 */;
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
  fn = function c(arg0) {
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
class UKCasualTimeParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, UKCasualTimeParser);
    const obj = _getPrototypeOf(UKCasualTimeParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(UKCasualTimeParser, _mod10317.AbstractParserWithLeftRightBoundaryChecking);
const entry = {
  key: "innerPatternString",
  value: function innerPatternString(arg0) {
    return "(\u0437\u0430\u0440\u0430\u0437|\u043C\u0438\u043D\u0443\u043B\u043E\u0433\u043E\\s*\u0432\u0435\u0447\u043E\u0440\u0430|\u043C\u0438\u043D\u0443\u043B\u043E\u0457\\s*\u043D\u043E\u0447\u0456|\u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u0457\\s*\u043D\u043E\u0447\u0456|\u0441\u044C\u043E\u0433\u043E\u0434\u043D\u0456\\s*\u0432\u043D\u043E\u0447\u0456|\u0446\u0456\u0454\u0457\\s*\u043D\u043E\u0447\u0456|\u0446\u044C\u043E\u0433\u043E \u0440\u0430\u043D\u043A\u0443|\u0432\u0440\u0430\u043D\u0446\u0456|\u0440\u0430\u043D\u043A\u0443|\u0437\u0440\u0430\u043D\u043A\u0443|\u043E\u043F\u0456\u0432\u0434\u043D\u0456|\u0432\u0432\u0435\u0447\u0435\u0440\u0456|\u0432\u0435\u0447\u043E\u0440\u0430|\u043E\u043F\u0456\u0432\u043D\u043E\u0447\u0456|\u0432\u043D\u043E\u0447\u0456)";
  }
};
let items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(refDate, arg1) {
      refDate = refDate.refDate;
      const str = arg1[0];
      const str2 = str.toLowerCase();
      let parsingComponents = refDate.createParsingComponents();
      if ("\u0437\u0430\u0440\u0430\u0437" === str2) {
        return now.now(refDate.reference);
      } else {
        if ("\u0432\u0432\u0435\u0447\u0435\u0440\u0456" !== str2) {
          if ("\u0432\u0435\u0447\u043E\u0440\u0430" !== str2) {
            if (!str2.endsWith("\u0432\u0440\u0430\u043D\u0446\u0456")) {
              if (!str2.endsWith("\u0440\u0430\u043D\u043A\u0443")) {
                if (!str2.endsWith("\u0437\u0440\u0430\u043D\u043A\u0443")) {
                  if (str2.endsWith("\u043E\u043F\u0456\u0432\u0434\u043D\u0456")) {
                    return now.noon(refDate.reference);
                  } else if (str2.match(/минулої\s*ночі/)) {
                    return now.lastNight(refDate.reference);
                  } else if (str2.match(/минулого\s*вечора/)) {
                    return now.yesterdayEvening(refDate.reference);
                  } else {
                    if (str2.match(/наступної\s*ночі/)) {
                      let num2 = 2;
                      if (refDate.getHours() < 22) {
                        num2 = 1;
                      }
                      const _Date = Date;
                      const self = this;
                      self2 = this;
                      const date = new Date(refDate.getTime());
                      date.setDate(date.getDate() + num2);
                      assignSimilarDate.assignSimilarDate(parsingComponents, date);
                      parsingComponents.imply("hour", 1);
                    }
                    if (!str2.match(/цієї\s*ночі/)) {
                      return parsingComponents;
                    }
                    parsingComponents = now.midnight(refDate.reference);
                  }
                }
              }
            }
            return now.morning(refDate.reference);
          }
        }
        return now.evening(refDate.reference);
      }
    }
  }
];

export default _createClass(UKCasualTimeParser, items);