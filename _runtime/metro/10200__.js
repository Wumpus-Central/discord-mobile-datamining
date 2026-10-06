// === Module 10200: ? ===

// Module 10200
import _mod10173 from "module_10173" /* 10173 */;
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 10174 */;
import Meridiem from "Meridiem" /* 10179 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10181 */;
import _mod10201 from "module_10201" /* 10201 */;
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
const regExp = new RegExp("(?:(?:\\,|\\(|\\\uFF08)\\s*)?(?:on\\s*?)?(?:(this|last|past|next)\\s*)?(" + repeatedTimeunitPattern.matchAnyPattern(_mod10173.WEEKDAY_DICTIONARY) + "|weekend|weekday)(?:\\s*(?:\\,|\\)|\\\uFF09))?(?:\\s*(this|last|past|next)\\s*week)?(?=\\W|$)", "i");
class ENWeekdayParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ENWeekdayParser);
    const obj = _getPrototypeOf(ENWeekdayParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
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
      let sum;
      const str = arg1[1] || arg1[3] || "";
      const formatted = str.toLowerCase();
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
      const str6 = arg1[2];
      const formatted1 = str6.toLowerCase();
      if (undefined !== _mod10173.WEEKDAY_DICTIONARY[formatted1]) {
        sum = _mod10173.WEEKDAY_DICTIONARY[formatted1];
      } else if ("weekend" == formatted1) {
        let SATURDAY;
        if ("last" == str2) {
          SATURDAY = Meridiem.Weekday.SUNDAY;
        } else {
          SATURDAY = Meridiem.Weekday.SATURDAY;
        }
        sum = SATURDAY;
      } else if ("weekday" != formatted1) {
        return null;
      } else {
        let MONDAY;
        reference = reference.reference;
        const dateWithAdjustedTimezone = reference.getDateWithAdjustedTimezone();
        const day = dateWithAdjustedTimezone.getDay();
        if (day != Meridiem.Weekday.SUNDAY) {
          if (day != Meridiem.Weekday.SATURDAY) {
            const diff = day - 1;
            sum = ("last" == str2 ? diff - 1 : diff + 1) % 5 + 1;
          }
        }
        if ("last" == str2) {
          MONDAY = Meridiem.Weekday.FRIDAY;
        } else {
          MONDAY = Meridiem.Weekday.MONDAY;
        }
        sum = MONDAY;
      }
      return _mod10201.createParsingComponentsAtWeekday(reference.reference, sum, str2);
    }
  }
];

export default _createClass(ENWeekdayParser, items);