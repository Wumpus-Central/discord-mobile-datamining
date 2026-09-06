// === Module 10533: ? ===

// Module 10533
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10439 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const NLCasualDateTimeParser = require;
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
class NLCasualDateTimeParser {
  constructor() {
    self = this;
    tmp = c2(this, NLCasualDateTimeParser);
    tmp2 = closure_4;
    obj = closure_4(NLCasualDateTimeParser);
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
_inherits(NLCasualDateTimeParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern(arg0) {
    return /(gisteren|morgen|van)(ochtend|middag|namiddag|avond|nacht)(?=\W|$)/i;
  }
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(createParsingComponents, arg1) {
      const formatted = arg1[1].toLowerCase();
      const formatted1 = arg1[2].toLowerCase();
      const parsingComponents = createParsingComponents.createParsingComponents();
      const refDate = createParsingComponents.refDate;
      if ("gisteren" === formatted) {
        const _Date = Date;
        const date = new Date(refDate.getTime());
        date.setDate(date.getDate() - 1);
        NLCasualDateTimeParser(10438).assignSimilarDate(parsingComponents, date);
      } else if ("van" === formatted) {
        NLCasualDateTimeParser(10438).assignSimilarDate(parsingComponents, refDate);
      } else if ("morgen" === formatted) {
        const _Date2 = Date;
        const date1 = new Date(refDate.getTime());
        date1.setDate(date1.getDate() + 1);
        NLCasualDateTimeParser(10438).assignSimilarDate(parsingComponents, date1);
        NLCasualDateTimeParser(10438).implySimilarTime(parsingComponents, date1);
      }
      if ("ochtend" === formatted1) {
        parsingComponents.imply("meridiem", NLCasualDateTimeParser(10437).Meridiem.AM);
        parsingComponents.imply("hour", 6);
      } else if ("middag" === formatted1) {
        parsingComponents.imply("meridiem", NLCasualDateTimeParser(10437).Meridiem.AM);
        parsingComponents.imply("hour", 12);
      } else if ("namiddag" === formatted1) {
        parsingComponents.imply("meridiem", NLCasualDateTimeParser(10437).Meridiem.PM);
        parsingComponents.imply("hour", 15);
      } else if ("avond" === formatted1) {
        parsingComponents.imply("meridiem", NLCasualDateTimeParser(10437).Meridiem.PM);
        parsingComponents.imply("hour", 20);
      }
      return parsingComponents;
    }
  }
];

export default _createClass(NLCasualDateTimeParser, items);