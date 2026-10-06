// _runtime/metro/10185__.js
import _mod10173 from "10173__.js";
import repeatedTimeunitPattern from "../10174_repeatedTimeunitPattern.js";
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
const regExp = new RegExp(
  "([0-9]{4})[-\\.\\/\\s](?:(" +
    repeatedTimeunitPattern.matchAnyPattern(_mod10173.MONTH_DICTIONARY) +
    ")|([0-9]{1,2}))[-\\.\\/\\s]([0-9]{1,2})(?=\\W|$)",
  "i",
);
class ENYearMonthDayParser {
  constructor(strictMonthDateOrder) {
    let constructResult;
    const self = this;
    _classCallCheck(this, ENYearMonthDayParser);
    const obj = _getPrototypeOf(ENYearMonthDayParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    const tmp3Result = c3(self, constructResult);
    tmp3Result.strictMonthDateOrder = strictMonthDateOrder;
    return tmp3Result;
  }
}
_inherits(ENYearMonthDayParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern() {
    return regExp;
  },
};
let items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(arg0, arg1) {
      let parsed2;
      let tmp6;
      let tmp7;
      const parsed = parseInt(arg1[1]);
      const parsed1 = parseInt(arg1[4]);
      if (arg1[3]) {
        const _parseInt = parseInt;
        parsed2 = parseInt(arg1[3]);
      } else {
        parsed2 = _mod10173.MONTH_DICTIONARY[str.toLowerCase(str)];
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
          tmp8 = { day: tmp7, month: tmp6, year: parsed };
          const date = { day: tmp7, month: tmp6, year: parsed };
        }
      }
      return tmp8;
    },
  },
];

export default _createClass(ENYearMonthDayParser, items);
