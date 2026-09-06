// _runtime/metro/10441__.js
import _mod10431 from "10431__.js";
import repeatedTimeunitPattern from "../10432_repeatedTimeunitPattern.js";
import AbstractParserWithWordBoundaryChecking from "../10439_AbstractParserWithWordBoundaryChecking.js";
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
    repeatedTimeunitPattern.matchAnyPattern(_mod10431.MONTH_DICTIONARY) +
    ")(?:-|/|\\s*,?\\s*)(" +
    _mod10431.ORDINAL_NUMBER_PATTERN +
    ")(?!\\s*(?:am|pm))\\s*(?:(?:to|\\-)\\s*(" +
    _mod10431.ORDINAL_NUMBER_PATTERN +
    ")\\s*)?(?:(?:-|/|\\s*,\\s*|\\s+)(" +
    _mod10431.YEAR_PATTERN +
    "))?(?=\\W|$)(?!\\:\\d)",
  "i",
);
class ENMonthNameMiddleEndianParser {
  constructor(arg0) {
    self = this;
    tmp = c2(this, ENMonthNameMiddleEndianParser);
    tmp2 = closure_4;
    obj = closure_4(ENMonthNameMiddleEndianParser);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.shouldSkipYearLikeDate = global;
    return tmp3Result;
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
      const tmp3 = ENMonthNameMiddleEndianParser(10431).MONTH_DICTIONARY[index[1].toLowerCase(index[1])];
      const result = ENMonthNameMiddleEndianParser(10431).parseOrdinalNumberPattern(index[2]);
      if (result > 31) {
        return null;
      } else {
        const self = this;
        if (this.shouldSkipYearLikeDate) {
          if (!index[3]) {
            if (!index[4]) {
              if (str2.match(/^2[0-5]$/)) {
                return null;
              }
              str2 = index[2];
            }
          }
        }
        const date = { day: result, month: tmp3 };
        const parsingComponents = createParsingComponents.createParsingComponents(date);
        const addTagResult = parsingComponents.addTag("parser/ENMonthNameMiddleEndianParser");
        if (index[4]) {
          addTagResult.assign("year", tmp(10431).parseYear(index[4]));
        } else {
          addTagResult.imply("year", tmp(10433).findYearClosestToRef(createParsingComponents.refDate, result, tmp3));
        }
        if (index[3]) {
          const result1 = tmp(10431).parseOrdinalNumberPattern(index[3]);
          const parsingResult = createParsingComponents.createParsingResult(index.index, index[0]);
          parsingResult.start = addTagResult;
          parsingResult.end = addTagResult.clone();
          const end = parsingResult.end;
          end.assign("day", result1);
          return parsingResult;
        } else {
          return addTagResult;
        }
      }
    },
  },
];

export default _createClass(ENMonthNameMiddleEndianParser, items);
