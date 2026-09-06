// === Module 10596: ? ===

// Module 10596
import _mod10588 from "module_10588" /* 10588 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const UKWeekdayParser = require;
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
class UKWeekdayParser {
  constructor() {
    self = this;
    tmp = c2(this, UKWeekdayParser);
    tmp2 = closure_4;
    obj = closure_4(UKWeekdayParser);
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
_inherits(UKWeekdayParser, _mod10588.AbstractParserWithLeftRightBoundaryChecking);
const entry = {
  key: "innerPatternString",
  value: function innerPatternString(arg0) {
    return "(?:(?:,|\\(|\uFF08)\\s*)?(?:\u0432\\s*?)?(?:\u0443\\s*?)?(?:(\u0446\u0435\u0439|\u043C\u0438\u043D\u0443\u043B\u043E\u0433\u043E|\u043C\u0438\u043D\u0443\u043B\u0438\u0439|\u043F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u0456\u0439|\u043F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u044C\u043E\u0433\u043E|\u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u0433\u043E|\u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0439|\u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u043C\u0443)\\s*)?(" + UKWeekdayParser(10432).matchAnyPattern(UKWeekdayParser(10586).WEEKDAY_DICTIONARY) + ")(?:\\s*(?:,|\\)|\uFF09))?(?:\\s*(\u043D\u0430|\u0443|\u0432)\\s*(\u0446\u044C\u043E\u043C\u0443|\u043C\u0438\u043D\u0443\u043B\u043E\u043C\u0443|\u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u043C\u0443)\\s*\u0442\u0438\u0436\u043D\u0456)?";
  }
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(reference, arg1) {
      let str = arg1[1];
      if (!str) {
        str = arg1[3];
      }
      if (!str) {
        str = "";
      }
      const toLocaleLowerCaseResult1 = str.toLocaleLowerCase();
      let str2 = "last";
      if ("\u043C\u0438\u043D\u0443\u043B\u043E\u0433\u043E" != toLocaleLowerCaseResult1) {
        str2 = "last";
        if ("\u043C\u0438\u043D\u0443\u043B\u0438\u0439" != toLocaleLowerCaseResult1) {
          str2 = "last";
          if ("\u043F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u0456\u0439" != toLocaleLowerCaseResult1) {
            str2 = "last";
            if ("\u043F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u044C\u043E\u0433\u043E" != toLocaleLowerCaseResult1) {
              str2 = "next";
              if ("\u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u0433\u043E" != toLocaleLowerCaseResult1) {
                str2 = "next";
                if ("\u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0439" != toLocaleLowerCaseResult1) {
                  let tmp5 = "\u0446\u0435\u0439" != toLocaleLowerCaseResult1;
                  if (tmp5) {
                    tmp5 = "\u0446\u044C\u043E\u0433\u043E" != toLocaleLowerCaseResult1;
                  }
                  if (tmp5) {
                    tmp5 = "\u0446\u044C\u043E\u043C\u0443" != toLocaleLowerCaseResult1;
                  }
                  str2 = null;
                  if (!tmp5) {
                    str2 = "this";
                  }
                }
              }
            }
          }
        }
      }
      return UKWeekdayParser(10459).createParsingComponentsAtWeekday(reference.reference, UKWeekdayParser(10586).WEEKDAY_DICTIONARY[arg1[2].toLocaleLowerCase()], str2);
    }
  }
];

export default _createClass(UKWeekdayParser, items);