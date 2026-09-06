// _runtime/metro/10603__.js
import repeatedTimeunitPattern from "../10432_repeatedTimeunitPattern.js";
import AbstractParserWithWordBoundaryChecking from "../10439_AbstractParserWithWordBoundaryChecking.js";
import _mod10601 from "10601__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

const ENMonthNameMiddleEndianParser = require;
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
  "(" +
    repeatedTimeunitPattern.matchAnyPattern(_mod10601.MONTH_DICTIONARY) +
    ")(?:-|/|\\s*,?\\s*)(" +
    _mod10601.ORDINAL_NUMBER_PATTERN +
    ")(?!\\s*(?:am|pm))\\s*(?:(?:al|\\-|\\alle|\\del|\\s)\\s*(" +
    _mod10601.ORDINAL_NUMBER_PATTERN +
    ")\\s*)?(?:(?:-|/|\\s*,?\\s*)(" +
    _mod10601.YEAR_PATTERN +
    "))?(?=\\W|$)(?!\\:\\d)",
  "i",
);
class ENMonthNameMiddleEndianParser {
  constructor() {
    self = this;
    tmp = c2(this, ENMonthNameMiddleEndianParser);
    tmp2 = closure_4;
    obj = closure_4(ENMonthNameMiddleEndianParser);
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
_inherits(ENMonthNameMiddleEndianParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
    value: function innerExtract(createParsingComponents, index) {
      const tmp3 = ENMonthNameMiddleEndianParser(10601).MONTH_DICTIONARY[index[1].toLowerCase(index[1])];
      const result = ENMonthNameMiddleEndianParser(10601).parseOrdinalNumberPattern(index[2]);
      if (result > 31) {
        return null;
      } else {
        const date = { day: result, month: tmp3 };
        const parsingComponents = createParsingComponents.createParsingComponents(date);
        if (index[4]) {
          parsingComponents.assign("year", ENMonthNameMiddleEndianParser(10601).parseYear(index[4]));
        } else {
          parsingComponents.imply(
            "year",
            ENMonthNameMiddleEndianParser(10433).findYearClosestToRef(createParsingComponents.refDate, result, tmp3),
          );
        }
        if (index[3]) {
          const result1 = ENMonthNameMiddleEndianParser(10601).parseOrdinalNumberPattern(index[3]);
          const parsingResult = createParsingComponents.createParsingResult(index.index, index[0]);
          parsingResult.start = parsingComponents;
          parsingResult.end = parsingComponents.clone();
          const end = parsingResult.end;
          end.assign("day", result1);
          return parsingResult;
        } else {
          return parsingComponents;
        }
      }
    },
  },
];

export default _createClass(ENMonthNameMiddleEndianParser, items);
