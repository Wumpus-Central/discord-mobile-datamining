// _runtime/12795_addHandler.js
import __SENTRY_DEBUG__ from "metro/12796___SENTRY_DEBUG__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};
let closure_3 = {};
arg5.addHandler = function addHandler(arg0, arg1) {
  dependencyMap[arg0] = dependencyMap[arg0] || [];
  let arr = tmp[arg0];
  arr = arr.push(arg1);
};
arg5.maybeInstrument = function maybeInstrument(arg0, arg1) {
  if (!table[arg0]) {
    tmp2[arg0] = true;
    try {
      arg1();
    } catch (tmp5) {
      if (__SENTRY_DEBUG__.DEBUG_BUILD) {
        const logger = tmp6(12797).logger;
        const _HermesInternal = HermesInternal;
        logger.error("Error while instrumenting " + tmp, tmp5);
      }
      tmp6 = require;
    }
  }
};
arg5.resetInstrumentationHandlers = function resetInstrumentationHandlers() {
  const keys = Object.keys(closure_2);
  const item = keys.forEach((arg0) => {
    closure_2[arg0] = undefined;
  });
};
arg5.triggerHandlers = function triggerHandlers(arg0, arg1) {
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
        if (__SENTRY_DEBUG__.DEBUG_BUILD) {
          const logger = tmp19(12797).logger;
          logger.error(tmp2 + tmp6 + tmp3 + tmp19(12800).getFunctionName(tmp7) + tmp4, tmp18);
          const tmp19Result = tmp19(12800);
        }
      }
    }
    const nextResult = iter.next();
  }
};
