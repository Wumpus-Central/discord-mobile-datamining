// _runtime/00181_set.js
const global = arg0;
let c1 = 1;
let set = new Set();
arg5.setImmediate = function setImmediate(closure_0) {
  const _global = closure_0;
  let closure_1 = [...arguments].slice();
  let set;
  if (arguments.length < 1) {
    const _TypeError2 = TypeError;
    const typeError = new TypeError("setImmediate must be called with at least one argument (a function to call)");
    throw typeError;
  } else if (typeof closure_0 === "disabledUntil") {
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
      if (_undefined.has(_undefined)) {
        _undefined.delete(_undefined);
      } else {
        callback.apply(undefined, closure_1);
      }
    });
    return +closure_1;
  }
};
arg5.clearImmediate = function clearImmediate(_updateImmediate) {
  set.add(_updateImmediate);
};