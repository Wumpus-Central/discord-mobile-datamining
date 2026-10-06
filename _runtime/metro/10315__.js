// === Module 10315: ? ===

// Module 10315
import EmptyDuration from "EmptyDuration" /* 10176 */;
import ReferenceWithTimezone from "ReferenceWithTimezone" /* 10177 */;
import REGEX_PARTS from "REGEX_PARTS" /* 10303 */;
import AbstractParserWithLeftBoundaryChecking from "AbstractParserWithLeftBoundaryChecking" /* 10305 */;
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
class RUTimeUnitCasualRelativeFormatParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, RUTimeUnitCasualRelativeFormatParser);
    const obj = _getPrototypeOf(RUTimeUnitCasualRelativeFormatParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(RUTimeUnitCasualRelativeFormatParser, AbstractParserWithLeftBoundaryChecking.AbstractParserWithLeftRightBoundaryChecking);
const entry = {
  key: "innerPatternString",
  value: function innerPatternString(arg0) {
    return "(\u044D\u0442\u0438|\u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435|\u043F\u0440\u043E\u0448\u043B\u044B\u0435|\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435|\u043F\u043E\u0441\u043B\u0435|\u0441\u043F\u0443\u0441\u0442\u044F|\u0447\u0435\u0440\u0435\u0437|\\+|-)\\s*(" + REGEX_PARTS.TIME_UNITS_PATTERN + ")";
  }
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(reference, arg1) {
      const str = arg1[1];
      const formatted = str.toLowerCase();
      const parseDurationResult = REGEX_PARTS.parseDuration(arg1[2]);
      if ("\u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435" !== formatted) {
        let reverseDurationResult;
        if ("\u043F\u0440\u043E\u0448\u043B\u044B\u0435" !== formatted) {
          reverseDurationResult = parseDurationResult;
        }
        const ParsingComponents = ReferenceWithTimezone.ParsingComponents;
        return ParsingComponents.createRelativeFromReference(reference.reference, reverseDurationResult);
      }
      reverseDurationResult = EmptyDuration.reverseDuration(parseDurationResult);
    }
  }
];

export default _createClass(RUTimeUnitCasualRelativeFormatParser, items);