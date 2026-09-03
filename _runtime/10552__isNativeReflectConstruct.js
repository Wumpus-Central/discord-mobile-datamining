// === Module 10552: _isNativeReflectConstruct ===

// Module 10552 (_isNativeReflectConstruct)
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10457 */;
import WEEKDAY_DICTIONARY from "WEEKDAY_DICTIONARY" /* 10544 */;
import closure_2 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const NLTimeUnitCasualRelativeFormatParser = require;
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
const regExp = new RegExp("(dit|deze|vorig|afgelopen|(?:aan)?komend|over|\\+|-)e?\\s*(" + WEEKDAY_DICTIONARY.TIME_UNITS_PATTERN + ")(?=\\W|$)", "i");
class NLTimeUnitCasualRelativeFormatParser {
  constructor() {
    self = this;
    tmp = closure_2(this, NLTimeUnitCasualRelativeFormatParser);
    tmp2 = closure_4;
    obj = closure_4(NLTimeUnitCasualRelativeFormatParser);
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
_inherits(NLTimeUnitCasualRelativeFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const items = [
  {
    key: "innerPattern",
    value: function innerPattern() {
      return regExp;
    }
  },
  {
    key: "innerExtract",
    value: function innerExtract(reference) {
      const formatted = arg1[1].toLowerCase();
      const parseDurationResult = NLTimeUnitCasualRelativeFormatParser(10544).parseDuration(arg1[2]);
      if ("vorig" !== formatted) {
        if ("afgelopen" !== formatted) {
          let reverseDurationResult = parseDurationResult;
        }
        const ParsingComponents = tmp2(10453).ParsingComponents;
        return ParsingComponents.createRelativeFromReference(reference.reference, reverseDurationResult);
      }
      reverseDurationResult = tmp2(10452).reverseDuration(parseDurationResult);
    }
  }
];

export default _createClass(NLTimeUnitCasualRelativeFormatParser, items);