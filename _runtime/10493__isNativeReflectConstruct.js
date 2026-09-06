// === Module 10493: _isNativeReflectConstruct ===

// Module 10493 (_isNativeReflectConstruct)
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 10432 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10439 */;
import WEEKDAY_DICTIONARY from "WEEKDAY_DICTIONARY" /* 10494 */;
import closure_2 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const FRWeekdayParser = require;
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
const regExp = new RegExp("(?:(?:\\,|\\(|\\\uFF08)\\s*)?(?:(?:ce)\\s*)?(" + repeatedTimeunitPattern.matchAnyPattern(WEEKDAY_DICTIONARY.WEEKDAY_DICTIONARY) + ")(?:\\s*(?:\\,|\\)|\\\uFF09))?(?:\\s*(dernier|prochain)\\s*)?(?=\\W|\\d|$)", "i");
class FRWeekdayParser {
  constructor() {
    self = this;
    tmp = closure_2(this, FRWeekdayParser);
    tmp2 = closure_4;
    obj = closure_4(FRWeekdayParser);
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
_inherits(FRWeekdayParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
      const formatted = arg1[1].toLowerCase();
      const tmp4 = FRWeekdayParser(10494).WEEKDAY_DICTIONARY[formatted];
      if (undefined === tmp4) {
        return null;
      } else {
        const formatted1 = arg1[2] || "".toLowerCase();
        let str4 = "last";
        if ("dernier" != formatted1) {
          str4 = null;
          if ("prochain" == formatted1) {
            str4 = "next";
          }
        }
        return tmp2(10459).createParsingComponentsAtWeekday(reference.reference, tmp4, str4);
      }
      const str = arg1[1];
      tmp2 = FRWeekdayParser;
    }
  }
];

export default _createClass(FRWeekdayParser, items);