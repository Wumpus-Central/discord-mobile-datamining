// === Module 10248: ? ===

// Module 10248
import Meridiem from "Meridiem" /* 10166 */;
import assignSimilarDate from "assignSimilarDate" /* 10167 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10168 */;
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
class PTCasualTimeParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, PTCasualTimeParser);
    const obj = _getPrototypeOf(PTCasualTimeParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(PTCasualTimeParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern() {
    return /(?:esta\s*)?(manha|manhã|tarde|meia-noite|meio-dia|noite)(?=\W|$)/i;
  }
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(refDate, arg1) {
      refDate = refDate.refDate;
      const parsingComponents = refDate.createParsingComponents();
      const str = arg1[1];
      const formatted = str.toLowerCase();
      if ("tarde" === formatted) {
        parsingComponents.imply("meridiem", Meridiem.Meridiem.PM);
        parsingComponents.imply("hour", 15);
      } else if ("noite" === formatted) {
        parsingComponents.imply("meridiem", Meridiem.Meridiem.PM);
        parsingComponents.imply("hour", 22);
      } else {
        if ("manha" !== formatted) {
          if ("manh\u00E3" !== formatted) {
            if ("meia-noite" === formatted) {
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
            } else if ("meio-dia" === formatted) {
              parsingComponents.imply("meridiem", Meridiem.Meridiem.AM);
              parsingComponents.imply("hour", 12);
            }
          }
        }
        parsingComponents.imply("meridiem", Meridiem.Meridiem.AM);
        parsingComponents.imply("hour", 6);
      }
      return parsingComponents;
    }
  }
];

export default _createClass(PTCasualTimeParser, items);