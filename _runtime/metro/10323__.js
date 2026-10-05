// _runtime/metro/10323__.js
import now2 from "../10185_now.js";
import _mod10317 from "10317__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import map from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

let hasOwnProperty;

let self = this;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {}));
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
if (!self2) {
  let tmp3 = globalThis;
  let _Object = Object;
  self2 = Object.create
    ? (arg0, __esModule, arg2, arg3) => {
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
      }
    : (arg0, arg1, arg2, arg3) => {
        let tmp = arg3;
        if (undefined === arg3) {
          tmp = arg2;
        }
        arg0[tmp] = arg1[arg2];
      };
}
let tmp4 = self && self.__setModuleDefault;
if (!tmp4) {
  let tmp5 = globalThis;
  const _Object2 = Object;
  tmp4 = Object.create
    ? (arg0, value) => {
        const obj = { enumerable: true, value };
        Object.defineProperty(arg0, "default", obj);
      }
    : (arg0, arg1) => {
        arg0.default = arg1;
      };
}
let closure_6 = tmp4;
let fn = self && self.__importStar;
if (!fn) {
  fn = function o(arg0) {
    fn =
      Object.getOwnPropertyNames ||
      ((obj) => {
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
    closure_6(obj, __esModule);
    return obj;
  };
}
const now = fn(now2);
class UKCasualDateParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, UKCasualDateParser);
    const obj = _getPrototypeOf(UKCasualDateParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return map(self, constructResult);
  }
}
_inherits(UKCasualDateParser, _mod10317.AbstractParserWithLeftRightBoundaryChecking);
const entry = {
  key: "innerPatternString",
  value: function innerPatternString(arg0) {
    return "(?:\u0437|\u0456\u0437|\u0432\u0456\u0434)?\\s*(\u0441\u044C\u043E\u0433\u043E\u0434\u043D\u0456|\u0432\u0447\u043E\u0440\u0430|\u0437\u0430\u0432\u0442\u0440\u0430|\u043F\u0456\u0441\u043B\u044F\u0437\u0430\u0432\u0442\u0440\u0430|\u043F\u0456\u0441\u043B\u044F\u043F\u0456\u0441\u043B\u044F\u0437\u0430\u0432\u0442\u0440\u0430|\u043F\u043E\u0437\u0430\u043F\u043E\u0437\u0430\u0432\u0447\u043E\u0440\u0430|\u043F\u043E\u0437\u0430\u0432\u0447\u043E\u0440\u0430)";
  },
};
let items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(reference, arg1) {
      const str = arg1[1];
      const formatted = str.toLowerCase();
      if ("\u0441\u044C\u043E\u0433\u043E\u0434\u043D\u0456" === formatted) {
        return now.today(reference.reference);
      } else if ("\u0432\u0447\u043E\u0440\u0430" === formatted) {
        return now.yesterday(reference.reference);
      } else if ("\u0437\u0430\u0432\u0442\u0440\u0430" === formatted) {
        return now.tomorrow(reference.reference);
      } else if ("\u043F\u0456\u0441\u043B\u044F\u0437\u0430\u0432\u0442\u0440\u0430" === formatted) {
        return now.theDayAfter(reference.reference, 2);
      } else if (
        "\u043F\u0456\u0441\u043B\u044F\u043F\u0456\u0441\u043B\u044F\u0437\u0430\u0432\u0442\u0440\u0430" === formatted
      ) {
        return now.theDayAfter(reference.reference, 3);
      } else if ("\u043F\u043E\u0437\u0430\u0432\u0447\u043E\u0440\u0430" === formatted) {
        return now.theDayBefore(reference.reference, 2);
      } else if ("\u043F\u043E\u0437\u0430\u043F\u043E\u0437\u0430\u0432\u0447\u043E\u0440\u0430" === formatted) {
        return now.theDayBefore(reference.reference, 3);
      } else {
        return tmp2;
      }
    },
  },
];

export default _createClass(UKCasualDateParser, items);
