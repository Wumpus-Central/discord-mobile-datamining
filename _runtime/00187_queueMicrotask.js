// === Module 187: queueMicrotask ===

// Module 187 (queueMicrotask)

export default function queueMicrotask(fn) {
  if (arguments.length < 1) {
    const _TypeError2 = TypeError;
    const typeError = new TypeError("queueMicrotask must be called with at least one argument (a function to call)");
    throw typeError;
  } else if (typeof fn !== "function") {
    const _TypeError = TypeError;
    const typeError1 = new TypeError("The argument to queueMicrotask must be a function.");
    throw typeError1;
  } else {
    let promise = resolved;
    if (!resolved) {
      resolved = Promise.resolve();
      promise = resolved;
    }
    promise.then(fn).catch((error) => {
      closure_0 = error;
      return setTimeout(() => {
        throw closure_0;
      }, 0);
    });
  }
};