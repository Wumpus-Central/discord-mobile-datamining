// === Module 742: SENTRY_BUFFER_FULL_ERROR ===

// Module 742 (SENTRY_BUFFER_FULL_ERROR)
import SyncPromise from "SyncPromise" /* 738 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const forResult = Symbol.for("SentryBufferFullError");
let c2 = forResult;

export const SENTRY_BUFFER_FULL_ERROR = forResult;
export const makePromiseBuffer = function makePromiseBuffer() {
  const set = new Set();
  let obj = {};
  Object.defineProperty(obj, "$", { get: () => Array.from(set), set: undefined });
  obj.add = function add(fn) {
    if (set.size < promise) {
      promise = fn();
      obj.add(promise);
      promise.then(() => {
        set.delete(promise);
      }, () => {
        set.delete(promise);
      });
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
        const items = [nextPromise, ];
        const promise = new Promise((arg0) => {
          closure_0 = arg0;
          return setTimeout(() => closure_0(false), closure_0);
        });
        items[1] = promise;
        return Promise.race(items);
      } else {
        return nextPromise;
      }
      const allSettledResult = Promise.allSettled(Array.from(tmp));
    } else {
      return SyncPromise.resolvedSyncPromise(true);
    }
  };
  return obj;
};