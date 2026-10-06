// === Module 10273: ? ===

// Module 10273
import AbstractTimeExpressionParser from "AbstractTimeExpressionParser" /* 10188 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import map from "_possibleConstructorReturn" /* 93 */;
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
class NLTimeExpressionParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, NLTimeExpressionParser);
    const obj = _getPrototypeOf(NLTimeExpressionParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return map(self, constructResult);
  }
}
_inherits(NLTimeExpressionParser, AbstractTimeExpressionParser.AbstractTimeExpressionParser);
const entry = {
  key: "primaryPrefix",
  value: function primaryPrefix() {
    return "(?:(?:om)\\s*)?";
  }
};
let items = [
  entry,
  {
    key: "followingPhase",
    value: function followingPhase() {
      return "\\s*(?:\\-|\\\u2013|\\~|\\\u301C|om|\\?)\\s*";
    }
  },
  {
    key: "primarySuffix",
    value: function primarySuffix() {
      return "(?:\\s*(?:uur))?(?!/)(?=\\W|$)";
    }
  },
  {
    key: "extractPrimaryTimeComponents",
    value: function extractPrimaryTimeComponents(arg0, arg1) {
      let fnResult = null;
      const str = arg1[0];
      if (!str.match(/^\s*\d{4}\s*$/)) {
        const self = this;
        let fn = _get(_getPrototypeOf(NLTimeExpressionParser.prototype), "extractPrimaryTimeComponents", this);
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

export default _createClass(NLTimeExpressionParser, items);