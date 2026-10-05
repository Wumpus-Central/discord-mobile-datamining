// _runtime/01727_ComplexAnimationBuilder.js
import _mod1714 from "metro/01714__.js";
import _mod1715 from "metro/01715__.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import c3 from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";

let value;

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
class ComplexAnimationBuilder {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ComplexAnimationBuilder);
    const obj = _getPrototypeOf(ComplexAnimationBuilder);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(ComplexAnimationBuilder, _mod1714.BaseAnimationBuilder);
const entry = {
  key: "easing",
  value: function easing(easingV) {
    this.easingV = easingV;
    return this;
  },
};
let items = [
  entry,
  {
    key: "rotate",
    value: function rotate(rotateV) {
      this.rotateV = rotateV;
      return this;
    },
  },
  {
    key: "springify",
    value: function springify(durationV) {
      const obj = { durationV, type: _mod1715.withSpring };
      return obj;
    },
  },
  {
    key: "dampingRatio",
    value: function dampingRatio(dampingRatioV) {
      this.dampingRatioV = dampingRatioV;
      return this;
    },
  },
  {
    key: "damping",
    value: function damping(dampingV) {
      this.dampingV = dampingV;
      return this;
    },
  },
  {
    key: "mass",
    value: function mass(massV) {
      this.massV = massV;
      return this;
    },
  },
  {
    key: "stiffness",
    value: function stiffness(stiffnessV) {
      this.stiffnessV = stiffnessV;
      return this;
    },
  },
  {
    key: "overshootClamping",
    value: function overshootClamping(overshootClampingV) {
      this.overshootClampingV = overshootClampingV;
      return this;
    },
  },
  {
    key: "restDisplacementThreshold",
    value: function restDisplacementThreshold(restDisplacementThresholdV) {
      this.restDisplacementThresholdV = restDisplacementThresholdV;
      return this;
    },
  },
  {
    key: "restSpeedThreshold",
    value: function restSpeedThreshold(restSpeedThresholdV) {
      this.restSpeedThresholdV = restSpeedThresholdV;
      return this;
    },
  },
  {
    key: "withInitialValues",
    value: function withInitialValues(initialValues) {
      this.initialValues = initialValues;
      return this;
    },
  },
  {
    key: "getAnimationAndConfig",
    value: function getAnimationAndConfig() {
      let dampingRatioV;
      let dampingV;
      let durationV;
      let easingV;
      let massV;
      let overshootClampingV;
      let restDisplacementThresholdV;
      let restSpeedThresholdV;
      let rotateV;
      let stiffnessV;
      let withTiming;
      const self = this;
      ({ easingV, durationV, rotateV } = this);
      if (this.type) {
        withTiming = self.type;
      } else {
        withTiming = _mod1715.withTiming;
      }
      const obj = {};
      ({
        dampingV,
        dampingRatioV,
        massV,
        stiffnessV,
        overshootClampingV,
        restDisplacementThresholdV,
        restSpeedThresholdV,
      } = self);
      if (withTiming === _mod1715.withTiming) {
        if (easingV) {
          obj.easing = easingV;
        }
      }
      const items = [
        { variableName: "damping", value: dampingV },
        { variableName: "dampingRatio", value: dampingRatioV },
        { variableName: "mass", value: massV },
        { variableName: "stiffness", value: stiffnessV },
        { variableName: "overshootClamping", value: overshootClampingV },
        { variableName: "restDisplacementThreshold", value: restDisplacementThresholdV },
        { variableName: "restSpeedThreshold", value: restSpeedThresholdV },
        { variableName: "duration", value: durationV },
        { variableName: "rotate", value: rotateV },
      ];
      const item = items.forEach((value) => {
        value = value.value;
        if (value) {
          obj[tmp] = value;
        }
      });
      const items1 = [withTiming, obj];
      return items1;
    },
  },
];
const entry1 = {
  key: "easing",
  value: function easing(arg0) {
    const instance = this.createInstance();
    return instance.easing(arg0);
  },
};
let items1 = [
  entry1,
  {
    key: "rotate",
    value: function rotate(arg0) {
      const instance = this.createInstance();
      return instance.rotate(arg0);
    },
  },
  {
    key: "springify",
    value: function springify(arg0) {
      const instance = this.createInstance();
      return instance.springify(arg0);
    },
  },
  {
    key: "dampingRatio",
    value: function dampingRatio(arg0) {
      const instance = this.createInstance();
      return instance.dampingRatio(arg0);
    },
  },
  {
    key: "damping",
    value: function damping(arg0) {
      const instance = this.createInstance();
      return instance.damping(arg0);
    },
  },
  {
    key: "mass",
    value: function mass(arg0) {
      const instance = this.createInstance();
      return instance.mass(arg0);
    },
  },
  {
    key: "stiffness",
    value: function stiffness(arg0) {
      const instance = this.createInstance();
      return instance.stiffness(arg0);
    },
  },
  {
    key: "overshootClamping",
    value: function overshootClamping(arg0) {
      const instance = this.createInstance();
      return instance.overshootClamping(arg0);
    },
  },
  {
    key: "restDisplacementThreshold",
    value: function restDisplacementThreshold(arg0) {
      const instance = this.createInstance();
      return instance.restDisplacementThreshold(arg0);
    },
  },
  {
    key: "restSpeedThreshold",
    value: function restSpeedThreshold(arg0) {
      const instance = this.createInstance();
      return instance.restSpeedThreshold(arg0);
    },
  },
  {
    key: "withInitialValues",
    value: function withInitialValues(arg0) {
      const instance = this.createInstance();
      return instance.withInitialValues(arg0);
    },
  },
];
const ComplexAnimationBuilder_export = _createClass(ComplexAnimationBuilder, items, items1);

export { ComplexAnimationBuilder_export as ComplexAnimationBuilder };
