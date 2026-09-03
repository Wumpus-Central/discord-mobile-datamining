// === Module 10555: _isNativeReflectConstruct ===

// Module 10555 (_isNativeReflectConstruct)
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10457 */;
import WEEKDAY_DICTIONARY from "WEEKDAY_DICTIONARY" /* 10544 */;
import closure_2 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const NLTimeUnitLaterFormatParser = require;
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
const regExp = new RegExp("(" + WEEKDAY_DICTIONARY.TIME_UNITS_PATTERN + ")(later|na|vanaf nu|voortaan|vooruit|uit)(?=(?:\\W|$))", "i");
const regExp1 = new RegExp("(" + WEEKDAY_DICTIONARY.TIME_UNITS_PATTERN + ")(later|vanaf nu)(?=(?:\\W|$))", "i");
class NLTimeUnitLaterFormatParser {
  constructor(arg0) {
    self = this;
    tmp = closure_2(this, NLTimeUnitLaterFormatParser);
    tmp2 = closure_4;
    obj = closure_4(NLTimeUnitLaterFormatParser);
    tmp3 = closure_3;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.strictMode = global;
    return tmp3Result;
  }
}
_inherits(NLTimeUnitLaterFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const items = [
  {
    key: "innerPattern",
    value: function innerPattern() {
      return this.strictMode ? regExp1 : regExp;
    }
  },
  {
    key: "innerExtract",
    value: function innerExtract(reference) {
      const ParsingComponents = NLTimeUnitLaterFormatParser(10453).ParsingComponents;
      return ParsingComponents.createRelativeFromReference(reference.reference, NLTimeUnitLaterFormatParser(10544).parseDuration(arg1[1]));
    }
  }
];

export default _createClass(NLTimeUnitLaterFormatParser, items);