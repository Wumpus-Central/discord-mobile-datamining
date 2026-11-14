// === Module 1726: shareableGuestUnpackerNative ===

// Module 1726 (shareableGuestUnpackerNative)
import registerCustomSerializable from "registerCustomSerializable" /* 1719 */;
import _mod1720 from "module_1720" /* 1720 */;
import runtimesNative from "runtimesNative" /* 1727 */;

require = arg1;
const dependencyMap = arg6;
let items = [{ code: "(function installShareableGuestUnpacker_Pnpm_shareableGuestUnpackerNativeTs6(){let runOnRuntimeSyncFromId;let runOnRuntimeAsyncFromId;let memoize;let scheduleOnRuntimeFromId;let serializer;if(globalThis.__RUNTIME_KIND===1||globalThis._WORKLETS_BUNDLE_MODE_ENABLED){serializer=require('./serializable').createSerializable;const{serializableMappingCache:serializableMappingCache}=require('./serializableMappingCache');memoize=serializableMappingCache.set.bind(serializableMappingCache);runOnRuntimeSyncFromId=require('../runtimes').runOnRuntimeSyncWithId;runOnRuntimeAsyncFromId=require('../runtimes').runOnRuntimeAsyncWithId;scheduleOnRuntimeFromId=require('../runtimes').scheduleOnRuntimeWithId;}else{serializer=function(value){return globalThis.__serializer(value);};memoize=function(){};const proxy=globalThis.__workletsModuleProxy;runOnRuntimeSyncFromId=function(hostId,worklet,...args){const _worklet_16626739516666_init_data={code:\"(function pnpm_shareableGuestUnpackerNativeTs1(){let[worklet,args]=this.__closure;return globalThis.__serializer(worklet(...args));})\"};const serializedWorklet=serializer(function pnpm_shareableGuestUnpackerNativeTs1Factory([_worklet_16626739516666_init_data,worklet,args]){const pnpm_shareableGuestUnpackerNativeTs1=function(){return globalThis.__serializer(worklet(...args));};pnpm_shareableGuestUnpackerNativeTs1.__closure=[worklet,args];pnpm_shareableGuestUnpackerNativeTs1.__workletHash=16626739516666;pnpm_shareableGuestUnpackerNativeTs1.__initData=_worklet_16626739516666_init_data;return pnpm_shareableGuestUnpackerNativeTs1;}([_worklet_16626739516666_init_data,worklet,args]));return proxy.runOnRuntimeSyncWithId(hostId,serializedWorklet);};scheduleOnRuntimeFromId=function(hostId,worklet,...args){const _worklet_9536390984793_init_data={code:\"(function pnpm_shareableGuestUnpackerNativeTs2(){let[worklet,args]=this.__closure;return globalThis.__serializer(worklet(...args));})\"};proxy.scheduleOnRuntimeWithId(hostId,serializer(function pnpm_shareableGuestUnpackerNativeTs2Factory([_worklet_9536390984793_init_data,worklet,args]){const pnpm_shareableGuestUnpackerNativeTs2=function(){return globalThis.__serializer(worklet(...args));};pnpm_shareableGuestUnpackerNativeTs2.__closure=[worklet,args];pnpm_shareableGuestUnpackerNativeTs2.__workletHash=9536390984793;pnpm_shareableGuestUnpackerNativeTs2.__initData=_worklet_9536390984793_init_data;return pnpm_shareableGuestUnpackerNativeTs2;}([_worklet_9536390984793_init_data,worklet,args])));};runOnRuntimeAsyncFromId=function(){throw new Error('[Worklets] `Shareable.getAsync` can only be called on the RN Runtime.');};}function shareableGuestUnpacker(hostId,shareableRef,guestDecorator){const _worklet_3865167524186_init_data={code:\"(function pnpm_shareableGuestUnpackerNativeTs5(setter){let[shareableGuest]=this.__closure;const currentValue=shareableGuest.value;const newValue=setter(currentValue);shareableGuest.value=newValue;})\"};const _worklet_10449033465416_init_data={code:\"(function pnpm_shareableGuestUnpackerNativeTs4(value){let[shareableGuest]=this.__closure;shareableGuest.value=value;})\"};const _worklet_4795156542616_init_data={code:\"(function pnpm_shareableGuestUnpackerNativeTs3(){let[shareableGuest]=this.__closure;return shareableGuest.value;})\"};let shareableGuest=shareableRef;shareableGuest.isHost=false;shareableGuest.__shareableRef=true;const get=function pnpm_shareableGuestUnpackerNativeTs3Factory([_worklet_4795156542616_init_data,shareableGuest]){const pnpm_shareableGuestUnpackerNativeTs3=function(){return shareableGuest.value;};pnpm_shareableGuestUnpackerNativeTs3.__closure=[shareableGuest];pnpm_shareableGuestUnpackerNativeTs3.__workletHash=4795156542616;pnpm_shareableGuestUnpackerNativeTs3.__initData=_worklet_4795156542616_init_data;return pnpm_shareableGuestUnpackerNativeTs3;}([_worklet_4795156542616_init_data,shareableGuest]);const setWithValue=function pnpm_shareableGuestUnpackerNativeTs4Factory([_worklet_10449033465416_init_data,shareableGuest]){const pnpm_shareableGuestUnpackerNativeTs4=function(value){shareableGuest.value=value;};pnpm_shareableGuestUnpackerNativeTs4.__closure=[shareableGuest];pnpm_shareableGuestUnpackerNativeTs4.__workletHash=10449033465416;pnpm_shareableGuestUnpackerNativeTs4.__initData=_worklet_10449033465416_init_data;return pnpm_shareableGuestUnpackerNativeTs4;}([_worklet_10449033465416_init_data,shareableGuest]);const setWithSetter=function pnpm_shareableGuestUnpackerNativeTs5Factory([_worklet_3865167524186_init_data,shareableGuest]){const pnpm_shareableGuestUnpackerNativeTs5=function(setter){const currentValue=shareableGuest.value;const newValue=setter(currentValue);shareableGuest.value=newValue;};pnpm_shareableGuestUnpackerNativeTs5.__closure=[shareableGuest];pnpm_shareableGuestUnpackerNativeTs5.__workletHash=3865167524186;pnpm_shareableGuestUnpackerNativeTs5.__initData=_worklet_3865167524186_init_data;return pnpm_shareableGuestUnpackerNativeTs5;}([_worklet_3865167524186_init_data,shareableGuest]);shareableGuest.getAsync=function(){return runOnRuntimeAsyncFromId(hostId,get);};shareableGuest.getSync=function(){return runOnRuntimeSyncFromId(hostId,get);};shareableGuest.setAsync=function(value){if(typeof value==='function'){scheduleOnRuntimeFromId(hostId,setWithSetter,value);}else{scheduleOnRuntimeFromId(hostId,setWithValue,value);}};shareableGuest.setSync=function(value){if(typeof value==='function'){runOnRuntimeSyncFromId(hostId,setWithSetter,value);}else{runOnRuntimeSyncFromId(hostId,setWithValue,value);}};if(guestDecorator){shareableGuest=guestDecorator(shareableGuest);}memoize(shareableGuest,shareableRef);return shareableGuest;}globalThis.__shareableGuestUnpacker=shareableGuestUnpacker;})" }];
[tmp2] = items;
function installShareableGuestUnpacker() {
  if (1 !== globalThis.__RUNTIME_KIND) {
    const _globalThis = globalThis;
    if (!globalThis._WORKLETS_BUNDLE_MODE_ENABLED) {
      let createSerializable = function u(arg0) {
        return globalThis.__serializer(arg0);
      };
      closure_2 = function n() {

      };
      const _globalThis2 = globalThis;
      let runOnRuntimeSyncWithId = function t(arg0, arg1) {
        items = [{ code: "(function pnpm_shareableGuestUnpackerNativeTs1(){let[worklet,args]=this.__closure;return globalThis.__serializer(worklet(...args));})" }, arg1, [...arguments].slice()];
        c0 = undefined;
        c1 = undefined;
        [tmp, tmp2, tmp3] = items;
        function pnpm_shareableGuestUnpackerNativeTs1() {
          return globalThis.__serializer(_undefined(...c1));
        }
        const items1 = [tmp2, tmp3];
        pnpm_shareableGuestUnpackerNativeTs1.__closure = items1;
        pnpm_shareableGuestUnpackerNativeTs1.__workletHash = 16626739516666;
        pnpm_shareableGuestUnpackerNativeTs1.__initData = tmp;
        return __workletsModuleProxy.runOnRuntimeSyncWithId(arg0, createSerializable(pnpm_shareableGuestUnpackerNativeTs1));
      };
      let scheduleOnRuntimeWithId = function l(arg0, arg1) {
        items = [{ code: "(function pnpm_shareableGuestUnpackerNativeTs2(){let[worklet,args]=this.__closure;return globalThis.__serializer(worklet(...args));})" }, arg1, [...arguments].slice()];
        c0 = undefined;
        c1 = undefined;
        [tmp2, tmp3, tmp4] = items;
        function pnpm_shareableGuestUnpackerNativeTs2() {
          return globalThis.__serializer(_undefined(...c1));
        }
        const items1 = [tmp3, tmp4];
        pnpm_shareableGuestUnpackerNativeTs2.__closure = items1;
        pnpm_shareableGuestUnpackerNativeTs2.__workletHash = 9536390984793;
        pnpm_shareableGuestUnpackerNativeTs2.__initData = tmp2;
        const result = __workletsModuleProxy.scheduleOnRuntimeWithId(arg0, createSerializable(pnpm_shareableGuestUnpackerNativeTs2));
      };
      let runOnRuntimeAsyncWithId = function s() {
        const error = new Error("[Worklets] `Shareable.getAsync` can only be called on the RN Runtime.");
        throw error;
      };
    }
    const _globalThis3 = globalThis;
    globalThis.__shareableGuestUnpacker = function shareableGuestUnpacker(arg0, value, fn) {
      value.isHost = false;
      value.__shareableRef = true;
      items = [{ code: "(function pnpm_shareableGuestUnpackerNativeTs3(){let[shareableGuest]=this.__closure;return shareableGuest.value;})" }, value];
      [tmp, tmp2] = items;
      function pnpm_shareableGuestUnpackerNativeTs3() {
        return _undefined.value;
      }
      const items1 = [tmp2];
      pnpm_shareableGuestUnpackerNativeTs3.__closure = items1;
      pnpm_shareableGuestUnpackerNativeTs3.__workletHash = 4795156542616;
      pnpm_shareableGuestUnpackerNativeTs3.__initData = tmp;
      const items2 = [{ code: "(function pnpm_shareableGuestUnpackerNativeTs4(value){let[shareableGuest]=this.__closure;shareableGuest.value=value;})" }, value];
      [tmp3, tmp4] = items2;
      function pnpm_shareableGuestUnpackerNativeTs4(value) {
        c0.value = value;
      }
      const items3 = [tmp4];
      pnpm_shareableGuestUnpackerNativeTs4.__closure = items3;
      pnpm_shareableGuestUnpackerNativeTs4.__workletHash = 10449033465416;
      pnpm_shareableGuestUnpackerNativeTs4.__initData = tmp3;
      const items4 = [{ code: "(function pnpm_shareableGuestUnpackerNativeTs5(setter){let[shareableGuest]=this.__closure;const currentValue=shareableGuest.value;const newValue=setter(currentValue);shareableGuest.value=newValue;})" }, value];
      c0 = undefined;
      [tmp5, tmp6] = items4;
      function pnpm_shareableGuestUnpackerNativeTs5(fn) {
        _undefined.value = fn(_undefined.value);
      }
      const items5 = [tmp6];
      pnpm_shareableGuestUnpackerNativeTs5.__closure = items5;
      pnpm_shareableGuestUnpackerNativeTs5.__workletHash = 3865167524186;
      pnpm_shareableGuestUnpackerNativeTs5.__initData = tmp5;
      value.getAsync = () => runOnRuntimeAsyncWithId(c0, pnpm_shareableGuestUnpackerNativeTs3);
      value.getSync = () => runOnRuntimeSyncWithId(c0, pnpm_shareableGuestUnpackerNativeTs3);
      value.setAsync = (fn) => {
        scheduleOnRuntimeWithId(c0, typeof fn === "function" ? pnpm_shareableGuestUnpackerNativeTs5 : pnpm_shareableGuestUnpackerNativeTs4, fn);
      };
      value.setSync = (fn) => {
        runOnRuntimeSyncWithId(c0, typeof fn === "function" ? pnpm_shareableGuestUnpackerNativeTs5 : pnpm_shareableGuestUnpackerNativeTs4, fn);
      };
      let tmp7 = value;
      if (fn) {
        tmp7 = fn(value);
      }
      pnpm_shareableGuestUnpackerNativeTs4(tmp7, value);
      return tmp7;
    };
  }
  createSerializable = registerCustomSerializable.createSerializable;
  const serializableMappingCache = _mod1720.serializableMappingCache;
  closure_2 = serializableMappingCache.set.bind(serializableMappingCache);
  runOnRuntimeSyncWithId = runtimesNative.runOnRuntimeSyncWithId;
  runOnRuntimeAsyncWithId = runtimesNative.runOnRuntimeAsyncWithId;
  scheduleOnRuntimeWithId = runtimesNative.scheduleOnRuntimeWithId;
}
installShareableGuestUnpacker.__workletHash = 7949757383011;
installShareableGuestUnpacker.__initData = tmp2;

export { installShareableGuestUnpacker };