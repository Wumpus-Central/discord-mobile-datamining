// _runtime/10580__isNativeReflectConstruct.js
import _isNativeReflectConstruct2 from "10577__isNativeReflectConstruct.js";
import closure_2 from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import closure_3 from "metro/00093__possibleConstructorReturn.js";
import closure_4 from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";

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
  } catch (err) {}
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
      return (
        "(" +
        RUTimeUnitAgoFormatParser(10575).TIME_UNITS_PATTERN +
        ")\\s{0,5}\u043D\u0430\u0437\u0430\u0434(?=(?:\\W|$))"
      );
    },
  },
  {
    key: "innerExtract",
    value: function innerExtract(reference) {
      const parseDurationResult = RUTimeUnitAgoFormatParser(10575).parseDuration(arg1[1]);
      const ParsingComponents = RUTimeUnitAgoFormatParser(10449).ParsingComponents;
      return ParsingComponents.createRelativeFromReference(
        reference.reference,
        RUTimeUnitAgoFormatParser(10448).reverseDuration(RUTimeUnitAgoFormatParser(10575).parseDuration(arg1[1])),
      );
    },
  },
];

export default _createClass(RUTimeUnitAgoFormatParser, items);
