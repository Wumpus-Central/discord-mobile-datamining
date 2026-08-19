// _runtime/00197_define.js
((arg0) => {
  closure_0 = arg0;
  function define(arg0, arg1) {
    Object.defineProperty(arg0, arg1, { value: arg2, enumerable: true, configurable: true, writable: true });
    return arg0[arg1];
  }
  let define2 = define;
  function tryCatch(call) {
    try {
      let obj = arg2;
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
      obj = {
        value: function enqueue(arg0, arg1) {
              closure_0 = arg0;
              closure_1 = arg1;
              if (nextPromise) {
                function callInvokeWithMethodAndArg(result) {
                  return new closure_1((arg0, fn) => {
                    closure_0 = arg0;
                    closure_1 = fn;
                    const tmp = closure_1_6(closure_1_0[closure_0], closure_1_0, closure_1);
                    if ("throw" !== tmp.type) {
                      let value = tmp.arg.value;
                      if (value) {
                        if (typeof value === "object") {
                          let call = closure_1_1.call;
                          if (typeof call === "unknown") {
                            let callResult = closure_1_1("__await");
                          } else {
                            callResult = call(value, "__await");
                          }
                          if (callResult) {
                            closure_1_1.resolve(value.__await).then((result) => {
                              const tmp2 = closure_1_6(lib.next, lib, result);
                              if ("throw" !== tmp2.type) {
                                iter = tmp2.arg;
                                const value = iter.value;
                                if (value) {
                                  if (typeof value === "object") {
                                    const call = closure_1.call;
                                    if (typeof call === "unknown") {
                                      let callResult = tmp9("__await");
                                    } else {
                                      callResult = call(value, "__await");
                                    }
                                    if (callResult) {
                                      closure_1.resolve(value.__await).then(() => { ... }, () => { ... });
                                      const resolveResult = closure_1.resolve(value.__await);
                                    }
                                    tmp9 = closure_1;
                                  }
                                }
                                closure_1.resolve(value).then(() => { ... }, () => { ... });
                                const resolveResult1 = closure_1.resolve(value);
                              } else {
                                closure_1(tmp2.arg);
                              }
                            }, (arg0) => {
                              const tmp2 = closure_1_6(lib.throw, lib, arg0);
                              if ("throw" !== tmp2.type) {
                                iter = tmp2.arg;
                                const value = iter.value;
                                if (value) {
                                  if (typeof value === "object") {
                                    const call = closure_1.call;
                                    if (typeof call === "unknown") {
                                      let callResult = tmp9("__await");
                                    } else {
                                      callResult = call(value, "__await");
                                    }
                                    if (callResult) {
                                      closure_1.resolve(value.__await).then(() => { ... }, () => { ... });
                                      const resolveResult = closure_1.resolve(value.__await);
                                    }
                                    tmp9 = closure_1;
                                  }
                                }
                                closure_1.resolve(value).then(() => { ... }, () => { ... });
                                const resolveResult1 = closure_1.resolve(value);
                              } else {
                                closure_1(tmp2.arg);
                              }
                            });
                            let resolveResult = closure_1_1.resolve(value.__await);
                          }
                        }
                      }
                      closure_1_1.resolve(value).then((result) => {
                        iter.value = result;
                        lib(iter);
                      }, (arg0) => {
                        const tmp2 = closure_1_6(lib.throw, lib, arg0);
                        if ("throw" !== tmp2.type) {
                          iter = tmp2.arg;
                          fn = iter.value;
                          if (fn) {
                            if (typeof fn === "object") {
                              const call = closure_1.call;
                              if (typeof call === "unknown") {
                                let callResult = tmp9("__await");
                              } else {
                                callResult = call(fn, "__await");
                              }
                              tmp9 = closure_1;
                            }
                            fn = () => { ... };
                            nextPromise = closure_1.resolve(fn.__await).then(() => { ... }, fn);
                            const resolveResult = closure_1.resolve(fn.__await);
                          }
                          nextPromise = closure_1.resolve(fn).then(() => { ... }, () => { ... });
                          const resolveResult1 = closure_1.resolve(fn);
                        } else {
                          closure_1(tmp2.arg);
                        }
                      });
                      iter = tmp.arg;
                      let resolveResult1 = closure_1_1.resolve(value);
                    } else {
                      fn(tmp.arg);
                    }
                  });
                }
                nextPromise = nextPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg);
              } else {
                nextPromise = new closure_1((arg0, fn) => {
                  closure_0 = arg0;
                  closure_1 = fn;
                  const tmp = closure_1_6(closure_1_0[closure_0], closure_1_0, closure_1);
                  if ("throw" !== tmp.type) {
                    let value = tmp.arg.value;
                    if (value) {
                      if (typeof value === "object") {
                        let call = closure_1_1.call;
                        if (typeof call === "unknown") {
                          let callResult = closure_1_1("__await");
                        } else {
                          callResult = call(value, "__await");
                        }
                        if (callResult) {
                          closure_1_1.resolve(value.__await).then((result) => {
                            const tmp2 = closure_1_6(lib.next, lib, result);
                            if ("throw" !== tmp2.type) {
                              iter = tmp2.arg;
                              const value = iter.value;
                              if (value) {
                                if (typeof value === "object") {
                                  const call = closure_1.call;
                                  if (typeof call === "unknown") {
                                    let callResult = tmp9("__await");
                                  } else {
                                    callResult = call(value, "__await");
                                  }
                                  if (callResult) {
                                    closure_1.resolve(value.__await).then((result) => {
                                      const tmp2 = closure_1_6(lib.next, lib, result);
                                      if ("throw" !== tmp2.type) {
                                        iter = tmp2.arg;
                                        const value = iter.value;
                                        if (value) {
                                          if (typeof value === "object") {
                                            const call = closure_1.call;
                                            if (typeof call === "unknown") {
                                              let callResult = tmp9("__await");
                                            } else {
                                              callResult = call(value, "__await");
                                            }
                                            if (callResult) {
                                              closure_1.resolve(value.__await).then(() => { ... }, () => { ... });
                                              const resolveResult = closure_1.resolve(value.__await);
                                            }
                                            tmp9 = closure_1;
                                          }
                                        }
                                        closure_1.resolve(value).then(() => { ... }, () => { ... });
                                        const resolveResult1 = closure_1.resolve(value);
                                      } else {
                                        closure_1(tmp2.arg);
                                      }
                                    }, (arg0) => {
                                      const tmp2 = closure_1_6(lib.throw, lib, arg0);
                                      if ("throw" !== tmp2.type) {
                                        iter = tmp2.arg;
                                        const value = iter.value;
                                        if (value) {
                                          if (typeof value === "object") {
                                            const call = closure_1.call;
                                            if (typeof call === "unknown") {
                                              let callResult = tmp9("__await");
                                            } else {
                                              callResult = call(value, "__await");
                                            }
                                            if (callResult) {
                                              closure_1.resolve(value.__await).then(() => { ... }, () => { ... });
                                              const resolveResult = closure_1.resolve(value.__await);
                                            }
                                            tmp9 = closure_1;
                                          }
                                        }
                                        closure_1.resolve(value).then(() => { ... }, () => { ... });
                                        const resolveResult1 = closure_1.resolve(value);
                                      } else {
                                        closure_1(tmp2.arg);
                                      }
                                    });
                                    const resolveResult = closure_1.resolve(value.__await);
                                  }
                                  tmp9 = closure_1;
                                }
                              }
                              closure_1.resolve(value).then((result) => {
                                iter.value = result;
                                lib(iter);
                              }, (arg0) => {
                                const tmp2 = closure_1_6(lib.throw, lib, arg0);
                                if ("throw" !== tmp2.type) {
                                  iter = tmp2.arg;
                                  fn = iter.value;
                                  if (fn) {
                                    if (typeof fn === "object") {
                                      const call = closure_1.call;
                                      if (typeof call === "unknown") {
                                        let callResult = tmp9("__await");
                                      } else {
                                        callResult = call(fn, "__await");
                                      }
                                      tmp9 = closure_1;
                                    }
                                    fn = () => { ... };
                                    nextPromise = closure_1.resolve(fn.__await).then(() => { ... }, fn);
                                    const resolveResult = closure_1.resolve(fn.__await);
                                  }
                                  nextPromise = closure_1.resolve(fn).then(() => { ... }, () => { ... });
                                  const resolveResult1 = closure_1.resolve(fn);
                                } else {
                                  closure_1(tmp2.arg);
                                }
                              });
                              const resolveResult1 = closure_1.resolve(value);
                            } else {
                              closure_1(tmp2.arg);
                            }
                          }, (arg0) => {
                            const tmp2 = closure_1_6(lib.throw, lib, arg0);
                            if ("throw" !== tmp2.type) {
                              iter = tmp2.arg;
                              const value = iter.value;
                              if (value) {
                                if (typeof value === "object") {
                                  const call = closure_1.call;
                                  if (typeof call === "unknown") {
                                    let callResult = tmp9("__await");
                                  } else {
                                    callResult = call(value, "__await");
                                  }
                                  if (callResult) {
                                    closure_1.resolve(value.__await).then((result) => {
                                      const tmp2 = closure_1_6(lib.next, lib, result);
                                      if ("throw" !== tmp2.type) {
                                        iter = tmp2.arg;
                                        const value = iter.value;
                                        if (value) {
                                          if (typeof value === "object") {
                                            const call = closure_1.call;
                                            if (typeof call === "unknown") {
                                              let callResult = tmp9("__await");
                                            } else {
                                              callResult = call(value, "__await");
                                            }
                                            if (callResult) {
                                              closure_1.resolve(value.__await).then(() => { ... }, () => { ... });
                                              const resolveResult = closure_1.resolve(value.__await);
                                            }
                                            tmp9 = closure_1;
                                          }
                                        }
                                        closure_1.resolve(value).then(() => { ... }, () => { ... });
                                        const resolveResult1 = closure_1.resolve(value);
                                      } else {
                                        closure_1(tmp2.arg);
                                      }
                                    }, (arg0) => {
                                      const tmp2 = closure_1_6(lib.throw, lib, arg0);
                                      if ("throw" !== tmp2.type) {
                                        iter = tmp2.arg;
                                        const value = iter.value;
                                        if (value) {
                                          if (typeof value === "object") {
                                            const call = closure_1.call;
                                            if (typeof call === "unknown") {
                                              let callResult = tmp9("__await");
                                            } else {
                                              callResult = call(value, "__await");
                                            }
                                            if (callResult) {
                                              closure_1.resolve(value.__await).then(() => { ... }, () => { ... });
                                              const resolveResult = closure_1.resolve(value.__await);
                                            }
                                            tmp9 = closure_1;
                                          }
                                        }
                                        closure_1.resolve(value).then(() => { ... }, () => { ... });
                                        const resolveResult1 = closure_1.resolve(value);
                                      } else {
                                        closure_1(tmp2.arg);
                                      }
                                    });
                                    const resolveResult = closure_1.resolve(value.__await);
                                  }
                                  tmp9 = closure_1;
                                }
                              }
                              closure_1.resolve(value).then((result) => {
                                iter.value = result;
                                lib(iter);
                              }, (arg0) => {
                                const tmp2 = closure_1_6(lib.throw, lib, arg0);
                                if ("throw" !== tmp2.type) {
                                  iter = tmp2.arg;
                                  fn = iter.value;
                                  if (fn) {
                                    if (typeof fn === "object") {
                                      const call = closure_1.call;
                                      if (typeof call === "unknown") {
                                        let callResult = tmp9("__await");
                                      } else {
                                        callResult = call(fn, "__await");
                                      }
                                      tmp9 = closure_1;
                                    }
                                    fn = () => { ... };
                                    nextPromise = closure_1.resolve(fn.__await).then(() => { ... }, fn);
                                    const resolveResult = closure_1.resolve(fn.__await);
                                  }
                                  nextPromise = closure_1.resolve(fn).then(() => { ... }, () => { ... });
                                  const resolveResult1 = closure_1.resolve(fn);
                                } else {
                                  closure_1(tmp2.arg);
                                }
                              });
                              const resolveResult1 = closure_1.resolve(value);
                            } else {
                              closure_1(tmp2.arg);
                            }
                          });
                          let resolveResult = closure_1_1.resolve(value.__await);
                        }
                      }
                    }
                    closure_1_1.resolve(value).then((result) => {
                      iter.value = result;
                      lib(iter);
                    }, (arg0) => {
                      const tmp2 = closure_1_6(lib.throw, lib, arg0);
                      if ("throw" !== tmp2.type) {
                        iter = tmp2.arg;
                        fn = iter.value;
                        if (fn) {
                          if (typeof fn === "object") {
                            const call = closure_1.call;
                            if (typeof call === "unknown") {
                              let callResult = tmp9("__await");
                            } else {
                              callResult = call(fn, "__await");
                            }
                            tmp9 = closure_1;
                          }
                          fn = (arg0) => {
                            const tmp2 = closure_1_6(lib.throw, lib, arg0);
                            if ("throw" !== tmp2.type) {
                              iter = tmp2.arg;
                              const value = iter.value;
                              if (value) {
                                if (typeof value === "object") {
                                  const call = closure_1.call;
                                  if (typeof call === "unknown") {
                                    let callResult = tmp9("__await");
                                  } else {
                                    callResult = call(value, "__await");
                                  }
                                  if (callResult) {
                                    closure_1.resolve(value.__await).then(() => { ... }, () => { ... });
                                    const resolveResult = closure_1.resolve(value.__await);
                                  }
                                  tmp9 = closure_1;
                                }
                              }
                              closure_1.resolve(value).then(() => { ... }, () => { ... });
                              const resolveResult1 = closure_1.resolve(value);
                            } else {
                              closure_1(tmp2.arg);
                            }
                          };
                          nextPromise = closure_1.resolve(fn.__await).then((result) => {
                            const tmp2 = closure_1_6(lib.next, lib, result);
                            if ("throw" !== tmp2.type) {
                              iter = tmp2.arg;
                              const value = iter.value;
                              if (value) {
                                if (typeof value === "object") {
                                  const call = closure_1.call;
                                  if (typeof call === "unknown") {
                                    let callResult = tmp9("__await");
                                  } else {
                                    callResult = call(value, "__await");
                                  }
                                  if (callResult) {
                                    closure_1.resolve(value.__await).then(() => { ... }, () => { ... });
                                    const resolveResult = closure_1.resolve(value.__await);
                                  }
                                  tmp9 = closure_1;
                                }
                              }
                              closure_1.resolve(value).then(() => { ... }, () => { ... });
                              const resolveResult1 = closure_1.resolve(value);
                            } else {
                              closure_1(tmp2.arg);
                            }
                          }, fn);
                          const resolveResult = closure_1.resolve(fn.__await);
                        }
                        nextPromise = closure_1.resolve(fn).then((result) => {
                          iter.value = result;
                          lib(iter);
                        }, (arg0) => {
                          const tmp2 = closure_1_6(lib.throw, lib, arg0);
                          if ("throw" !== tmp2.type) {
                            iter = tmp2.arg;
                            fn = iter.value;
                            if (fn) {
                              if (typeof fn === "object") {
                                const call = closure_1.call;
                                if (typeof call === "unknown") {
                                  let callResult = tmp9("__await");
                                } else {
                                  callResult = call(fn, "__await");
                                }
                                tmp9 = closure_1;
                              }
                              fn = () => { ... };
                              nextPromise = closure_1.resolve(fn.__await).then(() => { ... }, fn);
                              const resolveResult = closure_1.resolve(fn.__await);
                            }
                            nextPromise = closure_1.resolve(fn).then(() => { ... }, () => { ... });
                            const resolveResult1 = closure_1.resolve(fn);
                          } else {
                            closure_1(tmp2.arg);
                          }
                        });
                        const resolveResult1 = closure_1.resolve(fn);
                      } else {
                        closure_1(tmp2.arg);
                      }
                    });
                    iter = tmp.arg;
                    let resolveResult1 = closure_1_1.resolve(value);
                  } else {
                    fn(tmp.arg);
                  }
                });
              }
              return nextPromise;
            }
      };
      tmp = f66682(this, "_invoke", obj);
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
  function doneResult() {
    return { value: "HermesInternal", done: "HermesInternal" };
  }
  const hasOwnProperty = prototype.hasOwnProperty;
  let tmp = Object.defineProperty || ((arg0, arg1, value) => {
    arg0[arg1] = value.value;
  });
  closure_2 = tmp;
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
              const sum = sum1 + 1;
              sum1 = sum;
              if (sum < next.length) {
                while (true) {
                  let call = v1.call;
                  let tmp3 = sum1;
                  if (typeof call === "unknown" ? v1(tmp3) : call(next, tmp3)) {
                    break;
                  } else {
                    sum1 = sum1 + 1;
                  }
                }
                next.value = next[sum1];
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
      return { next: doneResult };
    }
    arg0.wrap = function wrap(arg0, arg1, arg2, arg3) {
      let tmp = arg1;
      if (!arg1) {
        tmp = Generator;
      }
      let items = arg3;
      let obj = Object.create(tmp.prototype);
      if (!arg3) {
        items = [];
      }
      obj = Object.create(Context.prototype);
      const items1 = [{ tryLoc: "root" }];
      obj.tryEntries = items1;
      const item = items.forEach(pushTryEntry, obj);
      obj.reset(true);
      obj = {
        value: function invoke(method, arg1) {
          if (closure_3 === closure_1_9) {
            const _Error = Error;
            error = new Error("Generator is already running");
            throw error;
          } else if (tmp === closure_1_10) {
            if ("throw" === method) {
              throw arg1;
            } else {
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } else {
            _undefined.method = method;
            _undefined.arg = arg1;
            while (true) {
              let delegate = _undefined.delegate;
              if (delegate) {
                let tmp3 = maybeInvokeDelegate(delegate, _undefined);
                if (tmp3) {
                  if (tmp3 === closure_1_11) {
                    continue;
                  } else {
                    return tmp3;
                  }
                }
              }
              if ("next" === _undefined.method) {
                let arg = _undefined.arg;
                _undefined._sent = arg;
                _undefined.sent = arg;
              } else if ("throw" === _undefined.method) {
                if (closure_3 === closure_1_7) {
                  break;
                } else {
                  let dispatchExceptionResult = _undefined.dispatchException(_undefined.arg);
                }
              } else if ("return" === _undefined.method) {
                let abruptResult = _undefined.abrupt("return", _undefined.arg);
              }
              closure_3 = closure_1_9;
              let tmp13 = tryCatch(_undefined, _Promise, _undefined);
              if ("normal" === tmp13.type) {
                closure_3 = _undefined.done ? closure_1_10 : closure_1_8;
                if (tmp13.arg === closure_1_11) {
                  continue;
                } else {
                  let obj = { value: null, done: null };
                  obj[0] = tmp13.arg;
                  obj[1] = _undefined.done;
                  return obj;
                }
              } else {
                if ("throw" !== tmp13.type) {
                  continue;
                } else {
                  closure_3 = closure_1_10;
                  _undefined.method = "throw";
                  _undefined.arg = tmp13.arg;
                  continue;
                }
                continue;
              }
              continue;
            }
            closure_3 = closure_1_10;
            throw _undefined.arg;
          }
        }
      };
      closure_0 = arg0;
      closure_1 = arg2;
      closure_3 = closure_7;
      obj(obj, "_invoke", obj);
      return obj;
    };
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
        obj = {
          value: function enqueue(arg0, arg1) {
                  closure_0 = arg0;
                  closure_1 = arg1;
                  if (nextPromise) {
                    function callInvokeWithMethodAndArg(result) {
                      return new closure_1((arg0, fn) => {
                        closure_0 = arg0;
                        closure_1 = fn;
                        const tmp = closure_1_6(closure_1_0[closure_0], closure_1_0, closure_1);
                        if ("throw" !== tmp.type) {
                          let value = tmp.arg.value;
                          if (value) {
                            if (typeof value === "object") {
                              let call = closure_1_1.call;
                              if (typeof call === "unknown") {
                                let callResult = closure_1_1("__await");
                              } else {
                                callResult = call(value, "__await");
                              }
                              if (callResult) {
                                closure_1_1.resolve(value.__await).then((result) => {
                                  const tmp2 = closure_1_6(lib.next, lib, result);
                                  if ("throw" !== tmp2.type) {
                                    iter = tmp2.arg;
                                    const value = iter.value;
                                    if (value) {
                                      if (typeof value === "object") {
                                        const call = closure_1.call;
                                        if (typeof call === "unknown") {
                                          let callResult = tmp9("__await");
                                        } else {
                                          callResult = call(value, "__await");
                                        }
                                        if (callResult) {
                                          closure_1.resolve(value.__await).then(() => { ... }, () => { ... });
                                          const resolveResult = closure_1.resolve(value.__await);
                                        }
                                        tmp9 = closure_1;
                                      }
                                    }
                                    closure_1.resolve(value).then(() => { ... }, () => { ... });
                                    const resolveResult1 = closure_1.resolve(value);
                                  } else {
                                    closure_1(tmp2.arg);
                                  }
                                }, (arg0) => {
                                  const tmp2 = closure_1_6(lib.throw, lib, arg0);
                                  if ("throw" !== tmp2.type) {
                                    iter = tmp2.arg;
                                    const value = iter.value;
                                    if (value) {
                                      if (typeof value === "object") {
                                        const call = closure_1.call;
                                        if (typeof call === "unknown") {
                                          let callResult = tmp9("__await");
                                        } else {
                                          callResult = call(value, "__await");
                                        }
                                        if (callResult) {
                                          closure_1.resolve(value.__await).then(() => { ... }, () => { ... });
                                          const resolveResult = closure_1.resolve(value.__await);
                                        }
                                        tmp9 = closure_1;
                                      }
                                    }
                                    closure_1.resolve(value).then(() => { ... }, () => { ... });
                                    const resolveResult1 = closure_1.resolve(value);
                                  } else {
                                    closure_1(tmp2.arg);
                                  }
                                });
                                let resolveResult = closure_1_1.resolve(value.__await);
                              }
                            }
                          }
                          closure_1_1.resolve(value).then((result) => {
                            iter.value = result;
                            lib(iter);
                          }, (arg0) => {
                            const tmp2 = closure_1_6(lib.throw, lib, arg0);
                            if ("throw" !== tmp2.type) {
                              iter = tmp2.arg;
                              fn = iter.value;
                              if (fn) {
                                if (typeof fn === "object") {
                                  const call = closure_1.call;
                                  if (typeof call === "unknown") {
                                    let callResult = tmp9("__await");
                                  } else {
                                    callResult = call(fn, "__await");
                                  }
                                  tmp9 = closure_1;
                                }
                                fn = () => { ... };
                                nextPromise = closure_1.resolve(fn.__await).then(() => { ... }, fn);
                                const resolveResult = closure_1.resolve(fn.__await);
                              }
                              nextPromise = closure_1.resolve(fn).then(() => { ... }, () => { ... });
                              const resolveResult1 = closure_1.resolve(fn);
                            } else {
                              closure_1(tmp2.arg);
                            }
                          });
                          iter = tmp.arg;
                          let resolveResult1 = closure_1_1.resolve(value);
                        } else {
                          fn(tmp.arg);
                        }
                      });
                    }
                    nextPromise = nextPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg);
                  } else {
                    nextPromise = new closure_1((arg0, fn) => {
                      closure_0 = arg0;
                      closure_1 = fn;
                      const tmp = closure_1_6(closure_1_0[closure_0], closure_1_0, closure_1);
                      if ("throw" !== tmp.type) {
                        let value = tmp.arg.value;
                        if (value) {
                          if (typeof value === "object") {
                            let call = closure_1_1.call;
                            if (typeof call === "unknown") {
                              let callResult = closure_1_1("__await");
                            } else {
                              callResult = call(value, "__await");
                            }
                            if (callResult) {
                              closure_1_1.resolve(value.__await).then((result) => {
                                const tmp2 = closure_1_6(lib.next, lib, result);
                                if ("throw" !== tmp2.type) {
                                  iter = tmp2.arg;
                                  const value = iter.value;
                                  if (value) {
                                    if (typeof value === "object") {
                                      const call = closure_1.call;
                                      if (typeof call === "unknown") {
                                        let callResult = tmp9("__await");
                                      } else {
                                        callResult = call(value, "__await");
                                      }
                                      if (callResult) {
                                        closure_1.resolve(value.__await).then((result) => {
                                          const tmp2 = closure_1_6(lib.next, lib, result);
                                          if ("throw" !== tmp2.type) {
                                            iter = tmp2.arg;
                                            const value = iter.value;
                                            if (value) {
                                              if (typeof value === "object") {
                                                const call = closure_1.call;
                                                if (typeof call === "unknown") {
                                                  let callResult = tmp9("__await");
                                                } else {
                                                  callResult = call(value, "__await");
                                                }
                                                if (callResult) {
                                                  closure_1.resolve(value.__await).then(() => { ... }, () => { ... });
                                                  const resolveResult = closure_1.resolve(value.__await);
                                                }
                                                tmp9 = closure_1;
                                              }
                                            }
                                            closure_1.resolve(value).then(() => { ... }, () => { ... });
                                            const resolveResult1 = closure_1.resolve(value);
                                          } else {
                                            closure_1(tmp2.arg);
                                          }
                                        }, (arg0) => {
                                          const tmp2 = closure_1_6(lib.throw, lib, arg0);
                                          if ("throw" !== tmp2.type) {
                                            iter = tmp2.arg;
                                            const value = iter.value;
                                            if (value) {
                                              if (typeof value === "object") {
                                                const call = closure_1.call;
                                                if (typeof call === "unknown") {
                                                  let callResult = tmp9("__await");
                                                } else {
                                                  callResult = call(value, "__await");
                                                }
                                                if (callResult) {
                                                  closure_1.resolve(value.__await).then(() => { ... }, () => { ... });
                                                  const resolveResult = closure_1.resolve(value.__await);
                                                }
                                                tmp9 = closure_1;
                                              }
                                            }
                                            closure_1.resolve(value).then(() => { ... }, () => { ... });
                                            const resolveResult1 = closure_1.resolve(value);
                                          } else {
                                            closure_1(tmp2.arg);
                                          }
                                        });
                                        const resolveResult = closure_1.resolve(value.__await);
                                      }
                                      tmp9 = closure_1;
                                    }
                                  }
                                  closure_1.resolve(value).then((result) => {
                                    iter.value = result;
                                    lib(iter);
                                  }, (arg0) => {
                                    const tmp2 = closure_1_6(lib.throw, lib, arg0);
                                    if ("throw" !== tmp2.type) {
                                      iter = tmp2.arg;
                                      fn = iter.value;
                                      if (fn) {
                                        if (typeof fn === "object") {
                                          const call = closure_1.call;
                                          if (typeof call === "unknown") {
                                            let callResult = tmp9("__await");
                                          } else {
                                            callResult = call(fn, "__await");
                                          }
                                          tmp9 = closure_1;
                                        }
                                        fn = () => { ... };
                                        nextPromise = closure_1.resolve(fn.__await).then(() => { ... }, fn);
                                        const resolveResult = closure_1.resolve(fn.__await);
                                      }
                                      nextPromise = closure_1.resolve(fn).then(() => { ... }, () => { ... });
                                      const resolveResult1 = closure_1.resolve(fn);
                                    } else {
                                      closure_1(tmp2.arg);
                                    }
                                  });
                                  const resolveResult1 = closure_1.resolve(value);
                                } else {
                                  closure_1(tmp2.arg);
                                }
                              }, (arg0) => {
                                const tmp2 = closure_1_6(lib.throw, lib, arg0);
                                if ("throw" !== tmp2.type) {
                                  iter = tmp2.arg;
                                  const value = iter.value;
                                  if (value) {
                                    if (typeof value === "object") {
                                      const call = closure_1.call;
                                      if (typeof call === "unknown") {
                                        let callResult = tmp9("__await");
                                      } else {
                                        callResult = call(value, "__await");
                                      }
                                      if (callResult) {
                                        closure_1.resolve(value.__await).then((result) => {
                                          const tmp2 = closure_1_6(lib.next, lib, result);
                                          if ("throw" !== tmp2.type) {
                                            iter = tmp2.arg;
                                            const value = iter.value;
                                            if (value) {
                                              if (typeof value === "object") {
                                                const call = closure_1.call;
                                                if (typeof call === "unknown") {
                                                  let callResult = tmp9("__await");
                                                } else {
                                                  callResult = call(value, "__await");
                                                }
                                                if (callResult) {
                                                  closure_1.resolve(value.__await).then(() => { ... }, () => { ... });
                                                  const resolveResult = closure_1.resolve(value.__await);
                                                }
                                                tmp9 = closure_1;
                                              }
                                            }
                                            closure_1.resolve(value).then(() => { ... }, () => { ... });
                                            const resolveResult1 = closure_1.resolve(value);
                                          } else {
                                            closure_1(tmp2.arg);
                                          }
                                        }, (arg0) => {
                                          const tmp2 = closure_1_6(lib.throw, lib, arg0);
                                          if ("throw" !== tmp2.type) {
                                            iter = tmp2.arg;
                                            const value = iter.value;
                                            if (value) {
                                              if (typeof value === "object") {
                                                const call = closure_1.call;
                                                if (typeof call === "unknown") {
                                                  let callResult = tmp9("__await");
                                                } else {
                                                  callResult = call(value, "__await");
                                                }
                                                if (callResult) {
                                                  closure_1.resolve(value.__await).then(() => { ... }, () => { ... });
                                                  const resolveResult = closure_1.resolve(value.__await);
                                                }
                                                tmp9 = closure_1;
                                              }
                                            }
                                            closure_1.resolve(value).then(() => { ... }, () => { ... });
                                            const resolveResult1 = closure_1.resolve(value);
                                          } else {
                                            closure_1(tmp2.arg);
                                          }
                                        });
                                        const resolveResult = closure_1.resolve(value.__await);
                                      }
                                      tmp9 = closure_1;
                                    }
                                  }
                                  closure_1.resolve(value).then((result) => {
                                    iter.value = result;
                                    lib(iter);
                                  }, (arg0) => {
                                    const tmp2 = closure_1_6(lib.throw, lib, arg0);
                                    if ("throw" !== tmp2.type) {
                                      iter = tmp2.arg;
                                      fn = iter.value;
                                      if (fn) {
                                        if (typeof fn === "object") {
                                          const call = closure_1.call;
                                          if (typeof call === "unknown") {
                                            let callResult = tmp9("__await");
                                          } else {
                                            callResult = call(fn, "__await");
                                          }
                                          tmp9 = closure_1;
                                        }
                                        fn = () => { ... };
                                        nextPromise = closure_1.resolve(fn.__await).then(() => { ... }, fn);
                                        const resolveResult = closure_1.resolve(fn.__await);
                                      }
                                      nextPromise = closure_1.resolve(fn).then(() => { ... }, () => { ... });
                                      const resolveResult1 = closure_1.resolve(fn);
                                    } else {
                                      closure_1(tmp2.arg);
                                    }
                                  });
                                  const resolveResult1 = closure_1.resolve(value);
                                } else {
                                  closure_1(tmp2.arg);
                                }
                              });
                              let resolveResult = closure_1_1.resolve(value.__await);
                            }
                          }
                        }
                        closure_1_1.resolve(value).then((result) => {
                          iter.value = result;
                          lib(iter);
                        }, (arg0) => {
                          const tmp2 = closure_1_6(lib.throw, lib, arg0);
                          if ("throw" !== tmp2.type) {
                            iter = tmp2.arg;
                            fn = iter.value;
                            if (fn) {
                              if (typeof fn === "object") {
                                const call = closure_1.call;
                                if (typeof call === "unknown") {
                                  let callResult = tmp9("__await");
                                } else {
                                  callResult = call(fn, "__await");
                                }
                                tmp9 = closure_1;
                              }
                              fn = (arg0) => {
                                const tmp2 = closure_1_6(lib.throw, lib, arg0);
                                if ("throw" !== tmp2.type) {
                                  iter = tmp2.arg;
                                  const value = iter.value;
                                  if (value) {
                                    if (typeof value === "object") {
                                      const call = closure_1.call;
                                      if (typeof call === "unknown") {
                                        let callResult = tmp9("__await");
                                      } else {
                                        callResult = call(value, "__await");
                                      }
                                      if (callResult) {
                                        closure_1.resolve(value.__await).then(() => { ... }, () => { ... });
                                        const resolveResult = closure_1.resolve(value.__await);
                                      }
                                      tmp9 = closure_1;
                                    }
                                  }
                                  closure_1.resolve(value).then(() => { ... }, () => { ... });
                                  const resolveResult1 = closure_1.resolve(value);
                                } else {
                                  closure_1(tmp2.arg);
                                }
                              };
                              nextPromise = closure_1.resolve(fn.__await).then((result) => {
                                const tmp2 = closure_1_6(lib.next, lib, result);
                                if ("throw" !== tmp2.type) {
                                  iter = tmp2.arg;
                                  const value = iter.value;
                                  if (value) {
                                    if (typeof value === "object") {
                                      const call = closure_1.call;
                                      if (typeof call === "unknown") {
                                        let callResult = tmp9("__await");
                                      } else {
                                        callResult = call(value, "__await");
                                      }
                                      if (callResult) {
                                        closure_1.resolve(value.__await).then(() => { ... }, () => { ... });
                                        const resolveResult = closure_1.resolve(value.__await);
                                      }
                                      tmp9 = closure_1;
                                    }
                                  }
                                  closure_1.resolve(value).then(() => { ... }, () => { ... });
                                  const resolveResult1 = closure_1.resolve(value);
                                } else {
                                  closure_1(tmp2.arg);
                                }
                              }, fn);
                              const resolveResult = closure_1.resolve(fn.__await);
                            }
                            nextPromise = closure_1.resolve(fn).then((result) => {
                              iter.value = result;
                              lib(iter);
                            }, (arg0) => {
                              const tmp2 = closure_1_6(lib.throw, lib, arg0);
                              if ("throw" !== tmp2.type) {
                                iter = tmp2.arg;
                                fn = iter.value;
                                if (fn) {
                                  if (typeof fn === "object") {
                                    const call = closure_1.call;
                                    if (typeof call === "unknown") {
                                      let callResult = tmp9("__await");
                                    } else {
                                      callResult = call(fn, "__await");
                                    }
                                    tmp9 = closure_1;
                                  }
                                  fn = () => { ... };
                                  nextPromise = closure_1.resolve(fn.__await).then(() => { ... }, fn);
                                  const resolveResult = closure_1.resolve(fn.__await);
                                }
                                nextPromise = closure_1.resolve(fn).then(() => { ... }, () => { ... });
                                const resolveResult1 = closure_1.resolve(fn);
                              } else {
                                closure_1(tmp2.arg);
                              }
                            });
                            const resolveResult1 = closure_1.resolve(fn);
                          } else {
                            closure_1(tmp2.arg);
                          }
                        });
                        iter = tmp.arg;
                        let resolveResult1 = closure_1_1.resolve(value);
                      } else {
                        fn(tmp.arg);
                      }
                    });
                  }
                  return nextPromise;
                }
        };
        tmp = f66682(this, "_invoke", obj);
        return;
      }
    }
    closure_11 = {};
    let obj = {};
    tmp7(obj, tmp3, function() {
      return this;
    });
    let _Object = Object;
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
    let tmp9Result = tmp9;
    if (tmp9) {
      tmp9Result = tmp9(tmp9(values([])));
    }
    let tmp11 = tmp9Result;
    if (tmp9Result) {
      tmp11 = tmp9Result !== prototype;
    }
    if (!tmp11) {
      if (tmp11) {
        obj = tmp9Result;
      }
      function defineIteratorMethods(arg0) {
        closure_0 = arg0;
        const items = ["next", "throw", "return"];
        const item = items.forEach((item, index) => {
          closure_0 = item;
          define2(closure_0, item, function(arg0) {
            return this._invoke(closure_0, arg0);
          });
        });
      }
      const _Object2 = Object;
      obj = Object.create(obj);
      Generator.prototype = obj;
      GeneratorFunctionPrototype.prototype = obj;
      class Generator {
        constructor() {
          return;
        }
      }
      GeneratorFunction.prototype = GeneratorFunctionPrototype;
      class GeneratorFunction {
        constructor() {
          return;
        }
      }
      tmp15[0] = GeneratorFunctionPrototype;
      class GeneratorFunctionPrototype {
        constructor() {
          return;
        }
      }
      tmp(obj, "constructor", tmp15);
      class AsyncIterator {
        constructor(arg0, arg1) {
          closure_0 = arg0;
          closure_1 = arg1;
          obj = {
            value: function enqueue(arg0, arg1) {
                      closure_0 = arg0;
                      closure_1 = arg1;
                      if (nextPromise) {
                        function callInvokeWithMethodAndArg(result) {
                          return new closure_1((arg0, fn) => {
                            closure_0 = arg0;
                            closure_1 = fn;
                            const tmp = closure_1_6(closure_1_0[closure_0], closure_1_0, closure_1);
                            if ("throw" !== tmp.type) {
                              let value = tmp.arg.value;
                              if (value) {
                                if (typeof value === "object") {
                                  let call = closure_1_1.call;
                                  if (typeof call === "unknown") {
                                    let callResult = closure_1_1("__await");
                                  } else {
                                    callResult = call(value, "__await");
                                  }
                                  if (callResult) {
                                    closure_1_1.resolve(value.__await).then((result) => {
                                      const tmp2 = closure_1_6(lib.next, lib, result);
                                      if ("throw" !== tmp2.type) {
                                        iter = tmp2.arg;
                                        const value = iter.value;
                                        if (value) {
                                          if (typeof value === "object") {
                                            const call = closure_1.call;
                                            if (typeof call === "unknown") {
                                              let callResult = tmp9("__await");
                                            } else {
                                              callResult = call(value, "__await");
                                            }
                                            if (callResult) {
                                              closure_1.resolve(value.__await).then(() => { ... }, () => { ... });
                                              const resolveResult = closure_1.resolve(value.__await);
                                            }
                                            tmp9 = closure_1;
                                          }
                                        }
                                        closure_1.resolve(value).then(() => { ... }, () => { ... });
                                        const resolveResult1 = closure_1.resolve(value);
                                      } else {
                                        closure_1(tmp2.arg);
                                      }
                                    }, (arg0) => {
                                      const tmp2 = closure_1_6(lib.throw, lib, arg0);
                                      if ("throw" !== tmp2.type) {
                                        iter = tmp2.arg;
                                        const value = iter.value;
                                        if (value) {
                                          if (typeof value === "object") {
                                            const call = closure_1.call;
                                            if (typeof call === "unknown") {
                                              let callResult = tmp9("__await");
                                            } else {
                                              callResult = call(value, "__await");
                                            }
                                            if (callResult) {
                                              closure_1.resolve(value.__await).then(() => { ... }, () => { ... });
                                              const resolveResult = closure_1.resolve(value.__await);
                                            }
                                            tmp9 = closure_1;
                                          }
                                        }
                                        closure_1.resolve(value).then(() => { ... }, () => { ... });
                                        const resolveResult1 = closure_1.resolve(value);
                                      } else {
                                        closure_1(tmp2.arg);
                                      }
                                    });
                                    let resolveResult = closure_1_1.resolve(value.__await);
                                  }
                                }
                              }
                              closure_1_1.resolve(value).then((result) => {
                                iter.value = result;
                                lib(iter);
                              }, (arg0) => {
                                const tmp2 = closure_1_6(lib.throw, lib, arg0);
                                if ("throw" !== tmp2.type) {
                                  iter = tmp2.arg;
                                  fn = iter.value;
                                  if (fn) {
                                    if (typeof fn === "object") {
                                      const call = closure_1.call;
                                      if (typeof call === "unknown") {
                                        let callResult = tmp9("__await");
                                      } else {
                                        callResult = call(fn, "__await");
                                      }
                                      tmp9 = closure_1;
                                    }
                                    fn = () => { ... };
                                    nextPromise = closure_1.resolve(fn.__await).then(() => { ... }, fn);
                                    const resolveResult = closure_1.resolve(fn.__await);
                                  }
                                  nextPromise = closure_1.resolve(fn).then(() => { ... }, () => { ... });
                                  const resolveResult1 = closure_1.resolve(fn);
                                } else {
                                  closure_1(tmp2.arg);
                                }
                              });
                              iter = tmp.arg;
                              let resolveResult1 = closure_1_1.resolve(value);
                            } else {
                              fn(tmp.arg);
                            }
                          });
                        }
                        nextPromise = nextPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg);
                      } else {
                        nextPromise = new closure_1((arg0, fn) => {
                          closure_0 = arg0;
                          closure_1 = fn;
                          const tmp = closure_1_6(closure_1_0[closure_0], closure_1_0, closure_1);
                          if ("throw" !== tmp.type) {
                            let value = tmp.arg.value;
                            if (value) {
                              if (typeof value === "object") {
                                let call = closure_1_1.call;
                                if (typeof call === "unknown") {
                                  let callResult = closure_1_1("__await");
                                } else {
                                  callResult = call(value, "__await");
                                }
                                if (callResult) {
                                  closure_1_1.resolve(value.__await).then((result) => {
                                    const tmp2 = closure_1_6(lib.next, lib, result);
                                    if ("throw" !== tmp2.type) {
                                      iter = tmp2.arg;
                                      const value = iter.value;
                                      if (value) {
                                        if (typeof value === "object") {
                                          const call = closure_1.call;
                                          if (typeof call === "unknown") {
                                            let callResult = tmp9("__await");
                                          } else {
                                            callResult = call(value, "__await");
                                          }
                                          if (callResult) {
                                            closure_1.resolve(value.__await).then((result) => {
                                              const tmp2 = closure_1_6(lib.next, lib, result);
                                              if ("throw" !== tmp2.type) {
                                                iter = tmp2.arg;
                                                const value = iter.value;
                                                if (value) {
                                                  if (typeof value === "object") {
                                                    const call = closure_1.call;
                                                    if (typeof call === "unknown") {
                                                      let callResult = tmp9("__await");
                                                    } else {
                                                      callResult = call(value, "__await");
                                                    }
                                                    if (callResult) {
                                                      closure_1.resolve(value.__await).then(() => { ... }, () => { ... });
                                                      const resolveResult = closure_1.resolve(value.__await);
                                                    }
                                                    tmp9 = closure_1;
                                                  }
                                                }
                                                closure_1.resolve(value).then(() => { ... }, () => { ... });
                                                const resolveResult1 = closure_1.resolve(value);
                                              } else {
                                                closure_1(tmp2.arg);
                                              }
                                            }, (arg0) => {
                                              const tmp2 = closure_1_6(lib.throw, lib, arg0);
                                              if ("throw" !== tmp2.type) {
                                                iter = tmp2.arg;
                                                const value = iter.value;
                                                if (value) {
                                                  if (typeof value === "object") {
                                                    const call = closure_1.call;
                                                    if (typeof call === "unknown") {
                                                      let callResult = tmp9("__await");
                                                    } else {
                                                      callResult = call(value, "__await");
                                                    }
                                                    if (callResult) {
                                                      closure_1.resolve(value.__await).then(() => { ... }, () => { ... });
                                                      const resolveResult = closure_1.resolve(value.__await);
                                                    }
                                                    tmp9 = closure_1;
                                                  }
                                                }
                                                closure_1.resolve(value).then(() => { ... }, () => { ... });
                                                const resolveResult1 = closure_1.resolve(value);
                                              } else {
                                                closure_1(tmp2.arg);
                                              }
                                            });
                                            const resolveResult = closure_1.resolve(value.__await);
                                          }
                                          tmp9 = closure_1;
                                        }
                                      }
                                      closure_1.resolve(value).then((result) => {
                                        iter.value = result;
                                        lib(iter);
                                      }, (arg0) => {
                                        const tmp2 = closure_1_6(lib.throw, lib, arg0);
                                        if ("throw" !== tmp2.type) {
                                          iter = tmp2.arg;
                                          fn = iter.value;
                                          if (fn) {
                                            if (typeof fn === "object") {
                                              const call = closure_1.call;
                                              if (typeof call === "unknown") {
                                                let callResult = tmp9("__await");
                                              } else {
                                                callResult = call(fn, "__await");
                                              }
                                              tmp9 = closure_1;
                                            }
                                            fn = () => { ... };
                                            nextPromise = closure_1.resolve(fn.__await).then(() => { ... }, fn);
                                            const resolveResult = closure_1.resolve(fn.__await);
                                          }
                                          nextPromise = closure_1.resolve(fn).then(() => { ... }, () => { ... });
                                          const resolveResult1 = closure_1.resolve(fn);
                                        } else {
                                          closure_1(tmp2.arg);
                                        }
                                      });
                                      const resolveResult1 = closure_1.resolve(value);
                                    } else {
                                      closure_1(tmp2.arg);
                                    }
                                  }, (arg0) => {
                                    const tmp2 = closure_1_6(lib.throw, lib, arg0);
                                    if ("throw" !== tmp2.type) {
                                      iter = tmp2.arg;
                                      const value = iter.value;
                                      if (value) {
                                        if (typeof value === "object") {
                                          const call = closure_1.call;
                                          if (typeof call === "unknown") {
                                            let callResult = tmp9("__await");
                                          } else {
                                            callResult = call(value, "__await");
                                          }
                                          if (callResult) {
                                            closure_1.resolve(value.__await).then((result) => {
                                              const tmp2 = closure_1_6(lib.next, lib, result);
                                              if ("throw" !== tmp2.type) {
                                                iter = tmp2.arg;
                                                const value = iter.value;
                                                if (value) {
                                                  if (typeof value === "object") {
                                                    const call = closure_1.call;
                                                    if (typeof call === "unknown") {
                                                      let callResult = tmp9("__await");
                                                    } else {
                                                      callResult = call(value, "__await");
                                                    }
                                                    if (callResult) {
                                                      closure_1.resolve(value.__await).then(() => { ... }, () => { ... });
                                                      const resolveResult = closure_1.resolve(value.__await);
                                                    }
                                                    tmp9 = closure_1;
                                                  }
                                                }
                                                closure_1.resolve(value).then(() => { ... }, () => { ... });
                                                const resolveResult1 = closure_1.resolve(value);
                                              } else {
                                                closure_1(tmp2.arg);
                                              }
                                            }, (arg0) => {
                                              const tmp2 = closure_1_6(lib.throw, lib, arg0);
                                              if ("throw" !== tmp2.type) {
                                                iter = tmp2.arg;
                                                const value = iter.value;
                                                if (value) {
                                                  if (typeof value === "object") {
                                                    const call = closure_1.call;
                                                    if (typeof call === "unknown") {
                                                      let callResult = tmp9("__await");
                                                    } else {
                                                      callResult = call(value, "__await");
                                                    }
                                                    if (callResult) {
                                                      closure_1.resolve(value.__await).then(() => { ... }, () => { ... });
                                                      const resolveResult = closure_1.resolve(value.__await);
                                                    }
                                                    tmp9 = closure_1;
                                                  }
                                                }
                                                closure_1.resolve(value).then(() => { ... }, () => { ... });
                                                const resolveResult1 = closure_1.resolve(value);
                                              } else {
                                                closure_1(tmp2.arg);
                                              }
                                            });
                                            const resolveResult = closure_1.resolve(value.__await);
                                          }
                                          tmp9 = closure_1;
                                        }
                                      }
                                      closure_1.resolve(value).then((result) => {
                                        iter.value = result;
                                        lib(iter);
                                      }, (arg0) => {
                                        const tmp2 = closure_1_6(lib.throw, lib, arg0);
                                        if ("throw" !== tmp2.type) {
                                          iter = tmp2.arg;
                                          fn = iter.value;
                                          if (fn) {
                                            if (typeof fn === "object") {
                                              const call = closure_1.call;
                                              if (typeof call === "unknown") {
                                                let callResult = tmp9("__await");
                                              } else {
                                                callResult = call(fn, "__await");
                                              }
                                              tmp9 = closure_1;
                                            }
                                            fn = () => { ... };
                                            nextPromise = closure_1.resolve(fn.__await).then(() => { ... }, fn);
                                            const resolveResult = closure_1.resolve(fn.__await);
                                          }
                                          nextPromise = closure_1.resolve(fn).then(() => { ... }, () => { ... });
                                          const resolveResult1 = closure_1.resolve(fn);
                                        } else {
                                          closure_1(tmp2.arg);
                                        }
                                      });
                                      const resolveResult1 = closure_1.resolve(value);
                                    } else {
                                      closure_1(tmp2.arg);
                                    }
                                  });
                                  let resolveResult = closure_1_1.resolve(value.__await);
                                }
                              }
                            }
                            closure_1_1.resolve(value).then((result) => {
                              iter.value = result;
                              lib(iter);
                            }, (arg0) => {
                              const tmp2 = closure_1_6(lib.throw, lib, arg0);
                              if ("throw" !== tmp2.type) {
                                iter = tmp2.arg;
                                fn = iter.value;
                                if (fn) {
                                  if (typeof fn === "object") {
                                    const call = closure_1.call;
                                    if (typeof call === "unknown") {
                                      let callResult = tmp9("__await");
                                    } else {
                                      callResult = call(fn, "__await");
                                    }
                                    tmp9 = closure_1;
                                  }
                                  fn = (arg0) => {
                                    const tmp2 = closure_1_6(lib.throw, lib, arg0);
                                    if ("throw" !== tmp2.type) {
                                      iter = tmp2.arg;
                                      const value = iter.value;
                                      if (value) {
                                        if (typeof value === "object") {
                                          const call = closure_1.call;
                                          if (typeof call === "unknown") {
                                            let callResult = tmp9("__await");
                                          } else {
                                            callResult = call(value, "__await");
                                          }
                                          if (callResult) {
                                            closure_1.resolve(value.__await).then(() => { ... }, () => { ... });
                                            const resolveResult = closure_1.resolve(value.__await);
                                          }
                                          tmp9 = closure_1;
                                        }
                                      }
                                      closure_1.resolve(value).then(() => { ... }, () => { ... });
                                      const resolveResult1 = closure_1.resolve(value);
                                    } else {
                                      closure_1(tmp2.arg);
                                    }
                                  };
                                  nextPromise = closure_1.resolve(fn.__await).then((result) => {
                                    const tmp2 = closure_1_6(lib.next, lib, result);
                                    if ("throw" !== tmp2.type) {
                                      iter = tmp2.arg;
                                      const value = iter.value;
                                      if (value) {
                                        if (typeof value === "object") {
                                          const call = closure_1.call;
                                          if (typeof call === "unknown") {
                                            let callResult = tmp9("__await");
                                          } else {
                                            callResult = call(value, "__await");
                                          }
                                          if (callResult) {
                                            closure_1.resolve(value.__await).then(() => { ... }, () => { ... });
                                            const resolveResult = closure_1.resolve(value.__await);
                                          }
                                          tmp9 = closure_1;
                                        }
                                      }
                                      closure_1.resolve(value).then(() => { ... }, () => { ... });
                                      const resolveResult1 = closure_1.resolve(value);
                                    } else {
                                      closure_1(tmp2.arg);
                                    }
                                  }, fn);
                                  const resolveResult = closure_1.resolve(fn.__await);
                                }
                                nextPromise = closure_1.resolve(fn).then((result) => {
                                  iter.value = result;
                                  lib(iter);
                                }, (arg0) => {
                                  const tmp2 = closure_1_6(lib.throw, lib, arg0);
                                  if ("throw" !== tmp2.type) {
                                    iter = tmp2.arg;
                                    fn = iter.value;
                                    if (fn) {
                                      if (typeof fn === "object") {
                                        const call = closure_1.call;
                                        if (typeof call === "unknown") {
                                          let callResult = tmp9("__await");
                                        } else {
                                          callResult = call(fn, "__await");
                                        }
                                        tmp9 = closure_1;
                                      }
                                      fn = () => { ... };
                                      nextPromise = closure_1.resolve(fn.__await).then(() => { ... }, fn);
                                      const resolveResult = closure_1.resolve(fn.__await);
                                    }
                                    nextPromise = closure_1.resolve(fn).then(() => { ... }, () => { ... });
                                    const resolveResult1 = closure_1.resolve(fn);
                                  } else {
                                    closure_1(tmp2.arg);
                                  }
                                });
                                const resolveResult1 = closure_1.resolve(fn);
                              } else {
                                closure_1(tmp2.arg);
                              }
                            });
                            iter = tmp.arg;
                            let resolveResult1 = closure_1_1.resolve(value);
                          } else {
                            fn(tmp.arg);
                          }
                        });
                      }
                      return nextPromise;
                    }
          };
          tmp = f66682(this, "_invoke", obj);
          return;
        }
      }
      tmp17[0] = GeneratorFunction;
      tmp(GeneratorFunctionPrototype, "constructor", tmp17);
      GeneratorFunction.displayName = tmp7(GeneratorFunctionPrototype, tmp5, "GeneratorFunction");
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
      arg0.mark = (arg0) => {
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
      arg0.awrap = (__await) => ({ __await });
      const result = defineIteratorMethods(AsyncIterator.prototype);
      tmp7(AsyncIterator.prototype, tmp4, function() {
        return this;
      });
      arg0.AsyncIterator = AsyncIterator;
      arg0.async = (arg0, fn) => {
        if (!fn) {
          let tmp4 = Generator;
        } else {
          tmp4 = fn;
        }
        let items = arg3;
        let obj = Object.create(tmp4.prototype);
        if (!arg3) {
          items = [];
        }
        obj = Object.create(Context.prototype);
        const items1 = [{ tryLoc: "root" }];
        obj.tryEntries = items1;
        const item = items.forEach(pushTryEntry, obj);
        obj.reset(true);
        obj = {
          value: function invoke(method, arg1) {
            if (closure_3 === closure_1_9) {
              const _Error = Error;
              error = new Error("Generator is already running");
              throw error;
            } else if (tmp === closure_1_10) {
              if ("throw" === method) {
                throw arg1;
              } else {
                return { value: "HermesInternal", done: "HermesInternal" };
              }
            } else {
              _undefined.method = method;
              _undefined.arg = arg1;
              while (true) {
                let delegate = _undefined.delegate;
                if (delegate) {
                  let tmp3 = maybeInvokeDelegate(delegate, _undefined);
                  if (tmp3) {
                    if (tmp3 === closure_1_11) {
                      continue;
                    } else {
                      return tmp3;
                    }
                  }
                }
                if ("next" === _undefined.method) {
                  let arg = _undefined.arg;
                  _undefined._sent = arg;
                  _undefined.sent = arg;
                } else if ("throw" === _undefined.method) {
                  if (closure_3 === closure_1_7) {
                    break;
                  } else {
                    let dispatchExceptionResult = _undefined.dispatchException(_undefined.arg);
                  }
                } else if ("return" === _undefined.method) {
                  let abruptResult = _undefined.abrupt("return", _undefined.arg);
                }
                closure_3 = closure_1_9;
                let tmp13 = tryCatch(_undefined, _Promise, _undefined);
                if ("normal" === tmp13.type) {
                  closure_3 = _undefined.done ? closure_1_10 : closure_1_8;
                  if (tmp13.arg === closure_1_11) {
                    continue;
                  } else {
                    let obj = { value: null, done: null };
                    obj[0] = tmp13.arg;
                    obj[1] = _undefined.done;
                    return obj;
                  }
                } else {
                  if ("throw" !== tmp13.type) {
                    continue;
                  } else {
                    closure_3 = closure_1_10;
                    _undefined.method = "throw";
                    _undefined.arg = tmp13.arg;
                    continue;
                  }
                  continue;
                }
                continue;
              }
              closure_3 = closure_1_10;
              throw _undefined.arg;
            }
          }
        };
        let callback = obj;
        closure_3 = closure_7;
        callback(obj, "_invoke", obj);
        Object.create(AsyncIterator.prototype);
        let iter = obj;
        callback = undefined;
        callback(iter, "_invoke", {
          value: function enqueue(arg0, arg1) {
            closure_0 = arg0;
            closure_1 = arg1;
            if (nextPromise) {
              function callInvokeWithMethodAndArg(result) {
                return new closure_1((arg0, fn) => {
                  closure_0 = arg0;
                  closure_1 = fn;
                  const tmp = closure_1_6(closure_1_0[closure_0], closure_1_0, closure_1);
                  if ("throw" !== tmp.type) {
                    let value = tmp.arg.value;
                    if (value) {
                      if (typeof value === "object") {
                        let call = closure_1_1.call;
                        if (typeof call === "unknown") {
                          let callResult = closure_1_1("__await");
                        } else {
                          callResult = call(value, "__await");
                        }
                        if (callResult) {
                          closure_1_1.resolve(value.__await).then(() => { ... }, () => { ... });
                          let resolveResult = closure_1_1.resolve(value.__await);
                        }
                      }
                    }
                    closure_1_1.resolve(value).then(() => { ... }, () => { ... });
                    iter = tmp.arg;
                    let resolveResult1 = closure_1_1.resolve(value);
                  } else {
                    fn(tmp.arg);
                  }
                });
              }
              nextPromise = nextPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg);
            } else {
              nextPromise = new closure_1((arg0, fn) => {
                closure_0 = arg0;
                closure_1 = fn;
                const tmp = closure_1_6(closure_1_0[closure_0], closure_1_0, closure_1);
                if ("throw" !== tmp.type) {
                  let value = tmp.arg.value;
                  if (value) {
                    if (typeof value === "object") {
                      let call = closure_1_1.call;
                      if (typeof call === "unknown") {
                        let callResult = closure_1_1("__await");
                      } else {
                        callResult = call(value, "__await");
                      }
                      if (callResult) {
                        closure_1_1.resolve(value.__await).then((result) => {
                          const tmp2 = closure_1_6(lib.next, lib, result);
                          if ("throw" !== tmp2.type) {
                            iter = tmp2.arg;
                            const value = iter.value;
                            if (value) {
                              if (typeof value === "object") {
                                const call = closure_1.call;
                                if (typeof call === "unknown") {
                                  let callResult = tmp9("__await");
                                } else {
                                  callResult = call(value, "__await");
                                }
                                if (callResult) {
                                  closure_1.resolve(value.__await).then(() => { ... }, () => { ... });
                                  const resolveResult = closure_1.resolve(value.__await);
                                }
                                tmp9 = closure_1;
                              }
                            }
                            closure_1.resolve(value).then(() => { ... }, () => { ... });
                            const resolveResult1 = closure_1.resolve(value);
                          } else {
                            closure_1(tmp2.arg);
                          }
                        }, (arg0) => {
                          const tmp2 = closure_1_6(lib.throw, lib, arg0);
                          if ("throw" !== tmp2.type) {
                            iter = tmp2.arg;
                            const value = iter.value;
                            if (value) {
                              if (typeof value === "object") {
                                const call = closure_1.call;
                                if (typeof call === "unknown") {
                                  let callResult = tmp9("__await");
                                } else {
                                  callResult = call(value, "__await");
                                }
                                if (callResult) {
                                  closure_1.resolve(value.__await).then(() => { ... }, () => { ... });
                                  const resolveResult = closure_1.resolve(value.__await);
                                }
                                tmp9 = closure_1;
                              }
                            }
                            closure_1.resolve(value).then(() => { ... }, () => { ... });
                            const resolveResult1 = closure_1.resolve(value);
                          } else {
                            closure_1(tmp2.arg);
                          }
                        });
                        let resolveResult = closure_1_1.resolve(value.__await);
                      }
                    }
                  }
                  closure_1_1.resolve(value).then((result) => {
                    iter.value = result;
                    lib(iter);
                  }, (arg0) => {
                    const tmp2 = closure_1_6(lib.throw, lib, arg0);
                    if ("throw" !== tmp2.type) {
                      iter = tmp2.arg;
                      fn = iter.value;
                      if (fn) {
                        if (typeof fn === "object") {
                          const call = closure_1.call;
                          if (typeof call === "unknown") {
                            let callResult = tmp9("__await");
                          } else {
                            callResult = call(fn, "__await");
                          }
                          tmp9 = closure_1;
                        }
                        fn = () => { ... };
                        nextPromise = closure_1.resolve(fn.__await).then(() => { ... }, fn);
                        const resolveResult = closure_1.resolve(fn.__await);
                      }
                      nextPromise = closure_1.resolve(fn).then(() => { ... }, () => { ... });
                      const resolveResult1 = closure_1.resolve(fn);
                    } else {
                      closure_1(tmp2.arg);
                    }
                  });
                  iter = tmp.arg;
                  let resolveResult1 = closure_1_1.resolve(value);
                } else {
                  fn(tmp.arg);
                }
              });
            }
            return nextPromise;
          }
        });
        let nextPromise = iter;
        if (!iter.isGeneratorFunction(fn)) {
          nextPromise = iter.next().then((result) => {
            if (result.done) {
              let nextResult = result.value;
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
      tmp7(obj, tmp3, function() {
        return this;
      });
      tmp7(obj, "toString", () => "[object Generator]");
      arg0.keys = (arg0) => {
        const ObjectResult = Object(arg0);
        closure_0 = ObjectResult;
        const items = [];
        for (const key10008 in ObjectResult) {
          let arr = items.push(key10008);
          continue;
        }
        const reversed = items.reverse();
        function next() {
          if (items.length) {
            const arr = items.pop();
            next.value = arr;
            next.done = false;
            return next;
          }
          next.done = true;
          return next;
        }
        return next;
      };
      arg0.values = values;
      obj = { constructor: null, reset: null, stop: null, dispatchException: null, abrupt: null, complete: null, finish: null, catch: null, delegateYield: null };
      obj[0] = Context;
      obj[1] = function reset(arg0) {
        const obj = { prev: 0, next: 0, _sent: undefined, sent: undefined, done: false, delegate: null, method: "next", arg: undefined };
        const tryEntries = obj.tryEntries;
        const item = tryEntries.forEach(resetTryEntry);
        if (!arg0) {
          for (const key10018 in obj) {
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
              let call = hasOwnProperty.call;
              if (typeof call === "unknown") {
                let callResult = hasOwnProperty(key10018);
              } else {
                callResult = call(obj, key10018);
              }
            }
          }
        }
      };
      obj[2] = function stop() {
        this.done = true;
        const completion = this.tryEntries[0].completion;
        if ("throw" === completion.type) {
          throw completion.arg;
        } else {
          return tmp.rval;
        }
      };
      obj[3] = function dispatchException(arg0) {
        const self = this;
        if (this.done) {
          throw arg0;
        } else {
          let diff = self.tryEntries.length - 1;
          if (0 <= diff) {
            const completion = tmp2.completion;
            while ("root" !== self.tryEntries[diff].tryLoc) {
              if (tmp2.tryLoc <= self.prev) {
                let call2 = hasOwnProperty.call;
                let tmp4 = typeof call2 === "unknown" ? hasOwnProperty("catchLoc") : call2(tmp2, "catchLoc");
                let call = hasOwnProperty.call;
                let tmp5 = typeof call === "unknown" ? hasOwnProperty("finallyLoc") : call(tmp2, "finallyLoc");
                if (tmp4) {
                  if (tmp5) {
                    if (self.prev < tmp2.catchLoc) {
                      completion.type = "throw";
                      completion.arg = arg0;
                      self.next = tmp2.catchLoc;
                      self.method = "next";
                      self.arg = undefined;
                      let flag3 = true;
                      return true;
                    } else if (self.prev < tmp2.finallyLoc) {
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
                    completion.type = "throw";
                    completion.arg = arg0;
                    self.next = tmp2.catchLoc;
                    self.method = "next";
                    self.arg = undefined;
                    let flag = true;
                    return true;
                  }
                } else if (tmp5) {
                  if (self.prev < tmp2.finallyLoc) {
                    completion.type = "throw";
                    completion.arg = arg0;
                    self.next = tmp2.finallyLoc;
                    let flag5 = false;
                    return false;
                  }
                } else {
                  let _Error = Error;
                  error = new Error("try statement without catch or finally");
                  throw error;
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
      obj[4] = function abrupt(type, arg1) {
        const self = this;
        let diff = this.tryEntries.length - 1;
        let tmp2;
        if (0 <= diff) {
          while (true) {
            let tmp3 = self.tryEntries[diff];
            if (tmp3.tryLoc <= self.prev) {
              let call = hasOwnProperty.call;
              if (typeof call === "unknown" ? hasOwnProperty("finallyLoc") : call(tmp3, "finallyLoc")) {
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
      obj[5] = function complete(type, next) {
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
      obj[6] = function finish(arg0) {
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
      obj[7] = function catch(arg0) {
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
        error = new Error("illegal catch attempt");
        throw error;
      };
      obj[8] = function delegateYield(next, resultName, nextLoc) {
        closure_0 = next;
        if (!next) {
          const obj = { next: null };
          obj[0] = doneResult;
          let tmp3 = obj;
        } else if (next[closure_3]) {
          let call = tmp2.call;
          typeof call === "unknown" ? tmp2() : call(next);
        } else {
          tmp3 = next;
          if (typeof next.next !== "function") {
            const _isNaN = isNaN;
            if (!isNaN(next.length)) {
              c1 = -1;
              next = function next() {
                const sum = sum1 + 1;
                sum1 = sum;
                if (sum < next.length) {
                  while (true) {
                    let call = v1.call;
                    let tmp3 = sum1;
                    if (typeof call === "unknown" ? v1(tmp3) : call(next, tmp3)) {
                      break;
                    } else {
                      sum1 = sum1 + 1;
                    }
                  }
                  next.value = next[sum1];
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
        }
        this.delegate = { iterator: tmp3, resultName, nextLoc };
        if ("next" === this.method) {
          tmp6.arg = undefined;
        }
        return closure_11;
      };
      Context.prototype = obj;
      return arg0;
    } else {
      let call = hasOwnProperty.call;
      if (typeof call === "unknown") {
        let hasOwnPropertyResult = hasOwnProperty(tmp3);
      } else {
        hasOwnPropertyResult = call(tmp9Result, tmp3);
      }
    }
  } catch (err) {
    define2 = function define(arg0, arg1, arg2) {
      arg0[arg1] = arg2;
      return arg2;
    };
    tmp7 = define2;
  }
})(typeof obj === "object" ? obj.exports : {});