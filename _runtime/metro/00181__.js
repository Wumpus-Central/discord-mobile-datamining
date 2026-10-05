// _runtime/metro/00181__.js
let _global;

let c1 = 1;
let set = new Set();

export const setImmediate = function setImmediate(flushQueue) {
  let closure_2;
  _global = flushQueue;
  let closure_1 = [...arguments].slice();
  set = undefined;
  if (arguments.length < 1) {
    const _TypeError2 = TypeError;
    const self3 = this;
    const self4 = this;
    const typeError = new TypeError("setImmediate must be called with at least one argument (a function to call)");
    throw typeError;
  } else if (typeof flushQueue !== "function") {
    const _TypeError = TypeError;
    const self = this;
    const self2 = this;
    const typeError1 = new TypeError("The first argument to setImmediate must be a function.");
    throw typeError1;
  } else {
    closure_1 = tmp11 + 1;
    set = tmp11;
    const obj = set;
    if (set.has(+closure_1)) {
      obj.delete(tmp11);
    }
    _global.queueMicrotask(() => {
      if (set.has(closure_2)) {
        set.delete(closure_2);
      } else {
        flushQueue.apply(undefined, closure_1);
      }
    });
    return +closure_1;
  }
};
export const clearImmediate = function clearImmediate(_updateImmediate) {
  set.add(_updateImmediate);
};
