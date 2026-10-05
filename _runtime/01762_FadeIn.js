// _runtime/01762_FadeIn.js
import BaseAnimationBuilder from "01713_BaseAnimationBuilder.js";
import _slicedToArray from "metro/00032__slicedToArray.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import c2 from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {}));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
let closure_5 = {
  code: "function pnpm_FadeTs1(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config))},initialValues:{opacity:0,...initialValues},callback:callback};}",
};
class FadeIn {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    let closure_0;
    _classCallCheck(this, FadeIn);
    const items1 = [...items];
    let obj = _getPrototypeOf(FadeIn);
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
      const tmp2 = FadeIn(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const delay = closure_0.getDelay();
      const fn = function t() {
        let obj3;
        const obj = {
          animations: { opacity: delayFunction(delay, first(1, closure_2)) },
          initialValues: obj3,
          callback: callbackV,
        };
        ({ opacity: delayFunction(delay, first(1, closure_2)) });
        obj3 = { opacity: 0 };
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 4187624806586;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(FadeIn, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = FadeIn();
    return tmp;
  },
};
let items = [entry];
const importDefaultResultResult = _createClass(FadeIn, null, items);
importDefaultResultResult.presetName = "FadeIn";
let closure_6 = {
  code: "function pnpm_FadeTs2(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{translateX:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{translateX:25}],...initialValues},callback:callback};}",
};
class FadeInRight {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, FadeInRight);
    let items1 = [...items];
    let obj = _getPrototypeOf(FadeInRight);
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
      const tmp2 = FadeInRight(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const delay = closure_0.getDelay();
      const fn = function t() {
        let items;
        let items1;
        let obj2;
        let obj4;
        const obj = { animations: obj2, initialValues: obj4, callback: callbackV };
        obj2 = { opacity: delayFunction(delay, first(1, closure_2)), transform: items };
        items = [{ translateX: delayFunction(delay, first(0, closure_2)) }];
        obj4 = { opacity: 0, transform: items1 };
        items1 = [{ translateX: 25 }];
        ({ translateX: delayFunction(delay, first(0, closure_2)) });
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 5328703857616;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(FadeInRight, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry1 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = FadeInRight();
    return tmp;
  },
};
let items1 = [entry1];
const importDefaultResultResult1 = _createClass(FadeInRight, null, items1);
importDefaultResultResult1.presetName = "FadeInRight";
let closure_7 = {
  code: "function pnpm_FadeTs3(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{translateX:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{translateX:-25}],...initialValues},callback:callback};}",
};
class FadeInLeft {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, FadeInLeft);
    let items1 = [...items];
    let obj = _getPrototypeOf(FadeInLeft);
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
      const tmp2 = FadeInLeft(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const delay = closure_0.getDelay();
      const fn = function t() {
        let items;
        let items1;
        let obj2;
        let obj4;
        const obj = { animations: obj2, initialValues: obj4, callback: callbackV };
        obj2 = { opacity: delayFunction(delay, first(1, closure_2)), transform: items };
        items = [{ translateX: delayFunction(delay, first(0, closure_2)) }];
        obj4 = { opacity: 0, transform: items1 };
        items1 = [{ translateX: -25 }];
        ({ translateX: delayFunction(delay, first(0, closure_2)) });
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 3876464806620;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(FadeInLeft, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry2 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = FadeInLeft();
    return tmp;
  },
};
const items2 = [entry2];
const importDefaultResultResult2 = _createClass(FadeInLeft, null, items2);
importDefaultResultResult2.presetName = "FadeInLeft";
let closure_8 = {
  code: "function pnpm_FadeTs4(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{translateY:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{translateY:-25}],...initialValues},callback:callback};}",
};
class FadeInUp {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, FadeInUp);
    let items1 = [...items];
    let obj = _getPrototypeOf(FadeInUp);
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
      const tmp2 = FadeInUp(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const delay = closure_0.getDelay();
      const fn = function t() {
        let items;
        let items1;
        let obj2;
        let obj4;
        const obj = { animations: obj2, initialValues: obj4, callback: callbackV };
        obj2 = { opacity: delayFunction(delay, first(1, closure_2)), transform: items };
        items = [{ translateY: delayFunction(delay, first(0, closure_2)) }];
        obj4 = { opacity: 0, transform: items1 };
        items1 = [{ translateY: -25 }];
        ({ translateY: delayFunction(delay, first(0, closure_2)) });
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 14652570092763;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(FadeInUp, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry3 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = FadeInUp();
    return tmp;
  },
};
const items3 = [entry3];
const importDefaultResultResult3 = _createClass(FadeInUp, null, items3);
importDefaultResultResult3.presetName = "FadeInUp";
let closure_9 = {
  code: "function pnpm_FadeTs5(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{translateY:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{translateY:25}],...initialValues},callback:callback};}",
};
class FadeInDown {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, FadeInDown);
    let items1 = [...items];
    let obj = _getPrototypeOf(FadeInDown);
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
      const tmp2 = FadeInDown(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const delay = closure_0.getDelay();
      const fn = function t() {
        let items;
        let items1;
        let obj2;
        let obj4;
        const obj = { animations: obj2, initialValues: obj4, callback: callbackV };
        obj2 = { opacity: delayFunction(delay, first(1, closure_2)), transform: items };
        items = [{ translateY: delayFunction(delay, first(0, closure_2)) }];
        obj4 = { opacity: 0, transform: items1 };
        items1 = [{ translateY: 25 }];
        ({ translateY: delayFunction(delay, first(0, closure_2)) });
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 3370389664855;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(FadeInDown, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry4 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = FadeInDown();
    return tmp;
  },
};
const items4 = [entry4];
const importDefaultResultResult4 = _createClass(FadeInDown, null, items4);
importDefaultResultResult4.presetName = "FadeInDown";
let closure_10 = {
  code: "function pnpm_FadeTs6(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config))},initialValues:{opacity:1,...initialValues},callback:callback};}",
};
class FadeOut {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    let closure_0;
    _classCallCheck(this, FadeOut);
    const items1 = [...items];
    let obj = _getPrototypeOf(FadeOut);
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
      const tmp2 = FadeOut(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const delay = closure_0.getDelay();
      const fn = function t() {
        let obj3;
        const obj = {
          animations: { opacity: delayFunction(delay, first(0, closure_2)) },
          initialValues: obj3,
          callback: callbackV,
        };
        ({ opacity: delayFunction(delay, first(0, closure_2)) });
        obj3 = { opacity: 1 };
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 12496093665501;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(FadeOut, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry5 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = FadeOut();
    return tmp;
  },
};
const items5 = [entry5];
const importDefaultResultResult5 = _createClass(FadeOut, null, items5);
importDefaultResultResult5.presetName = "FadeOut";
let closure_11 = {
  code: "function pnpm_FadeTs7(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{translateX:delayFunction(delay,animation(25,config))}]},initialValues:{opacity:1,transform:[{translateX:0}],...initialValues},callback:callback};}",
};
class FadeOutRight {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, FadeOutRight);
    let items1 = [...items];
    let obj = _getPrototypeOf(FadeOutRight);
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
      const tmp2 = FadeOutRight(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const delay = closure_0.getDelay();
      const fn = function t() {
        let items;
        let items1;
        let obj2;
        let obj4;
        const obj = { animations: obj2, initialValues: obj4, callback: callbackV };
        obj2 = { opacity: delayFunction(delay, first(0, closure_2)), transform: items };
        items = [{ translateX: delayFunction(delay, first(25, closure_2)) }];
        obj4 = { opacity: 1, transform: items1 };
        items1 = [{ translateX: 0 }];
        ({ translateX: delayFunction(delay, first(25, closure_2)) });
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 8966511332149;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(FadeOutRight, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry6 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = FadeOutRight();
    return tmp;
  },
};
const items6 = [entry6];
const importDefaultResultResult6 = _createClass(FadeOutRight, null, items6);
importDefaultResultResult6.presetName = "FadeOutRight";
let closure_12 = {
  code: "function pnpm_FadeTs8(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{translateX:delayFunction(delay,animation(-25,config))}]},initialValues:{opacity:1,transform:[{translateX:0}],...initialValues},callback:callback};}",
};
class FadeOutLeft {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, FadeOutLeft);
    let items1 = [...items];
    let obj = _getPrototypeOf(FadeOutLeft);
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
      const tmp2 = FadeOutLeft(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const delay = closure_0.getDelay();
      const fn = function t() {
        let items;
        let items1;
        let obj2;
        let obj4;
        const obj = { animations: obj2, initialValues: obj4, callback: callbackV };
        obj2 = { opacity: delayFunction(delay, first(0, closure_2)), transform: items };
        items = [{ translateX: delayFunction(delay, first(-25, closure_2)) }];
        obj4 = { opacity: 1, transform: items1 };
        items1 = [{ translateX: 0 }];
        ({ translateX: delayFunction(delay, first(-25, closure_2)) });
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 7570822684087;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(FadeOutLeft, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry7 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = FadeOutLeft();
    return tmp;
  },
};
const items7 = [entry7];
const importDefaultResultResult7 = _createClass(FadeOutLeft, null, items7);
importDefaultResultResult7.presetName = "FadeOutLeft";
let closure_13 = {
  code: "function pnpm_FadeTs9(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{translateY:delayFunction(delay,animation(-25,config))}]},initialValues:{opacity:1,transform:[{translateY:0}],...initialValues},callback:callback};}",
};
class FadeOutUp {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, FadeOutUp);
    let items1 = [...items];
    let obj = _getPrototypeOf(FadeOutUp);
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
      const tmp2 = FadeOutUp(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const delay = closure_0.getDelay();
      const fn = function t() {
        let items;
        let items1;
        let obj2;
        let obj4;
        const obj = { animations: obj2, initialValues: obj4, callback: callbackV };
        obj2 = { opacity: delayFunction(delay, first(0, closure_2)), transform: items };
        items = [{ translateY: delayFunction(delay, first(-25, closure_2)) }];
        obj4 = { opacity: 1, transform: items1 };
        items1 = [{ translateY: 0 }];
        ({ translateY: delayFunction(delay, first(-25, closure_2)) });
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 7080775562358;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(FadeOutUp, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry8 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = FadeOutUp();
    return tmp;
  },
};
const items8 = [entry8];
const importDefaultResultResult8 = _createClass(FadeOutUp, null, items8);
importDefaultResultResult8.presetName = "FadeOutUp";
let closure_14 = {
  code: "function pnpm_FadeTs10(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{translateY:delayFunction(delay,animation(25,config))}]},initialValues:{opacity:1,transform:[{translateY:0}],...initialValues},callback:callback};}",
};
class FadeOutDown {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, FadeOutDown);
    let items1 = [...items];
    let obj = _getPrototypeOf(FadeOutDown);
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
      const tmp2 = FadeOutDown(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const delay = closure_0.getDelay();
      const fn = function t() {
        let items;
        let items1;
        let obj2;
        let obj4;
        const obj = { animations: obj2, initialValues: obj4, callback: callbackV };
        obj2 = { opacity: delayFunction(delay, first(0, closure_2)), transform: items };
        items = [{ translateY: delayFunction(delay, first(25, closure_2)) }];
        obj4 = { opacity: 1, transform: items1 };
        items1 = [{ translateY: 0 }];
        ({ translateY: delayFunction(delay, first(25, closure_2)) });
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 4897427935171;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(FadeOutDown, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry9 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = FadeOutDown();
    return tmp;
  },
};
const items9 = [entry9];
const importDefaultResultResult9 = _createClass(FadeOutDown, null, items9);
importDefaultResultResult9.presetName = "FadeOutDown";
const FadeIn_export = importDefaultResultResult;
const FadeInRight_export = importDefaultResultResult1;
const FadeInLeft_export = importDefaultResultResult2;
const FadeInUp_export = importDefaultResultResult3;
const FadeInDown_export = importDefaultResultResult4;
const FadeOut_export = importDefaultResultResult5;
const FadeOutRight_export = importDefaultResultResult6;
const FadeOutLeft_export = importDefaultResultResult7;
const FadeOutUp_export = importDefaultResultResult8;
const FadeOutDown_export = importDefaultResultResult9;

export { FadeIn_export as FadeIn };
export { FadeInRight_export as FadeInRight };
export { FadeInLeft_export as FadeInLeft };
export { FadeInUp_export as FadeInUp };
export { FadeInDown_export as FadeInDown };
export { FadeOut_export as FadeOut };
export { FadeOutRight_export as FadeOutRight };
export { FadeOutLeft_export as FadeOutLeft };
export { FadeOutUp_export as FadeOutUp };
export { FadeOutDown_export as FadeOutDown };
