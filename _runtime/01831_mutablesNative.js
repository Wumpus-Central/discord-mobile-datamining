// _runtime/01831_mutablesNative.js
import _mod1705 from "metro/01705__.js";
import mutableHostDecorator from "01832_mutableHostDecorator.js";

const require = globalThis.__r;

let items = [
  {
    code: "(function mutableGuestDecorator_Pnpm_mutablesNativeTs4(initial,mutable,dirtyFlag){let[checkInvalidReadDuringRender,runOnUISync,_worklet_4312510271641_init_data,checkInvalidWriteDuringRender,scheduleOnUI,_worklet_2568080646901_init_data,_worklet_14356581210899_init_data]=this.__closure;let latest=initial;Object.defineProperties(mutable,{value:{get:function(){if(globalThis.__RUNTIME_KIND!==1){latest=mutable.getSync();}else{checkInvalidReadDuringRender();if(dirtyFlag.getDirty()){const uiValueGetter=function(svArg){return runOnUISync(function pnpm_mutablesNativeTs1Factory([_worklet_4312510271641_init_data]){const pnpm_mutablesNativeTs1=function(sv){sv.setDirtyFlag(false);return sv.value;};pnpm_mutablesNativeTs1.__workletHash=4312510271641;pnpm_mutablesNativeTs1.__initData=_worklet_4312510271641_init_data;return pnpm_mutablesNativeTs1;}([_worklet_4312510271641_init_data]),svArg);};latest=uiValueGetter(mutable);}}return latest;},set:function(newValue){if(globalThis.__RUNTIME_KIND===1){checkInvalidWriteDuringRender();scheduleOnUI(function pnpm_mutablesNativeTs2Factory([_worklet_2568080646901_init_data,mutable,newValue]){const pnpm_mutablesNativeTs2=function(){mutable.value=newValue;};pnpm_mutablesNativeTs2.__closure=[mutable,newValue];pnpm_mutablesNativeTs2.__workletHash=2568080646901;pnpm_mutablesNativeTs2.__initData=_worklet_2568080646901_init_data;return pnpm_mutablesNativeTs2;}([_worklet_2568080646901_init_data,mutable,newValue]));}else{mutable.setAsync(newValue);}},enumerable:true,configurable:true},get:{value:function(){return mutable.value;},configurable:false,enumerable:false},set:{value:function(newValue){if(typeof newValue==='function'&&!newValue.__isAnimationDefinition){mutable.value=newValue(mutable.value);}else{mutable.value=newValue;}},configurable:false,enumerable:false},_value:{get:function(){throw new Error('[Reanimated] Reading from `_value` directly is only possible on the UI runtime. Perhaps you wanted to access `value` instead?');},set:function(_newValue){throw new Error('[Reanimated] Setting `_value` directly is only possible on the UI runtime. Perhaps you wanted to assign to `value` instead?');}},modify:{value:function(modifier,forceUpdate=true){scheduleOnUI(function pnpm_mutablesNativeTs3Factory([_worklet_14356581210899_init_data,mutable,modifier,forceUpdate]){const pnpm_mutablesNativeTs3=function(){mutable.modify(modifier,forceUpdate);};pnpm_mutablesNativeTs3.__closure=[mutable,modifier,forceUpdate];pnpm_mutablesNativeTs3.__workletHash=14356581210899;pnpm_mutablesNativeTs3.__initData=_worklet_14356581210899_init_data;return pnpm_mutablesNativeTs3;}([_worklet_14356581210899_init_data,mutable,modifier,forceUpdate]));},writable:true,enumerable:true,configurable:true},addListener:{value:function(){throw new Error('[Reanimated] Adding listeners is only possible on the UI runtime.');},writable:true,enumerable:true,configurable:true},removeListener:{value:function(){throw new Error('[Reanimated] Removing listeners is only possible on the UI runtime.');},writable:true,enumerable:true,configurable:true},setDirtyFlag:{value:function(){return undefined;},writable:true,enumerable:true,configurable:true},_isReanimatedSharedValue:{value:true,writable:true,enumerable:true,configurable:true}});return mutable;})",
  },
  mutableHostDecorator.checkInvalidReadDuringRender,
  _mod1705.runOnUISync,
  { code: "(function pnpm_mutablesNativeTs1(sv){sv.setDirtyFlag(false);return sv.value;})" },
  mutableHostDecorator.checkInvalidWriteDuringRender,
  _mod1705.scheduleOnUI,
  { code: "(function pnpm_mutablesNativeTs2(){let[mutable,newValue]=this.__closure;mutable.value=newValue;})" },
  {
    code: "(function pnpm_mutablesNativeTs3(){let[mutable,modifier,forceUpdate]=this.__closure;mutable.modify(modifier,forceUpdate);})",
  },
];
let closure_129_0;
let closure_129_1;
let closure_129_2;
let closure_129_3;
let closure_129_4;
let closure_129_5;
let closure_129_6;
[tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9] = items;
function mutableGuestDecorator(arg0, arg1, arg2) {
  closure_0 = arg1;
  const dirty = arg2;
  closure_2 = arg0;
  const obj = {
    value: {
      get() {
        if (1 !== globalThis.__RUNTIME_KIND) {
          let sync = closure_0.getSync();
        } else {
          require();
          if (dirty.getDirty()) {
            items = [mutableGuestDecorator];
            [tmp3] = items;
            function pnpm_mutablesNativeTs1(setDirtyFlag) {
              setDirtyFlag.setDirtyFlag(false);
              return setDirtyFlag.value;
            }
            pnpm_mutablesNativeTs1.__workletHash = 4312510271641;
            pnpm_mutablesNativeTs1.__initData = tmp3;
            sync = dependencyMap(pnpm_mutablesNativeTs1, closure_0);
          }
        }
        return sync;
      },
      set(arg0) {
        if (1 === globalThis.__RUNTIME_KIND) {
          closure_3();
          items = [hasOwnProperty, closure_0, arg0];
          c0 = undefined;
          c1 = undefined;
          [tmp8, tmp9, tmp10] = items;
          function pnpm_mutablesNativeTs2() {
            c0.value = value;
          }
          const items1 = [tmp9, tmp10];
          pnpm_mutablesNativeTs2.__closure = items1;
          pnpm_mutablesNativeTs2.__workletHash = 2568080646901;
          pnpm_mutablesNativeTs2.__initData = tmp8;
          closure_4(pnpm_mutablesNativeTs2);
        } else {
          closure_0.setAsync(arg0);
        }
      },
      enumerable: true,
      configurable: true,
    },
    get: {
      value() {
        return closure_0.value;
      },
      configurable: false,
      enumerable: false,
    },
    set: {
      value(__isAnimationDefinition) {
        if (typeof __isAnimationDefinition === "function") {
          if (!__isAnimationDefinition.__isAnimationDefinition) {
            closure_0.value = __isAnimationDefinition(closure_0.value);
          }
        }
        closure_0.value = __isAnimationDefinition;
      },
      configurable: false,
      enumerable: false,
    },
    _value: {
      get() {
        const error = new Error(
          "[Reanimated] Reading from `_value` directly is only possible on the UI runtime. Perhaps you wanted to access `value` instead?",
        );
        throw error;
      },
      set(arg0) {
        const error = new Error(
          "[Reanimated] Setting `_value` directly is only possible on the UI runtime. Perhaps you wanted to assign to `value` instead?",
        );
        throw error;
      },
    },
    modify: {
      value(arg0) {
        let flag = arg1;
        if (arg1 === undefined) {
          flag = true;
        }
        items = [timestampProducer, closure_0, arg0, flag];
        [tmp, tmp2, tmp3, tmp4] = items;
        function pnpm_mutablesNativeTs3() {
          closure_1_0.modify(dirty, closure_1_2);
        }
        const items1 = [tmp2, tmp3, tmp4];
        pnpm_mutablesNativeTs3.__closure = items1;
        pnpm_mutablesNativeTs3.__workletHash = 14356581210899;
        pnpm_mutablesNativeTs3.__initData = tmp;
        closure_4(pnpm_mutablesNativeTs3);
      },
      writable: true,
      enumerable: true,
      configurable: true,
    },
    addListener: {
      value() {
        const error = new Error("[Reanimated] Adding listeners is only possible on the UI runtime.");
        throw error;
      },
      writable: true,
      enumerable: true,
      configurable: true,
    },
    removeListener: {
      value() {
        const error = new Error("[Reanimated] Removing listeners is only possible on the UI runtime.");
        throw error;
      },
      writable: true,
      enumerable: true,
      configurable: true,
    },
    setDirtyFlag: {
      value() {},
      writable: true,
      enumerable: true,
      configurable: true,
    },
    _isReanimatedSharedValue: { value: true, writable: true, enumerable: true, configurable: true },
  };
  Object.defineProperties(arg1, obj);
  return arg1;
}
let items1 = [tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9];
mutableGuestDecorator.__closure = items1;
mutableGuestDecorator.__workletHash = 14226491221099;
mutableGuestDecorator.__initData = tmp2;
let closure_3 = {
  code: "(function pnpm_mutablesNativeTs5(shareableHost){let[mutableHostDecorator,dirtyFlag]=this.__closure;return mutableHostDecorator(shareableHost,dirtyFlag);})",
};
let closure_4 = {
  code: "(function pnpm_mutablesNativeTs6(shareableGuest){let[mutableGuestDecorator,initial,dirtyFlag]=this.__closure;return mutableGuestDecorator(initial,shareableGuest,dirtyFlag);})",
};

export function makeMutable(initialIndex) {
  const synchronizable = _mod1705.createSynchronizable(false, { fixedType: true });
  items = [closure_3, mutableHostDecorator.mutableHostDecorator, synchronizable];
  [tmp2, tmp3, tmp4] = items;
  const obj3 = { hostDecorator: null, guestDecorator: null };
  function pnpm_mutablesNativeTs5(arg0) {
    return _undefined(arg0, c1);
  }
  const items1 = [tmp3, tmp4];
  pnpm_mutablesNativeTs5.__closure = items1;
  pnpm_mutablesNativeTs5.__workletHash = 14979779596845;
  pnpm_mutablesNativeTs5.__initData = tmp2;
  obj3.hostDecorator = pnpm_mutablesNativeTs5;
  const items2 = [closure_4, mutableGuestDecorator, initialIndex, synchronizable];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp5, tmp6, tmp7, tmp8] = items2;
  function pnpm_mutablesNativeTs6(arg0) {
    return _undefined(c1, arg0, c2);
  }
  const items3 = [tmp6, tmp7, tmp8];
  pnpm_mutablesNativeTs6.__closure = items3;
  pnpm_mutablesNativeTs6.__workletHash = 14931621768142;
  pnpm_mutablesNativeTs6.__initData = tmp5;
  obj3.guestDecorator = pnpm_mutablesNativeTs6;
  return _mod1705.createShareable(_mod1705.UIRuntimeId, initialIndex, obj3);
}
