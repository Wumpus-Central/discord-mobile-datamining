// === Module 10529: _isNativeReflectConstruct ===

// Module 10529 (_isNativeReflectConstruct)
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 10432 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10439 */;
import WEEKDAY_DICTIONARY from "WEEKDAY_DICTIONARY" /* 10526 */;
import closure_2 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const NLMonthNameParser = require;
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
const regExp = new RegExp("(" + repeatedTimeunitPattern.matchAnyPattern(WEEKDAY_DICTIONARY.MONTH_DICTIONARY) + ")\\s*(?:[,-]?\\s*(" + WEEKDAY_DICTIONARY.YEAR_PATTERN + ")?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)", "i");
class NLMonthNameParser {
  constructor() {
    self = this;
    tmp = closure_2(this, NLMonthNameParser);
    tmp2 = closure_4;
    obj = closure_4(NLMonthNameParser);
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
_inherits(NLMonthNameParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const items = [
  {
    key: "innerPattern",
    value: function innerPattern() {
      return regExp;
    }
  },
  {
    key: "innerExtract",
    value: function innerExtract(createParsingComponents) {
      const parsingComponents = createParsingComponents.createParsingComponents();
      parsingComponents.imply("day", 1);
      const tmp4 = NLMonthNameParser(10526).MONTH_DICTIONARY[arg1[1].toLowerCase(arg1[1])];
      parsingComponents.assign("month", tmp4);
      if (arg1[2]) {
        parsingComponents.assign("year", tmp2(10526).parseYear(arg1[2]));
      } else {
        parsingComponents.imply("year", tmp2(10433).findYearClosestToRef(createParsingComponents.refDate, 1, tmp4));
      }
      return parsingComponents;
    }
  }
];

export default _createClass(NLMonthNameParser, items);