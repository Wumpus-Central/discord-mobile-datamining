// === Module 10615: ? ===

// Module 10615
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 10432 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10439 */;
import _mod10601 from "module_10601" /* 10601 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
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
const regExp = new RegExp("(questo|ultimo|scorso|prossimo|dopo\\s*questo|questa|ultima|scorsa|prossima\\s*questa)\\s*(" + repeatedTimeunitPattern.matchAnyPattern(_mod10601.TIME_UNIT_DICTIONARY) + ")(?=\\s*)(?=\\W|$)", "i");
class ITRelativeDateFormatParser {
  constructor() {
    self = this;
    tmp = c2(this, ITRelativeDateFormatParser);
    tmp2 = closure_4;
    obj = closure_4(ITRelativeDateFormatParser);
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
_inherits(ITRelativeDateFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
    value: function innerExtract(createParsingComponents, arg1) {
      const formatted = arg1[1].toLowerCase();
      const str3 = arg1[2].toLowerCase();
      const tmp3 = ITRelativeDateFormatParser(10601).TIME_UNIT_DICTIONARY[str3];
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
          const ParsingComponents = ITRelativeDateFormatParser(10435).ParsingComponents;
          return ParsingComponents.createRelativeFromReference(createParsingComponents.reference, obj2);
        }
      }
      const ParsingComponents2 = ITRelativeDateFormatParser(10435).ParsingComponents;
      return ParsingComponents2.createRelativeFromReference(createParsingComponents.reference, { [tmp3]: 1 });
    }
  }
];

export default _createClass(ITRelativeDateFormatParser, items);