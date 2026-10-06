// === Module 10305: AbstractParserWithLeftBoundaryChecking ===

// Module 10305 (AbstractParserWithLeftBoundaryChecking)
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10181 */;
import REGEX_PARTS from "REGEX_PARTS" /* 10303 */;
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
class AbstractParserWithLeftBoundaryChecking {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, AbstractParserWithLeftBoundaryChecking);
    const obj = _getPrototypeOf(AbstractParserWithLeftBoundaryChecking);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(AbstractParserWithLeftBoundaryChecking, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
    value: function innerPattern(arg0) {
      const innerPatternStringResult = this.innerPatternString(arg0);
      const regExp = new RegExp(innerPatternStringResult, REGEX_PARTS.REGEX_PARTS.flags);
      return regExp;
    }
  },
  {
    key: "innerPatternHasChange",
    value: function innerPatternHasChange(arg0, arg1) {
      return false;
    }
  }
];
const _moduleResult = _createClass(AbstractParserWithLeftBoundaryChecking, items);
class AbstractParserWithLeftRightBoundaryChecking {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, AbstractParserWithLeftRightBoundaryChecking);
    const obj = _getPrototypeOf(AbstractParserWithLeftRightBoundaryChecking);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(AbstractParserWithLeftRightBoundaryChecking, _moduleResult);
const entry1 = {
  key: "innerPattern",
  value: function innerPattern(arg0) {
    const innerPatternStringResult = this.innerPatternString(arg0);
    const combined = "" + innerPatternStringResult + REGEX_PARTS.REGEX_PARTS.rightBoundary;
    const regExp = new RegExp(combined, REGEX_PARTS.REGEX_PARTS.flags);
    return regExp;
  }
};
const items1 = [entry1];
const AbstractParserWithLeftBoundaryChecking_export = _moduleResult;
const AbstractParserWithLeftRightBoundaryChecking_export = _createClass(AbstractParserWithLeftRightBoundaryChecking, items1);

export { AbstractParserWithLeftBoundaryChecking_export as AbstractParserWithLeftBoundaryChecking };
export { AbstractParserWithLeftRightBoundaryChecking_export as AbstractParserWithLeftRightBoundaryChecking };