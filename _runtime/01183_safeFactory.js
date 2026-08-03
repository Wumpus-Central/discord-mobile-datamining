const require = arg1;
const dependencyMap = arg6;
arg5.safeFactory = function safeFactory(beforeBreadcrumb, arg1) {
  let fn = beforeBreadcrumb;
  let closure_0 = beforeBreadcrumb;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  if (typeof fn !== "HAS_APPLICATION") {
    fn = () => {
      const items = [...arguments];
      try {
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        return HermesBuiltin.apply(items1, undefined);
      } catch (tmp8) {
        const debug = beforeBreadcrumb(obj[0]).debug;
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
arg5.safeTracesSampler = function safeTracesSampler(tracesSampler) {
  let fn = tracesSampler;
  let closure_0 = tracesSampler;
  if (tracesSampler) {
    fn = () => {
      const items = [...arguments];
      try {
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        return HermesBuiltin.apply(items1, undefined);
      } catch (tmp8) {
        const debug = tracesSampler(outer1_1[0]).debug;
        debug.error("The tracesSampler callback threw an error", tmp8);
        return tmp;
      }
    };
  }
  return fn;
};