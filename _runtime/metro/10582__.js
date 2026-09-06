// _runtime/metro/10582__.js
import AbstractParserWithWordBoundaryChecking from "../10439_AbstractParserWithWordBoundaryChecking.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

const ESCasualTimeParser = require;
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
class ESCasualTimeParser {
  constructor() {
    self = this;
    tmp = c2(this, ESCasualTimeParser);
    tmp2 = closure_4;
    obj = closure_4(ESCasualTimeParser);
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
_inherits(ESCasualTimeParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern() {
    return /(?:esta\s*)?(mañana|tarde|medianoche|mediodia|mediodía|noche)(?=\W|$)/i;
  },
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(refDate, arg1) {
      refDate = refDate.refDate;
      const parsingComponents = refDate.createParsingComponents();
      const formatted = arg1[1].toLowerCase();
      if ("tarde" === formatted) {
        parsingComponents.imply("meridiem", ESCasualTimeParser(10437).Meridiem.PM);
        parsingComponents.imply("hour", 15);
      } else if ("noche" === formatted) {
        parsingComponents.imply("meridiem", ESCasualTimeParser(10437).Meridiem.PM);
        parsingComponents.imply("hour", 22);
      } else if ("ma\u00F1ana" === formatted) {
        parsingComponents.imply("meridiem", ESCasualTimeParser(10437).Meridiem.AM);
        parsingComponents.imply("hour", 6);
      } else if ("medianoche" === formatted) {
        const _Date = Date;
        const date = new Date(refDate.getTime());
        date.setDate(date.getDate() + 1);
        ESCasualTimeParser(10438).assignSimilarDate(parsingComponents, date);
        ESCasualTimeParser(10438).implySimilarTime(parsingComponents, date);
        parsingComponents.imply("hour", 0);
        parsingComponents.imply("minute", 0);
        parsingComponents.imply("second", 0);
      } else if ("mediodia" === formatted) {
        parsingComponents.imply("meridiem", ESCasualTimeParser(10437).Meridiem.AM);
        parsingComponents.imply("hour", 12);
      }
      return parsingComponents;
    },
  },
];

export default _createClass(ESCasualTimeParser, items);
