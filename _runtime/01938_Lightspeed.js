// === Module 1938: Lightspeed ===

// Module 1938 (Lightspeed)
import _possibleConstructorReturnDefault from "_possibleConstructorReturn" /* 93 */;
import _slicedToArray from "module_32" /* 32 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

let LightSpeedOutLeft = fn;
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
_possibleConstructorReturnDefault;
let closure_7 = { code: "(function pnpm_LightspeedTs1(values){let[delayFunction,delay,withTiming,targetValues,duration,animation,targetTranslateX,config,withSequence,targetSkewX,initialValues,pickTransformValues,callback]=this.__closure;var _targetValues$opacity,_targetValues,_initialValues$opacit,_initialValues;return{animations:{opacity:delayFunction(delay,withTiming((_targetValues$opacity=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.opacity)!==null&&_targetValues$opacity!==void 0?_targetValues$opacity:1,{duration:duration})),transform:[{translateX:delayFunction(delay,animation(targetTranslateX,{...config,duration:duration*0.7}))},{skewX:delayFunction(delay,withSequence(withTiming('10deg',{duration:duration*0.7}),withTiming('-5deg',{duration:duration*0.15}),withTiming(targetSkewX,{duration:duration*0.15})))}]},initialValues:{opacity:(_initialValues$opacit=(_initialValues=initialValues)===null||_initialValues===void 0?void 0:_initialValues.opacity)!==null&&_initialValues$opacit!==void 0?_initialValues$opacit:0,transform:pickTransformValues([{translateX:values.windowWidth},{skewX:'-45deg'}],initialValues)},callback:callback};})" };
class LightSpeedInRight {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_3(this, LightSpeedOutLeft);
    items1 = [...items];
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(LightSpeedOutLeft);
    tmp3 = closure_4;
    if (metroRequire()) {
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
      [tmp3, tmp4] = _undefined.getAnimationAndConfig();
      const delay = _undefined.getDelay();
      const targetValues = _undefined.targetValues;
      duration = _undefined.getDuration();
      ({ callbackV, initialValues } = _undefined);
      const tmp2 = _slicedToArray(_undefined.getAnimationAndConfig(), 2);
      let obj = LightSpeedOutLeft(1935);
      items = [closure_7, delayFunction, delay, LightSpeedOutLeft(1839).withTiming, targetValues, duration, tmp3, obj.resolveTransformSlot({ translateX: 0 }, 0, targetValues).value, tmp4, LightSpeedOutLeft(1839).withSequence, LightSpeedOutLeft(1935).resolveTransformSlot({ skewX: "0deg" }, 1, targetValues).value, initialValues, LightSpeedOutLeft(1935).pickTransformValues, callbackV];
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
      c10 = undefined;
      c11 = undefined;
      c12 = undefined;
      [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20] = items;
      function pnpm_LightspeedTs1(translateX) {
        let num;
        if (_undefined != null) {
          num = _undefined.opacity;
        }
        if (num == null) {
          num = 1;
        }
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { opacity: _undefined(c1, _undefined2(num, { duration })), transform: null };
        const obj4 = { translateX: null };
        const obj5 = {};
        const merged = Object.assign(c7);
        obj5.duration = 0.7 * duration;
        obj4.translateX = _undefined(c1, _undefined2(c6, obj5));
        items = [obj4, ];
        const obj6 = { skewX: null };
        const obj3 = { duration };
        const obj7 = { duration: 0.7 * duration };
        const obj8 = { duration: 0.15 * duration };
        const obj9 = { duration: 0.15 * duration };
        const tmp3Result = _undefined2("10deg", { duration: 0.7 * duration });
        obj6.skewX = _undefined(c1, _undefined3(tmp3Result, _undefined2("-5deg", { duration: 0.15 * duration }), _undefined2(c9, obj9)));
        items[1] = obj6;
        obj2.transform = items;
        obj.animations = obj2;
        let num2;
        if (_undefined3 != null) {
          num2 = _undefined3.opacity;
        }
        if (num2 == null) {
          num2 = 0;
        }
        const obj10 = { opacity: num2, transform: null };
        const items1 = [{ translateX: translateX.windowWidth }, { skewX: "-45deg" }];
        obj10.transform = _undefined4(items1, _undefined3);
        obj.initialValues = obj10;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20];
      pnpm_LightspeedTs1.__closure = items1;
      pnpm_LightspeedTs1.__workletHash = 4282246318383;
      pnpm_LightspeedTs1.__initData = tmp7;
      return pnpm_LightspeedTs1;
    };
    return tmp3Result;
  }
}
LightSpeedOutLeft = LightSpeedInRight;
_inherits(LightSpeedInRight, fn(1872).ComplexAnimationBuilder);
const entry = {
  key: "createInstance",
  value: function createInstance() {
    return LightSpeedOutLeft();
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(LightSpeedInRight, null, items);
importDefaultResultResult.presetName = "LightSpeedInRight";
let closure_8 = { code: "(function pnpm_LightspeedTs2(values){let[delayFunction,delay,withTiming,targetValues,duration,animation,targetTranslateX,config,withSequence,targetSkewX,initialValues,pickTransformValues,callback]=this.__closure;var _targetValues$opacity,_targetValues,_initialValues$opacit,_initialValues;return{animations:{opacity:delayFunction(delay,withTiming((_targetValues$opacity=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.opacity)!==null&&_targetValues$opacity!==void 0?_targetValues$opacity:1,{duration:duration})),transform:[{translateX:delayFunction(delay,animation(targetTranslateX,{...config,duration:duration*0.7}))},{skewX:delayFunction(delay,withSequence(withTiming('-10deg',{duration:duration*0.7}),withTiming('5deg',{duration:duration*0.15}),withTiming(targetSkewX,{duration:duration*0.15})))}]},initialValues:{opacity:(_initialValues$opacit=(_initialValues=initialValues)===null||_initialValues===void 0?void 0:_initialValues.opacity)!==null&&_initialValues$opacit!==void 0?_initialValues$opacit:0,transform:pickTransformValues([{translateX:-values.windowWidth},{skewX:'45deg'}],initialValues)},callback:callback};})" };
class LightSpeedInLeft {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_3(this, LightSpeedOutLeft);
    items1 = [...items];
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(LightSpeedOutLeft);
    tmp3 = closure_4;
    if (metroRequire()) {
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
      [tmp3, tmp4] = _undefined.getAnimationAndConfig();
      const delay = _undefined.getDelay();
      const targetValues = _undefined.targetValues;
      duration = _undefined.getDuration();
      ({ callbackV, initialValues } = _undefined);
      const tmp2 = _slicedToArray(_undefined.getAnimationAndConfig(), 2);
      let obj = LightSpeedOutLeft(1935);
      items = [_undefined3, delayFunction, delay, LightSpeedOutLeft(1839).withTiming, targetValues, duration, tmp3, obj.resolveTransformSlot({ translateX: 0 }, 0, targetValues).value, tmp4, LightSpeedOutLeft(1839).withSequence, LightSpeedOutLeft(1935).resolveTransformSlot({ skewX: "0deg" }, 1, targetValues).value, initialValues, LightSpeedOutLeft(1935).pickTransformValues, callbackV];
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
      c10 = undefined;
      c11 = undefined;
      c12 = undefined;
      [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20] = items;
      function pnpm_LightspeedTs2(translateX) {
        let num;
        if (_undefined != null) {
          num = _undefined.opacity;
        }
        if (num == null) {
          num = 1;
        }
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { opacity: _undefined(c1, _undefined2(num, { duration })), transform: null };
        const obj4 = { translateX: null };
        const obj5 = {};
        const merged = Object.assign(c7);
        obj5.duration = 0.7 * duration;
        obj4.translateX = _undefined(c1, _undefined2(c6, obj5));
        items = [obj4, ];
        const obj6 = { skewX: null };
        const obj3 = { duration };
        const obj7 = { duration: 0.7 * duration };
        const obj8 = { duration: 0.15 * duration };
        const obj9 = { duration: 0.15 * duration };
        const tmp3Result = _undefined2("-10deg", { duration: 0.7 * duration });
        obj6.skewX = _undefined(c1, _undefined3(tmp3Result, _undefined2("5deg", { duration: 0.15 * duration }), _undefined2(c9, obj9)));
        items[1] = obj6;
        obj2.transform = items;
        obj.animations = obj2;
        let num2;
        if (_undefined3 != null) {
          num2 = _undefined3.opacity;
        }
        if (num2 == null) {
          num2 = 0;
        }
        const obj10 = { opacity: num2, transform: null };
        const items1 = [{ translateX: -translateX.windowWidth }, { skewX: "45deg" }];
        obj10.transform = _undefined4(items1, _undefined3);
        obj.initialValues = obj10;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20];
      pnpm_LightspeedTs2.__closure = items1;
      pnpm_LightspeedTs2.__workletHash = 1339002426508;
      pnpm_LightspeedTs2.__initData = tmp7;
      return pnpm_LightspeedTs2;
    };
    return tmp3Result;
  }
}
LightSpeedOutLeft = LightSpeedInLeft;
_inherits(LightSpeedInLeft, fn(1872).ComplexAnimationBuilder);
const entry1 = {
  key: "createInstance",
  value: function createInstance() {
    return LightSpeedOutLeft();
  }
};
let items1 = [entry1];
const importDefaultResultResult1 = _createClass(LightSpeedInLeft, null, items1);
importDefaultResultResult1.presetName = "LightSpeedInLeft";
let closure_9 = { code: "(function pnpm_LightspeedTs3(values){let[delayFunction,delay,animation,targetValues,config,animateTransformToValues,animationAndConfig,initialValues,pickTransformValues,callback]=this.__closure;var _targetValues$opacity,_targetValues,_initialValues$opacit,_initialValues;return{animations:{opacity:delayFunction(delay,animation((_targetValues$opacity=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.opacity)!==null&&_targetValues$opacity!==void 0?_targetValues$opacity:0,config)),transform:animateTransformToValues([{translateX:values.windowWidth},{skewX:'-45deg'}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{opacity:(_initialValues$opacit=(_initialValues=initialValues)===null||_initialValues===void 0?void 0:_initialValues.opacity)!==null&&_initialValues$opacit!==void 0?_initialValues$opacit:1,transform:pickTransformValues([{translateX:0},{skewX:'0deg'}],initialValues)},callback:callback};})" };
class LightSpeedOutRight {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_3(this, LightSpeedOutLeft);
    items1 = [...items];
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(LightSpeedOutLeft);
    tmp3 = closure_4;
    if (metroRequire()) {
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
      items = [callback, delayFunction, _undefined.getDelay(), tmp4, _undefined.targetValues, tmp5, , , , , ];
      ({ callbackV, initialValues } = _undefined);
      items[6] = LightSpeedOutLeft(1935).animateTransformToValues;
      items[7] = animationAndConfig;
      items[8] = initialValues;
      items[9] = LightSpeedOutLeft(1935).pickTransformValues;
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
      function pnpm_LightspeedTs3(translateX) {
        let num;
        if (_undefined3 != null) {
          num = _undefined3.opacity;
        }
        if (num == null) {
          num = 0;
        }
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { opacity: _undefined(c1, _undefined2(num, c4)), transform: null };
        items = [{ translateX: translateX.windowWidth }, { skewX: "-45deg" }];
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
        const items1 = [{ translateX: 0 }, { skewX: "0deg" }];
        obj4.transform = _undefined2(items1, _undefined4);
        obj.initialValues = obj4;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
      pnpm_LightspeedTs3.__closure = items1;
      pnpm_LightspeedTs3.__workletHash = 6593986078119;
      pnpm_LightspeedTs3.__initData = tmp6;
      return pnpm_LightspeedTs3;
    };
    return tmp3Result;
  }
}
LightSpeedOutLeft = LightSpeedOutRight;
_inherits(LightSpeedOutRight, fn(1872).ComplexAnimationBuilder);
const entry2 = {
  key: "createInstance",
  value: function createInstance() {
    return LightSpeedOutLeft();
  }
};
const items2 = [entry2];
const importDefaultResultResult2 = _createClass(LightSpeedOutRight, null, items2);
importDefaultResultResult2.presetName = "LightSpeedOutRight";
let closure_10 = { code: "(function pnpm_LightspeedTs4(values){let[delayFunction,delay,animation,targetValues,config,animateTransformToValues,animationAndConfig,initialValues,pickTransformValues,callback]=this.__closure;var _targetValues$opacity,_targetValues,_initialValues$opacit,_initialValues;return{animations:{opacity:delayFunction(delay,animation((_targetValues$opacity=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.opacity)!==null&&_targetValues$opacity!==void 0?_targetValues$opacity:0,config)),transform:animateTransformToValues([{translateX:-values.windowWidth},{skewX:'45deg'}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{opacity:(_initialValues$opacit=(_initialValues=initialValues)===null||_initialValues===void 0?void 0:_initialValues.opacity)!==null&&_initialValues$opacit!==void 0?_initialValues$opacit:1,transform:pickTransformValues([{translateX:0},{skewX:'0deg'}],initialValues)},callback:callback};})" };
class LightSpeedOutLeft {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_3(this, LightSpeedOutLeft);
    items1 = [...items];
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(LightSpeedOutLeft);
    tmp3 = closure_4;
    if (metroRequire()) {
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
      items = [closure_10, delayFunction, _undefined.getDelay(), tmp4, _undefined.targetValues, tmp5, , , , , ];
      ({ callbackV, initialValues } = _undefined);
      items[6] = LightSpeedOutLeft(1935).animateTransformToValues;
      items[7] = animationAndConfig;
      items[8] = initialValues;
      items[9] = LightSpeedOutLeft(1935).pickTransformValues;
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
      function pnpm_LightspeedTs4(translateX) {
        let num;
        if (_undefined3 != null) {
          num = _undefined3.opacity;
        }
        if (num == null) {
          num = 0;
        }
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { opacity: _undefined(c1, _undefined2(num, c4)), transform: null };
        items = [{ translateX: -translateX.windowWidth }, { skewX: "45deg" }];
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
        const items1 = [{ translateX: 0 }, { skewX: "0deg" }];
        obj4.transform = _undefined2(items1, _undefined4);
        obj.initialValues = obj4;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
      pnpm_LightspeedTs4.__closure = items1;
      pnpm_LightspeedTs4.__workletHash = 9277804341472;
      pnpm_LightspeedTs4.__initData = tmp6;
      return pnpm_LightspeedTs4;
    };
    return tmp3Result;
  }
}
_inherits(LightSpeedOutLeft, fn(1872).ComplexAnimationBuilder);
const entry3 = {
  key: "createInstance",
  value: function createInstance() {
    return LightSpeedOutLeft();
  }
};
const items3 = [entry3];
const importDefaultResultResult3 = _createClass(LightSpeedOutLeft, null, items3);
importDefaultResultResult3.presetName = "LightSpeedOutLeft";

export const LightSpeedInRight = importDefaultResultResult;
export const LightSpeedInLeft = importDefaultResultResult1;
export const LightSpeedOutRight = importDefaultResultResult2;
export const LightSpeedOutLeft = importDefaultResultResult3;