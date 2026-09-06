// _runtime/metro/10440__.js
import _mod10431 from "10431__.js";
import repeatedTimeunitPattern from "../10432_repeatedTimeunitPattern.js";
import AbstractParserWithWordBoundaryChecking from "../10439_AbstractParserWithWordBoundaryChecking.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

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
  } catch (err) {}
}
const regExp = new RegExp(
  "(?:on\\s{0,3})?(" +
    _mod10431.ORDINAL_NUMBER_PATTERN +
    ")(?:\\s{0,3}(?:to|\\-|\\\u2013|until|through|till)?\\s{0,3}(" +
    _mod10431.ORDINAL_NUMBER_PATTERN +
    "))?(?:-|/|\\s{0,3}(?:of)?\\s{0,3})(" +
    repeatedTimeunitPattern.matchAnyPattern(_mod10431.MONTH_DICTIONARY) +
    ")(?:(?:-|/|,?\\s{0,3})(" +
    _mod10431.YEAR_PATTERN +
    "(?!\\w)))?(?=\\W|$)",
  "i",
);
class ENMonthNameLittleEndianParser {
  constructor() {
    self = this;
    tmp = c2(this, ENMonthNameLittleEndianParser);
    tmp2 = closure_4;
    obj = closure_4(ENMonthNameLittleEndianParser);
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
_inherits(ENMonthNameLittleEndianParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern() {
    return regExp;
  },
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(createParsingResult, index) {
      const parsingResult = createParsingResult.createParsingResult(index.index, index[0]);
      const tmp4 = ENMonthNameLittleEndianParser(10431).MONTH_DICTIONARY[index[3].toLowerCase(index[3])];
      const result = ENMonthNameLittleEndianParser(10431).parseOrdinalNumberPattern(index[1]);
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
          start2.assign("year", ENMonthNameLittleEndianParser(10431).parseYear(index[4]));
        } else {
          const start = parsingResult.start;
          start.imply(
            "year",
            ENMonthNameLittleEndianParser(10433).findYearClosestToRef(createParsingResult.refDate, result, tmp4),
          );
        }
        if (index[2]) {
          const start3 = parsingResult.start;
          const result1 = ENMonthNameLittleEndianParser(10431).parseOrdinalNumberPattern(index[2]);
          parsingResult.end = start3.clone();
          const end = parsingResult.end;
          end.assign("day", result1);
        }
        return parsingResult;
      }
    },
  },
];

export default _createClass(ENMonthNameLittleEndianParser, items);
