// _runtime/metro/10346__.js
import repeatedTimeunitPattern from "../10174_repeatedTimeunitPattern.js";
import findMostLikelyADYear from "../10175_findMostLikelyADYear.js";
import AbstractParserWithWordBoundaryChecking from "../10181_AbstractParserWithWordBoundaryChecking.js";
import _mod10343 from "10343__.js";
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
const matchAnyPatternResult = repeatedTimeunitPattern.matchAnyPattern(_mod10343.MONTH_DICTIONARY);
const regExp = new RegExp(
  "((?:in)\\s*)?(" +
    matchAnyPatternResult +
    ")\\s*(?:[,-]?\\s*(" +
    _mod10343.YEAR_PATTERN +
    ")?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)",
  "i",
);
class ENMonthNameParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ENMonthNameParser);
    const obj = _getPrototypeOf(ENMonthNameParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(ENMonthNameParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
      const str = index[2];
      const formatted = str.toLowerCase();
      if (index[0].length <= 3) {
        if (!_mod10343.FULL_MONTH_NAME_DICTIONARY[formatted]) {
          return null;
        }
      }
      let str2 = index[1];
      index = index.index;
      if (!str2) {
        str2 = "";
      }
      const parsingResult = createParsingResult.createParsingResult(index + str2.length, index.index + index[0].length);
      const start = parsingResult.start;
      start.imply("day", 1);
      const tmp9 = _mod10343.MONTH_DICTIONARY[formatted];
      const start2 = parsingResult.start;
      start2.assign("month", tmp9);
      if (index[3]) {
        const start4 = parsingResult.start;
        start4.assign("year", _mod10343.parseYear(index[3]));
      } else {
        const start3 = parsingResult.start;
        start3.imply(
          "year",
          findMostLikelyADYear.findYearClosestToRef(createParsingResult.createParsingResult.refDate, 1, tmp9),
        );
      }
      return parsingResult;
    },
  },
];

export default _createClass(ENMonthNameParser, items);
