// === Module 1673: ? ===

// Module 1673
import valueSetter from "valueSetter" /* 1674 */;
import module_1639 from "module_1639" /* 1639 */;

module_1639.shouldBeUseWeb();
let closure_2 = module_1639.isJest();
function addCompilerSafeGetAndSet(prototype) {
  closure_0 = prototype;
  Object.defineProperties(prototype, {
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
  });
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
  new Map();
  closure_1 = initialValues;
  let obj = {};
  Object.defineProperty(obj, "value", {
    get: () => closure_1,
    set: (value) => {
      obj = valueSetter;
      obj.valueSetter(obj, value);
    }
  });
  Object.defineProperty(obj, "_value", {
    get: () => closure_1,
    set: (arg0) => {
      closure_0 = arg0;
      closure_1 = arg0;
      const item = obj.forEach((fn) => {
        fn(closure_0);
      });
    }
  });
  obj.modify = function modify(fn, flag) {
    if (flag === undefined) {
      flag = true;
    }
    obj = valueSetter;
    if (undefined !== fn) {
      let tmp2 = fn(closure_1);
    } else {
      tmp2 = closure_1;
    }
    obj.valueSetter(obj, tmp2, flag);
  };
  obj.addListener = function addListener(arg0, arg1) {
    const result = obj.set(arg0, arg1);
  };
  obj.removeListener = function removeListener(arg0) {
    obj.delete(arg0);
  };
  obj._animation = null;
  obj._isReanimatedSharedValue = true;
  if (typeof hideInternalValueProp === "function") {
    const _Object = Object;
    Object.defineProperty(obj, "_value", { configurable: false, enumerable: false });
    if (typeof addCompilerSafeGetAndSet === "function") {
      const _Object2 = Object;
      obj = { get: null, set: null };
      obj = {
        value() {
              return obj.value;
            },
        configurable: false,
        enumerable: false
      };
      obj.get = obj;
      const obj1 = {
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
      obj.set = obj1;
      Object.defineProperties(obj, obj);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  const map = new Map();
}
makeMutableUI.__closure = { valueSetter: valueSetter.valueSetter, hideInternalValueProp, addCompilerSafeGetAndSet };
makeMutableUI.__workletHash = 8132940328790;
makeMutableUI.__initData = { code: "function makeMutableUI_Pnpm_mutablesTs3(initial){const{valueSetter,hideInternalValueProp,addCompilerSafeGetAndSet}=this.__closure;const listeners=new Map();let value=initial;const mutable={get value(){return value;},set value(newValue){valueSetter(mutable,newValue);},get _value(){return value;},set _value(newValue){value=newValue;listeners.forEach(function(listener){listener(newValue);});},modify:function(modifier,forceUpdate=true){valueSetter(mutable,modifier!==undefined?modifier(value):value,forceUpdate);},addListener:function(id,listener){listeners.set(id,listener);},removeListener:function(id){listeners.delete(id);},_animation:null,_isReanimatedSharedValue:true};hideInternalValueProp(mutable);addCompilerSafeGetAndSet(mutable);return mutable;}" };
const __initData = { code: "function pnpm_mutablesTs4(){const{makeMutableUI,initial}=this.__closure;return makeMutableUI(initial);}" };
let closure_7 = { code: "function pnpm_mutablesTs5(sv){return sv.value;}" };
let closure_8 = { code: "function pnpm_mutablesTs6(){const{mutable,newValue}=this.__closure;mutable.value=newValue;}" };
let closure_9 = { code: "function pnpm_mutablesTs7(){const{mutable,modifier,forceUpdate}=this.__closure;mutable.modify(modifier,forceUpdate);}" };

export { makeMutableUI };
export const makeMutable = module_1639 ? (function makeMutableWeb(arg0) {
  closure_0 = arg0;
  const map = new Map();
  let get = {};
  Object.defineProperty(get, "value", {
    get: () => closure_0,
    set: (value) => {
      const obj = valueSetter;
      obj.valueSetter(obj, value);
    }
  });
  Object.defineProperty(get, "_value", {
    get: () => closure_0,
    set: (arg0) => {
      closure_0 = arg0;
      const item = map.forEach((fn) => {
        fn(closure_0);
      });
    }
  });
  get.modify = function modify(fn, flag) {
    if (flag === undefined) {
      flag = true;
    }
    const obj = valueSetter;
    if (undefined !== fn) {
      value = fn(iter.value);
    } else {
      value = iter.value;
    }
    obj.valueSetter(obj, value, flag);
  };
  get.addListener = function addListener(arg0, arg1) {
    const result = map.set(arg0, arg1);
  };
  get.removeListener = function removeListener(arg0) {
    map.delete(arg0);
  };
  get._isReanimatedSharedValue = true;
  if (typeof hideInternalValueProp === "function") {
    const _Object = Object;
    Object.defineProperty(get, "_value", { configurable: false, enumerable: false });
    if (typeof addCompilerSafeGetAndSet === "function") {
      closure_0 = get;
      const _Object2 = Object;
      get = { get: null, set: null };
      get = {
        value() {
              return obj.value;
            },
        configurable: false,
        enumerable: false
      };
      get.get = get;
      const obj1 = {
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
      get.set = obj1;
      Object.defineProperties(get, get);
      if (get) {
        get.toJSON = () => JSON.stringify(closure_0);
      }
      return get;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}) : (function makeMutableNative(initial) {
  let obj1 = initial;
  obj1(obj1[3]);
  let obj = { __init: null };
  let fn = function n() {
    return makeMutableUI(obj1);
  };
  obj = { makeMutableUI, initial };
  fn.__closure = obj;
  fn.__workletHash = 38746935544;
  fn.__initData = __initData;
  obj.__init = fn;
  obj1 = {};
  const shareableCloneRecursive = obj.makeShareableCloneRecursive(obj);
  Object.defineProperty(obj1, "value", {
    get: () => {
      const fn = function t(value) {
        return value.value;
      };
      fn.__closure = {};
      fn.__workletHash = 5375306386445;
      fn.__initData = __initData;
      return require("runWorkletOnJS").executeOnUIRuntimeSync(fn)(obj1);
    },
    set: (newValue) => {
      value = newValue;
      obj1(obj1[4]);
      const fn = function n() {
        obj1.value = value;
      };
      const obj = { mutable: obj1, newValue };
      fn.__closure = obj;
      fn.__workletHash = 11269088169577;
      fn.__initData = __initData2;
      obj.runOnUI(fn)();
    }
  });
  Object.defineProperty(obj1, "_value", {
    get: () => {
      const reanimatedError = new obj1(obj1[5]).ReanimatedError("Reading from `_value` directly is only possible on the UI runtime. Perhaps you passed an Animated Style to a non-animated component?");
      throw reanimatedError;
    },
    set: (arg0) => {
      const reanimatedError = new obj1(obj1[5]).ReanimatedError("Setting `_value` directly is only possible on the UI runtime. Perhaps you want to assign to `value` instead?");
      throw reanimatedError;
    }
  });
  obj1.modify = function modify(modifier) {
    closure_0 = modifier;
    let flag = arg1;
    if (arg1 === undefined) {
      flag = true;
    }
    obj1(obj1[4]);
    const fn = function u() {
      obj1.modify(closure_0, flag);
    };
    const obj = { mutable: flag, modifier, forceUpdate: flag };
    fn.__closure = obj;
    fn.__workletHash = 15983399508815;
    fn.__initData = __initData3;
    obj.runOnUI(fn)();
  };
  obj1.addListener = function addListener() {
    const reanimatedError = new obj1(obj1[5]).ReanimatedError("Adding listeners is only possible on the UI runtime.");
    throw reanimatedError;
  };
  obj1.removeListener = function removeListener() {
    const reanimatedError = new obj1(obj1[5]).ReanimatedError("Removing listeners is only possible on the UI runtime.");
    throw reanimatedError;
  };
  obj1._isReanimatedSharedValue = true;
  if (typeof hideInternalValueProp === "function") {
    const _Object = Object;
    Object.defineProperty(obj1, "_value", { configurable: false, enumerable: false });
    if (typeof addCompilerSafeGetAndSet === "function") {
      const _Object2 = Object;
      const obj2 = { get: null, set: null };
      const obj3 = {
        value() {
              return obj.value;
            },
        configurable: false,
        enumerable: false
      };
      obj2.get = obj3;
      const obj4 = {
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
      obj2.set = obj4;
      Object.defineProperties(obj1, obj2);
      const shareableMappingCache = tmp(tmp2[6]).shareableMappingCache;
      const result = shareableMappingCache.set(obj1, shareableCloneRecursive);
      return obj1;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  tmp = obj1;
  tmp2 = obj1;
});