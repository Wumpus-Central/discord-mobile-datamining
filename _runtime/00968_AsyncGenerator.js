// _runtime/00968_AsyncGenerator.js
class AsyncGenerator {
  constructor(arg0) {
    closure_0 = global;
    resume = function resume(arg0, arg1) {
      try {
        const iter = applyArgumentsResult[arg0](arg1);
        let value = iter.value;
        let c2 = value;
        const tmp7 = value instanceof applyArgumentsResult(_undefined[0]);
        const resume = tmp7;
        if (tmp7) {
          let v = value.v;
        } else {
          v = value;
        }
        const resolved = Promise.resolve(v);
        resolved.then((done) => {
          let value = done;
          if (tmp7) {
            let str = "next";
            if ("return" === dependencyMap) {
              str = "return";
            }
            if (value.k) {
              if (!done.done) {
                value = dependencyMap[str](done).value;
              }
            }
            tmp7(str, done);
          }
          let str3 = "normal";
          if (iter.done) {
            str3 = "return";
          }
          if ("return" === str3) {
            let obj = { value: null, done: true };
            obj[0] = value;
            iter.resolve(obj);
          } else if ("throw" === str3) {
            iter.reject(value);
          } else {
            obj = { value: null, done: false };
            obj[0] = value;
            iter.resolve(obj);
          }
          const next = iter.next;
          if (next) {
            tmp7(next.key, iter.arg);
          } else {
            value = null;
          }
        }, (arg0) => {
          tmp7("throw", arg0);
        });
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
        let c2 = null;
      }
    };
    this._invoke = (arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      return new Promise((resolve, reject) => {
        const obj = { key: closure_0, arg: closure_1, resolve, reject, next: null };
        if (outer1_2) {
          outer1_2.next = obj;
          outer1_2 = obj;
        } else {
          outer1_2 = obj;
          closure_1 = obj;
          outer1_3(tmp, tmp2);
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
AsyncGenerator.prototype[str] = function() {
  return this;
};

export default function _wrapAsyncGenerator(arg0) {
  let closure_0 = arg0;
  return function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    let obj = Object.create(outer1_2.prototype);
    closure_0 = applyArgumentsResult;
    let c1;
    let c2;
    function resume(arg0, arg1) {
      try {
        const iter = applyArgumentsResult[arg0](arg1);
        let value = iter.value;
        let c2 = value;
        const tmp7 = value instanceof applyArgumentsResult(_undefined[0]);
        const resume = tmp7;
        if (tmp7) {
          let v = value.v;
        } else {
          v = value;
        }
        const resolved = Promise.resolve(v);
        resolved.then((done) => {
          let value = done;
          if (tmp7) {
            let str = "next";
            if ("return" === dependencyMap) {
              str = "return";
            }
            if (value.k) {
              if (!done.done) {
                value = dependencyMap[str](done).value;
              }
            }
            tmp7(str, done);
          }
          let str3 = "normal";
          if (iter.done) {
            str3 = "return";
          }
          if ("return" === str3) {
            let obj = { value: null, done: true };
            obj[0] = value;
            iter.resolve(obj);
          } else if ("throw" === str3) {
            iter.reject(value);
          } else {
            obj = { value: null, done: false };
            obj[0] = value;
            iter.resolve(obj);
          }
          const next = iter.next;
          if (next) {
            tmp7(next.key, iter.arg);
          } else {
            value = null;
          }
        }, (arg0) => {
          tmp7("throw", arg0);
        });
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
        let c2 = null;
      }
    }
    obj._invoke = (arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      return new Promise((resolve, reject) => {
        const obj = { key: closure_0, arg: closure_1, resolve, reject, next: null };
        if (outer1_2) {
          outer1_2.next = obj;
          outer1_2 = obj;
        } else {
          outer1_2 = obj;
          closure_1 = obj;
          outer1_3(tmp, tmp2);
        }
      });
    };
    if (typeof applyArgumentsResult.return !== "function") {
      obj.return = undefined;
    }
    return obj;
  };
};