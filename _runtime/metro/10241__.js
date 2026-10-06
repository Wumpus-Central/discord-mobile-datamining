// === Module 10241: ? ===

// Module 10241
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 10174 */;
import EmptyDuration from "EmptyDuration" /* 10176 */;
import ReferenceWithTimezone from "ReferenceWithTimezone" /* 10177 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10181 */;
import _mod10236 from "module_10236" /* 10236 */;
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
class FRTimeUnitAgoFormatParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, FRTimeUnitAgoFormatParser);
    const obj = _getPrototypeOf(FRTimeUnitAgoFormatParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    return c3(self, constructResult);
  }
}
_inherits(FRTimeUnitAgoFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern() {
    const NUMBER_PATTERN = _mod10236.NUMBER_PATTERN;
    const regExp = new RegExp("(?:les?|la|l'|du|des?)\\s*(" + NUMBER_PATTERN + ")?(?:\\s*(prochaine?s?|derni[e\u00E8]re?s?|pass[\u00E9e]e?s?|pr[\u00E9e]c[\u00E9e]dents?|suivante?s?))?\\s*(" + repeatedTimeunitPattern.matchAnyPattern(_mod10236.TIME_UNIT_DICTIONARY) + ")(?:\\s*(prochaine?s?|derni[e\u00E8]re?s?|pass[\u00E9e]e?s?|pr[\u00E9e]c[\u00E9e]dents?|suivante?s?))?", "i");
    return regExp;
  }
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(reference, arg1) {
      let num = 1;
      if (arg1[1]) {
        num = _mod10236.parseNumberPattern(arg1[1]);
      }
      const obj = {};
      obj[_mod10236.TIME_UNIT_DICTIONARY[arg1[3].toLowerCase(arg1[3])]] = num;
      const str2 = arg1[2] || arg1[4] || "";
      const formatted = str2.toLowerCase();
      if (formatted) {
        const obj2 = /derni[eè]re?s?/;
        let isMatch = obj2.test(formatted);
        if (!isMatch) {
          const obj3 = /pass[ée]e?s?/;
          isMatch = obj3.test(formatted);
        }
        if (!isMatch) {
          const obj4 = /pr[ée]c[ée]dents?/;
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

export default _createClass(FRTimeUnitAgoFormatParser, items);