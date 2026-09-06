// === Module 10589: ? ===

// Module 10589
import _mod10588 from "module_10588" /* 10588 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const UkMonthNameParser = require;
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
class UkMonthNameParser {
  constructor() {
    self = this;
    tmp = c2(this, UkMonthNameParser);
    tmp2 = closure_4;
    obj = closure_4(UkMonthNameParser);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(UkMonthNameParser, _mod10588.AbstractParserWithLeftBoundaryChecking);
const entry = {
  key: "innerPatternString",
  value: function innerPatternString(arg0) {
    return "((?:\u0432|\u0443)\\s*)?(" + UkMonthNameParser(10432).matchAnyPattern(UkMonthNameParser(10586).MONTH_DICTIONARY) + ")\\s*(?:[,-]?\\s*(" + UkMonthNameParser(10586).YEAR_PATTERN + ")?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)";
  }
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(createParsingResult, index) {
      const formatted = index[2].toLowerCase();
      if (index[0].length <= 3) {
        if (!UkMonthNameParser(10586).FULL_MONTH_NAME_DICTIONARY[formatted]) {
          return null;
        }
      }
      const parsingResult = createParsingResult.createParsingResult(index.index, index.index + index[0].length);
      const start = parsingResult.start;
      start.imply("day", 1);
      const tmp9 = UkMonthNameParser(10586).MONTH_DICTIONARY[formatted];
      const start2 = parsingResult.start;
      start2.assign("month", tmp9);
      if (index[3]) {
        const start4 = parsingResult.start;
        start4.assign("year", UkMonthNameParser(10586).parseYearPattern(index[3]));
      } else {
        const start3 = parsingResult.start;
        start3.imply("year", UkMonthNameParser(10433).findYearClosestToRef(createParsingResult.reference.instant, 1, tmp9));
      }
      return parsingResult;
    }
  }
];

export default _createClass(UkMonthNameParser, items);