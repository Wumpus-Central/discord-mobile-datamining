// _runtime/metro/01675__.js
import valueSetter from "../01676_valueSetter.js";
import module_1641_mod from "01641__.js";

const require = globalThis.__r;

let module_1641 = module_1641_mod;
module_1641.shouldBeUseWeb();
let module_1641 = module_1641_mod;
let closure_2 = module_1641.isJest();
function addCompilerSafeGetAndSet(prototype) {
  closure_0 = prototype;
  Object.defineProperties(prototype, {
    get: {
      value() {
        return obj.value;
      },
      configurable: false,
      enumerable: false,
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
      enumerable: false,
    },
  });
}
addCompilerSafeGetAndSet.__closure = {};
addCompilerSafeGetAndSet.__workletHash = 14094096506039;
addCompilerSafeGetAndSet.__initData = {
  code: "function addCompilerSafeGetAndSet_Pnpm_mutablesTs1(mutable){Object.defineProperties(mutable,{get:{value:function(){return mutable.value;},configurable:false,enumerable:false},set:{value:function(newValue){if(typeof newValue==='function'&&!newValue.__isAnimationDefinition){mutable.value=newValue(mutable.value);}else{mutable.value=newValue;}},configurable:false,enumerable:false}});}",
};
function hideInternalValueProp(arg0) {
  Object.defineProperty(arg0, "_value", { configurable: false, enumerable: false });
}
hideInternalValueProp.__closure = {};
hideInternalValueProp.__workletHash = 3380393180484;
hideInternalValueProp.__initData = {
  code: "function hideInternalValueProp_Pnpm_mutablesTs2(mutable){Object.defineProperty(mutable,'_value',{configurable:false,enumerable:false});}",
};
function makeMutableUI(initialValues) {
  new Map();
  closure_1 = initialValues;
  let obj = {};
  Object.defineProperty(obj, "value", {
    get: () => closure_1,
    set: (value) => {
      obj = valueSetter;
      obj.valueSetter(obj, value);
    },
  });
  Object.defineProperty(obj, "_value", {
    get: () => closure_1,
    set: (arg0) => {
      closure_0 = arg0;
      closure_1 = arg0;
      const item = obj.forEach((fn) => {
        fn(closure_0);
      });
    },
  });
  obj.modify = function modify(fn) {
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
      const obj2 = { get: null, set: null };
      const obj3 = {
        value() {
          return obj.value;
        },
        configurable: false,
        enumerable: false,
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
        enumerable: false,
      };
      obj2.set = obj4;
      Object.defineProperties(obj, obj2);
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
makeMutableUI.__initData = {
  code: "function makeMutableUI_Pnpm_mutablesTs3(initial){const{valueSetter,hideInternalValueProp,addCompilerSafeGetAndSet}=this.__closure;const listeners=new Map();let value=initial;const mutable={get value(){return value;},set value(newValue){valueSetter(mutable,newValue);},get _value(){return value;},set _value(newValue){value=newValue;listeners.forEach(function(listener){listener(newValue);});},modify:function(modifier,forceUpdate=true){valueSetter(mutable,modifier!==undefined?modifier(value):value,forceUpdate);},addListener:function(id,listener){listeners.set(id,listener);},removeListener:function(id){listeners.delete(id);},_animation:null,_isReanimatedSharedValue:true};hideInternalValueProp(mutable);addCompilerSafeGetAndSet(mutable);return mutable;}",
};
const __initData = {
  code: "function pnpm_mutablesTs4(){const{makeMutableUI,initial}=this.__closure;return makeMutableUI(initial);}",
};
let closure_7 = { code: "function pnpm_mutablesTs5(sv){return sv.value;}" };
let closure_8 = { code: "function pnpm_mutablesTs6(){const{mutable,newValue}=this.__closure;mutable.value=newValue;}" };
let closure_9 = {
  code: "function pnpm_mutablesTs7(){const{mutable,modifier,forceUpdate}=this.__closure;mutable.modify(modifier,forceUpdate);}",
};

export { makeMutableUI };
export const makeMutable = module_1641
  ? function makeMutableWeb(arg0) {
      closure_0 = arg0;
      new Map();
      let obj = {};
      Object.defineProperty(obj, "value", {
        get: () => closure_0,
        set: (value) => {
          obj = valueSetter;
          obj.valueSetter(obj, value);
        },
      });
      Object.defineProperty(obj, "_value", {
        get: () => closure_0,
        set: (arg0) => {
          closure_0 = arg0;
          const item = map.forEach((fn) => {
            fn(closure_0);
          });
        },
      });
      obj.modify = function modify(fn) {
        if (flag === undefined) {
          flag = true;
        }
        obj = valueSetter;
        if (undefined !== fn) {
          value = fn(iter.value);
        } else {
          value = iter.value;
        }
        obj.valueSetter(obj, value, flag);
      };
      obj.addListener = function addListener(arg0, arg1) {
        const result = map.set(arg0, arg1);
      };
      obj.removeListener = function removeListener(arg0) {
        map.delete(arg0);
      };
      obj._isReanimatedSharedValue = true;
      if (typeof hideInternalValueProp === "function") {
        const _Object = Object;
        Object.defineProperty(obj, "_value", { configurable: false, enumerable: false });
        if (typeof addCompilerSafeGetAndSet === "function") {
          closure_0 = obj;
          const _Object2 = Object;
          const obj2 = { get: null, set: null };
          const obj3 = {
            value() {
              return obj.value;
            },
            configurable: false,
            enumerable: false,
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
            enumerable: false,
          };
          obj2.set = obj4;
          Object.defineProperties(obj, obj2);
          if (obj) {
            obj.toJSON = () => JSON.stringify(closure_0);
          }
          return obj;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  : function makeMutableNative(initial) {
      const obj2 = { __init: null };
      let fn = function n() {
        return makeMutableUI(obj4);
      };
      fn.__closure = { makeMutableUI, initial };
      fn.__workletHash = 38746935544;
      fn.__initData = __initData;
      obj2.__init = fn;
      const obj4 = {};
      const shareableCloneRecursive = obj4(obj4[3]).makeShareableCloneRecursive(obj2);
      Object.defineProperty(obj4, "value", {
        get: () => {
          const fn = function t(value) {
            return value.value;
          };
          fn.__closure = {};
          fn.__workletHash = 5375306386445;
          fn.__initData = __initData;
          return require("runWorkletOnJS").executeOnUIRuntimeSync(fn)(obj4);
        },
        set: (newValue) => {
          value = newValue;
          const fn = function n() {
            obj4.value = value;
          };
          fn.__closure = { mutable: obj4, newValue };
          fn.__workletHash = 11269088169577;
          fn.__initData = __initData2;
          obj4(obj4[4]).runOnUI(fn)();
        },
      });
      Object.defineProperty(obj4, "_value", {
        get: () => {
          const reanimatedError = new obj4(obj4[5]).ReanimatedError(
            "Reading from `_value` directly is only possible on the UI runtime. Perhaps you passed an Animated Style to a non-animated component?",
          );
          throw reanimatedError;
        },
        set: (arg0) => {
          const reanimatedError = new obj4(obj4[5]).ReanimatedError(
            "Setting `_value` directly is only possible on the UI runtime. Perhaps you want to assign to `value` instead?",
          );
          throw reanimatedError;
        },
      });
      obj4.modify = function modify(modifier) {
        closure_0 = modifier;
        let flag = arg1;
        if (arg1 === undefined) {
          flag = true;
        }
        const fn = function u() {
          obj4.modify(closure_0, flag);
        };
        fn.__closure = { mutable: flag, modifier, forceUpdate: flag };
        fn.__workletHash = 15983399508815;
        fn.__initData = __initData3;
        obj4(obj4[4]).runOnUI(fn)();
      };
      obj4.addListener = function addListener() {
        const reanimatedError = new obj4(obj4[5]).ReanimatedError(
          "Adding listeners is only possible on the UI runtime.",
        );
        throw reanimatedError;
      };
      obj4.removeListener = function removeListener() {
        const reanimatedError = new obj4(obj4[5]).ReanimatedError(
          "Removing listeners is only possible on the UI runtime.",
        );
        throw reanimatedError;
      };
      obj4._isReanimatedSharedValue = true;
      if (typeof hideInternalValueProp === "function") {
        const _Object = Object;
        Object.defineProperty(obj4, "_value", { configurable: false, enumerable: false });
        if (typeof addCompilerSafeGetAndSet === "function") {
          const _Object2 = Object;
          const obj5 = { get: null, set: null };
          const obj6 = {
            value() {
              return obj.value;
            },
            configurable: false,
            enumerable: false,
          };
          obj5.get = obj6;
          const obj7 = {
            value(__isAnimationDefinition) {
              if (typeof __isAnimationDefinition === "function") {
                if (!__isAnimationDefinition.__isAnimationDefinition) {
                  obj.value = __isAnimationDefinition(obj.value);
                }
              }
              obj.value = __isAnimationDefinition;
            },
            configurable: false,
            enumerable: false,
          };
          obj5.set = obj7;
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
      const obj = obj4(obj4[3]);
      const obj3 = { makeMutableUI, initial };
      tmp = obj4;
      tmp2 = obj4;
    };
