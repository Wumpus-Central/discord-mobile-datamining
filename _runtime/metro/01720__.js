// === Module 1720: ? ===

// Module 1720
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const ComplexAnimationBuilder = fn;
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
class ComplexAnimationBuilder {
  constructor() {
    self = this;
    tmp = c2(this, ComplexAnimationBuilder);
    tmp2 = closure_4;
    obj = closure_4(ComplexAnimationBuilder);
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
_inherits(ComplexAnimationBuilder, fn(1707).BaseAnimationBuilder);
const entry = {
  key: "easing",
  value: function easing(easingV) {
    this.easingV = easingV;
    return this;
  }
};
let items = [
  entry,
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
      return { durationV, type: ComplexAnimationBuilder(1708).withSpring };
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
      const self = this;
      ({ easingV, durationV, rotateV } = this);
      if (this.type) {
        let withTiming = self.type;
      } else {
        withTiming = ComplexAnimationBuilder(1708).withTiming;
      }
      const obj = {};
      ({ dampingV, dampingRatioV, massV, stiffnessV, overshootClampingV, restDisplacementThresholdV, restSpeedThresholdV } = self);
      if (withTiming === ComplexAnimationBuilder(1708).withTiming) {
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
const entry1 = {
  key: "easing",
  value: function easing(arg0) {
    const instance = this.createInstance();
    return instance.easing(arg0);
  }
};
let items1 = [
  entry1,
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

export const ComplexAnimationBuilder = _createClass(ComplexAnimationBuilder, items, items1);