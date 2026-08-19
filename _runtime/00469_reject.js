// _runtime/00469_reject.js
import _mod38 from "metro/00038__.js";

require = arg1;
const dependencyMap = arg6;
function reject(arg0) {
  closure_0 = arg0;
  const timerId = setTimeout(() => {
    throw closure_0;
  }, 0);
}
arg5.default = {
  Events: { interactionStart: "interactionStart", interactionComplete: "interactionComplete" },
  runAfterInteractions(arg0) {
    closure_0 = arg0;
    const promise = new Promise((arg0) => {
      closure_0 = arg0;
      const immediate = setImmediate(() => {
        if (typeof callback === "object") {
          if (null !== callback) {
            if (typeof callback.gen === "function") {
              callback.gen().then(callback, reject);
              const genResult = callback.gen();
            } else if (typeof callback.run === "function") {
              try {
                callback.run();
                callback();
              } catch (tmp12) {
                reject(callback(dependencyMap[0]).default(tmp12));
                const obj3 = callback(dependencyMap[0]);
              }
            } else {
              const _TypeError2 = TypeError;
              const _HermesInternal = HermesInternal;
              const typeError = new TypeError("Task \"" + callback.name + "\" missing gen or run.");
              reject(typeError);
            }
          }
        }
        if (typeof callback === "function") {
          try {
            callback();
            callback();
          } catch (tmp4) {
            reject(callback(dependencyMap[0]).default(tmp4));
            const obj2 = callback(dependencyMap[0]);
          }
        } else {
          const _TypeError = TypeError;
          const typeError1 = new TypeError("Invalid task of type: " + typeof callback);
          reject(typeError1);
        }
      });
    });
    const then = promise.then;
    return {
      then: then.bind(promise),
      cancel() {
        clearImmediate(closure_1);
      }
    };
  },
  createInteractionHandle() {
    return -1;
  },
  clearInteractionHandle(current) {
    _mod38(current, "InteractionManager: Must provide a handle to clear.");
  },
  addListener(arg0, arg1, arg2) {
    return {
      remove() {

      }
    };
  },
  setDeadline(arg0) {

  }
};