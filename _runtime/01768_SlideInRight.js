// === Module 1768: SlideInRight ===

// Module 1768 (SlideInRight)
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
let closure_5 = { code: "function pnpm_SlideTs1(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originX:delayFunction(delay,animation(values.targetOriginX,config))},initialValues:{originX:values.targetOriginX+values.windowWidth,...initialValues},callback:callback};}" };
class SlideInRight {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    let closure_0;
    _classCallCheck(this, SlideInRight);
    const items1 = [...items];
    let obj = _getPrototypeOf(SlideInRight);
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
      const tmp2 = SlideInRight(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function e(targetOriginX) {
        let obj3;
        const obj = { animations: { originX: delayFunction(delay, first(targetOriginX.targetOriginX, closure_2)) }, initialValues: obj3, callback: callbackV };
        ({ originX: delayFunction(delay, first(targetOriginX.targetOriginX, closure_2)) });
        obj3 = { originX: targetOriginX.targetOriginX + targetOriginX.windowWidth };
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 10760418577189;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(SlideInRight, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = SlideInRight();
    return tmp;
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(SlideInRight, null, items);
importDefaultResultResult.presetName = "SlideInRight";
let closure_6 = { code: "function pnpm_SlideTs2(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originX:delayFunction(delay,animation(values.targetOriginX,config))},initialValues:{originX:values.targetOriginX-values.windowWidth,...initialValues},callback:callback};}" };
class SlideInLeft {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    let closure_0;
    _classCallCheck(this, SlideInLeft);
    const items1 = [...items];
    let obj = _getPrototypeOf(SlideInLeft);
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
      const tmp2 = SlideInLeft(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function e(targetOriginX) {
        let obj3;
        const obj = { animations: { originX: delayFunction(delay, first(targetOriginX.targetOriginX, closure_2)) }, initialValues: obj3, callback: callbackV };
        ({ originX: delayFunction(delay, first(targetOriginX.targetOriginX, closure_2)) });
        obj3 = { originX: targetOriginX.targetOriginX - targetOriginX.windowWidth };
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 2180499422144;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(SlideInLeft, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry1 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = SlideInLeft();
    return tmp;
  }
};
let items1 = [entry1];
const importDefaultResultResult1 = _createClass(SlideInLeft, null, items1);
importDefaultResultResult1.presetName = "SlideInLeft";
let closure_7 = { code: "function pnpm_SlideTs3(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originX:delayFunction(delay,animation(Math.max(values.currentOriginX+values.windowWidth,values.windowWidth),config))},initialValues:{originX:values.currentOriginX,...initialValues},callback:callback};}" };
class SlideOutRight {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    let closure_0;
    _classCallCheck(this, SlideOutRight);
    const items1 = [...items];
    let obj = _getPrototypeOf(SlideOutRight);
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
      const tmp2 = SlideOutRight(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function e(currentOriginX) {
        let obj3;
        const obj = { animations: { originX: delayFunction(delay, first(Math.max(currentOriginX.currentOriginX + currentOriginX.windowWidth, currentOriginX.windowWidth), closure_2)) }, initialValues: obj3, callback: callbackV };
        ({ originX: delayFunction(delay, first(Math.max(currentOriginX.currentOriginX + currentOriginX.windowWidth, currentOriginX.windowWidth), closure_2)) });
        obj3 = { originX: currentOriginX.currentOriginX };
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 12812296890492;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(SlideOutRight, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry2 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = SlideOutRight();
    return tmp;
  }
};
const items2 = [entry2];
const importDefaultResultResult2 = _createClass(SlideOutRight, null, items2);
importDefaultResultResult2.presetName = "SlideOutRight";
let closure_8 = { code: "function pnpm_SlideTs4(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originX:delayFunction(delay,animation(Math.min(values.currentOriginX-values.windowWidth,-values.windowWidth),config))},initialValues:{originX:values.currentOriginX,...initialValues},callback:callback};}" };
class SlideOutLeft {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    let closure_0;
    _classCallCheck(this, SlideOutLeft);
    const items1 = [...items];
    let obj = _getPrototypeOf(SlideOutLeft);
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
      const tmp2 = SlideOutLeft(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function e(currentOriginX) {
        let obj3;
        const obj = { animations: { originX: delayFunction(delay, first(Math.min(currentOriginX.currentOriginX - currentOriginX.windowWidth, -currentOriginX.windowWidth), closure_2)) }, initialValues: obj3, callback: callbackV };
        ({ originX: delayFunction(delay, first(Math.min(currentOriginX.currentOriginX - currentOriginX.windowWidth, -currentOriginX.windowWidth), closure_2)) });
        obj3 = { originX: currentOriginX.currentOriginX };
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 6273927341006;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(SlideOutLeft, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry3 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = SlideOutLeft();
    return tmp;
  }
};
const items3 = [entry3];
const importDefaultResultResult3 = _createClass(SlideOutLeft, null, items3);
importDefaultResultResult3.presetName = "SlideOutLeft";
let closure_9 = { code: "function pnpm_SlideTs5(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originY:delayFunction(delay,animation(values.targetOriginY,config))},initialValues:{originY:-values.windowHeight,...initialValues},callback:callback};}" };
class SlideInUp {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    let closure_0;
    _classCallCheck(this, SlideInUp);
    const items1 = [...items];
    let obj = _getPrototypeOf(SlideInUp);
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
      const tmp2 = SlideInUp(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function e(originY) {
        let obj3;
        const obj = { animations: { originY: delayFunction(delay, first(originY.targetOriginY, closure_2)) }, initialValues: obj3, callback: callbackV };
        ({ originY: delayFunction(delay, first(originY.targetOriginY, closure_2)) });
        obj3 = { originY: -originY.windowHeight };
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 9846507393044;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(SlideInUp, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry4 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = SlideInUp();
    return tmp;
  }
};
const items4 = [entry4];
const importDefaultResultResult4 = _createClass(SlideInUp, null, items4);
importDefaultResultResult4.presetName = "SlideInUp";
let closure_10 = { code: "function pnpm_SlideTs6(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originY:delayFunction(delay,animation(values.targetOriginY,config))},initialValues:{originY:values.targetOriginY+values.windowHeight,...initialValues},callback:callback};}" };
class SlideInDown {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    let closure_0;
    _classCallCheck(this, SlideInDown);
    const items1 = [...items];
    let obj = _getPrototypeOf(SlideInDown);
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
      const tmp2 = SlideInDown(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function e(targetOriginY) {
        let obj3;
        const obj = { animations: { originY: delayFunction(delay, first(targetOriginY.targetOriginY, closure_2)) }, initialValues: obj3, callback: callbackV };
        ({ originY: delayFunction(delay, first(targetOriginY.targetOriginY, closure_2)) });
        obj3 = { originY: targetOriginY.targetOriginY + targetOriginY.windowHeight };
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 9348728185019;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(SlideInDown, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry5 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = SlideInDown();
    return tmp;
  }
};
const items5 = [entry5];
const importDefaultResultResult5 = _createClass(SlideInDown, null, items5);
importDefaultResultResult5.presetName = "SlideInDown";
let closure_11 = { code: "function pnpm_SlideTs7(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originY:delayFunction(delay,animation(Math.min(values.currentOriginY-values.windowHeight,-values.windowHeight),config))},initialValues:{originY:values.currentOriginY,...initialValues},callback:callback};}" };
class SlideOutUp {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    let closure_0;
    _classCallCheck(this, SlideOutUp);
    const items1 = [...items];
    let obj = _getPrototypeOf(SlideOutUp);
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
      const tmp2 = SlideOutUp(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function e(currentOriginY) {
        let obj3;
        const obj = { animations: { originY: delayFunction(delay, first(Math.min(currentOriginY.currentOriginY - currentOriginY.windowHeight, -currentOriginY.windowHeight), closure_2)) }, initialValues: obj3, callback: callbackV };
        ({ originY: delayFunction(delay, first(Math.min(currentOriginY.currentOriginY - currentOriginY.windowHeight, -currentOriginY.windowHeight), closure_2)) });
        obj3 = { originY: currentOriginY.currentOriginY };
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 14850009730573;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(SlideOutUp, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry6 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = SlideOutUp();
    return tmp;
  }
};
const items6 = [entry6];
const importDefaultResultResult6 = _createClass(SlideOutUp, null, items6);
importDefaultResultResult6.presetName = "SlideOutUp";
let closure_12 = { code: "function pnpm_SlideTs8(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originY:delayFunction(delay,animation(Math.max(values.currentOriginY+values.windowHeight,values.windowHeight),config))},initialValues:{originY:values.currentOriginY,...initialValues},callback:callback};}" };
class SlideOutDown {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    let closure_0;
    _classCallCheck(this, SlideOutDown);
    const items1 = [...items];
    let obj = _getPrototypeOf(SlideOutDown);
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
      const tmp2 = SlideOutDown(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function e(currentOriginY) {
        let obj3;
        const obj = { animations: { originY: delayFunction(delay, first(Math.max(currentOriginY.currentOriginY + currentOriginY.windowHeight, currentOriginY.windowHeight), closure_2)) }, initialValues: obj3, callback: callbackV };
        ({ originY: delayFunction(delay, first(Math.max(currentOriginY.currentOriginY + currentOriginY.windowHeight, currentOriginY.windowHeight), closure_2)) });
        obj3 = { originY: currentOriginY.currentOriginY };
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 14065812257143;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(SlideOutDown, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry7 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = SlideOutDown();
    return tmp;
  }
};
const items7 = [entry7];
const importDefaultResultResult7 = _createClass(SlideOutDown, null, items7);
importDefaultResultResult7.presetName = "SlideOutDown";
const SlideInRight_export = importDefaultResultResult;
const SlideInLeft_export = importDefaultResultResult1;
const SlideOutRight_export = importDefaultResultResult2;
const SlideOutLeft_export = importDefaultResultResult3;
const SlideInUp_export = importDefaultResultResult4;
const SlideInDown_export = importDefaultResultResult5;
const SlideOutUp_export = importDefaultResultResult6;
const SlideOutDown_export = importDefaultResultResult7;

export { SlideInRight_export as SlideInRight };
export { SlideInLeft_export as SlideInLeft };
export { SlideOutRight_export as SlideOutRight };
export { SlideOutLeft_export as SlideOutLeft };
export { SlideInUp_export as SlideInUp };
export { SlideInDown_export as SlideInDown };
export { SlideOutUp_export as SlideOutUp };
export { SlideOutDown_export as SlideOutDown };