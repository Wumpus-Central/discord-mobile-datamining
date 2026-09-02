// === Module 10512: _isNativeReflectConstruct ===

// Module 10512 (_isNativeReflectConstruct)
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10453 */;
import closure_2 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const FRTimeUnitWithinFormatParser = require;
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
class FRTimeUnitWithinFormatParser {
  constructor() {
    self = this;
    tmp = closure_2(this, FRTimeUnitWithinFormatParser);
    tmp2 = closure_4;
    obj = closure_4(FRTimeUnitWithinFormatParser);
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
_inherits(FRTimeUnitWithinFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const items = [
  {
    key: "innerPattern",
    value: function innerPattern() {
      const regExp = new RegExp("(?:dans|en|pour|pendant|de)\\s*(" + FRTimeUnitWithinFormatParser(10508).TIME_UNITS_PATTERN + ")(?=\\W|$)", "i");
      return regExp;
    }
  },
  {
    key: "innerExtract",
    value: function innerExtract(reference) {
      const ParsingComponents = FRTimeUnitWithinFormatParser(10449).ParsingComponents;
      return ParsingComponents.createRelativeFromReference(reference.reference, FRTimeUnitWithinFormatParser(10508).parseDuration(arg1[1]));
    }
  }
];

export default _createClass(FRTimeUnitWithinFormatParser, items);