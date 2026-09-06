// === Module 10571: ? ===

// Module 10571
import _mod10563 from "module_10563" /* 10563 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const RUWeekdayParser = require;
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
class RUWeekdayParser {
  constructor() {
    self = this;
    tmp = c2(this, RUWeekdayParser);
    tmp2 = closure_4;
    obj = closure_4(RUWeekdayParser);
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
_inherits(RUWeekdayParser, _mod10563.AbstractParserWithLeftRightBoundaryChecking);
const entry = {
  key: "innerPatternString",
  value: function innerPatternString(arg0) {
    return "(?:(?:,|\\(|\uFF08)\\s*)?(?:\u0432\\s*?)?(?:(\u044D\u0442\u0443|\u044D\u0442\u043E\u0442|\u043F\u0440\u043E\u0448\u043B\u044B\u0439|\u043F\u0440\u043E\u0448\u043B\u0443\u044E|\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439|\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0443\u044E|\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0433\u043E)\\s*)?(" + RUWeekdayParser(10432).matchAnyPattern(RUWeekdayParser(10561).WEEKDAY_DICTIONARY) + ")(?:\\s*(?:,|\\)|\uFF09))?(?:\\s*\u043D\u0430\\s*(\u044D\u0442\u043E\u0439|\u043F\u0440\u043E\u0448\u043B\u043E\u0439|\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439)\\s*\u043D\u0435\u0434\u0435\u043B\u0435)?";
  }
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(reference, arg1) {
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
                    let tmp5 = "\u044D\u0442\u043E\u0442" != formatted1;
                    if (tmp5) {
                      tmp5 = "\u044D\u0442\u0443" != formatted1;
                    }
                    if (tmp5) {
                      tmp5 = "\u044D\u0442\u043E\u0439" != formatted1;
                    }
                    str3 = null;
                    if (!tmp5) {
                      str3 = "this";
                    }
                  }
                }
              }
            }
          }
        }
      }
      return RUWeekdayParser(10459).createParsingComponentsAtWeekday(reference.reference, RUWeekdayParser(10561).WEEKDAY_DICTIONARY[formatted], str3);
    }
  }
];

export default _createClass(RUWeekdayParser, items);