// === Module 10276: ? ===

// Module 10276
import EmptyDuration from "EmptyDuration" /* 10176 */;
import ReferenceWithTimezone from "ReferenceWithTimezone" /* 10177 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10181 */;
import _mod10268 from "module_10268" /* 10268 */;
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
const regExp = new RegExp("(dit|deze|vorig|afgelopen|(?:aan)?komend|over|\\+|-)e?\\s*(" + _mod10268.TIME_UNITS_PATTERN + ")(?=\\W|$)", "i");
class NLTimeUnitCasualRelativeFormatParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, NLTimeUnitCasualRelativeFormatParser);
    const obj = _getPrototypeOf(NLTimeUnitCasualRelativeFormatParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(NLTimeUnitCasualRelativeFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
      const str = arg1[1];
      const formatted = str.toLowerCase();
      const parseDurationResult = _mod10268.parseDuration(arg1[2]);
      if ("vorig" !== formatted) {
        let reverseDurationResult;
        if ("afgelopen" !== formatted) {
          reverseDurationResult = parseDurationResult;
        }
        const ParsingComponents = ReferenceWithTimezone.ParsingComponents;
        return ParsingComponents.createRelativeFromReference(reference.reference, reverseDurationResult);
      }
      reverseDurationResult = EmptyDuration.reverseDuration(parseDurationResult);
    }
  }
];

export default _createClass(NLTimeUnitCasualRelativeFormatParser, items);