// _runtime/metro/10485__.js
import AbstractParserWithWordBoundaryChecking from "../10439_AbstractParserWithWordBoundaryChecking.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

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
  } catch (err) {}
}
class DETimeUnitAgoFormatParser {
  constructor() {
    self = this;
    tmp = c2(this, DETimeUnitAgoFormatParser);
    tmp2 = closure_4;
    obj = closure_4(DETimeUnitAgoFormatParser);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
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
const entry = {
  key: "innerPattern",
  value: function innerPattern() {
    const regExp = new RegExp(
      "(?:\\s*((?:n\u00E4chste|kommende|folgende|letzte|vergangene|vorige|vor(?:her|an)gegangene)(?:s|n|m|r)?|vor|in)\\s*)?(" +
        DETimeUnitAgoFormatParser(10478).NUMBER_PATTERN +
        ")?(?:\\s*(n\u00E4chste|kommende|folgende|letzte|vergangene|vorige|vor(?:her|an)gegangene)(?:s|n|m|r)?)?\\s*(" +
        DETimeUnitAgoFormatParser(10432).matchAnyPattern(DETimeUnitAgoFormatParser(10478).TIME_UNIT_DICTIONARY) +
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
          reverseDurationResult = DETimeUnitAgoFormatParser(10434).reverseDuration(obj);
        }
        const ParsingComponents = DETimeUnitAgoFormatParser(10435).ParsingComponents;
        return ParsingComponents.createRelativeFromReference(reference.reference, reverseDurationResult);
      }
      const str2 = arg1[1] || arg1[3] || "";
    },
  },
];

export default _createClass(DETimeUnitAgoFormatParser, items);
