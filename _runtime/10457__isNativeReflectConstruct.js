// === Module 10457: _isNativeReflectConstruct ===

// Module 10457 (_isNativeReflectConstruct)
import WEEKDAY_DICTIONARY from "WEEKDAY_DICTIONARY" /* 10445 */;
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 10446 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10453 */;
import closure_2 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const ENYearMonthDayParser = require;
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
const regExp = new RegExp("([0-9]{4})[-\\.\\/\\s](?:(" + repeatedTimeunitPattern.matchAnyPattern(WEEKDAY_DICTIONARY.MONTH_DICTIONARY) + ")|([0-9]{1,2}))[-\\.\\/\\s]([0-9]{1,2})(?=\\W|$)", "i");
class ENYearMonthDayParser {
  constructor(arg0) {
    self = this;
    tmp = closure_2(this, ENYearMonthDayParser);
    tmp2 = closure_4;
    obj = closure_4(ENYearMonthDayParser);
    tmp3 = closure_3;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.strictMonthDateOrder = global;
    return tmp3Result;
  }
}
_inherits(ENYearMonthDayParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
let items = [
  {
    key: "innerPattern",
    value: function innerPattern() {
      return regExp;
    }
  },
  {
    key: "innerExtract",
    value: function innerExtract(arg0, arg1) {
      const parsed = parseInt(arg1[1]);
      const parsed1 = parseInt(arg1[4]);
      if (arg1[3]) {
        const _parseInt = parseInt;
        let parsed2 = parseInt(arg1[3]);
      } else {
        parsed2 = ENYearMonthDayParser(10445).MONTH_DICTIONARY[str.toLowerCase(str)];
      }
      if (parsed2 < 1) {
        const self = this;
        if (this.strictMonthDateOrder) {
          return null;
        } else {
          tmp6 = parsed2;
          tmp7 = parsed1;
          if (parsed1 >= 1) {
            tmp6 = parsed2;
            tmp7 = parsed1;
            if (parsed1 <= 12) {
              const items = [parsed1, parsed2];
              [tmp6, tmp7] = items;
            }
          }
        }
      } else {
        tmp6 = parsed2;
        tmp7 = parsed1;
      }
      let tmp8 = null;
      if (tmp7 >= 1) {
        tmp8 = null;
        if (tmp7 <= 31) {
          const obj = { day: null, month: null, year: null };
          obj[0] = tmp7;
          obj[1] = tmp6;
          obj[2] = parsed;
          tmp8 = obj;
        }
      }
      return tmp8;
    }
  }
];

export default _createClass(ENYearMonthDayParser, items);