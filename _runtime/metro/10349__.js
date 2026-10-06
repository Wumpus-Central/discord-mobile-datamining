// === Module 10349: ? ===

// Module 10349
import en from "en" /* 10168 */;
import AbstractTimeExpressionParser from "AbstractTimeExpressionParser" /* 10188 */;
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
class ENTimeExpressionParser {
  constructor(arg0) {
    let constructResult;
    const self = this;
    _classCallCheck(this, ENTimeExpressionParser);
    const items = [arg0];
    const obj = _getPrototypeOf(ENTimeExpressionParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    return c3(self, constructResult);
  }
}
_inherits(ENTimeExpressionParser, AbstractTimeExpressionParser.AbstractTimeExpressionParser);
const entry = {
  key: "followingPhase",
  value: function followingPhase() {
    return "\\s*(?:\\-|\\\u2013|\\~|\\\u301C|to|\\?)\\s*";
  }
};
let items = [
  entry,
  {
    key: "primaryPrefix",
    value: function primaryPrefix() {
      return "(?:(?:alle|dalle)\\s*)??";
    }
  },
  {
    key: "primarySuffix",
    value: function primarySuffix() {
      return "(?:\\s*(?:o\\W*in punto|alle\\s*sera|in\\s*del\\s*(?:mattina|pomeriggio)))?(?!/)(?=\\W|$)";
    }
  },
  {
    key: "extractPrimaryTimeComponents",
    value: function extractPrimaryTimeComponents(arg0, arg1) {
      const self = this;
      const tmp = _get(_getPrototypeOf(ENTimeExpressionParser.prototype), "extractPrimaryTimeComponents", this);
      let closure_1 = tmp;
      let fn = tmp;
      if (typeof tmp === "function") {
        fn = (items) => closure_1.apply(self, items);
      }
      const items = [arg0, arg1];
      const fnResult = fn(items);
      if (fnResult) {
        const first = arg1[0];
        if (first.endsWith("sera")) {
          const value = fnResult.get("hour");
          if (value >= 6) {
            if (value < 12) {
              fnResult.assign("hour", fnResult.get("hour") + 12);
              fnResult.assign("meridiem", en.Meridiem.PM);
            }
          }
          if (value < 6) {
            fnResult.assign("meridiem", en.Meridiem.AM);
          }
        }
        const first1 = arg1[0];
        if (first1.endsWith("pomeriggio")) {
          fnResult.assign("meridiem", en.Meridiem.PM);
          const value2 = fnResult.get("hour");
          const tmp14 = value2 >= 0 && value2 <= 6;
          if (tmp14) {
            fnResult.assign("hour", fnResult.get("hour") + 12);
          }
        }
        const first2 = arg1[0];
        if (first2.endsWith("mattina")) {
          fnResult.assign("meridiem", en.Meridiem.AM);
          if (fnResult.get("hour") < 12) {
            fnResult.assign("hour", fnResult.get("hour"));
          }
        }
      }
      return fnResult;
    }
  }
];

export default _createClass(ENTimeExpressionParser, items);