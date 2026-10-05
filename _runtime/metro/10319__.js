// _runtime/metro/10319__.js
import Meridiem from "../10166_Meridiem.js";
import AbstractTimeExpressionParser from "../10175_AbstractTimeExpressionParser.js";
import _mod10315 from "10315__.js";
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
class UKTimeExpressionParser {
  constructor(arg0) {
    let constructResult;
    const self = this;
    _classCallCheck(this, UKTimeExpressionParser);
    const items = [arg0];
    const obj = _getPrototypeOf(UKTimeExpressionParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    return c3(self, constructResult);
  }
}
_inherits(UKTimeExpressionParser, AbstractTimeExpressionParser.AbstractTimeExpressionParser);
const entry = {
  key: "patternFlags",
  value: function patternFlags() {
    return _mod10315.REGEX_PARTS.flags;
  },
};
let items = [
  entry,
  {
    key: "primaryPatternLeftBoundary",
    value: function primaryPatternLeftBoundary() {
      return "(^|\\s|T|(?:[^\\p{L}\\p{N}_]))";
    },
  },
  {
    key: "followingPhase",
    value: function followingPhase() {
      return "\\s*(?:\\-|\\\u2013|\\~|\\\u301C|\u0434\u043E|\u0456|\u043F\u043E|\\?)\\s*";
    },
  },
  {
    key: "primaryPrefix",
    value: function primaryPrefix() {
      return "(?:(?:\u0432|\u0443|\u043E|\u043E\u0431|\u0437|\u0456\u0437|\u0432\u0456\u0434)\\s*)??";
    },
  },
  {
    key: "primarySuffix",
    value: function primarySuffix() {
      return (
        "(?:\\s*(?:\u0440\u0430\u043D\u043A\u0443|\u0432\u0435\u0447\u043E\u0440\u0430|\u043F\u043E \u043E\u0431\u0456\u0434\u0456|\u043F\u0456\u0441\u043B\u044F \u043E\u0431\u0456\u0434\u0443))?(?!\\/)" +
        _mod10315.REGEX_PARTS.rightBoundary
      );
    },
  },
  {
    key: "extractPrimaryTimeComponents",
    value: function extractPrimaryTimeComponents(arg0, arg1) {
      const self = this;
      const tmp = _get(_getPrototypeOf(UKTimeExpressionParser.prototype), "extractPrimaryTimeComponents", this);
      let closure_1 = tmp;
      let fn = tmp;
      if (typeof tmp === "function") {
        fn = (items) => closure_1.apply(self, items);
      }
      const items = [arg0, arg1];
      const fnResult = fn(items);
      if (fnResult) {
        const first = arg1[0];
        if (first.endsWith("\u0432\u0435\u0447\u043E\u0440\u0430")) {
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
        if (first1.endsWith("\u043F\u043E \u043E\u0431\u0456\u0434\u0456")) {
          fnResult.assign("meridiem", Meridiem.Meridiem.PM);
          const value2 = fnResult.get("hour");
          const tmp14 = value2 >= 0 && value2 <= 6;
          if (tmp14) {
            fnResult.assign("hour", fnResult.get("hour") + 12);
          }
        } else {
          const first2 = arg1[0];
        }
        const first3 = arg1[0];
        if (first3.endsWith("\u0440\u0430\u043D\u043A\u0443")) {
          fnResult.assign("meridiem", Meridiem.Meridiem.AM);
          if (fnResult.get("hour") < 12) {
            fnResult.assign("hour", fnResult.get("hour"));
          }
        }
      }
      return fnResult;
    },
  },
];

export default _createClass(UKTimeExpressionParser, items);
