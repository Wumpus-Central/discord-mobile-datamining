// === Module 10445: ? ===

// Module 10445
import AbstractTimeExpressionParser from "AbstractTimeExpressionParser" /* 10446 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _get from "_get" /* 96 */;
import _inherits from "_inherits" /* 98 */;

const ENTimeExpressionParser = require;
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
class ENTimeExpressionParser {
  constructor(arg0) {
    self = this;
    tmp = c2(this, ENTimeExpressionParser);
    items = [];
    items[0] = global;
    tmp2 = closure_4;
    obj = closure_4(ENTimeExpressionParser);
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
_inherits(ENTimeExpressionParser, AbstractTimeExpressionParser.AbstractTimeExpressionParser);
const entry = {
  key: "followingPhase",
  value: function followingPhase() {
    return "\\s*(?:\\-|\\\u2013|\\~|\\\u301C|to|until|through|till|\\?)\\s*";
  }
};
let items = [
  entry,
  {
    key: "primaryPrefix",
    value: function primaryPrefix() {
      return "(?:(?:at|from)\\s*)??";
    }
  },
  {
    key: "primarySuffix",
    value: function primarySuffix() {
      return "(?:\\s*(?:o\\W*clock|at\\s*night|in\\s*the\\s*(?:morning|afternoon)))?(?!/)(?=\\W|$)";
    }
  },
  {
    key: "extractPrimaryTimeComponents",
    value: function extractPrimaryTimeComponents(arg0, arg1) {
      const self = this;
      const tmp = hasOwnProperty(_getPrototypeOf(ENTimeExpressionParser.prototype), "extractPrimaryTimeComponents", this);
      dependencyMap = tmp;
      let fn = tmp;
      if (typeof tmp === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [arg0, arg1];
      const fnResult = fn(items);
      if (fnResult) {
        const first = arg1[0];
        if (first.endsWith("night")) {
          value = fnResult.get("hour");
          if (value >= 6) {
            if (value < 12) {
              fnResult.assign("hour", fnResult.get("hour") + 12);
              fnResult.assign("meridiem", ENTimeExpressionParser(10437).Meridiem.PM);
            }
          }
          if (value < 6) {
            fnResult.assign("meridiem", ENTimeExpressionParser(10437).Meridiem.AM);
          }
        }
        const first1 = arg1[0];
        if (first1.endsWith("afternoon")) {
          fnResult.assign("meridiem", ENTimeExpressionParser(10437).Meridiem.PM);
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
        if (first2.endsWith("morning")) {
          fnResult.assign("meridiem", ENTimeExpressionParser(10437).Meridiem.AM);
          if (fnResult.get("hour") < 12) {
            fnResult.assign("hour", fnResult.get("hour"));
          }
        }
        return fnResult.addTag("parser/ENTimeExpressionParser");
      } else {
        return fnResult;
      }
    }
  },
  {
    key: "extractFollowingTimeComponents",
    value: function extractFollowingTimeComponents(arg0, arg1, arg2) {
      const self = this;
      let fn = hasOwnProperty(_getPrototypeOf(ENTimeExpressionParser.prototype), "extractFollowingTimeComponents", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [arg0, arg1, arg2];
      const fnResult = fn(items);
      if (fnResult) {
        fnResult.addTag("parser/ENTimeExpressionParser");
      }
      return fnResult;
    }
  }
];

export default _createClass(ENTimeExpressionParser, items);