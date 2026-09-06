// === Module 10572: ? ===

// Module 10572
import _mod10563 from "module_10563" /* 10563 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const RURelativeDateFormatParser = require;
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
class RURelativeDateFormatParser {
  constructor() {
    self = this;
    tmp = c2(this, RURelativeDateFormatParser);
    tmp2 = closure_4;
    obj = closure_4(RURelativeDateFormatParser);
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
_inherits(RURelativeDateFormatParser, _mod10563.AbstractParserWithLeftRightBoundaryChecking);
const entry = {
  key: "innerPatternString",
  value: function innerPatternString(arg0) {
    return "(\u0432 \u043F\u0440\u043E\u0448\u043B\u043E\u043C|\u043D\u0430 \u043F\u0440\u043E\u0448\u043B\u043E\u0439|\u043D\u0430 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439|\u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u043C|\u043D\u0430 \u044D\u0442\u043E\u0439|\u0432 \u044D\u0442\u043E\u043C)\\s*(" + RURelativeDateFormatParser(10432).matchAnyPattern(RURelativeDateFormatParser(10561).TIME_UNIT_DICTIONARY) + ")";
  }
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(createParsingComponents, arg1) {
      const formatted = arg1[1].toLowerCase();
      const formatted1 = arg1[2].toLowerCase();
      const str3 = RURelativeDateFormatParser(10561).TIME_UNIT_DICTIONARY[formatted1];
      if ("\u043D\u0430 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439" != formatted) {
        if ("\u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u043C" != formatted) {
          if ("\u0432 \u043F\u0440\u043E\u0448\u043B\u043E\u043C" != formatted) {
            if ("\u043D\u0430 \u043F\u0440\u043E\u0448\u043B\u043E\u0439" != formatted) {
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
          obj = {};
          obj[str3] = -1;
          const ParsingComponents = tmp3(10435).ParsingComponents;
          return ParsingComponents.createRelativeFromReference(createParsingComponents.reference, obj);
        }
      }
      const ParsingComponents2 = tmp3(10435).ParsingComponents;
      return ParsingComponents2.createRelativeFromReference(createParsingComponents.reference, { [str3]: 1 });
    }
  }
];

export default _createClass(RURelativeDateFormatParser, items);