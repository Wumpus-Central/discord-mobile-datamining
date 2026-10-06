// _runtime/metro/10322__.js
import repeatedTimeunitPattern from "../10174_repeatedTimeunitPattern.js";
import findMostLikelyADYear from "../10175_findMostLikelyADYear.js";
import AbstractParserWithWordBoundaryChecking from "../10181_AbstractParserWithWordBoundaryChecking.js";
import _mod10318 from "10318__.js";
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
const matchAnyPatternResult = repeatedTimeunitPattern.matchAnyPattern(_mod10318.MONTH_DICTIONARY);
const regExp = new RegExp(
  "([0-9]{1,2})(?:\u00BA|\u00AA|\u00B0)?(?:\\s*(?:desde|de|\\-|\\\u2013|ao?|\\s)\\s*([0-9]{1,2})(?:\u00BA|\u00AA|\u00B0)?)?\\s*(?:de)?\\s*(?:-|/|\\s*(?:de|,)?\\s*)(" +
    matchAnyPatternResult +
    ")(?:\\s*(?:de|,)?\\s*(" +
    _mod10318.YEAR_PATTERN +
    "))?(?=\\W|$)",
  "i",
);
class ESMonthNameLittleEndianParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ESMonthNameLittleEndianParser);
    const obj = _getPrototypeOf(ESMonthNameLittleEndianParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(ESMonthNameLittleEndianParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
      const tmp4 = _mod10318.MONTH_DICTIONARY[index[3].toLowerCase(index[3])];
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
          start2.assign("year", _mod10318.parseYear(index[4]));
        } else {
          const start = parsingResult.start;
          start.imply("year", findMostLikelyADYear.findYearClosestToRef(createParsingResult.refDate, parsed, tmp4));
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
    },
  },
];

export default _createClass(ESMonthNameLittleEndianParser, items);
