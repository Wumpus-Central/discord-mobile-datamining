// === Module 10460: _isNativeReflectConstruct ===

// Module 10460 (_isNativeReflectConstruct)
import WEEKDAY_DICTIONARY from "WEEKDAY_DICTIONARY" /* 10449 */;
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 10450 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10457 */;
import closure_2 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const ENMonthNameParser = require;
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
const regExp = new RegExp("((?:in)\\s*)?(" + repeatedTimeunitPattern.matchAnyPattern(WEEKDAY_DICTIONARY.MONTH_DICTIONARY) + ")\\s*(?:(?:,|-|of)?\\s*(" + WEEKDAY_DICTIONARY.YEAR_PATTERN + ")?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)", "i");
class ENMonthNameParser {
  constructor() {
    self = this;
    tmp = closure_2(this, ENMonthNameParser);
    tmp2 = closure_4;
    obj = closure_4(ENMonthNameParser);
    tmp3 = closure_3;
    if (_isNativeReflectConstruct()) {
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
_inherits(ENMonthNameParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const items = [
  {
    key: "innerPattern",
    value: function innerPattern() {
      return regExp;
    }
  },
  {
    key: "innerExtract",
    value: function innerExtract(createParsingResult, index) {
      const formatted = index[2].toLowerCase();
      if (index[0].length <= 3) {
        if (!ENMonthNameParser(10449).FULL_MONTH_NAME_DICTIONARY[formatted]) {
          return null;
        }
      }
      let str2 = index[1];
      if (!str2) {
        str2 = "";
      }
      const parsingResult = createParsingResult.createParsingResult(index.index + str2.length, index.index + index[0].length);
      const start = parsingResult.start;
      start.imply("day", 1);
      const start2 = parsingResult.start;
      start2.addTag("parser/ENMonthNameParser");
      const tmp10 = ENMonthNameParser(10449).MONTH_DICTIONARY[formatted];
      const start3 = parsingResult.start;
      start3.assign("month", tmp10);
      if (index[3]) {
        const start5 = parsingResult.start;
        start5.assign("year", tmp8(10449).parseYear(index[3]));
      } else {
        const start4 = parsingResult.start;
        start4.imply("year", tmp8(10451).findYearClosestToRef(createParsingResult.refDate, 1, tmp10));
      }
      return parsingResult;
    }
  }
];

export default _createClass(ENMonthNameParser, items);