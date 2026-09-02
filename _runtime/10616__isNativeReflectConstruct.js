// === Module 10616: _isNativeReflectConstruct ===

// Module 10616 (_isNativeReflectConstruct)
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 10446 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10453 */;
import WEEKDAY_DICTIONARY from "WEEKDAY_DICTIONARY" /* 10615 */;
import closure_2 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const ENMonthNameLittleEndianParser = require;
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
const regExp = new RegExp("(?:on\\s{0,3})?(" + WEEKDAY_DICTIONARY.ORDINAL_NUMBER_PATTERN + ")(?:\\s{0,3}(?:al|\\-|\\\u2013|fino|alle|allo)?\\s{0,3}(" + WEEKDAY_DICTIONARY.ORDINAL_NUMBER_PATTERN + "))?(?:-|/|\\s{0,3}(?:dal)?\\s{0,3})(" + repeatedTimeunitPattern.matchAnyPattern(WEEKDAY_DICTIONARY.MONTH_DICTIONARY) + ")(?:(?:-|/|,?\\s{0,3})(" + WEEKDAY_DICTIONARY.YEAR_PATTERN + "(?![^\\s]\\d)))?(?=\\W|$)", "i");
class ENMonthNameLittleEndianParser {
  constructor() {
    self = this;
    tmp = closure_2(this, ENMonthNameLittleEndianParser);
    tmp2 = closure_4;
    obj = closure_4(ENMonthNameLittleEndianParser);
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
_inherits(ENMonthNameLittleEndianParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
      const parsingResult = createParsingResult.createParsingResult(index.index, index[0]);
      const tmp4 = ENMonthNameLittleEndianParser(10615).MONTH_DICTIONARY[index[3].toLowerCase(index[3])];
      const result = ENMonthNameLittleEndianParser(10615).parseOrdinalNumberPattern(index[1]);
      if (result > 31) {
        index.index = index.index + index[1].length;
        return null;
      } else {
        const start4 = parsingResult.start;
        start4.assign("month", tmp4);
        const start5 = parsingResult.start;
        start5.assign("day", result);
        if (index[4]) {
          const start2 = parsingResult.start;
          start2.assign("year", tmp2(10615).parseYear(index[4]));
        } else {
          const start = parsingResult.start;
          start.imply("year", tmp2(10447).findYearClosestToRef(createParsingResult.refDate, result, tmp4));
        }
        if (index[2]) {
          const start3 = parsingResult.start;
          const result1 = tmp2(10615).parseOrdinalNumberPattern(index[2]);
          parsingResult.end = start3.clone();
          const end = parsingResult.end;
          end.assign("day", result1);
        }
        return parsingResult;
      }
    }
  }
];

export default _createClass(ENMonthNameLittleEndianParser, items);