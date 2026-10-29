// _runtime/metro/12851__.js
import _mod12852 from "12852__.js";
import _mod12853 from "12853__.js";
import stackParserFromStackParserOptions from "../12856_stackParserFromStackParserOptions.js";

require = arg1;
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
      if (_mod12852.DEBUG_BUILD) {
        const logger = _mod12853.logger;
        const _HermesInternal = HermesInternal;
        logger.error("Error while instrumenting " + tmp, tmp5);
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
        if (_mod12852.DEBUG_BUILD) {
          const logger = _mod12853.logger;
          logger.error(tmp2 + tmp6 + tmp3 + stackParserFromStackParserOptions.getFunctionName(tmp7) + tmp4, tmp18);
          const tmp19Result = stackParserFromStackParserOptions;
        }
      }
    }
    const nextResult = iter.next();
  }
}
