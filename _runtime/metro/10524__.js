// === Module 10524: ? ===

// Module 10524
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10439 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const NLCasualTimeParser = require;
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
class NLCasualTimeParser {
  constructor() {
    self = this;
    tmp = c2(this, NLCasualTimeParser);
    tmp2 = closure_4;
    obj = closure_4(NLCasualTimeParser);
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
_inherits(NLCasualTimeParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern() {
    return /(deze)?\s*(namiddag|avond|middernacht|ochtend|middag|'s middags|'s avonds|'s ochtends)(?=\W|$)/i;
  }
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(refDate, arg1) {
      refDate = refDate.refDate;
      const parsingComponents = refDate.createParsingComponents();
      if ("deze" === arg1[1]) {
        const refDate2 = refDate.refDate;
        parsingComponents.assign("day", refDate2.getDate());
        const refDate3 = refDate.refDate;
        parsingComponents.assign("month", refDate3.getMonth() + 1);
        const refDate4 = refDate.refDate;
        parsingComponents.assign("year", refDate4.getFullYear());
      }
      const formatted = arg1[2].toLowerCase();
      if ("namiddag" !== formatted) {
        if ("'s namiddags" !== formatted) {
          if ("avond" !== formatted) {
            if ("'s avonds'" !== formatted) {
              if ("middernacht" === formatted) {
                const _Date = Date;
                const date = new Date(refDate.getTime());
                date.setDate(date.getDate() + 1);
                NLCasualTimeParser(10438).assignSimilarDate(parsingComponents, date);
                NLCasualTimeParser(10438).implySimilarTime(parsingComponents, date);
                parsingComponents.imply("hour", 0);
                parsingComponents.imply("minute", 0);
                parsingComponents.imply("second", 0);
              } else {
                if ("ochtend" !== formatted) {
                  if ("'s ochtends" !== formatted) {
                    if ("middag" === formatted) {
                      parsingComponents.imply("meridiem", NLCasualTimeParser(10437).Meridiem.AM);
                      parsingComponents.imply("hour", 12);
                    }
                  }
                }
                parsingComponents.imply("meridiem", NLCasualTimeParser(10437).Meridiem.AM);
                parsingComponents.imply("hour", 6);
              }
            }
          }
          parsingComponents.imply("meridiem", NLCasualTimeParser(10437).Meridiem.PM);
          parsingComponents.imply("hour", 20);
        }
        return parsingComponents;
      }
      parsingComponents.imply("meridiem", NLCasualTimeParser(10437).Meridiem.PM);
      parsingComponents.imply("hour", 15);
    }
  }
];

export default _createClass(NLCasualTimeParser, items);