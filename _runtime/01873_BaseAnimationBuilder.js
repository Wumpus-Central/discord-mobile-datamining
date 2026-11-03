// _runtime/01873_BaseAnimationBuilder.js
import _createClassDefault from "metro/00042__createClass.js";
import _classCallCheck from "metro/00041__classCallCheck.js";

const BaseAnimationBuilder = arg1;
let closure_3 = {
  code: "(function pnpm_BaseAnimationBuilderTs1(delay,animation){let[withDelay,reduceMotion]=this.__closure;return withDelay(delay,animation,reduceMotion);})",
};
let closure_4 = {
  code: "(function pnpm_BaseAnimationBuilderTs2(_,animation){let[getReduceMotionFromConfig,reduceMotion]=this.__closure;animation.reduceMotion=getReduceMotionFromConfig(reduceMotion);return animation;})",
};
class BaseAnimationBuilder {
  constructor() {
    tmp = c2(this, BaseAnimationBuilder);
    this.reduceMotionV = closure_0(closure_1[2]).ReduceMotion.System;
    this.randomizeDelay = false;
    this.build = () => {
      const error = new Error("[Reanimated] Unimplemented method in child class.");
      throw error;
    };
    return;
  }
}
const entry = {
  key: "duration",
  value: function duration(durationV) {
    this.durationV = durationV;
    return this;
  },
};
let items = [
  entry,
  {
    key: "delay",
    value: function delay(delayV) {
      this.delayV = delayV;
      return this;
    },
  },
  {
    key: "withCallback",
    value: function withCallback(callbackV) {
      this.callbackV = callbackV;
      return this;
    },
  },
  {
    key: "reduceMotion",
    value: function reduceMotion(reduceMotionV) {
      this.reduceMotionV = reduceMotionV;
      return this;
    },
  },
  {
    key: "getDuration",
    value: function getDuration() {
      let num = this.durationV;
      if (num == null) {
        num = 300;
      }
      return num;
    },
  },
  {
    key: "randomDelay",
    value: function randomDelay() {
      this.randomizeDelay = true;
      return this;
    },
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
    },
  },
  {
    key: "getReduceMotion",
    value: function getReduceMotion() {
      return this.reduceMotionV;
    },
  },
  {
    key: "getDelayFunction",
    value: function getDelayFunction() {
      const self = this;
      const reduceMotion = self.getReduceMotion();
      if (tmp) {
        items = [closure_3, BaseAnimationBuilder(1839).withDelay, reduceMotion];
        c0 = undefined;
        c1 = undefined;
        [tmp14, tmp15, tmp16] = items;
        function pnpm_BaseAnimationBuilderTs1(arg0, arg1) {
          return _undefined(arg0, arg1, c1);
        }
        const items1 = [tmp15, tmp16];
        pnpm_BaseAnimationBuilderTs1.__closure = items1;
        pnpm_BaseAnimationBuilderTs1.__workletHash = 2438928338111;
        pnpm_BaseAnimationBuilderTs1.__initData = tmp14;
        let pnpm_BaseAnimationBuilderTs2 = pnpm_BaseAnimationBuilderTs1;
      } else {
        const items2 = [closure_4, BaseAnimationBuilder(1841).getReduceMotionFromConfig, reduceMotion];
        c0 = undefined;
        c1 = undefined;
        [tmp7, tmp8, tmp9] = items2;
        pnpm_BaseAnimationBuilderTs2 = function pnpm_BaseAnimationBuilderTs2(arg0, arg1) {
          arg1.reduceMotion = _undefined(c1);
          return arg1;
        };
        const items3 = [tmp8, tmp9];
        pnpm_BaseAnimationBuilderTs2.__closure = items3;
        pnpm_BaseAnimationBuilderTs2.__workletHash = 12952362396931;
        pnpm_BaseAnimationBuilderTs2.__initData = tmp7;
      }
      return pnpm_BaseAnimationBuilderTs2;
    },
  },
];
const entry1 = {
  key: "duration",
  value: function duration(arg0) {
    const instance = this.createInstance();
    return instance.duration(arg0);
  },
};
let items1 = [
  entry1,
  {
    key: "delay",
    value: function delay(arg0) {
      const instance = this.createInstance();
      return instance.delay(arg0);
    },
  },
  {
    key: "withCallback",
    value: function withCallback(arg0) {
      const instance = this.createInstance();
      return instance.withCallback(arg0);
    },
  },
  {
    key: "reduceMotion",
    value: function reduceMotion(arg0) {
      const instance = this.createInstance();
      return instance.reduceMotion(arg0);
    },
  },
  {
    key: "getDuration",
    value: function getDuration() {
      return 300;
    },
  },
  {
    key: "randomDelay",
    value: function randomDelay() {
      const instance = this.createInstance();
      return instance.randomDelay();
    },
  },
  {
    key: "build",
    value: function build() {
      const instance = this.createInstance();
      return instance.build();
    },
  },
];

export const BaseAnimationBuilder = _createClassDefault(BaseAnimationBuilder, items, items1);
