// _runtime/metro/10619__.js
import repeatedTimeunitPattern from "../10432_repeatedTimeunitPattern.js";
import AbstractParserWithWordBoundaryChecking from "../10439_AbstractParserWithWordBoundaryChecking.js";
import _mod10620 from "10620__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

const SVWeekdayParser = require;
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
  "(?:(?:\\,|\\(|\\\uFF08)\\s*)?(?:p\u00E5\\s*?)?(?:(f\u00F6rra|senaste|n\u00E4sta|kommande)\\s*)?(" +
    repeatedTimeunitPattern.matchAnyPattern(_mod10620.WEEKDAY_DICTIONARY) +
    ")(?:\\s*(?:\\,|\\)|\\\uFF09))?(?:\\s*(f\u00F6rra|senaste|n\u00E4sta|kommande)\\s*vecka)?(?=\\W|$)",
  "i",
);
class SVWeekdayParser {
  constructor() {
    self = this;
    tmp = c2(this, SVWeekdayParser);
    tmp2 = closure_4;
    obj = closure_4(SVWeekdayParser);
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
      const formatted = arg1[2].toLowerCase();
      let str2 = arg1[1];
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
      return SVWeekdayParser(10459).createParsingComponentsAtWeekday(
        reference.reference,
        SVWeekdayParser(10620).WEEKDAY_DICTIONARY[formatted],
        str4,
      );
    },
  },
];

export default _createClass(SVWeekdayParser, items);
