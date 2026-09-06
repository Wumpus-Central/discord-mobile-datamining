// _runtime/metro/10529__.js
import repeatedTimeunitPattern from "../10432_repeatedTimeunitPattern.js";
import AbstractParserWithWordBoundaryChecking from "../10439_AbstractParserWithWordBoundaryChecking.js";
import _mod10526 from "10526__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

const NLMonthNameParser = require;
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
    repeatedTimeunitPattern.matchAnyPattern(_mod10526.MONTH_DICTIONARY) +
    ")\\s*(?:[,-]?\\s*(" +
    _mod10526.YEAR_PATTERN +
    ")?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)",
  "i",
);
class NLMonthNameParser {
  constructor() {
    self = this;
    tmp = c2(this, NLMonthNameParser);
    tmp2 = closure_4;
    obj = closure_4(NLMonthNameParser);
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
      const tmp4 = NLMonthNameParser(10526).MONTH_DICTIONARY[arg1[1].toLowerCase(arg1[1])];
      parsingComponents.assign("month", tmp4);
      if (arg1[2]) {
        parsingComponents.assign("year", tmp2(10526).parseYear(arg1[2]));
      } else {
        parsingComponents.imply("year", tmp2(10433).findYearClosestToRef(createParsingComponents.refDate, 1, tmp4));
      }
      return parsingComponents;
    },
  },
];

export default _createClass(NLMonthNameParser, items);
