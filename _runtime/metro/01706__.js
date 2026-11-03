// _runtime/metro/01706__.js
import _mod1707 from "01707__.js";
import threadsNative from "../01708_threadsNative.js";
import installValueUnpacker from "../01714_installValueUnpacker.js";
import registerCustomSerializable from "../01716_registerCustomSerializable.js";
import bundleValueUnpacker from "../01733_bundleValueUnpacker.js";

const require = globalThis.__r;

if (undefined === globalThis.__RUNTIME_KIND) {
  let _globalThis = globalThis;
  globalThis.__RUNTIME_KIND = _mod1707.RuntimeKind.ReactNative;
}
let items = [
  {
    code: "(function setupConsole_Pnpm_initializersNativeTs1(boundCapturableConsole){let[scheduleOnRN]=this.__closure;globalThis.console={assert:function(...args){return scheduleOnRN(boundCapturableConsole.assert,...args);},debug:function(...args){return scheduleOnRN(boundCapturableConsole.debug,...args);},log:function(...args){return scheduleOnRN(boundCapturableConsole.log,...args);},warn:function(...args){return scheduleOnRN(boundCapturableConsole.warn,...args);},error:function(...args){return scheduleOnRN(boundCapturableConsole.error,...args);},info:function(...args){return scheduleOnRN(boundCapturableConsole.info,...args);}};})",
  },
  threadsNative.scheduleOnRN,
];
let closure_129_0;
[tmp2, tmp3] = items;
function setupConsole(arg0) {
  closure_0 = arg0;
  globalThis.console = {
    assert() {
      return require(...HermesBuiltin.copyRestArgs());
    },
    debug() {
      return require(...HermesBuiltin.copyRestArgs());
    },
    log() {
      return require(...HermesBuiltin.copyRestArgs());
    },
    warn() {
      return require(...HermesBuiltin.copyRestArgs());
    },
    error() {
      return require(...HermesBuiltin.copyRestArgs());
    },
    info() {
      return require(...HermesBuiltin.copyRestArgs());
    },
  };
}
let items1 = [tmp3];
setupConsole.__closure = items1;
setupConsole.__workletHash = 11579803583940;
setupConsole.__initData = tmp2;
const items2 = [
  {
    code: "(function setupConsoleForwarding_Pnpm_initializersNativeTs2(boundCapturableConsole){let[scheduleOnRN]=this.__closure;globalThis.nativeLoggingHook=function(message,level){switch(level){case 0:scheduleOnRN(boundCapturableConsole.debug,message);break;case 1:scheduleOnRN(boundCapturableConsole.log,message);break;case 2:scheduleOnRN(boundCapturableConsole.warn,message);break;case 3:scheduleOnRN(boundCapturableConsole.error,message);break;default:scheduleOnRN(boundCapturableConsole.log,message);}};})",
  },
  threadsNative.scheduleOnRN,
];
let closure_130_0;
[tmp4, tmp5] = items2;
function setupConsoleForwarding(arg0) {
  closure_0 = arg0;
  globalThis.nativeLoggingHook = (arg0, arg1) => {
    if (0 === arg1) {
      require(closure_0.debug, arg0);
    } else if (1 === arg1) {
      require(closure_0.log, arg0);
    } else if (2 === arg1) {
      require(closure_0.warn, arg0);
    } else if (3 === arg1) {
      require(closure_0.error, arg0);
    }
  };
}
const items3 = [tmp5];
setupConsoleForwarding.__closure = items3;
setupConsoleForwarding.__workletHash = 3153483615840;
setupConsoleForwarding.__initData = tmp4;
const items4 = [
  {
    code: "(function setupSerializer_Pnpm_initializersNativeTs3(){let[makeShareableCloneOnUIRecursive]=this.__closure;globalThis.__serializer=makeShareableCloneOnUIRecursive;})",
  },
  registerCustomSerializable.makeShareableCloneOnUIRecursive,
];
let closure_131_0;
[tmp6, tmp7] = items4;
function setupSerializer() {
  globalThis.__serializer = require;
}
const items5 = [tmp7];
setupSerializer.__closure = items5;
setupSerializer.__workletHash = 7733519674106;
setupSerializer.__initData = tmp6;
let c6 = false;
let closure_7 = {
  code: "(function pnpm_initializersNativeTs5(){let[setupConsole,runtimeBoundCapturableConsole,__DEV__,setupConsoleForwarding,setupQueueMicrotask,setupRequestAnimationFrame,setupSetTimeout,setupSetImmediate,setupSetInterval,setupSerializer]=this.__closure;if(!globalThis._WORKLETS_BUNDLE_MODE_ENABLED){setupConsole(runtimeBoundCapturableConsole);}else if(__DEV__){setupConsoleForwarding(runtimeBoundCapturableConsole);}setupQueueMicrotask();setupRequestAnimationFrame();setupSetTimeout();setupSetImmediate();setupSetInterval();setupSerializer();})",
};

export function getMemorySafeCapturableConsole() {
  if (fromEntriesResult) {
    return fromEntriesResult;
  } else {
    const _Object = Object;
    const _Object2 = Object;
    const _console = console;
    const entries = Object.entries(console);
    fromEntriesResult = Object.fromEntries(
      entries.map((item) => {
        [tmp, tmp2] = item;
        function methodWrapper() {
          return _undefined(...HermesBuiltin.copyRestArgs());
        }
        if (tmp2.name) {
          const _Object = Object;
          const obj = { value: tmp2.name, writable: false };
          Object.defineProperty(methodWrapper, "name", obj);
        }
        items = [tmp, methodWrapper];
        return items;
      }),
    );
    return fromEntriesResult;
  }
}
export { setupConsole };
export { setupConsoleForwarding };
export { setupSerializer };
export function init() {
  if (!c6) {
    c6 = true;
    const _globalThis = globalThis;
    if (globalThis._WORKLETS_BUNDLE_MODE_ENABLED) {
      const _globalThis2 = globalThis;
      globalThis.__valueUnpacker = bundleValueUnpacker.bundleValueUnpacker;
      let tmp2 = require;
    } else {
      tmp2 = require;
      installValueUnpacker.installValueUnpacker();
    }
    const result = tmp2(1715).installSynchronizableUnpacker();
    const tmp2Result = tmp2(1715);
    const result1 = tmp2(1721).installCustomSerializableUnpacker();
    const tmp2Result8 = tmp2(1721);
    const result2 = tmp2(1722).installShareableHostUnpacker();
    const tmp2Result9 = tmp2(1722);
    const result3 = tmp2(1723).installShareableGuestUnpacker();
    const tmp2Result10 = tmp2(1723);
    const result4 = tmp2(1732).installRemoteFunctionUnpacker();
    const _globalThis3 = globalThis;
    if (globalThis.__RUNTIME_KIND !== tmp2(1707).RuntimeKind.ReactNative) {
      const _globalThis6 = globalThis;
      if (globalThis._WORKLETS_BUNDLE_MODE_ENABLED) {
        tmp2(1735).installNetworking();
        const tmp2Result12 = tmp2(1735);
      }
    } else {
      const result5 = tmp2(1734).registerReportFatalRemoteError();
      if (typeof setupSerializer === "function") {
        const _globalThis4 = globalThis;
        globalThis.__serializer = closure_129_0;
        if (tmp2(1709).WorkletsModule) {
          const _globalThis5 = globalThis;
          let tmp17 = null;
          if (!globalThis._WORKLETS_BUNDLE_MODE_ENABLED) {
            let tmp18 = fromEntriesResult;
            if (!fromEntriesResult) {
              let _Object = Object;
              const _Object2 = Object;
              const _console = console;
              const entries = Object.entries(console);
              fromEntriesResult = Object.fromEntries(
                entries.map((item) => {
                  [tmp, tmp2] = item;
                  function methodWrapper() {
                    return _undefined(...HermesBuiltin.copyRestArgs());
                  }
                  if (tmp2.name) {
                    const _Object = Object;
                    const obj = { value: tmp2.name, writable: false };
                    Object.defineProperty(methodWrapper, "name", obj);
                  }
                  items = [tmp, methodWrapper];
                  return items;
                }),
              );
              tmp18 = fromEntriesResult;
            }
            tmp17 = tmp18;
          }
          items = [
            _undefined6,
            setupConsole,
            tmp17,
            false,
            setupConsoleForwarding,
            tmp2(1727).setupQueueMicrotask,
            tmp2(1746).setupRequestAnimationFrame,
            tmp2(1747).setupSetTimeout,
            tmp2(1730).setupSetImmediate,
            tmp2(1731).setupSetInterval,
            tmp38,
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
          c9 = undefined;
          [tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34] = items;
          function pnpm_initializersNativeTs5() {
            if (globalThis._WORKLETS_BUNDLE_MODE_ENABLED) {
              if (c2) {
                _undefined2(c1);
              }
            } else {
              _undefined(c1);
            }
            _undefined3();
            _undefined4();
            _undefined5();
            _undefined6();
            _undefined7();
            _undefined8();
          }
          const items1 = [tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34];
          pnpm_initializersNativeTs5.__closure = items1;
          pnpm_initializersNativeTs5.__workletHash = 12068601897535;
          pnpm_initializersNativeTs5.__initData = tmp24;
          tmp2(1708).runOnUISync(pnpm_initializersNativeTs5);
          const tmp2Result14 = tmp2(1708);
        } else {
          const _Error = Error;
          const error = new Error(
            "[Worklets] Worklets are trying to initialize the UI runtime without a valid WorkletsModule",
          );
          throw error;
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
      const tmp2Result13 = tmp2(1734);
    }
    const tmp2Result11 = tmp2(1732);
  }
}
