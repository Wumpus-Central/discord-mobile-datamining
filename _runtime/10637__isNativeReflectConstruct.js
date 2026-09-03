// _runtime/10637__isNativeReflectConstruct.js
import repeatedTimeunitPattern from "10450_repeatedTimeunitPattern.js";
import AbstractParserWithWordBoundaryChecking from "10457_AbstractParserWithWordBoundaryChecking.js";
import WEEKDAY_DICTIONARY from "10638_WEEKDAY_DICTIONARY.js";
import closure_2 from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import closure_3 from "metro/00093__possibleConstructorReturn.js";
import closure_4 from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";

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
    repeatedTimeunitPattern.matchAnyPattern(WEEKDAY_DICTIONARY.WEEKDAY_DICTIONARY) +
    ")(?:\\s*(?:\\,|\\)|\\\uFF09))?(?:\\s*(f\u00F6rra|senaste|n\u00E4sta|kommande)\\s*vecka)?(?=\\W|$)",
  "i",
);
class SVWeekdayParser {
  constructor() {
    self = this;
    tmp = closure_2(this, SVWeekdayParser);
    tmp2 = closure_4;
    obj = closure_4(SVWeekdayParser);
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
_inherits(SVWeekdayParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
      const str3 = str2.toLowerCase();
      let str4 = "last";
      if (!str3.match(/förra|senaste/)) {
        str4 = null;
        if (str3.match(/nästa|kommande/)) {
          str4 = "next";
        }
      }
      return SVWeekdayParser(10477).createParsingComponentsAtWeekday(
        reference.reference,
        SVWeekdayParser(10638).WEEKDAY_DICTIONARY[formatted],
        str4,
      );
    },
  },
];

export default _createClass(SVWeekdayParser, items);
