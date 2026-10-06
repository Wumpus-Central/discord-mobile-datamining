// _runtime/metro/10235__.js
import repeatedTimeunitPattern from "../10174_repeatedTimeunitPattern.js";
import AbstractParserWithWordBoundaryChecking from "../10181_AbstractParserWithWordBoundaryChecking.js";
import _mod10201 from "10201__.js";
import _mod10236 from "10236__.js";
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
  "(?:(?:\\,|\\(|\\\uFF08)\\s*)?(?:(?:ce)\\s*)?(" +
    repeatedTimeunitPattern.matchAnyPattern(_mod10236.WEEKDAY_DICTIONARY) +
    ")(?:\\s*(?:\\,|\\)|\\\uFF09))?(?:\\s*(dernier|prochain)\\s*)?(?=\\W|\\d|$)",
  "i",
);
class FRWeekdayParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, FRWeekdayParser);
    const obj = _getPrototypeOf(FRWeekdayParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(FRWeekdayParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
    value: function innerExtract(reference, arg1) {
      const str = arg1[1];
      const formatted = str.toLowerCase();
      const tmp4 = _mod10236.WEEKDAY_DICTIONARY[formatted];
      if (undefined === tmp4) {
        return null;
      } else {
        const str2 = arg1[2] || "";
        const formatted1 = str2.toLowerCase();
        let str4 = "last";
        if ("dernier" != formatted1) {
          str4 = null;
          if ("prochain" == formatted1) {
            str4 = "next";
          }
        }
        return _mod10201.createParsingComponentsAtWeekday(reference.reference, tmp4, str4);
      }
    },
  },
];

export default _createClass(FRWeekdayParser, items);
