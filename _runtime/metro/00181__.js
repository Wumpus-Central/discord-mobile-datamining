// _runtime/metro/00181__.js
const global = arg0;
let c1 = 1;
let set = new Set();

export const setImmediate = function setImmediate(flushQueue) {
  _global = flushQueue;
  closure_1 = [...arguments].slice();
  set = undefined;
  if (arguments.length < 1) {
    const _TypeError2 = TypeError;
    const typeError = new TypeError("setImmediate must be called with at least one argument (a function to call)");
    throw typeError;
  } else if (typeof flushQueue !== "function") {
    const _TypeError = TypeError;
    const typeError1 = new TypeError("The first argument to setImmediate must be a function.");
    throw typeError1;
  } else {
    closure_1 = tmp15 + 1;
    set = tmp15;
    if (set.has(+closure_1)) {
      set.delete(tmp15);
    }
    _global.queueMicrotask(() => {
      if (set.has(closure_2)) {
        set.delete(closure_2);
      } else {
        closure_0.apply(undefined, closure_1);
      }
    });
    return +closure_1;
  }
};
export const clearImmediate = function clearImmediate(_updateImmediate) {
  set.add(_updateImmediate);
};
