// _runtime/metro/10604__.js
import repeatedTimeunitPattern from "../10432_repeatedTimeunitPattern.js";
import AbstractParserWithWordBoundaryChecking from "../10439_AbstractParserWithWordBoundaryChecking.js";
import _mod10601 from "10601__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

const ENMonthNameParser = require;
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
  "((?:in)\\s*)?(" +
    repeatedTimeunitPattern.matchAnyPattern(_mod10601.MONTH_DICTIONARY) +
    ")\\s*(?:[,-]?\\s*(" +
    _mod10601.YEAR_PATTERN +
    ")?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)",
  "i",
);
class ENMonthNameParser {
  constructor() {
    self = this;
    tmp = c2(this, ENMonthNameParser);
    tmp2 = closure_4;
    obj = closure_4(ENMonthNameParser);
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
      const formatted = index[2].toLowerCase();
      if (index[0].length <= 3) {
        if (!ENMonthNameParser(10601).FULL_MONTH_NAME_DICTIONARY[formatted]) {
          return null;
        }
      }
      let str2 = index[1];
      if (!str2) {
        str2 = "";
      }
      const parsingResult = createParsingResult.createParsingResult(
        index.index + str2.length,
        index.index + index[0].length,
      );
      const start = parsingResult.start;
      start.imply("day", 1);
      const tmp9 = ENMonthNameParser(10601).MONTH_DICTIONARY[formatted];
      const start2 = parsingResult.start;
      start2.assign("month", tmp9);
      if (index[3]) {
        const start4 = parsingResult.start;
        start4.assign("year", ENMonthNameParser(10601).parseYear(index[3]));
      } else {
        const start3 = parsingResult.start;
        start3.imply("year", ENMonthNameParser(10433).findYearClosestToRef(createParsingResult.refDate, 1, tmp9));
      }
      return parsingResult;
    },
  },
];

export default _createClass(ENMonthNameParser, items);
