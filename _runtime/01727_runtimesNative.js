// _runtime/01727_runtimesNative.js
import _mod1709 from "metro/01709__.js";
import _mod1710 from "metro/01710__.js";
import NativeWorklets from "01712_NativeWorklets.js";
import registerCustomSerializable from "01719_registerCustomSerializable.js";
import _mod1720 from "metro/01720__.js";
import _mod1721 from "metro/01721__.js";
import setupRunLoop from "01728_setupRunLoop.js";
import bundleModeNative_mod from "01713_bundleModeNative.js";

function scheduleOnRuntime(arg0, arg1) {
  const substr = [...arguments].slice();
  const WorkletsModule = NativeWorklets.WorkletsModule;
  items = [closure_3, arg1, substr];
  c0 = undefined;
  c1 = undefined;
  [tmp2, tmp3, tmp4] = items;
  function pnpm_runtimesNativeTs2() {
    _undefined(...c1);
  }
  const items1 = [tmp3, tmp4];
  pnpm_runtimesNativeTs2.__closure = items1;
  pnpm_runtimesNativeTs2.__workletHash = 3026610563032;
  pnpm_runtimesNativeTs2.__initData = tmp2;
  WorkletsModule.scheduleOnRuntime(
    arg0,
    registerCustomSerializable.createSerializable(pnpm_runtimesNativeTs2),
    undefined,
  );
}
let closure_2 = {
  code: "(function pnpm_runtimesNativeTs1(){let[setupSerializer,setupConsole,runtimeBoundCapturableConsole,__DEV__,setupConsoleForwarding,enableEventLoop,setupRunLoop,animationQueuePollingRate,initializerFn]=this.__closure;var _initializerFn;setupSerializer();if(!globalThis._WORKLETS_BUNDLE_MODE_ENABLED){setupConsole(runtimeBoundCapturableConsole);}else if(__DEV__){setupConsoleForwarding(runtimeBoundCapturableConsole);}if(enableEventLoop){setupRunLoop(animationQueuePollingRate);}(_initializerFn=initializerFn)===null||_initializerFn===void 0||_initializerFn();})",
};
let closure_3 = { code: "(function pnpm_runtimesNativeTs2(){let[worklet,args]=this.__closure;worklet(...args);})" };
let bundleModeNative = bundleModeNative_mod;
if (!bundleModeNative.isBundleModeEnabled()) {
  let items = [
    {
      code: "(function scheduleOnRuntimeWorklet_Pnpm_runtimesNativeTs4(workletRuntime,worklet,...args){let[__DEV__,isWorkletFunction,_worklet_8456421177017_init_data]=this.__closure;if(__DEV__&&!isWorkletFunction(worklet)){throw new Error('[Worklets] The function passed to `scheduleOnRuntime` is not a worklet.');}globalThis.__workletsModuleProxy.scheduleOnRuntime(workletRuntime,globalThis.__serializer(function scheduleOnRuntimeWorklet_Pnpm_runtimesNativeTs4([_worklet_8456421177017_init_data,worklet,args]){const pnpm_runtimesNativeTs3=function(){worklet(...args);};pnpm_runtimesNativeTs3.__closure=[worklet,args];pnpm_runtimesNativeTs3.__workletHash=8456421177017;pnpm_runtimesNativeTs3.__initData=_worklet_8456421177017_init_data;return pnpm_runtimesNativeTs3;}([_worklet_8456421177017_init_data,worklet,args])));})",
    },
    false,
    _mod1721.isWorkletFunction,
    { code: "(function pnpm_runtimesNativeTs3(){let[worklet,args]=this.__closure;worklet(...args);})" },
  ];
  let closure_129_0;
  let closure_129_1;
  let closure_129_2;
  [tmp3, tmp4, tmp5, tmp6] = items;
  function scheduleOnRuntimeWorklet(arg0, arg1) {
    const substr = [...arguments].slice();
    if (require) {
      if (!dependencyMap(arg1)) {
        const _Error = Error;
        const error = new Error("[Worklets] The function passed to `scheduleOnRuntime` is not a worklet.");
        throw error;
      }
    }
    items = [closure_2, arg1, substr];
    c0 = undefined;
    c1 = undefined;
    [tmp8, tmp9, tmp10] = items;
    function pnpm_runtimesNativeTs3() {
      _undefined(...c1);
    }
    const items1 = [tmp9, tmp10];
    pnpm_runtimesNativeTs3.__closure = items1;
    pnpm_runtimesNativeTs3.__workletHash = 8456421177017;
    pnpm_runtimesNativeTs3.__initData = tmp8;
    __workletsModuleProxy.scheduleOnRuntime(arg0, globalThis.__serializer(pnpm_runtimesNativeTs3));
  }
  let items1 = [tmp4, tmp5, tmp6];
  scheduleOnRuntimeWorklet.__closure = items1;
  scheduleOnRuntimeWorklet.__workletHash = 7724622788166;
  scheduleOnRuntimeWorklet.__initData = tmp3;
  const serializableMappingCache = _mod1720.serializableMappingCache;
  const _module1 = registerCustomSerializable;
  let result = serializableMappingCache.set(scheduleOnRuntime, _module1.createSerializable(scheduleOnRuntimeWorklet));
}
function scheduleOnRuntimeWithId(arg0, arg1) {
  const substr = [...arguments].slice();
  const WorkletsModule = NativeWorklets.WorkletsModule;
  items = [closure_4, arg1, substr];
  c0 = undefined;
  c1 = undefined;
  [tmp2, tmp3, tmp4] = items;
  function pnpm_runtimesNativeTs5() {
    _undefined(...c1);
  }
  const items1 = [tmp3, tmp4];
  pnpm_runtimesNativeTs5.__closure = items1;
  pnpm_runtimesNativeTs5.__workletHash = 5123516673535;
  pnpm_runtimesNativeTs5.__initData = tmp2;
  const result = WorkletsModule.scheduleOnRuntimeWithId(
    arg0,
    registerCustomSerializable.createSerializable(pnpm_runtimesNativeTs5),
    undefined,
  );
}
let closure_4 = { code: "(function pnpm_runtimesNativeTs5(){let[worklet,args]=this.__closure;worklet(...args);})" };
let bundleModeNative = bundleModeNative_mod;
if (!bundleModeNative.isBundleModeEnabled()) {
  const items2 = [
    {
      code: "(function scheduleOnRuntimeWithIdWorklet_Pnpm_runtimesNativeTs7(runtimeId,worklet,...args){let[__DEV__,isWorkletFunction,_worklet_8728884140124_init_data]=this.__closure;if(__DEV__&&!isWorkletFunction(worklet)){throw new Error('[Worklets] The function passed to `scheduleOnRuntimeWithId` is not a worklet.');}globalThis.__workletsModuleProxy.scheduleOnRuntimeWithId(runtimeId,globalThis.__serializer(function scheduleOnRuntimeWithIdWorklet_Pnpm_runtimesNativeTs7([_worklet_8728884140124_init_data,worklet,args]){const pnpm_runtimesNativeTs6=function(){worklet(...args);};pnpm_runtimesNativeTs6.__closure=[worklet,args];pnpm_runtimesNativeTs6.__workletHash=8728884140124;pnpm_runtimesNativeTs6.__initData=_worklet_8728884140124_init_data;return pnpm_runtimesNativeTs6;}([_worklet_8728884140124_init_data,worklet,args])));})",
    },
    false,
    _mod1721.isWorkletFunction,
    { code: "(function pnpm_runtimesNativeTs6(){let[worklet,args]=this.__closure;worklet(...args);})" },
  ];
  let closure_130_0;
  let closure_130_1;
  let closure_130_2;
  [tmp9, tmp10, tmp11, tmp12] = items2;
  function scheduleOnRuntimeWithIdWorklet(arg0, arg1) {
    const substr = [...arguments].slice();
    if (require) {
      if (!dependencyMap(arg1)) {
        const _Error = Error;
        const error = new Error("[Worklets] The function passed to `scheduleOnRuntimeWithId` is not a worklet.");
        throw error;
      }
    }
    items = [closure_2, arg1, substr];
    c0 = undefined;
    c1 = undefined;
    [tmp8, tmp9, tmp10] = items;
    function pnpm_runtimesNativeTs6() {
      _undefined(...c1);
    }
    const items1 = [tmp9, tmp10];
    pnpm_runtimesNativeTs6.__closure = items1;
    pnpm_runtimesNativeTs6.__workletHash = 8728884140124;
    pnpm_runtimesNativeTs6.__initData = tmp8;
    const result = __workletsModuleProxy.scheduleOnRuntimeWithId(arg0, globalThis.__serializer(pnpm_runtimesNativeTs6));
  }
  const items3 = [tmp10, tmp11, tmp12];
  scheduleOnRuntimeWithIdWorklet.__closure = items3;
  scheduleOnRuntimeWithIdWorklet.__workletHash = 4266458889295;
  scheduleOnRuntimeWithIdWorklet.__initData = tmp9;
  const serializableMappingCache2 = _mod1720.serializableMappingCache;
  const _module3 = registerCustomSerializable;
  const result1 = serializableMappingCache2.set(
    scheduleOnRuntimeWithId,
    _module3.createSerializable(scheduleOnRuntimeWithIdWorklet),
  );
}
const items4 = [
  {
    code: "(function runOnRuntime_Pnpm_runtimesNativeTs8(workletRuntime,worklet){let[__DEV__,isWorkletFunction,scheduleOnRuntime]=this.__closure;if(__DEV__&&!isWorkletFunction(worklet)){throw new Error('[Worklets] The function passed to `runOnRuntime` is not a worklet.');}return function(...args){return scheduleOnRuntime(workletRuntime,worklet,...args);};})",
  },
  false,
  _mod1721.isWorkletFunction,
  scheduleOnRuntime,
];
let closure_131_0;
let closure_131_1;
let closure_131_2;
[tmp14, tmp15, tmp16, tmp17] = items4;
function runOnRuntime(arg0, arg1) {
  closure_0 = arg0;
  dependencyMap = arg1;
  if (closure_0) {
    if (!dependencyMap(arg1)) {
      const _Error = Error;
      const error = new Error("[Worklets] The function passed to `runOnRuntime` is not a worklet.");
      throw error;
    }
  }
  return () => closure_2(closure_1, ...HermesBuiltin.copyRestArgs());
}
const items5 = [tmp15, tmp16, tmp17];
runOnRuntime.__closure = items5;
runOnRuntime.__workletHash = 2466422353988;
runOnRuntime.__initData = tmp14;
let closure_5 = {
  code: "(function pnpm_runtimesNativeTs9(){let[worklet,args,makeShareableCloneOnUIRecursive]=this.__closure;const result=worklet(...args);return makeShareableCloneOnUIRecursive(result);})",
};
let closure_6 = {
  code: "(function pnpm_runtimesNativeTs10(){let[worklet,args,makeShareableCloneOnUIRecursive]=this.__closure;const result=worklet(...args);return makeShareableCloneOnUIRecursive(result);})",
};
let closure_7 = {
  code: "(function pnpm_runtimesNativeTs11(){let[worklet,args,resolve,reject]=this.__closure;try{const result=worklet(...args);const serializedResult=globalThis.__serializer(result);globalThis.__workletsModuleProxy.handlePromise(resolve,serializedResult);}catch(error){const serializedError=globalThis.__serializer(error);globalThis.__workletsModuleProxy.handlePromise(reject,serializedError);}})",
};
let closure_8 = {
  code: "(function pnpm_runtimesNativeTs12(){let[worklet,args,resolve,reject]=this.__closure;try{const result=worklet(...args);const serializedResult=globalThis.__serializer(result);globalThis.__workletsModuleProxy.handlePromise(resolve,serializedResult);}catch(error){const serializedError=globalThis.__serializer(error);globalThis.__workletsModuleProxy.handlePromise(reject,serializedError);}})",
};

export const UIRuntimeId = _mod1710.RuntimeKind.UI;
export function createWorkletRuntime(name, initializer) {
  let memorySafeCapturableConsole = null;
  if (!globalThis._WORKLETS_BUNDLE_MODE_ENABLED) {
    memorySafeCapturableConsole = _mod1709.getMemorySafeCapturableConsole();
  }
  let tmp4 = initializer;
  let flag = true;
  let flag2 = true;
  let flag3 = true;
  let str = "default";
  let tmp5;
  let tmp6 = name;
  if (typeof name !== "string") {
    let str2;
    if (name != null) {
      str2 = name.name;
    }
    if (str2 == null) {
      str2 = "anonymous";
    }
    initializer = undefined;
    if (name != null) {
      initializer = name.initializer;
    }
    let queue;
    if (name != null) {
      queue = name.queue;
    }
    if (undefined !== queue) {
      let str3 = name.queue;
    } else {
      let useDefaultQueue;
      if (name != null) {
        useDefaultQueue = name.useDefaultQueue;
      }
      str3 = "default";
      if (false === useDefaultQueue) {
        let customQueue = name.customQueue;
        if (customQueue == null) {
          customQueue = null;
        }
        str3 = customQueue;
      }
    }
    let num;
    if (name != null) {
      num = name.animationQueuePollingRate;
    }
    if (num == null) {
      num = 16;
    }
    let flag5;
    const rounded = Math.round(num);
    if (name != null) {
      flag5 = name.enableLocking;
    }
    if (flag5 == null) {
      flag5 = true;
    }
    let tmp12 = flag5;
    if (tmp12) {
      let flag6;
      if (name != null) {
        flag6 = name.enableEventLoop;
      }
      if (flag6 == null) {
        flag6 = true;
      }
      tmp12 = flag6;
    }
    let flag7;
    if (name != null) {
      flag7 = name.enableNetworking;
    }
    if (flag7 == null) {
      flag7 = true;
    }
    if (flag7) {
      flag7 = tmp12;
    }
    flag = flag7;
    flag2 = flag5;
    flag3 = tmp12;
    str = str3;
    tmp5 = rounded;
    tmp4 = initializer;
    tmp6 = str2;
  }
  let tmp13;
  if (typeof str === "object") {
    if (null !== str) {
      tmp13 = str;
    }
  }
  if (tmp4) {
    if (!obj2.isWorkletFunction(tmp4)) {
      const _Error = Error;
      const error = new Error("[Worklets] The initializer passed to `createWorkletRuntime` is not a worklet.");
      throw error;
    }
    obj2 = _mod1721;
  }
  const WorkletsModule = NativeWorklets.WorkletsModule;
  items = [
    closure_2,
    _mod1709.setupSerializer,
    _mod1709.setupConsole,
    memorySafeCapturableConsole,
    false,
    _mod1709.setupConsoleForwarding,
    flag3,
    setupRunLoop.setupRunLoop,
    tmp5,
    tmp4,
  ];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  [tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29] = items;
  function pnpm_runtimesNativeTs1() {
    _undefined();
    if (globalThis._WORKLETS_BUNDLE_MODE_ENABLED) {
      if (c3) {
        _undefined3(c2);
      }
    } else {
      _undefined2(c2);
    }
    if (c5) {
      _undefined4(c7);
    }
    if (_undefined5 != null) {
      _undefined5();
    }
  }
  const items1 = [tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29];
  pnpm_runtimesNativeTs1.__closure = items1;
  pnpm_runtimesNativeTs1.__workletHash = 13388701192158;
  pnpm_runtimesNativeTs1.__initData = tmp20;
  return WorkletsModule.createWorkletRuntime(
    tmp6,
    registerCustomSerializable.createSerializable(pnpm_runtimesNativeTs1),
    "default" === str,
    tmp13,
    flag3,
    flag2,
    flag,
  );
}
export { scheduleOnRuntime };
export { scheduleOnRuntimeWithId };
export { runOnRuntime };
export function runOnRuntimeSync(arg0, arg1) {
  const substr = [...arguments].slice();
  const WorkletsModule = NativeWorklets.WorkletsModule;
  items = [closure_5, arg1, substr, registerCustomSerializable.makeShareableCloneOnUIRecursive];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp2, tmp3, tmp4, tmp5] = items;
  function pnpm_runtimesNativeTs9() {
    return _undefined3(_undefined(...c1));
  }
  const items1 = [tmp3, tmp4, tmp5];
  pnpm_runtimesNativeTs9.__closure = items1;
  pnpm_runtimesNativeTs9.__workletHash = 67263326839;
  pnpm_runtimesNativeTs9.__initData = tmp2;
  return WorkletsModule.runOnRuntimeSync(
    arg0,
    registerCustomSerializable.createSerializable(pnpm_runtimesNativeTs9),
    undefined,
  );
}
export function runOnRuntimeSyncWithId(arg0, arg1) {
  const substr = [...arguments].slice();
  const WorkletsModule = NativeWorklets.WorkletsModule;
  items = [closure_6, arg1, substr, registerCustomSerializable.makeShareableCloneOnUIRecursive];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp2, tmp3, tmp4, tmp5] = items;
  function pnpm_runtimesNativeTs10() {
    return _undefined3(_undefined(...c1));
  }
  const items1 = [tmp3, tmp4, tmp5];
  pnpm_runtimesNativeTs10.__closure = items1;
  pnpm_runtimesNativeTs10.__workletHash = 11936305249071;
  pnpm_runtimesNativeTs10.__initData = tmp2;
  return WorkletsModule.runOnRuntimeSyncWithId(
    arg0,
    registerCustomSerializable.createSerializable(pnpm_runtimesNativeTs10),
    undefined,
  );
}
export function runOnRuntimeAsync(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = [...arguments].slice();
  return new Promise((arg0, arg1) => {
    const WorkletsModule = NativeWorklets.WorkletsModule;
    items = [closure_7, closure_1, closure_2, arg0, arg1];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    [tmp2, tmp3, tmp4, tmp5, tmp6] = items;
    function pnpm_runtimesNativeTs11() {
      try {
        items = [];
        HermesBuiltin.arraySpread(c1, 0);
        const _globalThis = globalThis;
        const _globalThis2 = globalThis;
        __workletsModuleProxy.handlePromise(c2, globalThis.__serializer(HermesBuiltin.apply(items, undefined)));
      } catch (tmp10) {
        const _globalThis3 = globalThis;
        const _globalThis4 = globalThis;
        __workletsModuleProxy2.handlePromise(c3, globalThis.__serializer(tmp10));
      }
    }
    const items1 = [tmp3, tmp4, tmp5, tmp6];
    pnpm_runtimesNativeTs11.__closure = items1;
    pnpm_runtimesNativeTs11.__workletHash = 6793061708881;
    pnpm_runtimesNativeTs11.__initData = tmp2;
    WorkletsModule.scheduleOnRuntime(
      closure_0,
      registerCustomSerializable.createSerializable(pnpm_runtimesNativeTs11),
      undefined,
    );
  });
}
export function runOnRuntimeAsyncWithId(c0, pnpm_shareableGuestUnpackerNativeTs3) {
  closure_0 = c0;
  closure_1 = pnpm_shareableGuestUnpackerNativeTs3;
  closure_2 = [...arguments].slice();
  return new Promise((arg0, arg1) => {
    const WorkletsModule = NativeWorklets.WorkletsModule;
    items = [closure_8, closure_1, closure_2, arg0, arg1];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    [tmp2, tmp3, tmp4, tmp5, tmp6] = items;
    function pnpm_runtimesNativeTs12() {
      try {
        items = [];
        HermesBuiltin.arraySpread(c1, 0);
        const _globalThis = globalThis;
        const _globalThis2 = globalThis;
        __workletsModuleProxy.handlePromise(c2, globalThis.__serializer(HermesBuiltin.apply(items, undefined)));
      } catch (tmp10) {
        const _globalThis3 = globalThis;
        const _globalThis4 = globalThis;
        __workletsModuleProxy2.handlePromise(c3, globalThis.__serializer(tmp10));
      }
    }
    const items1 = [tmp3, tmp4, tmp5, tmp6];
    pnpm_runtimesNativeTs12.__closure = items1;
    pnpm_runtimesNativeTs12.__workletHash = 12177515103762;
    pnpm_runtimesNativeTs12.__initData = tmp2;
    const result = WorkletsModule.scheduleOnRuntimeWithId(
      closure_0,
      registerCustomSerializable.createSerializable(pnpm_runtimesNativeTs12),
      undefined,
    );
  });
}
export function getUIRuntimeHolder() {
  const WorkletsModule = NativeWorklets.WorkletsModule;
  return WorkletsModule.getUIRuntimeHolder();
}
export function getUISchedulerHolder() {
  const WorkletsModule = NativeWorklets.WorkletsModule;
  return WorkletsModule.getUISchedulerHolder();
}
