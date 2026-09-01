// _runtime/15145__regeneratorRuntime.js

export default function _regeneratorRuntime() {
  function define(arg0, arg1) {
    Object.defineProperty(arg0, arg1, { value: arg2, enumerable: true, configurable: true, writable: true });
    return arg0[arg1];
  }
  let define2 = define;
  function tryCatch(call) {
    try {
      obj = arg2;
      call = call.call;
      if (typeof call === "unknown") {
        let callResult = call(obj);
      } else {
        callResult = call(arg1, obj);
      }
      obj = { type: "normal", arg: null };
      obj[1] = callResult;
    } catch (tmp4) {
      obj = { type: "throw", arg: null };
      obj[1] = tmp4;
      return obj;
    }
  }
  class Generator {
    constructor() {
      return;
    }
  }
  class GeneratorFunction {
    constructor() {
      return;
    }
  }
  class GeneratorFunctionPrototype {
    constructor() {
      return;
    }
  }
  class AsyncIterator {
    constructor(arg0, arg1) {
      closure_0 = arg0;
      closure_1 = arg1;
      invoke = function invoke(iter, _invoke, arg2) {
        iter = arg2;
        const tmp = closure_1_6(iter[iter], iter, _invoke);
        if ("throw" !== tmp.type) {
          iter = tmp.arg;
          const value = iter.value;
          if (value) {
            obj = obj(invoke[0]);
            if ("object" == obj.default(value)) {
              const call = _Promise.call;
              if (typeof call === "unknown") {
                let callResult = _Promise("__await");
              } else {
                callResult = call(value, "__await");
              }
              if (callResult) {
                let nextPromise = _Promise.resolve(value.__await).then(
                  (arg0) => {
                    iter("next", arg0, closure_0, closure_1);
                  },
                  (arg0) => {
                    iter("throw", arg0, closure_0, closure_1);
                  },
                );
                const resolveResult = _Promise.resolve(value.__await);
              }
              return nextPromise;
            }
          }
          nextPromise = _Promise.resolve(value).then(
            (value) => {
              iter.value = value;
              callback(iter);
            },
            (arg0) => iter("throw", arg0, closure_0, closure_1),
          );
          const resolveResult1 = _Promise.resolve(value);
        } else {
          arg3(tmp.arg);
        }
      };
      obj = {
        value(arg0, arg1) {
          closure_0 = arg0;
          closure_1 = arg1;
          if (nextPromise) {
            function callInvokeWithMethodAndArg() {
              return new closure_1((arg0, arg1) => {
                closure_1_2(closure_0, closure_1, arg0, arg1);
              });
            }
            nextPromise = nextPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg);
          } else {
            nextPromise = new closure_1((arg0, arg1) => {
              closure_1_2(closure_0, closure_1, arg0, arg1);
            });
          }
          return nextPromise;
        },
      };
      tmp = invoke(this, "_invoke", obj);
      return;
    }
  }
  function maybeInvokeDelegate(iterator, method) {
    method = method.method;
    if (iterator.iterator[method] === undefined) {
      method.delegate = null;
      let tmp14 = "throw" === method && iterator.iterator.return;
      if (tmp14) {
        method.method = "return";
        method.arg = undefined;
        maybeInvokeDelegate(iterator, method);
        tmp14 = "throw" === method.method;
      }
      if (!tmp14) {
        if ("return" !== method) {
          method.method = "throw";
          const _TypeError2 = TypeError;
          const typeError = new TypeError("The iterator does not provide a '" + method + "' method");
          method.arg = typeError;
        }
      }
      return closure_11;
    } else {
      const tmp24 = tryCatch(tmp, iterator.iterator, method.arg);
      if ("throw" === tmp24.type) {
        method.method = "throw";
        method.arg = tmp24.arg;
        method.delegate = null;
        return closure_11;
      } else {
        if (tmp24.arg) {
          let tmp9 = iter;
          if (iter.done) {
            method[iterator.resultName] = iter.value;
            method.next = iterator.nextLoc;
            if ("return" !== method.method) {
              method.method = "next";
              method.arg = undefined;
            }
            method.delegate = null;
            tmp9 = closure_11;
          }
          let tmp8 = tmp9;
        } else {
          method.method = "throw";
          const _TypeError = TypeError;
          const typeError1 = new TypeError("iterator result is not an object");
          method.arg = typeError1;
          method.delegate = null;
          tmp8 = closure_11;
        }
        return tmp8;
      }
    }
  }
  function pushTryEntry(tryLoc) {
    obj = { tryLoc: tryLoc[0] };
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
    const tmp3 = completion.completion || {};
    tmp3.type = "normal";
    delete tmp[tmp2];
    completion.completion = tmp3;
  }
  class Context {
    constructor(arg0) {
      items = [];
      items[0] = { tryLoc: "root" };
      this.tryEntries = items;
      item = arg0.forEach(pushTryEntry, this);
      resetResult = this.reset(true);
      return;
    }
  }
  hasOwnProperty.exports = function _regeneratorRuntime() {
    return obj;
  };
  let obj = {};
  hasOwnProperty = prototype.hasOwnProperty;
  let tmp =
    Object.defineProperty ||
    ((arg0, arg1, value) => {
      arg0[arg1] = value.value;
    });
  closure_2 = tmp;
  let tmp2 = typeof Symbol === "function" ? Symbol : {};
  closure_3 = tmp3;
  closure_4 = tmp5;
  try {
    define({}, "");
    let tmp7 = define;
    function values(next) {
      closure_0 = next;
      if (next) {
        if (next[closure_3]) {
          const call = tmp2.call;
          return typeof call === "unknown" ? tmp2() : call(next);
        } else if (typeof next.next === "function") {
          return next;
        } else {
          const _isNaN = isNaN;
          if (!isNaN(next.length)) {
            c1 = -1;
            next = function next() {
              let arr;
              const sum = sum1 + 1;
              sum1 = sum;
              if (sum < next.length) {
                while (true) {
                  let tmp2 = c1;
                  let call = c1.call;
                  arr = next;
                  let tmp3 = sum1;
                  if (typeof call === "unknown" ? tmp2(tmp3) : call(arr, tmp3)) {
                    break;
                  } else {
                    let tmp4 = sum1;
                    sum1 = sum1 + 1;
                  }
                }
                next.value = arr[sum1];
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
      obj = obj(45);
      const typeError = new TypeError(obj.default(next) + " is not iterable");
      throw typeError;
    }
    class Generator {
      constructor() {
        return;
      }
    }
    class GeneratorFunction {
      constructor() {
        return;
      }
    }
    class GeneratorFunctionPrototype {
      constructor() {
        return;
      }
    }
    class AsyncIterator {
      constructor(arg0, arg1) {
        closure_0 = arg0;
        closure_1 = arg1;
        invoke = function invoke(iter, _invoke, arg2) {
          iter = arg2;
          const tmp = closure_1_6(iter[iter], iter, _invoke);
          if ("throw" !== tmp.type) {
            iter = tmp.arg;
            const value = iter.value;
            if (value) {
              obj = obj(invoke[0]);
              if ("object" == obj.default(value)) {
                const call = _Promise.call;
                if (typeof call === "unknown") {
                  let callResult = _Promise("__await");
                } else {
                  callResult = call(value, "__await");
                }
                if (callResult) {
                  let nextPromise = _Promise.resolve(value.__await).then(
                    (arg0) => {
                      iter("next", arg0, closure_0, closure_1);
                    },
                    (arg0) => {
                      iter("throw", arg0, closure_0, closure_1);
                    },
                  );
                  const resolveResult = _Promise.resolve(value.__await);
                }
                return nextPromise;
              }
            }
            nextPromise = _Promise.resolve(value).then(
              (value) => {
                iter.value = value;
                callback(iter);
              },
              (arg0) => iter("throw", arg0, closure_0, closure_1),
            );
            const resolveResult1 = _Promise.resolve(value);
          } else {
            arg3(tmp.arg);
          }
        };
        obj = {
          value(arg0, arg1) {
            closure_0 = arg0;
            closure_1 = arg1;
            if (nextPromise) {
              function callInvokeWithMethodAndArg() {
                return new closure_1((arg0, arg1) => {
                  closure_1_2(closure_0, closure_1, arg0, arg1);
                });
              }
              nextPromise = nextPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg);
            } else {
              nextPromise = new closure_1((arg0, arg1) => {
                closure_1_2(closure_0, closure_1, arg0, arg1);
              });
            }
            return nextPromise;
          },
        };
        tmp = invoke(this, "_invoke", obj);
        return;
      }
    }
    const completed = "completed";
    closure_11 = {};
    obj = {};
    class Context {
      constructor(arg0) {
        items = [];
        items[0] = { tryLoc: "root" };
        this.tryEntries = items;
        item = arg0.forEach(pushTryEntry, this);
        resetResult = this.reset(true);
        return;
      }
    }
    let _Object = Object;
    let prototypeOf = getPrototypeOf;
    if (getPrototypeOf) {
      prototypeOf = getPrototypeOf(getPrototypeOf(values([])));
    }
    let tmp9 = prototypeOf;
    if (prototypeOf) {
      tmp9 = prototypeOf !== prototype;
    }
    if (!tmp9) {
      if (tmp9) {
        obj = prototypeOf;
      }
      function defineIteratorMethods(arg0) {
        closure_0 = arg0;
        const items = ["next", "throw", "return"];
        const item = items.forEach((arg0) => {
          closure_0 = arg0;
          closure_1_5(closure_0, arg0, function (arg0) {
            return this._invoke(closure_0, arg0);
          });
        });
      }
      const _Object2 = Object;
      obj = Object.create(obj);
      class Generator {
        constructor() {
          return;
        }
      }
      GeneratorFunctionPrototype.prototype = obj;
      class GeneratorFunction {
        constructor() {
          return;
        }
      }
      GeneratorFunction.prototype = GeneratorFunctionPrototype;
      class GeneratorFunctionPrototype {
        constructor() {
          return;
        }
      }
      tmp13[0] = GeneratorFunctionPrototype;
      class AsyncIterator {
        constructor(arg0, arg1) {
          closure_0 = arg0;
          closure_1 = arg1;
          invoke = function invoke(iter, _invoke, arg2) {
            iter = arg2;
            const tmp = closure_1_6(iter[iter], iter, _invoke);
            if ("throw" !== tmp.type) {
              iter = tmp.arg;
              const value = iter.value;
              if (value) {
                obj = obj(invoke[0]);
                if ("object" == obj.default(value)) {
                  const call = _Promise.call;
                  if (typeof call === "unknown") {
                    let callResult = _Promise("__await");
                  } else {
                    callResult = call(value, "__await");
                  }
                  if (callResult) {
                    let nextPromise = _Promise.resolve(value.__await).then(
                      (arg0) => {
                        iter("next", arg0, closure_0, closure_1);
                      },
                      (arg0) => {
                        iter("throw", arg0, closure_0, closure_1);
                      },
                    );
                    const resolveResult = _Promise.resolve(value.__await);
                  }
                  return nextPromise;
                }
              }
              nextPromise = _Promise.resolve(value).then(
                (value) => {
                  iter.value = value;
                  callback(iter);
                },
                (arg0) => iter("throw", arg0, closure_0, closure_1),
              );
              const resolveResult1 = _Promise.resolve(value);
            } else {
              arg3(tmp.arg);
            }
          };
          obj = {
            value(arg0, arg1) {
              closure_0 = arg0;
              closure_1 = arg1;
              if (nextPromise) {
                function callInvokeWithMethodAndArg() {
                  return new closure_1((arg0, arg1) => {
                    closure_1_2(closure_0, closure_1, arg0, arg1);
                  });
                }
                nextPromise = nextPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg);
              } else {
                nextPromise = new closure_1((arg0, arg1) => {
                  closure_1_2(closure_0, closure_1, arg0, arg1);
                });
              }
              return nextPromise;
            },
          };
          tmp = invoke(this, "_invoke", obj);
          return;
        }
      }
      tmp(obj, "constructor", tmp13);
      obj1 = { value: null, configurable: true };
      obj1[0] = GeneratorFunction;
      tmp(GeneratorFunctionPrototype, "constructor", obj1);
      class Context {
        constructor(arg0) {
          items = [];
          items[0] = { tryLoc: "root" };
          this.tryEntries = items;
          item = arg0.forEach(pushTryEntry, this);
          resetResult = this.reset(true);
          return;
        }
      }
      GeneratorFunction.displayName = tmp7(GeneratorFunctionPrototype, tmp5, "GeneratorFunction");
      obj.isGeneratorFunction = (fn) => {
        let constructor = typeof fn === "function";
        if (typeof fn === "function") {
          constructor = fn.constructor;
        }
        let tmp = constructor;
        if (tmp) {
          let tmp3 = constructor === GeneratorFunction;
          if (!tmp3) {
            tmp3 = "GeneratorFunction" === (constructor.displayName || constructor.name);
            const tmp4 = constructor.displayName || constructor.name;
          }
          tmp = tmp3;
        }
        return tmp;
      };
      obj.mark = (arg0) => {
        if (Object.setPrototypeOf) {
          const _Object = Object;
          Object.setPrototypeOf(arg0, GeneratorFunctionPrototype);
        } else {
          arg0.__proto__ = GeneratorFunctionPrototype;
          define2(arg0, closure_4, "GeneratorFunction");
        }
        arg0.prototype = Object.create(closure_15);
        return arg0;
      };
      obj.awrap = (__await) => ({ __await });
      const result = defineIteratorMethods(AsyncIterator.prototype);
      tmp7(AsyncIterator.prototype, tmp4, function () {
        return this;
      });
      obj.AsyncIterator = AsyncIterator;
      obj.async = (iter, fn) => {
        let _Promise = arg4;
        if (undefined === arg4) {
          _Promise = Promise;
        }
        if (!fn) {
          let tmp4 = Generator;
        } else {
          tmp4 = fn;
        }
        let items = arg3;
        obj = Object.create(tmp4.prototype);
        if (!arg3) {
          items = [];
        }
        obj = Object.create(Context.prototype);
        const items1 = [{ tryLoc: "root" }];
        obj.tryEntries = items1;
        const item = items.forEach(pushTryEntry, obj);
        obj.reset(true);
        obj = {
          value: (method, arg1) => {
            if (closure_3 === closure_1_9) {
              const _Error = Error;
              throw Error("Generator is already running");
            } else if (tmp === closure_1_10) {
              if ("throw" === method) {
                throw arg1;
              } else {
                return { value: "HermesInternal", done: null };
              }
            } else {
              invoke.method = method;
              invoke.arg = arg1;
              while (true) {
                iter = invoke;
                let delegate = invoke.delegate;
                if (delegate) {
                  let tmp2 = closure_1_17;
                  let tmp3 = closure_1_17(delegate, iter);
                  if (tmp3) {
                    let tmp15 = closure_1_11;
                    if (tmp3 === closure_1_11) {
                      continue;
                    } else {
                      return tmp3;
                    }
                  }
                }
                if ("next" === iter.method) {
                  let arg = iter.arg;
                  iter._sent = arg;
                  iter.sent = arg;
                } else if ("throw" === iter.method) {
                  let tmp5 = closure_3;
                  let tmp6 = closure_1_7;
                  if (closure_3 === closure_1_7) {
                    break;
                  } else {
                    let dispatchExceptionResult = iter.dispatchException(iter.arg);
                  }
                } else if ("return" === iter.method) {
                  let abruptResult = iter.abrupt("return", iter.arg);
                }
                let tmp9 = closure_1_9;
                closure_3 = closure_1_9;
                let tmp10 = closure_1_6;
                let tmp11 = iter;
                let tmp12 = _Promise;
                let tmp13 = closure_1_6(iter, _Promise, iter);
                if ("normal" === tmp13.type) {
                  closure_3 = iter.done ? closure_1_10 : closure_1_8;
                  let tmp14 = closure_1_11;
                  if (tmp13.arg === closure_1_11) {
                    continue;
                  } else {
                    obj = { value: null, done: null };
                    obj[0] = tmp13.arg;
                    obj[1] = iter.done;
                    return obj;
                  }
                } else {
                  if ("throw" !== tmp13.type) {
                    continue;
                  } else {
                    let tmp21 = closure_1_10;
                    closure_3 = closure_1_10;
                    iter.method = "throw";
                    iter.arg = tmp13.arg;
                    continue;
                  }
                  continue;
                }
                continue;
              }
              closure_3 = closure_1_10;
              throw iter.arg;
            }
          },
        };
        _Promise = arg2;
        let invoke = obj;
        c3 = closure_7;
        invoke(obj, "_invoke", obj);
        iter = Object.create(AsyncIterator.prototype);
        iter = obj;
        c3 = undefined;
        invoke = function invoke(iter, _invoke, arg2) {
          iter = arg2;
          const tmp = closure_1_6(iter[iter], iter, _invoke);
          if ("throw" !== tmp.type) {
            iter = tmp.arg;
            const value = iter.value;
            if (value) {
              obj = obj(invoke[0]);
              if ("object" == obj.default(value)) {
                const call = _Promise.call;
                if (typeof call === "unknown") {
                  let callResult = _Promise("__await");
                } else {
                  callResult = call(value, "__await");
                }
                if (callResult) {
                  let nextPromise = _Promise.resolve(value.__await).then(
                    (arg0) => {
                      iter("next", arg0, closure_0, closure_1);
                    },
                    (arg0) => {
                      iter("throw", arg0, closure_0, closure_1);
                    },
                  );
                  const resolveResult = _Promise.resolve(value.__await);
                }
                return nextPromise;
              }
            }
            nextPromise = _Promise.resolve(value).then(
              (value) => {
                iter.value = value;
                callback(iter);
              },
              (arg0) => iter("throw", arg0, closure_0, closure_1),
            );
            const resolveResult1 = _Promise.resolve(value);
          } else {
            arg3(tmp.arg);
          }
        };
        invoke(iter, "_invoke", {
          value(arg0, arg1) {
            closure_0 = arg0;
            closure_1 = arg1;
            if (nextPromise) {
              function callInvokeWithMethodAndArg() {
                return new closure_1((arg0, arg1) => {
                  closure_1_2(closure_0, closure_1, arg0, arg1);
                });
              }
              nextPromise = nextPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg);
            } else {
              nextPromise = new closure_1((arg0, arg1) => {
                closure_1_2(closure_0, closure_1, arg0, arg1);
              });
            }
            return nextPromise;
          },
        });
        let nextPromise = iter;
        if (!iter.isGeneratorFunction(fn)) {
          nextPromise = iter.next().then((done) => {
            if (done.done) {
              let nextResult = done.value;
            } else {
              nextResult = iter.next();
            }
            return nextResult;
          });
          let nextResult = iter.next();
        }
        return nextPromise;
      };
      const result1 = defineIteratorMethods(obj);
      tmp7(obj, tmp5, "Generator");
      tmp7(obj, tmp3, function () {
        return this;
      });
      tmp7(obj, "toString", () => "[object Generator]");
      obj.keys = (arg0) => {
        const ObjectResult = Object(arg0);
        const items = [];
        for (const key10008 in ObjectResult) {
          let tmp3 = key10008;
          let arr = items.push(key10008);
          continue;
        }
        const reversed = items.reverse();
        function next() {
          if (items.length) {
            let arr = items;
            arr = items.pop();
            next.value = arr;
            next.done = false;
            return next;
          }
          next.done = true;
          return next;
        }
        return next;
      };
      obj.values = values;
      const obj2 = {
        constructor: null,
        reset: null,
        stop: null,
        dispatchException: null,
        abrupt: null,
        complete: null,
        finish: null,
        catch: null,
        delegateYield: null,
      };
      obj2[0] = Context;
      obj2[1] = function reset(arg0) {
        obj = {
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
        if (!arg0) {
          for (const key10018 in obj) {
            let tmp8 = key10018;
            let tmp7 = "t" === key10018.charAt(0);
            if (!tmp7) {
              if (tmp7) {
                let _isNaN = isNaN;
                tmp7 = !isNaN(+key10018.slice(1));
              }
              if (!tmp7) {
                continue;
              } else {
                obj[key10018] = undefined;
                continue;
              }
              continue;
            } else {
              let tmp4 = hasOwnProperty;
              let call = hasOwnProperty.call;
              if (typeof call === "unknown") {
                let callResult = tmp4(key10018);
              } else {
                callResult = call(obj, key10018);
              }
              let tmp6 = callResult;
            }
          }
        }
      };
      obj2[2] = function stop() {
        this.done = true;
        const completion = this.tryEntries[0].completion;
        if ("throw" === completion.type) {
          throw completion.arg;
        } else {
          return tmp.rval;
        }
      };
      obj2[3] = function dispatchException(arg0) {
        const self = this;
        if (this.done) {
          throw arg0;
        } else {
          let diff = self.tryEntries.length - 1;
          if (0 <= diff) {
            const completion = tmp2.completion;
            while ("root" !== self.tryEntries[diff].tryLoc) {
              if (tmp2.tryLoc <= self.prev) {
                let tmp7 = hasOwnProperty;
                let call2 = hasOwnProperty.call;
                let tmp4 = typeof call2 === "unknown" ? tmp7("catchLoc") : call2(tmp2, "catchLoc");
                let call = tmp7.call;
                let tmp5 = typeof call === "unknown" ? tmp7("finallyLoc") : call(tmp2, "finallyLoc");
                if (tmp4) {
                  if (tmp5) {
                    if (self.prev < tmp2.catchLoc) {
                      let str8 = "throw";
                      completion.type = "throw";
                      completion.arg = arg0;
                      self.next = tmp2.catchLoc;
                      let str9 = "next";
                      self.method = "next";
                      self.arg = undefined;
                      let flag3 = true;
                      return true;
                    } else if (self.prev < tmp2.finallyLoc) {
                      let str7 = "throw";
                      completion.type = "throw";
                      completion.arg = arg0;
                      self.next = tmp2.finallyLoc;
                      let flag2 = false;
                      return false;
                    }
                  }
                }
                if (tmp4) {
                  if (self.prev < tmp2.catchLoc) {
                    let str5 = "throw";
                    completion.type = "throw";
                    completion.arg = arg0;
                    self.next = tmp2.catchLoc;
                    let str6 = "next";
                    self.method = "next";
                    self.arg = undefined;
                    let flag = true;
                    return true;
                  }
                } else if (tmp5) {
                  if (self.prev < tmp2.finallyLoc) {
                    let str12 = "throw";
                    completion.type = "throw";
                    completion.arg = arg0;
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
            completion.arg = arg0;
            self.next = "end";
            return false;
          }
        }
      };
      obj2[4] = function abrupt(type, arg1) {
        const self = this;
        let diff = this.tryEntries.length - 1;
        let tmp2;
        if (0 <= diff) {
          while (true) {
            let tmp3 = self.tryEntries[diff];
            let tmp4 = diff;
            if (tmp3.tryLoc <= self.prev) {
              let tmp5 = hasOwnProperty;
              let call = hasOwnProperty.call;
              if (typeof call === "unknown" ? tmp5("finallyLoc") : call(tmp3, "finallyLoc")) {
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
        let tmp6 = tmp2;
        if (tmp2) {
          let tmp7 = "break" === type;
          if (!tmp7) {
            tmp7 = "continue" === type;
          }
          tmp6 = tmp7;
        }
        if (tmp6) {
          tmp6 = tmp2.tryLoc <= arg1;
        }
        if (tmp6) {
          tmp6 = arg1 <= tmp2.finallyLoc;
        }
        if (tmp6) {
          tmp2 = null;
        }
        const tmp8 = tmp2 ? tmp2.completion : {};
        tmp8.type = type;
        tmp8.arg = arg1;
        if (tmp2) {
          self.method = "next";
          self.next = tmp2.finallyLoc;
          let completeResult = closure_11;
        } else {
          completeResult = self.complete(tmp8);
        }
        return completeResult;
      };
      obj2[5] = function complete(type, next) {
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
                if (tmp2) {
                  self.next = next;
                }
                tmp2 = "normal" === type.type && next;
              }
            }
            return closure_11;
          }
          self.next = type.arg;
        }
      };
      obj2[6] = function finish(arg0) {
        const self = this;
        let diff = this.tryEntries.length - 1;
        if (0 <= diff) {
          while (self.tryEntries[diff].finallyLoc !== arg0) {
            diff = diff - 1;
          }
          self.complete(self.tryEntries[diff].completion, self.tryEntries[diff].afterLoc);
          const tmp7 = self.tryEntries[diff].completion || {};
          tmp7.type = "normal";
          delete tmp[tmp2];
          self.tryEntries[diff].completion = tmp7;
          return closure_11;
        }
      };
      obj2[7] = function _catch(arg0) {
        let diff = this.tryEntries.length - 1;
        if (0 <= diff) {
          while (this.tryEntries[diff].tryLoc !== arg0) {
            diff = diff - 1;
          }
          let completion = tmp4.completion;
          let arg;
          if ("throw" === completion.type) {
            completion = tmp4.completion;
            if (!completion) {
              completion = {};
            }
            completion.type = "normal";
            delete tmp[tmp2];
            tmp4.completion = completion;
            arg = completion.arg;
          }
          return arg;
        }
        throw Error("illegal catch attempt");
      };
      obj2[8] = function delegateYield(next) {
        closure_0 = next;
        if (next) {
          if (next[closure_3]) {
            let call = tmp2.call;
            typeof call === "unknown" ? tmp2() : call(next);
          } else {
            let tmp3 = next;
            if (typeof next.next !== "function") {
              const _isNaN = isNaN;
              if (!isNaN(next.length)) {
                c1 = -1;
                next = function next() {
                  let arr;
                  const sum = sum1 + 1;
                  sum1 = sum;
                  if (sum < next.length) {
                    while (true) {
                      let tmp2 = c1;
                      let call = c1.call;
                      arr = next;
                      let tmp3 = sum1;
                      if (typeof call === "unknown" ? tmp2(tmp3) : call(arr, tmp3)) {
                        break;
                      } else {
                        let tmp4 = sum1;
                        sum1 = sum1 + 1;
                      }
                    }
                    next.value = arr[sum1];
                    next.done = false;
                    return next;
                  }
                  next.value = undefined;
                  next.done = true;
                  return next;
                };
                next.next = next;
                tmp3 = next;
              }
            }
            obj = { iterator: null, resultName: null, nextLoc: null };
            obj[0] = tmp3;
            obj[1] = arg1;
            obj[2] = arg2;
            this.delegate = obj;
            if ("next" === this.method) {
              tmp6.arg = undefined;
            }
            return closure_11;
          }
        }
        obj = obj(45);
        const typeError = new TypeError(obj.default(next) + " is not iterable");
        throw typeError;
      };
      Context.prototype = obj2;
      return obj;
    } else {
      let call = hasOwnProperty.call;
      if (typeof call === "unknown") {
        let hasOwnPropertyResult = hasOwnProperty(tmp3);
      } else {
        hasOwnPropertyResult = call(prototypeOf, tmp3);
      }
    }
  } catch (err) {
    define2 = function define(arg0, arg1, arg2) {
      arg0[arg1] = arg2;
      return arg2;
    };
    tmp7 = define2;
  }
}
