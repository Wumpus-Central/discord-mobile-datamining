// === Module 10619: _isNativeReflectConstruct ===

// Module 10619 (_isNativeReflectConstruct)
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 10432 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10439 */;
import WEEKDAY_DICTIONARY from "WEEKDAY_DICTIONARY" /* 10620 */;
import closure_2 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

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
  } catch (err) {
  }
}
const regExp = new RegExp("(?:(?:\\,|\\(|\\\uFF08)\\s*)?(?:p\u00E5\\s*?)?(?:(f\u00F6rra|senaste|n\u00E4sta|kommande)\\s*)?(" + repeatedTimeunitPattern.matchAnyPattern(WEEKDAY_DICTIONARY.WEEKDAY_DICTIONARY) + ")(?:\\s*(?:\\,|\\)|\\\uFF09))?(?:\\s*(f\u00F6rra|senaste|n\u00E4sta|kommande)\\s*vecka)?(?=\\W|$)", "i");
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
    }
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
      return SVWeekdayParser(10459).createParsingComponentsAtWeekday(reference.reference, SVWeekdayParser(10620).WEEKDAY_DICTIONARY[formatted], str4);
    }
  }
];

export default _createClass(SVWeekdayParser, items);