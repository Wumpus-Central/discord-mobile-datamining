// _runtime/10458__isNativeReflectConstruct.js
import WEEKDAY_DICTIONARY from "10431_WEEKDAY_DICTIONARY.js";
import repeatedTimeunitPattern from "10432_repeatedTimeunitPattern.js";
import AbstractParserWithWordBoundaryChecking from "10439_AbstractParserWithWordBoundaryChecking.js";
import closure_2 from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import closure_3 from "metro/00093__possibleConstructorReturn.js";
import closure_4 from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";

const ENWeekdayParser = require;
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
const regExp = new RegExp(
  "(?:(?:\\,|\\(|\\\uFF08)\\s*)?(?:on\\s*?)?(?:(this|last|past|next)\\s*)?(" +
    repeatedTimeunitPattern.matchAnyPattern(WEEKDAY_DICTIONARY.WEEKDAY_DICTIONARY) +
    "|weekend|weekday)(?:\\s*(?:\\,|\\)|\\\uFF09))?(?:\\s*(this|last|past|next)\\s*week)?(?=\\W|$)",
  "i",
);
class ENWeekdayParser {
  constructor() {
    self = this;
    tmp = closure_2(this, ENWeekdayParser);
    tmp2 = closure_4;
    obj = closure_4(ENWeekdayParser);
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
_inherits(ENWeekdayParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const items = [
  {
    key: "innerPattern",
    value: function innerPattern() {
      return regExp;
    },
  },
  {
    key: "innerExtract",
    value: function innerExtract(reference) {
      const formatted = arg1[1] || arg1[3] || "".toLowerCase();
      let str2 = "last";
      if ("last" != formatted) {
        str2 = "last";
        if ("past" != formatted) {
          str2 = "next";
          if ("next" != formatted) {
            str2 = null;
            if ("this" == formatted) {
              str2 = "this";
            }
          }
        }
      }
      const formatted1 = arg1[2].toLowerCase();
      if (undefined !== ENWeekdayParser(10431).WEEKDAY_DICTIONARY[formatted1]) {
        let sum = tmp3(10431).WEEKDAY_DICTIONARY[formatted1];
      } else if ("weekend" == formatted1) {
        if ("last" == str2) {
          let SATURDAY = tmp3(10437).Weekday.SUNDAY;
        } else {
          SATURDAY = tmp3(10437).Weekday.SATURDAY;
        }
        sum = SATURDAY;
      } else if ("weekday" != formatted1) {
        return null;
      } else {
        reference = reference.reference;
        const dateWithAdjustedTimezone = reference.getDateWithAdjustedTimezone();
        const day = dateWithAdjustedTimezone.getDay();
        if (day != tmp3(10437).Weekday.SUNDAY) {
          if (day != tmp3(10437).Weekday.SATURDAY) {
            const diff = day - 1;
            sum = (("last" == str2 ? diff - 1 : diff + 1) % 5) + 1;
          }
        }
        if ("last" == str2) {
          let MONDAY = tmp3(10437).Weekday.FRIDAY;
        } else {
          MONDAY = tmp3(10437).Weekday.MONDAY;
        }
        sum = MONDAY;
      }
      return ENWeekdayParser(10459).createParsingComponentsAtWeekday(reference.reference, sum, str2);
    },
  },
];

export default _createClass(ENWeekdayParser, items);
