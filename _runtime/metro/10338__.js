// _runtime/metro/10338__.js
import repeatedTimeunitPattern from "../10174_repeatedTimeunitPattern.js";
import _mod10201 from "10201__.js";
import _mod10328 from "10328__.js";
import _mod10330 from "10330__.js";
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
class UKWeekdayParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, UKWeekdayParser);
    const obj = _getPrototypeOf(UKWeekdayParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(UKWeekdayParser, _mod10330.AbstractParserWithLeftRightBoundaryChecking);
const entry = {
  key: "innerPatternString",
  value: function innerPatternString(arg0) {
    return (
      "(?:(?:,|\\(|\uFF08)\\s*)?(?:\u0432\\s*?)?(?:\u0443\\s*?)?(?:(\u0446\u0435\u0439|\u043C\u0438\u043D\u0443\u043B\u043E\u0433\u043E|\u043C\u0438\u043D\u0443\u043B\u0438\u0439|\u043F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u0456\u0439|\u043F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u044C\u043E\u0433\u043E|\u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u0433\u043E|\u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0439|\u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u043C\u0443)\\s*)?(" +
      repeatedTimeunitPattern.matchAnyPattern(_mod10328.WEEKDAY_DICTIONARY) +
      ")(?:\\s*(?:,|\\)|\uFF09))?(?:\\s*(\u043D\u0430|\u0443|\u0432)\\s*(\u0446\u044C\u043E\u043C\u0443|\u043C\u0438\u043D\u0443\u043B\u043E\u043C\u0443|\u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u043C\u0443)\\s*\u0442\u0438\u0436\u043D\u0456)?"
    );
  },
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(reference, arg1) {
      let str = arg1[1];
      const obj = arg1[2];
      const toLocaleLowerCaseResult = obj.toLocaleLowerCase();
      const tmp4 = _mod10328.WEEKDAY_DICTIONARY[toLocaleLowerCaseResult];
      if (!str) {
        str = arg1[3];
      }
      if (!str) {
        str = "";
      }
      const toLocaleLowerCaseResult1 = str.toLocaleLowerCase();
      let str2 = "last";
      if ("\u043C\u0438\u043D\u0443\u043B\u043E\u0433\u043E" != toLocaleLowerCaseResult1) {
        str2 = "last";
        if ("\u043C\u0438\u043D\u0443\u043B\u0438\u0439" != toLocaleLowerCaseResult1) {
          str2 = "last";
          if ("\u043F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u0456\u0439" != toLocaleLowerCaseResult1) {
            str2 = "last";
            if (
              "\u043F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u044C\u043E\u0433\u043E" != toLocaleLowerCaseResult1
            ) {
              str2 = "next";
              if ("\u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u0433\u043E" != toLocaleLowerCaseResult1) {
                str2 = "next";
                if ("\u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0439" != toLocaleLowerCaseResult1) {
                  str2 = null;
                  const tmp6 =
                    "\u0446\u0435\u0439" != toLocaleLowerCaseResult1 &&
                    "\u0446\u044C\u043E\u0433\u043E" != toLocaleLowerCaseResult1 &&
                    "\u0446\u044C\u043E\u043C\u0443" != toLocaleLowerCaseResult1;
                  if (!tmp6) {
                    str2 = "this";
                  }
                }
              }
            }
          }
        }
      }
      return _mod10201.createParsingComponentsAtWeekday(reference.reference, tmp4, str2);
    },
  },
];

export default _createClass(UKWeekdayParser, items);
