// _runtime/01944_Rotate.js
import _possibleConstructorReturnDefault from "metro/00093__possibleConstructorReturn.js";
import _slicedToArray from "metro/00032__.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";

let RotateOutUpRight = fn;
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
_possibleConstructorReturnDefault;
let closure_7 = {
  code: "(function pnpm_RotateTs1(values){let[delayFunction,delay,animation,targetValues,config,animateTransformToValues,animationAndConfig,initialValues,pickTransformValues,callback]=this.__closure;var _targetValues$opacity,_targetValues,_initialValues$opacit,_initialValues;return{animations:{opacity:delayFunction(delay,animation((_targetValues$opacity=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.opacity)!==null&&_targetValues$opacity!==void 0?_targetValues$opacity:1,config)),transform:animateTransformToValues([{rotate:'0deg'},{translateX:0},{translateY:0}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{opacity:(_initialValues$opacit=(_initialValues=initialValues)===null||_initialValues===void 0?void 0:_initialValues.opacity)!==null&&_initialValues$opacit!==void 0?_initialValues$opacit:0,transform:pickTransformValues([{rotate:'-90deg'},{translateX:values.targetWidth/2-values.targetHeight/2},{translateY:-(values.targetWidth/2-values.targetHeight/2)}],initialValues)},callback:callback};})",
};
class RotateInDownLeft {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_3(this, RotateOutUpRight);
    items1 = [...items];
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(RotateOutUpRight);
    tmp3 = closure_4;
    if (closure_6()) {
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
      [tmp4, tmp5] = animationAndConfig;
      items = [_undefined4, delayFunction, _undefined.getDelay(), tmp4, _undefined.targetValues, tmp5, , , , ,];
      ({ callbackV, initialValues } = _undefined);
      items[6] = RotateOutUpRight(1938).animateTransformToValues;
      items[7] = animationAndConfig;
      items[8] = initialValues;
      items[9] = RotateOutUpRight(1938).pickTransformValues;
      items[10] = callbackV;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      c8 = undefined;
      c9 = undefined;
      [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = items;
      function pnpm_RotateTs1(targetWidth) {
        let num;
        if (_undefined3 != null) {
          num = _undefined3.opacity;
        }
        if (num == null) {
          num = 1;
        }
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { opacity: _undefined(c1, _undefined2(num, c4)), transform: null };
        items = [{ rotate: "0deg" }, { translateX: 0 }, { translateY: 0 }];
        obj2.transform = _undefined(items, _undefined3, c6, _undefined, c1);
        obj.animations = obj2;
        let num2;
        if (_undefined4 != null) {
          num2 = _undefined4.opacity;
        }
        if (num2 == null) {
          num2 = 0;
        }
        const obj3 = { opacity: num2, transform: null };
        const items1 = [
          { rotate: "-90deg" },
          { translateX: targetWidth.targetWidth / 2 - targetWidth.targetHeight / 2 },
          { translateY: -targetWidth.targetWidth / 2 - targetWidth.targetHeight / 2 },
        ];
        obj3.transform = _undefined2(items1, _undefined4);
        obj.initialValues = obj3;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
      pnpm_RotateTs1.__closure = items1;
      pnpm_RotateTs1.__workletHash = 16688795394445;
      pnpm_RotateTs1.__initData = tmp6;
      return pnpm_RotateTs1;
    };
    return tmp3Result;
  }
}
RotateOutUpRight = RotateInDownLeft;
_inherits(RotateInDownLeft, fn(1875).ComplexAnimationBuilder);
const entry = {
  key: "createInstance",
  value: function createInstance() {
    return RotateOutUpRight();
  },
};
let items = [entry];
const importDefaultResultResult = _createClass(RotateInDownLeft, null, items);
importDefaultResultResult.presetName = "RotateInDownLeft";
let closure_8 = {
  code: "(function pnpm_RotateTs2(values){let[delayFunction,delay,animation,targetValues,config,animateTransformToValues,animationAndConfig,initialValues,pickTransformValues,callback]=this.__closure;var _targetValues$opacity,_targetValues,_initialValues$opacit,_initialValues;return{animations:{opacity:delayFunction(delay,animation((_targetValues$opacity=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.opacity)!==null&&_targetValues$opacity!==void 0?_targetValues$opacity:1,config)),transform:animateTransformToValues([{rotate:'0deg'},{translateX:0},{translateY:0}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{opacity:(_initialValues$opacit=(_initialValues=initialValues)===null||_initialValues===void 0?void 0:_initialValues.opacity)!==null&&_initialValues$opacit!==void 0?_initialValues$opacit:0,transform:pickTransformValues([{rotate:'90deg'},{translateX:-(values.targetWidth/2-values.targetHeight/2)},{translateY:-(values.targetWidth/2-values.targetHeight/2)}],initialValues)},callback:callback};})",
};
class RotateInDownRight {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_3(this, RotateOutUpRight);
    items1 = [...items];
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(RotateOutUpRight);
    tmp3 = closure_4;
    if (closure_6()) {
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
      [tmp4, tmp5] = animationAndConfig;
      items = [_undefined2, delayFunction, _undefined.getDelay(), tmp4, _undefined.targetValues, tmp5, , , , ,];
      ({ callbackV, initialValues } = _undefined);
      items[6] = RotateOutUpRight(1938).animateTransformToValues;
      items[7] = animationAndConfig;
      items[8] = initialValues;
      items[9] = RotateOutUpRight(1938).pickTransformValues;
      items[10] = callbackV;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      c8 = undefined;
      c9 = undefined;
      [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = items;
      function pnpm_RotateTs2(targetWidth) {
        let num;
        if (_undefined3 != null) {
          num = _undefined3.opacity;
        }
        if (num == null) {
          num = 1;
        }
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { opacity: _undefined(c1, _undefined2(num, c4)), transform: null };
        items = [{ rotate: "0deg" }, { translateX: 0 }, { translateY: 0 }];
        obj2.transform = _undefined(items, _undefined3, c6, _undefined, c1);
        obj.animations = obj2;
        let num2;
        if (_undefined4 != null) {
          num2 = _undefined4.opacity;
        }
        if (num2 == null) {
          num2 = 0;
        }
        const obj3 = { opacity: num2, transform: null };
        const items1 = [
          { rotate: "90deg" },
          { translateX: -targetWidth.targetWidth / 2 - targetWidth.targetHeight / 2 },
          { translateY: -targetWidth.targetWidth / 2 - targetWidth.targetHeight / 2 },
        ];
        obj3.transform = _undefined2(items1, _undefined4);
        obj.initialValues = obj3;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
      pnpm_RotateTs2.__closure = items1;
      pnpm_RotateTs2.__workletHash = 15126500794383;
      pnpm_RotateTs2.__initData = tmp6;
      return pnpm_RotateTs2;
    };
    return tmp3Result;
  }
}
RotateOutUpRight = RotateInDownRight;
_inherits(RotateInDownRight, fn(1875).ComplexAnimationBuilder);
const entry1 = {
  key: "createInstance",
  value: function createInstance() {
    return RotateOutUpRight();
  },
};
let items1 = [entry1];
const importDefaultResultResult1 = _createClass(RotateInDownRight, null, items1);
importDefaultResultResult1.presetName = "RotateInDownRight";
let closure_9 = {
  code: "(function pnpm_RotateTs3(values){let[delayFunction,delay,animation,targetValues,config,animateTransformToValues,animationAndConfig,initialValues,pickTransformValues,callback]=this.__closure;var _targetValues$opacity,_targetValues,_initialValues$opacit,_initialValues;return{animations:{opacity:delayFunction(delay,animation((_targetValues$opacity=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.opacity)!==null&&_targetValues$opacity!==void 0?_targetValues$opacity:1,config)),transform:animateTransformToValues([{rotate:'0deg'},{translateX:0},{translateY:0}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{opacity:(_initialValues$opacit=(_initialValues=initialValues)===null||_initialValues===void 0?void 0:_initialValues.opacity)!==null&&_initialValues$opacit!==void 0?_initialValues$opacit:0,transform:pickTransformValues([{rotate:'90deg'},{translateX:values.targetWidth/2-values.targetHeight/2},{translateY:values.targetWidth/2-values.targetHeight/2}],initialValues)},callback:callback};})",
};
class RotateInUpLeft {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_3(this, RotateOutUpRight);
    items1 = [...items];
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(RotateOutUpRight);
    tmp3 = closure_4;
    if (closure_6()) {
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
      [tmp4, tmp5] = animationAndConfig;
      items = [callback, delayFunction, _undefined.getDelay(), tmp4, _undefined.targetValues, tmp5, , , , ,];
      ({ callbackV, initialValues } = _undefined);
      items[6] = RotateOutUpRight(1938).animateTransformToValues;
      items[7] = animationAndConfig;
      items[8] = initialValues;
      items[9] = RotateOutUpRight(1938).pickTransformValues;
      items[10] = callbackV;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      c8 = undefined;
      c9 = undefined;
      [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = items;
      function pnpm_RotateTs3(targetWidth) {
        let num;
        if (_undefined3 != null) {
          num = _undefined3.opacity;
        }
        if (num == null) {
          num = 1;
        }
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { opacity: _undefined(c1, _undefined2(num, c4)), transform: null };
        items = [{ rotate: "0deg" }, { translateX: 0 }, { translateY: 0 }];
        obj2.transform = _undefined(items, _undefined3, c6, _undefined, c1);
        obj.animations = obj2;
        let num2;
        if (_undefined4 != null) {
          num2 = _undefined4.opacity;
        }
        if (num2 == null) {
          num2 = 0;
        }
        const obj3 = { opacity: num2, transform: null };
        const items1 = [
          { rotate: "90deg" },
          { translateX: targetWidth.targetWidth / 2 - targetWidth.targetHeight / 2 },
          { translateY: targetWidth.targetWidth / 2 - targetWidth.targetHeight / 2 },
        ];
        obj3.transform = _undefined2(items1, _undefined4);
        obj.initialValues = obj3;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
      pnpm_RotateTs3.__closure = items1;
      pnpm_RotateTs3.__workletHash = 15936156537486;
      pnpm_RotateTs3.__initData = tmp6;
      return pnpm_RotateTs3;
    };
    return tmp3Result;
  }
}
RotateOutUpRight = RotateInUpLeft;
_inherits(RotateInUpLeft, fn(1875).ComplexAnimationBuilder);
const entry2 = {
  key: "createInstance",
  value: function createInstance() {
    return RotateOutUpRight();
  },
};
const items2 = [entry2];
const importDefaultResultResult2 = _createClass(RotateInUpLeft, null, items2);
importDefaultResultResult2.presetName = "RotateInUpLeft";
let closure_10 = {
  code: "(function pnpm_RotateTs4(values){let[delayFunction,delay,animation,targetValues,config,animateTransformToValues,animationAndConfig,initialValues,pickTransformValues,callback]=this.__closure;var _targetValues$opacity,_targetValues,_initialValues$opacit,_initialValues;return{animations:{opacity:delayFunction(delay,animation((_targetValues$opacity=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.opacity)!==null&&_targetValues$opacity!==void 0?_targetValues$opacity:1,config)),transform:animateTransformToValues([{rotate:'0deg'},{translateX:0},{translateY:0}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{opacity:(_initialValues$opacit=(_initialValues=initialValues)===null||_initialValues===void 0?void 0:_initialValues.opacity)!==null&&_initialValues$opacit!==void 0?_initialValues$opacit:0,transform:pickTransformValues([{rotate:'-90deg'},{translateX:-(values.targetWidth/2-values.targetHeight/2)},{translateY:values.targetWidth/2-values.targetHeight/2}],initialValues)},callback:callback};})",
};
class RotateInUpRight {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_3(this, RotateOutUpRight);
    items1 = [...items];
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(RotateOutUpRight);
    tmp3 = closure_4;
    if (closure_6()) {
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
      [tmp4, tmp5] = animationAndConfig;
      items = [closure_10, delayFunction, _undefined.getDelay(), tmp4, _undefined.targetValues, tmp5, , , , ,];
      ({ callbackV, initialValues } = _undefined);
      items[6] = RotateOutUpRight(1938).animateTransformToValues;
      items[7] = animationAndConfig;
      items[8] = initialValues;
      items[9] = RotateOutUpRight(1938).pickTransformValues;
      items[10] = callbackV;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      c8 = undefined;
      c9 = undefined;
      [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = items;
      function pnpm_RotateTs4(targetWidth) {
        let num;
        if (_undefined3 != null) {
          num = _undefined3.opacity;
        }
        if (num == null) {
          num = 1;
        }
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { opacity: _undefined(c1, _undefined2(num, c4)), transform: null };
        items = [{ rotate: "0deg" }, { translateX: 0 }, { translateY: 0 }];
        obj2.transform = _undefined(items, _undefined3, c6, _undefined, c1);
        obj.animations = obj2;
        let num2;
        if (_undefined4 != null) {
          num2 = _undefined4.opacity;
        }
        if (num2 == null) {
          num2 = 0;
        }
        const obj3 = { opacity: num2, transform: null };
        const items1 = [
          { rotate: "-90deg" },
          { translateX: -targetWidth.targetWidth / 2 - targetWidth.targetHeight / 2 },
          { translateY: targetWidth.targetWidth / 2 - targetWidth.targetHeight / 2 },
        ];
        obj3.transform = _undefined2(items1, _undefined4);
        obj.initialValues = obj3;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
      pnpm_RotateTs4.__closure = items1;
      pnpm_RotateTs4.__workletHash = 17232803705352;
      pnpm_RotateTs4.__initData = tmp6;
      return pnpm_RotateTs4;
    };
    return tmp3Result;
  }
}
RotateOutUpRight = RotateInUpRight;
_inherits(RotateInUpRight, fn(1875).ComplexAnimationBuilder);
const entry3 = {
  key: "createInstance",
  value: function createInstance() {
    return RotateOutUpRight();
  },
};
const items3 = [entry3];
const importDefaultResultResult3 = _createClass(RotateInUpRight, null, items3);
importDefaultResultResult3.presetName = "RotateInUpRight";
let closure_11 = {
  code: "(function pnpm_RotateTs5(values){let[delayFunction,delay,animation,targetValues,config,animateTransformToValues,animationAndConfig,initialValues,pickTransformValues,callback]=this.__closure;var _targetValues$opacity,_targetValues,_initialValues$opacit,_initialValues;return{animations:{opacity:delayFunction(delay,animation((_targetValues$opacity=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.opacity)!==null&&_targetValues$opacity!==void 0?_targetValues$opacity:0,config)),transform:animateTransformToValues([{rotate:'90deg'},{translateX:values.currentWidth/2-values.currentHeight/2},{translateY:values.currentWidth/2-values.currentHeight/2}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{opacity:(_initialValues$opacit=(_initialValues=initialValues)===null||_initialValues===void 0?void 0:_initialValues.opacity)!==null&&_initialValues$opacit!==void 0?_initialValues$opacit:1,transform:pickTransformValues([{rotate:'0deg'},{translateX:0},{translateY:0}],initialValues)},callback:callback};})",
};
class RotateOutDownLeft {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_3(this, RotateOutUpRight);
    items1 = [...items];
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(RotateOutUpRight);
    tmp3 = closure_4;
    if (closure_6()) {
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
      [tmp4, tmp5] = animationAndConfig;
      items = [closure_11, delayFunction, _undefined.getDelay(), tmp4, _undefined.targetValues, tmp5, , , , ,];
      ({ callbackV, initialValues } = _undefined);
      items[6] = RotateOutUpRight(1938).animateTransformToValues;
      items[7] = animationAndConfig;
      items[8] = initialValues;
      items[9] = RotateOutUpRight(1938).pickTransformValues;
      items[10] = callbackV;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      c8 = undefined;
      c9 = undefined;
      [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = items;
      function pnpm_RotateTs5(currentWidth) {
        let num;
        if (_undefined3 != null) {
          num = _undefined3.opacity;
        }
        if (num == null) {
          num = 0;
        }
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { opacity: _undefined(c1, _undefined2(num, c4)), transform: null };
        items = [
          { rotate: "90deg" },
          { translateX: currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2 },
          { translateY: currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2 },
        ];
        obj2.transform = _undefined(items, _undefined3, c6, _undefined, c1);
        obj.animations = obj2;
        let num2;
        if (_undefined4 != null) {
          num2 = _undefined4.opacity;
        }
        if (num2 == null) {
          num2 = 1;
        }
        const obj4 = { opacity: num2, transform: null };
        const items1 = [{ rotate: "0deg" }, { translateX: 0 }, { translateY: 0 }];
        obj4.transform = _undefined2(items1, _undefined4);
        obj.initialValues = obj4;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
      pnpm_RotateTs5.__closure = items1;
      pnpm_RotateTs5.__workletHash = 14008835615720;
      pnpm_RotateTs5.__initData = tmp6;
      return pnpm_RotateTs5;
    };
    return tmp3Result;
  }
}
RotateOutUpRight = RotateOutDownLeft;
_inherits(RotateOutDownLeft, fn(1875).ComplexAnimationBuilder);
const entry4 = {
  key: "createInstance",
  value: function createInstance() {
    return RotateOutUpRight();
  },
};
const items4 = [entry4];
const importDefaultResultResult4 = _createClass(RotateOutDownLeft, null, items4);
importDefaultResultResult4.presetName = "RotateOutDownLeft";
let closure_12 = {
  code: "(function pnpm_RotateTs6(values){let[delayFunction,delay,animation,targetValues,config,animateTransformToValues,animationAndConfig,initialValues,pickTransformValues,callback]=this.__closure;var _targetValues$opacity,_targetValues,_initialValues$opacit,_initialValues;return{animations:{opacity:delayFunction(delay,animation((_targetValues$opacity=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.opacity)!==null&&_targetValues$opacity!==void 0?_targetValues$opacity:0,config)),transform:animateTransformToValues([{rotate:'-90deg'},{translateX:-(values.currentWidth/2-values.currentHeight/2)},{translateY:values.currentWidth/2-values.currentHeight/2}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{opacity:(_initialValues$opacit=(_initialValues=initialValues)===null||_initialValues===void 0?void 0:_initialValues.opacity)!==null&&_initialValues$opacit!==void 0?_initialValues$opacit:1,transform:pickTransformValues([{rotate:'0deg'},{translateX:0},{translateY:0}],initialValues)},callback:callback};})",
};
class RotateOutDownRight {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_3(this, RotateOutUpRight);
    items1 = [...items];
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(RotateOutUpRight);
    tmp3 = closure_4;
    if (closure_6()) {
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
      [tmp4, tmp5] = animationAndConfig;
      items = [closure_12, delayFunction, _undefined.getDelay(), tmp4, _undefined.targetValues, tmp5, , , , ,];
      ({ callbackV, initialValues } = _undefined);
      items[6] = RotateOutUpRight(1938).animateTransformToValues;
      items[7] = animationAndConfig;
      items[8] = initialValues;
      items[9] = RotateOutUpRight(1938).pickTransformValues;
      items[10] = callbackV;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      c8 = undefined;
      c9 = undefined;
      [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = items;
      function pnpm_RotateTs6(currentWidth) {
        let num;
        if (_undefined3 != null) {
          num = _undefined3.opacity;
        }
        if (num == null) {
          num = 0;
        }
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { opacity: _undefined(c1, _undefined2(num, c4)), transform: null };
        items = [
          { rotate: "-90deg" },
          { translateX: -currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2 },
          { translateY: currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2 },
        ];
        obj2.transform = _undefined(items, _undefined3, c6, _undefined, c1);
        obj.animations = obj2;
        let num2;
        if (_undefined4 != null) {
          num2 = _undefined4.opacity;
        }
        if (num2 == null) {
          num2 = 1;
        }
        const obj4 = { opacity: num2, transform: null };
        const items1 = [{ rotate: "0deg" }, { translateX: 0 }, { translateY: 0 }];
        obj4.transform = _undefined2(items1, _undefined4);
        obj.initialValues = obj4;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
      pnpm_RotateTs6.__closure = items1;
      pnpm_RotateTs6.__workletHash = 10711909285258;
      pnpm_RotateTs6.__initData = tmp6;
      return pnpm_RotateTs6;
    };
    return tmp3Result;
  }
}
RotateOutUpRight = RotateOutDownRight;
_inherits(RotateOutDownRight, fn(1875).ComplexAnimationBuilder);
const entry5 = {
  key: "createInstance",
  value: function createInstance() {
    return RotateOutUpRight();
  },
};
const items5 = [entry5];
const importDefaultResultResult5 = _createClass(RotateOutDownRight, null, items5);
importDefaultResultResult5.presetName = "RotateOutDownRight";
let closure_13 = {
  code: "(function pnpm_RotateTs7(values){let[delayFunction,delay,animation,targetValues,config,animateTransformToValues,animationAndConfig,initialValues,pickTransformValues,callback]=this.__closure;var _targetValues$opacity,_targetValues,_initialValues$opacit,_initialValues;return{animations:{opacity:delayFunction(delay,animation((_targetValues$opacity=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.opacity)!==null&&_targetValues$opacity!==void 0?_targetValues$opacity:0,config)),transform:animateTransformToValues([{rotate:'-90deg'},{translateX:values.currentWidth/2-values.currentHeight/2},{translateY:-(values.currentWidth/2-values.currentHeight/2)}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{opacity:(_initialValues$opacit=(_initialValues=initialValues)===null||_initialValues===void 0?void 0:_initialValues.opacity)!==null&&_initialValues$opacit!==void 0?_initialValues$opacit:1,transform:pickTransformValues([{rotate:'0deg'},{translateX:0},{translateY:0}],initialValues)},callback:callback};})",
};
class RotateOutUpLeft {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_3(this, RotateOutUpRight);
    items1 = [...items];
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(RotateOutUpRight);
    tmp3 = closure_4;
    if (closure_6()) {
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
      [tmp4, tmp5] = animationAndConfig;
      items = [closure_13, delayFunction, _undefined.getDelay(), tmp4, _undefined.targetValues, tmp5, , , , ,];
      ({ callbackV, initialValues } = _undefined);
      items[6] = RotateOutUpRight(1938).animateTransformToValues;
      items[7] = animationAndConfig;
      items[8] = initialValues;
      items[9] = RotateOutUpRight(1938).pickTransformValues;
      items[10] = callbackV;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      c8 = undefined;
      c9 = undefined;
      [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = items;
      function pnpm_RotateTs7(currentWidth) {
        let num;
        if (_undefined3 != null) {
          num = _undefined3.opacity;
        }
        if (num == null) {
          num = 0;
        }
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { opacity: _undefined(c1, _undefined2(num, c4)), transform: null };
        items = [
          { rotate: "-90deg" },
          { translateX: currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2 },
          { translateY: -currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2 },
        ];
        obj2.transform = _undefined(items, _undefined3, c6, _undefined, c1);
        obj.animations = obj2;
        let num2;
        if (_undefined4 != null) {
          num2 = _undefined4.opacity;
        }
        if (num2 == null) {
          num2 = 1;
        }
        const obj4 = { opacity: num2, transform: null };
        const items1 = [{ rotate: "0deg" }, { translateX: 0 }, { translateY: 0 }];
        obj4.transform = _undefined2(items1, _undefined4);
        obj.initialValues = obj4;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
      pnpm_RotateTs7.__closure = items1;
      pnpm_RotateTs7.__workletHash = 12770726146315;
      pnpm_RotateTs7.__initData = tmp6;
      return pnpm_RotateTs7;
    };
    return tmp3Result;
  }
}
RotateOutUpRight = RotateOutUpLeft;
_inherits(RotateOutUpLeft, fn(1875).ComplexAnimationBuilder);
const entry6 = {
  key: "createInstance",
  value: function createInstance() {
    return RotateOutUpRight();
  },
};
const items6 = [entry6];
const importDefaultResultResult6 = _createClass(RotateOutUpLeft, null, items6);
importDefaultResultResult6.presetName = "RotateOutUpLeft";
let closure_14 = {
  code: "(function pnpm_RotateTs8(values){let[delayFunction,delay,animation,targetValues,config,animateTransformToValues,animationAndConfig,initialValues,pickTransformValues,callback]=this.__closure;var _targetValues$opacity,_targetValues,_initialValues$opacit,_initialValues;return{animations:{opacity:delayFunction(delay,animation((_targetValues$opacity=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.opacity)!==null&&_targetValues$opacity!==void 0?_targetValues$opacity:0,config)),transform:animateTransformToValues([{rotate:'90deg'},{translateX:-(values.currentWidth/2-values.currentHeight/2)},{translateY:-(values.currentWidth/2-values.currentHeight/2)}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{opacity:(_initialValues$opacit=(_initialValues=initialValues)===null||_initialValues===void 0?void 0:_initialValues.opacity)!==null&&_initialValues$opacit!==void 0?_initialValues$opacit:1,transform:pickTransformValues([{rotate:'0deg'},{translateX:0},{translateY:0}],initialValues)},callback:callback};})",
};
class RotateOutUpRight {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_3(this, RotateOutUpRight);
    items1 = [...items];
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(RotateOutUpRight);
    tmp3 = closure_4;
    if (closure_6()) {
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
      [tmp4, tmp5] = animationAndConfig;
      items = [closure_14, delayFunction, _undefined.getDelay(), tmp4, _undefined.targetValues, tmp5, , , , ,];
      ({ callbackV, initialValues } = _undefined);
      items[6] = RotateOutUpRight(1938).animateTransformToValues;
      items[7] = animationAndConfig;
      items[8] = initialValues;
      items[9] = RotateOutUpRight(1938).pickTransformValues;
      items[10] = callbackV;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      c8 = undefined;
      c9 = undefined;
      [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = items;
      function pnpm_RotateTs8(currentWidth) {
        let num;
        if (_undefined3 != null) {
          num = _undefined3.opacity;
        }
        if (num == null) {
          num = 0;
        }
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { opacity: _undefined(c1, _undefined2(num, c4)), transform: null };
        items = [
          { rotate: "90deg" },
          { translateX: -currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2 },
          { translateY: -currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2 },
        ];
        obj2.transform = _undefined(items, _undefined3, c6, _undefined, c1);
        obj.animations = obj2;
        let num2;
        if (_undefined4 != null) {
          num2 = _undefined4.opacity;
        }
        if (num2 == null) {
          num2 = 1;
        }
        const obj4 = { opacity: num2, transform: null };
        const items1 = [{ rotate: "0deg" }, { translateX: 0 }, { translateY: 0 }];
        obj4.transform = _undefined2(items1, _undefined4);
        obj.initialValues = obj4;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
      pnpm_RotateTs8.__closure = items1;
      pnpm_RotateTs8.__workletHash = 4827200323429;
      pnpm_RotateTs8.__initData = tmp6;
      return pnpm_RotateTs8;
    };
    return tmp3Result;
  }
}
_inherits(RotateOutUpRight, fn(1875).ComplexAnimationBuilder);
const entry7 = {
  key: "createInstance",
  value: function createInstance() {
    return RotateOutUpRight();
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
