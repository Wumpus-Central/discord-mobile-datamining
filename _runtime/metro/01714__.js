// === Module 1714: ? ===

// Module 1714
import _createClassDefault from "_createClass" /* 42 */;
import LayoutAnimationType from "LayoutAnimationType" /* 1668 */;
import _mod1683 from "module_1683" /* 1683 */;
import _mod1715 from "module_1715" /* 1715 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

const __initData = { code: "function pnpm_BaseAnimationBuilderTs1(delay,animation){const{withDelay,reduceMotion}=this.__closure;return withDelay(delay,animation,reduceMotion);}" };
const __initData2 = { code: "function pnpm_BaseAnimationBuilderTs2(_,animation){const{getReduceMotionFromConfig,reduceMotion}=this.__closure;animation.reduceMotion=getReduceMotionFromConfig(reduceMotion);return animation;}" };
class BaseAnimationBuilder {
  constructor() {
    _classCallCheck(this, BaseAnimationBuilder);
    this.reduceMotionV = LayoutAnimationType.ReduceMotion.System;
    this.randomizeDelay = false;
    this.build = () => {
      const reanimatedError = new BaseAnimationBuilder(closure_1_1[3]).ReanimatedError("Unimplemented method in child class.");
      throw reanimatedError;
    };
  }
}
const entry = {
  key: "duration",
  value: function duration(durationV) {
    this.durationV = durationV;
    return this;
  }
};
const items = [
  entry,
  {
    key: "delay",
    value: function delay(delayV) {
      this.delayV = delayV;
      return this;
    }
  },
  {
    key: "withCallback",
    value: function withCallback(callbackV) {
      this.callbackV = callbackV;
      return this;
    }
  },
  {
    key: "reduceMotion",
    value: function reduceMotion(reduceMotionV) {
      this.reduceMotionV = reduceMotionV;
      return this;
    }
  },
  {
    key: "getDuration",
    value: function getDuration() {
      let num = this.durationV;
      if (num == null) {
        num = 300;
      }
      return num;
    }
  },
  {
    key: "randomDelay",
    value: function randomDelay() {
      this.randomizeDelay = true;
      return this;
    }
  },
  {
    key: "getDelay",
    value: function getDelay() {
      let num;
      const self = this;
      if (this.randomizeDelay) {
        const _Math = Math;
        let num2 = self.delayV;
        const random = Math.random();
        if (num2 == null) {
          num2 = 1000;
        }
        num = random * num2;
      } else {
        num = self.delayV;
        if (num == null) {
          num = 0;
        }
      }
      return num;
    }
  },
  {
    key: "getReduceMotion",
    value: function getReduceMotion() {
      return this.reduceMotionV;
    }
  },
  {
    key: "getDelayFunction",
    value: function getDelayFunction() {
      let fn;
      const self = this;
      const tmp = this.randomizeDelay || self.delayV;
      const reduceMotion = self.getReduceMotion();
      if (tmp) {
        const fn2 = function n(c10, withSpringResult) {
          const obj = _mod1715;
          return obj.withDelay(c10, withSpringResult, reduceMotion);
        };
        fn2.__closure = { withDelay: reduceMotion(1715).withDelay, reduceMotion };
        fn2.__workletHash = 15544853359686;
        fn2.__initData = __initData;
        fn = fn2;
        const obj2 = { withDelay: reduceMotion(1715).withDelay, reduceMotion };
      } else {
        fn = function t(arg0, arg1) {
          const obj = _mod1683;
          arg1.reduceMotion = obj.getReduceMotionFromConfig(reduceMotion);
          return arg1;
        };
        let obj = { getReduceMotionFromConfig: reduceMotion(1683).getReduceMotionFromConfig, reduceMotion };
        fn.__closure = obj;
        fn.__workletHash = 8417033392474;
        fn.__initData = __initData2;
      }
      return fn;
    }
  }
];
const entry1 = {
  key: "duration",
  value: function duration(arg0) {
    const instance = this.createInstance();
    return instance.duration(arg0);
  }
};
const items1 = [
  entry1,
  {
    key: "delay",
    value: function delay(arg0) {
      const instance = this.createInstance();
      return instance.delay(arg0);
    }
  },
  {
    key: "withCallback",
    value: function withCallback(arg0) {
      const instance = this.createInstance();
      return instance.withCallback(arg0);
    }
  },
  {
    key: "reduceMotion",
    value: function reduceMotion(arg0) {
      const instance = this.createInstance();
      return instance.reduceMotion(arg0);
    }
  },
  {
    key: "getDuration",
    value: function getDuration() {
      return 300;
    }
  },
  {
    key: "randomDelay",
    value: function randomDelay() {
      const instance = this.createInstance();
      return instance.randomDelay();
    }
  },
  {
    key: "build",
    value: function build() {
      const instance = this.createInstance();
      return instance.build();
    }
  }
];
const BaseAnimationBuilder_export = _createClassDefault(BaseAnimationBuilder, items, items1);

export { BaseAnimationBuilder_export as BaseAnimationBuilder };