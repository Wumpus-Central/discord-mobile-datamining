// === Module 10361: ? ===

// Module 10361
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 10174 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10181 */;
import _mod10201 from "module_10201" /* 10201 */;
import _mod10362 from "module_10362" /* 10362 */;
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
const regExp = new RegExp("(?:(?:\\,|\\(|\\\uFF08)\\s*)?(?:p\u00E5\\s*?)?(?:(f\u00F6rra|senaste|n\u00E4sta|kommande)\\s*)?(" + repeatedTimeunitPattern.matchAnyPattern(_mod10362.WEEKDAY_DICTIONARY) + ")(?:\\s*(?:\\,|\\)|\\\uFF09))?(?:\\s*(f\u00F6rra|senaste|n\u00E4sta|kommande)\\s*vecka)?(?=\\W|$)", "i");
class SVWeekdayParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, SVWeekdayParser);
    const obj = _getPrototypeOf(SVWeekdayParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(SVWeekdayParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
      const str = arg1[2];
      const formatted = str.toLowerCase();
      let str2 = arg1[1];
      const tmp4 = _mod10362.WEEKDAY_DICTIONARY[formatted];
      if (!str2) {
        str2 = arg1[3];
      }
      if (!str2) {
        str2 = "";
      }
      const str3 = str2.toLowerCase();
      let str4 = "last";
      if (!str3.match(/förra|senaste/)) {
        str4 = null;
        if (str3.match(/nästa|kommande/)) {
          str4 = "next";
        }
      }
      return _mod10201.createParsingComponentsAtWeekday(reference.reference, tmp4, str4);
    }
  }
];

export default _createClass(SVWeekdayParser, items);