// === Module 10324: ? ===

// Module 10324
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
class ESCasualTimeParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ESCasualTimeParser);
    const obj = _getPrototypeOf(ESCasualTimeParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(ESCasualTimeParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern() {
    return /(?:esta\s*)?(mañana|tarde|medianoche|mediodia|mediodía|noche)(?=\W|$)/i;
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
      } else if ("noche" === formatted) {
        parsingComponents.imply("meridiem", Meridiem.Meridiem.PM);
        parsingComponents.imply("hour", 22);
      } else if ("ma\u00F1ana" === formatted) {
        parsingComponents.imply("meridiem", Meridiem.Meridiem.AM);
        parsingComponents.imply("hour", 6);
      } else if ("medianoche" === formatted) {
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
      } else if ("mediodia" === formatted) {
        parsingComponents.imply("meridiem", Meridiem.Meridiem.AM);
        parsingComponents.imply("hour", 12);
      }
      return parsingComponents;
    }
  }
];

export default _createClass(ESCasualTimeParser, items);