// _runtime/metro/04926__.js
let tmp7;
const f136752 = (item) => {
  let closure_0 = item;
  obj4[item] = function (arg0) {
    return this._invoke(closure_0, arg0);
  };
};
function enqueue(arg0, arg1) {
  const f154620 = (arg0, fn) => {
    const f151036 = (result) => {
      const tmp2 = closure_1_10(closure_2_0.next, closure_2_0, result);
      const tmp = closure_1;
      if ("throw" !== tmp2.type) {
        const value = tmp2.arg.value;
        iter = tmp2.arg;
        if (value) {
          if (typeof value === "object") {
            if (closure_0.call(value, "__await")) {
              const resolved = Promise.resolve(value.__await);
              resolved.then(f151036, f151037);
            }
          }
        }
        const resolved1 = Promise.resolve(value);
        resolved1.then((value) => {
          iter.value = value;
          closure_0(iter);
        }, f151039);
      } else {
        tmp(tmp2.arg);
      }
    };
    const f151037 = (arg0) => {
      const tmp2 = closure_1_10(closure_2_0.throw, closure_2_0, arg0);
      const tmp = closure_1;
      if ("throw" !== tmp2.type) {
        const value = tmp2.arg.value;
        iter = tmp2.arg;
        if (value) {
          if (typeof value === "object") {
            if (closure_0.call(value, "__await")) {
              const resolved = Promise.resolve(value.__await);
              resolved.then(f151036, f151037);
            }
          }
        }
        const resolved1 = Promise.resolve(value);
        resolved1.then((value) => {
          iter.value = value;
          closure_0(iter);
        }, f151039);
      } else {
        tmp(tmp2.arg);
      }
    };
    const f151039 = (arg0) => {
      let tmp4;
      const tmp2 = closure_1_10(closure_2_0.throw, closure_2_0, arg0);
      const tmp = closure_1;
      if ("throw" !== tmp2.type) {
        const value = tmp2.arg.value;
        iter = tmp2.arg;
        if (value) {
          if (typeof value === "object") {
            if (closure_0.call(value, "__await")) {
              const resolved = Promise.resolve(value.__await);
              nextPromise = resolved.then(f151036, f151037);
            }
            tmp4 = nextPromise;
          }
        }
        const resolved1 = Promise.resolve(value);
        nextPromise = resolved1.then((value) => {
          iter.value = value;
          closure_0(iter);
        }, f151039);
      } else {
        tmp(tmp2.arg);
      }
      return tmp4;
    };
    closure_0 = arg0;
    closure_1 = fn;
    let tmp = closure_1_10(closure_0[closure_1_0], closure_0, nextPromise);
    if ("throw" !== tmp.type) {
      let iter = tmp.arg;
      let value = iter.value;
      if (value) {
        if (typeof value === "object") {
          if (closure_1_0.call(value, "__await")) {
            let resolved = Promise.resolve(value.__await);
            nextPromise = resolved.then(f151036, f151037);
          }
        }
      }
      let resolved1 = Promise.resolve(value);
      resolved1.then((value) => {
        iter.value = value;
        closure_0(iter);
      }, f151039);
    } else {
      let tmp2 = fn(tmp.arg);
    }
  };
  closure_0 = arg0;
  let nextPromise = arg1;
  let promise = nextPromise;
  if (promise) {
    function callInvokeWithMethodAndArg() {
      const promise = new Promise(f154620);
      return promise;
    }
    nextPromise = promise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg);
  } else {
    let tmp = globalThis;
    const _Promise = Promise;
    const self = this;
    const self2 = this;
    nextPromise = new Promise(f154620);
  }
  return nextPromise;
}
let tmp = globalThis;
if (!tmp) {
  const _Function = Function;
  const str = "return this";
  tmp = Function("return this")();
}
function tryCatch(call, arg1, arg2) {
  try {
    const obj = { type: "normal", arg: call.call(arg1, arg2) };
    return obj;
  } catch (tmp4) {
    return { type: "throw", arg: tmp4 };
  }
}
class Generator {
  constructor() {}
}
class GeneratorFunction {
  constructor() {}
}
class GeneratorFunctionPrototype {
  constructor() {}
}
class AsyncIterator {
  constructor(arg0) {
    let closure_0 = arg0;
    this._invoke = enqueue;
  }
}
function maybeInvokeDelegate(iterator, method) {
  if (iterator.iterator[method.method] === undefined) {
    method.delegate = null;
    if ("throw" === method.method) {
      if (iterator.iterator.return) {
        method.method = "return";
        method.arg = undefined;
        maybeInvokeDelegate(iterator, method);
        if ("throw" === method.method) {
          return closure_8;
        }
      }
      method.method = "throw";
      const _TypeError2 = TypeError;
      const self3 = this;
      const self4 = this;
      const typeError = new TypeError("The iterator does not provide a 'throw' method");
      method.arg = typeError;
    }
    return closure_8;
  } else {
    const tmp20 = tryCatch(iterator.iterator[method.method], iterator.iterator, method.arg);
    if ("throw" === tmp20.type) {
      method.method = "throw";
      method.arg = tmp20.arg;
      method.delegate = null;
      return closure_8;
    } else {
      let tmp6;
      if (tmp20.arg) {
        let tmp7 = iter;
        if (tmp20.arg.done) {
          method[iterator.resultName] = tmp20.arg.value;
          method.next = iterator.nextLoc;
          if ("return" !== method.method) {
            method.method = "next";
            method.arg = undefined;
          }
          method.delegate = null;
          tmp7 = closure_8;
        }
        tmp6 = tmp7;
      } else {
        method.method = "throw";
        const _TypeError = TypeError;
        const self = this;
        const self2 = this;
        const typeError1 = new TypeError("iterator result is not an object");
        method.arg = typeError1;
        method.delegate = null;
        tmp6 = closure_8;
      }
      return tmp6;
    }
  }
}
function pushTryEntry(tryLoc) {
  const obj = { tryLoc: tryLoc[0] };
  if (1 in tryLoc) {
    obj.catchLoc = tryLoc[1];
  }
  if (2 in tryLoc) {
    obj.finallyLoc = tryLoc[2];
    obj.afterLoc = tryLoc[3];
  }
  const tryEntries = this.tryEntries;
  tryEntries.push(obj);
}
function resetTryEntry(completion) {
  const tmp = completion.completion || {};
  tmp.type = "normal";
  delete tmp["arg"];
  completion.completion = tmp;
}
class Context {
  constructor(arr) {
    const items = [{ tryLoc: "root" }];
    this.tryEntries = items;
    const item = arr.forEach(pushTryEntry, this);
    this.reset(true);
  }
}
function doneResult() {
  return { value: "IconComponent", done: null };
}
const hasOwnProperty = prototype.hasOwnProperty;
let tmp2 = typeof Symbol === "function" ? Symbol : {};
let tmp3 = tmp2.iterator || "@@iterator";
let closure_1 = tmp3;
let tmp4 = tmp2.asyncIterator || "@@asyncIterator";
let tmp5 = tmp2.toStringTag || "@@toStringTag";
let closure_2 = tmp5;
let regeneratorRuntime = tmp.regeneratorRuntime;
if (regeneratorRuntime) {
  if (typeof module === "object") {
    module.exports = regeneratorRuntime;
  }
} else {
  let tmp6 = typeof module === "object" ? module.exports : {};
  tmp.regeneratorRuntime = tmp6;
  regeneratorRuntime = tmp6;
  tmp6.wrap = function wrap(arg0, arg1, arg2, arg3) {
    let items = arg3;
    const tmp = arg1 || Generator;
    const obj2 = Object.create(tmp.prototype);
    if (!arg3) {
      items = [];
    }
    const obj = Object.create(Context.prototype);
    const items1 = [{ tryLoc: "root" }];
    obj.tryEntries = items1;
    const item = items.forEach(pushTryEntry, obj);
    obj.reset(true);
    let closure_0 = arg0;
    closure_1 = arg2;
    let closure_3 = closure_4;
    obj2._invoke = function invoke(method, arg) {
      let iter;
      if (closure_3 === metroRequire) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("Generator is already running");
        throw error;
      } else if (tmp === metroImportDefault) {
        if ("throw" === method) {
          throw arg;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        obj.method = method;
        obj.arg = arg;
        while (true) {
          iter = obj;
          let delegate = obj.delegate;
          if (delegate) {
            let tmp3 = maybeInvokeDelegate(delegate, iter);
            if (tmp3) {
              if (tmp3 === closure_8) {
                continue;
              } else {
                return tmp3;
              }
            }
          }
          if ("next" === iter.method) {
            arg = iter.arg;
            iter._sent = arg;
            iter.sent = arg;
          } else if ("throw" === iter.method) {
            if (closure_3 === React3) {
              break;
            } else {
              let dispatchExceptionResult = iter.dispatchException(iter.arg);
            }
          } else if ("return" === iter.method) {
            let abruptResult = iter.abrupt("return", iter.arg);
          }
          closure_3 = metroRequire;
          let tmp13 = tryCatch(closure_0, closure_1, iter);
          if ("normal" === tmp13.type) {
            closure_3 = iter.done ? metroImportDefault : hasOwnProperty;
            if (tmp13.arg === closure_8) {
              continue;
            } else {
              obj = { value: tmp13.arg, done: iter.done };
              return obj;
            }
          } else {
            if ("throw" !== tmp13.type) {
              continue;
            } else {
              closure_3 = metroImportDefault;
              iter.method = "throw";
              iter.arg = tmp13.arg;
              continue;
            }
            continue;
          }
          continue;
        }
        closure_3 = metroImportDefault;
        throw iter.arg;
      }
    };
    return obj2;
  };
  class Generator {
    constructor() {}
  }
  class GeneratorFunction {
    constructor() {}
  }
  let str4 = "executing";
  class GeneratorFunctionPrototype {
    constructor() {}
  }
  let str5 = "completed";
  class AsyncIterator {
    constructor(arg0) {
      let closure_0 = arg0;
      this._invoke = enqueue;
    }
  }
  let closure_8 = {};
  let obj = {};
  obj[tmp3] = function () {
    return this;
  };
  let _Object = Object;
  class Context {
    constructor(arr) {
      const items = [{ tryLoc: "root" }];
      this.tryEntries = items;
      const item = arr.forEach(pushTryEntry, this);
      this.reset(true);
    }
  }
  let tmp7Result = tmp7;
  if (tmp7Result) {
    let callResult;
    let items = [];
    let obj2 = items[tmp3];
    if (obj2) {
      callResult = obj2.call(items);
    } else {
      callResult = items;
      if (typeof items.next !== "function") {
        let _isNaN = isNaN;
        if (isNaN(items.length)) {
          callResult = { next: doneResult };
          const obj3 = { next: doneResult };
        } else {
          let c1 = -1;
          function next() {
            closure_1 = closure_1 + 1;
            if (closure_1 < next.length) {
              while (true) {
                if (hasOwnProperty.call(next, closure_1)) {
                  break;
                } else {
                  let sum1 = closure_1 + 1;
                  closure_1 = sum1;
                }
              }
              next.value = next[closure_1];
              next.done = false;
              return next;
            }
            next.value = undefined;
            next.done = true;
            return next;
          }
          next.next = next;
          class Generator {
            constructor() {}
          }
        }
      }
    }
    tmp7Result = tmp7(tmp7(callResult));
  }
  const tmp10 = tmp7Result && tmp7Result !== prototype && hasOwnProperty.call(tmp7Result, tmp3);
  if (tmp10) {
    obj = tmp7Result;
  }
  const _Object2 = Object;
  function values(next) {
    let closure_0 = next;
    if (closure_0) {
      if (next[c1]) {
        return next[c1].call(next);
      } else if (typeof next.next === "function") {
        return next;
      } else {
        const _isNaN = isNaN;
        if (!isNaN(next.length)) {
          c1 = -1;
          next = function next() {
            closure_1 = closure_1 + 1;
            if (closure_1 < next.length) {
              while (true) {
                if (hasOwnProperty.call(next, closure_1)) {
                  break;
                } else {
                  let sum1 = closure_1 + 1;
                  closure_1 = sum1;
                }
              }
              next.value = next[closure_1];
              next.done = false;
              return next;
            }
            next.value = undefined;
            next.done = true;
            return next;
          };
          next.next = next;
          return next;
        }
      }
    }
    return { next };
  }
  const obj4 = Object.create(obj);
  Generator.prototype = obj4;
  GeneratorFunctionPrototype.prototype = obj4;
  obj4.constructor = GeneratorFunctionPrototype;
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  let str6 = "GeneratorFunction";
  GeneratorFunction.displayName = "GeneratorFunction";
  GeneratorFunctionPrototype[tmp5] = "GeneratorFunction";
  tmp6.isGeneratorFunction = (fn) => {
    let constructor = typeof fn === "function";
    if (typeof fn === "function") {
      constructor = fn.constructor;
    }
    let tmp = constructor;
    if (tmp) {
      let tmp3 = constructor === GeneratorFunction;
      if (!tmp3) {
        tmp3 = "GeneratorFunction" === (constructor.displayName || constructor.name);
      }
      tmp = tmp3;
    }
    return tmp;
  };
  tmp6.mark = (arg0) => {
    if (Object.setPrototypeOf) {
      const _Object = Object;
      Object.setPrototypeOf(arg0, GeneratorFunctionPrototype);
    } else {
      arg0.__proto__ = GeneratorFunctionPrototype;
      if (!(closure_2 in arg0)) {
        arg0[tmp2] = "GeneratorFunction";
      }
    }
    arg0.prototype = Object.create(obj4);
    return arg0;
  };
  tmp6.awrap = (__await) => ({ __await });
  let closure_0 = AsyncIterator.prototype;
  let items1 = ["next", "throw", "return"];
  let item = items1.forEach(f136752);
  AsyncIterator.prototype[tmp4] = function () {
    return this;
  };
  tmp6.AsyncIterator = AsyncIterator;
  tmp6.async = (arg0, fn, arg2, arg3) => {
    let tmp3;
    if (!fn) {
      tmp3 = Generator;
    } else {
      tmp3 = fn;
    }
    let items = arg3;
    const obj2 = Object.create(tmp3.prototype);
    if (!arg3) {
      items = [];
    }
    let obj = Object.create(Context.prototype);
    const items1 = [{ tryLoc: "root" }];
    obj.tryEntries = items1;
    const item = items.forEach(pushTryEntry, obj);
    obj.reset(true);
    let closure_0 = arg0;
    closure_1 = arg2;
    regeneratorRuntime = closure_4;
    obj2._invoke = function invoke(method, arg) {
      let iter;
      if (closure_3 === metroRequire) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("Generator is already running");
        throw error;
      } else if (tmp === metroImportDefault) {
        if ("throw" === method) {
          throw arg;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        obj.method = method;
        obj.arg = arg;
        while (true) {
          iter = obj;
          let delegate = obj.delegate;
          if (delegate) {
            let tmp3 = maybeInvokeDelegate(delegate, iter);
            if (tmp3) {
              if (tmp3 === closure_8) {
                continue;
              } else {
                return tmp3;
              }
            }
          }
          if ("next" === iter.method) {
            arg = iter.arg;
            iter._sent = arg;
            iter.sent = arg;
          } else if ("throw" === iter.method) {
            if (closure_3 === React3) {
              break;
            } else {
              let dispatchExceptionResult = iter.dispatchException(iter.arg);
            }
          } else if ("return" === iter.method) {
            let abruptResult = iter.abrupt("return", iter.arg);
          }
          closure_3 = metroRequire;
          let tmp13 = tryCatch(closure_0, closure_1, iter);
          if ("normal" === tmp13.type) {
            closure_3 = iter.done ? metroImportDefault : hasOwnProperty;
            if (tmp13.arg === closure_8) {
              continue;
            } else {
              obj = { value: tmp13.arg, done: iter.done };
              return obj;
            }
          } else {
            if ("throw" !== tmp13.type) {
              continue;
            } else {
              closure_3 = metroImportDefault;
              iter.method = "throw";
              iter.arg = tmp13.arg;
              continue;
            }
            continue;
          }
          continue;
        }
        closure_3 = metroImportDefault;
        throw iter.arg;
      }
    };
    let iter = Object.create(AsyncIterator.prototype);
    let c1;
    iter._invoke = enqueue;
    let nextPromise = iter;
    if (!regeneratorRuntime.isGeneratorFunction(fn)) {
      let nextResult = iter.next();
      nextPromise = nextResult.then((done) => {
        let nextResult;
        if (done.done) {
          nextResult = done.value;
        } else {
          nextResult = iter.next();
        }
        return nextResult;
      });
    }
    return nextPromise;
  };
  const items2 = ["next", "throw", "return"];
  const item1 = items2.forEach(f136752);
  let str7 = "Generator";
  obj4[tmp5] = "Generator";
  obj4[tmp3] = function () {
    return this;
  };
  obj4.toString = () => "[object Generator]";
  tmp6.keys = (obj) => {
    let closure_0 = obj;
    const items = [];
    for (const key10004 in obj) {
      let arr = items.push(key10004);
      continue;
    }
    const reversed = items.reverse();
    next = function next() {
      if (items.length) {
        next.value = items.pop();
        next.done = false;
        items.pop();
        return next;
      }
      next.done = true;
      return next;
    };
    return next;
  };
  tmp6.values = values;
  const obj7 = {
    constructor: Context,
    reset(arg0) {
      const obj = {
        prev: 0,
        next: 0,
        _sent: undefined,
        sent: undefined,
        done: false,
        delegate: null,
        method: "next",
        arg: undefined,
      };
      const tryEntries = obj.tryEntries;
      const item = tryEntries.forEach(resetTryEntry);
      const tmp2 = arg0;
      if (!tmp2) {
        for (const key10018 in obj) {
          let callResult = "t" === key10018.charAt(0) && hasOwnProperty.call(obj, key10018);
          if (callResult) {
            let _isNaN = isNaN;
            callResult = !isNaN(+key10018.slice(1));
          }
          if (!callResult) {
            continue;
          } else {
            obj[key10018] = undefined;
            continue;
          }
          continue;
        }
      }
    },
    stop() {
      this.done = true;
      const completion = this.tryEntries[0].completion;
      if ("throw" === completion.type) {
        throw completion.arg;
      } else {
        return tmp.rval;
      }
    },
    dispatchException(arg) {
      const self = this;
      if (this.done) {
        throw arg;
      } else {
        let diff = self.tryEntries.length - 1;
        if (0 <= diff) {
          const completion = tmp2.completion;
          while ("root" !== self.tryEntries[diff].tryLoc) {
            if (tmp2.tryLoc <= self.prev) {
              let callResult = hasOwnProperty.call(tmp2, "catchLoc");
              let callResult1 = hasOwnProperty.call(tmp2, "finallyLoc");
              if (callResult) {
                if (callResult1) {
                  if (self.prev < tmp2.catchLoc) {
                    let str8 = "throw";
                    completion.type = "throw";
                    completion.arg = arg;
                    self.next = tmp2.catchLoc;
                    let str9 = "next";
                    self.method = "next";
                    self.arg = undefined;
                    let flag3 = true;
                    return true;
                  } else if (self.prev < tmp2.finallyLoc) {
                    let str7 = "throw";
                    completion.type = "throw";
                    completion.arg = arg;
                    self.next = tmp2.finallyLoc;
                    let flag2 = false;
                    return false;
                  }
                }
              }
              if (callResult) {
                if (self.prev < tmp2.catchLoc) {
                  let str5 = "throw";
                  completion.type = "throw";
                  completion.arg = arg;
                  self.next = tmp2.catchLoc;
                  let str6 = "next";
                  self.method = "next";
                  self.arg = undefined;
                  let flag = true;
                  return true;
                }
              } else if (callResult1) {
                if (self.prev < tmp2.finallyLoc) {
                  let str12 = "throw";
                  completion.type = "throw";
                  completion.arg = arg;
                  self.next = tmp2.finallyLoc;
                  let flag5 = false;
                  return false;
                }
              } else {
                let tmp6 = globalThis;
                let _Error = Error;
                let self2 = this;
                let str4 = "try statement without catch or finally";
                let self3 = this;
                let error = new Error("try statement without catch or finally");
                throw error;
              }
            }
            diff = diff - 1;
          }
          completion.type = "throw";
          completion.arg = arg;
          self.next = "end";
          return false;
        }
      }
    },
    abrupt(type, arg) {
      let completeResult;
      const self = this;
      let diff = this.tryEntries.length - 1;
      let tmp2;
      if (0 <= diff) {
        while (true) {
          let tmp3 = self.tryEntries[diff];
          if (tmp3.tryLoc <= self.prev) {
            if (hasOwnProperty.call(tmp3, "finallyLoc")) {
              tmp2 = tmp3;
              if (self.prev < tmp3.finallyLoc) {
                break;
              }
            }
            break;
          }
          diff = diff - 1;
          if (0 > diff) {
            break;
          }
        }
      }
      let tmp5 = tmp2;
      if (tmp5) {
        tmp5 = "break" === type || "continue" === type;
        const tmp6 = "break" === type || "continue" === type;
      }
      if (tmp5) {
        tmp5 = tmp2.tryLoc <= arg;
      }
      if (tmp5) {
        tmp5 = arg <= tmp2.finallyLoc;
      }
      if (tmp5) {
        tmp2 = null;
      }
      const tmp7 = tmp2 ? tmp2.completion : {};
      tmp7.type = type;
      tmp7.arg = arg;
      if (tmp2) {
        self.method = "next";
        self.next = tmp2.finallyLoc;
        completeResult = closure_8;
      } else {
        completeResult = self.complete(tmp7);
      }
      return completeResult;
    },
    complete(type, next) {
      if ("throw" === type.type) {
        throw type.arg;
      } else {
        const self = this;
        if ("break" !== type.type) {
          if ("continue" !== type.type) {
            if ("return" === type.type) {
              const arg = type.arg;
              self.arg = arg;
              self.rval = arg;
              self.method = "return";
              self.next = "end";
            } else {
              const tmp2 = "normal" === type.type && next;
              if (tmp2) {
                self.next = next;
              }
            }
          }
          return closure_8;
        }
        self.next = type.arg;
      }
    },
    finish(arg0) {
      const self = this;
      let diff = this.tryEntries.length - 1;
      if (0 <= diff) {
        while (self.tryEntries[diff].finallyLoc !== arg0) {
          diff = diff - 1;
        }
        self.complete(self.tryEntries[diff].completion, self.tryEntries[diff].afterLoc);
        const tmp5 = self.tryEntries[diff].completion || {};
        tmp5.type = "normal";
        delete tmp5["arg"];
        self.tryEntries[diff].completion = tmp5;
        return closure_8;
      }
    },
    catch: function (arg0) {
      let diff = this.tryEntries.length - 1;
      if (0 <= diff) {
        while (this.tryEntries[diff].tryLoc !== arg0) {
          diff = diff - 1;
        }
        const completion = tmp2.completion;
        let tmp5;
        if ("throw" === completion.type) {
          let completion1 = tmp2.completion;
          const arg = completion.arg;
          if (!completion1) {
            completion1 = {};
          }
          completion1.type = "normal";
          delete obj["arg"];
          this.tryEntries[diff].completion = completion1;
          tmp5 = arg;
        }
        return tmp5;
      }
      const error = new Error("illegal catch attempt");
      throw error;
    },
    delegateYield(next, resultName, nextLoc) {
      let callResult;
      let sum;
      if (!next) {
        callResult = { next };
        const obj2 = { next };
      } else if (next[closure_1]) {
        callResult = obj.call(next);
      } else {
        callResult = next;
        if (typeof next.next !== "function") {
          const _isNaN = isNaN;
          if (!isNaN(next.length)) {
            closure_1 = -1;
            next = function next() {
              closure_1 = closure_1 + 1;
              if (closure_1 < next.length) {
                while (true) {
                  if (hasOwnProperty.call(next, closure_1)) {
                    break;
                  } else {
                    let sum1 = closure_1 + 1;
                    closure_1 = sum1;
                  }
                }
                next.value = next[closure_1];
                next.done = false;
                return next;
              }
              next.value = undefined;
              next.done = true;
              return next;
            };
            next.next = next;
            callResult = next;
          }
        }
      }
      this.delegate = { iterator: callResult, resultName, nextLoc };
      if ("next" === this.method) {
        tmp4.arg = undefined;
      }
      return closure_8;
    },
  };
  Context.prototype = obj7;
}
