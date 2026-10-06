// === Module 10339: ? ===

// Module 10339
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 10174 */;
import ReferenceWithTimezone from "ReferenceWithTimezone" /* 10177 */;
import _mod10328 from "module_10328" /* 10328 */;
import _mod10330 from "module_10330" /* 10330 */;
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
class UKRelativeDateFormatParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, UKRelativeDateFormatParser);
    const obj = _getPrototypeOf(UKRelativeDateFormatParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(UKRelativeDateFormatParser, _mod10330.AbstractParserWithLeftRightBoundaryChecking);
const entry = {
  key: "innerPatternString",
  value: function innerPatternString(arg0) {
    return "(\u0432 \u043C\u0438\u043D\u0443\u043B\u043E\u043C\u0443|\u0443 \u043C\u0438\u043D\u0443\u043B\u043E\u043C\u0443|\u043D\u0430 \u043C\u0438\u043D\u0443\u043B\u043E\u043C\u0443|\u043C\u0438\u043D\u0443\u043B\u043E\u0433\u043E|\u043D\u0430 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u043C\u0443|\u0432 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u043C\u0443|\u0443 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u043C\u0443|\u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u0433\u043E|\u043D\u0430 \u0446\u044C\u043E\u043C\u0443|\u0432 \u0446\u044C\u043E\u043C\u0443|\u0443 \u0446\u044C\u043E\u043C\u0443|\u0446\u044C\u043E\u0433\u043E)\\s*(" + repeatedTimeunitPattern.matchAnyPattern(_mod10328.TIME_UNIT_DICTIONARY) + ")(?=\\s*)";
  }
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(createParsingComponents, arg1) {
      const str = arg1[1];
      const formatted = str.toLowerCase();
      const str2 = arg1[2];
      const formatted1 = str2.toLowerCase();
      const str3 = _mod10328.TIME_UNIT_DICTIONARY[formatted1];
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
                      const self = this;
                      const self2 = this;
                      const date = new Date(instant.getTime());
                      if (str3.match(/week/i)) {
                        const setDate = date.setDate;
                        const date1 = date.getDate();
                        setDate(date1 - date.getDay());
                        parsingComponents.imply("day", date.getDate());
                        parsingComponents.imply("month", date.getMonth() + 1);
                        parsingComponents.imply("year", date.getFullYear());
                      } else if (str3.match(/month/i)) {
                        date.setDate(1);
                        parsingComponents.imply("day", date.getDate());
                        parsingComponents.assign("year", date.getFullYear());
                        parsingComponents.assign("month", date.getMonth() + 1);
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
              const obj = {};
              obj[str3] = -1;
              const ParsingComponents = ReferenceWithTimezone.ParsingComponents;
              return ParsingComponents.createRelativeFromReference(createParsingComponents.reference, obj);
            }
          }
        }
      }
      const ParsingComponents2 = ReferenceWithTimezone.ParsingComponents;
      return ParsingComponents2.createRelativeFromReference(createParsingComponents.reference, { [str3]: 1 });
    }
  }
];

export default _createClass(UKRelativeDateFormatParser, items);