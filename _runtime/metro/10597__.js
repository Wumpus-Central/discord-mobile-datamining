// === Module 10597: ? ===

// Module 10597
import _mod10588 from "module_10588" /* 10588 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const UKRelativeDateFormatParser = require;
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
class UKRelativeDateFormatParser {
  constructor() {
    self = this;
    tmp = c2(this, UKRelativeDateFormatParser);
    tmp2 = closure_4;
    obj = closure_4(UKRelativeDateFormatParser);
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
_inherits(UKRelativeDateFormatParser, _mod10588.AbstractParserWithLeftRightBoundaryChecking);
const entry = {
  key: "innerPatternString",
  value: function innerPatternString(arg0) {
    return "(\u0432 \u043C\u0438\u043D\u0443\u043B\u043E\u043C\u0443|\u0443 \u043C\u0438\u043D\u0443\u043B\u043E\u043C\u0443|\u043D\u0430 \u043C\u0438\u043D\u0443\u043B\u043E\u043C\u0443|\u043C\u0438\u043D\u0443\u043B\u043E\u0433\u043E|\u043D\u0430 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u043C\u0443|\u0432 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u043C\u0443|\u0443 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u043C\u0443|\u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u0433\u043E|\u043D\u0430 \u0446\u044C\u043E\u043C\u0443|\u0432 \u0446\u044C\u043E\u043C\u0443|\u0443 \u0446\u044C\u043E\u043C\u0443|\u0446\u044C\u043E\u0433\u043E)\\s*(" + UKRelativeDateFormatParser(10432).matchAnyPattern(UKRelativeDateFormatParser(10586).TIME_UNIT_DICTIONARY) + ")(?=\\s*)";
  }
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(createParsingComponents, arg1) {
      const formatted = arg1[1].toLowerCase();
      const formatted1 = arg1[2].toLowerCase();
      const str3 = UKRelativeDateFormatParser(10586).TIME_UNIT_DICTIONARY[formatted1];
      if ("\u043D\u0430 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u043C\u0443" != formatted) {
        if ("\u0432 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u043C\u0443" != formatted) {
          if ("\u0443 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u043C\u0443" != formatted) {
            if ("\u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u0433\u043E" != formatted) {
              if ("\u043D\u0430 \u043C\u0438\u043D\u0443\u043B\u043E\u043C\u0443" != formatted) {
                if ("\u0432 \u043C\u0438\u043D\u0443\u043B\u043E\u043C\u0443" != formatted) {
                  if ("\u0443 \u043C\u0438\u043D\u0443\u043B\u043E\u043C\u0443" != formatted) {
                    if ("\u043C\u0438\u043D\u0443\u043B\u043E\u0433\u043E" != formatted) {
                      const parsingComponents = createParsingComponents.createParsingComponents();
                      const _Date = Date;
                      const instant = createParsingComponents.reference.instant;
                      const date = new Date(instant.getTime());
                      if (str3.match(/week/i)) {
                        date.setDate(date.getDate() - date.getDay());
                        parsingComponents.imply("day", date.getDate());
                        parsingComponents.imply("month", date.getMonth() + 1);
                        parsingComponents.imply("year", date.getFullYear());
                        const date1 = date.getDate();
                      } else if (str3.match(/month/i)) {
                        date.setDate(1);
                        parsingComponents.imply("day", date.getDate());
                        parsingComponents.assign("year", date.getFullYear());
                        let obj = parsingComponents.assign("month", date.getMonth() + 1);
                      } else if (str3.match(/year/i)) {
                        date.setDate(1);
                        date.setMonth(0);
                        parsingComponents.imply("day", date.getDate());
                        parsingComponents.imply("month", date.getMonth() + 1);
                        parsingComponents.assign("year", date.getFullYear());
                      }
                      return parsingComponents;
                    }
                  }
                }
              }
              obj = {};
              obj[str3] = -1;
              const ParsingComponents = UKRelativeDateFormatParser(10435).ParsingComponents;
              return ParsingComponents.createRelativeFromReference(createParsingComponents.reference, obj);
            }
          }
        }
      }
      const ParsingComponents2 = UKRelativeDateFormatParser(10435).ParsingComponents;
      return ParsingComponents2.createRelativeFromReference(createParsingComponents.reference, { [str3]: 1 });
    }
  }
];

export default _createClass(UKRelativeDateFormatParser, items);