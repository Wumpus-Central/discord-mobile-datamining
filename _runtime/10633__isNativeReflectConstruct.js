// === Module 10633: _isNativeReflectConstruct ===

// Module 10633 (_isNativeReflectConstruct)
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 10450 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10457 */;
import WEEKDAY_DICTIONARY from "WEEKDAY_DICTIONARY" /* 10619 */;
import closure_2 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const ITRelativeDateFormatParser = require;
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
const regExp = new RegExp("(questo|ultimo|scorso|prossimo|dopo\\s*questo|questa|ultima|scorsa|prossima\\s*questa)\\s*(" + repeatedTimeunitPattern.matchAnyPattern(WEEKDAY_DICTIONARY.TIME_UNIT_DICTIONARY) + ")(?=\\s*)(?=\\W|$)", "i");
class ITRelativeDateFormatParser {
  constructor() {
    self = this;
    tmp = closure_2(this, ITRelativeDateFormatParser);
    tmp2 = closure_4;
    obj = closure_4(ITRelativeDateFormatParser);
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
_inherits(ITRelativeDateFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const items = [
  {
    key: "innerPattern",
    value: function innerPattern() {
      return regExp;
    }
  },
  {
    key: "innerExtract",
    value: function innerExtract(createParsingComponents) {
      const formatted = arg1[1].toLowerCase();
      const str3 = arg1[2].toLowerCase();
      const tmp3 = ITRelativeDateFormatParser(10619).TIME_UNIT_DICTIONARY[str3];
      if ("prossimo" != formatted) {
        if (!formatted.startsWith("dopo")) {
          if ("prima" != formatted) {
            if ("precedente" != formatted) {
              const parsingComponents = createParsingComponents.createParsingComponents();
              const _Date = Date;
              const instant = createParsingComponents.reference.instant;
              const date = new Date(instant.getTime());
              if (str3.match(/settimana/i)) {
                date.setDate(date.getDate() - date.getDay());
                parsingComponents.imply("day", date.getDate());
                parsingComponents.imply("month", date.getMonth() + 1);
                parsingComponents.imply("year", date.getFullYear());
                const date1 = date.getDate();
              } else if (str3.match(/mese/i)) {
                date.setDate(1);
                parsingComponents.imply("day", date.getDate());
                parsingComponents.assign("year", date.getFullYear());
                parsingComponents.assign("month", date.getMonth() + 1);
              } else if (str3.match(/anno/i)) {
                date.setDate(1);
                date.setMonth(0);
                parsingComponents.imply("day", date.getDate());
                parsingComponents.imply("month", date.getMonth() + 1);
                parsingComponents.assign("year", date.getFullYear());
              }
              return parsingComponents;
            }
          }
          const obj2 = {};
          obj2[tmp3] = -1;
          const ParsingComponents = tmp(10453).ParsingComponents;
          return ParsingComponents.createRelativeFromReference(createParsingComponents.reference, obj2);
        }
      }
      const ParsingComponents2 = tmp(10453).ParsingComponents;
      return ParsingComponents2.createRelativeFromReference(createParsingComponents.reference, { [tmp3]: 1 });
    }
  }
];

export default _createClass(ITRelativeDateFormatParser, items);