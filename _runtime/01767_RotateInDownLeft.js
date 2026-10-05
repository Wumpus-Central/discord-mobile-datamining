// === Module 1767: RotateInDownLeft ===

// Module 1767 (RotateInDownLeft)
import BaseAnimationBuilder from "BaseAnimationBuilder" /* 1713 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c2 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
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
let closure_5 = { code: "function pnpm_RotateTs1(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{rotate:delayFunction(delay,animation('0deg',config))},{translateX:delayFunction(delay,animation(0,config))},{translateY:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{rotate:'-90deg'},{translateX:values.targetWidth/2-values.targetHeight/2},{translateY:-(values.targetWidth/2-values.targetHeight/2)}],...initialValues},callback:callback};}" };
class RotateInDownLeft {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, RotateInDownLeft);
    let items1 = [...items];
    let obj = _getPrototypeOf(RotateInDownLeft);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = c2(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = closure_0.getDelayFunction();
      const tmp2 = RotateInDownLeft(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n(targetWidth) {
        let items;
        let items1;
        let obj2;
        let obj6;
        const obj = { animations: obj2, initialValues: obj6, callback: callbackV };
        obj2 = { opacity: delayFunction(delay, first(1, closure_2)), transform: items };
        items = [{ rotate: delayFunction(delay, first("0deg", closure_2)) }, , ];
        ({ rotate: delayFunction(delay, first("0deg", closure_2)) });
        items[1] = { translateX: delayFunction(delay, first(0, closure_2)) };
        ({ translateX: delayFunction(delay, first(0, closure_2)) });
        items[2] = { translateY: delayFunction(delay, first(0, closure_2)) };
        obj6 = { opacity: 0, transform: items1 };
        items1 = [{ rotate: "-90deg" }, , ];
        const obj7 = { translateX: targetWidth.targetWidth / 2 - targetWidth.targetHeight / 2 };
        items1[1] = obj7;
        items1[2] = { translateY: -targetWidth.targetWidth / 2 - targetWidth.targetHeight / 2 };
        ({ translateY: delayFunction(delay, first(0, closure_2)) });
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 1900668823867;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(RotateInDownLeft, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = RotateInDownLeft();
    return tmp;
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(RotateInDownLeft, null, items);
importDefaultResultResult.presetName = "RotateInDownLeft";
let closure_6 = { code: "function pnpm_RotateTs2(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{rotate:delayFunction(delay,animation('0deg',config))},{translateX:delayFunction(delay,animation(0,config))},{translateY:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{rotate:'90deg'},{translateX:-(values.targetWidth/2-values.targetHeight/2)},{translateY:-(values.targetWidth/2-values.targetHeight/2)}],...initialValues},callback:callback};}" };
class RotateInDownRight {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, RotateInDownRight);
    let items1 = [...items];
    let obj = _getPrototypeOf(RotateInDownRight);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = c2(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = closure_0.getDelayFunction();
      const tmp2 = RotateInDownRight(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n(targetWidth) {
        let items;
        let items1;
        let obj2;
        let obj6;
        const obj = { animations: obj2, initialValues: obj6, callback: callbackV };
        obj2 = { opacity: delayFunction(delay, first(1, closure_2)), transform: items };
        items = [{ rotate: delayFunction(delay, first("0deg", closure_2)) }, , ];
        ({ rotate: delayFunction(delay, first("0deg", closure_2)) });
        items[1] = { translateX: delayFunction(delay, first(0, closure_2)) };
        ({ translateX: delayFunction(delay, first(0, closure_2)) });
        items[2] = { translateY: delayFunction(delay, first(0, closure_2)) };
        obj6 = { opacity: 0, transform: items1 };
        items1 = [{ rotate: "90deg" }, , ];
        const obj7 = { translateX: -targetWidth.targetWidth / 2 - targetWidth.targetHeight / 2 };
        items1[1] = obj7;
        items1[2] = { translateY: -targetWidth.targetWidth / 2 - targetWidth.targetHeight / 2 };
        ({ translateY: delayFunction(delay, first(0, closure_2)) });
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 1066189129817;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(RotateInDownRight, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry1 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = RotateInDownRight();
    return tmp;
  }
};
let items1 = [entry1];
const importDefaultResultResult1 = _createClass(RotateInDownRight, null, items1);
importDefaultResultResult1.presetName = "RotateInDownRight";
let closure_7 = { code: "function pnpm_RotateTs3(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{rotate:delayFunction(delay,animation('0deg',config))},{translateX:delayFunction(delay,animation(0,config))},{translateY:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{rotate:'90deg'},{translateX:values.targetWidth/2-values.targetHeight/2},{translateY:values.targetWidth/2-values.targetHeight/2}],...initialValues},callback:callback};}" };
class RotateInUpLeft {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, RotateInUpLeft);
    let items1 = [...items];
    let obj = _getPrototypeOf(RotateInUpLeft);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = c2(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = closure_0.getDelayFunction();
      const tmp2 = RotateInUpLeft(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n(targetWidth) {
        let items;
        let items1;
        let obj2;
        let obj6;
        const obj = { animations: obj2, initialValues: obj6, callback: callbackV };
        obj2 = { opacity: delayFunction(delay, first(1, closure_2)), transform: items };
        items = [{ rotate: delayFunction(delay, first("0deg", closure_2)) }, , ];
        ({ rotate: delayFunction(delay, first("0deg", closure_2)) });
        items[1] = { translateX: delayFunction(delay, first(0, closure_2)) };
        ({ translateX: delayFunction(delay, first(0, closure_2)) });
        items[2] = { translateY: delayFunction(delay, first(0, closure_2)) };
        obj6 = { opacity: 0, transform: items1 };
        items1 = [{ rotate: "90deg" }, , ];
        const obj7 = { translateX: targetWidth.targetWidth / 2 - targetWidth.targetHeight / 2 };
        items1[1] = obj7;
        items1[2] = { translateY: targetWidth.targetWidth / 2 - targetWidth.targetHeight / 2 };
        ({ translateY: delayFunction(delay, first(0, closure_2)) });
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 11999620665656;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(RotateInUpLeft, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry2 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = RotateInUpLeft();
    return tmp;
  }
};
const items2 = [entry2];
const importDefaultResultResult2 = _createClass(RotateInUpLeft, null, items2);
importDefaultResultResult2.presetName = "RotateInUpLeft";
let closure_8 = { code: "function pnpm_RotateTs4(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{rotate:delayFunction(delay,animation('0deg',config))},{translateX:delayFunction(delay,animation(0,config))},{translateY:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{rotate:'-90deg'},{translateX:-(values.targetWidth/2-values.targetHeight/2)},{translateY:values.targetWidth/2-values.targetHeight/2}],...initialValues},callback:callback};}" };
class RotateInUpRight {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, RotateInUpRight);
    let items1 = [...items];
    let obj = _getPrototypeOf(RotateInUpRight);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = c2(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = closure_0.getDelayFunction();
      const tmp2 = RotateInUpRight(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n(targetWidth) {
        let items;
        let items1;
        let obj2;
        let obj6;
        const obj = { animations: obj2, initialValues: obj6, callback: callbackV };
        obj2 = { opacity: delayFunction(delay, first(1, closure_2)), transform: items };
        items = [{ rotate: delayFunction(delay, first("0deg", closure_2)) }, , ];
        ({ rotate: delayFunction(delay, first("0deg", closure_2)) });
        items[1] = { translateX: delayFunction(delay, first(0, closure_2)) };
        ({ translateX: delayFunction(delay, first(0, closure_2)) });
        items[2] = { translateY: delayFunction(delay, first(0, closure_2)) };
        obj6 = { opacity: 0, transform: items1 };
        items1 = [{ rotate: "-90deg" }, , ];
        const obj7 = { translateX: -targetWidth.targetWidth / 2 - targetWidth.targetHeight / 2 };
        items1[1] = obj7;
        items1[2] = { translateY: targetWidth.targetWidth / 2 - targetWidth.targetHeight / 2 };
        ({ translateY: delayFunction(delay, first(0, closure_2)) });
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 15143335307550;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(RotateInUpRight, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry3 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = RotateInUpRight();
    return tmp;
  }
};
const items3 = [entry3];
const importDefaultResultResult3 = _createClass(RotateInUpRight, null, items3);
importDefaultResultResult3.presetName = "RotateInUpRight";
let closure_9 = { code: "function pnpm_RotateTs5(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{rotate:delayFunction(delay,animation('90deg',config))},{translateX:delayFunction(delay,animation(values.currentWidth/2-values.currentHeight/2,config))},{translateY:delayFunction(delay,animation(values.currentWidth/2-values.currentHeight/2,config))}]},initialValues:{opacity:1,transform:[{rotate:'0deg'},{translateX:0},{translateY:0}],...initialValues},callback:callback};}" };
class RotateOutDownLeft {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, RotateOutDownLeft);
    let items1 = [...items];
    let obj = _getPrototypeOf(RotateOutDownLeft);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = c2(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = closure_0.getDelayFunction();
      const tmp2 = RotateOutDownLeft(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n(currentWidth) {
        let items;
        let items1;
        let obj2;
        let obj6;
        const obj = { animations: obj2, initialValues: obj6, callback: callbackV };
        obj2 = { opacity: delayFunction(delay, first(0, closure_2)), transform: items };
        items = [{ rotate: delayFunction(delay, first("90deg", closure_2)) }, , ];
        ({ rotate: delayFunction(delay, first("90deg", closure_2)) });
        items[1] = { translateX: delayFunction(delay, first(currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2, closure_2)) };
        ({ translateX: delayFunction(delay, first(currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2, closure_2)) });
        items[2] = { translateY: delayFunction(delay, first(currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2, closure_2)) };
        obj6 = { opacity: 1, transform: items1 };
        items1 = [{ rotate: "0deg" }, { translateX: 0 }, { translateY: 0 }];
        ({ translateY: delayFunction(delay, first(currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2, closure_2)) });
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 11712932777694;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(RotateOutDownLeft, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry4 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = RotateOutDownLeft();
    return tmp;
  }
};
const items4 = [entry4];
const importDefaultResultResult4 = _createClass(RotateOutDownLeft, null, items4);
importDefaultResultResult4.presetName = "RotateOutDownLeft";
let closure_10 = { code: "function pnpm_RotateTs6(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{rotate:delayFunction(delay,animation('-90deg',config))},{translateX:delayFunction(delay,animation(-(values.currentWidth/2-values.currentHeight/2),config))},{translateY:delayFunction(delay,animation(values.currentWidth/2-values.currentHeight/2,config))}]},initialValues:{opacity:1,transform:[{rotate:'0deg'},{translateX:0},{translateY:0}],...initialValues},callback:callback};}" };
class RotateOutDownRight {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, RotateOutDownRight);
    let items1 = [...items];
    let obj = _getPrototypeOf(RotateOutDownRight);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = c2(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = closure_0.getDelayFunction();
      const tmp2 = RotateOutDownRight(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n(currentWidth) {
        let items;
        let items1;
        let obj2;
        let obj6;
        const obj = { animations: obj2, initialValues: obj6, callback: callbackV };
        obj2 = { opacity: delayFunction(delay, first(0, closure_2)), transform: items };
        items = [{ rotate: delayFunction(delay, first("-90deg", closure_2)) }, , ];
        ({ rotate: delayFunction(delay, first("-90deg", closure_2)) });
        items[1] = { translateX: delayFunction(delay, first(-currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2, closure_2)) };
        ({ translateX: delayFunction(delay, first(-currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2, closure_2)) });
        items[2] = { translateY: delayFunction(delay, first(currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2, closure_2)) };
        obj6 = { opacity: 1, transform: items1 };
        items1 = [{ rotate: "0deg" }, { translateX: 0 }, { translateY: 0 }];
        ({ translateY: delayFunction(delay, first(currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2, closure_2)) });
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 16449003298460;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(RotateOutDownRight, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry5 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = RotateOutDownRight();
    return tmp;
  }
};
const items5 = [entry5];
const importDefaultResultResult5 = _createClass(RotateOutDownRight, null, items5);
importDefaultResultResult5.presetName = "RotateOutDownRight";
let closure_11 = { code: "function pnpm_RotateTs7(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{rotate:delayFunction(delay,animation('-90deg',config))},{translateX:delayFunction(delay,animation(values.currentWidth/2-values.currentHeight/2,config))},{translateY:delayFunction(delay,animation(-(values.currentWidth/2-values.currentHeight/2),config))}]},initialValues:{opacity:1,transform:[{rotate:'0deg'},{translateX:0},{translateY:0}],...initialValues},callback:callback};}" };
class RotateOutUpLeft {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, RotateOutUpLeft);
    let items1 = [...items];
    let obj = _getPrototypeOf(RotateOutUpLeft);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = c2(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = closure_0.getDelayFunction();
      const tmp2 = RotateOutUpLeft(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n(currentWidth) {
        let items;
        let items1;
        let obj2;
        let obj6;
        const obj = { animations: obj2, initialValues: obj6, callback: callbackV };
        obj2 = { opacity: delayFunction(delay, first(0, closure_2)), transform: items };
        items = [{ rotate: delayFunction(delay, first("-90deg", closure_2)) }, , ];
        ({ rotate: delayFunction(delay, first("-90deg", closure_2)) });
        items[1] = { translateX: delayFunction(delay, first(currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2, closure_2)) };
        ({ translateX: delayFunction(delay, first(currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2, closure_2)) });
        items[2] = { translateY: delayFunction(delay, first(-currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2, closure_2)) };
        obj6 = { opacity: 1, transform: items1 };
        items1 = [{ rotate: "0deg" }, { translateX: 0 }, { translateY: 0 }];
        ({ translateY: delayFunction(delay, first(-currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2, closure_2)) });
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 16777964503997;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(RotateOutUpLeft, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry6 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = RotateOutUpLeft();
    return tmp;
  }
};
const items6 = [entry6];
const importDefaultResultResult6 = _createClass(RotateOutUpLeft, null, items6);
importDefaultResultResult6.presetName = "RotateOutUpLeft";
let closure_12 = { code: "function pnpm_RotateTs8(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{rotate:delayFunction(delay,animation('90deg',config))},{translateX:delayFunction(delay,animation(-(values.currentWidth/2-values.currentHeight/2),config))},{translateY:delayFunction(delay,animation(-(values.currentWidth/2-values.currentHeight/2),config))}]},initialValues:{opacity:1,transform:[{rotate:'0deg'},{translateX:0},{translateY:0}],...initialValues},callback:callback};}" };
class RotateOutUpRight {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, RotateOutUpRight);
    let items1 = [...items];
    let obj = _getPrototypeOf(RotateOutUpRight);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = c2(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = closure_0.getDelayFunction();
      const tmp2 = RotateOutUpRight(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n(currentWidth) {
        let items;
        let items1;
        let obj2;
        let obj6;
        const obj = { animations: obj2, initialValues: obj6, callback: callbackV };
        obj2 = { opacity: delayFunction(delay, first(0, closure_2)), transform: items };
        items = [{ rotate: delayFunction(delay, first("90deg", closure_2)) }, , ];
        ({ rotate: delayFunction(delay, first("90deg", closure_2)) });
        items[1] = { translateX: delayFunction(delay, first(-currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2, closure_2)) };
        ({ translateX: delayFunction(delay, first(-currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2, closure_2)) });
        items[2] = { translateY: delayFunction(delay, first(-currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2, closure_2)) };
        obj6 = { opacity: 1, transform: items1 };
        items1 = [{ rotate: "0deg" }, { translateX: 0 }, { translateY: 0 }];
        ({ translateY: delayFunction(delay, first(-currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2, closure_2)) });
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 14312403608563;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(RotateOutUpRight, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry7 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = RotateOutUpRight();
    return tmp;
  }
};
const items7 = [entry7];
const importDefaultResultResult7 = _createClass(RotateOutUpRight, null, items7);
importDefaultResultResult7.presetName = "RotateOutUpRight";
const RotateInDownLeft_export = importDefaultResultResult;
const RotateInDownRight_export = importDefaultResultResult1;
const RotateInUpLeft_export = importDefaultResultResult2;
const RotateInUpRight_export = importDefaultResultResult3;
const RotateOutDownLeft_export = importDefaultResultResult4;
const RotateOutDownRight_export = importDefaultResultResult5;
const RotateOutUpLeft_export = importDefaultResultResult6;
const RotateOutUpRight_export = importDefaultResultResult7;

export { RotateInDownLeft_export as RotateInDownLeft };
export { RotateInDownRight_export as RotateInDownRight };
export { RotateInUpLeft_export as RotateInUpLeft };
export { RotateInUpRight_export as RotateInUpRight };
export { RotateOutDownLeft_export as RotateOutDownLeft };
export { RotateOutDownRight_export as RotateOutDownRight };
export { RotateOutUpLeft_export as RotateOutUpLeft };
export { RotateOutUpRight_export as RotateOutUpRight };