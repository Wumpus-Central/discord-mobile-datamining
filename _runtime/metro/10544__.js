// === Module 10544: ? ===

// Module 10544
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10439 */;
import NUMBER from "NUMBER" /* 10540 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const ZHHansWeekdayParser = require;
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
const keys = Object.keys(NUMBER.WEEKDAY_OFFSET);
const regExp = new RegExp("(?:\u661F\u671F|\u793C\u62DC|\u5468)(?<weekday>" + keys.join("|") + ")");
class ZHHansWeekdayParser {
  constructor() {
    self = this;
    tmp = c2(this, ZHHansWeekdayParser);
    tmp2 = closure_4;
    obj = closure_4(ZHHansWeekdayParser);
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
_inherits(ZHHansWeekdayParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern() {
    return regExp;
  }
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(createParsingResult, index) {
      const parsingResult = createParsingResult.createParsingResult(index.index, index[0]);
      const tmp2 = ZHHansWeekdayParser(10540).WEEKDAY_OFFSET[index.groups.weekday];
      if (undefined === tmp2) {
        return null;
      } else {
        const _Date = Date;
        const refDate = createParsingResult.refDate;
        const date = new Date(refDate.getTime());
        const diff = tmp2 - date.getDay();
        const _Math3 = Math;
        const _Math4 = Math;
        const absolute = Math.abs(diff - 7);
        let diff1 = diff;
        if (absolute < Math.abs(diff)) {
          diff1 = diff - 7;
        }
        const _Math = Math;
        const _Math2 = Math;
        const absolute1 = Math.abs(diff1 + 7);
        let sum = diff1;
        if (absolute1 < Math.abs(diff1)) {
          sum = diff1 + 7;
        }
        date.setDate(date.getDate() + sum);
        const start = parsingResult.start;
        start.assign("weekday", tmp2);
        const start2 = parsingResult.start;
        start2.imply("day", date.getDate());
        const start3 = parsingResult.start;
        start3.imply("month", date.getMonth() + 1);
        const start4 = parsingResult.start;
        start4.imply("year", date.getFullYear());
        return parsingResult;
      }
    }
  }
];

export default _createClass(ZHHansWeekdayParser, items);