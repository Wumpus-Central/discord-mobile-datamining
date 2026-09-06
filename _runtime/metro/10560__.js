// === Module 10560: ? ===

// Module 10560
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10439 */;
import REGEX_PARTS from "REGEX_PARTS" /* 10561 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const RUTimeUnitWithinFormatParser = require;
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
let closure_6 = "(?:(?:\u043E\u043A\u043E\u043B\u043E|\u043F\u0440\u0438\u043C\u0435\u0440\u043D\u043E)\\s*(?:~\\s*)?)?(" + REGEX_PARTS.TIME_UNITS_PATTERN + ")" + REGEX_PARTS.REGEX_PARTS.rightBoundary;
class RUTimeUnitWithinFormatParser {
  constructor() {
    self = this;
    tmp = c2(this, RUTimeUnitWithinFormatParser);
    tmp2 = closure_4;
    obj = closure_4(RUTimeUnitWithinFormatParser);
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
_inherits(RUTimeUnitWithinFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "patternLeftBoundary",
  value: function patternLeftBoundary() {
    return RUTimeUnitWithinFormatParser(10561).REGEX_PARTS.leftBoundary;
  }
};
const items = [
  entry,
  {
    key: "innerPattern",
    value: function innerPattern(option) {
      let _RegExp = RegExp;
      if (option.option.forwardDate) {
        _RegExp = new _RegExp(closure_6, RUTimeUnitWithinFormatParser(10561).REGEX_PARTS.flags);
      } else {
        const _HermesInternal = HermesInternal;
        const combined = "(?:\u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435|\u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0438)\\s*" + closure_6;
        _RegExp = new _RegExp(combined, RUTimeUnitWithinFormatParser(10561).REGEX_PARTS.flags);
      }
      return _RegExp;
    }
  },
  {
    key: "innerExtract",
    value: function innerExtract(reference, arg1) {
      const ParsingComponents = RUTimeUnitWithinFormatParser(10435).ParsingComponents;
      return ParsingComponents.createRelativeFromReference(reference.reference, RUTimeUnitWithinFormatParser(10561).parseDuration(arg1[1]));
    }
  }
];

export default _createClass(RUTimeUnitWithinFormatParser, items);