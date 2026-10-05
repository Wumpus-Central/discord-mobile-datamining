// === Module 10214: ? ===

// Module 10214
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 10161 */;
import EmptyDuration from "EmptyDuration" /* 10163 */;
import ReferenceWithTimezone from "ReferenceWithTimezone" /* 10164 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10168 */;
import _mod10207 from "module_10207" /* 10207 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
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
    const regExp = new RegExp("(?:\\s*((?:n\u00E4chste|kommende|folgende|letzte|vergangene|vorige|vor(?:her|an)gegangene)(?:s|n|m|r)?|vor|in)\\s*)?(" + NUMBER_PATTERN + ")?(?:\\s*(n\u00E4chste|kommende|folgende|letzte|vergangene|vorige|vor(?:her|an)gegangene)(?:s|n|m|r)?)?\\s*(" + repeatedTimeunitPattern.matchAnyPattern(_mod10207.TIME_UNIT_DICTIONARY) + ")", "i");
    return regExp;
  }
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
    }
  }
];

export default _createClass(DETimeUnitAgoFormatParser, items);