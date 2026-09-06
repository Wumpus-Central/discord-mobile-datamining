// _runtime/metro/10477__.js
import repeatedTimeunitPattern from "../10432_repeatedTimeunitPattern.js";
import AbstractParserWithWordBoundaryChecking from "../10439_AbstractParserWithWordBoundaryChecking.js";
import _mod10478 from "10478__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

const DEWeekdayParser = require;
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
  "(?:(?:\\,|\\(|\\\uFF08)\\s*)?(?:a[mn]\\s*?)?(?:(diese[mn]|letzte[mn]|n(?:\u00E4|ae)chste[mn])\\s*)?(" +
    repeatedTimeunitPattern.matchAnyPattern(_mod10478.WEEKDAY_DICTIONARY) +
    ")(?:\\s*(?:\\,|\\)|\\\uFF09))?(?:\\s*(diese|letzte|n(?:\u00E4|ae)chste)\\s*woche)?(?=\\W|$)",
  "i",
);
class DEWeekdayParser {
  constructor() {
    self = this;
    tmp = c2(this, DEWeekdayParser);
    tmp2 = closure_4;
    obj = closure_4(DEWeekdayParser);
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
_inherits(DEWeekdayParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern() {
    return regExp;
  },
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(reference, arg1) {
      const formatted = arg1[2].toLowerCase();
      let str2 = arg1[1];
      if (!str2) {
        str2 = arg1[3];
      }
      if (!str2) {
        str2 = "";
      }
      const str3 = str2.toLowerCase();
      let str4 = "last";
      if (!str3.match(/letzte/)) {
        str4 = "next";
        if (!str3.match(/chste/)) {
          str4 = null;
          if (str3.match(/diese/)) {
            str4 = "this";
          }
        }
      }
      return DEWeekdayParser(10459).createParsingComponentsAtWeekday(
        reference.reference,
        DEWeekdayParser(10478).WEEKDAY_DICTIONARY[formatted],
        str4,
      );
    },
  },
];

export default _createClass(DEWeekdayParser, items);
