// _runtime/10578__isNativeReflectConstruct.js
import _isNativeReflectConstruct2 from "10577__isNativeReflectConstruct.js";
import closure_2 from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import closure_3 from "metro/00093__possibleConstructorReturn.js";
import closure_4 from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";

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
    tmp = closure_2(this, RUMonthNameParser);
    tmp2 = closure_4;
    obj = closure_4(RUMonthNameParser);
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
_inherits(RUMonthNameParser, _isNativeReflectConstruct2.AbstractParserWithLeftBoundaryChecking);
const items = [
  {
    key: "innerPatternString",
    value: function innerPatternString(arg0) {
      return (
        "((?:\u0432)\\s*)?(" +
        RUMonthNameParser(10446).matchAnyPattern(RUMonthNameParser(10575).MONTH_DICTIONARY) +
        ")\\s*(?:[,-]?\\s*(" +
        RUMonthNameParser(10575).YEAR_PATTERN +
        ")?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)"
      );
    },
  },
  {
    key: "innerExtract",
    value: function innerExtract(createParsingResult, index) {
      const formatted = index[2].toLowerCase();
      if (index[0].length <= 3) {
        if (!RUMonthNameParser(10575).FULL_MONTH_NAME_DICTIONARY[formatted]) {
          return null;
        }
      }
      const parsingResult = createParsingResult.createParsingResult(index.index, index.index + index[0].length);
      const start = parsingResult.start;
      start.imply("day", 1);
      const tmp9 = RUMonthNameParser(10575).MONTH_DICTIONARY[formatted];
      const start2 = parsingResult.start;
      start2.assign("month", tmp9);
      if (index[3]) {
        const start4 = parsingResult.start;
        start4.assign("year", tmp7(10575).parseYear(index[3]));
      } else {
        const start3 = parsingResult.start;
        start3.imply("year", tmp7(10447).findYearClosestToRef(createParsingResult.refDate, 1, tmp9));
      }
      return parsingResult;
    },
  },
];

export default _createClass(RUMonthNameParser, items);
