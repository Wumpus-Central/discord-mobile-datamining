// === Module 6782: _isNativeReflectConstruct ===

// Module 6782 (_isNativeReflectConstruct)
import _inheritsDefault from "_inherits" /* 98 */;
import ForceTouchGesture from "_classCallCheck" /* 41 */;
import closure_1 from "_possibleConstructorReturn" /* 93 */;
import closure_2 from "_getPrototypeOf" /* 95 */;
import closure_3 from "_get" /* 96 */;
import importDefaultResult from "_createClass" /* 42 */;

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
function changeEventCalculator(force, force2) {
  if (undefined === force2) {
    let obj = { forceChange: null };
    obj[0] = force.force;
  } else {
    obj = { forceChange: null };
    obj[0] = force.force - force2.force;
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
    tmp = ForceTouchGesture(this, ForceTouchGesture);
    tmp2 = closure_2;
    obj = closure_2(ForceTouchGesture);
    tmp3 = closure_1;
    if (_isNativeReflectConstruct()) {
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
_inheritsDefault(ForceTouchGesture, require("_isNativeReflectConstruct").ContinousBaseGesture);
let items = [
  {
    key: "minForce",
    value: function minForce(minForce) {
      this.config.minForce = minForce;
      return this;
    }
  },
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
      this.handlers.changeEventCalculator = changeEventCalculator;
      const self = this;
      let fn;
      fn = callback2(callback(self.prototype), "onChange", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [arg0];
      return fn(items);
    }
  }
];

export const ForceTouchGesture = importDefaultResult(ForceTouchGesture, items);