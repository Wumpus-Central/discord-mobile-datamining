// _runtime/10533__isNativeReflectConstruct.js
import AbstractParserWithWordBoundaryChecking from "10439_AbstractParserWithWordBoundaryChecking.js";
import closure_2 from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import closure_3 from "metro/00093__possibleConstructorReturn.js";
import closure_4 from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";

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
  } catch (err) {}
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
    },
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
    },
  },
];

export default _createClass(NLCasualDateTimeParser, items);
