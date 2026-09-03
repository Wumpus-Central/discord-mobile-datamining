// _runtime/10532__isNativeReflectConstruct.js
import AbstractTimeExpressionParser from "10464_AbstractTimeExpressionParser.js";
import PTTimeExpressionParser from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import closure_1 from "metro/00093__possibleConstructorReturn.js";
import closure_2 from "00095__getPrototypeOf.js";
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
class PTTimeExpressionParser {
  constructor() {
    self = this;
    tmp = PTTimeExpressionParser(this, PTTimeExpressionParser);
    tmp2 = closure_2;
    obj = closure_2(PTTimeExpressionParser);
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
_inherits(PTTimeExpressionParser, AbstractTimeExpressionParser.AbstractTimeExpressionParser);
const items = [
  {
    key: "primaryPrefix",
    value: function primaryPrefix() {
      return "(?:(?:ao?|\u00E0s?|das|da|de|do)\\s*)?";
    },
  },
  {
    key: "followingPhase",
    value: function followingPhase() {
      return "\\s*(?:\\-|\\\u2013|\\~|\\\u301C|a(?:o)?|\\?)\\s*";
    },
  },
];

export default _createClass(PTTimeExpressionParser, items);
