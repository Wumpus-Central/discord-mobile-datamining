// === Module 1937: Flip ===

// Module 1937 (Flip)
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

let FlipOutEasyY = fn;
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
let closure_6 = { code: "(function pnpm_FlipTs1(values){let[pickTransformValues,initialValues,animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,callback]=this.__closure;return{initialValues:{transform:pickTransformValues([{perspective:500},{rotateX:'90deg'},{translateY:-values.targetHeight}],initialValues)},animations:{transform:animateTransformToValues([{perspective:500},{rotateX:'0deg'},{translateY:0}],targetValues,animationAndConfig,delayFunction,delay)},callback:callback};})" };
class FlipInXUp {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, FlipOutEasyY);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(FlipOutEasyY);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = _undefined.getDelayFunction();
      const animationAndConfig = _undefined.getAnimationAndConfig();
      items = [closure_6, , , , , , , , ];
      const delay = _undefined.getDelay();
      ({ callbackV, initialValues, targetValues } = _undefined);
      items[1] = FlipOutEasyY(1935).pickTransformValues;
      items[2] = initialValues;
      items[3] = FlipOutEasyY(1935).animateTransformToValues;
      items[4] = targetValues;
      items[5] = animationAndConfig;
      items[6] = delayFunction;
      items[7] = delay;
      items[8] = callbackV;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_FlipTs1(targetHeight) {
        const obj = { initialValues: null, animations: null, callback: null };
        const obj2 = { transform: null };
        items = [{ perspective: 500 }, { rotateX: "90deg" }, { translateY: -targetHeight.targetHeight }];
        obj2.transform = _undefined(items, c1);
        obj.initialValues = obj2;
        const obj4 = { transform: null };
        const items1 = [{ perspective: 500 }, { rotateX: "0deg" }, { translateY: 0 }];
        obj4.transform = _undefined2(items1, c3, c4, c5, c6);
        obj.animations = obj4;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_FlipTs1.__closure = items1;
      pnpm_FlipTs1.__workletHash = 9469158263453;
      pnpm_FlipTs1.__initData = tmp4;
      return pnpm_FlipTs1;
    };
    return tmp3Result;
  }
}
FlipOutEasyY = FlipInXUp;
_inherits(FlipInXUp, fn(1872).ComplexAnimationBuilder);
const entry = {
  key: "createInstance",
  value: function createInstance() {
    return FlipOutEasyY();
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(FlipInXUp, null, items);
importDefaultResultResult.presetName = "FlipInXUp";
let closure_7 = { code: "(function pnpm_FlipTs2(values){let[pickTransformValues,initialValues,animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,callback]=this.__closure;return{initialValues:{transform:pickTransformValues([{perspective:500},{rotateY:'-90deg'},{translateX:-values.targetWidth}],initialValues)},animations:{transform:animateTransformToValues([{perspective:500},{rotateY:'0deg'},{translateX:0}],targetValues,animationAndConfig,delayFunction,delay)},callback:callback};})" };
class FlipInYLeft {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, FlipOutEasyY);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(FlipOutEasyY);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = _undefined.getDelayFunction();
      const animationAndConfig = _undefined.getAnimationAndConfig();
      items = [callback, , , , , , , , ];
      const delay = _undefined.getDelay();
      ({ callbackV, initialValues, targetValues } = _undefined);
      items[1] = FlipOutEasyY(1935).pickTransformValues;
      items[2] = initialValues;
      items[3] = FlipOutEasyY(1935).animateTransformToValues;
      items[4] = targetValues;
      items[5] = animationAndConfig;
      items[6] = delayFunction;
      items[7] = delay;
      items[8] = callbackV;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_FlipTs2(targetWidth) {
        const obj = { initialValues: null, animations: null, callback: null };
        const obj2 = { transform: null };
        items = [{ perspective: 500 }, { rotateY: "-90deg" }, { translateX: -targetWidth.targetWidth }];
        obj2.transform = _undefined(items, c1);
        obj.initialValues = obj2;
        const obj4 = { transform: null };
        const items1 = [{ perspective: 500 }, { rotateY: "0deg" }, { translateX: 0 }];
        obj4.transform = _undefined2(items1, c3, c4, c5, c6);
        obj.animations = obj4;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_FlipTs2.__closure = items1;
      pnpm_FlipTs2.__workletHash = 8176382367658;
      pnpm_FlipTs2.__initData = tmp4;
      return pnpm_FlipTs2;
    };
    return tmp3Result;
  }
}
FlipOutEasyY = FlipInYLeft;
_inherits(FlipInYLeft, fn(1872).ComplexAnimationBuilder);
const entry1 = {
  key: "createInstance",
  value: function createInstance() {
    return FlipOutEasyY();
  }
};
let items1 = [entry1];
const importDefaultResultResult1 = _createClass(FlipInYLeft, null, items1);
importDefaultResultResult1.presetName = "FlipInYLeft";
let closure_8 = { code: "(function pnpm_FlipTs3(values){let[pickTransformValues,initialValues,animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,callback]=this.__closure;return{initialValues:{transform:pickTransformValues([{perspective:500},{rotateX:'-90deg'},{translateY:values.targetHeight}],initialValues)},animations:{transform:animateTransformToValues([{perspective:500},{rotateX:'0deg'},{translateY:0}],targetValues,animationAndConfig,delayFunction,delay)},callback:callback};})" };
class FlipInXDown {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, FlipOutEasyY);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(FlipOutEasyY);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = _undefined.getDelayFunction();
      const animationAndConfig = _undefined.getAnimationAndConfig();
      items = [closure_8, , , , , , , , ];
      const delay = _undefined.getDelay();
      ({ callbackV, initialValues, targetValues } = _undefined);
      items[1] = FlipOutEasyY(1935).pickTransformValues;
      items[2] = initialValues;
      items[3] = FlipOutEasyY(1935).animateTransformToValues;
      items[4] = targetValues;
      items[5] = animationAndConfig;
      items[6] = delayFunction;
      items[7] = delay;
      items[8] = callbackV;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_FlipTs3(targetHeight) {
        const obj = { initialValues: null, animations: null, callback: null };
        const obj2 = { transform: null };
        items = [{ perspective: 500 }, { rotateX: "-90deg" }, { translateY: targetHeight.targetHeight }];
        obj2.transform = _undefined(items, c1);
        obj.initialValues = obj2;
        const obj4 = { transform: null };
        const items1 = [{ perspective: 500 }, { rotateX: "0deg" }, { translateY: 0 }];
        obj4.transform = _undefined2(items1, c3, c4, c5, c6);
        obj.animations = obj4;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_FlipTs3.__closure = items1;
      pnpm_FlipTs3.__workletHash = 17416924802431;
      pnpm_FlipTs3.__initData = tmp4;
      return pnpm_FlipTs3;
    };
    return tmp3Result;
  }
}
FlipOutEasyY = FlipInXDown;
_inherits(FlipInXDown, fn(1872).ComplexAnimationBuilder);
const entry2 = {
  key: "createInstance",
  value: function createInstance() {
    return FlipOutEasyY();
  }
};
const items2 = [entry2];
const importDefaultResultResult2 = _createClass(FlipInXDown, null, items2);
importDefaultResultResult2.presetName = "FlipInXDown";
let closure_9 = { code: "(function pnpm_FlipTs4(values){let[pickTransformValues,initialValues,animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,callback]=this.__closure;return{initialValues:{transform:pickTransformValues([{perspective:500},{rotateY:'90deg'},{translateX:values.targetWidth}],initialValues)},animations:{transform:animateTransformToValues([{perspective:500},{rotateY:'0deg'},{translateX:0}],targetValues,animationAndConfig,delayFunction,delay)},callback:callback};})" };
class FlipInYRight {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, FlipOutEasyY);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(FlipOutEasyY);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = _undefined.getDelayFunction();
      const animationAndConfig = _undefined.getAnimationAndConfig();
      items = [closure_9, , , , , , , , ];
      const delay = _undefined.getDelay();
      ({ callbackV, initialValues, targetValues } = _undefined);
      items[1] = FlipOutEasyY(1935).pickTransformValues;
      items[2] = initialValues;
      items[3] = FlipOutEasyY(1935).animateTransformToValues;
      items[4] = targetValues;
      items[5] = animationAndConfig;
      items[6] = delayFunction;
      items[7] = delay;
      items[8] = callbackV;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_FlipTs4(targetWidth) {
        const obj = { initialValues: null, animations: null, callback: null };
        const obj2 = { transform: null };
        items = [{ perspective: 500 }, { rotateY: "90deg" }, { translateX: targetWidth.targetWidth }];
        obj2.transform = _undefined(items, c1);
        obj.initialValues = obj2;
        const obj4 = { transform: null };
        const items1 = [{ perspective: 500 }, { rotateY: "0deg" }, { translateX: 0 }];
        obj4.transform = _undefined2(items1, c3, c4, c5, c6);
        obj.animations = obj4;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_FlipTs4.__closure = items1;
      pnpm_FlipTs4.__workletHash = 16917359476172;
      pnpm_FlipTs4.__initData = tmp4;
      return pnpm_FlipTs4;
    };
    return tmp3Result;
  }
}
FlipOutEasyY = FlipInYRight;
_inherits(FlipInYRight, fn(1872).ComplexAnimationBuilder);
const entry3 = {
  key: "createInstance",
  value: function createInstance() {
    return FlipOutEasyY();
  }
};
const items3 = [entry3];
const importDefaultResultResult3 = _createClass(FlipInYRight, null, items3);
importDefaultResultResult3.presetName = "FlipInYRight";
let closure_10 = { code: "(function pnpm_FlipTs5(){let[pickTransformValues,initialValues,animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,callback]=this.__closure;return{initialValues:{transform:pickTransformValues([{perspective:500},{rotateX:'90deg'}],initialValues)},animations:{transform:animateTransformToValues([{perspective:500},{rotateX:'0deg'}],targetValues,animationAndConfig,delayFunction,delay)},callback:callback};})" };
class FlipInEasyX {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, FlipOutEasyY);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(FlipOutEasyY);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = _undefined.getDelayFunction();
      const animationAndConfig = _undefined.getAnimationAndConfig();
      items = [closure_10, , , , , , , , ];
      const delay = _undefined.getDelay();
      ({ callbackV, initialValues, targetValues } = _undefined);
      items[1] = FlipOutEasyY(1935).pickTransformValues;
      items[2] = initialValues;
      items[3] = FlipOutEasyY(1935).animateTransformToValues;
      items[4] = targetValues;
      items[5] = animationAndConfig;
      items[6] = delayFunction;
      items[7] = delay;
      items[8] = callbackV;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_FlipTs5() {
        const obj = { initialValues: null, animations: null, callback: null };
        const obj2 = { transform: null };
        items = [{ perspective: 500 }, { rotateX: "90deg" }];
        obj2.transform = _undefined(items, c1);
        obj.initialValues = obj2;
        const obj3 = { transform: null };
        const items1 = [{ perspective: 500 }, { rotateX: "0deg" }];
        obj3.transform = _undefined2(items1, c3, c4, c5, c6);
        obj.animations = obj3;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_FlipTs5.__closure = items1;
      pnpm_FlipTs5.__workletHash = 1584523604772;
      pnpm_FlipTs5.__initData = tmp4;
      return pnpm_FlipTs5;
    };
    return tmp3Result;
  }
}
FlipOutEasyY = FlipInEasyX;
_inherits(FlipInEasyX, fn(1872).ComplexAnimationBuilder);
const entry4 = {
  key: "createInstance",
  value: function createInstance() {
    return FlipOutEasyY();
  }
};
const items4 = [entry4];
const importDefaultResultResult4 = _createClass(FlipInEasyX, null, items4);
importDefaultResultResult4.presetName = "FlipInEasyX";
let closure_11 = { code: "(function pnpm_FlipTs6(){let[pickTransformValues,initialValues,animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,callback]=this.__closure;return{initialValues:{transform:pickTransformValues([{perspective:500},{rotateY:'90deg'}],initialValues)},animations:{transform:animateTransformToValues([{perspective:500},{rotateY:'0deg'}],targetValues,animationAndConfig,delayFunction,delay)},callback:callback};})" };
class FlipInEasyY {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, FlipOutEasyY);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(FlipOutEasyY);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = _undefined.getDelayFunction();
      const animationAndConfig = _undefined.getAnimationAndConfig();
      items = [closure_11, , , , , , , , ];
      const delay = _undefined.getDelay();
      ({ callbackV, initialValues, targetValues } = _undefined);
      items[1] = FlipOutEasyY(1935).pickTransformValues;
      items[2] = initialValues;
      items[3] = FlipOutEasyY(1935).animateTransformToValues;
      items[4] = targetValues;
      items[5] = animationAndConfig;
      items[6] = delayFunction;
      items[7] = delay;
      items[8] = callbackV;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_FlipTs6() {
        const obj = { initialValues: null, animations: null, callback: null };
        const obj2 = { transform: null };
        items = [{ perspective: 500 }, { rotateY: "90deg" }];
        obj2.transform = _undefined(items, c1);
        obj.initialValues = obj2;
        const obj3 = { transform: null };
        const items1 = [{ perspective: 500 }, { rotateY: "0deg" }];
        obj3.transform = _undefined2(items1, c3, c4, c5, c6);
        obj.animations = obj3;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_FlipTs6.__closure = items1;
      pnpm_FlipTs6.__workletHash = 4464383552871;
      pnpm_FlipTs6.__initData = tmp4;
      return pnpm_FlipTs6;
    };
    return tmp3Result;
  }
}
FlipOutEasyY = FlipInEasyY;
_inherits(FlipInEasyY, fn(1872).ComplexAnimationBuilder);
const entry5 = {
  key: "createInstance",
  value: function createInstance() {
    return FlipOutEasyY();
  }
};
const items5 = [entry5];
const importDefaultResultResult5 = _createClass(FlipInEasyY, null, items5);
importDefaultResultResult5.presetName = "FlipInEasyY";
let closure_12 = { code: "(function pnpm_FlipTs7(values){let[pickTransformValues,initialValues,animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,callback]=this.__closure;return{initialValues:{transform:pickTransformValues([{perspective:500},{rotateX:'0deg'},{translateY:0}],initialValues)},animations:{transform:animateTransformToValues([{perspective:500},{rotateX:'90deg'},{translateY:-values.currentHeight}],targetValues,animationAndConfig,delayFunction,delay)},callback:callback};})" };
class FlipOutXUp {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, FlipOutEasyY);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(FlipOutEasyY);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = _undefined.getDelayFunction();
      const animationAndConfig = _undefined.getAnimationAndConfig();
      items = [closure_12, , , , , , , , ];
      const delay = _undefined.getDelay();
      ({ callbackV, initialValues, targetValues } = _undefined);
      items[1] = FlipOutEasyY(1935).pickTransformValues;
      items[2] = initialValues;
      items[3] = FlipOutEasyY(1935).animateTransformToValues;
      items[4] = targetValues;
      items[5] = animationAndConfig;
      items[6] = delayFunction;
      items[7] = delay;
      items[8] = callbackV;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_FlipTs7(currentHeight) {
        const obj = { initialValues: null, animations: null, callback: null };
        const obj2 = { transform: null };
        items = [{ perspective: 500 }, { rotateX: "0deg" }, { translateY: 0 }];
        obj2.transform = _undefined(items, c1);
        obj.initialValues = obj2;
        const obj3 = { transform: null };
        const items1 = [{ perspective: 500 }, { rotateX: "90deg" }, { translateY: -currentHeight.currentHeight }];
        obj3.transform = _undefined2(items1, c3, c4, c5, c6);
        obj.animations = obj3;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_FlipTs7.__closure = items1;
      pnpm_FlipTs7.__workletHash = 13447721233923;
      pnpm_FlipTs7.__initData = tmp4;
      return pnpm_FlipTs7;
    };
    return tmp3Result;
  }
}
FlipOutEasyY = FlipOutXUp;
_inherits(FlipOutXUp, fn(1872).ComplexAnimationBuilder);
const entry6 = {
  key: "createInstance",
  value: function createInstance() {
    return FlipOutEasyY();
  }
};
const items6 = [entry6];
const importDefaultResultResult6 = _createClass(FlipOutXUp, null, items6);
importDefaultResultResult6.presetName = "FlipOutXUp";
let closure_13 = { code: "(function pnpm_FlipTs8(values){let[pickTransformValues,initialValues,animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,callback]=this.__closure;return{initialValues:{transform:pickTransformValues([{perspective:500},{rotateY:'0deg'},{translateX:0}],initialValues)},animations:{transform:animateTransformToValues([{perspective:500},{rotateY:'-90deg'},{translateX:-values.currentWidth}],targetValues,animationAndConfig,delayFunction,delay)},callback:callback};})" };
class FlipOutYLeft {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, FlipOutEasyY);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(FlipOutEasyY);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = _undefined.getDelayFunction();
      const animationAndConfig = _undefined.getAnimationAndConfig();
      items = [closure_13, , , , , , , , ];
      const delay = _undefined.getDelay();
      ({ callbackV, initialValues, targetValues } = _undefined);
      items[1] = FlipOutEasyY(1935).pickTransformValues;
      items[2] = initialValues;
      items[3] = FlipOutEasyY(1935).animateTransformToValues;
      items[4] = targetValues;
      items[5] = animationAndConfig;
      items[6] = delayFunction;
      items[7] = delay;
      items[8] = callbackV;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_FlipTs8(currentWidth) {
        const obj = { initialValues: null, animations: null, callback: null };
        const obj2 = { transform: null };
        items = [{ perspective: 500 }, { rotateY: "0deg" }, { translateX: 0 }];
        obj2.transform = _undefined(items, c1);
        obj.initialValues = obj2;
        const obj3 = { transform: null };
        const items1 = [{ perspective: 500 }, { rotateY: "-90deg" }, { translateX: -currentWidth.currentWidth }];
        obj3.transform = _undefined2(items1, c3, c4, c5, c6);
        obj.animations = obj3;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_FlipTs8.__closure = items1;
      pnpm_FlipTs8.__workletHash = 2601392697176;
      pnpm_FlipTs8.__initData = tmp4;
      return pnpm_FlipTs8;
    };
    return tmp3Result;
  }
}
FlipOutEasyY = FlipOutYLeft;
_inherits(FlipOutYLeft, fn(1872).ComplexAnimationBuilder);
const entry7 = {
  key: "createInstance",
  value: function createInstance() {
    return FlipOutEasyY();
  }
};
const items7 = [entry7];
const importDefaultResultResult7 = _createClass(FlipOutYLeft, null, items7);
importDefaultResultResult7.presetName = "FlipOutYLeft";
let closure_14 = { code: "(function pnpm_FlipTs9(values){let[pickTransformValues,initialValues,animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,callback]=this.__closure;return{initialValues:{transform:pickTransformValues([{perspective:500},{rotateX:'0deg'},{translateY:0}],initialValues)},animations:{transform:animateTransformToValues([{perspective:500},{rotateX:'-90deg'},{translateY:values.currentHeight}],targetValues,animationAndConfig,delayFunction,delay)},callback:callback};})" };
class FlipOutXDown {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, FlipOutEasyY);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(FlipOutEasyY);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = _undefined.getDelayFunction();
      const animationAndConfig = _undefined.getAnimationAndConfig();
      items = [closure_14, , , , , , , , ];
      const delay = _undefined.getDelay();
      ({ callbackV, initialValues, targetValues } = _undefined);
      items[1] = FlipOutEasyY(1935).pickTransformValues;
      items[2] = initialValues;
      items[3] = FlipOutEasyY(1935).animateTransformToValues;
      items[4] = targetValues;
      items[5] = animationAndConfig;
      items[6] = delayFunction;
      items[7] = delay;
      items[8] = callbackV;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_FlipTs9(currentHeight) {
        const obj = { initialValues: null, animations: null, callback: null };
        const obj2 = { transform: null };
        items = [{ perspective: 500 }, { rotateX: "0deg" }, { translateY: 0 }];
        obj2.transform = _undefined(items, c1);
        obj.initialValues = obj2;
        const obj3 = { transform: null };
        const items1 = [{ perspective: 500 }, { rotateX: "-90deg" }, { translateY: currentHeight.currentHeight }];
        obj3.transform = _undefined2(items1, c3, c4, c5, c6);
        obj.animations = obj3;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_FlipTs9.__closure = items1;
      pnpm_FlipTs9.__workletHash = 912394207021;
      pnpm_FlipTs9.__initData = tmp4;
      return pnpm_FlipTs9;
    };
    return tmp3Result;
  }
}
FlipOutEasyY = FlipOutXDown;
_inherits(FlipOutXDown, fn(1872).ComplexAnimationBuilder);
const entry8 = {
  key: "createInstance",
  value: function createInstance() {
    return FlipOutEasyY();
  }
};
const items8 = [entry8];
const importDefaultResultResult8 = _createClass(FlipOutXDown, null, items8);
importDefaultResultResult8.presetName = "FlipOutXDown";
let closure_15 = { code: "(function pnpm_FlipTs10(values){let[pickTransformValues,initialValues,animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,callback]=this.__closure;return{initialValues:{transform:pickTransformValues([{perspective:500},{rotateY:'0deg'},{translateX:0}],initialValues)},animations:{transform:animateTransformToValues([{perspective:500},{rotateY:'90deg'},{translateX:values.currentWidth}],targetValues,animationAndConfig,delayFunction,delay)},callback:callback};})" };
class FlipOutYRight {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, FlipOutEasyY);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(FlipOutEasyY);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = _undefined.getDelayFunction();
      const animationAndConfig = _undefined.getAnimationAndConfig();
      items = [closure_15, , , , , , , , ];
      const delay = _undefined.getDelay();
      ({ callbackV, initialValues, targetValues } = _undefined);
      items[1] = FlipOutEasyY(1935).pickTransformValues;
      items[2] = initialValues;
      items[3] = FlipOutEasyY(1935).animateTransformToValues;
      items[4] = targetValues;
      items[5] = animationAndConfig;
      items[6] = delayFunction;
      items[7] = delay;
      items[8] = callbackV;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_FlipTs10(currentWidth) {
        const obj = { initialValues: null, animations: null, callback: null };
        const obj2 = { transform: null };
        items = [{ perspective: 500 }, { rotateY: "0deg" }, { translateX: 0 }];
        obj2.transform = _undefined(items, c1);
        obj.initialValues = obj2;
        const obj3 = { transform: null };
        const items1 = [{ perspective: 500 }, { rotateY: "90deg" }, { translateX: currentWidth.currentWidth }];
        obj3.transform = _undefined2(items1, c3, c4, c5, c6);
        obj.animations = obj3;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_FlipTs10.__closure = items1;
      pnpm_FlipTs10.__workletHash = 7530259698209;
      pnpm_FlipTs10.__initData = tmp4;
      return pnpm_FlipTs10;
    };
    return tmp3Result;
  }
}
FlipOutEasyY = FlipOutYRight;
_inherits(FlipOutYRight, fn(1872).ComplexAnimationBuilder);
const entry9 = {
  key: "createInstance",
  value: function createInstance() {
    return FlipOutEasyY();
  }
};
const items9 = [entry9];
const importDefaultResultResult9 = _createClass(FlipOutYRight, null, items9);
importDefaultResultResult9.presetName = "FlipOutYRight";
let closure_16 = { code: "(function pnpm_FlipTs11(){let[pickTransformValues,initialValues,animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,callback]=this.__closure;return{initialValues:{transform:pickTransformValues([{perspective:500},{rotateX:'0deg'}],initialValues)},animations:{transform:animateTransformToValues([{perspective:500},{rotateX:'90deg'}],targetValues,animationAndConfig,delayFunction,delay)},callback:callback};})" };
class FlipOutEasyX {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, FlipOutEasyY);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(FlipOutEasyY);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = _undefined.getDelayFunction();
      const animationAndConfig = _undefined.getAnimationAndConfig();
      items = [closure_16, , , , , , , , ];
      const delay = _undefined.getDelay();
      ({ callbackV, initialValues, targetValues } = _undefined);
      items[1] = FlipOutEasyY(1935).pickTransformValues;
      items[2] = initialValues;
      items[3] = FlipOutEasyY(1935).animateTransformToValues;
      items[4] = targetValues;
      items[5] = animationAndConfig;
      items[6] = delayFunction;
      items[7] = delay;
      items[8] = callbackV;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_FlipTs11() {
        const obj = { initialValues: null, animations: null, callback: null };
        const obj2 = { transform: null };
        items = [{ perspective: 500 }, { rotateX: "0deg" }];
        obj2.transform = _undefined(items, c1);
        obj.initialValues = obj2;
        const obj3 = { transform: null };
        const items1 = [{ perspective: 500 }, { rotateX: "90deg" }];
        obj3.transform = _undefined2(items1, c3, c4, c5, c6);
        obj.animations = obj3;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_FlipTs11.__closure = items1;
      pnpm_FlipTs11.__workletHash = 2377676457201;
      pnpm_FlipTs11.__initData = tmp4;
      return pnpm_FlipTs11;
    };
    return tmp3Result;
  }
}
FlipOutEasyY = FlipOutEasyX;
_inherits(FlipOutEasyX, fn(1872).ComplexAnimationBuilder);
const entry10 = {
  key: "createInstance",
  value: function createInstance() {
    return FlipOutEasyY();
  }
};
const items10 = [entry10];
const importDefaultResultResult10 = _createClass(FlipOutEasyX, null, items10);
importDefaultResultResult10.presetName = "FlipOutEasyX";
let closure_17 = { code: "(function pnpm_FlipTs12(){let[pickTransformValues,initialValues,animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,callback]=this.__closure;return{initialValues:{transform:pickTransformValues([{perspective:500},{rotateY:'0deg'}],initialValues)},animations:{transform:animateTransformToValues([{perspective:500},{rotateY:'90deg'}],targetValues,animationAndConfig,delayFunction,delay)},callback:callback};})" };
class FlipOutEasyY {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, FlipOutEasyY);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(FlipOutEasyY);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = _undefined.getDelayFunction();
      const animationAndConfig = _undefined.getAnimationAndConfig();
      items = [closure_17, , , , , , , , ];
      const delay = _undefined.getDelay();
      ({ callbackV, initialValues, targetValues } = _undefined);
      items[1] = FlipOutEasyY(1935).pickTransformValues;
      items[2] = initialValues;
      items[3] = FlipOutEasyY(1935).animateTransformToValues;
      items[4] = targetValues;
      items[5] = animationAndConfig;
      items[6] = delayFunction;
      items[7] = delay;
      items[8] = callbackV;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_FlipTs12() {
        const obj = { initialValues: null, animations: null, callback: null };
        const obj2 = { transform: null };
        items = [{ perspective: 500 }, { rotateY: "0deg" }];
        obj2.transform = _undefined(items, c1);
        obj.initialValues = obj2;
        const obj3 = { transform: null };
        const items1 = [{ perspective: 500 }, { rotateY: "90deg" }];
        obj3.transform = _undefined2(items1, c3, c4, c5, c6);
        obj.animations = obj3;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_FlipTs12.__closure = items1;
      pnpm_FlipTs12.__workletHash = 10961347289138;
      pnpm_FlipTs12.__initData = tmp4;
      return pnpm_FlipTs12;
    };
    return tmp3Result;
  }
}
_inherits(FlipOutEasyY, fn(1872).ComplexAnimationBuilder);
const entry11 = {
  key: "createInstance",
  value: function createInstance() {
    return FlipOutEasyY();
  }
};
const items11 = [entry11];
const importDefaultResultResult11 = _createClass(FlipOutEasyY, null, items11);
importDefaultResultResult11.presetName = "FlipOutEasyY";

export const FlipInXUp = importDefaultResultResult;
export const FlipInYLeft = importDefaultResultResult1;
export const FlipInXDown = importDefaultResultResult2;
export const FlipInYRight = importDefaultResultResult3;
export const FlipInEasyX = importDefaultResultResult4;
export const FlipInEasyY = importDefaultResultResult5;
export const FlipOutXUp = importDefaultResultResult6;
export const FlipOutYLeft = importDefaultResultResult7;
export const FlipOutXDown = importDefaultResultResult8;
export const FlipOutYRight = importDefaultResultResult9;
export const FlipOutEasyX = importDefaultResultResult10;
export const FlipOutEasyY = importDefaultResultResult11;