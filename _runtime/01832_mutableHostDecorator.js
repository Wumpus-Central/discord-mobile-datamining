// _runtime/01832_mutableHostDecorator.js
import valueSetter from "01833_valueSetter.js";

const items = [
  {
    code: "(function mutableHostDecorator_Pnpm_mutablesCommonTs1(mutable,dirtyFlag){let[valueSetter]=this.__closure;const listeners=new Map();let value=mutable.value;let isDirty=false;const setDirtyFlag=function(dirty){dirtyFlag===null||dirtyFlag===void 0||dirtyFlag.setDirty(dirty);isDirty=dirty;};Object.defineProperties(mutable,{value:{get:function(){return value;},set:function(newValue){valueSetter(mutable,newValue);},enumerable:true,configurable:true},get:{value:function(){return mutable.value;},configurable:false,enumerable:false},set:{value:function(newValue){if(typeof newValue==='function'&&!newValue.__isAnimationDefinition){mutable.value=newValue(mutable.value);}else{mutable.value=newValue;}},configurable:false,enumerable:false},_value:{get:function(){return value;},set:function(newValue){if(!isDirty){setDirtyFlag(true);}value=newValue;listeners.forEach(function(listener){listener(newValue);});}},modify:{value:function(modifier,forceUpdate=true){valueSetter(mutable,modifier!==undefined?modifier(value):value,forceUpdate);},writable:true,enumerable:true,configurable:true},addListener:{value:function(id,listener){listeners.set(id,listener);},writable:true,enumerable:true,configurable:true},removeListener:{value:function(id){listeners.delete(id);},writable:true,enumerable:true,configurable:true},setDirtyFlag:{value:setDirtyFlag,writable:true,enumerable:true,configurable:true},_animation:{value:null,writable:true,enumerable:true,configurable:true},_isReanimatedSharedValue:{value:true,writable:true,enumerable:true,configurable:true}});return mutable;})",
  },
  valueSetter.valueSetter,
];
let c0;
[tmp2, tmp3] = items;
function mutableHostDecorator(value, arg1) {
  closure_1 = arg1;
  const map = new Map();
  value2 = value.value;
  c4 = false;
  function setDirtyFlag(arg0) {
    if (closure_1 != null) {
      closure_1.setDirty(arg0);
    }
    c4 = arg0;
  }
  Object.defineProperties(value, {
    value: {
      get() {
        return closure_3;
      },
      set(arg0) {
        value(closure_0, arg0);
      },
      enumerable: true,
      configurable: true,
    },
    get: {
      value() {
        return value.value;
      },
      configurable: false,
      enumerable: false,
    },
    set: {
      value(__isAnimationDefinition) {
        if (typeof __isAnimationDefinition === "function") {
          if (!__isAnimationDefinition.__isAnimationDefinition) {
            value.value = __isAnimationDefinition(value.value);
          }
        }
        value.value = __isAnimationDefinition;
      },
      configurable: false,
      enumerable: false,
    },
    _value: {
      get() {
        return closure_3;
      },
      set(arg0) {
        closure_0 = arg0;
        if (!c4) {
          if (typeof setDirtyFlag === "function") {
            if (closure_1 != null) {
              closure_1.setDirty(true);
            }
            c4 = true;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        closure_3 = arg0;
        const item = map.forEach((fn) => {
          fn(closure_0);
        });
      },
    },
    modify: {
      value(fn) {
        let flag = arg1;
        if (arg1 === undefined) {
          flag = true;
        }
        if (undefined !== fn) {
          let tmp3 = fn(closure_3);
        } else {
          tmp3 = closure_3;
        }
        value(closure_0, tmp3, flag);
      },
      writable: true,
      enumerable: true,
      configurable: true,
    },
    addListener: {
      value(arg0, arg1) {
        const result = map.set(arg0, arg1);
      },
      writable: true,
      enumerable: true,
      configurable: true,
    },
    removeListener: {
      value(arg0) {
        map.delete(arg0);
      },
      writable: true,
      enumerable: true,
      configurable: true,
    },
    setDirtyFlag: { value: setDirtyFlag, writable: true, enumerable: true, configurable: true },
    _animation: { value: null, writable: true, enumerable: true, configurable: true },
    _isReanimatedSharedValue: { value: true, writable: true, enumerable: true, configurable: true },
  });
  return value;
}
const items1 = [tmp3];
mutableHostDecorator.__closure = items1;
mutableHostDecorator.__workletHash = 3552537380434;
mutableHostDecorator.__initData = tmp2;

export function checkInvalidReadDuringRender() {}
export function checkInvalidWriteDuringRender() {}
export { mutableHostDecorator };
