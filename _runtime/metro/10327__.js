// === Module 10327: ? ===

// Module 10327
import ReferenceWithTimezone from "ReferenceWithTimezone" /* 10177 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10181 */;
import _mod10328 from "module_10328" /* 10328 */;
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
let closure_6 = "(?:(?:\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E|\u043E\u0440\u0456\u0454\u043D\u0442\u043E\u0432\u043D\u043E)\\s*(?:~\\s*)?)?(" + _mod10328.TIME_UNITS_PATTERN + ")" + _mod10328.REGEX_PARTS.rightBoundary;
class UKTimeUnitWithinFormatParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, UKTimeUnitWithinFormatParser);
    const obj = _getPrototypeOf(UKTimeUnitWithinFormatParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(UKTimeUnitWithinFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "patternLeftBoundary",
  value: function patternLeftBoundary() {
    return _mod10328.REGEX_PARTS.leftBoundary;
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
        _RegExp1 = new _RegExp(closure_6, "i");
      } else {
        const _HermesInternal = HermesInternal;
        const combined = "(?:\u043F\u0440\u043E\u0442\u044F\u0433\u043E\u043C|\u043D\u0430 \u043F\u0440\u043E\u0442\u044F\u0437\u0456|\u043F\u0440\u043E\u0442\u044F\u0433\u043E\u043C|\u0443\u043F\u0440\u043E\u0434\u043E\u0432\u0436|\u0432\u043F\u0440\u043E\u0434\u043E\u0432\u0436)\\s*" + closure_6;
        const self = this;
        const self2 = this;
        _RegExp1 = new _RegExp(combined, _mod10328.REGEX_PARTS.flags);
      }
      return _RegExp1;
    }
  },
  {
    key: "innerExtract",
    value: function innerExtract(reference, arg1) {
      const parseDurationResult = _mod10328.parseDuration(arg1[1]);
      const ParsingComponents = ReferenceWithTimezone.ParsingComponents;
      return ParsingComponents.createRelativeFromReference(reference.reference, parseDurationResult);
    }
  }
];

export default _createClass(UKTimeUnitWithinFormatParser, items);