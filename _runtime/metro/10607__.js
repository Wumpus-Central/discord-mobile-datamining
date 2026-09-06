// _runtime/metro/10607__.js
import AbstractTimeExpressionParser from "../10446_AbstractTimeExpressionParser.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _get from "00096__get.js";
import _inherits from "../00098__inherits.js";

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
    return "\\s*(?:\\-|\\\u2013|\\~|\\\u301C|to|\\?)\\s*";
  },
};
let items = [
  entry,
  {
    key: "primaryPrefix",
    value: function primaryPrefix() {
      return "(?:(?:alle|dalle)\\s*)??";
    },
  },
  {
    key: "primarySuffix",
    value: function primarySuffix() {
      return "(?:\\s*(?:o\\W*in punto|alle\\s*sera|in\\s*del\\s*(?:mattina|pomeriggio)))?(?!/)(?=\\W|$)";
    },
  },
  {
    key: "extractPrimaryTimeComponents",
    value: function extractPrimaryTimeComponents(arg0, arg1) {
      const self = this;
      const tmp = hasOwnProperty(
        _getPrototypeOf(ENTimeExpressionParser.prototype),
        "extractPrimaryTimeComponents",
        this,
      );
      dependencyMap = tmp;
      let fn = tmp;
      if (typeof tmp === "function") {
        fn = (items) => closure_1.apply(self, items);
      }
      const items = [arg0, arg1];
      const fnResult = fn(items);
      if (fnResult) {
        const first = arg1[0];
        if (first.endsWith("sera")) {
          value = fnResult.get("hour");
          if (value >= 6) {
            if (value < 12) {
              fnResult.assign("hour", fnResult.get("hour") + 12);
              fnResult.assign("meridiem", ENTimeExpressionParser(10426).Meridiem.PM);
            }
          }
          if (value < 6) {
            fnResult.assign("meridiem", ENTimeExpressionParser(10426).Meridiem.AM);
          }
        }
        const first1 = arg1[0];
        if (first1.endsWith("pomeriggio")) {
          fnResult.assign("meridiem", ENTimeExpressionParser(10426).Meridiem.PM);
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
        if (first2.endsWith("mattina")) {
          fnResult.assign("meridiem", ENTimeExpressionParser(10426).Meridiem.AM);
          if (fnResult.get("hour") < 12) {
            fnResult.assign("hour", fnResult.get("hour"));
          }
        }
      }
      return fnResult;
    },
  },
];

export default _createClass(ENTimeExpressionParser, items);
