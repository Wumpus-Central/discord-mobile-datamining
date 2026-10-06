// === Module 1650: setupMicrotasks ===

// Module 1650 (setupMicrotasks)
import ReanimatedModule2 from "ReanimatedModule" /* 1651 */;
import LayoutAnimationType from "LayoutAnimationType" /* 1668 */;
import _mod1673 from "module_1673" /* 1673 */;
import module_1646_mod from "module_1646" /* 1646 */;

function runWorkletOnJS(fn) {
  fn(...HermesBuiltin.copyRestArgs());
}
let module_1646 = module_1646_mod;
module_1646.isJest();
module_1646 = module_1646_mod;
module_1646 = module_1646.shouldBeUseWeb();
let closure_5 = [];
function setupMicrotasks() {
  let closure_0 = [];
  let c1 = false;
  closure_0.queueMicrotask = (arg0) => {
    closure_0.push(arg0);
  };
  closure_0.__callMicrotasks = () => {
    let length;
    let sum;
    const tmp = c1;
    if (!tmp) {
      try {
        c1 = true;
        let num2 = 0;
        if (0 < closure_0.length) {
          do {
            let tmp5 = closure_0[num2]();
            sum = num2 + 1;
            num2 = sum;
            length = closure_0.length;
          } while (sum < length);
        }
        closure_0 = [];
        const result = global._maybeFlushUIUpdatesQueue();
        c1 = false;
      } catch (tmp10) {
        c1 = false;
        throw tmp10;
      }
    }
  };
}
setupMicrotasks.__closure = {};
setupMicrotasks.__workletHash = 2487728156345;
setupMicrotasks.__initData = { code: "function setupMicrotasks_Pnpm_threadsTs1(){let microtasksQueue=[];let isExecutingMicrotasksQueue=false;global.queueMicrotask=function(callback){microtasksQueue.push(callback);};global.__callMicrotasks=function(){if(isExecutingMicrotasksQueue){return;}try{isExecutingMicrotasksQueue=true;for(let index=0;index<microtasksQueue.length;index+=1){microtasksQueue[index]();}microtasksQueue=[];global._maybeFlushUIUpdatesQueue();}finally{isExecutingMicrotasksQueue=false;}};}" };
function callMicrotasksOnUIThread() {
  global.__callMicrotasks();
}
callMicrotasksOnUIThread.__closure = {};
callMicrotasksOnUIThread.__workletHash = 741957556389;
callMicrotasksOnUIThread.__initData = { code: "function callMicrotasksOnUIThread_Pnpm_threadsTs2(){global.__callMicrotasks();}" };
if (module_1646) {
  callMicrotasksOnUIThread = () => {

  };
}
let closure_7 = { code: "function pnpm_threadsTs4(){const{worklet,args}=this.__closure;worklet(...args);}" };
let closure_8 = { code: "function pnpm_threadsTs5(){const{queue,callMicrotasks}=this.__closure;queue.forEach(function([worklet,args]){worklet(...args);});callMicrotasks();}" };
function runOnUI(fn) {
  let closure_0 = fn;
  return () => {
    let callMicrotasks;
    const items = [...arguments];
    if (module_1646) {
      let ReanimatedModule = ReanimatedModule2.ReanimatedModule;
      let scheduleOnUI = ReanimatedModule.scheduleOnUI;
      let obj = _mod1673;
      fn = function s() {
        items(...items);
      };
      let obj2 = { worklet: items, args: items };
      fn.__closure = obj2;
      fn.__workletHash = 10268384484340;
      fn.__initData = __initData;
      scheduleOnUI(obj.makeShareableCloneRecursive(fn));
    } else {
      const items1 = [items, items];
      closure_1_5.push(items1);
      if (1 === closure_1_5.length) {
        const _queueMicrotask = queueMicrotask;
        queueMicrotask(() => {
          let closure_0 = queue;
          queue = [];
          const ReanimatedModule = closure_1(closure_2[1]).ReanimatedModule;
          const scheduleOnUI = ReanimatedModule.scheduleOnUI;
          fn = function n() {
            const item = closure_0.forEach((item) => {
              let tmp;
              let tmp2;
              [tmp, tmp2] = item;
              tmp(...tmp2);
            });
            const tmp2 = callMicrotasks();
          };
          const obj2 = { queue, callMicrotasks };
          fn.__closure = obj2;
          fn.__workletHash = 2773761092576;
          fn.__initData = __initData;
          const obj = closure_1(closure_2[2]);
          scheduleOnUI(obj.makeShareableCloneRecursive(fn));
        });
      }
    }
  };
}
let obj = { __DEV__: false, SHOULD_BE_USE_WEB: module_1646, isWorkletFunction: LayoutAnimationType.isWorkletFunction, IS_JEST: module_1646, ReanimatedModule: ReanimatedModule2.ReanimatedModule, makeShareableCloneRecursive: _mod1673.makeShareableCloneRecursive, callMicrotasks: callMicrotasksOnUIThread };
runOnUI.__closure = obj;
runOnUI.__workletHash = 8710271011487;
runOnUI.__initData = { code: "function runOnUI_Pnpm_threadsTs3(worklet){const{__DEV__,SHOULD_BE_USE_WEB,isWorkletFunction,IS_JEST,ReanimatedModule,makeShareableCloneRecursive,callMicrotasks}=this.__closure;if(__DEV__&&!SHOULD_BE_USE_WEB&&_WORKLET){throw new ReanimatedError('`runOnUI` cannot be called on the UI runtime. Please call the function synchronously or use `queueMicrotask` or `requestAnimationFrame` instead.');}if(__DEV__&&!SHOULD_BE_USE_WEB&&!isWorkletFunction(worklet)){throw new ReanimatedError('`runOnUI` can only be used with worklets.');}return function(...args){if(IS_JEST){ReanimatedModule.scheduleOnUI(makeShareableCloneRecursive(function(){'worklet';worklet(...args);}));return;}if(__DEV__){makeShareableCloneRecursive(worklet);makeShareableCloneRecursive(args);}_runOnUIQueue.push([worklet,args]);if(_runOnUIQueue.length===1){queueMicrotask(function(){const queue=_runOnUIQueue;_runOnUIQueue=[];ReanimatedModule.scheduleOnUI(makeShareableCloneRecursive(function(){'worklet';queue.forEach(function([worklet,args]){worklet(...args);});callMicrotasks();}));});}};}" };
let closure_9 = { code: "function pnpm_threadsTs6(){const{worklet,args,makeShareableCloneOnUIRecursive}=this.__closure;const result=worklet(...args);return makeShareableCloneOnUIRecursive(result);}" };
let closure_10 = { code: "function pnpm_threadsTs8(){const{worklet,args}=this.__closure;worklet(...args);}" };
function runOnUIImmediately(fn) {
  let closure_0 = fn;
  return () => {
    const items = [...arguments];
    const ReanimatedModule = ReanimatedModule2.ReanimatedModule;
    const scheduleOnUI = ReanimatedModule.scheduleOnUI;
    fn = function u() {
      items(...items);
    };
    const obj2 = { worklet: items, args: items };
    fn.__closure = obj2;
    fn.__workletHash = 6969436050040;
    fn.__initData = __initData;
    const obj = _mod1673;
    scheduleOnUI(obj.makeShareableCloneRecursive(fn));
  };
}
let obj2 = { __DEV__: false, SHOULD_BE_USE_WEB: module_1646, isWorkletFunction: LayoutAnimationType.isWorkletFunction, ReanimatedModule: ReanimatedModule2.ReanimatedModule, makeShareableCloneRecursive: _mod1673.makeShareableCloneRecursive };
runOnUIImmediately.__closure = obj2;
runOnUIImmediately.__workletHash = 3385146413149;
runOnUIImmediately.__initData = { code: "function runOnUIImmediately_Pnpm_threadsTs7(worklet){const{__DEV__,SHOULD_BE_USE_WEB,isWorkletFunction,ReanimatedModule,makeShareableCloneRecursive}=this.__closure;if(__DEV__&&!SHOULD_BE_USE_WEB&&_WORKLET){throw new ReanimatedError('`runOnUIImmediately` cannot be called on the UI runtime. Please call the function synchronously or use `queueMicrotask` or `requestAnimationFrame` instead.');}if(__DEV__&&!SHOULD_BE_USE_WEB&&!isWorkletFunction(worklet)){throw new ReanimatedError('`runOnUIImmediately` can only be used with worklets.');}return function(...args){ReanimatedModule.scheduleOnUI(makeShareableCloneRecursive(function(){'worklet';worklet(...args);}));};}" };
function runOnJS(__remoteFunction) {
  let _scheduleRemoteFunctionOnJS;
  const f135371 = () => {
    let items = [...arguments];
    __remoteFunction = runWorkletOnJS;
    _scheduleRemoteFunctionOnJS = undefined;
    if (!module_1646) {
      let fn;
      if (globalThis._WORKLET) {
        let obj = LayoutAnimationType;
        if (obj.isWorkletFunction(runWorkletOnJS)) {
          fn = f135371;
        } else {
          let tmp7 = runWorkletOnJS;
          if (runWorkletOnJS.__remoteFunction) {
            __remoteFunction = runWorkletOnJS.__remoteFunction;
            tmp7 = __remoteFunction;
          }
          if (typeof tmp7 === "function") {
            _scheduleRemoteFunctionOnJS = global._scheduleHostFunctionOnJS;
          } else {
            _scheduleRemoteFunctionOnJS = global._scheduleRemoteFunctionOnJS;
          }
          fn = () => {
            const items = [...arguments];
            let shareableCloneOnUIRecursive;
            if (items.length > 0) {
              const obj = closure_2_1(closure_2_2[2]);
              shareableCloneOnUIRecursive = obj.makeShareableCloneOnUIRecursive(items);
            }
            _scheduleRemoteFunctionOnJS(__remoteFunction, shareableCloneOnUIRecursive);
          };
        }
      }
      const items1 = [__remoteFunction];
      HermesBuiltin.arraySpread(items1, items, 1);
      return HermesBuiltin.apply(fn, items1, undefined);
    }
    fn = () => {
      const items = [...arguments];
      return queueMicrotask(items.length ? (() => __remoteFunction(...items)) : items);
    };
  };
  if (!module_1646) {
    if (globalThis._WORKLET) {
      let obj = _scheduleRemoteFunctionOnJS(1668);
      if (obj.isWorkletFunction(__remoteFunction)) {
        return f135371;
      } else {
        let tmp5 = __remoteFunction;
        if (__remoteFunction.__remoteFunction) {
          __remoteFunction = __remoteFunction.__remoteFunction;
          tmp5 = __remoteFunction;
        }
        if (typeof tmp5 === "function") {
          _scheduleRemoteFunctionOnJS = __remoteFunction._scheduleHostFunctionOnJS;
        } else {
          let tmp7 = __remoteFunction;
          _scheduleRemoteFunctionOnJS = __remoteFunction._scheduleRemoteFunctionOnJS;
        }
        return () => {
          const items = [...arguments];
          let shareableCloneOnUIRecursive;
          if (items.length > 0) {
            const obj = closure_2_1(closure_2_2[2]);
            shareableCloneOnUIRecursive = obj.makeShareableCloneOnUIRecursive(items);
          }
          _scheduleRemoteFunctionOnJS(__remoteFunction, shareableCloneOnUIRecursive);
        };
      }
    }
  }
  return () => {
    const items = [...arguments];
    return queueMicrotask(items.length ? (() => __remoteFunction(...items)) : items);
  };
}
runOnJS.__closure = { SHOULD_BE_USE_WEB: module_1646, isWorkletFunction: LayoutAnimationType.isWorkletFunction, runWorkletOnJS, makeShareableCloneOnUIRecursive: _mod1673.makeShareableCloneOnUIRecursive };
runOnJS.__workletHash = 4576792393858;
runOnJS.__initData = { code: "function runOnJS_Pnpm_threadsTs9(fun){const runOnJS_Pnpm_threadsTs9=this._recur;const{SHOULD_BE_USE_WEB,isWorkletFunction,runWorkletOnJS,makeShareableCloneOnUIRecursive}=this.__closure;if(SHOULD_BE_USE_WEB||!_WORKLET){return function(...args){return queueMicrotask(args.length?function(){return fun(...args);}:fun);};}if(isWorkletFunction(fun)){return function(...args){return runOnJS_Pnpm_threadsTs9(runWorkletOnJS)(fun,...args);};}if(fun.__remoteFunction){fun=fun.__remoteFunction;}const scheduleOnJS=typeof fun==='function'?global._scheduleHostFunctionOnJS:global._scheduleRemoteFunctionOnJS;return function(...args){scheduleOnJS(fun,args.length>0?makeShareableCloneOnUIRecursive(args):undefined);};}" };
({ SHOULD_BE_USE_WEB: module_1646, isWorkletFunction: LayoutAnimationType.isWorkletFunction, runWorkletOnJS, makeShareableCloneOnUIRecursive: _mod1673.makeShareableCloneOnUIRecursive });
const callMicrotasks_export = callMicrotasksOnUIThread;

export { setupMicrotasks };
export { callMicrotasks_export as callMicrotasks };
export { runOnUI };
export function executeOnUIRuntimeSync(fn) {
  let closure_0 = fn;
  return () => {
    const items = [...arguments];
    const ReanimatedModule = ReanimatedModule2.ReanimatedModule;
    const executeOnUIRuntimeSync = ReanimatedModule.executeOnUIRuntimeSync;
    let obj = _mod1673;
    fn = function u() {
      const tmp = items(...items);
      const obj = _mod1673;
      return obj.makeShareableCloneOnUIRecursive(tmp);
    };
    fn.__closure = { worklet: items, args: items, makeShareableCloneOnUIRecursive: _mod1673.makeShareableCloneOnUIRecursive };
    fn.__workletHash = 6038069575410;
    fn.__initData = __initData;
    ({ worklet: items, args: items, makeShareableCloneOnUIRecursive: _mod1673.makeShareableCloneOnUIRecursive });
    return executeOnUIRuntimeSync(obj.makeShareableCloneRecursive(fn));
  };
}
export { runOnUIImmediately };
export { runOnJS };