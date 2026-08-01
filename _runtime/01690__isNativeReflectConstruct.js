// === Module 1690: _isNativeReflectConstruct ===

// Module 1690 (_isNativeReflectConstruct)
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";

const ComplexAnimationBuilder = arg1;
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
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
class ComplexAnimationBuilder {
  constructor() {
    self = this;
    tmp = _isNativeReflectConstruct(this, ComplexAnimationBuilder);
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(ComplexAnimationBuilder);
    tmp3 = _isNativeReflectConstruct;
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
require("_inherits")(ComplexAnimationBuilder, require("BaseAnimationBuilder").BaseAnimationBuilder);
let obj = {
  key: "easing",
  value: function easing(easingV) {
    this.easingV = easingV;
    return this;
  }
};
let items = [
  obj,
  {
    key: "rotate",
    value: function rotate(rotateV) {
      this.rotateV = rotateV;
      return this;
    }
  },
  {
    key: "springify",
    value: function springify(durationV) {
      return { durationV, type: ComplexAnimationBuilder(1678).withSpring };
    }
  },
  {
    key: "dampingRatio",
    value: function dampingRatio(dampingRatioV) {
      this.dampingRatioV = dampingRatioV;
      return this;
    }
  },
  {
    key: "damping",
    value: function damping(dampingV) {
      this.dampingV = dampingV;
      return this;
    }
  },
  {
    key: "mass",
    value: function mass(massV) {
      this.massV = massV;
      return this;
    }
  },
  {
    key: "stiffness",
    value: function stiffness(stiffnessV) {
      this.stiffnessV = stiffnessV;
      return this;
    }
  },
  {
    key: "overshootClamping",
    value: function overshootClamping(overshootClampingV) {
      this.overshootClampingV = overshootClampingV;
      return this;
    }
  },
  {
    key: "restDisplacementThreshold",
    value: function restDisplacementThreshold(restDisplacementThresholdV) {
      this.restDisplacementThresholdV = restDisplacementThresholdV;
      return this;
    }
  },
  {
    key: "restSpeedThreshold",
    value: function restSpeedThreshold(restSpeedThresholdV) {
      this.restSpeedThresholdV = restSpeedThresholdV;
      return this;
    }
  },
  {
    key: "withInitialValues",
    value: function withInitialValues(initialValues) {
      this.initialValues = initialValues;
      return this;
    }
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
      const self = this;
      ({ easingV, durationV, rotateV } = this);
      if (this.type) {
        let withTiming = self.type;
      } else {
        withTiming = obj(1678).withTiming;
      }
      obj = {};
      ({ dampingV, dampingRatioV, massV, stiffnessV, overshootClampingV, restDisplacementThresholdV, restSpeedThresholdV } = self);
      if (withTiming === obj(1678).withTiming) {
        if (easingV) {
          obj.easing = easingV;
        }
      }
      const items = [{ variableName: "damping", value: dampingV }, { variableName: "dampingRatio", value: dampingRatioV }, { variableName: "mass", value: massV }, { variableName: "stiffness", value: stiffnessV }, { variableName: "overshootClamping", value: overshootClampingV }, { variableName: "restDisplacementThreshold", value: restDisplacementThresholdV }, { variableName: "restSpeedThreshold", value: restSpeedThresholdV }, { variableName: "duration", value: durationV }, { variableName: "rotate", value: rotateV }];
      const item = items.forEach((value) => {
        value = value.value;
        if (value) {
          obj[tmp] = value;
        }
      });
      const items1 = [withTiming, obj];
      return items1;
    }
  }
];
obj = {
  key: "easing",
  value: function easing(arg0) {
    const instance = this.createInstance();
    return instance.easing(arg0);
  }
};
let items1 = [
  obj,
  {
    key: "rotate",
    value: function rotate(arg0) {
      const instance = this.createInstance();
      return instance.rotate(arg0);
    }
  },
  {
    key: "springify",
    value: function springify(arg0) {
      const instance = this.createInstance();
      return instance.springify(arg0);
    }
  },
  {
    key: "dampingRatio",
    value: function dampingRatio(arg0) {
      const instance = this.createInstance();
      return instance.dampingRatio(arg0);
    }
  },
  {
    key: "damping",
    value: function damping(arg0) {
      const instance = this.createInstance();
      return instance.damping(arg0);
    }
  },
  {
    key: "mass",
    value: function mass(arg0) {
      const instance = this.createInstance();
      return instance.mass(arg0);
    }
  },
  {
    key: "stiffness",
    value: function stiffness(arg0) {
      const instance = this.createInstance();
      return instance.stiffness(arg0);
    }
  },
  {
    key: "overshootClamping",
    value: function overshootClamping(arg0) {
      const instance = this.createInstance();
      return instance.overshootClamping(arg0);
    }
  },
  {
    key: "restDisplacementThreshold",
    value: function restDisplacementThreshold(arg0) {
      const instance = this.createInstance();
      return instance.restDisplacementThreshold(arg0);
    }
  },
  {
    key: "restSpeedThreshold",
    value: function restSpeedThreshold(arg0) {
      const instance = this.createInstance();
      return instance.restSpeedThreshold(arg0);
    }
  },
  {
    key: "withInitialValues",
    value: function withInitialValues(arg0) {
      const instance = this.createInstance();
      return instance.withInitialValues(arg0);
    }
  }
];

export const ComplexAnimationBuilder = importDefaultResult(ComplexAnimationBuilder, items, items1);