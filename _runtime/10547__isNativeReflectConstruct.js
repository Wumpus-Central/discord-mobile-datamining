// === Module 10547: _isNativeReflectConstruct ===

// Module 10547 (_isNativeReflectConstruct)
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10453 */;
import closure_2 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
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
    tmp = closure_2(this, NLCasualDateTimeParser);
    tmp2 = closure_4;
    obj = closure_4(NLCasualDateTimeParser);
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
_inherits(NLCasualDateTimeParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const items = [
  {
    key: "innerPattern",
    value: function innerPattern(arg0) {
      return /(gisteren|morgen|van)(ochtend|middag|namiddag|avond|nacht)(?=\W|$)/i;
    }
  },
  {
    key: "innerExtract",
    value: function innerExtract(createParsingComponents) {
      const formatted = arg1[1].toLowerCase();
      const formatted1 = arg1[2].toLowerCase();
      const parsingComponents = createParsingComponents.createParsingComponents();
      const refDate = createParsingComponents.refDate;
      if ("gisteren" === formatted) {
        const _Date = Date;
        const date = new Date(refDate.getTime());
        date.setDate(date.getDate() - 1);
        NLCasualDateTimeParser(10452).assignSimilarDate(parsingComponents, date);
      } else if ("van" === formatted) {
        NLCasualDateTimeParser(10452).assignSimilarDate(parsingComponents, refDate);
      } else if ("morgen" === formatted) {
        const _Date2 = Date;
        const date1 = new Date(refDate.getTime());
        date1.setDate(date1.getDate() + 1);
        NLCasualDateTimeParser(10452).assignSimilarDate(parsingComponents, date1);
        NLCasualDateTimeParser(10452).implySimilarTime(parsingComponents, date1);
      }
      if ("ochtend" === formatted1) {
        parsingComponents.imply("meridiem", NLCasualDateTimeParser(10451).Meridiem.AM);
        parsingComponents.imply("hour", 6);
      } else if ("middag" === formatted1) {
        parsingComponents.imply("meridiem", NLCasualDateTimeParser(10451).Meridiem.AM);
        parsingComponents.imply("hour", 12);
      } else if ("namiddag" === formatted1) {
        parsingComponents.imply("meridiem", NLCasualDateTimeParser(10451).Meridiem.PM);
        parsingComponents.imply("hour", 15);
      } else if ("avond" === formatted1) {
        parsingComponents.imply("meridiem", NLCasualDateTimeParser(10451).Meridiem.PM);
        parsingComponents.imply("hour", 20);
      }
      return parsingComponents;
    }
  }
];

export default _createClass(NLCasualDateTimeParser, items);