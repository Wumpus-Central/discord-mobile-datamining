// === Module 10563: _isNativeReflectConstruct ===

// Module 10563 (_isNativeReflectConstruct)
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10453 */;
import zhStringToNumber from "zhStringToNumber" /* 10561 */;
import closure_2 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const ZHHantRelationWeekdayParser = require;
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
const keys = Object.keys(zhStringToNumber.WEEKDAY_OFFSET);
const regExp = new RegExp("(?<prefix>\u4E0A|\u4ECA|\u4E0B|\u9019|\u5462)(?:\u500B)?(?:\u661F\u671F|\u79AE\u62DC|\u9031)(?<weekday>" + keys.join("|") + ")");
class ZHHantRelationWeekdayParser {
  constructor() {
    self = this;
    tmp = closure_2(this, ZHHantRelationWeekdayParser);
    tmp2 = closure_4;
    obj = closure_4(ZHHantRelationWeekdayParser);
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
_inherits(ZHHantRelationWeekdayParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const items = [
  {
    key: "innerPattern",
    value: function innerPattern() {
      return regExp;
    }
  },
  {
    key: "innerExtract",
    value: function innerExtract(createParsingResult, index) {
      const parsingResult = createParsingResult.createParsingResult(index.index, index[0]);
      const tmp2 = ZHHantRelationWeekdayParser(10561).WEEKDAY_OFFSET[index.groups.weekday];
      if (undefined === tmp2) {
        return null;
      } else {
        const prefix = index.groups.prefix;
        let str2 = "last";
        if ("\u4E0A" != prefix) {
          str2 = "next";
          if ("\u4E0B" != prefix) {
            let tmp3 = "\u4ECA" != prefix;
            if (tmp3) {
              tmp3 = "\u9019" != prefix;
            }
            if (tmp3) {
              tmp3 = "\u5462" != prefix;
            }
            str2 = null;
            if (!tmp3) {
              str2 = "this";
            }
          }
        }
        const _Date = Date;
        const refDate = createParsingResult.refDate;
        const date = new Date(refDate.getTime());
        const day = date.getDay();
        if ("last" != str2) {
          if ("past" != str2) {
            if ("next" == str2) {
              date.setDate(date.getDate() + (tmp2 + 7 - day));
              let flag = true;
            } else if ("this" == str2) {
              date.setDate(date.getDate() + (tmp2 - day));
              flag = false;
            } else {
              const diff = tmp2 - day;
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
              flag = false;
            }
          }
          const start = parsingResult.start;
          start.assign("weekday", tmp2);
          const start2 = parsingResult.start;
          if (flag) {
            start2.assign("day", date.getDate());
            const start5 = parsingResult.start;
            start5.assign("month", date.getMonth() + 1);
            const start6 = parsingResult.start;
            start6.assign("year", date.getFullYear());
          } else {
            start2.imply("day", date.getDate());
            const start3 = parsingResult.start;
            start3.imply("month", date.getMonth() + 1);
            const start4 = parsingResult.start;
            start4.imply("year", date.getFullYear());
          }
          return parsingResult;
        }
        date.setDate(date.getDate() + (tmp2 - 7 - day));
        flag = true;
      }
    }
  }
];

export default _createClass(ZHHantRelationWeekdayParser, items);