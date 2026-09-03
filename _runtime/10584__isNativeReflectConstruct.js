// === Module 10584: _isNativeReflectConstruct ===

// Module 10584 (_isNativeReflectConstruct)
import _isNativeReflectConstruct2 from "_isNativeReflectConstruct" /* 10581 */;
import closure_2 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const RUTimeUnitAgoFormatParser = require;
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
class RUTimeUnitAgoFormatParser {
  constructor() {
    self = this;
    tmp = closure_2(this, RUTimeUnitAgoFormatParser);
    tmp2 = closure_4;
    obj = closure_4(RUTimeUnitAgoFormatParser);
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
_inherits(RUTimeUnitAgoFormatParser, _isNativeReflectConstruct2.AbstractParserWithLeftBoundaryChecking);
const items = [
  {
    key: "innerPatternString",
    value: function innerPatternString(arg0) {
      return "(" + RUTimeUnitAgoFormatParser(10579).TIME_UNITS_PATTERN + ")\\s{0,5}\u043D\u0430\u0437\u0430\u0434(?=(?:\\W|$))";
    }
  },
  {
    key: "innerExtract",
    value: function innerExtract(reference) {
      const parseDurationResult = RUTimeUnitAgoFormatParser(10579).parseDuration(arg1[1]);
      const ParsingComponents = RUTimeUnitAgoFormatParser(10453).ParsingComponents;
      return ParsingComponents.createRelativeFromReference(reference.reference, RUTimeUnitAgoFormatParser(10452).reverseDuration(RUTimeUnitAgoFormatParser(10579).parseDuration(arg1[1])));
    }
  }
];

export default _createClass(RUTimeUnitAgoFormatParser, items);