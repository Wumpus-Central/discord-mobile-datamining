// _runtime/metro/10308__.js
import EmptyDuration from "../10176_EmptyDuration.js";
import ReferenceWithTimezone from "../10177_ReferenceWithTimezone.js";
import REGEX_PARTS from "../10303_REGEX_PARTS.js";
import AbstractParserWithLeftBoundaryChecking from "../10305_AbstractParserWithLeftBoundaryChecking.js";
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
class RUTimeUnitAgoFormatParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, RUTimeUnitAgoFormatParser);
    const obj = _getPrototypeOf(RUTimeUnitAgoFormatParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(RUTimeUnitAgoFormatParser, AbstractParserWithLeftBoundaryChecking.AbstractParserWithLeftBoundaryChecking);
const entry = {
  key: "innerPatternString",
  value: function innerPatternString(arg0) {
    return "(" + REGEX_PARTS.TIME_UNITS_PATTERN + ")\\s{0,5}\u043D\u0430\u0437\u0430\u0434(?=(?:\\W|$))";
  },
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(reference, arg1) {
      const parseDurationResult = REGEX_PARTS.parseDuration(arg1[1]);
      const reverseDurationResult = EmptyDuration.reverseDuration(parseDurationResult);
      const ParsingComponents = ReferenceWithTimezone.ParsingComponents;
      return ParsingComponents.createRelativeFromReference(reference.reference, reverseDurationResult);
    },
  },
];

export default _createClass(RUTimeUnitAgoFormatParser, items);
