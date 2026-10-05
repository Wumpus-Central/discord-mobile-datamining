// === Module 1763: FlipInXUp ===

// Module 1763 (FlipInXUp)
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
let closure_5 = { code: "function pnpm_FlipTs1(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateX:'90deg'},{translateY:-targetValues.targetHeight}],...initialValues},animations:{transform:[{perspective:500},{rotateX:delayFunction(delay,animation('0deg',config))},{translateY:delayFunction(delay,animation(0,config))}]},callback:callback};}" };
class FlipInXUp {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, FlipInXUp);
    let items1 = [...items];
    let obj = _getPrototypeOf(FlipInXUp);
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
      const tmp2 = FlipInXUp(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n(targetHeight) {
        let items;
        let items1;
        let obj2;
        let obj4;
        const obj = { initialValues: obj2, animations: obj4, callback: callbackV };
        obj2 = { transform: items };
        items = [{ perspective: 500 }, { rotateX: "90deg" }, ];
        const obj3 = { translateY: -targetHeight.targetHeight };
        items[2] = obj3;
        const merged = Object.assign(initialValues);
        obj4 = { transform: items1 };
        items1 = [{ perspective: 500 }, { rotateX: delayFunction(delay, first("0deg", closure_2)) }, ];
        ({ rotateX: delayFunction(delay, first("0deg", closure_2)) });
        items1[2] = { translateY: delayFunction(delay, first(0, closure_2)) };
        ({ translateY: delayFunction(delay, first(0, closure_2)) });
        return obj;
      };
      fn.__closure = { initialValues, delayFunction, delay, animation: first, config: tmp2[1], callback: callbackV };
      fn.__workletHash = 17482936202676;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(FlipInXUp, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = FlipInXUp();
    return tmp;
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(FlipInXUp, null, items);
importDefaultResultResult.presetName = "FlipInXUp";
let closure_6 = { code: "function pnpm_FlipTs2(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateY:'-90deg'},{translateX:-targetValues.targetWidth}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateY:delayFunction(delay,animation('0deg',config))},{translateX:delayFunction(delay,animation(0,config))}]},callback:callback};}" };
class FlipInYLeft {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, FlipInYLeft);
    let items1 = [...items];
    let obj = _getPrototypeOf(FlipInYLeft);
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
      const tmp2 = FlipInYLeft(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n(targetWidth) {
        let items;
        let items1;
        let obj2;
        let obj4;
        const obj = { initialValues: obj2, animations: obj4, callback: callbackV };
        obj2 = { transform: items };
        items = [{ perspective: 500 }, { rotateY: "-90deg" }, ];
        const obj3 = { translateX: -targetWidth.targetWidth };
        items[2] = obj3;
        const merged = Object.assign(initialValues);
        obj4 = { transform: items1 };
        items1 = [{ perspective: delayFunction(delay, first(500, closure_2)) }, , ];
        ({ perspective: delayFunction(delay, first(500, closure_2)) });
        items1[1] = { rotateY: delayFunction(delay, first("0deg", closure_2)) };
        ({ rotateY: delayFunction(delay, first("0deg", closure_2)) });
        items1[2] = { translateX: delayFunction(delay, first(0, closure_2)) };
        ({ translateX: delayFunction(delay, first(0, closure_2)) });
        return obj;
      };
      fn.__closure = { initialValues, delayFunction, delay, animation: first, config: tmp2[1], callback: callbackV };
      fn.__workletHash = 7030831354781;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(FlipInYLeft, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry1 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = FlipInYLeft();
    return tmp;
  }
};
let items1 = [entry1];
const importDefaultResultResult1 = _createClass(FlipInYLeft, null, items1);
importDefaultResultResult1.presetName = "FlipInYLeft";
let closure_7 = { code: "function pnpm_FlipTs3(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateX:'-90deg'},{translateY:targetValues.targetHeight}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateX:delayFunction(delay,animation('0deg',config))},{translateY:delayFunction(delay,animation(0,config))}]},callback:callback};}" };
class FlipInXDown {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, FlipInXDown);
    let items1 = [...items];
    let obj = _getPrototypeOf(FlipInXDown);
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
      const tmp2 = FlipInXDown(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n(targetHeight) {
        let items;
        let items1;
        let obj2;
        let obj4;
        const obj = { initialValues: obj2, animations: obj4, callback: callbackV };
        obj2 = { transform: items };
        items = [{ perspective: 500 }, { rotateX: "-90deg" }, ];
        const obj3 = { translateY: targetHeight.targetHeight };
        items[2] = obj3;
        const merged = Object.assign(initialValues);
        obj4 = { transform: items1 };
        items1 = [{ perspective: delayFunction(delay, first(500, closure_2)) }, , ];
        ({ perspective: delayFunction(delay, first(500, closure_2)) });
        items1[1] = { rotateX: delayFunction(delay, first("0deg", closure_2)) };
        ({ rotateX: delayFunction(delay, first("0deg", closure_2)) });
        items1[2] = { translateY: delayFunction(delay, first(0, closure_2)) };
        ({ translateY: delayFunction(delay, first(0, closure_2)) });
        return obj;
      };
      fn.__closure = { initialValues, delayFunction, delay, animation: first, config: tmp2[1], callback: callbackV };
      fn.__workletHash = 8540727794920;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(FlipInXDown, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry2 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = FlipInXDown();
    return tmp;
  }
};
const items2 = [entry2];
const importDefaultResultResult2 = _createClass(FlipInXDown, null, items2);
importDefaultResultResult2.presetName = "FlipInXDown";
let closure_8 = { code: "function pnpm_FlipTs4(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateY:'90deg'},{translateX:targetValues.targetWidth}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateY:delayFunction(delay,animation('0deg',config))},{translateX:delayFunction(delay,animation(0,config))}]},callback:callback};}" };
class FlipInYRight {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, FlipInYRight);
    let items1 = [...items];
    let obj = _getPrototypeOf(FlipInYRight);
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
      const tmp2 = FlipInYRight(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n(targetWidth) {
        let items;
        let items1;
        let obj2;
        let obj4;
        const obj = { initialValues: obj2, animations: obj4, callback: callbackV };
        obj2 = { transform: items };
        items = [{ perspective: 500 }, { rotateY: "90deg" }, ];
        const obj3 = { translateX: targetWidth.targetWidth };
        items[2] = obj3;
        const merged = Object.assign(initialValues);
        obj4 = { transform: items1 };
        items1 = [{ perspective: delayFunction(delay, first(500, closure_2)) }, , ];
        ({ perspective: delayFunction(delay, first(500, closure_2)) });
        items1[1] = { rotateY: delayFunction(delay, first("0deg", closure_2)) };
        ({ rotateY: delayFunction(delay, first("0deg", closure_2)) });
        items1[2] = { translateX: delayFunction(delay, first(0, closure_2)) };
        ({ translateX: delayFunction(delay, first(0, closure_2)) });
        return obj;
      };
      fn.__closure = { initialValues, delayFunction, delay, animation: first, config: tmp2[1], callback: callbackV };
      fn.__workletHash = 10571583952635;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(FlipInYRight, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry3 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = FlipInYRight();
    return tmp;
  }
};
const items3 = [entry3];
const importDefaultResultResult3 = _createClass(FlipInYRight, null, items3);
importDefaultResultResult3.presetName = "FlipInYRight";
let closure_9 = { code: "function pnpm_FlipTs5(){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateX:'90deg'}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateX:delayFunction(delay,animation('0deg',config))}]},callback:callback};}" };
class FlipInEasyX {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, FlipInEasyX);
    let items1 = [...items];
    let obj = _getPrototypeOf(FlipInEasyX);
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
      const tmp2 = FlipInEasyX(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n() {
        let items;
        let items1;
        let obj2;
        let obj3;
        const obj = { initialValues: obj2, animations: obj3, callback: callbackV };
        obj2 = { transform: items };
        items = [{ perspective: 500 }, { rotateX: "90deg" }];
        const merged = Object.assign(initialValues);
        obj3 = { transform: items1 };
        items1 = [{ perspective: delayFunction(delay, first(500, closure_2)) }, ];
        ({ perspective: delayFunction(delay, first(500, closure_2)) });
        items1[1] = { rotateX: delayFunction(delay, first("0deg", closure_2)) };
        ({ rotateX: delayFunction(delay, first("0deg", closure_2)) });
        return obj;
      };
      fn.__closure = { initialValues, delayFunction, delay, animation: first, config: tmp2[1], callback: callbackV };
      fn.__workletHash = 5139023366989;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(FlipInEasyX, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry4 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = FlipInEasyX();
    return tmp;
  }
};
const items4 = [entry4];
const importDefaultResultResult4 = _createClass(FlipInEasyX, null, items4);
importDefaultResultResult4.presetName = "FlipInEasyX";
let closure_10 = { code: "function pnpm_FlipTs6(){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateY:'90deg'}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateY:delayFunction(delay,animation('0deg',config))}]},callback:callback};}" };
class FlipInEasyY {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, FlipInEasyY);
    let items1 = [...items];
    let obj = _getPrototypeOf(FlipInEasyY);
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
      const tmp2 = FlipInEasyY(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n() {
        let items;
        let items1;
        let obj2;
        let obj3;
        const obj = { initialValues: obj2, animations: obj3, callback: callbackV };
        obj2 = { transform: items };
        items = [{ perspective: 500 }, { rotateY: "90deg" }];
        const merged = Object.assign(initialValues);
        obj3 = { transform: items1 };
        items1 = [{ perspective: delayFunction(delay, first(500, closure_2)) }, ];
        ({ perspective: delayFunction(delay, first(500, closure_2)) });
        items1[1] = { rotateY: delayFunction(delay, first("0deg", closure_2)) };
        ({ rotateY: delayFunction(delay, first("0deg", closure_2)) });
        return obj;
      };
      fn.__closure = { initialValues, delayFunction, delay, animation: first, config: tmp2[1], callback: callbackV };
      fn.__workletHash = 4577193778414;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(FlipInEasyY, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry5 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = FlipInEasyY();
    return tmp;
  }
};
const items5 = [entry5];
const importDefaultResultResult5 = _createClass(FlipInEasyY, null, items5);
importDefaultResultResult5.presetName = "FlipInEasyY";
let closure_11 = { code: "function pnpm_FlipTs7(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateX:'0deg'},{translateY:0}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateX:delayFunction(delay,animation('90deg',config))},{translateY:delayFunction(delay,animation(-targetValues.currentHeight,config))}]},callback:callback};}" };
class FlipOutXUp {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, FlipOutXUp);
    let items1 = [...items];
    let obj = _getPrototypeOf(FlipOutXUp);
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
      const tmp2 = FlipOutXUp(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n(currentHeight) {
        let items;
        let items1;
        let obj2;
        let obj3;
        const obj = { initialValues: obj2, animations: obj3, callback: callbackV };
        obj2 = { transform: items };
        items = [{ perspective: 500 }, { rotateX: "0deg" }, { translateY: 0 }];
        const merged = Object.assign(initialValues);
        obj3 = { transform: items1 };
        items1 = [{ perspective: delayFunction(delay, first(500, closure_2)) }, , ];
        ({ perspective: delayFunction(delay, first(500, closure_2)) });
        items1[1] = { rotateX: delayFunction(delay, first("90deg", closure_2)) };
        ({ rotateX: delayFunction(delay, first("90deg", closure_2)) });
        items1[2] = { translateY: delayFunction(delay, first(-currentHeight.currentHeight, closure_2)) };
        ({ translateY: delayFunction(delay, first(-currentHeight.currentHeight, closure_2)) });
        return obj;
      };
      fn.__closure = { initialValues, delayFunction, delay, animation: first, config: tmp2[1], callback: callbackV };
      fn.__workletHash = 3506458137332;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(FlipOutXUp, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry6 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = FlipOutXUp();
    return tmp;
  }
};
const items6 = [entry6];
const importDefaultResultResult6 = _createClass(FlipOutXUp, null, items6);
importDefaultResultResult6.presetName = "FlipOutXUp";
let closure_12 = { code: "function pnpm_FlipTs8(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateY:'0deg'},{translateX:0}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateY:delayFunction(delay,animation('-90deg',config))},{translateX:delayFunction(delay,animation(-targetValues.currentWidth,config))}]},callback:callback};}" };
class FlipOutYLeft {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, FlipOutYLeft);
    let items1 = [...items];
    let obj = _getPrototypeOf(FlipOutYLeft);
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
      const tmp2 = FlipOutYLeft(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n(currentWidth) {
        let items;
        let items1;
        let obj2;
        let obj3;
        const obj = { initialValues: obj2, animations: obj3, callback: callbackV };
        obj2 = { transform: items };
        items = [{ perspective: 500 }, { rotateY: "0deg" }, { translateX: 0 }];
        const merged = Object.assign(initialValues);
        obj3 = { transform: items1 };
        items1 = [{ perspective: delayFunction(delay, first(500, closure_2)) }, , ];
        ({ perspective: delayFunction(delay, first(500, closure_2)) });
        items1[1] = { rotateY: delayFunction(delay, first("-90deg", closure_2)) };
        ({ rotateY: delayFunction(delay, first("-90deg", closure_2)) });
        items1[2] = { translateX: delayFunction(delay, first(-currentWidth.currentWidth, closure_2)) };
        ({ translateX: delayFunction(delay, first(-currentWidth.currentWidth, closure_2)) });
        return obj;
      };
      fn.__closure = { initialValues, delayFunction, delay, animation: first, config: tmp2[1], callback: callbackV };
      fn.__workletHash = 17419119819311;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(FlipOutYLeft, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry7 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = FlipOutYLeft();
    return tmp;
  }
};
const items7 = [entry7];
const importDefaultResultResult7 = _createClass(FlipOutYLeft, null, items7);
importDefaultResultResult7.presetName = "FlipOutYLeft";
let closure_13 = { code: "function pnpm_FlipTs9(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateX:'0deg'},{translateY:0}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateX:delayFunction(delay,animation('-90deg',config))},{translateY:delayFunction(delay,animation(targetValues.currentHeight,config))}]},callback:callback};}" };
class FlipOutXDown {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, FlipOutXDown);
    let items1 = [...items];
    let obj = _getPrototypeOf(FlipOutXDown);
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
      const tmp2 = FlipOutXDown(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n(currentHeight) {
        let items;
        let items1;
        let obj2;
        let obj3;
        const obj = { initialValues: obj2, animations: obj3, callback: callbackV };
        obj2 = { transform: items };
        items = [{ perspective: 500 }, { rotateX: "0deg" }, { translateY: 0 }];
        const merged = Object.assign(initialValues);
        obj3 = { transform: items1 };
        items1 = [{ perspective: delayFunction(delay, first(500, closure_2)) }, , ];
        ({ perspective: delayFunction(delay, first(500, closure_2)) });
        items1[1] = { rotateX: delayFunction(delay, first("-90deg", closure_2)) };
        ({ rotateX: delayFunction(delay, first("-90deg", closure_2)) });
        items1[2] = { translateY: delayFunction(delay, first(currentHeight.currentHeight, closure_2)) };
        ({ translateY: delayFunction(delay, first(currentHeight.currentHeight, closure_2)) });
        return obj;
      };
      fn.__closure = { initialValues, delayFunction, delay, animation: first, config: tmp2[1], callback: callbackV };
      fn.__workletHash = 9961334044730;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(FlipOutXDown, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry8 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = FlipOutXDown();
    return tmp;
  }
};
const items8 = [entry8];
const importDefaultResultResult8 = _createClass(FlipOutXDown, null, items8);
importDefaultResultResult8.presetName = "FlipOutXDown";
let closure_14 = { code: "function pnpm_FlipTs10(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateY:'0deg'},{translateX:0}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateY:delayFunction(delay,animation('90deg',config))},{translateX:delayFunction(delay,animation(targetValues.currentWidth,config))}]},callback:callback};}" };
class FlipOutYRight {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, FlipOutYRight);
    let items1 = [...items];
    let obj = _getPrototypeOf(FlipOutYRight);
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
      const tmp2 = FlipOutYRight(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n(currentWidth) {
        let items;
        let items1;
        let obj2;
        let obj3;
        const obj = { initialValues: obj2, animations: obj3, callback: callbackV };
        obj2 = { transform: items };
        items = [{ perspective: 500 }, { rotateY: "0deg" }, { translateX: 0 }];
        const merged = Object.assign(initialValues);
        obj3 = { transform: items1 };
        items1 = [{ perspective: delayFunction(delay, first(500, closure_2)) }, , ];
        ({ perspective: delayFunction(delay, first(500, closure_2)) });
        items1[1] = { rotateY: delayFunction(delay, first("90deg", closure_2)) };
        ({ rotateY: delayFunction(delay, first("90deg", closure_2)) });
        items1[2] = { translateX: delayFunction(delay, first(currentWidth.currentWidth, closure_2)) };
        ({ translateX: delayFunction(delay, first(currentWidth.currentWidth, closure_2)) });
        return obj;
      };
      fn.__closure = { initialValues, delayFunction, delay, animation: first, config: tmp2[1], callback: callbackV };
      fn.__workletHash = 12107293900726;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(FlipOutYRight, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry9 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = FlipOutYRight();
    return tmp;
  }
};
const items9 = [entry9];
const importDefaultResultResult9 = _createClass(FlipOutYRight, null, items9);
importDefaultResultResult9.presetName = "FlipOutYRight";
let closure_15 = { code: "function pnpm_FlipTs11(){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateX:'0deg'}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateX:delayFunction(delay,animation('90deg',config))}]},callback:callback};}" };
class FlipOutEasyX {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, FlipOutEasyX);
    let items1 = [...items];
    let obj = _getPrototypeOf(FlipOutEasyX);
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
      const tmp2 = FlipOutEasyX(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n() {
        let items;
        let items1;
        let obj2;
        let obj3;
        const obj = { initialValues: obj2, animations: obj3, callback: callbackV };
        obj2 = { transform: items };
        items = [{ perspective: 500 }, { rotateX: "0deg" }];
        const merged = Object.assign(initialValues);
        obj3 = { transform: items1 };
        items1 = [{ perspective: delayFunction(delay, first(500, closure_2)) }, ];
        ({ perspective: delayFunction(delay, first(500, closure_2)) });
        items1[1] = { rotateX: delayFunction(delay, first("90deg", closure_2)) };
        ({ rotateX: delayFunction(delay, first("90deg", closure_2)) });
        return obj;
      };
      fn.__closure = { initialValues, delayFunction, delay, animation: first, config: tmp2[1], callback: callbackV };
      fn.__workletHash = 9417124215224;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(FlipOutEasyX, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry10 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = FlipOutEasyX();
    return tmp;
  }
};
const items10 = [entry10];
const importDefaultResultResult10 = _createClass(FlipOutEasyX, null, items10);
importDefaultResultResult10.presetName = "FlipOutEasyX";
let closure_16 = { code: "function pnpm_FlipTs12(){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateY:'0deg'}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateY:delayFunction(delay,animation('90deg',config))}]},callback:callback};}" };
class FlipOutEasyY {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, FlipOutEasyY);
    let items1 = [...items];
    let obj = _getPrototypeOf(FlipOutEasyY);
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
      const tmp2 = FlipOutEasyY(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n() {
        let items;
        let items1;
        let obj2;
        let obj3;
        const obj = { initialValues: obj2, animations: obj3, callback: callbackV };
        obj2 = { transform: items };
        items = [{ perspective: 500 }, { rotateY: "0deg" }];
        const merged = Object.assign(initialValues);
        obj3 = { transform: items1 };
        items1 = [{ perspective: delayFunction(delay, first(500, closure_2)) }, ];
        ({ perspective: delayFunction(delay, first(500, closure_2)) });
        items1[1] = { rotateY: delayFunction(delay, first("90deg", closure_2)) };
        ({ rotateY: delayFunction(delay, first("90deg", closure_2)) });
        return obj;
      };
      fn.__closure = { initialValues, delayFunction, delay, animation: first, config: tmp2[1], callback: callbackV };
      fn.__workletHash = 4473299233947;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(FlipOutEasyY, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry11 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = FlipOutEasyY();
    return tmp;
  }
};
const items11 = [entry11];
const importDefaultResultResult11 = _createClass(FlipOutEasyY, null, items11);
importDefaultResultResult11.presetName = "FlipOutEasyY";
const FlipInXUp_export = importDefaultResultResult;
const FlipInYLeft_export = importDefaultResultResult1;
const FlipInXDown_export = importDefaultResultResult2;
const FlipInYRight_export = importDefaultResultResult3;
const FlipInEasyX_export = importDefaultResultResult4;
const FlipInEasyY_export = importDefaultResultResult5;
const FlipOutXUp_export = importDefaultResultResult6;
const FlipOutYLeft_export = importDefaultResultResult7;
const FlipOutXDown_export = importDefaultResultResult8;
const FlipOutYRight_export = importDefaultResultResult9;
const FlipOutEasyX_export = importDefaultResultResult10;
const FlipOutEasyY_export = importDefaultResultResult11;

export { FlipInXUp_export as FlipInXUp };
export { FlipInYLeft_export as FlipInYLeft };
export { FlipInXDown_export as FlipInXDown };
export { FlipInYRight_export as FlipInYRight };
export { FlipInEasyX_export as FlipInEasyX };
export { FlipInEasyY_export as FlipInEasyY };
export { FlipOutXUp_export as FlipOutXUp };
export { FlipOutYLeft_export as FlipOutYLeft };
export { FlipOutXDown_export as FlipOutXDown };
export { FlipOutYRight_export as FlipOutYRight };
export { FlipOutEasyX_export as FlipOutEasyX };
export { FlipOutEasyY_export as FlipOutEasyY };