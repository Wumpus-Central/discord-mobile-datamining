// _runtime/metro/10588__.js
import AbstractParserWithWordBoundaryChecking from "../10439_AbstractParserWithWordBoundaryChecking.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

let AbstractParserWithLeftRightBoundaryChecking = require;
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
  } catch (err) {}
}
class AbstractParserWithLeftBoundaryChecking {
  constructor() {
    self = this;
    tmp = c2(this, AbstractParserWithLeftRightBoundaryChecking);
    tmp2 = closure_4;
    obj = closure_4(AbstractParserWithLeftRightBoundaryChecking);
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
AbstractParserWithLeftRightBoundaryChecking = AbstractParserWithLeftBoundaryChecking;
_inherits(
  AbstractParserWithLeftBoundaryChecking,
  AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking,
);
const entry = {
  key: "patternLeftBoundary",
  value: function patternLeftBoundary() {
    return AbstractParserWithLeftRightBoundaryChecking(10586).REGEX_PARTS.leftBoundary;
  },
};
const items = [
  entry,
  {
    key: "innerPattern",
    value: function innerPattern(arg0) {
      const regExp = new RegExp(
        this.innerPatternString(arg0),
        AbstractParserWithLeftRightBoundaryChecking(10586).REGEX_PARTS.flags,
      );
      return regExp;
    },
  },
  {
    key: "innerPatternHasChange",
    value: function innerPatternHasChange(arg0, arg1) {
      return false;
    },
  },
];
const _moduleResult = _createClass(AbstractParserWithLeftBoundaryChecking, items);
class AbstractParserWithLeftRightBoundaryChecking {
  constructor() {
    self = this;
    tmp = c2(this, AbstractParserWithLeftRightBoundaryChecking);
    tmp2 = closure_4;
    obj = closure_4(AbstractParserWithLeftRightBoundaryChecking);
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
_inherits(AbstractParserWithLeftRightBoundaryChecking, _moduleResult);
const entry1 = {
  key: "innerPattern",
  value: function innerPattern(arg0) {
    const combined =
      "" + this.innerPatternString(arg0) + AbstractParserWithLeftRightBoundaryChecking(10586).REGEX_PARTS.rightBoundary;
    const regExp = new RegExp(combined, AbstractParserWithLeftRightBoundaryChecking(10586).REGEX_PARTS.flags);
    return regExp;
  },
};
const items1 = [entry1];

export const AbstractParserWithLeftBoundaryChecking = _moduleResult;
export const AbstractParserWithLeftRightBoundaryChecking = _createClass(
  AbstractParserWithLeftRightBoundaryChecking,
  items1,
);
