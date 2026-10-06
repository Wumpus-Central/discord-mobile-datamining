// _runtime/metro/10275__.js
import Meridiem from "../10179_Meridiem.js";
import assignSimilarDate from "../10180_assignSimilarDate.js";
import AbstractParserWithWordBoundaryChecking from "../10181_AbstractParserWithWordBoundaryChecking.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {}));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
class NLCasualDateTimeParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, NLCasualDateTimeParser);
    const obj = _getPrototypeOf(NLCasualDateTimeParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(NLCasualDateTimeParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern(arg0) {
    return /(gisteren|morgen|van)(ochtend|middag|namiddag|avond|nacht)(?=\W|$)/i;
  },
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(createParsingComponents, arg1) {
      const str = arg1[1];
      const formatted = str.toLowerCase();
      const str2 = arg1[2];
      const formatted1 = str2.toLowerCase();
      const parsingComponents = createParsingComponents.createParsingComponents();
      const refDate = createParsingComponents.refDate;
      if ("gisteren" === formatted) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        const date = new Date(refDate.getTime());
        date.setDate(date.getDate() - 1);
        assignSimilarDate.assignSimilarDate(parsingComponents, date);
      } else if ("van" === formatted) {
        assignSimilarDate.assignSimilarDate(parsingComponents, refDate);
      } else if ("morgen" === formatted) {
        const _Date2 = Date;
        const self3 = this;
        const self4 = this;
        const date1 = new Date(refDate.getTime());
        date1.setDate(date1.getDate() + 1);
        assignSimilarDate.assignSimilarDate(parsingComponents, date1);
        assignSimilarDate.implySimilarTime(parsingComponents, date1);
      }
      if ("ochtend" === formatted1) {
        parsingComponents.imply("meridiem", Meridiem.Meridiem.AM);
        parsingComponents.imply("hour", 6);
      } else if ("middag" === formatted1) {
        parsingComponents.imply("meridiem", Meridiem.Meridiem.AM);
        parsingComponents.imply("hour", 12);
      } else if ("namiddag" === formatted1) {
        parsingComponents.imply("meridiem", Meridiem.Meridiem.PM);
        parsingComponents.imply("hour", 15);
      } else if ("avond" === formatted1) {
        parsingComponents.imply("meridiem", Meridiem.Meridiem.PM);
        parsingComponents.imply("hour", 20);
      }
      return parsingComponents;
    },
  },
];

export default _createClass(NLCasualDateTimeParser, items);
