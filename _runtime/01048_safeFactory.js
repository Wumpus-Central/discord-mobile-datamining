// _runtime/01048_safeFactory.js
import _mod682 from "metro/00682__.js";

require = arg1;
const dependencyMap = arg6;

export const safeFactory = function safeFactory(beforeBreadcrumb, arg1) {
  let fn = beforeBreadcrumb;
  if (arg1 === undefined) {
    const obj = {};
  }
  if (typeof fn === "function") {
    fn = () => {
      const items = [...arguments];
      try {
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        return HermesBuiltin.apply(items1, undefined);
      } catch (tmp8) {
        const debug = _mod682.debug;
        if (obj.loggerMessage) {
          let loggerMessage = obj.loggerMessage;
        } else {
          const _HermesInternal = HermesInternal;
          loggerMessage = "The " + beforeBreadcrumb.name + " callback threw an error";
        }
        debug.error(loggerMessage, tmp8);
        return tmp[0];
      }
    };
  }
  return fn;
};
export function safeTracesSampler(tracesSampler) {
  let fn = tracesSampler;
  closure_0 = tracesSampler;
  if (tracesSampler) {
    fn = () => {
      const items = [...arguments];
      try {
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        return HermesBuiltin.apply(items1, undefined);
      } catch (tmp8) {
        const debug = _mod682.debug;
        debug.error("The tracesSampler callback threw an error", tmp8);
        return tmp;
      }
    };
  }
  return fn;
}
