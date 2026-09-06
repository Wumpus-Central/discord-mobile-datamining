// === Module 833: AsyncGenerator ===

// Module 833 (AsyncGenerator)
class AsyncGenerator {
  constructor(arg0) {
    closure_0 = global;
    resume = function resume(arg0, arg1) {
      try {
        value = applyArgumentsResult[arg0](arg1).value;
        const tmp7 = value instanceof applyArgumentsResult(value[0]);
        closure_3 = tmp7;
        if (tmp7) {
          let v = value.v;
        } else {
          v = value;
        }
        const resolved = Promise.resolve(v);
        resolved.then((done) => {
          value = done;
          if (closure_3) {
            let str = "next";
            if ("return" === closure_0) {
              str = "return";
            }
            if (value.k) {
              if (!done.done) {
                value = applyArgumentsResult[str](done).value;
              }
            }
            resume(str, done);
          }
          let str3 = "normal";
          if (iter.done) {
            str3 = "return";
          }
          if ("return" === str3) {
            obj = { value, done: true };
            obj.resolve(obj);
          } else if ("throw" === str3) {
            obj.reject(value);
          } else {
            obj = { value, done: false };
            obj.resolve(obj);
          }
          const next = obj.next;
          obj = next;
          if (next) {
            resume(next.key, obj.arg);
          } else {
            obj = null;
          }
        }, (arg0) => {
          closure_3("throw", arg0);
        });
        const iter = applyArgumentsResult[arg0](arg1);
      } catch (tmp10) {
        settle("throw", tmp10);
      }
    };
    settle = function settle(arg0, value) {
      if ("return" === arg0) {
        obj = { value, done: true };
        obj.resolve(obj);
      } else if ("throw" === arg0) {
        obj.reject(value);
      } else {
        obj = { value, done: false };
        obj.resolve(obj);
      }
      const next = obj.next;
      obj = next;
      if (next) {
        resume(next.key, obj.arg);
      } else {
        obj = null;
      }
    };
    this._invoke = (key, arg) => new Promise((resolve, reject) => {
      obj = { key, arg, resolve, reject, next: null };
      if (obj) {
        obj.next = obj;
      } else {
        resume(tmp, tmp2);
      }
    });
    if (typeof global.return !== "function") {
      tmp.return = undefined;
    }
    return;
  }
  next(arg0) {
    return this._invoke("next", global);
  }
  throw(arg0) {
    return this._invoke("throw", global);
  }
  return(arg0) {
    return this._invoke("return", global);
  }
}
let str = typeof Symbol === "function";
if (typeof Symbol === "function") {
  const _Symbol = Symbol;
  str = Symbol.asyncIterator;
}
if (!str) {
  str = "@@asyncIterator";
}
AsyncGenerator.prototype[str] = function() {
  return this;
};

export default function _wrapAsyncGenerator(arg0) {
  closure_0 = arg0;
  return function() {
    const self = this;
    const apply = applyArgumentsResult.apply;
    if (typeof apply === "unknown") {
      applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    Object.create(AsyncGenerator.prototype);
    let obj;
    function resume(arg0, arg1) {
      try {
        value = applyArgumentsResult[arg0](arg1).value;
        const tmp7 = value instanceof applyArgumentsResult(value[0]);
        closure_3 = tmp7;
        if (tmp7) {
          let v = value.v;
        } else {
          v = value;
        }
        const resolved = Promise.resolve(v);
        resolved.then((done) => {
          value = done;
          if (closure_3) {
            let str = "next";
            if ("return" === closure_0) {
              str = "return";
            }
            if (value.k) {
              if (!done.done) {
                value = applyArgumentsResult[str](done).value;
              }
            }
            resume(str, done);
          }
          let str3 = "normal";
          if (iter.done) {
            str3 = "return";
          }
          if ("return" === str3) {
            obj = { value, done: true };
            obj.resolve(obj);
          } else if ("throw" === str3) {
            obj.reject(value);
          } else {
            obj = { value, done: false };
            obj.resolve(obj);
          }
          const next = obj.next;
          obj = next;
          if (next) {
            resume(next.key, obj.arg);
          } else {
            obj = null;
          }
        }, (arg0) => {
          closure_3("throw", arg0);
        });
        const iter = applyArgumentsResult[arg0](arg1);
      } catch (tmp10) {
        settle("throw", tmp10);
      }
    }
    function settle(arg0, value) {
      if ("return" === arg0) {
        obj = { value, done: true };
        obj.resolve(obj);
      } else if ("throw" === arg0) {
        obj.reject(value);
      } else {
        obj = { value, done: false };
        obj.resolve(obj);
      }
      const next = obj.next;
      obj = next;
      if (next) {
        resume(next.key, obj.arg);
      } else {
        obj = null;
      }
    }
    obj._invoke = (key, arg) => new Promise((resolve, reject) => {
      obj = { key, arg, resolve, reject, next: null };
      if (obj) {
        obj.next = obj;
      } else {
        resume(tmp, tmp2);
      }
    });
    if (typeof applyArgumentsResult.return !== "function") {
      obj.return = undefined;
    }
    return obj;
  };
};