// _runtime/metro/10361__.js
import repeatedTimeunitPattern from "../10174_repeatedTimeunitPattern.js";
import AbstractParserWithWordBoundaryChecking from "../10181_AbstractParserWithWordBoundaryChecking.js";
import _mod10201 from "10201__.js";
import _mod10362 from "10362__.js";
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
  "(?:(?:\\,|\\(|\\\uFF08)\\s*)?(?:p\u00E5\\s*?)?(?:(f\u00F6rra|senaste|n\u00E4sta|kommande)\\s*)?(" +
    repeatedTimeunitPattern.matchAnyPattern(_mod10362.WEEKDAY_DICTIONARY) +
    ")(?:\\s*(?:\\,|\\)|\\\uFF09))?(?:\\s*(f\u00F6rra|senaste|n\u00E4sta|kommande)\\s*vecka)?(?=\\W|$)",
  "i",
);
class SVWeekdayParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, SVWeekdayParser);
    const obj = _getPrototypeOf(SVWeekdayParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(SVWeekdayParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
      const str = arg1[2];
      const formatted = str.toLowerCase();
      let str2 = arg1[1];
      const tmp4 = _mod10362.WEEKDAY_DICTIONARY[formatted];
      if (!str2) {
        str2 = arg1[3];
      }
      if (!str2) {
        str2 = "";
      }
      const str3 = str2.toLowerCase();
      let str4 = "last";
      if (!str3.match(/förra|senaste/)) {
        str4 = null;
        if (str3.match(/nästa|kommande/)) {
          str4 = "next";
        }
      }
      return _mod10201.createParsingComponentsAtWeekday(reference.reference, tmp4, str4);
    },
  },
];

export default _createClass(SVWeekdayParser, items);
