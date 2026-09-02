// === Module 10444: _isNativeReflectConstruct ===

// Module 10444 (_isNativeReflectConstruct)
import WEEKDAY_DICTIONARY from "WEEKDAY_DICTIONARY" /* 10445 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10453 */;
import closure_2 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const ENTimeUnitWithinFormatParser = require;
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
const regExp = new RegExp("(?:(?:within|in|for)\\s*)?(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(" + WEEKDAY_DICTIONARY.TIME_UNITS_PATTERN + ")(?=\\W|$)", "i");
const regExp1 = new RegExp("(?:within|in|for)\\s*(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(" + WEEKDAY_DICTIONARY.TIME_UNITS_PATTERN + ")(?=\\W|$)", "i");
const regExp2 = new RegExp("(?:within|in|for)\\s*(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(" + WEEKDAY_DICTIONARY.TIME_UNITS_NO_ABBR_PATTERN + ")(?=\\W|$)", "i");
class ENTimeUnitWithinFormatParser {
  constructor(arg0) {
    self = this;
    tmp = closure_2(this, ENTimeUnitWithinFormatParser);
    tmp2 = closure_4;
    obj = closure_4(ENTimeUnitWithinFormatParser);
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
_inherits(ENTimeUnitWithinFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const items = [
  {
    key: "innerPattern",
    value: function innerPattern(option) {
      if (this.strictMode) {
        let tmp2 = regExp2;
      } else {
        tmp2 = option.option.forwardDate ? regExp : regExp1;
      }
      return tmp2;
    }
  },
  {
    key: "innerExtract",
    value: function innerExtract(reference) {
      if (str.match(/^for\s*the\s*\w+/)) {
        return null;
      } else {
        const parseDurationResult = ENTimeUnitWithinFormatParser(10445).parseDuration(arg1[1]);
        let relativeFromReference = null;
        if (parseDurationResult) {
          const ParsingComponents = ENTimeUnitWithinFormatParser(10449).ParsingComponents;
          relativeFromReference = ParsingComponents.createRelativeFromReference(reference.reference, parseDurationResult);
        }
        return relativeFromReference;
      }
      str = arg1[0];
    }
  }
];

export default _createClass(ENTimeUnitWithinFormatParser, items);