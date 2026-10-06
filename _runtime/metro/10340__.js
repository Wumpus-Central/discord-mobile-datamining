// === Module 10340: ? ===

// Module 10340
import EmptyDuration from "EmptyDuration" /* 10176 */;
import ReferenceWithTimezone from "ReferenceWithTimezone" /* 10177 */;
import _mod10328 from "module_10328" /* 10328 */;
import _mod10330 from "module_10330" /* 10330 */;
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
class UKTimeUnitCasualRelativeFormatParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, UKTimeUnitCasualRelativeFormatParser);
    const obj = _getPrototypeOf(UKTimeUnitCasualRelativeFormatParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(UKTimeUnitCasualRelativeFormatParser, _mod10330.AbstractParserWithLeftRightBoundaryChecking);
const entry = {
  key: "innerPatternString",
  value: function innerPatternString(arg0) {
    return "(\u0446\u0456|\u043E\u0441\u0442\u0430\u043D\u043D\u0456|\u043C\u0438\u043D\u0443\u043B\u0456|\u043C\u0430\u0439\u0431\u0443\u0442\u043D\u0456|\u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0456|\u043F\u0456\u0441\u043B\u044F|\u0447\u0435\u0440\u0435\u0437|\\+|-)\\s*(" + _mod10328.TIME_UNITS_PATTERN + ")";
  }
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(reference, arg1) {
      const str = arg1[1];
      const formatted = str.toLowerCase();
      const parseDurationResult = _mod10328.parseDuration(arg1[3]);
      if ("\u043E\u0441\u0442\u0430\u043D\u043D\u0456" !== formatted) {
        let reverseDurationResult;
        if ("\u043C\u0438\u043D\u0443\u043B\u0456" !== formatted) {
          reverseDurationResult = parseDurationResult;
        }
        const ParsingComponents = ReferenceWithTimezone.ParsingComponents;
        return ParsingComponents.createRelativeFromReference(reference.reference, reverseDurationResult);
      }
      reverseDurationResult = EmptyDuration.reverseDuration(parseDurationResult);
    }
  }
];

export default _createClass(UKTimeUnitCasualRelativeFormatParser, items);