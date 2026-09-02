// _runtime/10627__isNativeReflectConstruct.js
import AbstractParserWithWordBoundaryChecking from "10453_AbstractParserWithWordBoundaryChecking.js";
import closure_2 from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import closure_3 from "metro/00093__possibleConstructorReturn.js";
import closure_4 from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";

const ITCasualTimeParser = require;
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
const re6 = /(?:questo|questa)?\s{0,3}(mattina|pomeriggio|sera|notte|mezzanotte|mezzogiorno)(?=\W|$)/i;
class ITCasualTimeParser {
  constructor() {
    self = this;
    tmp = closure_2(this, ITCasualTimeParser);
    tmp2 = closure_4;
    obj = closure_4(ITCasualTimeParser);
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
_inherits(ITCasualTimeParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const items = [
  {
    key: "innerPattern",
    value: function innerPattern() {
      return closure_6;
    },
  },
  {
    key: "innerExtract",
    value: function innerExtract(refDate) {
      refDate = refDate.refDate;
      const parsingComponents = refDate.createParsingComponents();
      const formatted = arg1[1].toLowerCase();
      if ("pomeriggio" === formatted) {
        parsingComponents.imply("meridiem", ITCasualTimeParser(10440).Meridiem.PM);
        parsingComponents.imply("hour", 15);
      } else {
        if ("sera" !== formatted) {
          if ("notte" !== formatted) {
            if ("mezzanotte" === formatted) {
              const _Date = Date;
              const date = new Date(refDate.getTime());
              date.setDate(date.getDate() + 1);
              ITCasualTimeParser(10452).assignSimilarDate(parsingComponents, date);
              ITCasualTimeParser(10452).implySimilarTime(parsingComponents, date);
              parsingComponents.imply("hour", 0);
              parsingComponents.imply("minute", 0);
              parsingComponents.imply("second", 0);
            } else if ("mattina" === formatted) {
              parsingComponents.imply("meridiem", ITCasualTimeParser(10440).Meridiem.AM);
              parsingComponents.imply("hour", 6);
            } else if ("mezzogiorno" === formatted) {
              parsingComponents.imply("meridiem", ITCasualTimeParser(10440).Meridiem.AM);
              parsingComponents.imply("hour", 12);
            }
          }
        }
        parsingComponents.imply("meridiem", ITCasualTimeParser(10440).Meridiem.PM);
        parsingComponents.imply("hour", 20);
      }
      return parsingComponents;
    },
  },
];

export default _createClass(ITCasualTimeParser, items);
