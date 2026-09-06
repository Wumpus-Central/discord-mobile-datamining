// _runtime/00833_AsyncGenerator.js
class AsyncGenerator {
  constructor(arg0) {
    closure_0 = global;
    resume = function resume(arg0, arg1) {
      try {
        const iter = applyArgumentsResult[arg0](arg1);
        let next = iter;
        let value = iter.value;
        c2 = value;
        const tmp7 = value instanceof applyArgumentsResult(_undefined[0]);
        closure_3 = tmp7;
        if (tmp7) {
          let v = value.v;
        } else {
          v = value;
        }
        const resolved = Promise.resolve(v);
        resolved.then(
          (done) => {
            let value = done;
            if (callback) {
              let str = "next";
              if ("return" === dependencyMap) {
                str = "return";
              }
              if (_null.k) {
                if (!done.done) {
                  value = dependencyMap[str](done).value;
                }
              }
              callback(str, done);
            }
            let str3 = "normal";
            if (next.done) {
              str3 = "return";
            }
            if ("return" === str3) {
              let obj = { value: null, done: true };
              obj[0] = value;
              next.resolve(obj);
            } else if ("throw" === str3) {
              next.reject(value);
            } else {
              obj = { value: null, done: false };
              obj[0] = value;
              next.resolve(obj);
            }
            next = next.next;
            if (next) {
              callback(next.key, next.arg);
            } else {
              _null = null;
            }
          },
          (arg0) => {
            callback("throw", arg0);
          },
        );
      } catch (tmp10) {
        settle("throw", tmp10);
      }
    };
    settle = function settle(arg0, arg1) {
      if ("return" === arg0) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        next.resolve(obj);
      } else if ("throw" === arg0) {
        next.reject(arg1);
      } else {
        obj = { value: null, done: false };
        obj[0] = arg1;
        next.resolve(obj);
      }
      next = next.next;
      if (next) {
        resume(next.key, next.arg);
      } else {
        c2 = null;
      }
    };
    this._invoke = (arg0, arg1) => {
      closure_0 = arg0;
      return new Promise((resolve, reject) => {
        obj = { key: closure_0, arg: obj, resolve, reject, next: null };
        if (obj) {
          obj.next = obj;
        } else {
          closure_1_3(tmp, tmp2);
        }
      });
    };
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
AsyncGenerator.prototype[str] = function () {
  return this;
};

export default function _wrapAsyncGenerator(arg0) {
  closure_0 = arg0;
  return function () {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    let obj = Object.create(closure_1_2.prototype);
    closure_0 = applyArgumentsResult;
    c1 = undefined;
    c2 = undefined;
    function resume(arg0, arg1) {
      try {
        const iter = applyArgumentsResult[arg0](arg1);
        let next = iter;
        let value = iter.value;
        c2 = value;
        const tmp7 = value instanceof applyArgumentsResult(_undefined[0]);
        closure_3 = tmp7;
        if (tmp7) {
          let v = value.v;
        } else {
          v = value;
        }
        const resolved = Promise.resolve(v);
        resolved.then(
          (done) => {
            let value = done;
            if (callback) {
              let str = "next";
              if ("return" === dependencyMap) {
                str = "return";
              }
              if (_null.k) {
                if (!done.done) {
                  value = dependencyMap[str](done).value;
                }
              }
              callback(str, done);
            }
            let str3 = "normal";
            if (next.done) {
              str3 = "return";
            }
            if ("return" === str3) {
              let obj = { value: null, done: true };
              obj[0] = value;
              next.resolve(obj);
            } else if ("throw" === str3) {
              next.reject(value);
            } else {
              obj = { value: null, done: false };
              obj[0] = value;
              next.resolve(obj);
            }
            next = next.next;
            if (next) {
              callback(next.key, next.arg);
            } else {
              _null = null;
            }
          },
          (arg0) => {
            callback("throw", arg0);
          },
        );
      } catch (tmp10) {
        settle("throw", tmp10);
      }
    }
    function settle(arg0, arg1) {
      if ("return" === arg0) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        next.resolve(obj);
      } else if ("throw" === arg0) {
        next.reject(arg1);
      } else {
        obj = { value: null, done: false };
        obj[0] = arg1;
        next.resolve(obj);
      }
      next = next.next;
      if (next) {
        resume(next.key, next.arg);
      } else {
        c2 = null;
      }
    }
    obj._invoke = (arg0, arg1) => {
      closure_0 = arg0;
      return new Promise((resolve, reject) => {
        obj = { key: closure_0, arg: obj, resolve, reject, next: null };
        if (obj) {
          obj.next = obj;
        } else {
          closure_1_3(tmp, tmp2);
        }
      });
    };
    if (typeof applyArgumentsResult.return !== "function") {
      obj.return = undefined;
    }
    return obj;
  };
}
