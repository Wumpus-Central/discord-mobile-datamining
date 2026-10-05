// === Module 1770: ZoomIn ===

// Module 1770 (ZoomIn)
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
let closure_5 = { code: "function pnpm_ZoomTs1(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{scale:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{scale:0}],...initialValues},callback:callback};}" };
class ZoomIn {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, ZoomIn);
    let items1 = [...items];
    let obj = _getPrototypeOf(ZoomIn);
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
      const tmp2 = ZoomIn(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function t() {
        let items;
        let items1;
        let obj2;
        let obj4;
        const obj = { animations: obj2, initialValues: obj4, callback: callbackV };
        obj2 = { transform: items };
        items = [{ scale: delayFunction(delay, first(1, closure_2)) }];
        obj4 = { transform: items1 };
        items1 = [{ scale: 0 }];
        ({ scale: delayFunction(delay, first(1, closure_2)) });
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 1262081960523;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(ZoomIn, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = ZoomIn();
    return tmp;
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(ZoomIn, null, items);
importDefaultResultResult.presetName = "ZoomIn";
let closure_6 = { code: "function pnpm_ZoomTs2(){const{delayFunction,delay,animation,config,rotate,initialValues,callback}=this.__closure;return{animations:{transform:[{scale:delayFunction(delay,animation(1,config))},{rotate:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{scale:0},{rotate:rotate+\"rad\"}],...initialValues},callback:callback};}" };
class ZoomInRotate {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, ZoomInRotate);
    let items1 = [...items];
    let obj = _getPrototypeOf(ZoomInRotate);
    if (_isNativeReflectConstruct()) {
      const tmp5 = globalThis;
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = c2(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = closure_0.getDelayFunction();
      const tmp3 = ZoomInRotate(closure_0.getAnimationAndConfig(), 2);
      const first = tmp3[0];
      let closure_2 = tmp5;
      const delay = closure_0.getDelay();
      let str = "0.3";
      if (closure_0.rotateV) {
        str = closure_0.rotateV;
      }
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function t() {
        let items;
        let items1;
        let obj2;
        let obj5;
        const obj = { animations: obj2, initialValues: obj5, callback: callbackV };
        obj2 = { transform: items };
        items = [{ scale: delayFunction(delay, first(1, closure_2)) }, ];
        ({ scale: delayFunction(delay, first(1, closure_2)) });
        items[1] = { rotate: delayFunction(delay, first(0, closure_2)) };
        obj5 = { transform: items1 };
        items1 = [{ scale: 0 }, ];
        ({ rotate: delayFunction(delay, first(0, closure_2)) });
        items1[1] = { rotate: "" + str + "rad" };
        ({ rotate: "" + str + "rad" });
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp3[1], rotate: str, initialValues, callback: callbackV };
      fn.__workletHash = 15519876599894;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(ZoomInRotate, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry1 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = ZoomInRotate();
    return tmp;
  }
};
let items1 = [entry1];
const importDefaultResultResult1 = _createClass(ZoomInRotate, null, items1);
importDefaultResultResult1.presetName = "ZoomInRotate";
let closure_7 = { code: "function pnpm_ZoomTs3(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(0,config))},{scale:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{translateX:-values.windowWidth},{scale:0}],...initialValues},callback:callback};}" };
class ZoomInLeft {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, ZoomInLeft);
    let items1 = [...items];
    let obj = _getPrototypeOf(ZoomInLeft);
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
      const tmp2 = ZoomInLeft(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function t(translateX) {
        let items;
        let items1;
        let obj2;
        let obj5;
        const obj = { animations: obj2, initialValues: obj5, callback: callbackV };
        obj2 = { transform: items };
        items = [{ translateX: delayFunction(delay, first(0, closure_2)) }, ];
        ({ translateX: delayFunction(delay, first(0, closure_2)) });
        items[1] = { scale: delayFunction(delay, first(1, closure_2)) };
        obj5 = { transform: items1 };
        items1 = [, ];
        const obj6 = { translateX: -translateX.windowWidth };
        items1[0] = obj6;
        items1[1] = { scale: 0 };
        ({ scale: delayFunction(delay, first(1, closure_2)) });
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 9623778840206;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(ZoomInLeft, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry2 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = ZoomInLeft();
    return tmp;
  }
};
const items2 = [entry2];
const importDefaultResultResult2 = _createClass(ZoomInLeft, null, items2);
importDefaultResultResult2.presetName = "ZoomInLeft";
let closure_8 = { code: "function pnpm_ZoomTs4(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(0,config))},{scale:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{translateX:values.windowWidth},{scale:0}],...initialValues},callback:callback};}" };
class ZoomInRight {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, ZoomInRight);
    let items1 = [...items];
    let obj = _getPrototypeOf(ZoomInRight);
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
      const tmp2 = ZoomInRight(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function t(translateX) {
        let items;
        let items1;
        let obj2;
        let obj5;
        const obj = { animations: obj2, initialValues: obj5, callback: callbackV };
        obj2 = { transform: items };
        items = [{ translateX: delayFunction(delay, first(0, closure_2)) }, ];
        ({ translateX: delayFunction(delay, first(0, closure_2)) });
        items[1] = { scale: delayFunction(delay, first(1, closure_2)) };
        obj5 = { transform: items1 };
        items1 = [, ];
        const obj6 = { translateX: translateX.windowWidth };
        items1[0] = obj6;
        items1[1] = { scale: 0 };
        ({ scale: delayFunction(delay, first(1, closure_2)) });
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 3951441470564;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(ZoomInRight, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry3 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = ZoomInRight();
    return tmp;
  }
};
const items3 = [entry3];
const importDefaultResultResult3 = _createClass(ZoomInRight, null, items3);
importDefaultResultResult3.presetName = "ZoomInRight";
let closure_9 = { code: "function pnpm_ZoomTs5(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,animation(0,config))},{scale:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{translateY:-values.windowHeight},{scale:0}],...initialValues},callback:callback};}" };
class ZoomInUp {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, ZoomInUp);
    let items1 = [...items];
    let obj = _getPrototypeOf(ZoomInUp);
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
      const tmp2 = ZoomInUp(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function t(translateY) {
        let items;
        let items1;
        let obj2;
        let obj5;
        const obj = { animations: obj2, initialValues: obj5, callback: callbackV };
        obj2 = { transform: items };
        items = [{ translateY: delayFunction(delay, first(0, closure_2)) }, ];
        ({ translateY: delayFunction(delay, first(0, closure_2)) });
        items[1] = { scale: delayFunction(delay, first(1, closure_2)) };
        obj5 = { transform: items1 };
        items1 = [, ];
        const obj6 = { translateY: -translateY.windowHeight };
        items1[0] = obj6;
        items1[1] = { scale: 0 };
        ({ scale: delayFunction(delay, first(1, closure_2)) });
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 11673124834481;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(ZoomInUp, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry4 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = ZoomInUp();
    return tmp;
  }
};
const items4 = [entry4];
const importDefaultResultResult4 = _createClass(ZoomInUp, null, items4);
importDefaultResultResult4.presetName = "ZoomInUp";
let closure_10 = { code: "function pnpm_ZoomTs6(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,animation(0,config))},{scale:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{translateY:values.windowHeight},{scale:0}],...initialValues},callback:callback};}" };
class ZoomInDown {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, ZoomInDown);
    let items1 = [...items];
    let obj = _getPrototypeOf(ZoomInDown);
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
      const tmp2 = ZoomInDown(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function t(translateY) {
        let items;
        let items1;
        let obj2;
        let obj5;
        const obj = { animations: obj2, initialValues: obj5, callback: callbackV };
        obj2 = { transform: items };
        items = [{ translateY: delayFunction(delay, first(0, closure_2)) }, ];
        ({ translateY: delayFunction(delay, first(0, closure_2)) });
        items[1] = { scale: delayFunction(delay, first(1, closure_2)) };
        obj5 = { transform: items1 };
        items1 = [, ];
        const obj6 = { translateY: translateY.windowHeight };
        items1[0] = obj6;
        items1[1] = { scale: 0 };
        ({ scale: delayFunction(delay, first(1, closure_2)) });
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 16474472853503;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(ZoomInDown, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry5 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = ZoomInDown();
    return tmp;
  }
};
const items5 = [entry5];
const importDefaultResultResult5 = _createClass(ZoomInDown, null, items5);
importDefaultResultResult5.presetName = "ZoomInDown";
let closure_11 = { code: "function pnpm_ZoomTs7(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,animation(0,config))},{scale:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{translateY:-values.targetHeight},{scale:0}],...initialValues},callback:callback};}" };
class ZoomInEasyUp {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, ZoomInEasyUp);
    let items1 = [...items];
    let obj = _getPrototypeOf(ZoomInEasyUp);
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
      const tmp2 = ZoomInEasyUp(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function t(targetHeight) {
        let items;
        let items1;
        let obj2;
        let obj5;
        const obj = { animations: obj2, initialValues: obj5, callback: callbackV };
        obj2 = { transform: items };
        items = [{ translateY: delayFunction(delay, first(0, closure_2)) }, ];
        ({ translateY: delayFunction(delay, first(0, closure_2)) });
        items[1] = { scale: delayFunction(delay, first(1, closure_2)) };
        obj5 = { transform: items1 };
        items1 = [, ];
        const obj6 = { translateY: -targetHeight.targetHeight };
        items1[0] = obj6;
        items1[1] = { scale: 0 };
        ({ scale: delayFunction(delay, first(1, closure_2)) });
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 9580191401742;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(ZoomInEasyUp, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry6 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = ZoomInEasyUp();
    return tmp;
  }
};
const items6 = [entry6];
const importDefaultResultResult6 = _createClass(ZoomInEasyUp, null, items6);
importDefaultResultResult6.presetName = "ZoomInEasyUp";
let closure_12 = { code: "function pnpm_ZoomTs8(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,animation(0,config))},{scale:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{translateY:values.targetHeight},{scale:0}],...initialValues},callback:callback};}" };
class ZoomInEasyDown {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, ZoomInEasyDown);
    let items1 = [...items];
    let obj = _getPrototypeOf(ZoomInEasyDown);
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
      const tmp2 = ZoomInEasyDown(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function t(targetHeight) {
        let items;
        let items1;
        let obj2;
        let obj5;
        const obj = { animations: obj2, initialValues: obj5, callback: callbackV };
        obj2 = { transform: items };
        items = [{ translateY: delayFunction(delay, first(0, closure_2)) }, ];
        ({ translateY: delayFunction(delay, first(0, closure_2)) });
        items[1] = { scale: delayFunction(delay, first(1, closure_2)) };
        obj5 = { transform: items1 };
        items1 = [, ];
        const obj6 = { translateY: targetHeight.targetHeight };
        items1[0] = obj6;
        items1[1] = { scale: 0 };
        ({ scale: delayFunction(delay, first(1, closure_2)) });
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 8663849822572;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(ZoomInEasyDown, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry7 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = ZoomInEasyDown();
    return tmp;
  }
};
const items7 = [entry7];
const importDefaultResultResult7 = _createClass(ZoomInEasyDown, null, items7);
importDefaultResultResult7.presetName = "ZoomInEasyDown";
let closure_13 = { code: "function pnpm_ZoomTs9(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{scale:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{scale:1}],...initialValues},callback:callback};}" };
class ZoomOut {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, ZoomOut);
    let items1 = [...items];
    let obj = _getPrototypeOf(ZoomOut);
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
      const tmp2 = ZoomOut(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function t() {
        let items;
        let items1;
        let obj2;
        let obj4;
        const obj = { animations: obj2, initialValues: obj4, callback: callbackV };
        obj2 = { transform: items };
        items = [{ scale: delayFunction(delay, first(0, closure_2)) }];
        obj4 = { transform: items1 };
        items1 = [{ scale: 1 }];
        ({ scale: delayFunction(delay, first(0, closure_2)) });
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 11880899972707;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(ZoomOut, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry8 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = ZoomOut();
    return tmp;
  }
};
const items8 = [entry8];
const importDefaultResultResult8 = _createClass(ZoomOut, null, items8);
importDefaultResultResult8.presetName = "ZoomOut";
let closure_14 = { code: "function pnpm_ZoomTs10(){const{delayFunction,delay,animation,config,rotate,initialValues,callback}=this.__closure;return{animations:{transform:[{scale:delayFunction(delay,animation(0,config))},{rotate:delayFunction(delay,animation(rotate,config))}]},initialValues:{transform:[{scale:1},{rotate:'0rad'}],...initialValues},callback:callback};}" };
class ZoomOutRotate {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, ZoomOutRotate);
    let items1 = [...items];
    let obj = _getPrototypeOf(ZoomOutRotate);
    if (_isNativeReflectConstruct()) {
      const tmp5 = globalThis;
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = c2(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = closure_0.getDelayFunction();
      const tmp3 = ZoomOutRotate(closure_0.getAnimationAndConfig(), 2);
      const first = tmp3[0];
      let closure_2 = tmp5;
      const delay = closure_0.getDelay();
      let str = "0.3";
      if (closure_0.rotateV) {
        str = closure_0.rotateV;
      }
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function t() {
        let items;
        let items1;
        let obj2;
        let obj5;
        const obj = { animations: obj2, initialValues: obj5, callback: callbackV };
        obj2 = { transform: items };
        items = [{ scale: delayFunction(delay, first(0, closure_2)) }, ];
        ({ scale: delayFunction(delay, first(0, closure_2)) });
        items[1] = { rotate: delayFunction(delay, first(str, closure_2)) };
        obj5 = { transform: items1 };
        items1 = [{ scale: 1 }, { rotate: "0rad" }];
        ({ rotate: delayFunction(delay, first(str, closure_2)) });
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp3[1], rotate: str, initialValues, callback: callbackV };
      fn.__workletHash = 14218456220590;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(ZoomOutRotate, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry9 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = ZoomOutRotate();
    return tmp;
  }
};
const items9 = [entry9];
const importDefaultResultResult9 = _createClass(ZoomOutRotate, null, items9);
importDefaultResultResult9.presetName = "ZoomOutRotate";
let closure_15 = { code: "function pnpm_ZoomTs11(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(-values.windowWidth,config))},{scale:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{translateX:0},{scale:1}],...initialValues},callback:callback};}" };
class ZoomOutLeft {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, ZoomOutLeft);
    let items1 = [...items];
    let obj = _getPrototypeOf(ZoomOutLeft);
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
      const tmp2 = ZoomOutLeft(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function t(windowWidth) {
        let items;
        let items1;
        let obj2;
        let obj5;
        const obj = { animations: obj2, initialValues: obj5, callback: callbackV };
        obj2 = { transform: items };
        items = [{ translateX: delayFunction(delay, first(-windowWidth.windowWidth, closure_2)) }, ];
        ({ translateX: delayFunction(delay, first(-windowWidth.windowWidth, closure_2)) });
        items[1] = { scale: delayFunction(delay, first(0, closure_2)) };
        obj5 = { transform: items1 };
        items1 = [{ translateX: 0 }, { scale: 1 }];
        ({ scale: delayFunction(delay, first(0, closure_2)) });
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 4016039076957;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(ZoomOutLeft, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry10 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = ZoomOutLeft();
    return tmp;
  }
};
const items10 = [entry10];
const importDefaultResultResult10 = _createClass(ZoomOutLeft, null, items10);
importDefaultResultResult10.presetName = "ZoomOutLeft";
let closure_16 = { code: "function pnpm_ZoomTs12(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(values.windowWidth,config))},{scale:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{translateX:0},{scale:1}],...initialValues},callback:callback};}" };
class ZoomOutRight {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, ZoomOutRight);
    let items1 = [...items];
    let obj = _getPrototypeOf(ZoomOutRight);
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
      const tmp2 = ZoomOutRight(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function t(windowWidth) {
        let items;
        let items1;
        let obj2;
        let obj5;
        const obj = { animations: obj2, initialValues: obj5, callback: callbackV };
        obj2 = { transform: items };
        items = [{ translateX: delayFunction(delay, first(windowWidth.windowWidth, closure_2)) }, ];
        ({ translateX: delayFunction(delay, first(windowWidth.windowWidth, closure_2)) });
        items[1] = { scale: delayFunction(delay, first(0, closure_2)) };
        obj5 = { transform: items1 };
        items1 = [{ translateX: 0 }, { scale: 1 }];
        ({ scale: delayFunction(delay, first(0, closure_2)) });
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 13414598349747;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(ZoomOutRight, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry11 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = ZoomOutRight();
    return tmp;
  }
};
const items11 = [entry11];
const importDefaultResultResult11 = _createClass(ZoomOutRight, null, items11);
importDefaultResultResult11.presetName = "ZoomOutRight";
let closure_17 = { code: "function pnpm_ZoomTs13(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,animation(-values.windowHeight,config))},{scale:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{translateY:0},{scale:1}],...initialValues},callback:callback};}" };
class ZoomOutUp {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, ZoomOutUp);
    let items1 = [...items];
    let obj = _getPrototypeOf(ZoomOutUp);
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
      const tmp2 = ZoomOutUp(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function t(windowHeight) {
        let items;
        let items1;
        let obj2;
        let obj5;
        const obj = { animations: obj2, initialValues: obj5, callback: callbackV };
        obj2 = { transform: items };
        items = [{ translateY: delayFunction(delay, first(-windowHeight.windowHeight, closure_2)) }, ];
        ({ translateY: delayFunction(delay, first(-windowHeight.windowHeight, closure_2)) });
        items[1] = { scale: delayFunction(delay, first(0, closure_2)) };
        obj5 = { transform: items1 };
        items1 = [{ translateY: 0 }, { scale: 1 }];
        ({ scale: delayFunction(delay, first(0, closure_2)) });
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 570907039910;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(ZoomOutUp, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry12 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = ZoomOutUp();
    return tmp;
  }
};
const items12 = [entry12];
const importDefaultResultResult12 = _createClass(ZoomOutUp, null, items12);
importDefaultResultResult12.presetName = "ZoomOutUp";
let closure_18 = { code: "function pnpm_ZoomTs14(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,animation(values.windowHeight,config))},{scale:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{translateY:0},{scale:1}],...initialValues},callback:callback};}" };
class ZoomOutDown {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, ZoomOutDown);
    let items1 = [...items];
    let obj = _getPrototypeOf(ZoomOutDown);
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
      const tmp2 = ZoomOutDown(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function t(windowHeight) {
        let items;
        let items1;
        let obj2;
        let obj5;
        const obj = { animations: obj2, initialValues: obj5, callback: callbackV };
        obj2 = { transform: items };
        items = [{ translateY: delayFunction(delay, first(windowHeight.windowHeight, closure_2)) }, ];
        ({ translateY: delayFunction(delay, first(windowHeight.windowHeight, closure_2)) });
        items[1] = { scale: delayFunction(delay, first(0, closure_2)) };
        obj5 = { transform: items1 };
        items1 = [{ translateY: 0 }, { scale: 1 }];
        ({ scale: delayFunction(delay, first(0, closure_2)) });
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 4332816695692;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(ZoomOutDown, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry13 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = ZoomOutDown();
    return tmp;
  }
};
const items13 = [entry13];
const importDefaultResultResult13 = _createClass(ZoomOutDown, null, items13);
importDefaultResultResult13.presetName = "ZoomOutDown";
let closure_19 = { code: "function pnpm_ZoomTs15(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,animation(-values.currentHeight,config))},{scale:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{translateY:0},{scale:1}],...initialValues},callback:callback};}" };
class ZoomOutEasyUp {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, ZoomOutEasyUp);
    let items1 = [...items];
    let obj = _getPrototypeOf(ZoomOutEasyUp);
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
      const tmp2 = ZoomOutEasyUp(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function t(currentHeight) {
        let items;
        let items1;
        let obj2;
        let obj5;
        const obj = { animations: obj2, initialValues: obj5, callback: callbackV };
        obj2 = { transform: items };
        items = [{ translateY: delayFunction(delay, first(-currentHeight.currentHeight, closure_2)) }, ];
        ({ translateY: delayFunction(delay, first(-currentHeight.currentHeight, closure_2)) });
        items[1] = { scale: delayFunction(delay, first(0, closure_2)) };
        obj5 = { transform: items1 };
        items1 = [{ translateY: 0 }, { scale: 1 }];
        ({ scale: delayFunction(delay, first(0, closure_2)) });
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 1576389803461;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(ZoomOutEasyUp, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry14 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = ZoomOutEasyUp();
    return tmp;
  }
};
const items14 = [entry14];
const importDefaultResultResult14 = _createClass(ZoomOutEasyUp, null, items14);
importDefaultResultResult14.presetName = "ZoomOutEasyUp";
let closure_20 = { code: "function pnpm_ZoomTs16(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,animation(values.currentHeight,config))},{scale:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{translateY:0},{scale:1}],...initialValues},callback:callback};}" };
class ZoomOutEasyDown {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, ZoomOutEasyDown);
    let items1 = [...items];
    let obj = _getPrototypeOf(ZoomOutEasyDown);
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
      const tmp2 = ZoomOutEasyDown(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function t(currentHeight) {
        let items;
        let items1;
        let obj2;
        let obj5;
        const obj = { animations: obj2, initialValues: obj5, callback: callbackV };
        obj2 = { transform: items };
        items = [{ translateY: delayFunction(delay, first(currentHeight.currentHeight, closure_2)) }, ];
        ({ translateY: delayFunction(delay, first(currentHeight.currentHeight, closure_2)) });
        items[1] = { scale: delayFunction(delay, first(0, closure_2)) };
        obj5 = { transform: items1 };
        items1 = [{ translateY: 0 }, { scale: 1 }];
        ({ scale: delayFunction(delay, first(0, closure_2)) });
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 14278999536075;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(ZoomOutEasyDown, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry15 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = ZoomOutEasyDown();
    return tmp;
  }
};
const items15 = [entry15];
const importDefaultResultResult15 = _createClass(ZoomOutEasyDown, null, items15);
importDefaultResultResult15.presetName = "ZoomOutEasyDown";
const ZoomIn_export = importDefaultResultResult;
const ZoomInRotate_export = importDefaultResultResult1;
const ZoomInLeft_export = importDefaultResultResult2;
const ZoomInRight_export = importDefaultResultResult3;
const ZoomInUp_export = importDefaultResultResult4;
const ZoomInDown_export = importDefaultResultResult5;
const ZoomInEasyUp_export = importDefaultResultResult6;
const ZoomInEasyDown_export = importDefaultResultResult7;
const ZoomOut_export = importDefaultResultResult8;
const ZoomOutRotate_export = importDefaultResultResult9;
const ZoomOutLeft_export = importDefaultResultResult10;
const ZoomOutRight_export = importDefaultResultResult11;
const ZoomOutUp_export = importDefaultResultResult12;
const ZoomOutDown_export = importDefaultResultResult13;
const ZoomOutEasyUp_export = importDefaultResultResult14;
const ZoomOutEasyDown_export = importDefaultResultResult15;

export { ZoomIn_export as ZoomIn };
export { ZoomInRotate_export as ZoomInRotate };
export { ZoomInLeft_export as ZoomInLeft };
export { ZoomInRight_export as ZoomInRight };
export { ZoomInUp_export as ZoomInUp };
export { ZoomInDown_export as ZoomInDown };
export { ZoomInEasyUp_export as ZoomInEasyUp };
export { ZoomInEasyDown_export as ZoomInEasyDown };
export { ZoomOut_export as ZoomOut };
export { ZoomOutRotate_export as ZoomOutRotate };
export { ZoomOutLeft_export as ZoomOutLeft };
export { ZoomOutRight_export as ZoomOutRight };
export { ZoomOutUp_export as ZoomOutUp };
export { ZoomOutDown_export as ZoomOutDown };
export { ZoomOutEasyUp_export as ZoomOutEasyUp };
export { ZoomOutEasyDown_export as ZoomOutEasyDown };