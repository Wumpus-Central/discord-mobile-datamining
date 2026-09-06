// _runtime/metro/01760__.js
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
  code: "function pnpm_RotateTs1(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{rotate:delayFunction(delay,animation('0deg',config))},{translateX:delayFunction(delay,animation(0,config))},{translateY:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{rotate:'-90deg'},{translateX:values.targetWidth/2-values.targetHeight/2},{translateY:-(values.targetWidth/2-values.targetHeight/2)}],...initialValues},callback:callback};}",
};
class RotateInDownLeft {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, RotateOutUpRight);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(RotateOutUpRight);
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
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { opacity: delayFunction(delay, first(1, closure_2)), transform: null };
        obj = { rotate: delayFunction(delay, first("0deg", closure_2)) };
        const items = [obj, { translateX: delayFunction(delay, first(0, closure_2)) }];
        const obj1 = { translateX: delayFunction(delay, first(0, closure_2)) };
        items[2] = { translateY: delayFunction(delay, first(0, closure_2)) };
        obj.transform = items;
        obj.animations = obj;
        const obj3 = { opacity: 0, transform: null };
        const items1 = [
          { rotate: "-90deg" },
          { translateX: targetWidth.targetWidth / 2 - targetWidth.targetHeight / 2 },
          { translateY: -targetWidth.targetWidth / 2 - targetWidth.targetHeight / 2 },
        ];
        obj3.transform = items1;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj3;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 1900668823867;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = RotateInDownLeft;
_inherits(RotateInDownLeft, fn(1706).ComplexAnimationBuilder);
const entry = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  },
};
let items = [entry];
const importDefaultResultResult = _createClass(RotateInDownLeft, null, items);
importDefaultResultResult.presetName = "RotateInDownLeft";
let closure_6 = {
  code: "function pnpm_RotateTs2(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{rotate:delayFunction(delay,animation('0deg',config))},{translateX:delayFunction(delay,animation(0,config))},{translateY:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{rotate:'90deg'},{translateX:-(values.targetWidth/2-values.targetHeight/2)},{translateY:-(values.targetWidth/2-values.targetHeight/2)}],...initialValues},callback:callback};}",
};
class RotateInDownRight {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, RotateOutUpRight);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(RotateOutUpRight);
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
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { opacity: delayFunction(delay, first(1, closure_2)), transform: null };
        obj = { rotate: delayFunction(delay, first("0deg", closure_2)) };
        const items = [obj, { translateX: delayFunction(delay, first(0, closure_2)) }];
        const obj1 = { translateX: delayFunction(delay, first(0, closure_2)) };
        items[2] = { translateY: delayFunction(delay, first(0, closure_2)) };
        obj.transform = items;
        obj.animations = obj;
        const obj3 = { opacity: 0, transform: null };
        const items1 = [
          { rotate: "90deg" },
          { translateX: -targetWidth.targetWidth / 2 - targetWidth.targetHeight / 2 },
          { translateY: -targetWidth.targetWidth / 2 - targetWidth.targetHeight / 2 },
        ];
        obj3.transform = items1;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj3;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 1066189129817;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = RotateInDownRight;
_inherits(RotateInDownRight, fn(1706).ComplexAnimationBuilder);
const entry1 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  },
};
let items1 = [entry1];
const importDefaultResultResult1 = _createClass(RotateInDownRight, null, items1);
importDefaultResultResult1.presetName = "RotateInDownRight";
let closure_7 = {
  code: "function pnpm_RotateTs3(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{rotate:delayFunction(delay,animation('0deg',config))},{translateX:delayFunction(delay,animation(0,config))},{translateY:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{rotate:'90deg'},{translateX:values.targetWidth/2-values.targetHeight/2},{translateY:values.targetWidth/2-values.targetHeight/2}],...initialValues},callback:callback};}",
};
class RotateInUpLeft {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, RotateOutUpRight);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(RotateOutUpRight);
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
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { opacity: delayFunction(delay, first(1, closure_2)), transform: null };
        obj = { rotate: delayFunction(delay, first("0deg", closure_2)) };
        const items = [obj, { translateX: delayFunction(delay, first(0, closure_2)) }];
        const obj1 = { translateX: delayFunction(delay, first(0, closure_2)) };
        items[2] = { translateY: delayFunction(delay, first(0, closure_2)) };
        obj.transform = items;
        obj.animations = obj;
        const obj3 = { opacity: 0, transform: null };
        const items1 = [
          { rotate: "90deg" },
          { translateX: targetWidth.targetWidth / 2 - targetWidth.targetHeight / 2 },
          { translateY: targetWidth.targetWidth / 2 - targetWidth.targetHeight / 2 },
        ];
        obj3.transform = items1;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj3;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 11999620665656;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = RotateInUpLeft;
_inherits(RotateInUpLeft, fn(1706).ComplexAnimationBuilder);
const entry2 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  },
};
const items2 = [entry2];
const importDefaultResultResult2 = _createClass(RotateInUpLeft, null, items2);
importDefaultResultResult2.presetName = "RotateInUpLeft";
let closure_8 = {
  code: "function pnpm_RotateTs4(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{rotate:delayFunction(delay,animation('0deg',config))},{translateX:delayFunction(delay,animation(0,config))},{translateY:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{rotate:'-90deg'},{translateX:-(values.targetWidth/2-values.targetHeight/2)},{translateY:values.targetWidth/2-values.targetHeight/2}],...initialValues},callback:callback};}",
};
class RotateInUpRight {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, RotateOutUpRight);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(RotateOutUpRight);
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
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { opacity: delayFunction(delay, first(1, closure_2)), transform: null };
        obj = { rotate: delayFunction(delay, first("0deg", closure_2)) };
        const items = [obj, { translateX: delayFunction(delay, first(0, closure_2)) }];
        const obj1 = { translateX: delayFunction(delay, first(0, closure_2)) };
        items[2] = { translateY: delayFunction(delay, first(0, closure_2)) };
        obj.transform = items;
        obj.animations = obj;
        const obj3 = { opacity: 0, transform: null };
        const items1 = [
          { rotate: "-90deg" },
          { translateX: -targetWidth.targetWidth / 2 - targetWidth.targetHeight / 2 },
          { translateY: targetWidth.targetWidth / 2 - targetWidth.targetHeight / 2 },
        ];
        obj3.transform = items1;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj3;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 15143335307550;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = RotateInUpRight;
_inherits(RotateInUpRight, fn(1706).ComplexAnimationBuilder);
const entry3 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  },
};
const items3 = [entry3];
const importDefaultResultResult3 = _createClass(RotateInUpRight, null, items3);
importDefaultResultResult3.presetName = "RotateInUpRight";
let closure_9 = {
  code: "function pnpm_RotateTs5(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{rotate:delayFunction(delay,animation('90deg',config))},{translateX:delayFunction(delay,animation(values.currentWidth/2-values.currentHeight/2,config))},{translateY:delayFunction(delay,animation(values.currentWidth/2-values.currentHeight/2,config))}]},initialValues:{opacity:1,transform:[{rotate:'0deg'},{translateX:0},{translateY:0}],...initialValues},callback:callback};}",
};
class RotateOutDownLeft {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, RotateOutUpRight);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(RotateOutUpRight);
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
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { opacity: delayFunction(delay, first(0, closure_2)), transform: null };
        obj = { rotate: delayFunction(delay, first("90deg", closure_2)) };
        const items = [
          obj,
          {
            translateX: delayFunction(
              delay,
              first(currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2, closure_2),
            ),
          },
        ];
        const obj1 = {
          translateX: delayFunction(
            delay,
            first(currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2, closure_2),
          ),
        };
        items[2] = {
          translateY: delayFunction(
            delay,
            first(currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2, closure_2),
          ),
        };
        obj.transform = items;
        obj.animations = obj;
        const obj3 = { opacity: 1, transform: null };
        const items1 = [{ rotate: "0deg" }, { translateX: 0 }, { translateY: 0 }];
        obj3.transform = items1;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj3;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 11712932777694;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = RotateOutDownLeft;
_inherits(RotateOutDownLeft, fn(1706).ComplexAnimationBuilder);
const entry4 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  },
};
const items4 = [entry4];
const importDefaultResultResult4 = _createClass(RotateOutDownLeft, null, items4);
importDefaultResultResult4.presetName = "RotateOutDownLeft";
let closure_10 = {
  code: "function pnpm_RotateTs6(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{rotate:delayFunction(delay,animation('-90deg',config))},{translateX:delayFunction(delay,animation(-(values.currentWidth/2-values.currentHeight/2),config))},{translateY:delayFunction(delay,animation(values.currentWidth/2-values.currentHeight/2,config))}]},initialValues:{opacity:1,transform:[{rotate:'0deg'},{translateX:0},{translateY:0}],...initialValues},callback:callback};}",
};
class RotateOutDownRight {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, RotateOutUpRight);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(RotateOutUpRight);
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
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { opacity: delayFunction(delay, first(0, closure_2)), transform: null };
        obj = { rotate: delayFunction(delay, first("-90deg", closure_2)) };
        const items = [
          obj,
          {
            translateX: delayFunction(
              delay,
              first(-currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2, closure_2),
            ),
          },
        ];
        const obj1 = {
          translateX: delayFunction(
            delay,
            first(-currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2, closure_2),
          ),
        };
        items[2] = {
          translateY: delayFunction(
            delay,
            first(currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2, closure_2),
          ),
        };
        obj.transform = items;
        obj.animations = obj;
        const obj3 = { opacity: 1, transform: null };
        const items1 = [{ rotate: "0deg" }, { translateX: 0 }, { translateY: 0 }];
        obj3.transform = items1;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj3;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 16449003298460;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = RotateOutDownRight;
_inherits(RotateOutDownRight, fn(1706).ComplexAnimationBuilder);
const entry5 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  },
};
const items5 = [entry5];
const importDefaultResultResult5 = _createClass(RotateOutDownRight, null, items5);
importDefaultResultResult5.presetName = "RotateOutDownRight";
let closure_11 = {
  code: "function pnpm_RotateTs7(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{rotate:delayFunction(delay,animation('-90deg',config))},{translateX:delayFunction(delay,animation(values.currentWidth/2-values.currentHeight/2,config))},{translateY:delayFunction(delay,animation(-(values.currentWidth/2-values.currentHeight/2),config))}]},initialValues:{opacity:1,transform:[{rotate:'0deg'},{translateX:0},{translateY:0}],...initialValues},callback:callback};}",
};
class RotateOutUpLeft {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, RotateOutUpRight);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(RotateOutUpRight);
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
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { opacity: delayFunction(delay, first(0, closure_2)), transform: null };
        obj = { rotate: delayFunction(delay, first("-90deg", closure_2)) };
        const items = [
          obj,
          {
            translateX: delayFunction(
              delay,
              first(currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2, closure_2),
            ),
          },
        ];
        const obj1 = {
          translateX: delayFunction(
            delay,
            first(currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2, closure_2),
          ),
        };
        items[2] = {
          translateY: delayFunction(
            delay,
            first(-currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2, closure_2),
          ),
        };
        obj.transform = items;
        obj.animations = obj;
        const obj3 = { opacity: 1, transform: null };
        const items1 = [{ rotate: "0deg" }, { translateX: 0 }, { translateY: 0 }];
        obj3.transform = items1;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj3;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 16777964503997;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = RotateOutUpLeft;
_inherits(RotateOutUpLeft, fn(1706).ComplexAnimationBuilder);
const entry6 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  },
};
const items6 = [entry6];
const importDefaultResultResult6 = _createClass(RotateOutUpLeft, null, items6);
importDefaultResultResult6.presetName = "RotateOutUpLeft";
let closure_12 = {
  code: "function pnpm_RotateTs8(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{rotate:delayFunction(delay,animation('90deg',config))},{translateX:delayFunction(delay,animation(-(values.currentWidth/2-values.currentHeight/2),config))},{translateY:delayFunction(delay,animation(-(values.currentWidth/2-values.currentHeight/2),config))}]},initialValues:{opacity:1,transform:[{rotate:'0deg'},{translateX:0},{translateY:0}],...initialValues},callback:callback};}",
};
class RotateOutUpRight {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, RotateOutUpRight);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(RotateOutUpRight);
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
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { opacity: delayFunction(delay, first(0, closure_2)), transform: null };
        obj = { rotate: delayFunction(delay, first("90deg", closure_2)) };
        const items = [
          obj,
          {
            translateX: delayFunction(
              delay,
              first(-currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2, closure_2),
            ),
          },
        ];
        const obj1 = {
          translateX: delayFunction(
            delay,
            first(-currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2, closure_2),
          ),
        };
        items[2] = {
          translateY: delayFunction(
            delay,
            first(-currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2, closure_2),
          ),
        };
        obj.transform = items;
        obj.animations = obj;
        const obj3 = { opacity: 1, transform: null };
        const items1 = [{ rotate: "0deg" }, { translateX: 0 }, { translateY: 0 }];
        obj3.transform = items1;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj3;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 14312403608563;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = RotateOutUpRight;
_inherits(RotateOutUpRight, fn(1706).ComplexAnimationBuilder);
const entry7 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  },
};
const items7 = [entry7];
const importDefaultResultResult7 = _createClass(RotateOutUpRight, null, items7);
importDefaultResultResult7.presetName = "RotateOutUpRight";

export const RotateInDownLeft = importDefaultResultResult;
export const RotateInDownRight = importDefaultResultResult1;
export const RotateInUpLeft = importDefaultResultResult2;
export const RotateInUpRight = importDefaultResultResult3;
export const RotateOutDownLeft = importDefaultResultResult4;
export const RotateOutDownRight = importDefaultResultResult5;
export const RotateOutUpLeft = importDefaultResultResult6;
export const RotateOutUpRight = importDefaultResultResult7;
