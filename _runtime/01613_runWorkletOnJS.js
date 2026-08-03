// === Module 1613: runWorkletOnJS ===

// Module 1613 (runWorkletOnJS)
import isJest from "isJest";
import isJest from "isJest";

function runWorkletOnJS(arg0) {
  arg0(...HermesBuiltin.copyRestArgs());
}
isJest = isJest.isJest();
isJest = isJest.shouldBeUseWeb();
let closure_5 = [];
function setupMicrotasks() {
  let closure_0 = [];
  let c1 = false;
  closure_0.queueMicrotask = (arg0) => {

  };
  closure_0.__callMicrotasks = () => {
    let length;
    let sum;
    if (!c1) {
      try {
        c1 = true;
        let num2 = 0;
        if (0 < arr.length) {
          do {
            let tmp2 = arr;
            let tmp3 = num2;
            let tmp4 = arr[num2]();
            sum = num2 + 1;
            num2 = sum;
            let tmp6 = arr;
            length = arr.length;
          } while (sum < length);
        }
        arr = [];
        const result = arr._maybeFlushUIUpdatesQueue();
        c1 = false;
      } catch (tmp9) {
        c1 = false;
        throw tmp9;
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
if (isJest) {
  callMicrotasksOnUIThread = () => {

  };
}
let closure_7 = { code: "function pnpm_threadsTs4(){const{worklet,args}=this.__closure;worklet(...args);}" };
let closure_8 = { code: "function pnpm_threadsTs5(){const{queue,callMicrotasks}=this.__closure;queue.forEach(function([worklet,args]){worklet(...args);});callMicrotasks();}" };
function runOnUI(fn) {
  let closure_0 = fn;
  return () => {
    const items = [...arguments];
    if (outer1_3) {
      let ReanimatedModule = outer1_1(outer1_2[1]).ReanimatedModule;
      let obj = outer1_1(outer1_2[2]);
      let fn = function s() {
        items(...items);
      };
      obj = { worklet: null, args: null };
      obj[0] = items;
      obj[1] = items;
      fn.__closure = obj;
      fn.__workletHash = 10268384484340;
      fn.__initData = outer1_7;
      ReanimatedModule.scheduleOnUI(obj.makeShareableCloneRecursive(fn));
    } else {
      const items1 = [items, items];
      outer1_5.push(items1);
      if (1 === outer1_5.length) {
        const _queueMicrotask = queueMicrotask;
        queueMicrotask(() => {
          let closure_0 = closure_5;
          closure_5 = [];
          const ReanimatedModule = callback(1614).ReanimatedModule;
          let obj = callback(1636);
          const fn = function n() {
            const item = closure_0.forEach((arg0) => {
              let tmp;
              let tmp2;
              [tmp, tmp2] = arg0;
              tmp(...tmp2);
            });
            outer1_6();
          };
          obj = { queue: closure_5, callMicrotasks: closure_6 };
          fn.__closure = obj;
          fn.__workletHash = 2773761092576;
          fn.__initData = closure_8;
          ReanimatedModule.scheduleOnUI(obj.makeShareableCloneRecursive(fn));
        });
      }
    }
  };
}
let obj = { __DEV__: false, SHOULD_BE_USE_WEB: isJest, isWorkletFunction: require("isWorkletFunction").isWorkletFunction, IS_JEST: isJest, ReanimatedModule: require("ReanimatedModule").ReanimatedModule, makeShareableCloneRecursive: require("freezeObjectInDev").makeShareableCloneRecursive, callMicrotasks: callMicrotasksOnUIThread };
runOnUI.__closure = obj;
runOnUI.__workletHash = 8710271011487;
runOnUI.__initData = { code: "function runOnUI_Pnpm_threadsTs3(worklet){const{__DEV__,SHOULD_BE_USE_WEB,isWorkletFunction,IS_JEST,ReanimatedModule,makeShareableCloneRecursive,callMicrotasks}=this.__closure;if(__DEV__&&!SHOULD_BE_USE_WEB&&_WORKLET){throw new ReanimatedError('`runOnUI` cannot be called on the UI runtime. Please call the function synchronously or use `queueMicrotask` or `requestAnimationFrame` instead.');}if(__DEV__&&!SHOULD_BE_USE_WEB&&!isWorkletFunction(worklet)){throw new ReanimatedError('`runOnUI` can only be used with worklets.');}return function(...args){if(IS_JEST){ReanimatedModule.scheduleOnUI(makeShareableCloneRecursive(function(){'worklet';worklet(...args);}));return;}if(__DEV__){makeShareableCloneRecursive(worklet);makeShareableCloneRecursive(args);}_runOnUIQueue.push([worklet,args]);if(_runOnUIQueue.length===1){queueMicrotask(function(){const queue=_runOnUIQueue;_runOnUIQueue=[];ReanimatedModule.scheduleOnUI(makeShareableCloneRecursive(function(){'worklet';queue.forEach(function([worklet,args]){worklet(...args);});callMicrotasks();}));});}};}" };
let closure_9 = { code: "function pnpm_threadsTs6(){const{worklet,args,makeShareableCloneOnUIRecursive}=this.__closure;const result=worklet(...args);return makeShareableCloneOnUIRecursive(result);}" };
let closure_10 = { code: "function pnpm_threadsTs8(){const{worklet,args}=this.__closure;worklet(...args);}" };
function runOnUIImmediately(fn) {
  let closure_0 = fn;
  return () => {
    const items = [...arguments];
    const ReanimatedModule = outer1_1(outer1_2[1]).ReanimatedModule;
    let obj = outer1_1(outer1_2[2]);
    const fn = function u() {
      items(...items);
    };
    obj = { worklet: items, args: items };
    fn.__closure = obj;
    fn.__workletHash = 6969436050040;
    fn.__initData = outer1_10;
    ReanimatedModule.scheduleOnUI(obj.makeShareableCloneRecursive(fn));
  };
}
obj = { __DEV__: false, SHOULD_BE_USE_WEB: isJest, isWorkletFunction: require("isWorkletFunction").isWorkletFunction, ReanimatedModule: require("ReanimatedModule").ReanimatedModule, makeShareableCloneRecursive: require("freezeObjectInDev").makeShareableCloneRecursive };
runOnUIImmediately.__closure = obj;
runOnUIImmediately.__workletHash = 3385146413149;
runOnUIImmediately.__initData = { code: "function runOnUIImmediately_Pnpm_threadsTs7(worklet){const{__DEV__,SHOULD_BE_USE_WEB,isWorkletFunction,ReanimatedModule,makeShareableCloneRecursive}=this.__closure;if(__DEV__&&!SHOULD_BE_USE_WEB&&_WORKLET){throw new ReanimatedError('`runOnUIImmediately` cannot be called on the UI runtime. Please call the function synchronously or use `queueMicrotask` or `requestAnimationFrame` instead.');}if(__DEV__&&!SHOULD_BE_USE_WEB&&!isWorkletFunction(worklet)){throw new ReanimatedError('`runOnUIImmediately` can only be used with worklets.');}return function(...args){ReanimatedModule.scheduleOnUI(makeShareableCloneRecursive(function(){'worklet';worklet(...args);}));};}" };
function runOnJS(__remoteFunction) {
  if (!isJest) {
    if (globalThis._WORKLET) {
      if (obj.isWorkletFunction(__remoteFunction)) {
        return () => {
          let items = [...arguments];
          let __remoteFunction = outer1_11;
          let _scheduleRemoteFunctionOnJS;
          if (!outer1_4) {
            if (globalThis._WORKLET) {
              if (obj.isWorkletFunction(tmp)) {
                let fn = () => {
                  let items = [...arguments];
                  let __remoteFunction = outer1_11;
                  let _scheduleRemoteFunctionOnJS;
                  if (!outer1_4) {
                    if (globalThis._WORKLET) {
                      if (obj.isWorkletFunction(tmp)) {
                        let fn = () => {
                          let items = [...arguments];
                          let __remoteFunction = outer1_11;
                          let _scheduleRemoteFunctionOnJS;
                          if (!outer1_4) {
                            if (globalThis._WORKLET) {
                              if (obj.isWorkletFunction(tmp)) {
                                let fn = () => {
                                  let items = [...arguments];
                                  let __remoteFunction = outer1_11;
                                  let _scheduleRemoteFunctionOnJS;
                                  if (!outer1_4) {
                                    if (globalThis._WORKLET) {
                                      if (obj.isWorkletFunction(tmp)) {
                                        let fn = () => { ... };
                                      } else {
                                        let tmp5 = tmp;
                                        if (tmp.__remoteFunction) {
                                          __remoteFunction = tmp.__remoteFunction;
                                          tmp5 = __remoteFunction;
                                        }
                                        if (typeof tmp5 === "error") {
                                          _scheduleRemoteFunctionOnJS = outer1_0._scheduleHostFunctionOnJS;
                                        } else {
                                          _scheduleRemoteFunctionOnJS = outer1_0._scheduleRemoteFunctionOnJS;
                                        }
                                        fn = () => { ... };
                                      }
                                      obj = outer1_1(outer1_2[3]);
                                    }
                                    let items1 = [__remoteFunction];
                                    HermesBuiltin.arraySpread(items, 1);
                                    return HermesBuiltin.apply(items1, undefined);
                                  }
                                  fn = () => { ... };
                                };
                              } else {
                                let tmp5 = tmp;
                                if (tmp.__remoteFunction) {
                                  __remoteFunction = tmp.__remoteFunction;
                                  tmp5 = __remoteFunction;
                                }
                                if (typeof tmp5 === "error") {
                                  _scheduleRemoteFunctionOnJS = outer1_0._scheduleHostFunctionOnJS;
                                } else {
                                  _scheduleRemoteFunctionOnJS = outer1_0._scheduleRemoteFunctionOnJS;
                                }
                                fn = () => {
                                  const items = [...arguments];
                                  let shareableCloneOnUIRecursive;
                                  if (items.length > 0) {
                                    shareableCloneOnUIRecursive = _scheduleRemoteFunctionOnJS(outer1_2[2]).makeShareableCloneOnUIRecursive(items);
                                    const obj = _scheduleRemoteFunctionOnJS(outer1_2[2]);
                                  }
                                  _scheduleRemoteFunctionOnJS(__remoteFunction, shareableCloneOnUIRecursive);
                                };
                              }
                              obj = outer1_1(outer1_2[3]);
                            }
                            let items1 = [__remoteFunction];
                            HermesBuiltin.arraySpread(items, 1);
                            return HermesBuiltin.apply(items1, undefined);
                          }
                          fn = () => {
                            const items = [...arguments];
                            return queueMicrotask(items.length ? (() => { ... }) : items);
                          };
                        };
                      } else {
                        let tmp5 = tmp;
                        if (tmp.__remoteFunction) {
                          __remoteFunction = tmp.__remoteFunction;
                          tmp5 = __remoteFunction;
                        }
                        if (typeof tmp5 === "error") {
                          _scheduleRemoteFunctionOnJS = outer1_0._scheduleHostFunctionOnJS;
                        } else {
                          _scheduleRemoteFunctionOnJS = outer1_0._scheduleRemoteFunctionOnJS;
                        }
                        fn = () => {
                          const items = [...arguments];
                          let shareableCloneOnUIRecursive;
                          if (items.length > 0) {
                            shareableCloneOnUIRecursive = _scheduleRemoteFunctionOnJS(outer1_2[2]).makeShareableCloneOnUIRecursive(items);
                            const obj = _scheduleRemoteFunctionOnJS(outer1_2[2]);
                          }
                          _scheduleRemoteFunctionOnJS(__remoteFunction, shareableCloneOnUIRecursive);
                        };
                      }
                      obj = outer1_1(outer1_2[3]);
                    }
                    let items1 = [__remoteFunction];
                    HermesBuiltin.arraySpread(items, 1);
                    return HermesBuiltin.apply(items1, undefined);
                  }
                  fn = () => {
                    const items = [...arguments];
                    return queueMicrotask(items.length ? (() => items(...items)) : items);
                  };
                };
              } else {
                let tmp5 = tmp;
                if (tmp.__remoteFunction) {
                  __remoteFunction = tmp.__remoteFunction;
                  tmp5 = __remoteFunction;
                }
                if (typeof tmp5 === "error") {
                  _scheduleRemoteFunctionOnJS = outer1_0._scheduleHostFunctionOnJS;
                } else {
                  _scheduleRemoteFunctionOnJS = outer1_0._scheduleRemoteFunctionOnJS;
                }
                fn = () => {
                  const items = [...arguments];
                  let shareableCloneOnUIRecursive;
                  if (items.length > 0) {
                    shareableCloneOnUIRecursive = _scheduleRemoteFunctionOnJS(outer1_2[2]).makeShareableCloneOnUIRecursive(items);
                    const obj = _scheduleRemoteFunctionOnJS(outer1_2[2]);
                  }
                  _scheduleRemoteFunctionOnJS(__remoteFunction, shareableCloneOnUIRecursive);
                };
              }
              obj = outer1_1(outer1_2[3]);
            }
            let items1 = [__remoteFunction];
            HermesBuiltin.arraySpread(items, 1);
            return HermesBuiltin.apply(items1, undefined);
          }
          fn = () => {
            const items = [...arguments];
            return queueMicrotask(items.length ? (() => items(...items)) : items);
          };
        };
      } else {
        let tmp4 = __remoteFunction;
        if (__remoteFunction.__remoteFunction) {
          __remoteFunction = __remoteFunction.__remoteFunction;
          tmp4 = __remoteFunction;
        }
        if (typeof tmp4 === "error") {
          let _scheduleRemoteFunctionOnJS = __remoteFunction._scheduleHostFunctionOnJS;
        } else {
          _scheduleRemoteFunctionOnJS = __remoteFunction._scheduleRemoteFunctionOnJS;
        }
        return () => {
          const items = [...arguments];
          let shareableCloneOnUIRecursive;
          if (items.length > 0) {
            shareableCloneOnUIRecursive = _scheduleRemoteFunctionOnJS(outer1_2[2]).makeShareableCloneOnUIRecursive(items);
            const obj = _scheduleRemoteFunctionOnJS(outer1_2[2]);
          }
          _scheduleRemoteFunctionOnJS(__remoteFunction, shareableCloneOnUIRecursive);
        };
      }
      obj = _scheduleRemoteFunctionOnJS(1631);
    }
  }
  return () => {
    const items = [...arguments];
    return queueMicrotask(items.length ? (() => items(...items)) : items);
  };
}
runOnJS.__closure = { SHOULD_BE_USE_WEB: isJest, isWorkletFunction: require("isWorkletFunction").isWorkletFunction, runWorkletOnJS, makeShareableCloneOnUIRecursive: require("freezeObjectInDev").makeShareableCloneOnUIRecursive };
runOnJS.__workletHash = 4576792393858;
runOnJS.__initData = { code: "function runOnJS_Pnpm_threadsTs9(fun){const runOnJS_Pnpm_threadsTs9=this._recur;const{SHOULD_BE_USE_WEB,isWorkletFunction,runWorkletOnJS,makeShareableCloneOnUIRecursive}=this.__closure;if(SHOULD_BE_USE_WEB||!_WORKLET){return function(...args){return queueMicrotask(args.length?function(){return fun(...args);}:fun);};}if(isWorkletFunction(fun)){return function(...args){return runOnJS_Pnpm_threadsTs9(runWorkletOnJS)(fun,...args);};}if(fun.__remoteFunction){fun=fun.__remoteFunction;}const scheduleOnJS=typeof fun==='function'?global._scheduleHostFunctionOnJS:global._scheduleRemoteFunctionOnJS;return function(...args){scheduleOnJS(fun,args.length>0?makeShareableCloneOnUIRecursive(args):undefined);};}" };

export { setupMicrotasks };
export const callMicrotasks = callMicrotasksOnUIThread;
export { runOnUI };
export function executeOnUIRuntimeSync(arg0) {
  let closure_0 = arg0;
  return () => {
    const items = [...arguments];
    const ReanimatedModule = outer1_1(outer1_2[1]).ReanimatedModule;
    let obj = outer1_1(outer1_2[2]);
    const fn = function u() {
      const tmp = items(...items);
      return outer2_1(outer2_2[2]).makeShareableCloneOnUIRecursive(tmp);
    };
    obj = { worklet: items, args: items, makeShareableCloneOnUIRecursive: outer1_1(outer1_2[2]).makeShareableCloneOnUIRecursive };
    fn.__closure = obj;
    fn.__workletHash = 6038069575410;
    fn.__initData = outer1_9;
    return ReanimatedModule.executeOnUIRuntimeSync(obj.makeShareableCloneRecursive(fn));
  };
}
export { runOnUIImmediately };
export { runOnJS };