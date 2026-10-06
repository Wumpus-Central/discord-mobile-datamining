// === Module 10293: ? ===

// Module 10293
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10181 */;
import _mod10289 from "module_10289" /* 10289 */;
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
const keys = Object.keys(_mod10289.WEEKDAY_OFFSET);
const regExp = new RegExp("(?:\u661F\u671F|\u79AE\u62DC|\u9031)(?<weekday>" + keys.join("|") + ")");
class ZHHantWeekdayParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ZHHantWeekdayParser);
    const obj = _getPrototypeOf(ZHHantWeekdayParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(ZHHantWeekdayParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
      const tmp2 = _mod10289.WEEKDAY_OFFSET[index.groups.weekday];
      if (undefined === tmp2) {
        return null;
      } else {
        const _Date = Date;
        const refDate = createParsingResult.refDate;
        const self = this;
        const self2 = this;
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

export default _createClass(ZHHantWeekdayParser, items);