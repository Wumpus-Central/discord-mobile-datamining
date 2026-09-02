// _runtime/10455__isNativeReflectConstruct.js
import WEEKDAY_DICTIONARY from "10445_WEEKDAY_DICTIONARY.js";
import repeatedTimeunitPattern from "10446_repeatedTimeunitPattern.js";
import AbstractParserWithWordBoundaryChecking from "10453_AbstractParserWithWordBoundaryChecking.js";
import closure_2 from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import closure_3 from "metro/00093__possibleConstructorReturn.js";
import closure_4 from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";

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
    repeatedTimeunitPattern.matchAnyPattern(WEEKDAY_DICTIONARY.MONTH_DICTIONARY) +
    ")(?:-|/|\\s*,?\\s*)(" +
    WEEKDAY_DICTIONARY.ORDINAL_NUMBER_PATTERN +
    ")(?!\\s*(?:am|pm))\\s*(?:(?:to|\\-)\\s*(" +
    WEEKDAY_DICTIONARY.ORDINAL_NUMBER_PATTERN +
    ")\\s*)?(?:(?:-|/|\\s*,\\s*|\\s+)(" +
    WEEKDAY_DICTIONARY.YEAR_PATTERN +
    "))?(?=\\W|$)(?!\\:\\d)",
  "i",
);
class ENMonthNameMiddleEndianParser {
  constructor(arg0) {
    self = this;
    tmp = closure_2(this, ENMonthNameMiddleEndianParser);
    tmp2 = closure_4;
    obj = closure_4(ENMonthNameMiddleEndianParser);
    tmp3 = closure_3;
    if (_isNativeReflectConstruct()) {
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
const items = [
  {
    key: "innerPattern",
    value: function innerPattern() {
      return regExp;
    },
  },
  {
    key: "innerExtract",
    value: function innerExtract(createParsingComponents, index) {
      const tmp3 = ENMonthNameMiddleEndianParser(10445).MONTH_DICTIONARY[index[1].toLowerCase(index[1])];
      const result = ENMonthNameMiddleEndianParser(10445).parseOrdinalNumberPattern(index[2]);
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
        let obj = { day: null, month: null };
        obj[0] = result;
        obj[1] = tmp3;
        const parsingComponents = createParsingComponents.createParsingComponents(obj);
        const addTagResult = parsingComponents.addTag("parser/ENMonthNameMiddleEndianParser");
        if (index[4]) {
          obj = addTagResult.assign("year", tmp(10445).parseYear(index[4]));
        } else {
          addTagResult.imply("year", tmp(10447).findYearClosestToRef(createParsingComponents.refDate, result, tmp3));
        }
        if (index[3]) {
          const result1 = tmp(10445).parseOrdinalNumberPattern(index[3]);
          const parsingResult = createParsingComponents.createParsingResult(index.index, index[0]);
          parsingResult.start = addTagResult;
          parsingResult.end = addTagResult.clone();
          const end = parsingResult.end;
          obj = end.assign("day", result1);
          return parsingResult;
        } else {
          return addTagResult;
        }
      }
    },
  },
];

export default _createClass(ENMonthNameMiddleEndianParser, items);
