// _runtime/00911_observe.js
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.observe = (arg0, arg1) => {
  closure_0 = arg1;
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  try {
    const supportedEntryTypes = globalThis.PerformanceObserver.supportedEntryTypes;
    if (supportedEntryTypes.includes(arg0)) {
      const performanceObserver = new globalThis.PerformanceObserver((arg0) => {
        closure_0 = arg0;
        const resolved = Promise.resolve();
        resolved.then(() => {
          entries(entries.getEntries());
        });
      });
      obj = { type: null, buffered: true };
      obj[0] = arg0;
      const merged = Object.assign(obj);
      performanceObserver.observe(obj);
      return performanceObserver;
    }
  } catch (err) {}
};
