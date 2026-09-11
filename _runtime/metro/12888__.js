// _runtime/metro/12888__.js
import _mod12889 from "12889__.js";
import _mod12890 from "12890__.js";
import stackParserFromStackParserOptions from "../12893_stackParserFromStackParserOptions.js";

require = arg1;
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
      if (_mod12889.DEBUG_BUILD) {
        const logger = _mod12890.logger;
        const _HermesInternal = HermesInternal;
        logger.error("Error while instrumenting " + tmp, tmp5);
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
        if (_mod12889.DEBUG_BUILD) {
          const logger = _mod12890.logger;
          logger.error(tmp2 + tmp6 + tmp3 + stackParserFromStackParserOptions.getFunctionName(tmp7) + tmp4, tmp18);
          const tmp19Result = stackParserFromStackParserOptions;
        }
      }
    }
    const nextResult = iter.next();
  }
};
