// discord_common/js/shared/utils/MutexUtils.tsx
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("../discord_common/js/shared/utils/MutexUtils.tsx");

export const createLock = function createLock() {
  closure_0 = Promise.resolve(null);
  return (arg0) => {
    let promise = new Promise((arg0, arg1) => {
      promise = promise.then(promise).then(arg0, arg1);
    });
    return promise;
  };
};
export const createObservableLock = function createObservableLock(arg0) {
  closure_0 = Promise.resolve(null);
  closure_1 = [];
  c2 = false;
  ({ onContention: closure_3, onContentionResolved: closure_4, onTimeout: closure_5, timeoutMs: closure_6 } = arg0);
  function mutex(arg0, arg1) {
    let promise = arg0;
    closure_1 = arg1;
    let arr = closure_1;
    if (closure_1.length > 0) {
      closure_3(arg1, arr);
      let timerId = true;
    } else if (timerId) {
      closure_4();
      timerId = false;
    }
    arr = arr.push(arg1);
    timerId = null;
    if (null != closure_6) {
      timerId = null;
      if (null != closure_5) {
        const _setTimeout = setTimeout;
        timerId = setTimeout(() => closure_2_5(closure_1, closure_1), tmp7);
      }
    }
    promise = new Promise((arg0, arg1) => {
      const nextPromise = promise.then(promise);
      promise = promise
        .then(promise)
        .then(arg0, arg1)
        .then(() => closure_1_1.splice(0, 1));
      if (null != timerId) {
        promise = promise.then(() => clearTimeout(timerId));
      }
    });
    return promise;
  }
  mutex.isMutexHeld = () => closure_1.length > 0;
  mutex.getLockHolders = () => closure_1;
  return mutex;
};
