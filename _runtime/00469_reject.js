// === Module 469: reject ===

// Module 469 (reject)
import _mod38 from "module_38" /* 38 */;
import _mod184 from "module_184" /* 184 */;

require = arg1;
const dependencyMap = arg6;
function reject(arg0) {
  closure_0 = arg0;
  const timerId = setTimeout(() => {
    throw closure_0;
  }, 0);
}

export default {
  Events: { interactionStart: "interactionStart", interactionComplete: "interactionComplete" },
  runAfterInteractions(arg0) {
    closure_0 = arg0;
    const promise = new Promise((arg0) => {
      closure_0 = arg0;
      const immediate = setImmediate(() => {
        if (typeof closure_0 === "object") {
          if (null !== closure_0) {
            if (typeof closure_0.gen === "function") {
              closure_0.gen().then(closure_0, reject);
              const genResult = closure_0.gen();
            } else if (typeof closure_0.run === "function") {
              try {
                closure_0.run();
                closure_0();
              } catch (tmp12) {
                reject(_mod184.default(tmp12));
              }
            } else {
              const _TypeError2 = TypeError;
              const _HermesInternal = HermesInternal;
              const typeError = new TypeError("Task \"" + closure_0.name + "\" missing gen or run.");
              reject(typeError);
            }
          }
        }
        if (typeof closure_0 === "function") {
          try {
            closure_0();
            closure_0();
          } catch (tmp4) {
            reject(_mod184.default(tmp4));
          }
        } else {
          const _TypeError = TypeError;
          const typeError1 = new TypeError("Invalid task of type: " + typeof closure_0);
          reject(typeError1);
        }
      });
    });
    const obj = {
      then: null,
      cancel() {
        clearImmediate(dependencyMap);
      }
    };
    const then = promise.then;
    obj.then = then.bind(promise);
    return obj;
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