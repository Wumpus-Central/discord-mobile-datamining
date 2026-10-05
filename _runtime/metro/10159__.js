// _runtime/metro/10159__.js
import _mod10160 from "10160__.js";
import ReferenceWithTimezone from "../10164_ReferenceWithTimezone.js";
import AbstractParserWithWordBoundaryChecking from "../10168_AbstractParserWithWordBoundaryChecking.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {}));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
const regExp = new RegExp(
  "(?:(?:within|in|for)\\s*)?(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(" +
    _mod10160.TIME_UNITS_PATTERN +
    ")(?=\\W|$)",
  "i",
);
const regExp1 = new RegExp(
  "(?:within|in|for)\\s*(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(" +
    _mod10160.TIME_UNITS_PATTERN +
    ")(?=\\W|$)",
  "i",
);
const regExp2 = new RegExp(
  "(?:within|in|for)\\s*(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(" +
    _mod10160.TIME_UNITS_NO_ABBR_PATTERN +
    ")(?=\\W|$)",
  "i",
);
class ENTimeUnitWithinFormatParser {
  constructor(strictMode) {
    let constructResult;
    const self = this;
    _classCallCheck(this, ENTimeUnitWithinFormatParser);
    const obj = _getPrototypeOf(ENTimeUnitWithinFormatParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    const tmp3Result = c3(self, constructResult);
    tmp3Result.strictMode = strictMode;
    return tmp3Result;
  }
}
_inherits(ENTimeUnitWithinFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern(option) {
    let tmp2;
    if (this.strictMode) {
      tmp2 = regExp2;
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
      const str = arg1[0];
      if (str.match(/^for\s*the\s*\w+/)) {
        return null;
      } else {
        const parseDurationResult = _mod10160.parseDuration(arg1[1]);
        let relativeFromReference = null;
        if (parseDurationResult) {
          const ParsingComponents = ReferenceWithTimezone.ParsingComponents;
          relativeFromReference = ParsingComponents.createRelativeFromReference(
            reference.reference,
            parseDurationResult,
          );
        }
        return relativeFromReference;
      }
    },
  },
];

export default _createClass(ENTimeUnitWithinFormatParser, items);
