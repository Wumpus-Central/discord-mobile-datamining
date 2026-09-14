// === Module 911: observe ===

// Module 911 (observe)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const observe = (type, handleEntries, arg2) => {
  closure_0 = handleEntries;
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  try {
    const supportedEntryTypes = globalThis.PerformanceObserver.supportedEntryTypes;
    if (supportedEntryTypes.includes(type)) {
      const performanceObserver = new globalThis.PerformanceObserver((arg0) => {
        const entries = arg0;
        const resolved = Promise.resolve();
        resolved.then(() => {
          entries(entries.getEntries());
        });
      });
      const obj2 = { type, buffered: true };
      const merged = Object.assign(obj);
      performanceObserver.observe(obj2);
      return performanceObserver;
    }
  } catch (err) {
  }
};