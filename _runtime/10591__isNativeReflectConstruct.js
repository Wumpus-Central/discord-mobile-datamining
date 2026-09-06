// === Module 10591: _isNativeReflectConstruct ===

// Module 10591 (_isNativeReflectConstruct)
import _isNativeReflectConstruct2 from "_isNativeReflectConstruct" /* 10588 */;
import closure_2 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const UKTimeUnitAgoFormatParser = require;
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
class UKTimeUnitAgoFormatParser {
  constructor() {
    self = this;
    tmp = closure_2(this, UKTimeUnitAgoFormatParser);
    tmp2 = closure_4;
    obj = closure_4(UKTimeUnitAgoFormatParser);
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
_inherits(UKTimeUnitAgoFormatParser, _isNativeReflectConstruct2.AbstractParserWithLeftBoundaryChecking);
const items = [
  {
    key: "innerPatternString",
    value: function innerPatternString(arg0) {
      return "(" + UKTimeUnitAgoFormatParser(10586).TIME_UNITS_PATTERN + ")\\s{0,5}\u0442\u043E\u043C\u0443(?=(?:\\W|$))";
    }
  },
  {
    key: "innerExtract",
    value: function innerExtract(reference) {
      const parseDurationResult = UKTimeUnitAgoFormatParser(10586).parseDuration(arg1[1]);
      const ParsingComponents = UKTimeUnitAgoFormatParser(10435).ParsingComponents;
      return ParsingComponents.createRelativeFromReference(reference.reference, UKTimeUnitAgoFormatParser(10434).reverseDuration(UKTimeUnitAgoFormatParser(10586).parseDuration(arg1[1])));
    }
  }
];

export default _createClass(UKTimeUnitAgoFormatParser, items);