// === Module 9954: ? ===

// Module 9954
import _mod9951 from "module_9951" /* 9951 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
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
    tmp = c2(this, RUTimeUnitAgoFormatParser);
    tmp2 = closure_4;
    obj = closure_4(RUTimeUnitAgoFormatParser);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
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
_inherits(RUTimeUnitAgoFormatParser, _mod9951.AbstractParserWithLeftBoundaryChecking);
const entry = {
  key: "innerPatternString",
  value: function innerPatternString(arg0) {
    return "(" + RUTimeUnitAgoFormatParser(9949).TIME_UNITS_PATTERN + ")\\s{0,5}\u043D\u0430\u0437\u0430\u0434(?=(?:\\W|$))";
  }
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(reference, arg1) {
      const parseDurationResult = RUTimeUnitAgoFormatParser(9949).parseDuration(arg1[1]);
      const ParsingComponents = RUTimeUnitAgoFormatParser(9823).ParsingComponents;
      return ParsingComponents.createRelativeFromReference(reference.reference, RUTimeUnitAgoFormatParser(9822).reverseDuration(RUTimeUnitAgoFormatParser(9949).parseDuration(arg1[1])));
    }
  }
];

export default _createClass(RUTimeUnitAgoFormatParser, items);