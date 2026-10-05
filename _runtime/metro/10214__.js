// _runtime/metro/10214__.js
import repeatedTimeunitPattern from "../10161_repeatedTimeunitPattern.js";
import EmptyDuration from "../10163_EmptyDuration.js";
import ReferenceWithTimezone from "../10164_ReferenceWithTimezone.js";
import AbstractParserWithWordBoundaryChecking from "../10168_AbstractParserWithWordBoundaryChecking.js";
import _mod10207 from "10207__.js";
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
class DETimeUnitAgoFormatParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, DETimeUnitAgoFormatParser);
    const obj = _getPrototypeOf(DETimeUnitAgoFormatParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    return c3(self, constructResult);
  }
}
_inherits(DETimeUnitAgoFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern() {
    const NUMBER_PATTERN = _mod10207.NUMBER_PATTERN;
    const regExp = new RegExp(
      "(?:\\s*((?:n\u00E4chste|kommende|folgende|letzte|vergangene|vorige|vor(?:her|an)gegangene)(?:s|n|m|r)?|vor|in)\\s*)?(" +
        NUMBER_PATTERN +
        ")?(?:\\s*(n\u00E4chste|kommende|folgende|letzte|vergangene|vorige|vor(?:her|an)gegangene)(?:s|n|m|r)?)?\\s*(" +
        repeatedTimeunitPattern.matchAnyPattern(_mod10207.TIME_UNIT_DICTIONARY) +
        ")",
      "i",
    );
    return regExp;
  },
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(reference, arg1) {
      let num = 1;
      if (arg1[2]) {
        num = _mod10207.parseNumberPattern(arg1[2]);
      }
      const obj = {};
      obj[_mod10207.TIME_UNIT_DICTIONARY[arg1[4].toLowerCase(arg1[4])]] = num;
      const str2 = arg1[1] || arg1[3] || "";
      const formatted = str2.toLowerCase();
      if (formatted) {
        const obj2 = /vor/;
        let isMatch = obj2.test(formatted);
        if (!isMatch) {
          const obj3 = /letzte/;
          isMatch = obj3.test(formatted);
        }
        if (!isMatch) {
          const obj4 = /vergangen/;
          isMatch = obj4.test(formatted);
        }
        let reverseDurationResult = obj;
        if (isMatch) {
          reverseDurationResult = EmptyDuration.reverseDuration(obj);
        }
        const ParsingComponents = ReferenceWithTimezone.ParsingComponents;
        return ParsingComponents.createRelativeFromReference(reference.reference, reverseDurationResult);
      }
    },
  },
];

export default _createClass(DETimeUnitAgoFormatParser, items);
