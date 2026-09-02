// _runtime/10618__isNativeReflectConstruct.js
import repeatedTimeunitPattern from "10446_repeatedTimeunitPattern.js";
import AbstractParserWithWordBoundaryChecking from "10453_AbstractParserWithWordBoundaryChecking.js";
import WEEKDAY_DICTIONARY from "10615_WEEKDAY_DICTIONARY.js";
import closure_2 from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import closure_3 from "metro/00093__possibleConstructorReturn.js";
import closure_4 from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";

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
    repeatedTimeunitPattern.matchAnyPattern(WEEKDAY_DICTIONARY.MONTH_DICTIONARY) +
    ")\\s*(?:[,-]?\\s*(" +
    WEEKDAY_DICTIONARY.YEAR_PATTERN +
    ")?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)",
  "i",
);
class ENMonthNameParser {
  constructor() {
    self = this;
    tmp = closure_2(this, ENMonthNameParser);
    tmp2 = closure_4;
    obj = closure_4(ENMonthNameParser);
    tmp3 = closure_3;
    if (_isNativeReflectConstruct()) {
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
const items = [
  {
    key: "innerPattern",
    value: function innerPattern() {
      return regExp;
    },
  },
  {
    key: "innerExtract",
    value: function innerExtract(createParsingResult, index) {
      const formatted = index[2].toLowerCase();
      if (index[0].length <= 3) {
        if (!ENMonthNameParser(10615).FULL_MONTH_NAME_DICTIONARY[formatted]) {
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
      const tmp9 = ENMonthNameParser(10615).MONTH_DICTIONARY[formatted];
      const start2 = parsingResult.start;
      start2.assign("month", tmp9);
      if (index[3]) {
        const start4 = parsingResult.start;
        start4.assign("year", tmp7(10615).parseYear(index[3]));
      } else {
        const start3 = parsingResult.start;
        start3.imply("year", tmp7(10447).findYearClosestToRef(createParsingResult.refDate, 1, tmp9));
      }
      return parsingResult;
    },
  },
];

export default _createClass(ENMonthNameParser, items);
