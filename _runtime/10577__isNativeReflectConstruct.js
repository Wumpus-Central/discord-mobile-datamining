// _runtime/10577__isNativeReflectConstruct.js
import AbstractParserWithWordBoundaryChecking from "10453_AbstractParserWithWordBoundaryChecking.js";
import closure_2 from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import closure_3 from "metro/00093__possibleConstructorReturn.js";
import closure_4 from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";

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
    tmp = closure_2(this, AbstractParserWithLeftRightBoundaryChecking);
    tmp2 = closure_4;
    obj = closure_4(AbstractParserWithLeftRightBoundaryChecking);
    tmp3 = closure_3;
    if (_isNativeReflectConstruct()) {
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
let obj = {
  key: "patternLeftBoundary",
  value: function patternLeftBoundary() {
    return AbstractParserWithLeftRightBoundaryChecking(10575).REGEX_PARTS.leftBoundary;
  },
};
const items = [
  obj,
  {
    key: "innerPattern",
    value: function innerPattern(arg0) {
      const regExp = new RegExp(
        this.innerPatternString(arg0),
        AbstractParserWithLeftRightBoundaryChecking(10575).REGEX_PARTS.flags,
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
    tmp = closure_2(this, AbstractParserWithLeftRightBoundaryChecking);
    tmp2 = closure_4;
    obj = closure_4(AbstractParserWithLeftRightBoundaryChecking);
    tmp3 = closure_3;
    if (_isNativeReflectConstruct()) {
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
obj = {
  key: "innerPattern",
  value: function innerPattern(arg0) {
    const combined =
      "" + this.innerPatternString(arg0) + AbstractParserWithLeftRightBoundaryChecking(10575).REGEX_PARTS.rightBoundary;
    const regExp = new RegExp(combined, AbstractParserWithLeftRightBoundaryChecking(10575).REGEX_PARTS.flags);
    return regExp;
  },
};
const items1 = [obj];

export const AbstractParserWithLeftBoundaryChecking = _moduleResult;
export const AbstractParserWithLeftRightBoundaryChecking = _createClass(
  AbstractParserWithLeftRightBoundaryChecking,
  items1,
);
