// _runtime/metro/10564__.js
import _mod10563 from "10563__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

const RUMonthNameParser = require;
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
class RUMonthNameParser {
  constructor() {
    self = this;
    tmp = c2(this, RUMonthNameParser);
    tmp2 = closure_4;
    obj = closure_4(RUMonthNameParser);
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
_inherits(RUMonthNameParser, _mod10563.AbstractParserWithLeftBoundaryChecking);
const entry = {
  key: "innerPatternString",
  value: function innerPatternString(arg0) {
    return (
      "((?:\u0432)\\s*)?(" +
      RUMonthNameParser(10432).matchAnyPattern(RUMonthNameParser(10561).MONTH_DICTIONARY) +
      ")\\s*(?:[,-]?\\s*(" +
      RUMonthNameParser(10561).YEAR_PATTERN +
      ")?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)"
    );
  },
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(createParsingResult, index) {
      const formatted = index[2].toLowerCase();
      if (index[0].length <= 3) {
        if (!RUMonthNameParser(10561).FULL_MONTH_NAME_DICTIONARY[formatted]) {
          return null;
        }
      }
      const parsingResult = createParsingResult.createParsingResult(index.index, index.index + index[0].length);
      const start = parsingResult.start;
      start.imply("day", 1);
      const tmp9 = RUMonthNameParser(10561).MONTH_DICTIONARY[formatted];
      const start2 = parsingResult.start;
      start2.assign("month", tmp9);
      if (index[3]) {
        const start4 = parsingResult.start;
        start4.assign("year", tmp7(10561).parseYear(index[3]));
      } else {
        const start3 = parsingResult.start;
        start3.imply("year", tmp7(10433).findYearClosestToRef(createParsingResult.refDate, 1, tmp9));
      }
      return parsingResult;
    },
  },
];

export default _createClass(RUMonthNameParser, items);
