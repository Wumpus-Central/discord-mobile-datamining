// _runtime/metro/10313__.js
import repeatedTimeunitPattern from "../10174_repeatedTimeunitPattern.js";
import _mod10201 from "10201__.js";
import REGEX_PARTS from "../10303_REGEX_PARTS.js";
import AbstractParserWithLeftBoundaryChecking from "../10305_AbstractParserWithLeftBoundaryChecking.js";
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
class RUWeekdayParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, RUWeekdayParser);
    const obj = _getPrototypeOf(RUWeekdayParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(RUWeekdayParser, AbstractParserWithLeftBoundaryChecking.AbstractParserWithLeftRightBoundaryChecking);
const entry = {
  key: "innerPatternString",
  value: function innerPatternString(arg0) {
    return (
      "(?:(?:,|\\(|\uFF08)\\s*)?(?:\u0432\\s*?)?(?:(\u044D\u0442\u0443|\u044D\u0442\u043E\u0442|\u043F\u0440\u043E\u0448\u043B\u044B\u0439|\u043F\u0440\u043E\u0448\u043B\u0443\u044E|\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439|\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0443\u044E|\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0433\u043E)\\s*)?(" +
      repeatedTimeunitPattern.matchAnyPattern(REGEX_PARTS.WEEKDAY_DICTIONARY) +
      ")(?:\\s*(?:,|\\)|\uFF09))?(?:\\s*\u043D\u0430\\s*(\u044D\u0442\u043E\u0439|\u043F\u0440\u043E\u0448\u043B\u043E\u0439|\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439)\\s*\u043D\u0435\u0434\u0435\u043B\u0435)?"
    );
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
      const tmp4 = REGEX_PARTS.WEEKDAY_DICTIONARY[formatted];
      if (!str2) {
        str2 = arg1[3];
      }
      if (!str2) {
        str2 = "";
      }
      const formatted1 = str2.toLowerCase();
      let str3 = "last";
      if ("\u043F\u0440\u043E\u0448\u043B\u044B\u0439" != formatted1) {
        str3 = "last";
        if ("\u043F\u0440\u043E\u0448\u043B\u0443\u044E" != formatted1) {
          str3 = "last";
          if ("\u043F\u0440\u043E\u0448\u043B\u043E\u0439" != formatted1) {
            str3 = "next";
            if ("\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439" != formatted1) {
              str3 = "next";
              if ("\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0443\u044E" != formatted1) {
                str3 = "next";
                if ("\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439" != formatted1) {
                  str3 = "next";
                  if ("\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0433\u043E" != formatted1) {
                    str3 = null;
                    const tmp6 =
                      "\u044D\u0442\u043E\u0442" != formatted1 &&
                      "\u044D\u0442\u0443" != formatted1 &&
                      "\u044D\u0442\u043E\u0439" != formatted1;
                    if (!tmp6) {
                      str3 = "this";
                    }
                  }
                }
              }
            }
          }
        }
      }
      return _mod10201.createParsingComponentsAtWeekday(reference.reference, tmp4, str3);
    },
  },
];

export default _createClass(RUWeekdayParser, items);
