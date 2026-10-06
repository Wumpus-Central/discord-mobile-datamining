// _runtime/metro/10306__.js
import repeatedTimeunitPattern from "../10174_repeatedTimeunitPattern.js";
import findMostLikelyADYear from "../10175_findMostLikelyADYear.js";
import REGEX_PARTS from "../10303_REGEX_PARTS.js";
import AbstractParserWithLeftBoundaryChecking from "../10305_AbstractParserWithLeftBoundaryChecking.js";
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
class RUMonthNameParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, RUMonthNameParser);
    const obj = _getPrototypeOf(RUMonthNameParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(RUMonthNameParser, AbstractParserWithLeftBoundaryChecking.AbstractParserWithLeftBoundaryChecking);
const entry = {
  key: "innerPatternString",
  value: function innerPatternString(arg0) {
    const matchAnyPatternResult = repeatedTimeunitPattern.matchAnyPattern(REGEX_PARTS.MONTH_DICTIONARY);
    return (
      "((?:\u0432)\\s*)?(" +
      matchAnyPatternResult +
      ")\\s*(?:[,-]?\\s*(" +
      REGEX_PARTS.YEAR_PATTERN +
      ")?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)"
    );
  },
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(createParsingResult, index) {
      const str = index[2];
      const formatted = str.toLowerCase();
      if (index[0].length <= 3) {
        if (!REGEX_PARTS.FULL_MONTH_NAME_DICTIONARY[formatted]) {
          return null;
        }
      }
      const parsingResult = createParsingResult.createParsingResult(index.index, index.index + index[0].length);
      const start = parsingResult.start;
      start.imply("day", 1);
      const tmp9 = REGEX_PARTS.MONTH_DICTIONARY[formatted];
      const start2 = parsingResult.start;
      start2.assign("month", tmp9);
      if (index[3]) {
        const start4 = parsingResult.start;
        start4.assign("year", REGEX_PARTS.parseYear(index[3]));
      } else {
        const start3 = parsingResult.start;
        start3.imply("year", findMostLikelyADYear.findYearClosestToRef(createParsingResult.refDate, 1, tmp9));
      }
      return parsingResult;
    },
  },
];

export default _createClass(RUMonthNameParser, items);
