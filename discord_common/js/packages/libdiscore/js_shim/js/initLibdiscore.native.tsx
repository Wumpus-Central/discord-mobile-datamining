// === Module 1353: initLibdiscore ===

// Module 1353 (initLibdiscore)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import timers_mod from "timers" /* 1354 */;

let closure_2 = async function _initLibdiscore() {
  if (c0 === 2) {
    c0 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c0 = 2;
      if (arg0 === 1) {
        c0 = 3;
        throw value;
      } else if (arg0 === 2) {
        c0 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        c0 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp4) {
      c0 = tmp;
      throw tmp4;
    }
  }
};
const NativeModules = fn(17).NativeModules;
let timers = timers_mod;
timers = timers.registerTimerPolyfills();
const size = fn(2);
const result1 = size.fileFinishedImporting("../discord_common/js/packages/libdiscore/js_shim/js/initLibdiscore.native.tsx");

export const isLibdiscoreInitialized = function isLibdiscoreInitialized() {
  return undefined !== NativeModules.LibDiscoreModule;
};
export const initLibdiscore = function initLibdiscore() {
  const self = this;
  const apply = closure_2.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};