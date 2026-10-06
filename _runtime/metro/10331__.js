// _runtime/metro/10331__.js
import repeatedTimeunitPattern from "../10174_repeatedTimeunitPattern.js";
import findMostLikelyADYear from "../10175_findMostLikelyADYear.js";
import _mod10328 from "10328__.js";
import _mod10330 from "10330__.js";
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
class UkMonthNameParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, UkMonthNameParser);
    const obj = _getPrototypeOf(UkMonthNameParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(UkMonthNameParser, _mod10330.AbstractParserWithLeftBoundaryChecking);
const entry = {
  key: "innerPatternString",
  value: function innerPatternString(arg0) {
    const matchAnyPatternResult = repeatedTimeunitPattern.matchAnyPattern(_mod10328.MONTH_DICTIONARY);
    return (
      "((?:\u0432|\u0443)\\s*)?(" +
      matchAnyPatternResult +
      ")\\s*(?:[,-]?\\s*(" +
      _mod10328.YEAR_PATTERN +
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
        if (!_mod10328.FULL_MONTH_NAME_DICTIONARY[formatted]) {
          return null;
        }
      }
      const parsingResult = createParsingResult.createParsingResult(index.index, index.index + index[0].length);
      const start = parsingResult.start;
      start.imply("day", 1);
      const tmp9 = _mod10328.MONTH_DICTIONARY[formatted];
      const start2 = parsingResult.start;
      start2.assign("month", tmp9);
      if (index[3]) {
        const start4 = parsingResult.start;
        start4.assign("year", _mod10328.parseYearPattern(index[3]));
      } else {
        const start3 = parsingResult.start;
        start3.imply("year", findMostLikelyADYear.findYearClosestToRef(createParsingResult.reference.instant, 1, tmp9));
      }
      return parsingResult;
    },
  },
];

export default _createClass(UkMonthNameParser, items);
