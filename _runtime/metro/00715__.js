// _runtime/metro/00715__.js
import _mod688 from "00688__.js";
import consoleSandbox from "../00689_consoleSandbox.js";
import _mod698 from "00698__.js";

require = arg1;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const dependencyMap = {};
let closure_3 = {};

export const addHandler = function addHandler(console, errorCallback) {
  dependencyMap[console] = dependencyMap[console] || [];
  let arr = dependencyMap[console];
  arr = arr.push(errorCallback);
  const tmp2 = dependencyMap[console] || [];
};
export const maybeInstrument = function maybeInstrument(console, fn) {
  if (!closure_3[console]) {
    tmp2[console] = true;
    try {
      fn();
    } catch (tmp5) {
      if (_mod688.DEBUG_BUILD) {
        const debug = consoleSandbox.debug;
        const _HermesInternal = HermesInternal;
        debug.error("Error while instrumenting " + tmp, tmp5);
      }
    }
  }
};
export const resetInstrumentationHandlers = function resetInstrumentationHandlers() {
  const keys = Object.keys(closure_2);
  const item = keys.forEach((item) => {
    dependencyMap[item] = undefined;
  });
};
export const triggerHandlers = function triggerHandlers(arg0, arg1) {
  let tmp8 = arg0;
  if (arg0) {
    tmp8 = dependencyMap[arg0];
  }
  if (tmp8) {
    const iter = tmp8[Symbol.iterator]();
    if (iter !== undefined) {
      try {
        tmp15(arg1);
      } catch (tmp18) {
        if (_mod688.DEBUG_BUILD) {
          const debug = consoleSandbox.debug;
          debug.error(tmp2 + tmp6 + tmp3 + _mod698.getFunctionName(tmp7) + tmp4, tmp18);
          const tmp19Result = _mod698;
        }
      }
    }
    const nextResult = iter.next();
  }
};
