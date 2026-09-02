// _runtime/10586__isNativeReflectConstruct.js
import _isNativeReflectConstruct2 from "10577__isNativeReflectConstruct.js";
import closure_2 from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import closure_3 from "metro/00093__possibleConstructorReturn.js";
import closure_4 from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";

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
  } catch (err) {}
}
class RURelativeDateFormatParser {
  constructor() {
    self = this;
    tmp = closure_2(this, RURelativeDateFormatParser);
    tmp2 = closure_4;
    obj = closure_4(RURelativeDateFormatParser);
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
_inherits(RURelativeDateFormatParser, _isNativeReflectConstruct2.AbstractParserWithLeftRightBoundaryChecking);
const items = [
  {
    key: "innerPatternString",
    value: function innerPatternString(arg0) {
      return (
        "(\u0432 \u043F\u0440\u043E\u0448\u043B\u043E\u043C|\u043D\u0430 \u043F\u0440\u043E\u0448\u043B\u043E\u0439|\u043D\u0430 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439|\u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u043C|\u043D\u0430 \u044D\u0442\u043E\u0439|\u0432 \u044D\u0442\u043E\u043C)\\s*(" +
        RURelativeDateFormatParser(10446).matchAnyPattern(RURelativeDateFormatParser(10575).TIME_UNIT_DICTIONARY) +
        ")"
      );
    },
  },
  {
    key: "innerExtract",
    value: function innerExtract(createParsingComponents) {
      const formatted = arg1[1].toLowerCase();
      const formatted1 = arg1[2].toLowerCase();
      const str3 = RURelativeDateFormatParser(10575).TIME_UNIT_DICTIONARY[formatted1];
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
                let obj = parsingComponents.assign("year", date.getFullYear());
                obj = parsingComponents.assign("month", date.getMonth() + 1);
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
          const ParsingComponents = tmp3(10449).ParsingComponents;
          return ParsingComponents.createRelativeFromReference(createParsingComponents.reference, obj);
        }
      }
      const ParsingComponents2 = tmp3(10449).ParsingComponents;
      return ParsingComponents2.createRelativeFromReference(createParsingComponents.reference, { [str3]: 1 });
    },
  },
];

export default _createClass(RURelativeDateFormatParser, items);
