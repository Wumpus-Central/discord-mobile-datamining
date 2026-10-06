// _runtime/00753_SENTRY_BUFFER_FULL_ERROR.js
import SyncPromise from "00749_SyncPromise.js";

let set;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const forResult = Symbol.for("SentryBufferFullError");
let c2 = forResult;

export const SENTRY_BUFFER_FULL_ERROR = forResult;
export const makePromiseBuffer = function makePromiseBuffer() {
  let num = arg0;
  if (arg0 === undefined) {
    num = 100;
  }
  set = new Set();
  let obj = {
    add(fn) {
      let promise;
      if (set.size < promise) {
        promise = fn();
        set.add(promise);
        promise.then(
          () => {
            set.delete(promise);
          },
          () => {
            set.delete(promise);
          },
        );
        return promise;
      } else {
        const obj2 = num(set[0]);
        return obj2.rejectedSyncPromise(closure_1_2);
      }
    },
    drain(arg0) {
      const f134399 = (arg0) => {
        closure_0 = arg0;
        return setTimeout(() => closure_0(false), closure_0);
      };
      let closure_0 = arg0;
      if (set.size) {
        const _Array = Array;
        const allSettledResult = Promise.allSettled(Array.from(tmp));
        const nextPromise = allSettledResult.then(() => true);
        if (arg0) {
          const items = [nextPromise];
          const self = this;
          const self2 = this;
          items[1] = new Promise(f134399);
          const promise = new Promise(f134399);
          return Promise.race(items);
        } else {
          return nextPromise;
        }
      } else {
        const obj = SyncPromise;
        return obj.resolvedSyncPromise(true);
      }
    },
  };
  Object.defineProperty(obj, "$", { get: () => Array.from(set), set: undefined });
  return obj;
};
