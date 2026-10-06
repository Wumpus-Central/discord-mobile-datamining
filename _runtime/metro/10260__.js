// === Module 10260: ? ===

// Module 10260
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10181 */;
import now2 from "now" /* 10198 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import map from "_possibleConstructorReturn" /* 93 */;
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
let closure_6 = tmp4;
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
    closure_6(obj, __esModule);
    return obj;
  };
}
const now = fn(now2);
class PTCasualDateParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, PTCasualDateParser);
    const obj = _getPrototypeOf(PTCasualDateParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return map(self, constructResult);
  }
}
_inherits(PTCasualDateParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern(arg0) {
    return /(agora|hoje|amanha|amanhã|ontem)(?=\W|$)/i;
  }
};
let items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(reference, arg1) {
      const str = arg1[0];
      const formatted = str.toLowerCase();
      if ("agora" === formatted) {
        return now.now(reference.reference);
      } else if ("hoje" === formatted) {
        return now.today(reference.reference);
      } else {
        if ("amanha" !== formatted) {
          if ("amanh\u00E3" !== formatted) {
            if ("ontem" === formatted) {
              return now.yesterday(reference.reference);
            } else {
              return tmp2;
            }
          }
        }
        return now.tomorrow(reference.reference);
      }
    }
  }
];

export default _createClass(PTCasualDateParser, items);