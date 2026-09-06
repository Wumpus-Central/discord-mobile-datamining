// _runtime/metro/10527__.js
import repeatedTimeunitPattern from "../10432_repeatedTimeunitPattern.js";
import AbstractParserWithWordBoundaryChecking from "../10439_AbstractParserWithWordBoundaryChecking.js";
import _mod10526 from "10526__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

const NLWeekdayParser = require;
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
  "(?:(?:\\,|\\(|\\\uFF08)\\s*)?(?:op\\s*?)?(?:(deze|vorige|volgende)\\s*(?:week\\s*)?)?(" +
    repeatedTimeunitPattern.matchAnyPattern(_mod10526.WEEKDAY_DICTIONARY) +
    ")(?=\\W|$)",
  "i",
);
class NLWeekdayParser {
  constructor() {
    self = this;
    tmp = c2(this, NLWeekdayParser);
    tmp2 = closure_4;
    obj = closure_4(NLWeekdayParser);
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
_inherits(NLWeekdayParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
      const formatted1 = str2.toLowerCase();
      let str3 = "last";
      if ("vorige" != formatted1) {
        str3 = "next";
        if ("volgende" != formatted1) {
          str3 = null;
          if ("deze" == formatted1) {
            str3 = "this";
          }
        }
      }
      return NLWeekdayParser(10459).createParsingComponentsAtWeekday(
        reference.reference,
        NLWeekdayParser(10526).WEEKDAY_DICTIONARY[formatted],
        str3,
      );
    },
  },
];

export default _createClass(NLWeekdayParser, items);
