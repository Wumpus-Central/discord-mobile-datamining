// === Module 714: ? ===

// Module 714
import _mod687 from "module_687" /* 687 */;
import consoleSandbox from "consoleSandbox" /* 688 */;
import _mod697 from "module_697" /* 697 */;

require = arg1;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const dependencyMap = {};
let closure_3 = {};

export function addHandler(console, errorCallback) {
  dependencyMap[console] = dependencyMap[console] || [];
  dependencyMap[console].push(errorCallback);
  const tmp2 = dependencyMap[console] || [];
}
export function maybeInstrument(console, fn) {
  if (!closure_3[console]) {
    tmp2[console] = true;
    try {
      fn();
    } catch (tmp5) {
      if (_mod687.DEBUG_BUILD) {
        const debug = consoleSandbox.debug;
        const _HermesInternal = HermesInternal;
        debug.error("Error while instrumenting " + tmp, tmp5);
      }
    }
  }
}
export function resetInstrumentationHandlers() {
  const keys = Object.keys(closure_2);
  const item = keys.forEach((item) => {
    dependencyMap[item] = undefined;
  });
}
export function triggerHandlers(arg0, arg1) {
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
        if (_mod687.DEBUG_BUILD) {
          const debug = consoleSandbox.debug;
          debug.error(tmp2 + tmp6 + tmp3 + _mod697.getFunctionName(tmp7) + tmp4, tmp18);
          const tmp19Result = _mod697;
        }
      }
    }
    const nextResult = iter.next();
  }
}