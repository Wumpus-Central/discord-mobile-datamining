// _runtime/00187_queueMicrotask.js
let resolved;

export default function queueMicrotask(flush) {
  if (arguments.length < 1) {
    const _TypeError2 = TypeError;
    const self3 = this;
    const self4 = this;
    const typeError = new TypeError("queueMicrotask must be called with at least one argument (a function to call)");
    throw typeError;
  } else if (typeof flush !== "function") {
    const _TypeError = TypeError;
    const self = this;
    const self2 = this;
    const typeError1 = new TypeError("The argument to queueMicrotask must be a function.");
    throw typeError1;
  } else {
    let promise = resolved;
    if (!promise) {
      resolved = Promise.resolve();
      promise = resolved;
    }
    const nextPromise = promise.then(flush);
    nextPromise.catch((error) => {
      let closure_0 = error;
      return setTimeout(() => {
        throw error;
      }, 0);
    });
  }
}
