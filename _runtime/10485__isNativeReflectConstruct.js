// === Module 10485: _isNativeReflectConstruct ===

// Module 10485 (_isNativeReflectConstruct)
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10439 */;
import closure_2 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const DETimeUnitAgoFormatParser = require;
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
class DETimeUnitAgoFormatParser {
  constructor() {
    self = this;
    tmp = closure_2(this, DETimeUnitAgoFormatParser);
    tmp2 = closure_4;
    obj = closure_4(DETimeUnitAgoFormatParser);
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
_inherits(DETimeUnitAgoFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const items = [
  {
    key: "innerPattern",
    value: function innerPattern() {
      const regExp = new RegExp("(?:\\s*((?:n\u00E4chste|kommende|folgende|letzte|vergangene|vorige|vor(?:her|an)gegangene)(?:s|n|m|r)?|vor|in)\\s*)?(" + DETimeUnitAgoFormatParser(10478).NUMBER_PATTERN + ")?(?:\\s*(n\u00E4chste|kommende|folgende|letzte|vergangene|vorige|vor(?:her|an)gegangene)(?:s|n|m|r)?)?\\s*(" + DETimeUnitAgoFormatParser(10432).matchAnyPattern(DETimeUnitAgoFormatParser(10478).TIME_UNIT_DICTIONARY) + ")", "i");
      return regExp;
    }
  },
  {
    key: "innerExtract",
    value: function innerExtract(reference) {
      let num = 1;
      if (arg1[2]) {
        num = DETimeUnitAgoFormatParser(10478).parseNumberPattern(arg1[2]);
      }
      const obj = {};
      obj[DETimeUnitAgoFormatParser(10478).TIME_UNIT_DICTIONARY[arg1[4].toLowerCase(arg1[4])]] = num;
      const formatted = arg1[1] || arg1[3] || "".toLowerCase();
      if (formatted) {
        let isMatch = /vor/.test(formatted);
        if (!isMatch) {
          isMatch = /letzte/.test(formatted);
          const obj3 = /letzte/;
        }
        if (!isMatch) {
          isMatch = /vergangen/.test(formatted);
          const obj4 = /vergangen/;
        }
        let reverseDurationResult = obj;
        if (isMatch) {
          reverseDurationResult = tmp3(10434).reverseDuration(obj);
        }
        const ParsingComponents = tmp3(10435).ParsingComponents;
        return ParsingComponents.createRelativeFromReference(reference.reference, reverseDurationResult);
      }
      const str2 = arg1[1] || arg1[3] || "";
    }
  }
];

export default _createClass(DETimeUnitAgoFormatParser, items);