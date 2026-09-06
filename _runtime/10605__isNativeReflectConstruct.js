// === Module 10605: _isNativeReflectConstruct ===

// Module 10605 (_isNativeReflectConstruct)
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 10432 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10439 */;
import WEEKDAY_DICTIONARY from "WEEKDAY_DICTIONARY" /* 10601 */;
import closure_2 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const ENCasualYearMonthDayParser = require;
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
  } catch (err) {
  }
}
const regExp = new RegExp("([0-9]{4})[\\.\\/\\s](?:(" + repeatedTimeunitPattern.matchAnyPattern(WEEKDAY_DICTIONARY.MONTH_DICTIONARY) + ")|([0-9]{1,2}))[\\.\\/\\s]([0-9]{1,2})(?=\\W|$)", "i");
class ENCasualYearMonthDayParser {
  constructor() {
    self = this;
    tmp = closure_2(this, ENCasualYearMonthDayParser);
    tmp2 = closure_4;
    obj = closure_4(ENCasualYearMonthDayParser);
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
_inherits(ENCasualYearMonthDayParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const items = [
  {
    key: "innerPattern",
    value: function innerPattern() {
      return regExp;
    }
  },
  {
    key: "innerExtract",
    value: function innerExtract(arg0, arg1) {
      if (arg1[3]) {
        const _parseInt = parseInt;
        let parsed = parseInt(arg1[3]);
      } else {
        parsed = ENCasualYearMonthDayParser(10601).MONTH_DICTIONARY[str.toLowerCase(str)];
      }
      if (parsed >= 1) {
        if (parsed <= 12) {
          const _parseInt2 = parseInt;
          const obj = { day: null, month: null, year: null };
          const _parseInt3 = parseInt;
          const parsed1 = parseInt(arg1[1]);
          obj[0] = parseInt(arg1[4]);
          obj[1] = parsed;
          obj[2] = parsed1;
          return obj;
        }
      }
      return null;
    }
  }
];

export default _createClass(ENCasualYearMonthDayParser, items);