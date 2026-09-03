// === Module 10494: _isNativeReflectConstruct ===

// Module 10494 (_isNativeReflectConstruct)
import AbstractTimeExpressionParser from "AbstractTimeExpressionParser" /* 10464 */;
import DETimeExpressionParser from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import closure_1 from "_possibleConstructorReturn" /* 93 */;
import closure_2 from "_getPrototypeOf" /* 95 */;
import closure_3 from "_get" /* 96 */;
import _inherits from "_inherits" /* 98 */;

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
class DETimeExpressionParser {
  constructor() {
    self = this;
    tmp = DETimeExpressionParser(this, DETimeExpressionParser);
    tmp2 = closure_2;
    obj = closure_2(DETimeExpressionParser);
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
_inherits(DETimeExpressionParser, AbstractTimeExpressionParser.AbstractTimeExpressionParser);
let items = [
  {
    key: "primaryPrefix",
    value: function primaryPrefix() {
      return "(?:(?:um|von)\\s*)?";
    }
  },
  {
    key: "followingPhase",
    value: function followingPhase() {
      return "\\s*(?:\\-|\\\u2013|\\~|\\\u301C|bis)\\s*";
    }
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
    }
  }
];

export default _createClass(DETimeExpressionParser, items);