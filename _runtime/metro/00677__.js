// _runtime/metro/00677__.js
import _slicedToArray from "00032__.js";

const require = arg1;
function processEvent(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return fn(this, undefined, undefined, function*(arg0, value) {
    if (v32 === 2) {
      v32 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        v32 = 2;
        if (0 === v3) {
          if (arg0 === 1) {
            v32 = 3;
            throw value;
          } else if (arg0 === 2) {
            v32 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp7;
            closure_130_0 = undefined;
            closure_130_1 = undefined;
            closure_130_2 = undefined;
            closure_130_3 = undefined;
            closure_130_4 = undefined;
            closure_130_5 = undefined;
            const exception = closure_0.exception;
            let values;
            if (null !== exception) {
              if (undefined !== exception) {
                values = exception.values;
              }
            }
            if (values) {
              let obj2 = closure_0(entries[1]);
              if (obj2.isErrorLike(entries.originalException)) {
                entries = (function getExceptionGroup(originalException) {
                  let isErrorLikeResult;
                  let tmp = originalException;
                  const items = [];
                  if (obj.isErrorLike(originalException)) {
                    do {
                      let arr = items.push(tmp);
                      let cause = tmp.cause;
                      let obj2 = closure_1_0(678);
                      tmp = cause;
                      isErrorLikeResult = obj2.isErrorLike(cause);
                    } while (isErrorLikeResult);
                  }
                  return items;
                })(tmp40.originalException).entries();
                closure_0 = entries[Symbol.iterator]();
                if (closure_0 !== undefined) {
                  c5 = 1;
                  closure_130_0 = tmp51;
                  closure_130_1 = closure_2(closure_130_0, 2);
                  closure_130_2 = closure_130_1[0];
                  closure_130_3 = closure_130_1[1];
                  v3 = 2;
                  v32 = 1;
                  const obj1 = { value: v3(closure_130_3.stack, closure_0(entries[1]).getFramesToPop(closure_130_3)), done: false };
                  return obj1;
                }
                const obj7 = (function getExceptionGroup(originalException) {
                  let isErrorLikeResult;
                  let tmp = originalException;
                  const items = [];
                  if (obj.isErrorLike(originalException)) {
                    do {
                      let arr = items.push(tmp);
                      let cause = tmp.cause;
                      let obj2 = closure_1_0(678);
                      tmp = cause;
                      isErrorLikeResult = obj2.isErrorLike(cause);
                    } while (isErrorLikeResult);
                  }
                  return items;
                })(tmp40.originalException);
              }
              v32 = 3;
              tmp40 = entries;
            }
            if (entries.syntheticException) {
              let obj3 = closure_0(entries[1]);
              if (obj3.isErrorLike(tmp41.syntheticException)) {
                v3 = 3;
                v32 = 1;
                obj2 = { value: v3(tmp41.syntheticException.stack, closure_0(entries[1]).getFramesToPop(tmp41.syntheticException)), done: false };
                return obj2;
              }
            }
          }
        } else if (1 === tmp7) {
          c5 = 0;
          closure_0.return();
          throw closure_4;
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            v32 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            closure_0.return();
            v32 = 3;
            obj3 = { value, done: true };
            return obj3;
          } else {
            closure_130_4 = value;
            if (closure_130_4) {
              v32(closure_131_0.exception.values[closure_130_2], closure_130_4);
            }
            c5 = 0;
          }
        } else if (arg0 === 1) {
          v32 = 3;
          throw value;
        } else if (arg0 === 2) {
          v32 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_130_5 = value;
          if (!closure_131_0.exception) {
            let threads = closure_131_0.threads;
            if (threads) {
              threads = closure_130_5;
            }
            if (threads) {
              (function replaceThreadFramesInEvent(threads, arr) {
                threads = threads.threads;
                let values;
                if (null !== threads) {
                  if (undefined !== threads) {
                    values = threads.values;
                  }
                }
                let first;
                if (null !== values) {
                  if (undefined !== values) {
                    first = values[0];
                  }
                }
                let stacktrace;
                if (null !== first) {
                  if (undefined !== first) {
                    stacktrace = first.stacktrace;
                  }
                }
                if (stacktrace) {
                  threads.threads.values[0].stacktrace.frames = arr.reverse();
                }
              })(closure_131_0, closure_130_5);
            }
          }
        }
        values = closure_130_5;
        if (closure_130_5) {
          values = closure_131_0.exception.values;
        }
        if (values) {
          v32(closure_131_0.exception.values[0], closure_130_5);
        }
      } catch (tmp54) {
        closure_4 = tmp54;
        if (tmp4 === c5) {
          v32 = tmp2;
          throw tmp54;
        } else {
          v3 = tmp;
        }
      }
    }
  });
}
function symbolicate(arg0) {
  closure_0 = arg0;
  return fn(undefined, undefined, undefined, function*(arg0, value) {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_0 = tmp7;
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            closure_128_2 = undefined;
            closure_128_3 = undefined;
            closure_128_4 = undefined;
            c3 = 1;
            const obj10 = closure_0(tmp3[2]);
            const parseErrorStackResult = closure_0(tmp3[2]).parseErrorStack(closure_0);
            c4 = 2;
            c5 = 1;
            let obj1 = { value: closure_0(tmp3[2]).symbolicateStackTrace(parseErrorStackResult), done: false };
            return obj1;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_128_5 = closure_2;
          const _Error = Error;
          if (closure_128_5 instanceof Error) {
            const debug2 = closure_0(tmp3[3]).debug;
            const _HermesInternal = HermesInternal;
            debug2.warn("Unable to symbolicate stack trace: " + closure_128_5.message);
          }
          c5 = 3;
          return { value: null, done: true };
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            let obj2 = { value, done: true };
            return obj2;
          } else {
            closure_128_0 = value;
            if (closure_128_0) {
              if ("stack" in closure_128_0) {
                let stack = tmp19.stack;
              } else {
                stack = tmp19;
              }
              closure_128_1 = stack;
              const _Math = Math;
              closure_128_2 = Math.max(closure_129_1 - 1, 0);
              let found = closure_128_1;
              if (closure_128_2) {
                let substr = found.slice(closure_128_2);
              } else {
                substr = found;
              }
              found = substr.filter((file) => {
                file = file.file;
                if (file) {
                  file = null === file.file.match(closure_1_4);
                }
                return file;
              });
              closure_128_3 = found;
              (function convertReactNativeFramesToSentryFrames(arg0) {
                closure_0 = arg0;
                return closure_3(undefined, undefined, undefined, function() {
                  const self = this;
                  c1 = 0;
                  return (function*(arg0, value) {
                    if (c1 === 2) {
                      c1 = 3;
                      throw new TypeError("Generator functions may not be called on executing generators");
                    } else if (tmp3 === 3) {
                      if (arg0 === 1) {
                        throw value;
                      } else if (arg0 === 2) {
                        let obj = { value, done: true };
                        return obj;
                      } else {
                        return { value: "HermesInternal", done: null };
                      }
                    } else {
                      try {
                        c1 = 2;
                        if (arg0 === 1) {
                          c1 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c1 = 3;
                          obj = { value, done: true };
                          return obj;
                        } else {
                          _self = self;
                          c1 = 3;
                          obj = { value: Promise.all(_self.map(() => { ... })), done: true };
                          return obj;
                        }
                      } catch (tmp7) {
                        c1 = tmp;
                        throw tmp7;
                      }
                    }
                  })();
                });
              })(closure_128_3);
              c4 = 3;
              c5 = 1;
            } else {
              const debug = closure_0(tmp3[3]).debug;
              debug.error("React Native DevServer could not symbolicate the stack trace.");
              c3 = 0;
              c5 = 3;
              return { value: null, done: true };
            }
          }
        } else if (3 === tmp7) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_128_4 = value;
            obj2 = closure_0(tmp3[2]);
            c4 = 4;
            c5 = 1;
            const obj4 = { value: obj2.fetchSourceContext(closure_128_4), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          c3 = 0;
          c5 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp39) {
        closure_2 = tmp39;
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp39;
        } else {
          c4 = tmp;
        }
      }
    }
  });
}
function replaceExceptionFramesInException(stacktrace, arr) {
  stacktrace = undefined;
  if (null != stacktrace) {
    stacktrace = stacktrace.stacktrace;
  }
  if (stacktrace) {
    stacktrace.stacktrace.frames = arr.reverse();
  }
}
let fn = this;
if (this) {
  fn = this.__awaiter;
}
if (!fn) {
  fn = (arg0, arg1, arg2, arg3) => {
    closure_0 = arg0;
    closure_1 = arg1;
    let _Promise = arg2;
    closure_3 = arg3;
    if (!arg2) {
      _Promise = Promise;
    }
    _Promise = new _Promise((fn, arg1) => {
      closure_0 = fn;
      closure_1 = arg1;
      function fulfilled(result) {
        try {
          step(iter.next(result));
        } catch (tmp5) {
          closure_1(tmp5);
        }
      }
      function rejected(arg0) {
        try {
          step(iter.throw(arg0));
        } catch (tmp5) {
          closure_1(tmp5);
        }
      }
      let iter = rejected;
      function step(done) {
        if (done.done) {
          closure_0(done.value);
        } else {
          let tmp = done.value;
          closure_0 = tmp;
          if (!(tmp instanceof Promise)) {
            tmp = new tmp((fn) => {
              fn(value);
            });
          }
          tmp.then(fulfilled, iter);
        }
      }
      let items = closure_1;
      if (!closure_1) {
        items = [];
      }
      iter = iter.apply(closure_0, items);
      const iter2 = iter.next();
      value = iter2.value;
      if (iter2.done) {
        fn(value);
      } else {
        closure_0 = value;
        let tmp3 = value;
        if (!(value instanceof fulfilled)) {
          tmp3 = new tmp3((fn) => {
            fn(value);
          });
        }
        tmp3.then(fulfilled, rejected);
      }
    });
    return _Promise;
  };
}
let items = ["ReactNativeRenderer-dev\\.js$", "MessageQueue\\.js$"];
const regExp = new RegExp(items.join("|"));

export () => ({
  name: "DebugSymbolicator",
  setupOnce() {

  },
  processEvent
})