// _runtime/00469_reject.js
import _mod38 from "metro/00038__.js";
import _mod184 from "metro/00184__.js";

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
          if (null !== obj) {
            if (typeof obj.gen === "function") {
              obj.gen().then(closure_0, reject);
              const genResult = obj.gen();
            } else if (typeof obj.run === "function") {
              try {
                obj.run();
                closure_0();
              } catch (tmp12) {
                reject(_mod184.default(tmp12));
              }
            } else {
              const _TypeError2 = TypeError;
              const _HermesInternal = HermesInternal;
              const typeError = new TypeError('Task "' + obj.name + '" missing gen or run.');
              reject(typeError);
            }
          }
        }
        if (typeof closure_0 === "function") {
          try {
            obj();
            closure_0();
          } catch (tmp4) {
            reject(_mod184.default(tmp4));
          }
        } else {
          const _TypeError = TypeError;
          const typeError1 = new TypeError("Invalid task of type: " + typeof obj);
          reject(typeError1);
        }
      });
    });
    const obj = {
      then: null,
      cancel() {
        clearImmediate(dependencyMap);
      },
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
      remove() {},
    };
  },
  setDeadline(arg0) {},
};
