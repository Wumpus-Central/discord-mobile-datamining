// _runtime/metro/10347__.js
import repeatedTimeunitPattern from "../10174_repeatedTimeunitPattern.js";
import AbstractParserWithWordBoundaryChecking from "../10181_AbstractParserWithWordBoundaryChecking.js";
import _mod10343 from "10343__.js";
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
const regExp = new RegExp(
  "([0-9]{4})[\\.\\/\\s](?:(" +
    repeatedTimeunitPattern.matchAnyPattern(_mod10343.MONTH_DICTIONARY) +
    ")|([0-9]{1,2}))[\\.\\/\\s]([0-9]{1,2})(?=\\W|$)",
  "i",
);
class ENCasualYearMonthDayParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ENCasualYearMonthDayParser);
    const obj = _getPrototypeOf(ENCasualYearMonthDayParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(ENCasualYearMonthDayParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
      let parsed;
      let parsed1;
      if (arg1[3]) {
        const _parseInt = parseInt;
        parsed = parseInt(arg1[3]);
      } else {
        parsed = _mod10343.MONTH_DICTIONARY[str.toLowerCase(str)];
      }
      if (parsed >= 1) {
        if (parsed <= 12) {
          const _parseInt2 = parseInt;
          const _parseInt3 = parseInt;
          const date = { day: parseInt(arg1[4]), month: parsed, year: parsed1 };
          parsed1 = parseInt(arg1[1]);
          return date;
        }
      }
      return null;
    },
  },
];

export default _createClass(ENCasualYearMonthDayParser, items);
