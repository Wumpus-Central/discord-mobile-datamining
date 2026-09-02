// === Module 10542: _isNativeReflectConstruct ===

// Module 10542 (_isNativeReflectConstruct)
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 10446 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10453 */;
import WEEKDAY_DICTIONARY from "WEEKDAY_DICTIONARY" /* 10540 */;
import closure_2 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const NLMonthNameMiddleEndianParser = require;
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
const combined = "(?:on\\s*?)?(" + WEEKDAY_DICTIONARY.ORDINAL_NUMBER_PATTERN + ")(?:\\s*(?:tot|\\-|\\\u2013|until|through|till|\\s)\\s*(" + WEEKDAY_DICTIONARY.ORDINAL_NUMBER_PATTERN + "))?(?:-|/|\\s*(?:of)?\\s*)(";
const sum = combined + repeatedTimeunitPattern.matchAnyPattern(WEEKDAY_DICTIONARY.MONTH_DICTIONARY);
const regExp = new RegExp(sum + ")(?:(?:-|/|,?\\s*)" + "(" + WEEKDAY_DICTIONARY.YEAR_PATTERN + "(?![^\\s]\\d)))?(?=\\W|$)", "i");
class NLMonthNameMiddleEndianParser {
  constructor() {
    self = this;
    tmp = closure_2(this, NLMonthNameMiddleEndianParser);
    tmp2 = closure_4;
    obj = closure_4(NLMonthNameMiddleEndianParser);
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
_inherits(NLMonthNameMiddleEndianParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const items = [
  {
    key: "innerPattern",
    value: function innerPattern() {
      return regExp;
    }
  },
  {
    key: "innerExtract",
    value: function innerExtract(createParsingComponents, index) {
      const tmp3 = NLMonthNameMiddleEndianParser(10540).MONTH_DICTIONARY[index[3].toLowerCase(index[3])];
      const result = NLMonthNameMiddleEndianParser(10540).parseOrdinalNumberPattern(index[1]);
      if (result > 31) {
        index.index = index.index + index[1].length;
        return null;
      } else {
        let obj = { day: null, month: null };
        obj[0] = result;
        obj[1] = tmp3;
        const parsingComponents = createParsingComponents.createParsingComponents(obj);
        if (index[4]) {
          obj = parsingComponents.assign("year", tmp(10540).parseYear(index[4]));
        } else {
          parsingComponents.imply("year", tmp(10447).findYearClosestToRef(createParsingComponents.refDate, result, tmp3));
        }
        if (index[2]) {
          const result1 = tmp(10540).parseOrdinalNumberPattern(index[2]);
          const parsingResult = createParsingComponents.createParsingResult(index.index, index[0]);
          parsingResult.start = parsingComponents;
          parsingResult.end = parsingComponents.clone();
          const end = parsingResult.end;
          obj = end.assign("day", result1);
          return parsingResult;
        } else {
          return parsingComponents;
        }
      }
    }
  }
];

export default _createClass(NLMonthNameMiddleEndianParser, items);