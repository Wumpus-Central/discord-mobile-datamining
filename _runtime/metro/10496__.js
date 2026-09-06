// === Module 10496: ? ===

// Module 10496
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 10432 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10439 */;
import _mod10494 from "module_10494" /* 10494 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const FRMonthNameLittleEndianParser = require;
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
const regExp = new RegExp("(?:on\\s*?)?(" + _mod10494.ORDINAL_NUMBER_PATTERN + ")(?:\\s*(?:au|\\-|\\\u2013|jusqu'au?|\\s)\\s*(" + _mod10494.ORDINAL_NUMBER_PATTERN + "))?(?:-|/|\\s*(?:de)?\\s*)(" + repeatedTimeunitPattern.matchAnyPattern(_mod10494.MONTH_DICTIONARY) + ")(?:(?:-|/|,?\\s*)(" + _mod10494.YEAR_PATTERN + "(?![^\\s]\\d)))?(?=\\W|$)", "i");
class FRMonthNameLittleEndianParser {
  constructor() {
    self = this;
    tmp = c2(this, FRMonthNameLittleEndianParser);
    tmp2 = closure_4;
    obj = closure_4(FRMonthNameLittleEndianParser);
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
_inherits(FRMonthNameLittleEndianParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern() {
    return regExp;
  }
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(createParsingResult, index) {
      const parsingResult = createParsingResult.createParsingResult(index.index, index[0]);
      const tmp4 = FRMonthNameLittleEndianParser(10494).MONTH_DICTIONARY[index[3].toLowerCase(index[3])];
      const result = FRMonthNameLittleEndianParser(10494).parseOrdinalNumberPattern(index[1]);
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
          start2.assign("year", tmp2(10494).parseYear(index[4]));
        } else {
          const start = parsingResult.start;
          start.imply("year", tmp2(10433).findYearClosestToRef(createParsingResult.refDate, result, tmp4));
        }
        if (index[2]) {
          const start3 = parsingResult.start;
          const result1 = tmp2(10494).parseOrdinalNumberPattern(index[2]);
          parsingResult.end = start3.clone();
          const end = parsingResult.end;
          end.assign("day", result1);
        }
        return parsingResult;
      }
    }
  }
];

export default _createClass(FRMonthNameLittleEndianParser, items);