// === Module 10565: ? ===

// Module 10565
import AbstractTimeExpressionParser from "AbstractTimeExpressionParser" /* 10446 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _get from "_get" /* 96 */;
import _inherits from "_inherits" /* 98 */;

const RUTimeExpressionParser = require;
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
class RUTimeExpressionParser {
  constructor(arg0) {
    self = this;
    tmp = c2(this, RUTimeExpressionParser);
    items = [];
    items[0] = global;
    tmp2 = closure_4;
    obj = closure_4(RUTimeExpressionParser);
    tmp3 = closure_3;
    if (metroRequire()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(RUTimeExpressionParser, AbstractTimeExpressionParser.AbstractTimeExpressionParser);
const entry = {
  key: "patternFlags",
  value: function patternFlags() {
    return RUTimeExpressionParser(10561).REGEX_PARTS.flags;
  }
};
let items = [
  entry,
  {
    key: "primaryPatternLeftBoundary",
    value: function primaryPatternLeftBoundary() {
      return "(^|\\s|T|(?:[^\\p{L}\\p{N}_]))";
    }
  },
  {
    key: "followingPhase",
    value: function followingPhase() {
      return "\\s*(?:\\-|\\\u2013|\\~|\\\u301C|\u0434\u043E|\u0438|\u043F\u043E|\\?)\\s*";
    }
  },
  {
    key: "primaryPrefix",
    value: function primaryPrefix() {
      return "(?:(?:\u0432|\u0441)\\s*)??";
    }
  },
  {
    key: "primarySuffix",
    value: function primarySuffix() {
      return "(?:\\s*(?:\u0443\u0442\u0440\u0430|\u0432\u0435\u0447\u0435\u0440\u0430|\u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u043B\u0443\u0434\u043D\u044F))?(?!\\/)" + RUTimeExpressionParser(10561).REGEX_PARTS.rightBoundary;
    }
  },
  {
    key: "extractPrimaryTimeComponents",
    value: function extractPrimaryTimeComponents(arg0, arg1) {
      const self = this;
      const tmp = hasOwnProperty(_getPrototypeOf(RUTimeExpressionParser.prototype), "extractPrimaryTimeComponents", this);
      dependencyMap = tmp;
      let fn = tmp;
      if (typeof tmp === "function") {
        fn = (items) => closure_1.apply(self, items);
      }
      const items = [arg0, arg1];
      const fnResult = fn(items);
      if (fnResult) {
        const first = arg1[0];
        if (first.endsWith("\u0432\u0435\u0447\u0435\u0440\u0430")) {
          value = fnResult.get("hour");
          if (value >= 6) {
            if (value < 12) {
              fnResult.assign("hour", fnResult.get("hour") + 12);
              fnResult.assign("meridiem", RUTimeExpressionParser(10437).Meridiem.PM);
            }
          }
          if (value < 6) {
            fnResult.assign("meridiem", RUTimeExpressionParser(10437).Meridiem.AM);
          }
        }
        const first1 = arg1[0];
        if (first1.endsWith("\u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u043B\u0443\u0434\u043D\u044F")) {
          fnResult.assign("meridiem", RUTimeExpressionParser(10437).Meridiem.PM);
          value = fnResult.get("hour");
          let tmp14 = value >= 0;
          if (tmp14) {
            tmp14 = value <= 6;
          }
          if (tmp14) {
            fnResult.assign("hour", fnResult.get("hour") + 12);
          }
        }
        const first2 = arg1[0];
        if (first2.endsWith("\u0443\u0442\u0440\u0430")) {
          fnResult.assign("meridiem", RUTimeExpressionParser(10437).Meridiem.AM);
          if (fnResult.get("hour") < 12) {
            fnResult.assign("hour", fnResult.get("hour"));
          }
        }
      }
      return fnResult;
    }
  }
];

export default _createClass(RUTimeExpressionParser, items);