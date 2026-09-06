// === Module 10448: ? ===

// Module 10448
import _mod10431 from "module_10431" /* 10431 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10439 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const ENTimeUnitLaterFormatParser = require;
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
const regExp = new RegExp("(" + _mod10431.TIME_UNITS_PATTERN + ")\\s{0,5}(?:later|after|from now|henceforth|forward|out)(?=(?:\\W|$))", "i");
const regExp1 = new RegExp("(" + _mod10431.TIME_UNITS_NO_ABBR_PATTERN + ")\\s{0,5}(later|after|from now)(?=\\W|$)", "i");
class ENTimeUnitLaterFormatParser {
  constructor(arg0) {
    self = this;
    tmp = c2(this, ENTimeUnitLaterFormatParser);
    tmp2 = closure_4;
    obj = closure_4(ENTimeUnitLaterFormatParser);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
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
_inherits(ENTimeUnitLaterFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern() {
    return this.strictMode ? regExp1 : regExp;
  }
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(reference, arg1) {
      const parseDurationResult = ENTimeUnitLaterFormatParser(10431).parseDuration(arg1[1]);
      let relativeFromReference = null;
      if (parseDurationResult) {
        const ParsingComponents = ENTimeUnitLaterFormatParser(10435).ParsingComponents;
        relativeFromReference = ParsingComponents.createRelativeFromReference(reference.reference, parseDurationResult);
      }
      return relativeFromReference;
    }
  }
];

export default _createClass(ENTimeUnitLaterFormatParser, items);