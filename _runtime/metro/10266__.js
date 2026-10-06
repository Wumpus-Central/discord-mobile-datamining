// === Module 10266: ? ===

// Module 10266
import Meridiem from "Meridiem" /* 10179 */;
import assignSimilarDate from "assignSimilarDate" /* 10180 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10181 */;
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
class NLCasualTimeParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, NLCasualTimeParser);
    const obj = _getPrototypeOf(NLCasualTimeParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
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
      const str4 = arg1[2];
      const formatted = str4.toLowerCase();
      if ("namiddag" !== formatted) {
        if ("'s namiddags" !== formatted) {
          if ("avond" !== formatted) {
            if ("'s avonds'" !== formatted) {
              if ("middernacht" === formatted) {
                const _Date = Date;
                const self = this;
                const self2 = this;
                const date = new Date(refDate.getTime());
                date.setDate(date.getDate() + 1);
                assignSimilarDate.assignSimilarDate(parsingComponents, date);
                assignSimilarDate.implySimilarTime(parsingComponents, date);
                parsingComponents.imply("hour", 0);
                parsingComponents.imply("minute", 0);
                parsingComponents.imply("second", 0);
              } else {
                if ("ochtend" !== formatted) {
                  if ("'s ochtends" !== formatted) {
                    if ("middag" === formatted) {
                      parsingComponents.imply("meridiem", Meridiem.Meridiem.AM);
                      parsingComponents.imply("hour", 12);
                    }
                  }
                }
                parsingComponents.imply("meridiem", Meridiem.Meridiem.AM);
                parsingComponents.imply("hour", 6);
              }
            }
          }
          parsingComponents.imply("meridiem", Meridiem.Meridiem.PM);
          parsingComponents.imply("hour", 20);
        }
        return parsingComponents;
      }
      parsingComponents.imply("meridiem", Meridiem.Meridiem.PM);
      parsingComponents.imply("hour", 15);
    }
  }
];

export default _createClass(NLCasualTimeParser, items);