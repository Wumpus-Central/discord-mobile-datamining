// _runtime/01945_Slide.js
import _slicedToArray_mod from "metro/00032__.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import c2 from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";

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
let _slicedToArray = _slicedToArray_mod;
let closure_5 = {
  code: "(function pnpm_SlideTs1(values){let[delayFunction,delay,animation,targetValues,config,initialValues,callback]=this.__closure;var _targetValues$originX,_targetValues;return{animations:{originX:delayFunction(delay,animation((_targetValues$originX=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.originX)!==null&&_targetValues$originX!==void 0?_targetValues$originX:values.targetOriginX,config))},initialValues:{originX:values.targetOriginX+values.windowWidth,...initialValues},callback:callback};})",
};
class SlideInRight {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, SlideOutDown);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(SlideOutDown);
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
      const delayFunction = _undefined.getDelayFunction();
      [tmp3, tmp4] = _undefined.getAnimationAndConfig();
      items = [closure_5, delayFunction, _undefined.getDelay(), tmp3, _undefined.targetValues, tmp4, ,];
      ({ initialValues: arr[6], callbackV: arr[7] } = _undefined);
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_SlideTs1(targetOriginX) {
        let originX;
        if (_undefined != null) {
          originX = _undefined.originX;
        }
        if (originX == null) {
          originX = targetOriginX.targetOriginX;
        }
        const obj = {
          animations: { originX: _undefined(c1, _undefined2(originX, c4)) },
          initialValues: null,
          callback: null,
        };
        const merged = Object.assign(c5);
        obj.initialValues = { originX: targetOriginX.targetOriginX + targetOriginX.windowWidth };
        obj.callback = callback;
        return obj;
      }
      const items1 = [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_SlideTs1.__closure = items1;
      pnpm_SlideTs1.__workletHash = 16530228291268;
      pnpm_SlideTs1.__initData = tmp5;
      return pnpm_SlideTs1;
    };
    return tmp3Result;
  }
}
_slicedToArray = SlideInRight;
_inherits(SlideInRight, fn(1875).ComplexAnimationBuilder);
const entry = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  },
};
let items = [entry];
const importDefaultResultResult = _createClass(SlideInRight, null, items);
importDefaultResultResult.presetName = "SlideInRight";
let closure_6 = {
  code: "(function pnpm_SlideTs2(values){let[delayFunction,delay,animation,targetValues,config,initialValues,callback]=this.__closure;var _targetValues$originX,_targetValues;return{animations:{originX:delayFunction(delay,animation((_targetValues$originX=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.originX)!==null&&_targetValues$originX!==void 0?_targetValues$originX:values.targetOriginX,config))},initialValues:{originX:values.targetOriginX-values.windowWidth,...initialValues},callback:callback};})",
};
class SlideInLeft {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, SlideOutDown);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(SlideOutDown);
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
      const delayFunction = _undefined.getDelayFunction();
      [tmp3, tmp4] = _undefined.getAnimationAndConfig();
      items = [callback, delayFunction, _undefined.getDelay(), tmp3, _undefined.targetValues, tmp4, ,];
      ({ initialValues: arr[6], callbackV: arr[7] } = _undefined);
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_SlideTs2(targetOriginX) {
        let originX;
        if (_undefined != null) {
          originX = _undefined.originX;
        }
        if (originX == null) {
          originX = targetOriginX.targetOriginX;
        }
        const obj = {
          animations: { originX: _undefined(c1, _undefined2(originX, c4)) },
          initialValues: null,
          callback: null,
        };
        const merged = Object.assign(c5);
        obj.initialValues = { originX: targetOriginX.targetOriginX - targetOriginX.windowWidth };
        obj.callback = callback;
        return obj;
      }
      const items1 = [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_SlideTs2.__closure = items1;
      pnpm_SlideTs2.__workletHash = 16677746836097;
      pnpm_SlideTs2.__initData = tmp5;
      return pnpm_SlideTs2;
    };
    return tmp3Result;
  }
}
_slicedToArray = SlideInLeft;
_inherits(SlideInLeft, fn(1875).ComplexAnimationBuilder);
const entry1 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  },
};
let items1 = [entry1];
const importDefaultResultResult1 = _createClass(SlideInLeft, null, items1);
importDefaultResultResult1.presetName = "SlideInLeft";
let closure_7 = {
  code: "(function pnpm_SlideTs3(values){let[delayFunction,delay,animation,targetValues,config,initialValues,callback]=this.__closure;var _targetValues$originX,_targetValues;return{animations:{originX:delayFunction(delay,animation((_targetValues$originX=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.originX)!==null&&_targetValues$originX!==void 0?_targetValues$originX:Math.max(values.currentOriginX+values.windowWidth,values.windowWidth),config))},initialValues:{originX:values.currentOriginX,...initialValues},callback:callback};})",
};
class SlideOutRight {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, SlideOutDown);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(SlideOutDown);
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
      const delayFunction = _undefined.getDelayFunction();
      [tmp3, tmp4] = _undefined.getAnimationAndConfig();
      items = [closure_7, delayFunction, _undefined.getDelay(), tmp3, _undefined.targetValues, tmp4, ,];
      ({ initialValues: arr[6], callbackV: arr[7] } = _undefined);
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_SlideTs3(currentOriginX) {
        let originX;
        if (_undefined != null) {
          originX = _undefined.originX;
        }
        if (originX == null) {
          const _Math = Math;
          originX = Math.max(currentOriginX.currentOriginX + currentOriginX.windowWidth, currentOriginX.windowWidth);
        }
        const obj = {
          animations: { originX: _undefined(c1, _undefined2(originX, c4)) },
          initialValues: null,
          callback: null,
        };
        const merged = Object.assign(c5);
        obj.initialValues = { originX: currentOriginX.currentOriginX };
        obj.callback = callback;
        return obj;
      }
      const items1 = [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_SlideTs3.__closure = items1;
      pnpm_SlideTs3.__workletHash = 3867191970045;
      pnpm_SlideTs3.__initData = tmp5;
      return pnpm_SlideTs3;
    };
    return tmp3Result;
  }
}
_slicedToArray = SlideOutRight;
_inherits(SlideOutRight, fn(1875).ComplexAnimationBuilder);
const entry2 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  },
};
const items2 = [entry2];
const importDefaultResultResult2 = _createClass(SlideOutRight, null, items2);
importDefaultResultResult2.presetName = "SlideOutRight";
let closure_8 = {
  code: "(function pnpm_SlideTs4(values){let[delayFunction,delay,animation,targetValues,config,initialValues,callback]=this.__closure;var _targetValues$originX,_targetValues;return{animations:{originX:delayFunction(delay,animation((_targetValues$originX=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.originX)!==null&&_targetValues$originX!==void 0?_targetValues$originX:Math.min(values.currentOriginX-values.windowWidth,-values.windowWidth),config))},initialValues:{originX:values.currentOriginX,...initialValues},callback:callback};})",
};
class SlideOutLeft {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, SlideOutDown);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(SlideOutDown);
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
      const delayFunction = _undefined.getDelayFunction();
      [tmp3, tmp4] = _undefined.getAnimationAndConfig();
      items = [closure_8, delayFunction, _undefined.getDelay(), tmp3, _undefined.targetValues, tmp4, ,];
      ({ initialValues: arr[6], callbackV: arr[7] } = _undefined);
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_SlideTs4(currentOriginX) {
        let originX;
        if (_undefined != null) {
          originX = _undefined.originX;
        }
        if (originX == null) {
          const _Math = Math;
          originX = Math.min(currentOriginX.currentOriginX - currentOriginX.windowWidth, -currentOriginX.windowWidth);
        }
        const obj = {
          animations: { originX: _undefined(c1, _undefined2(originX, c4)) },
          initialValues: null,
          callback: null,
        };
        const merged = Object.assign(c5);
        obj.initialValues = { originX: currentOriginX.currentOriginX };
        obj.callback = callback;
        return obj;
      }
      const items1 = [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_SlideTs4.__closure = items1;
      pnpm_SlideTs4.__workletHash = 14708395216463;
      pnpm_SlideTs4.__initData = tmp5;
      return pnpm_SlideTs4;
    };
    return tmp3Result;
  }
}
_slicedToArray = SlideOutLeft;
_inherits(SlideOutLeft, fn(1875).ComplexAnimationBuilder);
const entry3 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  },
};
const items3 = [entry3];
const importDefaultResultResult3 = _createClass(SlideOutLeft, null, items3);
importDefaultResultResult3.presetName = "SlideOutLeft";
let closure_9 = {
  code: "(function pnpm_SlideTs5(values){let[delayFunction,delay,animation,targetValues,config,initialValues,callback]=this.__closure;var _targetValues$originY,_targetValues;return{animations:{originY:delayFunction(delay,animation((_targetValues$originY=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.originY)!==null&&_targetValues$originY!==void 0?_targetValues$originY:values.targetOriginY,config))},initialValues:{originY:-values.windowHeight,...initialValues},callback:callback};})",
};
class SlideInUp {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, SlideOutDown);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(SlideOutDown);
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
      const delayFunction = _undefined.getDelayFunction();
      [tmp3, tmp4] = _undefined.getAnimationAndConfig();
      items = [closure_9, delayFunction, _undefined.getDelay(), tmp3, _undefined.targetValues, tmp4, ,];
      ({ initialValues: arr[6], callbackV: arr[7] } = _undefined);
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_SlideTs5(originY) {
        originY = undefined;
        if (_undefined != null) {
          originY = _undefined.originY;
        }
        if (originY == null) {
          originY = originY.targetOriginY;
        }
        const obj = {
          animations: { originY: _undefined(c1, _undefined2(originY, c4)) },
          initialValues: null,
          callback: null,
        };
        const merged = Object.assign(c5);
        obj.initialValues = { originY: -originY.windowHeight };
        obj.callback = callback;
        return obj;
      }
      const items1 = [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_SlideTs5.__closure = items1;
      pnpm_SlideTs5.__workletHash = 17244972260532;
      pnpm_SlideTs5.__initData = tmp5;
      return pnpm_SlideTs5;
    };
    return tmp3Result;
  }
}
_slicedToArray = SlideInUp;
_inherits(SlideInUp, fn(1875).ComplexAnimationBuilder);
const entry4 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  },
};
const items4 = [entry4];
const importDefaultResultResult4 = _createClass(SlideInUp, null, items4);
importDefaultResultResult4.presetName = "SlideInUp";
let closure_10 = {
  code: "(function pnpm_SlideTs6(values){let[delayFunction,delay,animation,targetValues,config,initialValues,callback]=this.__closure;var _targetValues$originY,_targetValues;return{animations:{originY:delayFunction(delay,animation((_targetValues$originY=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.originY)!==null&&_targetValues$originY!==void 0?_targetValues$originY:values.targetOriginY,config))},initialValues:{originY:values.targetOriginY+values.windowHeight,...initialValues},callback:callback};})",
};
class SlideInDown {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, SlideOutDown);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(SlideOutDown);
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
      const delayFunction = _undefined.getDelayFunction();
      [tmp3, tmp4] = _undefined.getAnimationAndConfig();
      items = [closure_10, delayFunction, _undefined.getDelay(), tmp3, _undefined.targetValues, tmp4, ,];
      ({ initialValues: arr[6], callbackV: arr[7] } = _undefined);
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_SlideTs6(targetOriginY) {
        let originY;
        if (_undefined != null) {
          originY = _undefined.originY;
        }
        if (originY == null) {
          originY = targetOriginY.targetOriginY;
        }
        const obj = {
          animations: { originY: _undefined(c1, _undefined2(originY, c4)) },
          initialValues: null,
          callback: null,
        };
        const merged = Object.assign(c5);
        obj.initialValues = { originY: targetOriginY.targetOriginY + targetOriginY.windowHeight };
        obj.callback = callback;
        return obj;
      }
      const items1 = [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_SlideTs6.__closure = items1;
      pnpm_SlideTs6.__workletHash = 10159826988731;
      pnpm_SlideTs6.__initData = tmp5;
      return pnpm_SlideTs6;
    };
    return tmp3Result;
  }
}
_slicedToArray = SlideInDown;
_inherits(SlideInDown, fn(1875).ComplexAnimationBuilder);
const entry5 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  },
};
const items5 = [entry5];
const importDefaultResultResult5 = _createClass(SlideInDown, null, items5);
importDefaultResultResult5.presetName = "SlideInDown";
let closure_11 = {
  code: "(function pnpm_SlideTs7(values){let[delayFunction,delay,animation,targetValues,config,initialValues,callback]=this.__closure;var _targetValues$originY,_targetValues;return{animations:{originY:delayFunction(delay,animation((_targetValues$originY=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.originY)!==null&&_targetValues$originY!==void 0?_targetValues$originY:Math.min(values.currentOriginY-values.windowHeight,-values.windowHeight),config))},initialValues:{originY:values.currentOriginY,...initialValues},callback:callback};})",
};
class SlideOutUp {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, SlideOutDown);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(SlideOutDown);
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
      const delayFunction = _undefined.getDelayFunction();
      [tmp3, tmp4] = _undefined.getAnimationAndConfig();
      items = [closure_11, delayFunction, _undefined.getDelay(), tmp3, _undefined.targetValues, tmp4, ,];
      ({ initialValues: arr[6], callbackV: arr[7] } = _undefined);
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_SlideTs7(currentOriginY) {
        let originY;
        if (_undefined != null) {
          originY = _undefined.originY;
        }
        if (originY == null) {
          const _Math = Math;
          originY = Math.min(currentOriginY.currentOriginY - currentOriginY.windowHeight, -currentOriginY.windowHeight);
        }
        const obj = {
          animations: { originY: _undefined(c1, _undefined2(originY, c4)) },
          initialValues: null,
          callback: null,
        };
        const merged = Object.assign(c5);
        obj.initialValues = { originY: currentOriginY.currentOriginY };
        obj.callback = callback;
        return obj;
      }
      const items1 = [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_SlideTs7.__closure = items1;
      pnpm_SlideTs7.__workletHash = 8192684461325;
      pnpm_SlideTs7.__initData = tmp5;
      return pnpm_SlideTs7;
    };
    return tmp3Result;
  }
}
_slicedToArray = SlideOutUp;
_inherits(SlideOutUp, fn(1875).ComplexAnimationBuilder);
const entry6 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  },
};
const items6 = [entry6];
const importDefaultResultResult6 = _createClass(SlideOutUp, null, items6);
importDefaultResultResult6.presetName = "SlideOutUp";
let closure_12 = {
  code: "(function pnpm_SlideTs8(values){let[delayFunction,delay,animation,targetValues,config,initialValues,callback]=this.__closure;var _targetValues$originY,_targetValues;return{animations:{originY:delayFunction(delay,animation((_targetValues$originY=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.originY)!==null&&_targetValues$originY!==void 0?_targetValues$originY:Math.max(values.currentOriginY+values.windowHeight,values.windowHeight),config))},initialValues:{originY:values.currentOriginY,...initialValues},callback:callback};})",
};
class SlideOutDown {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, SlideOutDown);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(SlideOutDown);
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
      const delayFunction = _undefined.getDelayFunction();
      [tmp3, tmp4] = _undefined.getAnimationAndConfig();
      items = [closure_12, delayFunction, _undefined.getDelay(), tmp3, _undefined.targetValues, tmp4, ,];
      ({ initialValues: arr[6], callbackV: arr[7] } = _undefined);
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_SlideTs8(currentOriginY) {
        let originY;
        if (_undefined != null) {
          originY = _undefined.originY;
        }
        if (originY == null) {
          const _Math = Math;
          originY = Math.max(currentOriginY.currentOriginY + currentOriginY.windowHeight, currentOriginY.windowHeight);
        }
        const obj = {
          animations: { originY: _undefined(c1, _undefined2(originY, c4)) },
          initialValues: null,
          callback: null,
        };
        const merged = Object.assign(c5);
        obj.initialValues = { originY: currentOriginY.currentOriginY };
        obj.callback = callback;
        return obj;
      }
      const items1 = [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_SlideTs8.__closure = items1;
      pnpm_SlideTs8.__workletHash = 1576799321399;
      pnpm_SlideTs8.__initData = tmp5;
      return pnpm_SlideTs8;
    };
    return tmp3Result;
  }
}
_slicedToArray = SlideOutDown;
_inherits(SlideOutDown, fn(1875).ComplexAnimationBuilder);
const entry7 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  },
};
const items7 = [entry7];
const importDefaultResultResult7 = _createClass(SlideOutDown, null, items7);
importDefaultResultResult7.presetName = "SlideOutDown";

export const SlideInRight = importDefaultResultResult;
export const SlideInLeft = importDefaultResultResult1;
export const SlideOutRight = importDefaultResultResult2;
export const SlideOutLeft = importDefaultResultResult3;
export const SlideInUp = importDefaultResultResult4;
export const SlideInDown = importDefaultResultResult5;
export const SlideOutUp = importDefaultResultResult6;
export const SlideOutDown = importDefaultResultResult7;
