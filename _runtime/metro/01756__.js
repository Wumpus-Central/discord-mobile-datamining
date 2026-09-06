// _runtime/metro/01756__.js
import _slicedToArray from "00032__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c2 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

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
  } catch (err) {}
}
let closure_5 = {
  code: "function pnpm_FlipTs1(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateX:'90deg'},{translateY:-targetValues.targetHeight}],...initialValues},animations:{transform:[{perspective:500},{rotateX:delayFunction(delay,animation('0deg',config))},{translateY:delayFunction(delay,animation(0,config))}]},callback:callback};}",
};
class FlipInXUp {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, FlipOutEasyY);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(FlipOutEasyY);
    tmp3 = c2;
    if (closure_4()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = closure_0.getDelayFunction();
      const tmp2 = _slicedToArray(closure_0.getAnimationAndConfig(), 2);
      const animation = tmp2[0];
      closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n(targetHeight) {
        let obj = { initialValues: null, animations: null, callback: null };
        obj = { transform: null };
        const items = [{ perspective: 500 }, { rotateX: "90deg" }];
        obj = { translateY: -targetHeight.targetHeight };
        items[2] = obj;
        obj.transform = items;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj;
        const obj1 = { transform: null };
        const items1 = [{ perspective: 500 }, { rotateX: delayFunction(delay, first("0deg", closure_2)) }];
        const obj2 = { rotateX: delayFunction(delay, first("0deg", closure_2)) };
        items1[2] = { translateY: delayFunction(delay, first(0, closure_2)) };
        obj1.transform = items1;
        obj.animations = obj1;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { initialValues, delayFunction, delay, animation, config: tmp2[1], callback: callbackV };
      fn.__workletHash = 17482936202676;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = FlipInXUp;
_inherits(FlipInXUp, fn(1706).ComplexAnimationBuilder);
const entry = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  },
};
let items = [entry];
const importDefaultResultResult = _createClass(FlipInXUp, null, items);
importDefaultResultResult.presetName = "FlipInXUp";
let closure_6 = {
  code: "function pnpm_FlipTs2(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateY:'-90deg'},{translateX:-targetValues.targetWidth}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateY:delayFunction(delay,animation('0deg',config))},{translateX:delayFunction(delay,animation(0,config))}]},callback:callback};}",
};
class FlipInYLeft {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, FlipOutEasyY);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(FlipOutEasyY);
    tmp3 = c2;
    if (closure_4()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = closure_0.getDelayFunction();
      const tmp2 = _slicedToArray(closure_0.getAnimationAndConfig(), 2);
      const animation = tmp2[0];
      closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n(targetWidth) {
        let obj = { initialValues: null, animations: null, callback: null };
        obj = { transform: null };
        const items = [{ perspective: 500 }, { rotateY: "-90deg" }];
        obj = { translateX: -targetWidth.targetWidth };
        items[2] = obj;
        obj.transform = items;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj;
        const obj1 = { transform: null };
        const items1 = [{ perspective: delayFunction(delay, first(500, closure_2)) }, ,];
        const obj2 = { perspective: delayFunction(delay, first(500, closure_2)) };
        items1[1] = { rotateY: delayFunction(delay, first("0deg", closure_2)) };
        const obj3 = { rotateY: delayFunction(delay, first("0deg", closure_2)) };
        items1[2] = { translateX: delayFunction(delay, first(0, closure_2)) };
        obj1.transform = items1;
        obj.animations = obj1;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { initialValues, delayFunction, delay, animation, config: tmp2[1], callback: callbackV };
      fn.__workletHash = 7030831354781;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = FlipInYLeft;
_inherits(FlipInYLeft, fn(1706).ComplexAnimationBuilder);
const entry1 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  },
};
let items1 = [entry1];
const importDefaultResultResult1 = _createClass(FlipInYLeft, null, items1);
importDefaultResultResult1.presetName = "FlipInYLeft";
let closure_7 = {
  code: "function pnpm_FlipTs3(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateX:'-90deg'},{translateY:targetValues.targetHeight}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateX:delayFunction(delay,animation('0deg',config))},{translateY:delayFunction(delay,animation(0,config))}]},callback:callback};}",
};
class FlipInXDown {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, FlipOutEasyY);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(FlipOutEasyY);
    tmp3 = c2;
    if (closure_4()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = closure_0.getDelayFunction();
      const tmp2 = _slicedToArray(closure_0.getAnimationAndConfig(), 2);
      const animation = tmp2[0];
      closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n(targetHeight) {
        let obj = { initialValues: null, animations: null, callback: null };
        obj = { transform: null };
        const items = [{ perspective: 500 }, { rotateX: "-90deg" }];
        obj = { translateY: targetHeight.targetHeight };
        items[2] = obj;
        obj.transform = items;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj;
        const obj1 = { transform: null };
        const items1 = [{ perspective: delayFunction(delay, first(500, closure_2)) }, ,];
        const obj2 = { perspective: delayFunction(delay, first(500, closure_2)) };
        items1[1] = { rotateX: delayFunction(delay, first("0deg", closure_2)) };
        const obj3 = { rotateX: delayFunction(delay, first("0deg", closure_2)) };
        items1[2] = { translateY: delayFunction(delay, first(0, closure_2)) };
        obj1.transform = items1;
        obj.animations = obj1;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { initialValues, delayFunction, delay, animation, config: tmp2[1], callback: callbackV };
      fn.__workletHash = 8540727794920;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = FlipInXDown;
_inherits(FlipInXDown, fn(1706).ComplexAnimationBuilder);
const entry2 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  },
};
const items2 = [entry2];
const importDefaultResultResult2 = _createClass(FlipInXDown, null, items2);
importDefaultResultResult2.presetName = "FlipInXDown";
let closure_8 = {
  code: "function pnpm_FlipTs4(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateY:'90deg'},{translateX:targetValues.targetWidth}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateY:delayFunction(delay,animation('0deg',config))},{translateX:delayFunction(delay,animation(0,config))}]},callback:callback};}",
};
class FlipInYRight {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, FlipOutEasyY);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(FlipOutEasyY);
    tmp3 = c2;
    if (closure_4()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = closure_0.getDelayFunction();
      const tmp2 = _slicedToArray(closure_0.getAnimationAndConfig(), 2);
      const animation = tmp2[0];
      closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n(targetWidth) {
        let obj = { initialValues: null, animations: null, callback: null };
        obj = { transform: null };
        const items = [{ perspective: 500 }, { rotateY: "90deg" }];
        obj = { translateX: targetWidth.targetWidth };
        items[2] = obj;
        obj.transform = items;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj;
        const obj1 = { transform: null };
        const items1 = [{ perspective: delayFunction(delay, first(500, closure_2)) }, ,];
        const obj2 = { perspective: delayFunction(delay, first(500, closure_2)) };
        items1[1] = { rotateY: delayFunction(delay, first("0deg", closure_2)) };
        const obj3 = { rotateY: delayFunction(delay, first("0deg", closure_2)) };
        items1[2] = { translateX: delayFunction(delay, first(0, closure_2)) };
        obj1.transform = items1;
        obj.animations = obj1;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { initialValues, delayFunction, delay, animation, config: tmp2[1], callback: callbackV };
      fn.__workletHash = 10571583952635;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = FlipInYRight;
_inherits(FlipInYRight, fn(1706).ComplexAnimationBuilder);
const entry3 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  },
};
const items3 = [entry3];
const importDefaultResultResult3 = _createClass(FlipInYRight, null, items3);
importDefaultResultResult3.presetName = "FlipInYRight";
let closure_9 = {
  code: "function pnpm_FlipTs5(){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateX:'90deg'}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateX:delayFunction(delay,animation('0deg',config))}]},callback:callback};}",
};
class FlipInEasyX {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, FlipOutEasyY);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(FlipOutEasyY);
    tmp3 = c2;
    if (closure_4()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = closure_0.getDelayFunction();
      const tmp2 = _slicedToArray(closure_0.getAnimationAndConfig(), 2);
      const animation = tmp2[0];
      closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n() {
        let obj = { initialValues: null, animations: null, callback: null };
        obj = { transform: null };
        const items = [{ perspective: 500 }, { rotateX: "90deg" }];
        obj.transform = items;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj;
        obj = { transform: null };
        const items1 = [{ perspective: delayFunction(delay, first(500, closure_2)) }];
        const obj1 = { perspective: delayFunction(delay, first(500, closure_2)) };
        items1[1] = { rotateX: delayFunction(delay, first("0deg", closure_2)) };
        obj.transform = items1;
        obj.animations = obj;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { initialValues, delayFunction, delay, animation, config: tmp2[1], callback: callbackV };
      fn.__workletHash = 5139023366989;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = FlipInEasyX;
_inherits(FlipInEasyX, fn(1706).ComplexAnimationBuilder);
const entry4 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  },
};
const items4 = [entry4];
const importDefaultResultResult4 = _createClass(FlipInEasyX, null, items4);
importDefaultResultResult4.presetName = "FlipInEasyX";
let closure_10 = {
  code: "function pnpm_FlipTs6(){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateY:'90deg'}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateY:delayFunction(delay,animation('0deg',config))}]},callback:callback};}",
};
class FlipInEasyY {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, FlipOutEasyY);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(FlipOutEasyY);
    tmp3 = c2;
    if (closure_4()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = closure_0.getDelayFunction();
      const tmp2 = _slicedToArray(closure_0.getAnimationAndConfig(), 2);
      const animation = tmp2[0];
      closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n() {
        let obj = { initialValues: null, animations: null, callback: null };
        obj = { transform: null };
        const items = [{ perspective: 500 }, { rotateY: "90deg" }];
        obj.transform = items;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj;
        obj = { transform: null };
        const items1 = [{ perspective: delayFunction(delay, first(500, closure_2)) }];
        const obj1 = { perspective: delayFunction(delay, first(500, closure_2)) };
        items1[1] = { rotateY: delayFunction(delay, first("0deg", closure_2)) };
        obj.transform = items1;
        obj.animations = obj;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { initialValues, delayFunction, delay, animation, config: tmp2[1], callback: callbackV };
      fn.__workletHash = 4577193778414;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = FlipInEasyY;
_inherits(FlipInEasyY, fn(1706).ComplexAnimationBuilder);
const entry5 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  },
};
const items5 = [entry5];
const importDefaultResultResult5 = _createClass(FlipInEasyY, null, items5);
importDefaultResultResult5.presetName = "FlipInEasyY";
let closure_11 = {
  code: "function pnpm_FlipTs7(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateX:'0deg'},{translateY:0}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateX:delayFunction(delay,animation('90deg',config))},{translateY:delayFunction(delay,animation(-targetValues.currentHeight,config))}]},callback:callback};}",
};
class FlipOutXUp {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, FlipOutEasyY);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(FlipOutEasyY);
    tmp3 = c2;
    if (closure_4()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = closure_0.getDelayFunction();
      const tmp2 = _slicedToArray(closure_0.getAnimationAndConfig(), 2);
      const animation = tmp2[0];
      closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n(currentHeight) {
        let obj = { initialValues: null, animations: null, callback: null };
        obj = { transform: null };
        const items = [{ perspective: 500 }, { rotateX: "0deg" }, { translateY: 0 }];
        obj.transform = items;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj;
        obj = { transform: null };
        const items1 = [{ perspective: delayFunction(delay, first(500, closure_2)) }, ,];
        const obj1 = { perspective: delayFunction(delay, first(500, closure_2)) };
        items1[1] = { rotateX: delayFunction(delay, first("90deg", closure_2)) };
        const obj2 = { rotateX: delayFunction(delay, first("90deg", closure_2)) };
        items1[2] = { translateY: delayFunction(delay, first(-currentHeight.currentHeight, closure_2)) };
        obj.transform = items1;
        obj.animations = obj;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { initialValues, delayFunction, delay, animation, config: tmp2[1], callback: callbackV };
      fn.__workletHash = 3506458137332;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = FlipOutXUp;
_inherits(FlipOutXUp, fn(1706).ComplexAnimationBuilder);
const entry6 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  },
};
const items6 = [entry6];
const importDefaultResultResult6 = _createClass(FlipOutXUp, null, items6);
importDefaultResultResult6.presetName = "FlipOutXUp";
let closure_12 = {
  code: "function pnpm_FlipTs8(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateY:'0deg'},{translateX:0}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateY:delayFunction(delay,animation('-90deg',config))},{translateX:delayFunction(delay,animation(-targetValues.currentWidth,config))}]},callback:callback};}",
};
class FlipOutYLeft {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, FlipOutEasyY);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(FlipOutEasyY);
    tmp3 = c2;
    if (closure_4()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = closure_0.getDelayFunction();
      const tmp2 = _slicedToArray(closure_0.getAnimationAndConfig(), 2);
      const animation = tmp2[0];
      closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n(currentWidth) {
        let obj = { initialValues: null, animations: null, callback: null };
        obj = { transform: null };
        const items = [{ perspective: 500 }, { rotateY: "0deg" }, { translateX: 0 }];
        obj.transform = items;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj;
        obj = { transform: null };
        const items1 = [{ perspective: delayFunction(delay, first(500, closure_2)) }, ,];
        const obj1 = { perspective: delayFunction(delay, first(500, closure_2)) };
        items1[1] = { rotateY: delayFunction(delay, first("-90deg", closure_2)) };
        const obj2 = { rotateY: delayFunction(delay, first("-90deg", closure_2)) };
        items1[2] = { translateX: delayFunction(delay, first(-currentWidth.currentWidth, closure_2)) };
        obj.transform = items1;
        obj.animations = obj;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { initialValues, delayFunction, delay, animation, config: tmp2[1], callback: callbackV };
      fn.__workletHash = 17419119819311;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = FlipOutYLeft;
_inherits(FlipOutYLeft, fn(1706).ComplexAnimationBuilder);
const entry7 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  },
};
const items7 = [entry7];
const importDefaultResultResult7 = _createClass(FlipOutYLeft, null, items7);
importDefaultResultResult7.presetName = "FlipOutYLeft";
let closure_13 = {
  code: "function pnpm_FlipTs9(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateX:'0deg'},{translateY:0}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateX:delayFunction(delay,animation('-90deg',config))},{translateY:delayFunction(delay,animation(targetValues.currentHeight,config))}]},callback:callback};}",
};
class FlipOutXDown {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, FlipOutEasyY);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(FlipOutEasyY);
    tmp3 = c2;
    if (closure_4()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = closure_0.getDelayFunction();
      const tmp2 = _slicedToArray(closure_0.getAnimationAndConfig(), 2);
      const animation = tmp2[0];
      closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n(currentHeight) {
        let obj = { initialValues: null, animations: null, callback: null };
        obj = { transform: null };
        const items = [{ perspective: 500 }, { rotateX: "0deg" }, { translateY: 0 }];
        obj.transform = items;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj;
        obj = { transform: null };
        const items1 = [{ perspective: delayFunction(delay, first(500, closure_2)) }, ,];
        const obj1 = { perspective: delayFunction(delay, first(500, closure_2)) };
        items1[1] = { rotateX: delayFunction(delay, first("-90deg", closure_2)) };
        const obj2 = { rotateX: delayFunction(delay, first("-90deg", closure_2)) };
        items1[2] = { translateY: delayFunction(delay, first(currentHeight.currentHeight, closure_2)) };
        obj.transform = items1;
        obj.animations = obj;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { initialValues, delayFunction, delay, animation, config: tmp2[1], callback: callbackV };
      fn.__workletHash = 9961334044730;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = FlipOutXDown;
_inherits(FlipOutXDown, fn(1706).ComplexAnimationBuilder);
const entry8 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  },
};
const items8 = [entry8];
const importDefaultResultResult8 = _createClass(FlipOutXDown, null, items8);
importDefaultResultResult8.presetName = "FlipOutXDown";
let closure_14 = {
  code: "function pnpm_FlipTs10(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateY:'0deg'},{translateX:0}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateY:delayFunction(delay,animation('90deg',config))},{translateX:delayFunction(delay,animation(targetValues.currentWidth,config))}]},callback:callback};}",
};
class FlipOutYRight {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, FlipOutEasyY);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(FlipOutEasyY);
    tmp3 = c2;
    if (closure_4()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = closure_0.getDelayFunction();
      const tmp2 = _slicedToArray(closure_0.getAnimationAndConfig(), 2);
      const animation = tmp2[0];
      closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n(currentWidth) {
        let obj = { initialValues: null, animations: null, callback: null };
        obj = { transform: null };
        const items = [{ perspective: 500 }, { rotateY: "0deg" }, { translateX: 0 }];
        obj.transform = items;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj;
        obj = { transform: null };
        const items1 = [{ perspective: delayFunction(delay, first(500, closure_2)) }, ,];
        const obj1 = { perspective: delayFunction(delay, first(500, closure_2)) };
        items1[1] = { rotateY: delayFunction(delay, first("90deg", closure_2)) };
        const obj2 = { rotateY: delayFunction(delay, first("90deg", closure_2)) };
        items1[2] = { translateX: delayFunction(delay, first(currentWidth.currentWidth, closure_2)) };
        obj.transform = items1;
        obj.animations = obj;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { initialValues, delayFunction, delay, animation, config: tmp2[1], callback: callbackV };
      fn.__workletHash = 12107293900726;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = FlipOutYRight;
_inherits(FlipOutYRight, fn(1706).ComplexAnimationBuilder);
const entry9 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  },
};
const items9 = [entry9];
const importDefaultResultResult9 = _createClass(FlipOutYRight, null, items9);
importDefaultResultResult9.presetName = "FlipOutYRight";
let closure_15 = {
  code: "function pnpm_FlipTs11(){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateX:'0deg'}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateX:delayFunction(delay,animation('90deg',config))}]},callback:callback};}",
};
class FlipOutEasyX {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, FlipOutEasyY);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(FlipOutEasyY);
    tmp3 = c2;
    if (closure_4()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = closure_0.getDelayFunction();
      const tmp2 = _slicedToArray(closure_0.getAnimationAndConfig(), 2);
      const animation = tmp2[0];
      closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n() {
        let obj = { initialValues: null, animations: null, callback: null };
        obj = { transform: null };
        const items = [{ perspective: 500 }, { rotateX: "0deg" }];
        obj.transform = items;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj;
        obj = { transform: null };
        const items1 = [{ perspective: delayFunction(delay, first(500, closure_2)) }];
        const obj1 = { perspective: delayFunction(delay, first(500, closure_2)) };
        items1[1] = { rotateX: delayFunction(delay, first("90deg", closure_2)) };
        obj.transform = items1;
        obj.animations = obj;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { initialValues, delayFunction, delay, animation, config: tmp2[1], callback: callbackV };
      fn.__workletHash = 9417124215224;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = FlipOutEasyX;
_inherits(FlipOutEasyX, fn(1706).ComplexAnimationBuilder);
const entry10 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  },
};
const items10 = [entry10];
const importDefaultResultResult10 = _createClass(FlipOutEasyX, null, items10);
importDefaultResultResult10.presetName = "FlipOutEasyX";
let closure_16 = {
  code: "function pnpm_FlipTs12(){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateY:'0deg'}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateY:delayFunction(delay,animation('90deg',config))}]},callback:callback};}",
};
class FlipOutEasyY {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, FlipOutEasyY);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(FlipOutEasyY);
    tmp3 = c2;
    if (closure_4()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = closure_0.getDelayFunction();
      const tmp2 = _slicedToArray(closure_0.getAnimationAndConfig(), 2);
      const animation = tmp2[0];
      closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n() {
        let obj = { initialValues: null, animations: null, callback: null };
        obj = { transform: null };
        const items = [{ perspective: 500 }, { rotateY: "0deg" }];
        obj.transform = items;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj;
        obj = { transform: null };
        const items1 = [{ perspective: delayFunction(delay, first(500, closure_2)) }];
        const obj1 = { perspective: delayFunction(delay, first(500, closure_2)) };
        items1[1] = { rotateY: delayFunction(delay, first("90deg", closure_2)) };
        obj.transform = items1;
        obj.animations = obj;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { initialValues, delayFunction, delay, animation, config: tmp2[1], callback: callbackV };
      fn.__workletHash = 4473299233947;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = FlipOutEasyY;
_inherits(FlipOutEasyY, fn(1706).ComplexAnimationBuilder);
const entry11 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  },
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
