// _runtime/00844__wrapAsyncGenerator.js
class AsyncGenerator {
  constructor(arg0) {
    let closure_0 = arg0;
    function resume(arg0, arg1) {
      applyResult = arg0;
      try {
        let v;
        const iter = applyResult[arg0](arg1);
        let value = iter.value;
        let obj = value;
        const tmp6 = value instanceof applyResult(next[0]);
        let closure_3 = tmp6;
        if (tmp6) {
          v = value.v;
        } else {
          v = value;
        }
        const resolveResult = resolve(v);
        resolveResult.then(
          (done) => {
            let obj;
            value = done;
            if (closure_3) {
              let str = "next";
              if ("return" === closure_0) {
                str = "return";
              }
              if (value.k) {
                if (!done.done) {
                  value = applyResult[str](done).value;
                }
              }
              resume(str, done);
            }
            let str3 = "normal";
            if (iter.done) {
              str3 = "return";
            }
            if ("return" === str3) {
              const obj2 = { value, done: true };
              next.resolve(obj2);
            } else if ("throw" === str3) {
              next.reject(value);
            } else {
              obj = { value, done: false };
              next.resolve(obj);
            }
            next = next.next;
            if (next) {
              resume(next.key, next.arg);
            } else {
              obj = null;
            }
          },
          (arg0) => {
            closure_3("throw", arg0);
          },
        );
      } catch (tmp9) {
        let str = "throw";
        settle("throw", tmp9);
      }
    }
    function settle(arg0, value) {
      let obj;
      if ("return" === arg0) {
        const obj2 = { value, done: true };
        next.resolve(obj2);
      } else if ("throw" === arg0) {
        next.reject(value);
      } else {
        obj = { value, done: false };
        next.resolve(obj);
      }
      next = next.next;
      if (next) {
        resume(next.key, next.arg);
      } else {
        obj = null;
      }
    }
    this._invoke = (key, arg) => {
      let closure_1;
      const promise = new Promise((resolve, reject) => {
        next = { key, arg, resolve, reject, next: null };
        if (next) {
          next.next = next;
        } else {
          resume(tmp, tmp2);
        }
      });
      return promise;
    };
    if (typeof arg0.return !== "function") {
      tmp.return = undefined;
    }
  }
  next(arg0) {
    return this._invoke("next", arg0);
  }
  throw(arg0) {
    return this._invoke("throw", arg0);
  }
  return(arg0) {
    return this._invoke("return", arg0);
  }
}
let str = typeof Symbol === "function";
const prototype = AsyncGenerator.prototype;
if (typeof Symbol === "function") {
  const _Symbol = Symbol;
  str = Symbol.asyncIterator;
}
if (!str) {
  str = "@@asyncIterator";
}
prototype[str] = function () {
  return this;
};

export default function _wrapAsyncGenerator(arg0) {
  let closure_0 = arg0;
  return function () {
    let applyResult = closure_0(...arguments);
    Object.create(AsyncGenerator.prototype);
    let next;
    let obj;
    function resume(arg0, arg1) {
      applyResult = arg0;
      try {
        let v;
        const iter = applyResult[arg0](arg1);
        let value = iter.value;
        let obj = value;
        const tmp6 = value instanceof applyResult(next[0]);
        let closure_3 = tmp6;
        if (tmp6) {
          v = value.v;
        } else {
          v = value;
        }
        const resolveResult = resolve(v);
        resolveResult.then(
          (done) => {
            let obj;
            value = done;
            if (closure_3) {
              let str = "next";
              if ("return" === closure_0) {
                str = "return";
              }
              if (value.k) {
                if (!done.done) {
                  value = applyResult[str](done).value;
                }
              }
              resume(str, done);
            }
            let str3 = "normal";
            if (iter.done) {
              str3 = "return";
            }
            if ("return" === str3) {
              const obj2 = { value, done: true };
              next.resolve(obj2);
            } else if ("throw" === str3) {
              next.reject(value);
            } else {
              obj = { value, done: false };
              next.resolve(obj);
            }
            next = next.next;
            if (next) {
              resume(next.key, next.arg);
            } else {
              obj = null;
            }
          },
          (arg0) => {
            closure_3("throw", arg0);
          },
        );
      } catch (tmp9) {
        let str = "throw";
        settle("throw", tmp9);
      }
    }
    function settle(arg0, value) {
      let obj;
      if ("return" === arg0) {
        const obj2 = { value, done: true };
        next.resolve(obj2);
      } else if ("throw" === arg0) {
        next.reject(value);
      } else {
        obj = { value, done: false };
        next.resolve(obj);
      }
      next = next.next;
      if (next) {
        resume(next.key, next.arg);
      } else {
        obj = null;
      }
    }
    obj._invoke = (key, arg) => {
      let closure_1;
      const promise = new Promise((resolve, reject) => {
        next = { key, arg, resolve, reject, next: null };
        if (next) {
          next.next = next;
        } else {
          resume(tmp, tmp2);
        }
      });
      return promise;
    };
    if (typeof applyResult.return !== "function") {
      obj.return = undefined;
    }
    return obj;
  };
}
