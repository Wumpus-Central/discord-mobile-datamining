// _runtime/metro/10258__.js
import repeatedTimeunitPattern from "../10161_repeatedTimeunitPattern.js";
import findMostLikelyADYear from "../10162_findMostLikelyADYear.js";
import AbstractParserWithWordBoundaryChecking from "../10168_AbstractParserWithWordBoundaryChecking.js";
import _mod10255 from "10255__.js";
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
const matchAnyPatternResult = repeatedTimeunitPattern.matchAnyPattern(_mod10255.MONTH_DICTIONARY);
const regExp = new RegExp(
  "(" + matchAnyPatternResult + ")\\s*(?:[,-]?\\s*(" + _mod10255.YEAR_PATTERN + ")?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)",
  "i",
);
class NLMonthNameParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, NLMonthNameParser);
    const obj = _getPrototypeOf(NLMonthNameParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(NLMonthNameParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
    value: function innerExtract(createParsingComponents, arg1) {
      const parsingComponents = createParsingComponents.createParsingComponents();
      parsingComponents.imply("day", 1);
      const tmp4 = _mod10255.MONTH_DICTIONARY[arg1[1].toLowerCase(arg1[1])];
      parsingComponents.assign("month", tmp4);
      if (arg1[2]) {
        parsingComponents.assign("year", _mod10255.parseYear(arg1[2]));
      } else {
        parsingComponents.imply(
          "year",
          findMostLikelyADYear.findYearClosestToRef(createParsingComponents.refDate, 1, tmp4),
        );
      }
      return parsingComponents;
    },
  },
];

export default _createClass(NLMonthNameParser, items);
