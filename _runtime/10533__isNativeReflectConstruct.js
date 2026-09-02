// === Module 10533: _isNativeReflectConstruct ===

// Module 10533 (_isNativeReflectConstruct)
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10453 */;
import closure_2 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const PTCasualTimeParser = require;
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
class PTCasualTimeParser {
  constructor() {
    self = this;
    tmp = closure_2(this, PTCasualTimeParser);
    tmp2 = closure_4;
    obj = closure_4(PTCasualTimeParser);
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
_inherits(PTCasualTimeParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const items = [
  {
    key: "innerPattern",
    value: function innerPattern() {
      return /(?:esta\s*)?(manha|manhã|tarde|meia-noite|meio-dia|noite)(?=\W|$)/i;
    }
  },
  {
    key: "innerExtract",
    value: function innerExtract(refDate) {
      refDate = refDate.refDate;
      const parsingComponents = refDate.createParsingComponents();
      const formatted = arg1[1].toLowerCase();
      if ("tarde" === formatted) {
        parsingComponents.imply("meridiem", PTCasualTimeParser(10451).Meridiem.PM);
        parsingComponents.imply("hour", 15);
      } else if ("noite" === formatted) {
        parsingComponents.imply("meridiem", PTCasualTimeParser(10451).Meridiem.PM);
        parsingComponents.imply("hour", 22);
      } else {
        if ("manha" !== formatted) {
          if ("manh\u00E3" !== formatted) {
            if ("meia-noite" === formatted) {
              const _Date = Date;
              const date = new Date(refDate.getTime());
              date.setDate(date.getDate() + 1);
              PTCasualTimeParser(10452).assignSimilarDate(parsingComponents, date);
              PTCasualTimeParser(10452).implySimilarTime(parsingComponents, date);
              parsingComponents.imply("hour", 0);
              parsingComponents.imply("minute", 0);
              parsingComponents.imply("second", 0);
            } else if ("meio-dia" === formatted) {
              parsingComponents.imply("meridiem", PTCasualTimeParser(10451).Meridiem.AM);
              parsingComponents.imply("hour", 12);
            }
          }
        }
        parsingComponents.imply("meridiem", PTCasualTimeParser(10451).Meridiem.AM);
        parsingComponents.imply("hour", 6);
      }
      return parsingComponents;
    }
  }
];

export default _createClass(PTCasualTimeParser, items);