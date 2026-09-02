// _runtime/00874_makePromiseBuffer.js
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const forResult = Symbol.for("SentryBufferFullError");
arg5.SENTRY_BUFFER_FULL_ERROR = forResult;
arg5.makePromiseBuffer = function makePromiseBuffer() {
  let num = arg0;
  if (arg0 === undefined) {
    num = 100;
  }
  let set;
  set = new Set();
  let obj = {};
  Object.defineProperty(obj, "$", { get: () => Array.from(set), set: undefined });
  obj.add = function add(arg0) {
    if (set.size < promise) {
      promise = arg0();
      obj.add(promise);
      promise.then(
        () => {
          closure_1_1.delete(promise);
        },
        () => {
          closure_1_1.delete(promise);
        },
      );
      return promise;
    } else {
      return num(set[0]).rejectedSyncPromise(closure_1_2);
    }
    obj = set;
  };
  obj.drain = function drain(arg0) {
    closure_0 = arg0;
    if (set.size) {
      const _Array = Array;
      const nextPromise = Promise.allSettled(Array.from(tmp)).then(() => true);
      if (arg0) {
        const items = [nextPromise];
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
