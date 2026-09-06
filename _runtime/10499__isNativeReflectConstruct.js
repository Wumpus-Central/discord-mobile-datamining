// _runtime/10499__isNativeReflectConstruct.js
import AbstractParserWithWordBoundaryChecking from "10439_AbstractParserWithWordBoundaryChecking.js";
import closure_2 from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import closure_3 from "metro/00093__possibleConstructorReturn.js";
import closure_4 from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";

const FRTimeUnitAgoFormatParser = require;
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
class FRTimeUnitAgoFormatParser {
  constructor() {
    self = this;
    tmp = closure_2(this, FRTimeUnitAgoFormatParser);
    tmp2 = closure_4;
    obj = closure_4(FRTimeUnitAgoFormatParser);
    tmp3 = closure_3;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(FRTimeUnitAgoFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const items = [
  {
    key: "innerPattern",
    value: function innerPattern() {
      const regExp = new RegExp(
        "(?:les?|la|l'|du|des?)\\s*(" +
          FRTimeUnitAgoFormatParser(10494).NUMBER_PATTERN +
          ")?(?:\\s*(prochaine?s?|derni[e\u00E8]re?s?|pass[\u00E9e]e?s?|pr[\u00E9e]c[\u00E9e]dents?|suivante?s?))?\\s*(" +
          FRTimeUnitAgoFormatParser(10432).matchAnyPattern(FRTimeUnitAgoFormatParser(10494).TIME_UNIT_DICTIONARY) +
          ")(?:\\s*(prochaine?s?|derni[e\u00E8]re?s?|pass[\u00E9e]e?s?|pr[\u00E9e]c[\u00E9e]dents?|suivante?s?))?",
        "i",
      );
      return regExp;
    },
  },
  {
    key: "innerExtract",
    value: function innerExtract(reference) {
      let num = 1;
      if (arg1[1]) {
        num = FRTimeUnitAgoFormatParser(10494).parseNumberPattern(arg1[1]);
      }
      const obj = {};
      obj[FRTimeUnitAgoFormatParser(10494).TIME_UNIT_DICTIONARY[arg1[3].toLowerCase(arg1[3])]] = num;
      const formatted = arg1[2] || arg1[4] || "".toLowerCase();
      if (formatted) {
        let isMatch = /derni[eè]re?s?/.test(formatted);
        if (!isMatch) {
          isMatch = /pass[ée]e?s?/.test(formatted);
          const obj3 = /pass[ée]e?s?/;
        }
        if (!isMatch) {
          isMatch = /pr[ée]c[ée]dents?/.test(formatted);
          const obj4 = /pr[ée]c[ée]dents?/;
        }
        let reverseDurationResult = obj;
        if (isMatch) {
          reverseDurationResult = tmp3(10434).reverseDuration(obj);
        }
        const ParsingComponents = tmp3(10435).ParsingComponents;
        return ParsingComponents.createRelativeFromReference(reference.reference, reverseDurationResult);
      }
      const str2 = arg1[2] || arg1[4] || "";
    },
  },
];

export default _createClass(FRTimeUnitAgoFormatParser, items);
