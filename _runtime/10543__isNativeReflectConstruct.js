// === Module 10543: _isNativeReflectConstruct ===

// Module 10543 (_isNativeReflectConstruct)
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10457 */;
import closure_2 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const NLTimeUnitWithinFormatParser = require;
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
class NLTimeUnitWithinFormatParser {
  constructor() {
    self = this;
    tmp = closure_2(this, NLTimeUnitWithinFormatParser);
    tmp2 = closure_4;
    obj = closure_4(NLTimeUnitWithinFormatParser);
    tmp3 = closure_3;
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
_inherits(NLTimeUnitWithinFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const items = [
  {
    key: "innerPattern",
    value: function innerPattern() {
      const regExp = new RegExp("(?:binnen|in|binnen de|voor)\\s*(" + NLTimeUnitWithinFormatParser(10544).TIME_UNITS_PATTERN + ")(?=\\W|$)", "i");
      return regExp;
    }
  },
  {
    key: "innerExtract",
    value: function innerExtract(reference) {
      const ParsingComponents = NLTimeUnitWithinFormatParser(10453).ParsingComponents;
      return ParsingComponents.createRelativeFromReference(reference.reference, NLTimeUnitWithinFormatParser(10544).parseDuration(arg1[1]));
    }
  }
];

export default _createClass(NLTimeUnitWithinFormatParser, items);