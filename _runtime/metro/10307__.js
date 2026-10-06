// === Module 10307: ? ===

// Module 10307
import Meridiem from "Meridiem" /* 10179 */;
import AbstractTimeExpressionParser from "AbstractTimeExpressionParser" /* 10188 */;
import REGEX_PARTS from "REGEX_PARTS" /* 10303 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _get from "_get" /* 96 */;
import _inherits from "_inherits" /* 98 */;

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
class RUTimeExpressionParser {
  constructor(arg0) {
    let constructResult;
    const self = this;
    _classCallCheck(this, RUTimeExpressionParser);
    const items = [arg0];
    const obj = _getPrototypeOf(RUTimeExpressionParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    return c3(self, constructResult);
  }
}
_inherits(RUTimeExpressionParser, AbstractTimeExpressionParser.AbstractTimeExpressionParser);
const entry = {
  key: "patternFlags",
  value: function patternFlags() {
    return REGEX_PARTS.REGEX_PARTS.flags;
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
      return "(?:\\s*(?:\u0443\u0442\u0440\u0430|\u0432\u0435\u0447\u0435\u0440\u0430|\u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u043B\u0443\u0434\u043D\u044F))?(?!\\/)" + REGEX_PARTS.REGEX_PARTS.rightBoundary;
    }
  },
  {
    key: "extractPrimaryTimeComponents",
    value: function extractPrimaryTimeComponents(arg0, arg1) {
      const self = this;
      const tmp = _get(_getPrototypeOf(RUTimeExpressionParser.prototype), "extractPrimaryTimeComponents", this);
      let closure_1 = tmp;
      let fn = tmp;
      if (typeof tmp === "function") {
        fn = (items) => closure_1.apply(self, items);
      }
      const items = [arg0, arg1];
      const fnResult = fn(items);
      if (fnResult) {
        const first = arg1[0];
        if (first.endsWith("\u0432\u0435\u0447\u0435\u0440\u0430")) {
          const value = fnResult.get("hour");
          if (value >= 6) {
            if (value < 12) {
              fnResult.assign("hour", fnResult.get("hour") + 12);
              fnResult.assign("meridiem", Meridiem.Meridiem.PM);
            }
          }
          if (value < 6) {
            fnResult.assign("meridiem", Meridiem.Meridiem.AM);
          }
        }
        const first1 = arg1[0];
        if (first1.endsWith("\u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u043B\u0443\u0434\u043D\u044F")) {
          fnResult.assign("meridiem", Meridiem.Meridiem.PM);
          const value2 = fnResult.get("hour");
          const tmp14 = value2 >= 0 && value2 <= 6;
          if (tmp14) {
            fnResult.assign("hour", fnResult.get("hour") + 12);
          }
        }
        const first2 = arg1[0];
        if (first2.endsWith("\u0443\u0442\u0440\u0430")) {
          fnResult.assign("meridiem", Meridiem.Meridiem.AM);
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