// _runtime/00469_toError.js
import _mod38 from "metro/00038__.js";
import toError from "00184_toError.js";

function reject(arg0) {
  let closure_0 = arg0;
  const timerId = setTimeout(() => {
    throw closure_0;
  }, 0);
}

export default {
  Events: { interactionStart: "interactionStart", interactionComplete: "interactionComplete" },
  runAfterInteractions(arg0) {
    let then;
    let closure_0 = arg0;
    const promise = new Promise((arg0) => {
      let closure_1;
      closure_0 = arg0;
      const immediate = setImmediate(function () {
        if (typeof closure_0 === "object") {
          if (null !== closure_0) {
            if (typeof closure_0.gen === "function") {
              const genResult = closure_0.gen();
              genResult.then(closure_0, reject);
            } else if (typeof closure_0.run === "function") {
              try {
                closure_0.run();
                closure_0();
              } catch (tmp12) {
                const obj3 = toError;
                reject(obj3.default(tmp12));
              }
            } else {
              const _TypeError2 = TypeError;
              const _HermesInternal = HermesInternal;
              const self3 = this;
              const self4 = this;
              const typeError = new TypeError('Task "' + closure_0.name + '" missing gen or run.');
              reject(typeError);
            }
          }
        }
        if (typeof closure_0 === "function") {
          try {
            closure_0();
            closure_0();
          } catch (tmp4) {
            const obj2 = toError;
            reject(obj2.default(tmp4));
          }
        } else {
          const _TypeError = TypeError;
          const self = this;
          const self2 = this;
          const typeError1 = new TypeError("Invalid task of type: " + typeof closure_0);
          reject(typeError1);
        }
      });
    });
    const obj = {
      then: then.bind(promise),
      cancel() {
        clearImmediate(dependencyMap);
      },
    };
    then = promise.then;
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
