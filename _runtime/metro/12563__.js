// === Module 12563: ? ===

// Module 12563
import _mod12564 from "module_12564" /* 12564 */;
import _mod12565 from "module_12565" /* 12565 */;
import _mod12568 from "module_12568" /* 12568 */;

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
      if (_mod12564.DEBUG_BUILD) {
        const logger = _mod12565.logger;
        const _HermesInternal = HermesInternal;
        logger.error("Error while instrumenting " + console, tmp4);
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
        if (_mod12564.DEBUG_BUILD) {
          const logger = _mod12565.logger;
          const error = logger.error;
          const _HermesInternal = HermesInternal;
          const tmp12Result = _mod12568;
          error("Error while triggering instrumentation handler.\nType: " + arg0 + "\nName: " + tmp12Result.getFunctionName(nextResult) + "\nError:", tmp11);
        }
      }
    }
  }
};