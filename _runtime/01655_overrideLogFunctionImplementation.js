// === Module 1655: overrideLogFunctionImplementation ===

// Module 1655 (overrideLogFunctionImplementation)
import runWorkletOnJS from "runWorkletOnJS" /* 1660 */;
import t from "t" /* 1664 */;
import isJest from "isJest" /* 1656 */;
import addLogBoxLog from "addLogBoxLog" /* 1657 */;

let closure_3 = isJest.isJest();
isJest = isJest.shouldBeUseWeb();
isJest = isJest.isChromeDebugger();
let obj = { code: "function pnpm_initializersTs2(data){const{runOnJS,logToLogBoxAndConsole}=this.__closure;runOnJS(logToLogBoxAndConsole)(data);}" };
function overrideLogFunctionImplementation() {
  obj = addLogBoxLog;
  const fn = function e(arg0) {
    callback(1660).runOnJS(callback(1657).logToLogBoxAndConsole)(arg0);
  };
  obj = { runOnJS: runWorkletOnJS.runOnJS, logToLogBoxAndConsole: addLogBoxLog.logToLogBoxAndConsole };
  fn.__closure = obj;
  fn.__workletHash = 10834450741065;
  fn.__initData = obj;
  const result = obj.replaceLoggerImplementation(fn);
}
obj = { replaceLoggerImplementation: addLogBoxLog.replaceLoggerImplementation, runOnJS: runWorkletOnJS.runOnJS, logToLogBoxAndConsole: addLogBoxLog.logToLogBoxAndConsole };
overrideLogFunctionImplementation.__closure = obj;
overrideLogFunctionImplementation.__workletHash = 17079079828449;
overrideLogFunctionImplementation.__initData = { code: "function overrideLogFunctionImplementation_Pnpm_initializersTs1(){const{replaceLoggerImplementation,runOnJS,logToLogBoxAndConsole}=this.__closure;replaceLoggerImplementation(function(data){'worklet';runOnJS(logToLogBoxAndConsole)(data);});}" };
addLogBoxLog.registerLoggerConfig(addLogBoxLog.DEFAULT_LOGGER_CONFIG);
let fn = function e(arg0) {
  callback(1660).runOnJS(callback(1657).logToLogBoxAndConsole)(arg0);
};
fn.__closure = { runOnJS: runWorkletOnJS.runOnJS, logToLogBoxAndConsole: addLogBoxLog.logToLogBoxAndConsole };
fn.__workletHash = 10834450741065;
fn.__initData = obj;
let result = addLogBoxLog.replaceLoggerImplementation(fn);
if (isJest) {
  global._WORKLET = false;
  const _console = console;
  global._log = console.log;
  global._getAnimationTimestamp = () => performance.now();
} else {
  const _module5 = runWorkletOnJS;
  _module5.executeOnUIRuntimeSync(t.registerReanimatedError)();
  const _module6 = runWorkletOnJS;
  const result1 = _module6.executeOnUIRuntimeSync(addLogBoxLog.registerLoggerConfig);
  result1(addLogBoxLog.DEFAULT_LOGGER_CONFIG);
  const _module7 = runWorkletOnJS;
  _module7.executeOnUIRuntimeSync(overrideLogFunctionImplementation)();
}
function callGuardDEV(arg0) {
  const substr = [...arguments].slice();
  try {
    const items = [];
    HermesBuiltin.arraySpread(substr, 0);
    return HermesBuiltin.apply(items, undefined);
  } catch (tmp8) {
    if (global.__ErrorUtils) {
      const __ErrorUtils = global.__ErrorUtils;
      __ErrorUtils.reportFatalError(tmp8);
    } else {
      throw tmp8;
    }
  }
}
callGuardDEV.__closure = {};
callGuardDEV.__workletHash = 4198243943606;
callGuardDEV.__initData = { code: "function callGuardDEV_Pnpm_initializersTs3(fn,...args){try{return fn(...args);}catch(e){if(global.__ErrorUtils){global.__ErrorUtils.reportFatalError(e);}else{throw e;}}}" };
function setupCallGuard() {
  global.__callGuardDEV = callGuardDEV;
  global.__ErrorUtils = {
    reportFatalError(message) {
      obj = arr(1660);
      obj = { message: message.message, stack: message.stack };
      obj.runOnJS(arr(1664).reportFatalErrorOnJS)(obj);
    }
  };
}
const obj1 = { runOnJS: runWorkletOnJS.runOnJS, logToLogBoxAndConsole: addLogBoxLog.logToLogBoxAndConsole };
setupCallGuard.__closure = { callGuardDEV, runOnJS: runWorkletOnJS.runOnJS, reportFatalErrorOnJS: t.reportFatalErrorOnJS };
setupCallGuard.__workletHash = 14948004486848;
setupCallGuard.__initData = { code: "function setupCallGuard_Pnpm_initializersTs4(){const{callGuardDEV,runOnJS,reportFatalErrorOnJS}=this.__closure;global.__callGuardDEV=callGuardDEV;global.__ErrorUtils={reportFatalError:function(error){runOnJS(reportFatalErrorOnJS)({message:error.message,stack:error.stack});}};}" };
const entries = Object.entries(console);
const fromEntriesResult = Object.fromEntries(entries.map((arg0) => {
  [tmp, tmp2] = arg0;
  function methodWrapper() {
    return callback(...HermesBuiltin.copyRestArgs());
  }
  if (tmp2.name) {
    const _Object = Object;
    obj = { value: null, writable: false };
    obj[0] = tmp2.name;
    Object.defineProperty(methodWrapper, "name", obj);
  }
  const items = [tmp, methodWrapper];
  return items;
}));
let c9 = fromEntriesResult;
function setupConsole() {
  if (!isJest) {
    obj = { assert: null, debug: null, log: null, warn: null, error: null, info: null };
    obj[0] = runWorkletOnJS.runOnJS(closure_9.assert);
    const obj2 = runWorkletOnJS;
    obj[1] = runWorkletOnJS.runOnJS(closure_9.debug);
    const obj3 = runWorkletOnJS;
    obj[2] = runWorkletOnJS.runOnJS(closure_9.log);
    const obj4 = runWorkletOnJS;
    obj[3] = runWorkletOnJS.runOnJS(closure_9.warn);
    const obj5 = runWorkletOnJS;
    obj[4] = runWorkletOnJS.runOnJS(closure_9.error);
    const obj6 = runWorkletOnJS;
    obj[5] = runWorkletOnJS.runOnJS(closure_9.info);
    global.console = obj;
    const obj7 = runWorkletOnJS;
  }
}
let obj2 = { callGuardDEV, runOnJS: runWorkletOnJS.runOnJS, reportFatalErrorOnJS: t.reportFatalErrorOnJS };
setupConsole.__closure = { IS_CHROME_DEBUGGER: isJest, runOnJS: runWorkletOnJS.runOnJS, capturableConsole: fromEntriesResult };
setupConsole.__workletHash = 1380126086828;
setupConsole.__initData = { code: "function setupConsole_Pnpm_initializersTs5(){const{IS_CHROME_DEBUGGER,runOnJS,capturableConsole}=this.__closure;if(!IS_CHROME_DEBUGGER){global.console={assert:runOnJS(capturableConsole.assert),debug:runOnJS(capturableConsole.debug),log:runOnJS(capturableConsole.log),warn:runOnJS(capturableConsole.warn),error:runOnJS(capturableConsole.error),info:runOnJS(capturableConsole.info)};}}" };
function setupRequestAnimationFrame() {
  requestAnimationFrame = requestAnimationFrame.requestAnimationFrame;
  closure_1 = [];
  c2 = false;
  requestAnimationFrame.__flushAnimationFrame = (arg0) => {
    closure_0 = arg0;
    const arr = [];
    const item = arr.forEach((arg0) => arg0(closure_0));
    arr(1660).callMicrotasks();
  };
  requestAnimationFrame.requestAnimationFrame = (arg0) => {
    if (!c2) {
      c2 = true;
      requestAnimationFrame((__frameTimestamp) => {
        c2 = false;
        closure_1_0.__frameTimestamp = __frameTimestamp;
        const result = closure_1_0.__flushAnimationFrame(__frameTimestamp);
        closure_1_0.__frameTimestamp = undefined;
      });
    }
    return -1;
  };
}
let obj3 = { IS_CHROME_DEBUGGER: isJest, runOnJS: runWorkletOnJS.runOnJS, capturableConsole: fromEntriesResult };
setupRequestAnimationFrame.__closure = { callMicrotasks: runWorkletOnJS.callMicrotasks };
setupRequestAnimationFrame.__workletHash = 14722266205784;
setupRequestAnimationFrame.__initData = { code: "function setupRequestAnimationFrame_Pnpm_initializersTs6(){const{callMicrotasks}=this.__closure;const nativeRequestAnimationFrame=global.requestAnimationFrame;let animationFrameCallbacks=[];let flushRequested=false;global.__flushAnimationFrame=function(frameTimestamp){const currentCallbacks=animationFrameCallbacks;animationFrameCallbacks=[];currentCallbacks.forEach(function(f){return f(frameTimestamp);});callMicrotasks();};global.requestAnimationFrame=function(callback){animationFrameCallbacks.push(callback);if(!flushRequested){flushRequested=true;nativeRequestAnimationFrame(function(timestamp){flushRequested=false;global.__frameTimestamp=timestamp;global.__flushAnimationFrame(timestamp);global.__frameTimestamp=undefined;});}return-1;};}" };
let closure_12 = { code: "function pnpm_initializersTs7(){const{setupCallGuard,setupConsole,SHOULD_BE_USE_WEB,setupMicrotasks,setupRequestAnimationFrame}=this.__closure;setupCallGuard();setupConsole();if(!SHOULD_BE_USE_WEB){setupMicrotasks();setupRequestAnimationFrame();}global.lastUpdateFrameTimeByTag={};global.lastUpdateByTag={};}" };

export { callGuardDEV };
export { setupCallGuard };
export { setupConsole };
export const initializeUIRuntime = function initializeUIRuntime(ReanimatedModule) {
  obj = isJest;
  if (!obj.isWeb()) {
    if (ReanimatedModule) {
      if (closure_3) {
        const _globalThis = globalThis;
        globalThis.requestAnimationFrame = tmp(1668).mockedRequestAnimationFrame;
      }
      const fn = function o() {
        if (typeof closure_8 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        requestAnimationFrame.__callGuardDEV = closure_7;
        requestAnimationFrame.__ErrorUtils = {
          reportFatalError(message) {
            obj = arr(1660);
            obj = { message: message.message, stack: message.stack };
            obj.runOnJS(arr(1664).reportFatalErrorOnJS)(obj);
          }
        };
        callback2();
        if (!closure_4) {
          callback(table[2]).setupMicrotasks();
          if (typeof closure_11 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          requestAnimationFrame = tmp.requestAnimationFrame;
          callback = [];
          table = false;
          tmp.__flushAnimationFrame = (arg0) => {
            closure_0 = arg0;
            const arr = [];
            const item = arr.forEach((arg0) => arg0(closure_0));
            arr(1660).callMicrotasks();
          };
          tmp.requestAnimationFrame = (arg0) => {
            if (!c2) {
              c2 = true;
              requestAnimationFrame((__frameTimestamp) => {
                c2 = false;
                closure_1_0.__frameTimestamp = __frameTimestamp;
                const result = closure_1_0.__flushAnimationFrame(__frameTimestamp);
                closure_1_0.__frameTimestamp = undefined;
              });
            }
            return -1;
          };
          obj = callback(table[2]);
        }
        requestAnimationFrame.lastUpdateFrameTimeByTag = {};
        requestAnimationFrame.lastUpdateByTag = {};
      };
      obj = { setupCallGuard: null, setupConsole: null, SHOULD_BE_USE_WEB: null, setupMicrotasks: null, setupRequestAnimationFrame: null };
      obj[0] = setupCallGuard;
      obj[1] = setupConsole;
      obj[2] = isJest;
      obj[3] = tmp(1660).setupMicrotasks;
      obj[4] = setupRequestAnimationFrame;
      fn.__closure = obj;
      fn.__workletHash = 2162023783290;
      fn.__initData = closure_12;
      tmp(1660).runOnUIImmediately(fn)();
      const tmpResult = tmp(1660);
    } else {
      const _Error = Error;
      error = new Error("[Reanimated] Reanimated is trying to initialize the UI runtime without a valid ReanimatedModule");
      throw error;
    }
  }
};