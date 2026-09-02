// === Module 10610: _isNativeReflectConstruct ===

// Module 10610 (_isNativeReflectConstruct)
import _isNativeReflectConstruct2 from "_isNativeReflectConstruct" /* 10602 */;
import closure_2 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
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
    tmp = closure_2(this, UKWeekdayParser);
    tmp2 = closure_4;
    obj = closure_4(UKWeekdayParser);
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
_inherits(UKWeekdayParser, _isNativeReflectConstruct2.AbstractParserWithLeftRightBoundaryChecking);
const items = [
  {
    key: "innerPatternString",
    value: function innerPatternString(arg0) {
      return "(?:(?:,|\\(|\uFF08)\\s*)?(?:\u0432\\s*?)?(?:\u0443\\s*?)?(?:(\u0446\u0435\u0439|\u043C\u0438\u043D\u0443\u043B\u043E\u0433\u043E|\u043C\u0438\u043D\u0443\u043B\u0438\u0439|\u043F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u0456\u0439|\u043F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u044C\u043E\u0433\u043E|\u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u0433\u043E|\u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0439|\u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u043C\u0443)\\s*)?(" + UKWeekdayParser(10446).matchAnyPattern(UKWeekdayParser(10600).WEEKDAY_DICTIONARY) + ")(?:\\s*(?:,|\\)|\uFF09))?(?:\\s*(\u043D\u0430|\u0443|\u0432)\\s*(\u0446\u044C\u043E\u043C\u0443|\u043C\u0438\u043D\u0443\u043B\u043E\u043C\u0443|\u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u043C\u0443)\\s*\u0442\u0438\u0436\u043D\u0456)?";
    }
  },
  {
    key: "innerExtract",
    value: function innerExtract(reference) {
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
      return UKWeekdayParser(10473).createParsingComponentsAtWeekday(reference.reference, UKWeekdayParser(10600).WEEKDAY_DICTIONARY[arg1[2].toLocaleLowerCase()], str2);
    }
  }
];

export default _createClass(UKWeekdayParser, items);