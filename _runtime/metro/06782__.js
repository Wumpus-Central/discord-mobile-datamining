// === Module 6782: ? ===

// Module 6782
import _possibleConstructorReturnDefault from "_possibleConstructorReturn" /* 93 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _get from "_get" /* 96 */;
import _inherits from "_inherits" /* 98 */;

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
  } catch (err) {
  }
}
_possibleConstructorReturnDefault;
function changeEventCalculator(force, force2) {
  if (undefined === force2) {
    let obj = { forceChange: force.force };
  } else {
    obj = { forceChange: force.force - force2.force };
  }
  obj = {};
  const merged = Object.assign(force);
  const merged1 = Object.assign(obj);
  return obj;
}
changeEventCalculator.__closure = {};
changeEventCalculator.__workletHash = 11365193947542;
changeEventCalculator.__initData = { code: "function changeEventCalculator_Pnpm_forceTouchGestureTs1(current,previous){let changePayload;if(previous===undefined){changePayload={forceChange:current.force};}else{changePayload={forceChange:current.force-previous.force};}return{...current,...changePayload};}" };
class ForceTouchGesture {
  constructor() {
    self = this;
    tmp = closure_0(this, ForceTouchGesture);
    tmp2 = c2;
    obj = c2(ForceTouchGesture);
    tmp3 = closure_1;
    if (closure_4()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.config = {};
    tmp3Result.handlerName = "ForceTouchGestureHandler";
    return tmp3Result;
  }
}
_classCallCheck = ForceTouchGesture;
_inherits(ForceTouchGesture, fn(6676).ContinousBaseGesture);
const entry = {
  key: "minForce",
  value: function minForce(minForce) {
    this.config.minForce = minForce;
    return this;
  }
};
let items = [
  entry,
  {
    key: "maxForce",
    value: function maxForce(maxForce) {
      this.config.maxForce = maxForce;
      return this;
    }
  },
  {
    key: "feedbackOnActivation",
    value: function feedbackOnActivation(feedbackOnActivation) {
      this.config.feedbackOnActivation = feedbackOnActivation;
      return this;
    }
  },
  {
    key: "onChange",
    value: function onChange(arg0) {
      this.handlers.changeEventCalculator = hasOwnProperty;
      const self = this;
      let fn = _get(_getPrototypeOf(_classCallCheck.prototype), "onChange", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [arg0];
      return fn(items);
    }
  }
];

export const ForceTouchGesture = _createClass(ForceTouchGesture, items);