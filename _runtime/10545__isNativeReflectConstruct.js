// _runtime/10545__isNativeReflectConstruct.js
import repeatedTimeunitPattern from "10450_repeatedTimeunitPattern.js";
import AbstractParserWithWordBoundaryChecking from "10457_AbstractParserWithWordBoundaryChecking.js";
import WEEKDAY_DICTIONARY from "10544_WEEKDAY_DICTIONARY.js";
import closure_2 from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import closure_3 from "metro/00093__possibleConstructorReturn.js";
import closure_4 from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";

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
    repeatedTimeunitPattern.matchAnyPattern(WEEKDAY_DICTIONARY.WEEKDAY_DICTIONARY) +
    ")(?=\\W|$)",
  "i",
);
class NLWeekdayParser {
  constructor() {
    self = this;
    tmp = closure_2(this, NLWeekdayParser);
    tmp2 = closure_4;
    obj = closure_4(NLWeekdayParser);
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
_inherits(NLWeekdayParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const items = [
  {
    key: "innerPattern",
    value: function innerPattern() {
      return regExp;
    },
  },
  {
    key: "innerExtract",
    value: function innerExtract(reference) {
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
      return NLWeekdayParser(10477).createParsingComponentsAtWeekday(
        reference.reference,
        NLWeekdayParser(10544).WEEKDAY_DICTIONARY[formatted],
        str3,
      );
    },
  },
];

export default _createClass(NLWeekdayParser, items);
