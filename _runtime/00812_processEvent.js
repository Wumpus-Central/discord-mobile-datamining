import _slicedToArray from "_slicedToArray";

const require = arg1;
function processEvent(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return fn(this, undefined, undefined, function*() {
    if (v02 === 2) {
      v02 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        v02 = 2;
        if (0 === v0) {
          if (arg0 === 1) {
            v02 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v02 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let stack = tmp3;
            let _slicedToArray = tmp7;
            let closure_0;
            let dependencyMap;
            _slicedToArray = undefined;
            stack = undefined;
            let closure_4;
            let closure_5;
            const exception = outer1_0.exception;
            let values;
            if (null !== exception) {
              if (undefined !== exception) {
                values = exception.values;
              }
            }
            if (values) {
              let obj2 = outer1_0(outer1_1[1]);
              if (obj2.isErrorLike(outer1_1.originalException)) {
                const entries = (function getExceptionGroup(originalException) {
                  let isErrorLikeResult;
                  let tmp = originalException;
                  const items = [];
                  if (obj.isErrorLike(originalException)) {
                    do {
                      let arr = items.push(tmp);
                      let cause = tmp.cause;
                      let tmp3 = tmp51;
                      let tmp4 = dependencyMap;
                      let obj2 = tmp51(813);
                      tmp = cause;
                      isErrorLikeResult = obj2.isErrorLike(cause);
                    } while (isErrorLikeResult);
                  }
                  return items;
                })(tmp40.originalException).entries();
                dependencyMap = entries;
                dependencyMap = entries;
                closure_0 = entries[Symbol.iterator]();
                if (closure_0 !== undefined) {
                  closure_5 = 1;
                  closure_0 = tmp51;
                  dependencyMap = outer1_2(closure_0, 2);
                  _slicedToArray = 32;
                  stack = 813;
                  v0 = 2;
                  v02 = 1;
                  const obj1 = { value: null, done: false };
                  obj1[0] = v0(stack.stack, outer1_0(outer1_1[1]).getFramesToPop(stack));
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
                      let tmp3 = tmp51;
                      let tmp4 = dependencyMap;
                      let obj2 = tmp51(813);
                      tmp = cause;
                      isErrorLikeResult = obj2.isErrorLike(cause);
                    } while (isErrorLikeResult);
                  }
                  return items;
                })(tmp40.originalException);
              }
              v02 = 3;
              tmp40 = outer1_1;
            }
            if (outer1_1.syntheticException) {
              let obj3 = outer1_0(outer1_1[1]);
              if (obj3.isErrorLike(tmp41.syntheticException)) {
                v0 = 3;
                v02 = 1;
                obj2 = { value: null, done: false };
                obj2[0] = v0(tmp41.syntheticException.stack, outer1_0(outer1_1[1]).getFramesToPop(tmp41.syntheticException));
                return obj2;
              }
            }
          }
        } else if (1 === tmp7) {
          closure_5 = 0;
          closure_0.return();
          throw closure_4;
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            v02 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            closure_5 = 0;
            closure_0.return();
            v02 = 3;
            obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            closure_4 = arg1;
            if (closure_4) {
              v02(closure_0.exception.values[_slicedToArray], closure_4);
            }
            closure_5 = 0;
          }
        } else if (arg0 === 1) {
          v02 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          v02 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          closure_5 = arg1;
          if (!closure_0.exception) {
            let threads = closure_0.threads;
            if (threads) {
              threads = closure_5;
            }
            if (threads) {
              (function replaceThreadFramesInEvent(closure_0, closure_5) {
                const threads = closure_0.threads;
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
                  closure_0.threads.values[0].stacktrace.frames = closure_5.reverse();
                }
              })(closure_0, closure_5);
            }
          }
        }
        values = closure_5;
        if (closure_5) {
          values = closure_0.exception.values;
        }
        if (values) {
          v02(closure_0.exception.values[0], closure_5);
        }
      } catch (tmp54) {
        closure_4 = tmp54;
        if (tmp4 === closure_5) {
          v02 = tmp2;
          throw tmp54;
        } else {
          v0 = tmp;
        }
      }
    }
  });
}
function symbolicate(arg0) {
  let closure_0 = arg0;
  let num = arg1;
  if (arg1 === undefined) {
    num = 0;
  }
  return fn(undefined, undefined, undefined, function*() {
    if (message === 2) {
      message = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        message = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            message = 3;
            throw arg1;
          } else if (arg0 === 2) {
            message = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let stack = tmp3;
            let closure_0 = tmp7;
            closure_0 = undefined;
            stack = undefined;
            let _slicedToArray;
            let c3;
            c4 = undefined;
            c3 = 1;
            const obj10 = outer1_0(outer1_1[2]);
            const parseErrorStackResult = outer1_0(outer1_1[2]).parseErrorStack(outer1_0);
            c4 = 2;
            message = 1;
            let obj1 = { value: null, done: false };
            obj1[0] = outer1_0(outer1_1[2]).symbolicateStackTrace(parseErrorStackResult);
            return obj1;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          message = _slicedToArray;
          const _Error = Error;
          if (message instanceof Error) {
            const debug2 = outer1_0(outer1_1[3]).debug;
            const _HermesInternal = HermesInternal;
            debug2.warn("Unable to symbolicate stack trace: " + message.message);
          }
          message = 3;
          return { value: null, done: true };
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            message = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            message = 3;
            let obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            closure_0 = arg1;
            if (closure_0) {
              if ("stack" in closure_0) {
                stack = tmp19.stack;
              } else {
                stack = tmp19;
              }
              const _Math = Math;
              _slicedToArray = Math.max(outer1_1 - 1, 0);
              let found = stack;
              if (_slicedToArray) {
                let substr = found.slice(_slicedToArray);
              } else {
                substr = found;
              }
              found = substr.filter((file) => {
                file = file.file;
                if (file) {
                  file = null === file.file.match(c4);
                  const str = file.file;
                }
                return file;
              });
              c3 = found;
              (function convertReactNativeFramesToSentryFrames(c3) {
                let closure_0 = c3;
                return v0(undefined, undefined, undefined, function() {
                  const self = this;
                  let c1 = 0;
                  return (function*() {
                    if (c1 === 2) {
                      c1 = 3;
                      HermesBuiltin.throwTypeError();
                    } else if (tmp3 === 3) {
                      if (arg0 === 1) {
                        throw arg1;
                      } else if (arg0 === 2) {
                        let obj = { value: null, done: true };
                        obj[0] = arg1;
                        return obj;
                      } else {
                        return { value: "HermesInternal", done: null };
                      }
                    } else {
                      try {
                        c1 = 2;
                        if (arg0 === 1) {
                          c1 = 3;
                          throw arg1;
                        } else if (arg0 === 2) {
                          c1 = 3;
                          obj = { value: null, done: true };
                          obj[0] = arg1;
                          return obj;
                        } else {
                          c1 = 3;
                          obj = { value: null, done: true };
                          obj[0] = Promise.all(self.map(() => { ... }));
                          return obj;
                        }
                      } catch (tmp7) {
                        c1 = tmp;
                        throw tmp7;
                      }
                    }
                  })();
                });
              })(c3);
              c4 = 3;
              message = 1;
            } else {
              const debug = outer1_0(outer1_1[3]).debug;
              debug.error("React Native DevServer could not symbolicate the stack trace.");
              c3 = 0;
              message = 3;
              return { value: null, done: true };
            }
          }
        } else if (3 === tmp7) {
          if (arg0 === 1) {
            message = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            message = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            c4 = arg1;
            obj2 = outer1_0(outer1_1[2]);
            c4 = 4;
            message = 1;
            const obj4 = { value: null, done: false };
            obj4[0] = obj2.fetchSourceContext(c4);
            return obj4;
          }
        } else if (arg0 === 1) {
          message = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 0;
          message = 3;
          const obj5 = { value: null, done: true };
          obj5[0] = arg1;
          return obj5;
        } else {
          c3 = 0;
          message = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
      } catch (tmp39) {
        _slicedToArray = tmp39;
        if (tmp4 === c3) {
          message = tmp2;
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
    let closure_0 = arg0;
    let closure_1 = arg1;
    let _Promise = arg2;
    let closure_3 = arg3;
    if (!arg2) {
      _Promise = Promise;
    }
    _Promise = new _Promise((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      function fulfilled(arg0) {
        try {
          step(iter.next(arg0));
        } catch (tmp5) {
          callback2(tmp5);
        }
      }
      function rejected(arg0) {
        try {
          step(iter.throw(arg0));
        } catch (tmp5) {
          callback2(tmp5);
        }
      }
      let iter = rejected;
      function step(done) {
        if (done.done) {
          callback(done.value);
        } else {
          let tmp = done.value;
          callback = tmp;
          if (!(tmp instanceof fulfilled)) {
            tmp = new tmp((arg0) => {
              arg0(closure_0);
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
      const value = iter2.value;
      if (iter2.done) {
        arg0(value);
      } else {
        closure_0 = value;
        let tmp3 = value;
        if (!(value instanceof fulfilled)) {
          tmp3 = new tmp3((arg0) => {
            arg0(closure_0);
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