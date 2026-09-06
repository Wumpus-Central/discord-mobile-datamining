// === Module 10582: _isNativeReflectConstruct ===

// Module 10582 (_isNativeReflectConstruct)
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10439 */;
import closure_2 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const ESCasualTimeParser = require;
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
class ESCasualTimeParser {
  constructor() {
    self = this;
    tmp = closure_2(this, ESCasualTimeParser);
    tmp2 = closure_4;
    obj = closure_4(ESCasualTimeParser);
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
_inherits(ESCasualTimeParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const items = [
  {
    key: "innerPattern",
    value: function innerPattern() {
      return /(?:esta\s*)?(mañana|tarde|medianoche|mediodia|mediodía|noche)(?=\W|$)/i;
    }
  },
  {
    key: "innerExtract",
    value: function innerExtract(refDate) {
      refDate = refDate.refDate;
      const parsingComponents = refDate.createParsingComponents();
      const formatted = arg1[1].toLowerCase();
      if ("tarde" === formatted) {
        parsingComponents.imply("meridiem", ESCasualTimeParser(10437).Meridiem.PM);
        parsingComponents.imply("hour", 15);
      } else if ("noche" === formatted) {
        parsingComponents.imply("meridiem", ESCasualTimeParser(10437).Meridiem.PM);
        parsingComponents.imply("hour", 22);
      } else if ("ma\u00F1ana" === formatted) {
        parsingComponents.imply("meridiem", ESCasualTimeParser(10437).Meridiem.AM);
        parsingComponents.imply("hour", 6);
      } else if ("medianoche" === formatted) {
        const _Date = Date;
        const date = new Date(refDate.getTime());
        date.setDate(date.getDate() + 1);
        ESCasualTimeParser(10438).assignSimilarDate(parsingComponents, date);
        ESCasualTimeParser(10438).implySimilarTime(parsingComponents, date);
        parsingComponents.imply("hour", 0);
        parsingComponents.imply("minute", 0);
        parsingComponents.imply("second", 0);
      } else if ("mediodia" === formatted) {
        parsingComponents.imply("meridiem", ESCasualTimeParser(10437).Meridiem.AM);
        parsingComponents.imply("hour", 12);
      }
      return parsingComponents;
    }
  }
];

export default _createClass(ESCasualTimeParser, items);