// _runtime/10448__isNativeReflectConstruct.js
import WEEKDAY_DICTIONARY from "10431_WEEKDAY_DICTIONARY.js";
import AbstractParserWithWordBoundaryChecking from "10439_AbstractParserWithWordBoundaryChecking.js";
import closure_2 from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import closure_3 from "metro/00093__possibleConstructorReturn.js";
import closure_4 from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";

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
  } catch (err) {}
}
const regExp = new RegExp(
  "(" + WEEKDAY_DICTIONARY.TIME_UNITS_PATTERN + ")\\s{0,5}(?:later|after|from now|henceforth|forward|out)(?=(?:\\W|$))",
  "i",
);
const regExp1 = new RegExp(
  "(" + WEEKDAY_DICTIONARY.TIME_UNITS_NO_ABBR_PATTERN + ")\\s{0,5}(later|after|from now)(?=\\W|$)",
  "i",
);
class ENTimeUnitLaterFormatParser {
  constructor(arg0) {
    self = this;
    tmp = closure_2(this, ENTimeUnitLaterFormatParser);
    tmp2 = closure_4;
    obj = closure_4(ENTimeUnitLaterFormatParser);
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
_inherits(ENTimeUnitLaterFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const items = [
  {
    key: "innerPattern",
    value: function innerPattern() {
      return this.strictMode ? regExp1 : regExp;
    },
  },
  {
    key: "innerExtract",
    value: function innerExtract(reference) {
      const parseDurationResult = ENTimeUnitLaterFormatParser(10431).parseDuration(arg1[1]);
      let relativeFromReference = null;
      if (parseDurationResult) {
        const ParsingComponents = ENTimeUnitLaterFormatParser(10435).ParsingComponents;
        relativeFromReference = ParsingComponents.createRelativeFromReference(reference.reference, parseDurationResult);
      }
      return relativeFromReference;
    },
  },
];

export default _createClass(ENTimeUnitLaterFormatParser, items);
