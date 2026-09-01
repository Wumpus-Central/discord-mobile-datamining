// discord_common/js/shared/utils/MutexUtils.tsx
import set from "../../../../_runtime/00002_set.js";

const result = set.fileFinishedImporting("../discord_common/js/shared/utils/MutexUtils.tsx");

export const createLock = function createLock() {
  closure_0 = Promise.resolve(null);
  return (arg0) => {
    closure_0 = arg0;
    return new Promise((arg0, arg1) => {
      promise = promise.then(promise).then(arg0, arg1);
    });
  };
};
export const createObservableLock = function createObservableLock(arg0) {
  closure_0 = Promise.resolve(null);
  closure_1 = [];
  c2 = false;
  ({ onContention: closure_3, onContentionResolved: closure_4, onTimeout: closure_5, timeoutMs: closure_6 } = arg0);
  function mutex(arg0, arg1) {
    closure_0 = arg0;
    closure_1 = arg1;
    let arr = closure_1;
    if (closure_1.length > 0) {
      callback(arg1, arr);
      let timerId = true;
    } else if (timerId) {
      callback2();
      timerId = false;
    }
    arr = arr.push(arg1);
    timerId = null;
    if (null != closure_6) {
      timerId = null;
      if (null != closure_5) {
        const _setTimeout = setTimeout;
        timerId = setTimeout(() => closure_1_5(closure_1, closure_1), tmp7);
      }
    }
    return new Promise((arg0, arg1) => {
      const nextPromise = promise.then(promise);
      promise = promise
        .then(promise)
        .then(arg0, arg1)
        .then(() => arr.splice(0, 1));
      if (null != timerId) {
        promise = promise.then(() => clearTimeout(closure_2));
      }
    });
  }
  mutex.isMutexHeld = () => closure_1.length > 0;
  mutex.getLockHolders = () => closure_1;
  return mutex;
};
