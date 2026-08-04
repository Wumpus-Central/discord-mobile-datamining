// _runtime/01677_BaseAnimationBuilder.js
import _classCallCheck from "_classCallCheck";

const BaseAnimationBuilder = arg1;
let closure_3 = { code: "function pnpm_BaseAnimationBuilderTs1(delay,animation){const{withDelay,reduceMotion}=this.__closure;return withDelay(delay,animation,reduceMotion);}" };
let closure_4 = { code: "function pnpm_BaseAnimationBuilderTs2(_,animation){const{getReduceMotionFromConfig,reduceMotion}=this.__closure;animation.reduceMotion=getReduceMotionFromConfig(reduceMotion);return animation;}" };
class BaseAnimationBuilder {
  constructor() {
    tmp = outer1_2(this, BaseAnimationBuilder);
    this.reduceMotionV = require("isWorkletFunction").ReduceMotion.System;
    this.randomizeDelay = false;
    this.build = () => {
      const reanimatedError = new callback(table[3]).ReanimatedError("Unimplemented method in child class.");
      throw reanimatedError;
    };
    return;
  }
}
let obj = {
  key: "duration",
  value: function duration(durationV) {
    this.durationV = durationV;
    return this;
  }
};
const items = [
  obj,
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
      const self = this;
      if (this.randomizeDelay) {
        const _Math = Math;
        let num2 = self.delayV;
        const random = Math.random();
        if (num2 == null) {
          num2 = 1000;
        }
        let num = random * num2;
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
      const self = this;
      const reduceMotion = self.getReduceMotion();
      if (tmp) {
        const fn2 = function n(arg0, arg1) {
          return reduceMotion(outer1_1[4]).withDelay(arg0, arg1, reduceMotion);
        };
        let obj = { withDelay: null, reduceMotion: null };
        obj[0] = reduceMotion(1678).withDelay;
        obj[1] = reduceMotion;
        fn2.__closure = obj;
        fn2.__workletHash = 15544853359686;
        fn2.__initData = closure_3;
        let fn = fn2;
      } else {
        fn = function t(arg0, arg1) {
          arg1.reduceMotion = reduceMotion(outer1_1[5]).getReduceMotionFromConfig(reduceMotion);
          return arg1;
        };
        obj = { getReduceMotionFromConfig: null, reduceMotion: null };
        obj[0] = reduceMotion(1646).getReduceMotionFromConfig;
        obj[1] = reduceMotion;
        fn.__closure = obj;
        fn.__workletHash = 8417033392474;
        fn.__initData = closure_4;
      }
      return fn;
    }
  }
];
obj = {
  key: "duration",
  value: function duration(arg0) {
    const instance = this.createInstance();
    return instance.duration(arg0);
  }
};
const items1 = [
  obj,
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

export const BaseAnimationBuilder = require("_createClass")(BaseAnimationBuilder, items, items1);