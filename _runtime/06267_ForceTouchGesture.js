// === Module 6267: ForceTouchGesture ===

// Module 6267 (ForceTouchGesture)
import CALLBACK_TYPE from "CALLBACK_TYPE" /* 6161 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import map from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _get from "_get" /* 96 */;
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
function changeEventCalculator(force, force2) {
  let obj;
  if (undefined === force2) {
    obj = { forceChange: force.force };
    const obj2 = { forceChange: force.force };
  } else {
    obj = { forceChange: force.force - force2.force };
  }
  const obj3 = {};
  const merged = Object.assign(force);
  const merged1 = Object.assign(obj);
  return obj3;
}
changeEventCalculator.__closure = {};
changeEventCalculator.__workletHash = 11365193947542;
changeEventCalculator.__initData = { code: "function changeEventCalculator_Pnpm_forceTouchGestureTs1(current,previous){let changePayload;if(previous===undefined){changePayload={forceChange:current.force};}else{changePayload={forceChange:current.force-previous.force};}return{...current,...changePayload};}" };
class ForceTouchGesture {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ForceTouchGesture);
    const obj = _getPrototypeOf(ForceTouchGesture);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    const tmp3Result = map(self, constructResult);
    tmp3Result.config = {};
    tmp3Result.handlerName = "ForceTouchGestureHandler";
    return tmp3Result;
  }
}
_inherits(ForceTouchGesture, CALLBACK_TYPE.ContinousBaseGesture);
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
      this.handlers.changeEventCalculator = changeEventCalculator;
      const self = this;
      let fn = _get(_getPrototypeOf(ForceTouchGesture.prototype), "onChange", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [arg0];
      return fn(items);
    }
  }
];
const ForceTouchGesture_export = _createClass(ForceTouchGesture, items);

export { ForceTouchGesture_export as ForceTouchGesture };