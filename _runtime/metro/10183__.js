// _runtime/metro/10183__.js
import _mod10173 from "10173__.js";
import repeatedTimeunitPattern from "../10174_repeatedTimeunitPattern.js";
import findMostLikelyADYear from "../10175_findMostLikelyADYear.js";
import AbstractParserWithWordBoundaryChecking from "../10181_AbstractParserWithWordBoundaryChecking.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {}));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
const matchAnyPatternResult = repeatedTimeunitPattern.matchAnyPattern(_mod10173.MONTH_DICTIONARY);
const ORDINAL_NUMBER_PATTERN = _mod10173.ORDINAL_NUMBER_PATTERN;
const regExp = new RegExp(
  "(" +
    matchAnyPatternResult +
    ")(?:-|/|\\s*,?\\s*)(" +
    ORDINAL_NUMBER_PATTERN +
    ")(?!\\s*(?:am|pm))\\s*(?:(?:to|\\-)\\s*(" +
    _mod10173.ORDINAL_NUMBER_PATTERN +
    ")\\s*)?(?:(?:-|/|\\s*,\\s*|\\s+)(" +
    _mod10173.YEAR_PATTERN +
    "))?(?=\\W|$)(?!\\:\\d)",
  "i",
);
class ENMonthNameMiddleEndianParser {
  constructor(shouldSkipYearLikeDate) {
    let constructResult;
    const self = this;
    _classCallCheck(this, ENMonthNameMiddleEndianParser);
    const obj = _getPrototypeOf(ENMonthNameMiddleEndianParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    const tmp3Result = c3(self, constructResult);
    tmp3Result.shouldSkipYearLikeDate = shouldSkipYearLikeDate;
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
      const tmp3 = _mod10173.MONTH_DICTIONARY[index[1].toLowerCase(index[1])];
      const result = _mod10173.parseOrdinalNumberPattern(index[2]);
      if (result > 31) {
        return null;
      } else {
        const self = this;
        if (this.shouldSkipYearLikeDate) {
          if (!index[3]) {
            if (!index[4]) {
              const str2 = index[2];
              if (str2.match(/^2[0-5]$/)) {
                return null;
              }
            }
          }
        }
        const date = { day: result, month: tmp3 };
        const parsingComponents = createParsingComponents.createParsingComponents(date);
        const addTagResult = parsingComponents.addTag("parser/ENMonthNameMiddleEndianParser");
        if (index[4]) {
          addTagResult.assign("year", _mod10173.parseYear(index[4]));
        } else {
          addTagResult.imply(
            "year",
            findMostLikelyADYear.findYearClosestToRef(createParsingComponents.refDate, result, tmp3),
          );
        }
        if (index[3]) {
          const result1 = _mod10173.parseOrdinalNumberPattern(index[3]);
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
