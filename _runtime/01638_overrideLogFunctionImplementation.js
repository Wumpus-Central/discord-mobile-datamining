// === Module 1638: overrideLogFunctionImplementation ===

// Module 1638 (overrideLogFunctionImplementation)
import runWorkletOnJS from "runWorkletOnJS" /* 1643 */;
import _mod1647 from "module_1647" /* 1647 */;
import mockedRequestAnimationFrame from "mockedRequestAnimationFrame" /* 1651 */;
import module_1639 from "module_1639" /* 1639 */;
import get_ActivityIndicator from "module_1640" /* 1640 */;

let closure_3 = module_1639.isJest();
module_1639.shouldBeUseWeb();
module_1639 = module_1639.isChromeDebugger();
let __initData = { code: "function pnpm_initializersTs2(data){const{runOnJS,logToLogBoxAndConsole}=this.__closure;runOnJS(logToLogBoxAndConsole)(data);}" };
function overrideLogFunctionImplementation() {
  const fn = function e(arg0) {
    runWorkletOnJS.runOnJS(get_ActivityIndicator.logToLogBoxAndConsole)(arg0);
  };
  __initData = { runOnJS: runWorkletOnJS.runOnJS, logToLogBoxAndConsole: get_ActivityIndicator.logToLogBoxAndConsole };
  fn.__closure = __initData;
  fn.__workletHash = 10834450741065;
  fn.__initData = __initData;
  const result = __initData.replaceLoggerImplementation(fn);
}
__initData = { replaceLoggerImplementation: get_ActivityIndicator.replaceLoggerImplementation, runOnJS: runWorkletOnJS.runOnJS, logToLogBoxAndConsole: get_ActivityIndicator.logToLogBoxAndConsole };
overrideLogFunctionImplementation.__closure = __initData;
overrideLogFunctionImplementation.__workletHash = 17079079828449;
overrideLogFunctionImplementation.__initData = { code: "function overrideLogFunctionImplementation_Pnpm_initializersTs1(){const{replaceLoggerImplementation,runOnJS,logToLogBoxAndConsole}=this.__closure;replaceLoggerImplementation(function(data){'worklet';runOnJS(logToLogBoxAndConsole)(data);});}" };
get_ActivityIndicator.registerLoggerConfig(get_ActivityIndicator.DEFAULT_LOGGER_CONFIG);
let fn = function e(arg0) {
  runWorkletOnJS.runOnJS(get_ActivityIndicator.logToLogBoxAndConsole)(arg0);
};
fn.__closure = { runOnJS: runWorkletOnJS.runOnJS, logToLogBoxAndConsole: get_ActivityIndicator.logToLogBoxAndConsole };
fn.__workletHash = 10834450741065;
fn.__initData = __initData;
let result = get_ActivityIndicator.replaceLoggerImplementation(fn);
if (module_1639) {
  global._WORKLET = false;
  const _console = console;
  global._log = console.log;
  global._getAnimationTimestamp = () => performance.now();
} else {
  const _module5 = runWorkletOnJS;
  _module5.executeOnUIRuntimeSync(_mod1647.registerReanimatedError)();
  const _module6 = runWorkletOnJS;
  const result1 = _module6.executeOnUIRuntimeSync(get_ActivityIndicator.registerLoggerConfig);
  result1(get_ActivityIndicator.DEFAULT_LOGGER_CONFIG);
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
      const error = { message: message.message, stack: message.stack };
      closure_1(_true[2]).runOnJS(closure_1(_true[3]).reportFatalErrorOnJS)(error);
    }
  };
}
const obj1 = { runOnJS: runWorkletOnJS.runOnJS, logToLogBoxAndConsole: get_ActivityIndicator.logToLogBoxAndConsole };
setupCallGuard.__closure = { callGuardDEV, runOnJS: runWorkletOnJS.runOnJS, reportFatalErrorOnJS: _mod1647.reportFatalErrorOnJS };
setupCallGuard.__workletHash = 14948004486848;
setupCallGuard.__initData = { code: "function setupCallGuard_Pnpm_initializersTs4(){const{callGuardDEV,runOnJS,reportFatalErrorOnJS}=this.__closure;global.__callGuardDEV=callGuardDEV;global.__ErrorUtils={reportFatalError:function(error){runOnJS(reportFatalErrorOnJS)({message:error.message,stack:error.stack});}};}" };
const entries = Object.entries(console);
const fromEntriesResult = Object.fromEntries(entries.map((item) => {
  [tmp, tmp2] = item;
  function methodWrapper() {
    return global(...HermesBuiltin.copyRestArgs());
  }
  if (tmp2.name) {
    const _Object = Object;
    obj = { value: tmp2.name, writable: false };
    Object.defineProperty(methodWrapper, "name", obj);
  }
  const items = [tmp, methodWrapper];
  return items;
}));
function setupConsole() {
  if (!module_1639) {
    const console = { assert: runWorkletOnJS.runOnJS(fromEntriesResult.assert), debug: null, log: null, warn: null, error: null, info: null };
    console.debug = runWorkletOnJS.runOnJS(fromEntriesResult.debug);
    console.log = runWorkletOnJS.runOnJS(fromEntriesResult.log);
    console.warn = runWorkletOnJS.runOnJS(fromEntriesResult.warn);
    console.error = runWorkletOnJS.runOnJS(fromEntriesResult.error);
    console.info = runWorkletOnJS.runOnJS(fromEntriesResult.info);
    global.console = console;
  }
}
let obj2 = { callGuardDEV, runOnJS: runWorkletOnJS.runOnJS, reportFatalErrorOnJS: _mod1647.reportFatalErrorOnJS };
setupConsole.__closure = { IS_CHROME_DEBUGGER: module_1639, runOnJS: runWorkletOnJS.runOnJS, capturableConsole: fromEntriesResult };
setupConsole.__workletHash = 1380126086828;
setupConsole.__initData = { code: "function setupConsole_Pnpm_initializersTs5(){const{IS_CHROME_DEBUGGER,runOnJS,capturableConsole}=this.__closure;if(!IS_CHROME_DEBUGGER){global.console={assert:runOnJS(capturableConsole.assert),debug:runOnJS(capturableConsole.debug),log:runOnJS(capturableConsole.log),warn:runOnJS(capturableConsole.warn),error:runOnJS(capturableConsole.error),info:runOnJS(capturableConsole.info)};}}" };
function setupRequestAnimationFrame() {
  requestAnimationFrame = requestAnimationFrame.requestAnimationFrame;
  closure_1 = [];
  c2 = false;
  requestAnimationFrame.__flushAnimationFrame = (arg0) => {
    closure_0 = arg0;
    closure_1 = [];
    const item = closure_1.forEach((fn) => fn(closure_0));
    runWorkletOnJS.callMicrotasks();
  };
  requestAnimationFrame.requestAnimationFrame = (arg0) => {
    closure_1.push(arg0);
    if (!c2) {
      c2 = true;
      requestAnimationFrame((__frameTimestamp) => {
        c2 = false;
        requestAnimationFrame.__frameTimestamp = __frameTimestamp;
        const result = requestAnimationFrame.__flushAnimationFrame(__frameTimestamp);
        requestAnimationFrame.__frameTimestamp = undefined;
      });
    }
    return -1;
  };
}
let obj3 = { IS_CHROME_DEBUGGER: module_1639, runOnJS: runWorkletOnJS.runOnJS, capturableConsole: fromEntriesResult };
setupRequestAnimationFrame.__closure = { callMicrotasks: runWorkletOnJS.callMicrotasks };
setupRequestAnimationFrame.__workletHash = 14722266205784;
setupRequestAnimationFrame.__initData = { code: "function setupRequestAnimationFrame_Pnpm_initializersTs6(){const{callMicrotasks}=this.__closure;const nativeRequestAnimationFrame=global.requestAnimationFrame;let animationFrameCallbacks=[];let flushRequested=false;global.__flushAnimationFrame=function(frameTimestamp){const currentCallbacks=animationFrameCallbacks;animationFrameCallbacks=[];currentCallbacks.forEach(function(f){return f(frameTimestamp);});callMicrotasks();};global.requestAnimationFrame=function(callback){animationFrameCallbacks.push(callback);if(!flushRequested){flushRequested=true;nativeRequestAnimationFrame(function(timestamp){flushRequested=false;global.__frameTimestamp=timestamp;global.__flushAnimationFrame(timestamp);global.__frameTimestamp=undefined;});}return-1;};}" };
__initData = { code: "function pnpm_initializersTs7(){const{setupCallGuard,setupConsole,SHOULD_BE_USE_WEB,setupMicrotasks,setupRequestAnimationFrame}=this.__closure;setupCallGuard();setupConsole();if(!SHOULD_BE_USE_WEB){setupMicrotasks();setupRequestAnimationFrame();}global.lastUpdateFrameTimeByTag={};global.lastUpdateByTag={};}" };

export { callGuardDEV };
export { setupCallGuard };
export { setupConsole };
export const initializeUIRuntime = function initializeUIRuntime(ReanimatedModule) {
  let __closure = module_1639;
  if (!__closure.isWeb()) {
    if (ReanimatedModule) {
      if (closure_3) {
        const _globalThis = globalThis;
        globalThis.requestAnimationFrame = mockedRequestAnimationFrame.mockedRequestAnimationFrame;
      }
      const fn = function o() {
        if (typeof closure_8 === "function") {
          requestAnimationFrame.__callGuardDEV = __callGuardDEV;
          const __ErrorUtils = {
            reportFatalError(message) {
                const error = { message: message.message, stack: message.stack };
                closure_1(_true[2]).runOnJS(closure_1(_true[3]).reportFatalErrorOnJS)(error);
              }
          };
          requestAnimationFrame.__ErrorUtils = __ErrorUtils;
          closure_10();
          if (!closure_4) {
            closure_1(1643).setupMicrotasks();
            if (typeof closure_11 === "function") {
              requestAnimationFrame = tmp.requestAnimationFrame;
              closure_1 = [];
              dependencyMap = false;
              tmp.__flushAnimationFrame = (arg0) => {
                closure_0 = arg0;
                closure_1 = [];
                const item = closure_1.forEach((fn) => fn(closure_0));
                runWorkletOnJS.callMicrotasks();
              };
              tmp.requestAnimationFrame = (arg0) => {
                closure_1.push(arg0);
                if (!c2) {
                  c2 = true;
                  requestAnimationFrame((__frameTimestamp) => {
                    c2 = false;
                    requestAnimationFrame.__frameTimestamp = __frameTimestamp;
                    const result = requestAnimationFrame.__flushAnimationFrame(__frameTimestamp);
                    requestAnimationFrame.__frameTimestamp = undefined;
                  });
                }
                return -1;
              };
            } else {
              throw new TypeError("Trying to call a non-function");
            }
            const obj2 = closure_1(1643);
          }
          requestAnimationFrame.lastUpdateFrameTimeByTag = {};
          requestAnimationFrame.lastUpdateByTag = {};
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      };
      __closure = { setupCallGuard, setupConsole, SHOULD_BE_USE_WEB: module_1639, setupMicrotasks: runWorkletOnJS.setupMicrotasks, setupRequestAnimationFrame };
      fn.__closure = __closure;
      fn.__workletHash = 2162023783290;
      fn.__initData = __initData;
      runWorkletOnJS.runOnUIImmediately(fn)();
      const tmpResult = runWorkletOnJS;
    } else {
      const _Error = Error;
      let error = new Error("[Reanimated] Reanimated is trying to initialize the UI runtime without a valid ReanimatedModule");
      throw error;
    }
  }
};