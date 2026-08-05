// _runtime/00850_addHandler.js
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
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
      if (require("metro/00823___SENTRY_DEBUG__.js") /* __SENTRY_DEBUG__ */.DEBUG_BUILD) {
        const debug = tmp6(824).debug;
        const _HermesInternal = HermesInternal;
        debug.error("Error while instrumenting " + tmp, tmp5);
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
        if (require("metro/00823___SENTRY_DEBUG__.js") /* __SENTRY_DEBUG__ */.DEBUG_BUILD) {
          const debug = tmp19(824).debug;
          debug.error(tmp2 + tmp6 + tmp3 + tmp19(833).getFunctionName(tmp7) + tmp4, tmp18);
          const tmp19Result = tmp19(833);
        }
      }
    }
    const nextResult = iter.next();
  }
};