// === Module 922: observe ===

// Module 922 (observe)
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const observe = function(type, handleEntries, arg2) {
  let closure_0 = handleEntries;
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  try {
    const supportedEntryTypes = globalThis.PerformanceObserver.supportedEntryTypes;
    if (supportedEntryTypes.includes(type)) {
      const PerformanceObserver2 = globalThis.PerformanceObserver;
      const self = this;
      const self2 = this;
      const performanceObserver = new globalThis.PerformanceObserver((arg0) => {
        const entries = arg0;
        const resolved = Promise.resolve();
        resolved.then(() => {
          entries(entries.getEntries());
        });
      });
      const observe = performanceObserver.observe;
      const obj2 = { type, buffered: true };
      const merged = Object.assign(obj);
      observe(obj2);
      return performanceObserver;
    }
  } catch (err) {
  }
};