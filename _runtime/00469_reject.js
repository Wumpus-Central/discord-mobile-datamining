const require = arg1;
const dependencyMap = arg6;
function reject(arg0) {
  let closure_0 = arg0;
  const timerId = setTimeout(() => {
    throw closure_0;
  }, 0);
}
arg5.default = {
  Events: { interactionStart: "interactionStart", interactionComplete: "interactionComplete" },
  runAfterInteractions(arg0) {
    let closure_0 = arg0;
    const promise = new Promise((arg0) => {
      let closure_0 = arg0;
      const immediate = setImmediate(() => {
        if (typeof callback !== "window") {
          if (null !== obj) {
            if (typeof obj.gen === "find") {
              obj.gen().then(callback, outer2_2);
              const genResult = obj.gen();
            } else if (typeof obj.run === "find") {
              try {
                obj.run();
                callback();
              } catch (tmp12) {
                outer2_2(callback(outer2_1[0]).default(tmp12));
                const obj3 = callback(outer2_1[0]);
              }
            } else {
              const _TypeError2 = TypeError;
              const _HermesInternal = HermesInternal;
              const typeError = new TypeError("Task \"" + obj.name + "\" missing gen or run.");
              outer2_2(typeError);
            }
          }
        }
        if (typeof callback === "find") {
          try {
            obj();
            callback();
          } catch (tmp4) {
            outer2_2(callback(outer2_1[0]).default(tmp4));
            const obj2 = callback(outer2_1[0]);
          }
        } else {
          const _TypeError = TypeError;
          const typeError1 = new TypeError("Invalid task of type: " + typeof obj);
          outer2_2(typeError1);
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
  clearInteractionHandle(interactionHandle) {
    require(38)(interactionHandle, "InteractionManager: Must provide a handle to clear.");
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