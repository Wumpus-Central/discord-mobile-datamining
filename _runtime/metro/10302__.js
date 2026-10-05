// _runtime/metro/10302__.js
import EmptyDuration from "../10163_EmptyDuration.js";
import ReferenceWithTimezone from "../10164_ReferenceWithTimezone.js";
import REGEX_PARTS from "../10290_REGEX_PARTS.js";
import AbstractParserWithLeftBoundaryChecking from "../10292_AbstractParserWithLeftBoundaryChecking.js";
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
_inherits(
  RUTimeUnitCasualRelativeFormatParser,
  AbstractParserWithLeftBoundaryChecking.AbstractParserWithLeftRightBoundaryChecking,
);
const entry = {
  key: "innerPatternString",
  value: function innerPatternString(arg0) {
    return (
      "(\u044D\u0442\u0438|\u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435|\u043F\u0440\u043E\u0448\u043B\u044B\u0435|\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435|\u043F\u043E\u0441\u043B\u0435|\u0441\u043F\u0443\u0441\u0442\u044F|\u0447\u0435\u0440\u0435\u0437|\\+|-)\\s*(" +
      REGEX_PARTS.TIME_UNITS_PATTERN +
      ")"
    );
  },
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
    },
  },
];

export default _createClass(RUTimeUnitCasualRelativeFormatParser, items);
