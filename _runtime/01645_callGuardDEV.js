// === Module 1645: callGuardDEV ===

// Module 1645 (callGuardDEV)
import setupMicrotasks from "setupMicrotasks" /* 1650 */;
import ReanimatedError from "ReanimatedError" /* 1654 */;
import mockedRequestAnimationFrame from "mockedRequestAnimationFrame" /* 1658 */;
import module_1646_mod from "module_1646" /* 1646 */;
import react_native_mod from "react-native" /* 1647 */;

let obj;

function e(arg0) {
  obj = setupMicrotasks;
  obj.runOnJS(react_native.logToLogBoxAndConsole)(arg0);
}
const __flushAnimationFrame = (arg0) => {
  let closure_0 = arg0;
  closure_1 = [];
  const item = closure_1.forEach((fn) => fn(closure_0));
  obj = setupMicrotasks;
  obj.callMicrotasks();
};
let module_1646 = module_1646_mod;
let closure_3 = module_1646.isJest();
module_1646 = module_1646_mod;
module_1646.shouldBeUseWeb();
module_1646 = module_1646_mod;
module_1646 = module_1646.isChromeDebugger();
let __initData = { code: "function pnpm_initializersTs2(data){const{runOnJS,logToLogBoxAndConsole}=this.__closure;runOnJS(logToLogBoxAndConsole)(data);}" };
function overrideLogFunctionImplementation() {
  __initData = react_native;
  const fn = e;
  fn.__closure = { runOnJS: setupMicrotasks.runOnJS, logToLogBoxAndConsole: react_native.logToLogBoxAndConsole };
  fn.__workletHash = 10834450741065;
  fn.__initData = __initData;
  ({ runOnJS: setupMicrotasks.runOnJS, logToLogBoxAndConsole: react_native.logToLogBoxAndConsole });
  const result = __initData.replaceLoggerImplementation(fn);
}
let obj2 = { replaceLoggerImplementation: react_native.replaceLoggerImplementation, runOnJS: setupMicrotasks.runOnJS, logToLogBoxAndConsole: react_native.logToLogBoxAndConsole };
overrideLogFunctionImplementation.__closure = obj2;
overrideLogFunctionImplementation.__workletHash = 17079079828449;
overrideLogFunctionImplementation.__initData = { code: "function overrideLogFunctionImplementation_Pnpm_initializersTs1(){const{replaceLoggerImplementation,runOnJS,logToLogBoxAndConsole}=this.__closure;replaceLoggerImplementation(function(data){'worklet';runOnJS(logToLogBoxAndConsole)(data);});}" };
let react_native = react_native_mod;
react_native.registerLoggerConfig(react_native.DEFAULT_LOGGER_CONFIG);
react_native = react_native_mod;
let fn = e;
let obj3 = { runOnJS: setupMicrotasks.runOnJS, logToLogBoxAndConsole: react_native.logToLogBoxAndConsole };
fn.__closure = obj3;
fn.__workletHash = 10834450741065;
fn.__initData = __initData;
let result = react_native.replaceLoggerImplementation(fn);
if (module_1646) {
  const flag = false;
  global._WORKLET = false;
  const _console = console;
  global._log = console.log;
  global._getAnimationTimestamp = () => performance.now();
} else {
  const _module5 = setupMicrotasks;
  const tmp6 = _module5.executeOnUIRuntimeSync(ReanimatedError.registerReanimatedError)();
  const _module6 = setupMicrotasks;
  const result1 = _module6.executeOnUIRuntimeSync(react_native.registerLoggerConfig);
  result1(react_native.DEFAULT_LOGGER_CONFIG);
  const _module7 = setupMicrotasks;
  const tmp9 = _module7.executeOnUIRuntimeSync(overrideLogFunctionImplementation)();
}
function callGuardDEV(arg0) {
  const substr = [...arguments].slice();
  try {
    const items = [];
    HermesBuiltin.arraySpread(items, substr, 0);
    return HermesBuiltin.apply(arg0, items, undefined);
  } catch (tmp9) {
    if (global.__ErrorUtils) {
      const __ErrorUtils = global.__ErrorUtils;
      __ErrorUtils.reportFatalError(tmp9);
    } else {
      throw tmp9;
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
      obj = closure_1(c2[2]);
      obj.runOnJS(closure_1(c2[3]).reportFatalErrorOnJS)(error);
    }
  };
}
let obj4 = { callGuardDEV, runOnJS: setupMicrotasks.runOnJS, reportFatalErrorOnJS: ReanimatedError.reportFatalErrorOnJS };
setupCallGuard.__closure = obj4;
setupCallGuard.__workletHash = 14948004486848;
setupCallGuard.__initData = { code: "function setupCallGuard_Pnpm_initializersTs4(){const{callGuardDEV,runOnJS,reportFatalErrorOnJS}=this.__closure;global.__callGuardDEV=callGuardDEV;global.__ErrorUtils={reportFatalError:function(error){runOnJS(reportFatalErrorOnJS)({message:error.message,stack:error.stack});}};}" };
const entries = Object.entries(console);
const fromEntriesResult = fromEntries(entries.map((item) => {
  let tmp;
  let tmp2;
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
let c9 = fromEntriesResult;
function setupConsole() {
  let obj2;
  let obj3;
  let obj4;
  let obj5;
  let obj6;
  let obj7;
  if (!module_1646) {
    const console = { assert: obj2.runOnJS(fromEntriesResult.assert), debug: obj3.runOnJS(fromEntriesResult.debug), log: obj4.runOnJS(fromEntriesResult.log), warn: obj5.runOnJS(fromEntriesResult.warn), error: obj6.runOnJS(fromEntriesResult.error), info: obj7.runOnJS(fromEntriesResult.info) };
    obj2 = setupMicrotasks;
    obj3 = setupMicrotasks;
    obj4 = setupMicrotasks;
    obj5 = setupMicrotasks;
    obj6 = setupMicrotasks;
    global.console = console;
    obj7 = setupMicrotasks;
  }
}
let obj5 = { IS_CHROME_DEBUGGER: module_1646, runOnJS: setupMicrotasks.runOnJS, capturableConsole: fromEntriesResult };
setupConsole.__closure = obj5;
setupConsole.__workletHash = 1380126086828;
setupConsole.__initData = { code: "function setupConsole_Pnpm_initializersTs5(){const{IS_CHROME_DEBUGGER,runOnJS,capturableConsole}=this.__closure;if(!IS_CHROME_DEBUGGER){global.console={assert:runOnJS(capturableConsole.assert),debug:runOnJS(capturableConsole.debug),log:runOnJS(capturableConsole.log),warn:runOnJS(capturableConsole.warn),error:runOnJS(capturableConsole.error),info:runOnJS(capturableConsole.info)};}}" };
function setupRequestAnimationFrame() {
  let requestAnimationFrame;
  requestAnimationFrame = requestAnimationFrame.requestAnimationFrame;
  let closure_1 = [];
  let c2 = false;
  requestAnimationFrame.__flushAnimationFrame = __flushAnimationFrame;
  requestAnimationFrame.requestAnimationFrame = (arg0) => {
    closure_1.push(arg0);
    const tmp2 = c2;
    if (!tmp2) {
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
let obj6 = { callMicrotasks: setupMicrotasks.callMicrotasks };
setupRequestAnimationFrame.__closure = obj6;
setupRequestAnimationFrame.__workletHash = 14722266205784;
setupRequestAnimationFrame.__initData = { code: "function setupRequestAnimationFrame_Pnpm_initializersTs6(){const{callMicrotasks}=this.__closure;const nativeRequestAnimationFrame=global.requestAnimationFrame;let animationFrameCallbacks=[];let flushRequested=false;global.__flushAnimationFrame=function(frameTimestamp){const currentCallbacks=animationFrameCallbacks;animationFrameCallbacks=[];currentCallbacks.forEach(function(f){return f(frameTimestamp);});callMicrotasks();};global.requestAnimationFrame=function(callback){animationFrameCallbacks.push(callback);if(!flushRequested){flushRequested=true;nativeRequestAnimationFrame(function(timestamp){flushRequested=false;global.__frameTimestamp=timestamp;global.__flushAnimationFrame(timestamp);global.__frameTimestamp=undefined;});}return-1;};}" };
__initData = { code: "function pnpm_initializersTs7(){const{setupCallGuard,setupConsole,SHOULD_BE_USE_WEB,setupMicrotasks,setupRequestAnimationFrame}=this.__closure;setupCallGuard();setupConsole();if(!SHOULD_BE_USE_WEB){setupMicrotasks();setupRequestAnimationFrame();}global.lastUpdateFrameTimeByTag={};global.lastUpdateByTag={};}" };

export { callGuardDEV };
export { setupCallGuard };
export { setupConsole };
export const initializeUIRuntime = function initializeUIRuntime(ReanimatedModule) {
  let __callGuardDEV;
  obj = module_1646;
  if (!obj.isWeb()) {
    const tmp3 = ReanimatedModule;
    if (tmp3) {
      if (closure_3) {
        const _globalThis = globalThis;
        globalThis.requestAnimationFrame = mockedRequestAnimationFrame.mockedRequestAnimationFrame;
      }
      const fn = function o() {
        let _true;
        let requestAnimationFrame;
        if (typeof closure_8 === "function") {
          requestAnimationFrame.__callGuardDEV = __callGuardDEV;
          const __ErrorUtils = {
            reportFatalError(message) {
                const error = { message: message.message, stack: message.stack };
                obj = closure_1(c2[2]);
                obj.runOnJS(closure_1(c2[3]).reportFatalErrorOnJS)(error);
              }
          };
          requestAnimationFrame.__ErrorUtils = __ErrorUtils;
          closure_10();
          if (!closure_4) {
            const obj2 = closure_1(c2[2]);
            obj2.setupMicrotasks();
            if (typeof closure_11 === "function") {
              requestAnimationFrame = tmp.requestAnimationFrame;
              closure_1 = [];
              c2 = false;
              requestAnimationFrame.__flushAnimationFrame = __flushAnimationFrame;
              requestAnimationFrame.requestAnimationFrame = (arg0) => {
                closure_1.push(arg0);
                const tmp2 = c2;
                if (!tmp2) {
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
          }
          requestAnimationFrame.lastUpdateFrameTimeByTag = {};
          requestAnimationFrame.lastUpdateByTag = {};
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      };
      let obj2 = { setupCallGuard, setupConsole, SHOULD_BE_USE_WEB: module_1646, setupMicrotasks: setupMicrotasks.setupMicrotasks, setupRequestAnimationFrame };
      const runOnUIImmediately = setupMicrotasks.runOnUIImmediately;
      setupMicrotasks;
      fn.__closure = obj2;
      fn.__workletHash = 2162023783290;
      fn.__initData = __initData;
      runOnUIImmediately(fn)();
    } else {
      const tmp4 = globalThis;
      const _Error = Error;
      const self = this;
      const self2 = this;
      let error = new Error("[Reanimated] Reanimated is trying to initialize the UI runtime without a valid ReanimatedModule");
      throw error;
    }
  }
};