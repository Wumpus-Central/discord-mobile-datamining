// === Module 10586: ? ===

// Module 10586
import _mod10559 from "module_10559" /* 10559 */;
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 10560 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10567 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

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
  } catch (err) {
  }
}
const regExp = new RegExp("(?:(?:\\,|\\(|\\\uFF08)\\s*)?(?:on\\s*?)?(?:(this|last|past|next)\\s*)?(" + repeatedTimeunitPattern.matchAnyPattern(_mod10559.WEEKDAY_DICTIONARY) + "|weekend|weekday)(?:\\s*(?:\\,|\\)|\\\uFF09))?(?:\\s*(this|last|past|next)\\s*week)?(?=\\W|$)", "i");
class ENWeekdayParser {
  constructor() {
    self = this;
    tmp = c2(this, ENWeekdayParser);
    tmp2 = closure_4;
    obj = closure_4(ENWeekdayParser);
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
_inherits(ENWeekdayParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
    value: function innerExtract(reference, arg1) {
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
      if (undefined !== ENWeekdayParser(10559).WEEKDAY_DICTIONARY[formatted1]) {
        let sum = ENWeekdayParser(10559).WEEKDAY_DICTIONARY[formatted1];
      } else if ("weekend" == formatted1) {
        if ("last" == str2) {
          let SATURDAY = ENWeekdayParser(10565).Weekday.SUNDAY;
        } else {
          SATURDAY = ENWeekdayParser(10565).Weekday.SATURDAY;
        }
        sum = SATURDAY;
      } else if ("weekday" != formatted1) {
        return null;
      } else {
        reference = reference.reference;
        const dateWithAdjustedTimezone = reference.getDateWithAdjustedTimezone();
        const day = dateWithAdjustedTimezone.getDay();
        if (day != ENWeekdayParser(10565).Weekday.SUNDAY) {
          if (day != ENWeekdayParser(10565).Weekday.SATURDAY) {
            const diff = day - 1;
            sum = ("last" == str2 ? diff - 1 : diff + 1) % 5 + 1;
          }
        }
        if ("last" == str2) {
          let MONDAY = ENWeekdayParser(10565).Weekday.FRIDAY;
        } else {
          MONDAY = ENWeekdayParser(10565).Weekday.MONDAY;
        }
        sum = MONDAY;
      }
      return ENWeekdayParser(10587).createParsingComponentsAtWeekday(reference.reference, sum, str2);
    }
  }
];

export default _createClass(ENWeekdayParser, items);