// === Module 10465: _isNativeReflectConstruct ===

// Module 10465 (_isNativeReflectConstruct)
import WEEKDAY_DICTIONARY from "WEEKDAY_DICTIONARY" /* 10449 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10457 */;
import closure_2 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const ENTimeUnitAgoFormatParser = require;
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
const regExp = new RegExp("(" + WEEKDAY_DICTIONARY.TIME_UNITS_PATTERN + ")\\s{0,5}(?:ago|before|earlier)(?=\\W|$)", "i");
const regExp1 = new RegExp("(" + WEEKDAY_DICTIONARY.TIME_UNITS_NO_ABBR_PATTERN + ")\\s{0,5}(?:ago|before|earlier)(?=\\W|$)", "i");
class ENTimeUnitAgoFormatParser {
  constructor(arg0) {
    self = this;
    tmp = closure_2(this, ENTimeUnitAgoFormatParser);
    tmp2 = closure_4;
    obj = closure_4(ENTimeUnitAgoFormatParser);
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
_inherits(ENTimeUnitAgoFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
      const parseDurationResult = ENTimeUnitAgoFormatParser(10449).parseDuration(arg1[1]);
      let relativeFromReference = null;
      if (parseDurationResult) {
        const ParsingComponents = tmp(10453).ParsingComponents;
        relativeFromReference = ParsingComponents.createRelativeFromReference(reference.reference, tmp(10452).reverseDuration(parseDurationResult));
      }
      return relativeFromReference;
    }
  }
];

export default _createClass(ENTimeUnitAgoFormatParser, items);