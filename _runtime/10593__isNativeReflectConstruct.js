// === Module 10593: _isNativeReflectConstruct ===

// Module 10593 (_isNativeReflectConstruct)
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 10450 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10457 */;
import WEEKDAY_DICTIONARY from "WEEKDAY_DICTIONARY" /* 10594 */;
import closure_2 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const ESWeekdayParser = require;
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
const regExp = new RegExp("(?:(?:\\,|\\(|\\\uFF08)\\s*)?(?:(este|esta|pasado|pr[o\u00F3]ximo)\\s*)?(" + repeatedTimeunitPattern.matchAnyPattern(WEEKDAY_DICTIONARY.WEEKDAY_DICTIONARY) + ")(?:\\s*(?:\\,|\\)|\\\uFF09))?(?:\\s*(este|esta|pasado|pr[\u00F3o]ximo)\\s*semana)?(?=\\W|\\d|$)", "i");
class ESWeekdayParser {
  constructor() {
    self = this;
    tmp = closure_2(this, ESWeekdayParser);
    tmp2 = closure_4;
    obj = closure_4(ESWeekdayParser);
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
_inherits(ESWeekdayParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
      const tmp4 = ESWeekdayParser(10594).WEEKDAY_DICTIONARY[formatted];
      if (undefined === tmp4) {
        return null;
      } else {
        const formatted1 = arg1[1] || arg1[3] || "".toLowerCase();
        let str5 = "this";
        if ("pasado" != formatted1) {
          str5 = "next";
          if ("pr\u00F3ximo" != formatted1) {
            str5 = "next";
            if ("proximo" != formatted1) {
              str5 = null;
              if ("este" == formatted1) {
                str5 = "this";
              }
            }
          }
        }
        return tmp2(10477).createParsingComponentsAtWeekday(reference.reference, tmp4, str5);
      }
      const str = arg1[2];
      tmp2 = ESWeekdayParser;
    }
  }
];

export default _createClass(ESWeekdayParser, items);