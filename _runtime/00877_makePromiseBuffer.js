// _runtime/00877_makePromiseBuffer.js
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const forResult = Symbol.for("SentryBufferFullError");
arg5.SENTRY_BUFFER_FULL_ERROR = forResult;
arg5.makePromiseBuffer = function makePromiseBuffer() {
  const set = new Set();
  const obj = {};
  Object.defineProperty(obj, "$", { get: () => Array.from(set), set: undefined });
  obj.add = function add(fn) {
    if (set.size < promise) {
      promise = fn();
      set.add(promise);
      promise.then((result) => {
        set.delete(promise);
      }, () => {
        set.delete(promise);
      });
      return promise;
    } else {
      return num(set[0]).rejectedSyncPromise(closure_1_2);
    }
  };
  obj.drain = function drain(arg0) {
    closure_0 = arg0;
    if (set.size) {
      const _Array = Array;
      const nextPromise = Promise.allSettled(Array.from(tmp)).then((result) => true);
      if (arg0) {
        const items = [nextPromise, ];
        const promise = new Promise((arg0) => {
          closure_0 = arg0;
          return setTimeout(() => callback(false), closure_0);
        });
        items[1] = promise;
        return Promise.race(items);
      } else {
        return nextPromise;
      }
      const allSettledResult = Promise.allSettled(Array.from(tmp));
    } else {
      return num(set[0]).resolvedSyncPromise(true);
    }
  };
  return obj;
};