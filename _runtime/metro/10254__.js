// === Module 10254: ? ===

// Module 10254
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 10174 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10181 */;
import _mod10201 from "module_10201" /* 10201 */;
import _mod10255 from "module_10255" /* 10255 */;
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
const regExp = new RegExp("(?:(?:\\,|\\(|\\\uFF08)\\s*)?(?:(este|esta|passado|pr[o\u00F3]ximo)\\s*)?(" + repeatedTimeunitPattern.matchAnyPattern(_mod10255.WEEKDAY_DICTIONARY) + ")(?:\\s*(?:\\,|\\)|\\\uFF09))?(?:\\s*(este|esta|passado|pr[\u00F3o]ximo)\\s*semana)?(?=\\W|\\d|$)", "i");
class PTWeekdayParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, PTWeekdayParser);
    const obj = _getPrototypeOf(PTWeekdayParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(PTWeekdayParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
      const tmp4 = _mod10255.WEEKDAY_DICTIONARY[formatted];
      if (undefined === tmp4) {
        return null;
      } else {
        const str2 = arg1[1] || arg1[3] || "";
        const formatted1 = str2.toLowerCase();
        let str5 = "this";
        if ("passado" != formatted1) {
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
        return _mod10201.createParsingComponentsAtWeekday(reference.reference, tmp4, str5);
      }
    }
  }
];

export default _createClass(PTWeekdayParser, items);