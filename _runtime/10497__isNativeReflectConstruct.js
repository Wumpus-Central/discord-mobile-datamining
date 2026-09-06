// === Module 10497: _isNativeReflectConstruct ===

// Module 10497 (_isNativeReflectConstruct)
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10439 */;
import closure_2 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const FRTimeUnitAgoFormatParser = require;
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
class FRTimeUnitAgoFormatParser {
  constructor() {
    self = this;
    tmp = closure_2(this, FRTimeUnitAgoFormatParser);
    tmp2 = closure_4;
    obj = closure_4(FRTimeUnitAgoFormatParser);
    tmp3 = closure_3;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(FRTimeUnitAgoFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const items = [
  {
    key: "innerPattern",
    value: function innerPattern() {
      const regExp = new RegExp("il y a\\s*(" + FRTimeUnitAgoFormatParser(10494).TIME_UNITS_PATTERN + ")(?=(?:\\W|$))", "i");
      return regExp;
    }
  },
  {
    key: "innerExtract",
    value: function innerExtract(reference) {
      const parseDurationResult = FRTimeUnitAgoFormatParser(10494).parseDuration(arg1[1]);
      const ParsingComponents = FRTimeUnitAgoFormatParser(10435).ParsingComponents;
      return ParsingComponents.createRelativeFromReference(reference.reference, FRTimeUnitAgoFormatParser(10434).reverseDuration(FRTimeUnitAgoFormatParser(10494).parseDuration(arg1[1])));
    }
  }
];

export default _createClass(FRTimeUnitAgoFormatParser, items);