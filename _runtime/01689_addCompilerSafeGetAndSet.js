// _runtime/01689_addCompilerSafeGetAndSet.js
import valueSetter from "01690_valueSetter.js";
import isJest from "01655_isJest.js";

isJest = isJest.shouldBeUseWeb();
let closure_2 = isJest.isJest();
function addCompilerSafeGetAndSet(prototype) {
  closure_0 = prototype;
  let obj = {
    value() {
      return obj.value;
    },
    configurable: false,
    enumerable: false,
  };
  obj = {
    value(fn) {
      if (typeof fn === "function") {
        if (!fn.__isAnimationDefinition) {
          obj.value = fn(obj.value);
        }
      }
      obj.value = fn;
    },
    configurable: false,
    enumerable: false,
  };
  Object.defineProperties(prototype, { get: obj, set: obj });
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
  let obj = new Map();
  closure_1 = initialValues;
  obj = {};
  Object.defineProperty(obj, "value", {
    get: () => closure_1,
    set: (value) => {
      obj = obj(initialValues[2]);
      obj.valueSetter(obj, value);
    },
  });
  Object.defineProperty(obj, "_value", {
    get: () => closure_1,
    set: (arg0) => {
      closure_1 = arg0;
      const item = arg0.forEach((arg0) => {
        arg0(closure_0);
      });
    },
  });
  obj.modify = function modify(arg0, flag) {
    if (flag === undefined) {
      flag = true;
    }
    obj = obj(initialValues[2]);
    if (undefined !== arg0) {
      let tmp2 = arg0(initialValues);
    } else {
      tmp2 = initialValues;
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
  if (typeof hideInternalValueProp !== "function") {
    HermesBuiltin.throwTypeError();
  }
  Object.defineProperty(obj, "_value", { configurable: false, enumerable: false });
  if (typeof addCompilerSafeGetAndSet !== "function") {
    HermesBuiltin.throwTypeError();
  }
  obj = {
    value() {
      return obj.value;
    },
    configurable: false,
    enumerable: false,
  };
  obj = {
    value(fn) {
      if (typeof fn === "function") {
        if (!fn.__isAnimationDefinition) {
          obj.value = fn(obj.value);
        }
      }
      obj.value = fn;
    },
    configurable: false,
    enumerable: false,
  };
  Object.defineProperties(obj, { get: obj, set: obj });
  return obj;
}
makeMutableUI.__closure = { valueSetter: valueSetter.valueSetter, hideInternalValueProp, addCompilerSafeGetAndSet };
makeMutableUI.__workletHash = 8132940328790;
makeMutableUI.__initData = {
  code: "function makeMutableUI_Pnpm_mutablesTs3(initial){const{valueSetter,hideInternalValueProp,addCompilerSafeGetAndSet}=this.__closure;const listeners=new Map();let value=initial;const mutable={get value(){return value;},set value(newValue){valueSetter(mutable,newValue);},get _value(){return value;},set _value(newValue){value=newValue;listeners.forEach(function(listener){listener(newValue);});},modify:function(modifier,forceUpdate=true){valueSetter(mutable,modifier!==undefined?modifier(value):value,forceUpdate);},addListener:function(id,listener){listeners.set(id,listener);},removeListener:function(id){listeners.delete(id);},_animation:null,_isReanimatedSharedValue:true};hideInternalValueProp(mutable);addCompilerSafeGetAndSet(mutable);return mutable;}",
};
let closure_6 = {
  code: "function pnpm_mutablesTs4(){const{makeMutableUI,initial}=this.__closure;return makeMutableUI(initial);}",
};
let closure_7 = { code: "function pnpm_mutablesTs5(sv){return sv.value;}" };
let closure_8 = { code: "function pnpm_mutablesTs6(){const{mutable,newValue}=this.__closure;mutable.value=newValue;}" };
let closure_9 = {
  code: "function pnpm_mutablesTs7(){const{mutable,modifier,forceUpdate}=this.__closure;mutable.modify(modifier,forceUpdate);}",
};

export { makeMutableUI };
export const makeMutable = isJest
  ? function makeMutableWeb(prototype) {
      let obj = prototype;
      const map = new Map();
      obj = {};
      Object.defineProperty(obj, "value", {
        get: () => obj,
        set: (value) => {
          obj = obj(map[2]);
          obj.valueSetter(obj, value);
        },
      });
      Object.defineProperty(obj, "_value", {
        get: () => obj,
        set: (arg0) => {
          closure_0 = arg0;
          const item = map.forEach((arg0) => {
            arg0(closure_0);
          });
        },
      });
      obj.modify = function modify(arg0, flag) {
        if (flag === undefined) {
          flag = true;
        }
        obj = obj(map[2]);
        if (undefined !== arg0) {
          let value = arg0(iter.value);
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
      if (typeof hideInternalValueProp !== "function") {
        HermesBuiltin.throwTypeError();
      }
      Object.defineProperty(obj, "_value", { configurable: false, enumerable: false });
      if (typeof addCompilerSafeGetAndSet !== "function") {
        HermesBuiltin.throwTypeError();
      }
      obj = {
        value() {
          return obj.value;
        },
        configurable: false,
        enumerable: false,
      };
      obj = {
        value(fn) {
          if (typeof fn === "function") {
            if (!fn.__isAnimationDefinition) {
              obj.value = fn(obj.value);
            }
          }
          obj.value = fn;
        },
        configurable: false,
        enumerable: false,
      };
      Object.defineProperties(obj, { get: obj, set: obj });
      if (obj) {
        obj.toJSON = () => JSON.stringify(obj);
      }
      return obj;
    }
  : function makeMutableNative(initial) {
      let obj = initial;
      obj = obj(obj[3]);
      let fn = function n() {
        return closure_1_5(obj);
      };
      obj = { makeMutableUI, initial };
      fn.__closure = obj;
      fn.__workletHash = 38746935544;
      fn.__initData = closure_6;
      obj = {};
      const shareableCloneRecursive = obj.makeShareableCloneRecursive({ __init: fn });
      Object.defineProperty(obj, "value", {
        get: () => {
          obj = obj(obj[4]);
          const fn = function t(value) {
            return value.value;
          };
          fn.__closure = {};
          fn.__workletHash = 5375306386445;
          fn.__initData = closure_1_7;
          return obj.executeOnUIRuntimeSync(fn)(obj);
        },
        set: (newValue) => {
          closure_0 = newValue;
          obj = obj(obj[4]);
          const fn = function n() {
            closure_1_1.value = closure_0;
          };
          obj = { mutable: obj, newValue };
          fn.__closure = obj;
          fn.__workletHash = 11269088169577;
          fn.__initData = closure_1_8;
          obj.runOnUI(fn)();
        },
      });
      Object.defineProperty(obj, "_value", {
        get: () => {
          const reanimatedError = new obj(obj[5]).ReanimatedError(
            "Reading from `_value` directly is only possible on the UI runtime. Perhaps you passed an Animated Style to a non-animated component?",
          );
          throw reanimatedError;
        },
        set: (arg0) => {
          const reanimatedError = new obj(obj[5]).ReanimatedError(
            "Setting `_value` directly is only possible on the UI runtime. Perhaps you want to assign to `value` instead?",
          );
          throw reanimatedError;
        },
      });
      obj.modify = function modify(modifier) {
        closure_0 = modifier;
        let flag = arg1;
        if (arg1 === undefined) {
          flag = true;
        }
        obj = obj(obj[4]);
        const fn = function u() {
          flag.modify(closure_0, flag);
        };
        obj = { mutable: flag, modifier, forceUpdate: flag };
        fn.__closure = obj;
        fn.__workletHash = 15983399508815;
        fn.__initData = closure_1_9;
        obj.runOnUI(fn)();
      };
      obj.addListener = function addListener() {
        const reanimatedError = new obj(obj[5]).ReanimatedError("Adding listeners is only possible on the UI runtime.");
        throw reanimatedError;
      };
      obj.removeListener = function removeListener() {
        const reanimatedError = new obj(obj[5]).ReanimatedError(
          "Removing listeners is only possible on the UI runtime.",
        );
        throw reanimatedError;
      };
      obj._isReanimatedSharedValue = true;
      if (typeof hideInternalValueProp !== "function") {
        HermesBuiltin.throwTypeError();
      }
      Object.defineProperty(obj, "_value", { configurable: false, enumerable: false });
      if (typeof addCompilerSafeGetAndSet !== "function") {
        HermesBuiltin.throwTypeError();
      }
      Object.defineProperties(obj, {
        get: {
          value() {
            return obj.value;
          },
          configurable: false,
          enumerable: false,
        },
        set: {
          value(fn) {
            if (typeof fn === "function") {
              if (!fn.__isAnimationDefinition) {
                obj.value = fn(obj.value);
              }
            }
            obj.value = fn;
          },
          configurable: false,
          enumerable: false,
        },
      });
      const shareableMappingCache = obj(obj[6]).shareableMappingCache;
      const result = shareableMappingCache.set(obj, shareableCloneRecursive);
      return obj;
    };
