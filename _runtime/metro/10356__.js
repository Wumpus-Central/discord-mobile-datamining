// === Module 10356: ? ===

// Module 10356
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 10174 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10181 */;
import _mod10201 from "module_10201" /* 10201 */;
import _mod10343 from "module_10343" /* 10343 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
const regExp = new RegExp("(?:(?:\\,|\\(|\\\uFF08)\\s*)?(?:il\\s*?)?(?:(questa|l'ultima|scorsa|prossima)\\s*)?(" + repeatedTimeunitPattern.matchAnyPattern(_mod10343.WEEKDAY_DICTIONARY) + ")(?:\\s*(?:\\,|\\)|\\\uFF09))?(?:\\s*(questa|l'ultima|scorsa|prossima)\\s*settimana)?(?=\\W|$)", "i");
class ITWeekdayParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ITWeekdayParser);
    const obj = _getPrototypeOf(ITWeekdayParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(ITWeekdayParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern() {
    return regExp;
  }
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(reference, arg1) {
      const str = arg1[2];
      const formatted = str.toLowerCase();
      let str2 = arg1[1];
      const tmp4 = _mod10343.WEEKDAY_DICTIONARY[formatted];
      if (!str2) {
        str2 = arg1[3];
      }
      if (!str2) {
        str2 = "";
      }
      const formatted1 = str2.toLowerCase();
      let str3 = "ultima";
      if ("ultima" != formatted1) {
        str3 = "ultima";
        if ("scorsa" != formatted1) {
          str3 = "prossima";
          if ("prossima" != formatted1) {
            str3 = null;
            if ("questa" == formatted1) {
              str3 = "questa";
            }
          }
        }
      }
      return _mod10201.createParsingComponentsAtWeekday(reference.reference, tmp4, str3);
    }
  }
];

export default _createClass(ITWeekdayParser, items);