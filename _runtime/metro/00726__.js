// === Module 726: ? ===

// Module 726
import _mod699 from "module_699" /* 699 */;
import CONSOLE_LEVELS from "CONSOLE_LEVELS" /* 700 */;
import UNKNOWN_FUNCTION from "UNKNOWN_FUNCTION" /* 709 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_2 = {};
let closure_3 = {};

export const addHandler = function addHandler(console, errorCallback) {
  const tmp2 = closure_2[console] || [];
  closure_2[console] = tmp2;
  const arr = closure_2[console];
  arr.push(errorCallback);
};
export const maybeInstrument = function maybeInstrument(console, fn) {
  if (!closure_3[console]) {
    tmp[console] = true;
    try {
      fn();
    } catch (tmp4) {
      if (_mod699.DEBUG_BUILD) {
        const debug = CONSOLE_LEVELS.debug;
        const _HermesInternal = HermesInternal;
        debug.error("Error while instrumenting " + console, tmp4);
      }
    }
  }
};
export const resetInstrumentationHandlers = function resetInstrumentationHandlers() {
  const keys = Object.keys(closure_2);
  const item = keys.forEach((item) => {
    closure_1_2[item] = undefined;
  });
};
export const triggerHandlers = function triggerHandlers(arg0, arg1) {
  if (arg0 && closure_2[arg0]) {
    const iter = (arg0 && closure_2[arg0])[Symbol.iterator]();
    const nextResult = iter.next();
    if (iter !== undefined) {
      try {
        nextResult(arg1);
      } catch (tmp11) {
        if (_mod699.DEBUG_BUILD) {
          const debug = CONSOLE_LEVELS.debug;
          const error = debug.error;
          const _HermesInternal = HermesInternal;
          const tmp12Result = UNKNOWN_FUNCTION;
          error("Error while triggering instrumentation handler.\nType: " + arg0 + "\nName: " + tmp12Result.getFunctionName(nextResult) + "\nError:", tmp11);
        }
      }
    }
  }
};