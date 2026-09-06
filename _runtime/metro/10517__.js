// === Module 10517: ? ===

// Module 10517
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 10432 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10439 */;
import _mod10513 from "module_10513" /* 10513 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const PTMonthNameLittleEndianParser = require;
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
const regExp = new RegExp("([0-9]{1,2})(?:\u00BA|\u00AA|\u00B0)?(?:\\s*(?:desde|de|\\-|\\\u2013|ao?|\\s)\\s*([0-9]{1,2})(?:\u00BA|\u00AA|\u00B0)?)?\\s*(?:de)?\\s*(?:-|/|\\s*(?:de|,)?\\s*)(" + repeatedTimeunitPattern.matchAnyPattern(_mod10513.MONTH_DICTIONARY) + ")(?:\\s*(?:de|,)?\\s*(" + _mod10513.YEAR_PATTERN + "))?(?=\\W|$)", "i");
class PTMonthNameLittleEndianParser {
  constructor() {
    self = this;
    tmp = c2(this, PTMonthNameLittleEndianParser);
    tmp2 = closure_4;
    obj = closure_4(PTMonthNameLittleEndianParser);
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
_inherits(PTMonthNameLittleEndianParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
      const tmp4 = PTMonthNameLittleEndianParser(10513).MONTH_DICTIONARY[index[3].toLowerCase(index[3])];
      const parsed = parseInt(index[1]);
      if (parsed > 31) {
        index.index = index.index + index[1].length;
        return null;
      } else {
        const start4 = parsingResult.start;
        start4.assign("month", tmp4);
        const start5 = parsingResult.start;
        start5.assign("day", parsed);
        if (index[4]) {
          const start2 = parsingResult.start;
          start2.assign("year", PTMonthNameLittleEndianParser(10513).parseYear(index[4]));
        } else {
          const start = parsingResult.start;
          start.imply("year", PTMonthNameLittleEndianParser(10433).findYearClosestToRef(createParsingResult.refDate, parsed, tmp4));
        }
        if (index[2]) {
          const _parseInt = parseInt;
          const start3 = parsingResult.start;
          const parsed1 = parseInt(index[2]);
          parsingResult.end = start3.clone();
          const end = parsingResult.end;
          end.assign("day", parsed1);
        }
        return parsingResult;
      }
    }
  }
];

export default _createClass(PTMonthNameLittleEndianParser, items);