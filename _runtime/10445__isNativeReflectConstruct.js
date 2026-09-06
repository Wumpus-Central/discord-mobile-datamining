// _runtime/10445__isNativeReflectConstruct.js
import AbstractTimeExpressionParser from "10446_AbstractTimeExpressionParser.js";
import closure_2 from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import closure_3 from "metro/00093__possibleConstructorReturn.js";
import closure_4 from "00095__getPrototypeOf.js";
import closure_5 from "metro/00096__get.js";
import _inherits from "00098__inherits.js";

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
  } catch (err) {}
}
class ENTimeExpressionParser {
  constructor(arg0) {
    self = this;
    tmp = closure_2(this, ENTimeExpressionParser);
    items = [];
    items[0] = global;
    tmp2 = closure_4;
    obj = closure_4(ENTimeExpressionParser);
    tmp3 = closure_3;
    if (_isNativeReflectConstruct()) {
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
let items = [
  {
    key: "followingPhase",
    value: function followingPhase() {
      return "\\s*(?:\\-|\\\u2013|\\~|\\\u301C|to|until|through|till|\\?)\\s*";
    },
  },
  {
    key: "primaryPrefix",
    value: function primaryPrefix() {
      return "(?:(?:at|from)\\s*)??";
    },
  },
  {
    key: "primarySuffix",
    value: function primarySuffix() {
      return "(?:\\s*(?:o\\W*clock|at\\s*night|in\\s*the\\s*(?:morning|afternoon)))?(?!/)(?=\\W|$)";
    },
  },
  {
    key: "extractPrimaryTimeComponents",
    value: function extractPrimaryTimeComponents(arg0, arg1) {
      const self = this;
      const tmp = callback3(callback2(self.prototype), "extractPrimaryTimeComponents", this);
      closure_1 = tmp;
      let fn = tmp;
      if (typeof tmp === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [arg0, arg1];
      const fnResult = fn(items);
      if (fnResult) {
        const first = arg1[0];
        if (first.endsWith("night")) {
          let value = fnResult.get("hour");
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
    },
  },
  {
    key: "extractFollowingTimeComponents",
    value: function extractFollowingTimeComponents(arg0, arg1, arg2) {
      const self = this;
      let fn = callback3(callback2(self.prototype), "extractFollowingTimeComponents", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [arg0, arg1, arg2];
      const fnResult = fn(items);
      if (fnResult) {
        fnResult.addTag("parser/ENTimeExpressionParser");
      }
      return fnResult;
    },
  },
];

export default _createClass(ENTimeExpressionParser, items);
