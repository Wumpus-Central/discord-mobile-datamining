// _runtime/metro/10291__.js
import repeatedTimeunitPattern from "../10161_repeatedTimeunitPattern.js";
import findMostLikelyADYear from "../10162_findMostLikelyADYear.js";
import REGEX_PARTS from "../10290_REGEX_PARTS.js";
import AbstractParserWithLeftBoundaryChecking from "../10292_AbstractParserWithLeftBoundaryChecking.js";
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
class RUMonthNameLittleEndianParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, RUMonthNameLittleEndianParser);
    const obj = _getPrototypeOf(RUMonthNameLittleEndianParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(
  RUMonthNameLittleEndianParser,
  AbstractParserWithLeftBoundaryChecking.AbstractParserWithLeftRightBoundaryChecking,
);
const entry = {
  key: "innerPatternString",
  value: function innerPatternString(arg0) {
    const ORDINAL_NUMBER_PATTERN = REGEX_PARTS.ORDINAL_NUMBER_PATTERN;
    const ORDINAL_NUMBER_PATTERN2 = REGEX_PARTS.ORDINAL_NUMBER_PATTERN;
    const matchAnyPatternResult = repeatedTimeunitPattern.matchAnyPattern(REGEX_PARTS.MONTH_DICTIONARY);
    return (
      "(?:\u0441)?\\s*(" +
      ORDINAL_NUMBER_PATTERN +
      ")(?:\\s{0,3}(?:\u043F\u043E|-|\u2013|\u0434\u043E)?\\s{0,3}(" +
      ORDINAL_NUMBER_PATTERN2 +
      "))?(?:-|\\/|\\s{0,3}(?:of)?\\s{0,3})(" +
      matchAnyPatternResult +
      ")(?:(?:-|\\/|,?\\s{0,3})(" +
      REGEX_PARTS.YEAR_PATTERN +
      "(?![^\\s]\\d)))?"
    );
  },
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(createParsingResult, index) {
      const parsingResult = createParsingResult.createParsingResult(index.index, index[0]);
      const tmp4 = REGEX_PARTS.MONTH_DICTIONARY[index[3].toLowerCase(index[3])];
      const result = REGEX_PARTS.parseOrdinalNumberPattern(index[1]);
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
          start2.assign("year", REGEX_PARTS.parseYear(index[4]));
        } else {
          const start = parsingResult.start;
          start.imply("year", findMostLikelyADYear.findYearClosestToRef(createParsingResult.refDate, result, tmp4));
        }
        if (index[2]) {
          const start3 = parsingResult.start;
          const result1 = REGEX_PARTS.parseOrdinalNumberPattern(index[2]);
          parsingResult.end = start3.clone();
          const end = parsingResult.end;
          end.assign("day", result1);
        }
        return parsingResult;
      }
    },
  },
];

export default _createClass(RUMonthNameLittleEndianParser, items);
