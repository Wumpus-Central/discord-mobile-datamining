// _runtime/10508__isNativeReflectConstruct.js
import AbstractTimeExpressionParser from "10464_AbstractTimeExpressionParser.js";
import FRTimeExpressionParser from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import closure_1 from "metro/00093__possibleConstructorReturn.js";
import closure_2 from "00095__getPrototypeOf.js";
import closure_3 from "metro/00096__get.js";
import _inherits from "00098__inherits.js";

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
class FRTimeExpressionParser {
  constructor() {
    self = this;
    tmp = FRTimeExpressionParser(this, FRTimeExpressionParser);
    tmp2 = closure_2;
    obj = closure_2(FRTimeExpressionParser);
    tmp3 = closure_1;
    if (_isNativeReflectConstruct()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(FRTimeExpressionParser, AbstractTimeExpressionParser.AbstractTimeExpressionParser);
let items = [
  {
    key: "primaryPrefix",
    value: function primaryPrefix() {
      return "(?:(?:[\u00E0a])\\s*)?";
    },
  },
  {
    key: "followingPhase",
    value: function followingPhase() {
      return "\\s*(?:\\-|\\\u2013|\\~|\\\u301C|[\u00E0a]|\\?)\\s*";
    },
  },
  {
    key: "extractPrimaryTimeComponents",
    value: function extractPrimaryTimeComponents(arg0, arg1) {
      let fnResult = null;
      if (!str.match(/^\s*\d{4}\s*$/)) {
        let self = this;
        self = this;
        let fn = callback2(callback(self.prototype), "extractPrimaryTimeComponents", this);
        if (typeof fn === "function") {
          fn = (items) => fn.apply(self, items);
        }
        const items = [arg0, arg1];
        fnResult = fn(items);
      }
      return fnResult;
    },
  },
];

export default _createClass(FRTimeExpressionParser, items);
