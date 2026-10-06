// _runtime/metro/10187__.js
import Meridiem from "../10179_Meridiem.js";
import AbstractTimeExpressionParser from "../10188_AbstractTimeExpressionParser.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _get from "00096__get.js";
import _inherits from "../00098__inherits.js";

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
    return "\\s*(?:\\-|\\\u2013|\\~|\\\u301C|to|until|through|till|\\?)\\s*";
  },
};
let items = [
  entry,
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
      const tmp = _get(_getPrototypeOf(ENTimeExpressionParser.prototype), "extractPrimaryTimeComponents", this);
      let closure_1 = tmp;
      let fn = tmp;
      if (typeof tmp === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [arg0, arg1];
      const fnResult = fn(items);
      if (fnResult) {
        const first = arg1[0];
        if (first.endsWith("night")) {
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
        if (first1.endsWith("afternoon")) {
          fnResult.assign("meridiem", Meridiem.Meridiem.PM);
          const value2 = fnResult.get("hour");
          const tmp14 = value2 >= 0 && value2 <= 6;
          if (tmp14) {
            fnResult.assign("hour", fnResult.get("hour") + 12);
          }
        }
        const first2 = arg1[0];
        if (first2.endsWith("morning")) {
          fnResult.assign("meridiem", Meridiem.Meridiem.AM);
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
      let fn = _get(_getPrototypeOf(ENTimeExpressionParser.prototype), "extractFollowingTimeComponents", this);
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
