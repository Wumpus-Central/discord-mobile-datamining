// === Module 1680: ? ===

// Module 1680
import valueSetter2 from "valueSetter" /* 1681 */;
import module_1646_mod from "module_1646" /* 1646 */;

const require = globalThis.__r;
let _require, map;

let module_1646 = module_1646_mod;
module_1646.shouldBeUseWeb();
module_1646 = module_1646_mod;
let closure_2 = module_1646.isJest();
function addCompilerSafeGetAndSet(prototype) {
  let closure_0 = prototype;
  const obj = {
    get: {
      value() {
        return obj.value;
      },
      configurable: false,
      enumerable: false
    },
    set: {
      value(__isAnimationDefinition) {
        if (typeof __isAnimationDefinition === "function") {
          if (!__isAnimationDefinition.__isAnimationDefinition) {
            obj.value = __isAnimationDefinition(obj.value);
          }
        }
        obj.value = __isAnimationDefinition;
      },
      configurable: false,
      enumerable: false
    }
  };
  Object.defineProperties(prototype, obj);
}
addCompilerSafeGetAndSet.__closure = {};
addCompilerSafeGetAndSet.__workletHash = 14094096506039;
addCompilerSafeGetAndSet.__initData = { code: "function addCompilerSafeGetAndSet_Pnpm_mutablesTs1(mutable){Object.defineProperties(mutable,{get:{value:function(){return mutable.value;},configurable:false,enumerable:false},set:{value:function(newValue){if(typeof newValue==='function'&&!newValue.__isAnimationDefinition){mutable.value=newValue(mutable.value);}else{mutable.value=newValue;}},configurable:false,enumerable:false}});}" };
function hideInternalValueProp(arg0) {
  Object.defineProperty(arg0, "_value", { configurable: false, enumerable: false });
}
hideInternalValueProp.__closure = {};
hideInternalValueProp.__workletHash = 3380393180484;
hideInternalValueProp.__initData = { code: "function hideInternalValueProp_Pnpm_mutablesTs2(mutable){Object.defineProperty(mutable,'_value',{configurable:false,enumerable:false});}" };
function makeMutableUI(initialValues) {
  let obj3;
  let obj4;
  map = new Map();
  let closure_1 = initialValues;
  let obj = {
    modify(fn) {
      let tmp3;
      const valueSetter = valueSetter2.valueSetter;
      valueSetter2;
      if (undefined !== fn) {
        tmp3 = fn(initialValues);
      } else {
        tmp3 = initialValues;
      }
      valueSetter(obj, tmp3, flag);
    },
    addListener(arg0, arg1) {
      const result = map.set(arg0, arg1);
    },
    removeListener(arg0) {
      map.delete(arg0);
    },
    _animation: null,
    _isReanimatedSharedValue: true
  };
  Object.defineProperty(obj, "value", {
    get: () => initialValues,
    set: (value) => {
      obj = valueSetter2;
      obj.valueSetter(obj, value);
    }
  });
  Object.defineProperty(obj, "_value", {
    get: () => initialValues,
    set: (arg0) => {
      let closure_0 = arg0;
      let closure_1 = arg0;
      const item = map.forEach((fn) => {
        fn(closure_0);
      });
    }
  });
  if (typeof hideInternalValueProp === "function") {
    const _Object = Object;
    Object.defineProperty(obj, "_value", { configurable: false, enumerable: false });
    if (typeof addCompilerSafeGetAndSet === "function") {
      const _Object2 = Object;
      const obj2 = { get: obj3, set: obj4 };
      obj3 = {
        value() {
              return obj.value;
            },
        configurable: false,
        enumerable: false
      };
      obj4 = {
        value(__isAnimationDefinition) {
              if (typeof __isAnimationDefinition === "function") {
                if (!__isAnimationDefinition.__isAnimationDefinition) {
                  obj.value = __isAnimationDefinition(obj.value);
                }
              }
              obj.value = __isAnimationDefinition;
            },
        configurable: false,
        enumerable: false
      };
      Object.defineProperties(obj, obj2);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
let obj = { valueSetter: valueSetter2.valueSetter, hideInternalValueProp, addCompilerSafeGetAndSet };
makeMutableUI.__closure = obj;
makeMutableUI.__workletHash = 8132940328790;
makeMutableUI.__initData = { code: "function makeMutableUI_Pnpm_mutablesTs3(initial){const{valueSetter,hideInternalValueProp,addCompilerSafeGetAndSet}=this.__closure;const listeners=new Map();let value=initial;const mutable={get value(){return value;},set value(newValue){valueSetter(mutable,newValue);},get _value(){return value;},set _value(newValue){value=newValue;listeners.forEach(function(listener){listener(newValue);});},modify:function(modifier,forceUpdate=true){valueSetter(mutable,modifier!==undefined?modifier(value):value,forceUpdate);},addListener:function(id,listener){listeners.set(id,listener);},removeListener:function(id){listeners.delete(id);},_animation:null,_isReanimatedSharedValue:true};hideInternalValueProp(mutable);addCompilerSafeGetAndSet(mutable);return mutable;}" };
const __initData = { code: "function pnpm_mutablesTs4(){const{makeMutableUI,initial}=this.__closure;return makeMutableUI(initial);}" };
let closure_7 = { code: "function pnpm_mutablesTs5(sv){return sv.value;}" };
let closure_8 = { code: "function pnpm_mutablesTs6(){const{mutable,newValue}=this.__closure;mutable.value=newValue;}" };
let closure_9 = { code: "function pnpm_mutablesTs7(){const{mutable,modifier,forceUpdate}=this.__closure;mutable.modify(modifier,forceUpdate);}" };

export { makeMutableUI };
export const makeMutable = module_1646 ? (function makeMutableWeb(arg0) {
  let obj3;
  let obj4;
  let closure_0 = arg0;
  map = new Map();
  let obj = {
    modify(fn) {
      let value;
      const valueSetter = valueSetter2.valueSetter;
      valueSetter2;
      if (undefined !== fn) {
        value = fn(obj.value);
      } else {
        value = obj.value;
      }
      valueSetter(obj, value, flag);
    },
    addListener(arg0, arg1) {
      const result = map.set(arg0, arg1);
    },
    removeListener(arg0) {
      map.delete(arg0);
    },
    _isReanimatedSharedValue: true
  };
  Object.defineProperty(obj, "value", {
    get: () => closure_0,
    set: (value) => {
      obj = valueSetter2;
      obj.valueSetter(obj, value);
    }
  });
  Object.defineProperty(obj, "_value", {
    get: () => closure_0,
    set: (arg0) => {
      closure_0 = arg0;
      const item = map.forEach((fn) => {
        fn(closure_0);
      });
    }
  });
  if (typeof hideInternalValueProp === "function") {
    const _Object = Object;
    Object.defineProperty(obj, "_value", { configurable: false, enumerable: false });
    if (typeof addCompilerSafeGetAndSet === "function") {
      const _Object2 = Object;
      const obj2 = { get: obj3, set: obj4 };
      obj3 = {
        value() {
              return obj.value;
            },
        configurable: false,
        enumerable: false
      };
      obj4 = {
        value(__isAnimationDefinition) {
              if (typeof __isAnimationDefinition === "function") {
                if (!__isAnimationDefinition.__isAnimationDefinition) {
                  obj.value = __isAnimationDefinition(obj.value);
                }
              }
              obj.value = __isAnimationDefinition;
            },
        configurable: false,
        enumerable: false
      };
      Object.defineProperties(obj, obj2);
      const tmp5 = obj;
      if (tmp5) {
        obj.toJSON = () => JSON.stringify(closure_0);
      }
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}) : (function makeMutableNative(initial) {
  let fn;
  let obj4;
  let obj6;
  let obj7;
  _require = initial;
  let obj = require("module_1673");
  let obj2 = { __init: fn };
  fn = function n() {
    return makeMutableUI(initial);
  };
  const obj3 = { makeMutableUI, initial };
  fn.__closure = obj3;
  fn.__workletHash = 38746935544;
  fn.__initData = __initData;
  const tmp2 = obj4;
  obj4 = {
    modify(modifier) {
      initial = modifier;
      let flag = arg1;
      if (arg1 === undefined) {
        flag = true;
      }
      const fn = function u() {
        obj4.modify(modifier, flag);
      };
      const obj2 = { mutable: flag, modifier, forceUpdate: flag };
      fn.__closure = obj2;
      fn.__workletHash = 15983399508815;
      fn.__initData = __initData3;
      const obj = initial(obj4[4]);
      obj.runOnUI(fn)();
    },
    addListener() {
      const reanimatedError = new initial(obj4[5]).ReanimatedError("Adding listeners is only possible on the UI runtime.");
      throw reanimatedError;
    },
    removeListener() {
      const reanimatedError = new initial(obj4[5]).ReanimatedError("Removing listeners is only possible on the UI runtime.");
      throw reanimatedError;
    },
    _isReanimatedSharedValue: true
  };
  const shareableCloneRecursive = obj.makeShareableCloneRecursive(obj2);
  Object.defineProperty(obj4, "value", {
    get: () => {
      const fn = function t(value) {
        return value.value;
      };
      fn.__closure = {};
      fn.__workletHash = 5375306386445;
      fn.__initData = __initData;
      const obj = require("setupMicrotasks");
      return obj.executeOnUIRuntimeSync(fn)(obj4);
    },
    set: (newValue) => {
      let value;
      initial = newValue;
      const fn = function n() {
        obj4.value = value;
      };
      const obj2 = { mutable: obj4, newValue };
      fn.__closure = obj2;
      fn.__workletHash = 11269088169577;
      fn.__initData = __initData2;
      const obj = initial(obj4[4]);
      obj.runOnUI(fn)();
    }
  });
  Object.defineProperty(obj4, "_value", {
    get: () => {
      const reanimatedError = new initial(obj4[5]).ReanimatedError("Reading from `_value` directly is only possible on the UI runtime. Perhaps you passed an Animated Style to a non-animated component?");
      throw reanimatedError;
    },
    set: (arg0) => {
      const reanimatedError = new initial(obj4[5]).ReanimatedError("Setting `_value` directly is only possible on the UI runtime. Perhaps you want to assign to `value` instead?");
      throw reanimatedError;
    }
  });
  const tmp = _require;
  if (typeof hideInternalValueProp === "function") {
    const _Object = Object;
    Object.defineProperty(obj4, "_value", { configurable: false, enumerable: false });
    if (typeof addCompilerSafeGetAndSet === "function") {
      const _Object2 = Object;
      const obj5 = { get: obj6, set: obj7 };
      obj6 = {
        value() {
              return obj.value;
            },
        configurable: false,
        enumerable: false
      };
      obj7 = {
        value(__isAnimationDefinition) {
              if (typeof __isAnimationDefinition === "function") {
                if (!__isAnimationDefinition.__isAnimationDefinition) {
                  obj.value = __isAnimationDefinition(obj.value);
                }
              }
              obj.value = __isAnimationDefinition;
            },
        configurable: false,
        enumerable: false
      };
      Object.defineProperties(obj4, obj5);
      const shareableMappingCache = tmp(tmp2[6]).shareableMappingCache;
      const result = shareableMappingCache.set(obj4, shareableCloneRecursive);
      return obj4;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});