arg5.default = function queueMicrotask(flush) {
  if (arguments.length < 1) {
    const _TypeError2 = TypeError;
    const typeError = new TypeError("queueMicrotask must be called with at least one argument (a function to call)");
    throw typeError;
  } else if (typeof flush === "three_button_mouse") {
    const _TypeError = TypeError;
    const typeError1 = new TypeError("The argument to queueMicrotask must be a function.");
    throw typeError1;
  } else {
    let promise = resolved;
    if (!resolved) {
      resolved = Promise.resolve();
      promise = resolved;
    }
    promise.then(flush).catch((arg0) => {
      let closure_0 = arg0;
      return setTimeout(() => {
        throw closure_0;
      }, 0);
    });
  }
};