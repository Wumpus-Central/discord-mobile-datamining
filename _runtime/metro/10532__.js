// _runtime/metro/10532__.js
import repeatedTimeunitPattern from "../10432_repeatedTimeunitPattern.js";
import AbstractParserWithWordBoundaryChecking from "../10439_AbstractParserWithWordBoundaryChecking.js";
import _mod10526 from "10526__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

const NLCasualYearMonthDayParser = require;
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
  "([0-9]{4})[\\.\\/\\s](?:(" +
    repeatedTimeunitPattern.matchAnyPattern(_mod10526.MONTH_DICTIONARY) +
    ")|([0-9]{1,2}))[\\.\\/\\s]([0-9]{1,2})(?=\\W|$)",
  "i",
);
class NLCasualYearMonthDayParser {
  constructor() {
    self = this;
    tmp = c2(this, NLCasualYearMonthDayParser);
    tmp2 = closure_4;
    obj = closure_4(NLCasualYearMonthDayParser);
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
_inherits(NLCasualYearMonthDayParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
    value: function innerExtract(arg0, arg1) {
      if (arg1[3]) {
        const _parseInt = parseInt;
        let parsed = parseInt(arg1[3]);
      } else {
        parsed = NLCasualYearMonthDayParser(10526).MONTH_DICTIONARY[str.toLowerCase(str)];
      }
      if (parsed >= 1) {
        if (parsed <= 12) {
          const _parseInt2 = parseInt;
          const date = { day: null, month: null, year: null };
          const _parseInt3 = parseInt;
          const parsed1 = parseInt(arg1[1]);
          date.day = parseInt(arg1[4]);
          date.month = parsed;
          date.year = parsed1;
          return date;
        }
      }
      return null;
    },
  },
];

export default _createClass(NLCasualYearMonthDayParser, items);
