// _runtime/15373__regeneratorRuntime.js
let generatorFunction, hasOwnProperty;

export default function _regeneratorRuntime() {
  let tmp7;
  let values;
  function define(arg0, arg1, value) {
    const obj = { value, enumerable: true, configurable: true, writable: true };
    Object.defineProperty(arg0, arg1, obj);
    return arg0[arg1];
  }
  let define2 = define;
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
    constructor(arg0, arg1) {
      let closure_0 = arg0;
      let closure_1 = arg1;
      function invoke(arg0, _invoke, arg2, fn) {
        closure_0 = arg2;
        const tmp = closure_1_6(closure_0[arg0], closure_0, _invoke);
        if ("throw" !== tmp.type) {
          const iter = tmp.arg;
          const value = iter.value;
          if (value) {
            obj = closure_0(obj[0]);
            if ("object" == obj.default(value)) {
              let nextPromise;
              if (fn.call(value, "__await")) {
                const resolveResult = fn.resolve(value.__await);
                nextPromise = resolveResult.then(
                  (result) => {
                    invoke("next", result, closure_0, fn);
                  },
                  (arg0) => {
                    invoke("throw", arg0, closure_0, fn);
                  },
                );
              }
              return nextPromise;
            }
          }
          const resolveResult1 = fn.resolve(value);
          nextPromise = resolveResult1.then(
            (value) => {
              iter.value = value;
              closure_0(iter);
            },
            (arg0) => invoke("throw", arg0, closure_0, fn),
          );
        } else {
          fn(tmp.arg);
        }
      }
      const obj = {
        value(arg0, arg1) {
          let nextPromise;
          const f154997 = (arg0, arg1) => {
            invoke(closure_1_0, closure_1_1, arg0, arg1);
          };
          closure_0 = arg0;
          closure_1 = arg1;
          if (nextPromise) {
            function callInvokeWithMethodAndArg() {
              const tmp = new _Promise(f154997);
              return tmp;
            }
            nextPromise = promise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg);
          } else {
            let tmp = closure_1;
            const self = this;
            const self2 = this;
            nextPromise = new closure_1(f154997);
          }
          return nextPromise;
        },
      };
      invoke(this, "_invoke", obj);
    }
  }
  function maybeInvokeDelegate(iterator, method) {
    method = method.method;
    if (iterator.iterator[method] === undefined) {
      method.delegate = null;
      let tmp12 = "throw" === method && iterator.iterator.return;
      if (tmp12) {
        method.method = "return";
        method.arg = undefined;
        maybeInvokeDelegate(iterator, method);
        tmp12 = "throw" === method.method;
      }
      if (!tmp12) {
        if ("return" !== method) {
          method.method = "throw";
          const _TypeError2 = TypeError;
          const self3 = this;
          const self4 = this;
          const typeError = new TypeError("The iterator does not provide a '" + method + "' method");
          method.arg = typeError;
        }
      }
      return closure_11;
    } else {
      const tmp20 = tryCatch(iterator.iterator[method], iterator.iterator, method.arg);
      if ("throw" === tmp20.type) {
        method.method = "throw";
        method.arg = tmp20.arg;
        method.delegate = null;
        return closure_11;
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
            tmp7 = closure_11;
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
          tmp6 = closure_11;
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
  hasOwnProperty.exports = function _regeneratorRuntime() {
    return obj;
  };
  let obj = {
    wrap(arg0, arg1, arg2, arg3) {
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
      let closure_1 = arg2;
      closure_3 = suspendedStart;
      const obj4 = {
        value: (method, arg) => {
          let iter;
          if (closure_3 === executing) {
            const _Error = Error;
            throw Error("Generator is already running");
          } else if (tmp === completed) {
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
                  if (tmp3 === closure_11) {
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
                if (closure_3 === suspendedStart) {
                  break;
                } else {
                  let dispatchExceptionResult = iter.dispatchException(iter.arg);
                }
              } else if ("return" === iter.method) {
                let abruptResult = iter.abrupt("return", iter.arg);
              }
              closure_3 = executing;
              let tmp13 = tryCatch(closure_0, closure_1, iter);
              if ("normal" === tmp13.type) {
                closure_3 = iter.done ? completed : suspendedYield;
                if (tmp13.arg === closure_11) {
                  continue;
                } else {
                  obj = { value: tmp13.arg, done: iter.done };
                  return obj;
                }
              } else {
                if ("throw" !== tmp13.type) {
                  continue;
                } else {
                  closure_3 = completed;
                  iter.method = "throw";
                  iter.arg = tmp13.arg;
                  continue;
                }
                continue;
              }
              continue;
            }
            closure_3 = completed;
            throw iter.arg;
          }
        },
      };
      obj(obj2, "_invoke", obj4);
      return obj2;
    },
    isGeneratorFunction: (fn) => {
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
    },
    mark: (arg0) => {
      if (Object.setPrototypeOf) {
        const _Object = Object;
        Object.setPrototypeOf(arg0, GeneratorFunctionPrototype);
      } else {
        arg0.__proto__ = GeneratorFunctionPrototype;
        define2(arg0, closure_4, "GeneratorFunction");
      }
      arg0.prototype = Object.create(obj3);
      return arg0;
    },
    awrap: (__await) => ({ __await }),
    AsyncIterator,
    async: (arg0, fn, arg2, arg3, arg4) => {
      let tmp4;
      let _Promise = arg4;
      if (undefined === arg4) {
        let tmp = globalThis;
        _Promise = Promise;
      }
      if (!fn) {
        tmp4 = Generator;
      } else {
        tmp4 = fn;
      }
      let items = arg3;
      const obj2 = Object.create(tmp4.prototype);
      if (!arg3) {
        items = [];
      }
      let obj = Object.create(Context.prototype);
      const items1 = [{ tryLoc: "root" }];
      obj.tryEntries = items1;
      const item = items.forEach(pushTryEntry, obj);
      obj.reset(true);
      generatorFunction = arg0;
      let closure_1 = arg2;
      closure_3 = suspendedStart;
      obj3 = {
        value: (method, arg) => {
          let iter;
          if (closure_3 === executing) {
            const _Error = Error;
            throw Error("Generator is already running");
          } else if (tmp === completed) {
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
                  if (tmp3 === closure_11) {
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
                if (closure_3 === suspendedStart) {
                  break;
                } else {
                  let dispatchExceptionResult = iter.dispatchException(iter.arg);
                }
              } else if ("return" === iter.method) {
                let abruptResult = iter.abrupt("return", iter.arg);
              }
              closure_3 = executing;
              let tmp13 = tryCatch(closure_0, closure_1, iter);
              if ("normal" === tmp13.type) {
                closure_3 = iter.done ? completed : suspendedYield;
                if (tmp13.arg === closure_11) {
                  continue;
                } else {
                  obj = { value: tmp13.arg, done: iter.done };
                  return obj;
                }
              } else {
                if ("throw" !== tmp13.type) {
                  continue;
                } else {
                  closure_3 = completed;
                  iter.method = "throw";
                  iter.arg = tmp13.arg;
                  continue;
                }
                continue;
              }
              continue;
            }
            closure_3 = completed;
            throw iter.arg;
          }
        },
      };
      obj(obj2, "_invoke", obj3);
      let iter = Object.create(AsyncIterator.prototype);
      let c3;
      function invoke(arg0, _invoke, arg2, fn) {
        closure_0 = arg2;
        const tmp = closure_1_6(closure_0[arg0], closure_0, _invoke);
        if ("throw" !== tmp.type) {
          const iter = tmp.arg;
          const value = iter.value;
          if (value) {
            obj = closure_0(obj[0]);
            if ("object" == obj.default(value)) {
              let nextPromise;
              if (fn.call(value, "__await")) {
                const resolveResult = fn.resolve(value.__await);
                nextPromise = resolveResult.then(
                  (result) => {
                    invoke("next", result, closure_0, fn);
                  },
                  (arg0) => {
                    invoke("throw", arg0, closure_0, fn);
                  },
                );
              }
              return nextPromise;
            }
          }
          const resolveResult1 = fn.resolve(value);
          nextPromise = resolveResult1.then(
            (value) => {
              iter.value = value;
              closure_0(iter);
            },
            (arg0) => invoke("throw", arg0, closure_0, fn),
          );
        } else {
          fn(tmp.arg);
        }
      }
      const obj6 = {
        value(arg0, arg1) {
          let nextPromise;
          const f154997 = (arg0, arg1) => {
            invoke(closure_1_0, closure_1_1, arg0, arg1);
          };
          closure_0 = arg0;
          closure_1 = arg1;
          if (nextPromise) {
            function callInvokeWithMethodAndArg() {
              const tmp = new _Promise(f154997);
              return tmp;
            }
            nextPromise = promise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg);
          } else {
            let tmp = closure_1;
            const self = this;
            const self2 = this;
            nextPromise = new closure_1(f154997);
          }
          return nextPromise;
        },
      };
      obj(iter, "_invoke", obj6);
      let nextPromise = iter;
      if (!generatorFunction.isGeneratorFunction(fn)) {
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
    },
    keys: (arg0) => {
      const items = [];
      const ObjectResult = Object(arg0);
      for (const key10008 in ObjectResult) {
        let arr = items.push(key10008);
        continue;
      }
      const reversed = items.reverse();
      function next() {
        if (items.length) {
          next.value = items.pop();
          next.done = false;
          items.pop();
          return next;
        }
        next.done = true;
        return next;
      }
      return next;
    },
    values,
  };
  hasOwnProperty = prototype.hasOwnProperty;
  let tmp =
    Object.defineProperty ||
    ((arg0, arg1, value) => {
      arg0[arg1] = value.value;
    });
  let closure_2 = tmp;
  let tmp2 = typeof Symbol === "function" ? Symbol : {};
  let tmp3 = tmp2.iterator || "@@iterator";
  let closure_3 = tmp3;
  let tmp4 = tmp2.asyncIterator || "@@asyncIterator";
  let tmp5 = tmp2.toStringTag || "@@toStringTag";
  let closure_4 = tmp5;
  try {
    define({}, "");
    tmp7 = define;
  } catch (err) {
    define2 = function define(arg0, arg1, arg2) {
      arg0[arg1] = arg2;
      return arg2;
    };
    tmp7 = define2;
  }
  values = function values(next) {
    let closure_0 = next;
    if (closure_0) {
      if (next[closure_3]) {
        return next[closure_3].call(next);
      } else if (typeof next.next === "function") {
        return next;
      } else {
        const _isNaN = isNaN;
        if (!isNaN(next.length)) {
          let c1 = -1;
          next = function next() {
            hasOwnProperty = hasOwnProperty + 1;
            if (hasOwnProperty < next.length) {
              while (true) {
                if (hasOwnProperty.call(next, hasOwnProperty)) {
                  break;
                } else {
                  let sum1 = hasOwnProperty + 1;
                  hasOwnProperty = sum1;
                }
              }
              next.value = next[hasOwnProperty];
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
    const obj2 = obj(closure_2[0]);
    const typeError = new TypeError(obj2.default(next) + " is not iterable");
    throw typeError;
  };
  const suspendedStart = "suspendedStart";
  const suspendedYield = "suspendedYield";
  const executing = "executing";
  const completed = "completed";
  let closure_11 = {};
  let obj2 = {};
  tmp7(obj2, tmp3, function () {
    return this;
  });
  const tmp9 = getPrototypeOf && getPrototypeOf(getPrototypeOf(values([])));
  const tmp10 = tmp9 && tmp9 !== prototype && hasOwnProperty.call(tmp9, tmp3);
  if (tmp10) {
    obj2 = tmp9;
  }
  function defineIteratorMethods(prototype) {
    let closure_0 = prototype;
    const items = ["next", "throw", "return"];
    const item = items.forEach((item) => {
      let closure_0 = item;
      define2(closure_0, item, function (arg0) {
        return this._invoke(closure_0, arg0);
      });
    });
  }
  let obj3 = Object.create(obj2);
  Generator.prototype = obj3;
  GeneratorFunctionPrototype.prototype = obj3;
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  let obj4 = { value: GeneratorFunctionPrototype, configurable: true };
  tmp(obj3, "constructor", obj4);
  const obj8 = { value: GeneratorFunction, configurable: true };
  tmp(GeneratorFunctionPrototype, "constructor", obj8);
  GeneratorFunction.displayName = tmp7(GeneratorFunctionPrototype, tmp5, "GeneratorFunction");
  const result = defineIteratorMethods(AsyncIterator.prototype);
  tmp7(AsyncIterator.prototype, tmp4, function () {
    return this;
  });
  const result1 = defineIteratorMethods(obj3);
  tmp7(obj3, tmp5, "Generator");
  tmp7(obj3, tmp3, function () {
    return this;
  });
  tmp7(obj3, "toString", () => "[object Generator]");
  Context.prototype = {
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
                let str4 = "try statement without catch or finally";
                throw Error("try statement without catch or finally");
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
        completeResult = closure_11;
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
          return closure_11;
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
        return closure_11;
      }
    },
    catch: function _catch(arg0) {
      let diff = this.tryEntries.length - 1;
      if (0 <= diff) {
        while (this.tryEntries[diff].tryLoc !== arg0) {
          diff = diff - 1;
        }
        const completion = tmp2.completion;
        let tmp4;
        if ("throw" === completion.type) {
          let completion1 = tmp2.completion;
          const arg = completion.arg;
          if (!completion1) {
            completion1 = {};
          }
          completion1.type = "normal";
          delete obj["arg"];
          this.tryEntries[diff].completion = completion1;
          tmp4 = arg;
        }
        return tmp4;
      }
      throw Error("illegal catch attempt");
    },
    delegateYield(next, resultName, nextLoc) {
      let sum;
      if (next) {
        let callResult;
        if (next[closure_3]) {
          callResult = obj.call(next);
        } else {
          callResult = next;
          if (typeof next.next !== "function") {
            const _isNaN = isNaN;
            if (!isNaN(next.length)) {
              hasOwnProperty = -1;
              next = function next() {
                hasOwnProperty = hasOwnProperty + 1;
                if (hasOwnProperty < next.length) {
                  while (true) {
                    if (hasOwnProperty.call(next, hasOwnProperty)) {
                      break;
                    } else {
                      let sum1 = hasOwnProperty + 1;
                      hasOwnProperty = sum1;
                    }
                  }
                  next.value = next[hasOwnProperty];
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
        obj3 = { iterator: callResult, resultName, nextLoc };
        this.delegate = obj3;
        if ("next" === this.method) {
          tmp4.arg = undefined;
        }
        return closure_11;
      }
      const obj2 = obj(closure_2[0]);
      const typeError = new TypeError(obj2.default(next) + " is not iterable");
      throw typeError;
    },
  };
  return obj;
}
