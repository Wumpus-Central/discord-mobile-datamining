// _runtime/metro/10430__.js
import _mod10431 from "10431__.js";
import AbstractParserWithWordBoundaryChecking from "../10439_AbstractParserWithWordBoundaryChecking.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

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
  } catch (err) {}
}
const regExp = new RegExp(
  "(?:(?:within|in|for)\\s*)?(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(" +
    _mod10431.TIME_UNITS_PATTERN +
    ")(?=\\W|$)",
  "i",
);
const regExp1 = new RegExp(
  "(?:within|in|for)\\s*(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(" +
    _mod10431.TIME_UNITS_PATTERN +
    ")(?=\\W|$)",
  "i",
);
const regExp2 = new RegExp(
  "(?:within|in|for)\\s*(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(" +
    _mod10431.TIME_UNITS_NO_ABBR_PATTERN +
    ")(?=\\W|$)",
  "i",
);
class ENTimeUnitWithinFormatParser {
  constructor(arg0) {
    self = this;
    tmp = c2(this, ENTimeUnitWithinFormatParser);
    tmp2 = closure_4;
    obj = closure_4(ENTimeUnitWithinFormatParser);
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
_inherits(ENTimeUnitWithinFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern(option) {
    if (this.strictMode) {
      let tmp2 = regExp2;
    } else {
      tmp2 = option.option.forwardDate ? regExp : regExp1;
    }
    return tmp2;
  },
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(reference, arg1) {
      if (str.match(/^for\s*the\s*\w+/)) {
        return null;
      } else {
        const parseDurationResult = ENTimeUnitWithinFormatParser(10431).parseDuration(arg1[1]);
        let relativeFromReference = null;
        if (parseDurationResult) {
          const ParsingComponents = ENTimeUnitWithinFormatParser(10435).ParsingComponents;
          relativeFromReference = ParsingComponents.createRelativeFromReference(
            reference.reference,
            parseDurationResult,
          );
        }
        return relativeFromReference;
      }
      str = arg1[0];
    },
  },
];

export default _createClass(ENTimeUnitWithinFormatParser, items);
