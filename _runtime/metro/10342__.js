// === Module 10342: ? ===

// Module 10342
import en from "en" /* 10155 */;
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
const re6 = /(?:questo|questa)?\s{0,3}(mattina|pomeriggio|sera|notte|mezzanotte|mezzogiorno)(?=\W|$)/i;
class ITCasualTimeParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ITCasualTimeParser);
    const obj = _getPrototypeOf(ITCasualTimeParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(ITCasualTimeParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern() {
    return re6;
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
      if ("pomeriggio" === formatted) {
        parsingComponents.imply("meridiem", en.Meridiem.PM);
        parsingComponents.imply("hour", 15);
      } else {
        if ("sera" !== formatted) {
          if ("notte" !== formatted) {
            if ("mezzanotte" === formatted) {
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
            } else if ("mattina" === formatted) {
              parsingComponents.imply("meridiem", en.Meridiem.AM);
              parsingComponents.imply("hour", 6);
            } else if ("mezzogiorno" === formatted) {
              parsingComponents.imply("meridiem", en.Meridiem.AM);
              parsingComponents.imply("hour", 12);
            }
          }
        }
        parsingComponents.imply("meridiem", en.Meridiem.PM);
        parsingComponents.imply("hour", 20);
      }
      return parsingComponents;
    }
  }
];

export default _createClass(ITCasualTimeParser, items);