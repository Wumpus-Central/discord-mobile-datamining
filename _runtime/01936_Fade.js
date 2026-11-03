// === Module 1936: Fade ===

// Module 1936 (Fade)
import _possibleConstructorReturnDefault from "_possibleConstructorReturn" /* 93 */;
import _slicedToArray from "module_32" /* 32 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

let FadeOutDown = fn;
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
let closure_7 = { code: "(function pnpm_FadeTs1(){let[delayFunction,delay,animation,targetValues,config,initialValues,callback]=this.__closure;var _targetValues$opacity,_targetValues,_initialValues$opacit,_initialValues;return{animations:{opacity:delayFunction(delay,animation((_targetValues$opacity=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.opacity)!==null&&_targetValues$opacity!==void 0?_targetValues$opacity:1,config))},initialValues:{opacity:(_initialValues$opacit=(_initialValues=initialValues)===null||_initialValues===void 0?void 0:_initialValues.opacity)!==null&&_initialValues$opacit!==void 0?_initialValues$opacit:0},callback:callback};})" };
class FadeIn {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_3(this, FadeOutDown);
    items1 = [...items];
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(FadeOutDown);
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
      ({ callbackV, initialValues, targetValues } = _undefined);
      items = [closure_7, delayFunction, _undefined.getDelay(), tmp3, targetValues, tmp4, initialValues, callbackV];
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_FadeTs1() {
        let num;
        if (_undefined != null) {
          num = _undefined.opacity;
        }
        if (num == null) {
          num = 1;
        }
        const obj = { animations: { opacity: _undefined(c1, _undefined2(num, c4)) }, initialValues: null, callback: null };
        let num2;
        if (_undefined2 != null) {
          num2 = _undefined2.opacity;
        }
        if (num2 == null) {
          num2 = 0;
        }
        obj.initialValues = { opacity: num2 };
        obj.callback = callback;
        return obj;
      }
      const items1 = [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_FadeTs1.__closure = items1;
      pnpm_FadeTs1.__workletHash = 3631319241151;
      pnpm_FadeTs1.__initData = tmp5;
      return pnpm_FadeTs1;
    };
    return tmp3Result;
  }
}
FadeOutDown = FadeIn;
_inherits(FadeIn, fn(1872).ComplexAnimationBuilder);
const entry = {
  key: "createInstance",
  value: function createInstance() {
    return FadeOutDown();
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(FadeIn, null, items);
importDefaultResultResult.presetName = "FadeIn";
let closure_8 = { code: "(function pnpm_FadeTs2(){let[delayFunction,delay,animation,targetValues,config,animateTransformToValues,animationAndConfig,initialValues,pickTransformValues,callback]=this.__closure;var _targetValues$opacity,_targetValues,_initialValues$opacit,_initialValues;return{animations:{opacity:delayFunction(delay,animation((_targetValues$opacity=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.opacity)!==null&&_targetValues$opacity!==void 0?_targetValues$opacity:1,config)),transform:animateTransformToValues([{translateX:0}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{opacity:(_initialValues$opacit=(_initialValues=initialValues)===null||_initialValues===void 0?void 0:_initialValues.opacity)!==null&&_initialValues$opacit!==void 0?_initialValues$opacit:0,transform:pickTransformValues([{translateX:25}],initialValues)},callback:callback};})" };
class FadeInRight {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_3(this, FadeOutDown);
    items1 = [...items];
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(FadeOutDown);
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
      ({ callbackV, initialValues, targetValues } = _undefined);
      items = [_undefined2, delayFunction, _undefined.getDelay(), tmp4, targetValues, tmp5, FadeOutDown(1935).animateTransformToValues, animationAndConfig, initialValues, FadeOutDown(1935).pickTransformValues, callbackV];
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
      function pnpm_FadeTs2() {
        let num;
        if (_undefined3 != null) {
          num = _undefined3.opacity;
        }
        if (num == null) {
          num = 1;
        }
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { opacity: _undefined(c1, _undefined2(num, c4)), transform: null };
        items = [{ translateX: 0 }];
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
        const items1 = [{ translateX: 25 }];
        obj3.transform = _undefined2(items1, _undefined4);
        obj.initialValues = obj3;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
      pnpm_FadeTs2.__closure = items1;
      pnpm_FadeTs2.__workletHash = 14018274219910;
      pnpm_FadeTs2.__initData = tmp6;
      return pnpm_FadeTs2;
    };
    return tmp3Result;
  }
}
FadeOutDown = FadeInRight;
_inherits(FadeInRight, fn(1872).ComplexAnimationBuilder);
const entry1 = {
  key: "createInstance",
  value: function createInstance() {
    return FadeOutDown();
  }
};
let items1 = [entry1];
const importDefaultResultResult1 = _createClass(FadeInRight, null, items1);
importDefaultResultResult1.presetName = "FadeInRight";
let closure_9 = { code: "(function pnpm_FadeTs3(){let[delayFunction,delay,animation,targetValues,config,animateTransformToValues,animationAndConfig,initialValues,pickTransformValues,callback]=this.__closure;var _targetValues$opacity,_targetValues,_initialValues$opacit,_initialValues;return{animations:{opacity:delayFunction(delay,animation((_targetValues$opacity=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.opacity)!==null&&_targetValues$opacity!==void 0?_targetValues$opacity:1,config)),transform:animateTransformToValues([{translateX:0}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{opacity:(_initialValues$opacit=(_initialValues=initialValues)===null||_initialValues===void 0?void 0:_initialValues.opacity)!==null&&_initialValues$opacit!==void 0?_initialValues$opacit:0,transform:pickTransformValues([{translateX:-25}],initialValues)},callback:callback};})" };
class FadeInLeft {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_3(this, FadeOutDown);
    items1 = [...items];
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(FadeOutDown);
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
      ({ callbackV, initialValues, targetValues } = _undefined);
      items = [callback, delayFunction, _undefined.getDelay(), tmp4, targetValues, tmp5, FadeOutDown(1935).animateTransformToValues, animationAndConfig, initialValues, FadeOutDown(1935).pickTransformValues, callbackV];
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
      function pnpm_FadeTs3() {
        let num;
        if (_undefined3 != null) {
          num = _undefined3.opacity;
        }
        if (num == null) {
          num = 1;
        }
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { opacity: _undefined(c1, _undefined2(num, c4)), transform: null };
        items = [{ translateX: 0 }];
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
        const items1 = [{ translateX: -25 }];
        obj3.transform = _undefined2(items1, _undefined4);
        obj.initialValues = obj3;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
      pnpm_FadeTs3.__closure = items1;
      pnpm_FadeTs3.__workletHash = 5719940525098;
      pnpm_FadeTs3.__initData = tmp6;
      return pnpm_FadeTs3;
    };
    return tmp3Result;
  }
}
FadeOutDown = FadeInLeft;
_inherits(FadeInLeft, fn(1872).ComplexAnimationBuilder);
const entry2 = {
  key: "createInstance",
  value: function createInstance() {
    return FadeOutDown();
  }
};
const items2 = [entry2];
const importDefaultResultResult2 = _createClass(FadeInLeft, null, items2);
importDefaultResultResult2.presetName = "FadeInLeft";
let closure_10 = { code: "(function pnpm_FadeTs4(){let[delayFunction,delay,animation,targetValues,config,animateTransformToValues,animationAndConfig,initialValues,pickTransformValues,callback]=this.__closure;var _targetValues$opacity,_targetValues,_initialValues$opacit,_initialValues;return{animations:{opacity:delayFunction(delay,animation((_targetValues$opacity=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.opacity)!==null&&_targetValues$opacity!==void 0?_targetValues$opacity:1,config)),transform:animateTransformToValues([{translateY:0}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{opacity:(_initialValues$opacit=(_initialValues=initialValues)===null||_initialValues===void 0?void 0:_initialValues.opacity)!==null&&_initialValues$opacit!==void 0?_initialValues$opacit:0,transform:pickTransformValues([{translateY:-25}],initialValues)},callback:callback};})" };
class FadeInUp {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_3(this, FadeOutDown);
    items1 = [...items];
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(FadeOutDown);
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
      ({ callbackV, initialValues, targetValues } = _undefined);
      items = [closure_10, delayFunction, _undefined.getDelay(), tmp4, targetValues, tmp5, FadeOutDown(1935).animateTransformToValues, animationAndConfig, initialValues, FadeOutDown(1935).pickTransformValues, callbackV];
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
      function pnpm_FadeTs4() {
        let num;
        if (_undefined3 != null) {
          num = _undefined3.opacity;
        }
        if (num == null) {
          num = 1;
        }
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { opacity: _undefined(c1, _undefined2(num, c4)), transform: null };
        items = [{ translateY: 0 }];
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
        const items1 = [{ translateY: -25 }];
        obj3.transform = _undefined2(items1, _undefined4);
        obj.initialValues = obj3;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
      pnpm_FadeTs4.__closure = items1;
      pnpm_FadeTs4.__workletHash = 10129300117517;
      pnpm_FadeTs4.__initData = tmp6;
      return pnpm_FadeTs4;
    };
    return tmp3Result;
  }
}
FadeOutDown = FadeInUp;
_inherits(FadeInUp, fn(1872).ComplexAnimationBuilder);
const entry3 = {
  key: "createInstance",
  value: function createInstance() {
    return FadeOutDown();
  }
};
const items3 = [entry3];
const importDefaultResultResult3 = _createClass(FadeInUp, null, items3);
importDefaultResultResult3.presetName = "FadeInUp";
let closure_11 = { code: "(function pnpm_FadeTs5(){let[delayFunction,delay,animation,targetValues,config,animateTransformToValues,animationAndConfig,initialValues,pickTransformValues,callback]=this.__closure;var _targetValues$opacity,_targetValues,_initialValues$opacit,_initialValues;return{animations:{opacity:delayFunction(delay,animation((_targetValues$opacity=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.opacity)!==null&&_targetValues$opacity!==void 0?_targetValues$opacity:1,config)),transform:animateTransformToValues([{translateY:0}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{opacity:(_initialValues$opacit=(_initialValues=initialValues)===null||_initialValues===void 0?void 0:_initialValues.opacity)!==null&&_initialValues$opacit!==void 0?_initialValues$opacit:0,transform:pickTransformValues([{translateY:25}],initialValues)},callback:callback};})" };
class FadeInDown {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_3(this, FadeOutDown);
    items1 = [...items];
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(FadeOutDown);
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
      ({ callbackV, initialValues, targetValues } = _undefined);
      items = [closure_11, delayFunction, _undefined.getDelay(), tmp4, targetValues, tmp5, FadeOutDown(1935).animateTransformToValues, animationAndConfig, initialValues, FadeOutDown(1935).pickTransformValues, callbackV];
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
      function pnpm_FadeTs5() {
        let num;
        if (_undefined3 != null) {
          num = _undefined3.opacity;
        }
        if (num == null) {
          num = 1;
        }
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { opacity: _undefined(c1, _undefined2(num, c4)), transform: null };
        items = [{ translateY: 0 }];
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
        const items1 = [{ translateY: 25 }];
        obj3.transform = _undefined2(items1, _undefined4);
        obj.initialValues = obj3;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
      pnpm_FadeTs5.__closure = items1;
      pnpm_FadeTs5.__workletHash = 9037743879009;
      pnpm_FadeTs5.__initData = tmp6;
      return pnpm_FadeTs5;
    };
    return tmp3Result;
  }
}
FadeOutDown = FadeInDown;
_inherits(FadeInDown, fn(1872).ComplexAnimationBuilder);
const entry4 = {
  key: "createInstance",
  value: function createInstance() {
    return FadeOutDown();
  }
};
const items4 = [entry4];
const importDefaultResultResult4 = _createClass(FadeInDown, null, items4);
importDefaultResultResult4.presetName = "FadeInDown";
let closure_12 = { code: "(function pnpm_FadeTs6(){let[delayFunction,delay,animation,targetValues,config,initialValues,callback]=this.__closure;var _targetValues$opacity,_targetValues,_initialValues$opacit,_initialValues;return{animations:{opacity:delayFunction(delay,animation((_targetValues$opacity=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.opacity)!==null&&_targetValues$opacity!==void 0?_targetValues$opacity:0,config))},initialValues:{opacity:(_initialValues$opacit=(_initialValues=initialValues)===null||_initialValues===void 0?void 0:_initialValues.opacity)!==null&&_initialValues$opacit!==void 0?_initialValues$opacit:1},callback:callback};})" };
class FadeOut {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_3(this, FadeOutDown);
    items1 = [...items];
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(FadeOutDown);
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
      ({ callbackV, initialValues, targetValues } = _undefined);
      items = [closure_12, delayFunction, _undefined.getDelay(), tmp3, targetValues, tmp4, initialValues, callbackV];
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_FadeTs6() {
        let num;
        if (_undefined != null) {
          num = _undefined.opacity;
        }
        if (num == null) {
          num = 0;
        }
        const obj = { animations: { opacity: _undefined(c1, _undefined2(num, c4)) }, initialValues: null, callback: null };
        let num2;
        if (_undefined2 != null) {
          num2 = _undefined2.opacity;
        }
        if (num2 == null) {
          num2 = 1;
        }
        obj.initialValues = { opacity: num2 };
        obj.callback = callback;
        return obj;
      }
      const items1 = [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_FadeTs6.__closure = items1;
      pnpm_FadeTs6.__workletHash = 10755825328696;
      pnpm_FadeTs6.__initData = tmp5;
      return pnpm_FadeTs6;
    };
    return tmp3Result;
  }
}
FadeOutDown = FadeOut;
_inherits(FadeOut, fn(1872).ComplexAnimationBuilder);
const entry5 = {
  key: "createInstance",
  value: function createInstance() {
    return FadeOutDown();
  }
};
const items5 = [entry5];
const importDefaultResultResult5 = _createClass(FadeOut, null, items5);
importDefaultResultResult5.presetName = "FadeOut";
let closure_13 = { code: "(function pnpm_FadeTs7(){let[delayFunction,delay,animation,targetValues,config,animateTransformToValues,animationAndConfig,initialValues,pickTransformValues,callback]=this.__closure;var _targetValues$opacity,_targetValues,_initialValues$opacit,_initialValues;return{animations:{opacity:delayFunction(delay,animation((_targetValues$opacity=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.opacity)!==null&&_targetValues$opacity!==void 0?_targetValues$opacity:0,config)),transform:animateTransformToValues([{translateX:25}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{opacity:(_initialValues$opacit=(_initialValues=initialValues)===null||_initialValues===void 0?void 0:_initialValues.opacity)!==null&&_initialValues$opacit!==void 0?_initialValues$opacit:1,transform:pickTransformValues([{translateX:0}],initialValues)},callback:callback};})" };
class FadeOutRight {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_3(this, FadeOutDown);
    items1 = [...items];
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(FadeOutDown);
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
      ({ callbackV, initialValues, targetValues } = _undefined);
      items = [closure_13, delayFunction, _undefined.getDelay(), tmp4, targetValues, tmp5, FadeOutDown(1935).animateTransformToValues, animationAndConfig, initialValues, FadeOutDown(1935).pickTransformValues, callbackV];
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
      function pnpm_FadeTs7() {
        let num;
        if (_undefined3 != null) {
          num = _undefined3.opacity;
        }
        if (num == null) {
          num = 0;
        }
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { opacity: _undefined(c1, _undefined2(num, c4)), transform: null };
        items = [{ translateX: 25 }];
        obj2.transform = _undefined(items, _undefined3, c6, _undefined, c1);
        obj.animations = obj2;
        let num2;
        if (_undefined4 != null) {
          num2 = _undefined4.opacity;
        }
        if (num2 == null) {
          num2 = 1;
        }
        const obj3 = { opacity: num2, transform: null };
        const items1 = [{ translateX: 0 }];
        obj3.transform = _undefined2(items1, _undefined4);
        obj.initialValues = obj3;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
      pnpm_FadeTs7.__closure = items1;
      pnpm_FadeTs7.__workletHash = 15974682857923;
      pnpm_FadeTs7.__initData = tmp6;
      return pnpm_FadeTs7;
    };
    return tmp3Result;
  }
}
FadeOutDown = FadeOutRight;
_inherits(FadeOutRight, fn(1872).ComplexAnimationBuilder);
const entry6 = {
  key: "createInstance",
  value: function createInstance() {
    return FadeOutDown();
  }
};
const items6 = [entry6];
const importDefaultResultResult6 = _createClass(FadeOutRight, null, items6);
importDefaultResultResult6.presetName = "FadeOutRight";
let closure_14 = { code: "(function pnpm_FadeTs8(){let[delayFunction,delay,animation,targetValues,config,animateTransformToValues,animationAndConfig,initialValues,pickTransformValues,callback]=this.__closure;var _targetValues$opacity,_targetValues,_initialValues$opacit,_initialValues;return{animations:{opacity:delayFunction(delay,animation((_targetValues$opacity=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.opacity)!==null&&_targetValues$opacity!==void 0?_targetValues$opacity:0,config)),transform:animateTransformToValues([{translateX:-25}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{opacity:(_initialValues$opacit=(_initialValues=initialValues)===null||_initialValues===void 0?void 0:_initialValues.opacity)!==null&&_initialValues$opacit!==void 0?_initialValues$opacit:1,transform:pickTransformValues([{translateX:0}],initialValues)},callback:callback};})" };
class FadeOutLeft {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_3(this, FadeOutDown);
    items1 = [...items];
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(FadeOutDown);
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
      ({ callbackV, initialValues, targetValues } = _undefined);
      items = [closure_14, delayFunction, _undefined.getDelay(), tmp4, targetValues, tmp5, FadeOutDown(1935).animateTransformToValues, animationAndConfig, initialValues, FadeOutDown(1935).pickTransformValues, callbackV];
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
      function pnpm_FadeTs8() {
        let num;
        if (_undefined3 != null) {
          num = _undefined3.opacity;
        }
        if (num == null) {
          num = 0;
        }
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { opacity: _undefined(c1, _undefined2(num, c4)), transform: null };
        items = [{ translateX: -25 }];
        obj2.transform = _undefined(items, _undefined3, c6, _undefined, c1);
        obj.animations = obj2;
        let num2;
        if (_undefined4 != null) {
          num2 = _undefined4.opacity;
        }
        if (num2 == null) {
          num2 = 1;
        }
        const obj3 = { opacity: num2, transform: null };
        const items1 = [{ translateX: 0 }];
        obj3.transform = _undefined2(items1, _undefined4);
        obj.initialValues = obj3;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
      pnpm_FadeTs8.__closure = items1;
      pnpm_FadeTs8.__workletHash = 15520476859969;
      pnpm_FadeTs8.__initData = tmp6;
      return pnpm_FadeTs8;
    };
    return tmp3Result;
  }
}
FadeOutDown = FadeOutLeft;
_inherits(FadeOutLeft, fn(1872).ComplexAnimationBuilder);
const entry7 = {
  key: "createInstance",
  value: function createInstance() {
    return FadeOutDown();
  }
};
const items7 = [entry7];
const importDefaultResultResult7 = _createClass(FadeOutLeft, null, items7);
importDefaultResultResult7.presetName = "FadeOutLeft";
let closure_15 = { code: "(function pnpm_FadeTs9(){let[delayFunction,delay,animation,targetValues,config,animateTransformToValues,animationAndConfig,initialValues,pickTransformValues,callback]=this.__closure;var _targetValues$opacity,_targetValues,_initialValues$opacit,_initialValues;return{animations:{opacity:delayFunction(delay,animation((_targetValues$opacity=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.opacity)!==null&&_targetValues$opacity!==void 0?_targetValues$opacity:0,config)),transform:animateTransformToValues([{translateY:-25}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{opacity:(_initialValues$opacit=(_initialValues=initialValues)===null||_initialValues===void 0?void 0:_initialValues.opacity)!==null&&_initialValues$opacit!==void 0?_initialValues$opacit:1,transform:pickTransformValues([{translateY:0}],initialValues)},callback:callback};})" };
class FadeOutUp {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_3(this, FadeOutDown);
    items1 = [...items];
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(FadeOutDown);
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
      ({ callbackV, initialValues, targetValues } = _undefined);
      items = [closure_15, delayFunction, _undefined.getDelay(), tmp4, targetValues, tmp5, FadeOutDown(1935).animateTransformToValues, animationAndConfig, initialValues, FadeOutDown(1935).pickTransformValues, callbackV];
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
      function pnpm_FadeTs9() {
        let num;
        if (_undefined3 != null) {
          num = _undefined3.opacity;
        }
        if (num == null) {
          num = 0;
        }
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { opacity: _undefined(c1, _undefined2(num, c4)), transform: null };
        items = [{ translateY: -25 }];
        obj2.transform = _undefined(items, _undefined3, c6, _undefined, c1);
        obj.animations = obj2;
        let num2;
        if (_undefined4 != null) {
          num2 = _undefined4.opacity;
        }
        if (num2 == null) {
          num2 = 1;
        }
        const obj3 = { opacity: num2, transform: null };
        const items1 = [{ translateY: 0 }];
        obj3.transform = _undefined2(items1, _undefined4);
        obj.initialValues = obj3;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
      pnpm_FadeTs9.__closure = items1;
      pnpm_FadeTs9.__workletHash = 1167978366816;
      pnpm_FadeTs9.__initData = tmp6;
      return pnpm_FadeTs9;
    };
    return tmp3Result;
  }
}
FadeOutDown = FadeOutUp;
_inherits(FadeOutUp, fn(1872).ComplexAnimationBuilder);
const entry8 = {
  key: "createInstance",
  value: function createInstance() {
    return FadeOutDown();
  }
};
const items8 = [entry8];
const importDefaultResultResult8 = _createClass(FadeOutUp, null, items8);
importDefaultResultResult8.presetName = "FadeOutUp";
let closure_16 = { code: "(function pnpm_FadeTs10(){let[delayFunction,delay,animation,targetValues,config,animateTransformToValues,animationAndConfig,initialValues,pickTransformValues,callback]=this.__closure;var _targetValues$opacity,_targetValues,_initialValues$opacit,_initialValues;return{animations:{opacity:delayFunction(delay,animation((_targetValues$opacity=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.opacity)!==null&&_targetValues$opacity!==void 0?_targetValues$opacity:0,config)),transform:animateTransformToValues([{translateY:25}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{opacity:(_initialValues$opacit=(_initialValues=initialValues)===null||_initialValues===void 0?void 0:_initialValues.opacity)!==null&&_initialValues$opacit!==void 0?_initialValues$opacit:1,transform:pickTransformValues([{translateY:0}],initialValues)},callback:callback};})" };
class FadeOutDown {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_3(this, FadeOutDown);
    items1 = [...items];
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(FadeOutDown);
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
      ({ callbackV, initialValues, targetValues } = _undefined);
      items = [closure_16, delayFunction, _undefined.getDelay(), tmp4, targetValues, tmp5, FadeOutDown(1935).animateTransformToValues, animationAndConfig, initialValues, FadeOutDown(1935).pickTransformValues, callbackV];
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
      function pnpm_FadeTs10() {
        let num;
        if (_undefined3 != null) {
          num = _undefined3.opacity;
        }
        if (num == null) {
          num = 0;
        }
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { opacity: _undefined(c1, _undefined2(num, c4)), transform: null };
        items = [{ translateY: 25 }];
        obj2.transform = _undefined(items, _undefined3, c6, _undefined, c1);
        obj.animations = obj2;
        let num2;
        if (_undefined4 != null) {
          num2 = _undefined4.opacity;
        }
        if (num2 == null) {
          num2 = 1;
        }
        const obj3 = { opacity: num2, transform: null };
        const items1 = [{ translateY: 0 }];
        obj3.transform = _undefined2(items1, _undefined4);
        obj.initialValues = obj3;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
      pnpm_FadeTs10.__closure = items1;
      pnpm_FadeTs10.__workletHash = 9274246347381;
      pnpm_FadeTs10.__initData = tmp6;
      return pnpm_FadeTs10;
    };
    return tmp3Result;
  }
}
_inherits(FadeOutDown, fn(1872).ComplexAnimationBuilder);
const entry9 = {
  key: "createInstance",
  value: function createInstance() {
    return FadeOutDown();
  }
};
const items9 = [entry9];
const importDefaultResultResult9 = _createClass(FadeOutDown, null, items9);
importDefaultResultResult9.presetName = "FadeOutDown";

export const FadeIn = importDefaultResultResult;
export const FadeInRight = importDefaultResultResult1;
export const FadeInLeft = importDefaultResultResult2;
export const FadeInUp = importDefaultResultResult3;
export const FadeInDown = importDefaultResultResult4;
export const FadeOut = importDefaultResultResult5;
export const FadeOutRight = importDefaultResultResult6;
export const FadeOutLeft = importDefaultResultResult7;
export const FadeOutUp = importDefaultResultResult8;
export const FadeOutDown = importDefaultResultResult9;