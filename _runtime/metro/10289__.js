// === Module 10289: ? ===

// Module 10289
import ReferenceWithTimezone from "ReferenceWithTimezone" /* 10164 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10168 */;
import REGEX_PARTS from "REGEX_PARTS" /* 10290 */;
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
let closure_6 = "(?:(?:\u043E\u043A\u043E\u043B\u043E|\u043F\u0440\u0438\u043C\u0435\u0440\u043D\u043E)\\s*(?:~\\s*)?)?(" + REGEX_PARTS.TIME_UNITS_PATTERN + ")" + REGEX_PARTS.REGEX_PARTS.rightBoundary;
class RUTimeUnitWithinFormatParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, RUTimeUnitWithinFormatParser);
    const obj = _getPrototypeOf(RUTimeUnitWithinFormatParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(RUTimeUnitWithinFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "patternLeftBoundary",
  value: function patternLeftBoundary() {
    return REGEX_PARTS.REGEX_PARTS.leftBoundary;
  }
};
const items = [
  entry,
  {
    key: "innerPattern",
    value: function innerPattern(option) {
      let _RegExp1;
      const _RegExp = RegExp;
      if (option.option.forwardDate) {
        const self3 = this;
        const self4 = this;
        _RegExp1 = new _RegExp(closure_6, REGEX_PARTS.REGEX_PARTS.flags);
      } else {
        const _HermesInternal = HermesInternal;
        const combined = "(?:\u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435|\u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0438)\\s*" + closure_6;
        const self = this;
        const self2 = this;
        _RegExp1 = new _RegExp(combined, REGEX_PARTS.REGEX_PARTS.flags);
      }
      return _RegExp1;
    }
  },
  {
    key: "innerExtract",
    value: function innerExtract(reference, arg1) {
      const parseDurationResult = REGEX_PARTS.parseDuration(arg1[1]);
      const ParsingComponents = ReferenceWithTimezone.ParsingComponents;
      return ParsingComponents.createRelativeFromReference(reference.reference, parseDurationResult);
    }
  }
];

export default _createClass(RUTimeUnitWithinFormatParser, items);