// === Module 688: ? ===

// Module 688
import _slicedToArray from "_slicedToArray" /* 32 */;

let _self, c4;

function processEvent(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return closure_3(this, undefined, undefined, function*() {
    let obj12;
    let obj5;
    let v1;
    let v3;
    function getExceptionGroup(originalException) {
      let isErrorLikeResult;
      let tmp = originalException;
      const items = [];
      const obj = closure_1_0(entries[1]);
      if (obj.isErrorLike(originalException)) {
        do {
          let arr = items.push(tmp);
          let cause = tmp.cause;
          let obj2 = closure_1_0(entries[1]);
          tmp = cause;
          isErrorLikeResult = obj2.isErrorLike(cause);
        } while (isErrorLikeResult);
      }
      return items;
    }
    function replaceThreadFramesInEvent(threads, arr) {
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
    }
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c5;
      let closure_4;
      try {
        let c0;
        let entries;
        let closure_2;
        let stack;
        let closure_5;
        v3 = 2;
        const tmp4 = v1;
        if (0 === v1) {
          if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            c0 = undefined;
            entries = undefined;
            closure_2 = undefined;
            stack = undefined;
            closure_4 = undefined;
            closure_5 = undefined;
            const exception = closure_0.exception;
            let values2;
            if (null !== exception) {
              if (undefined !== exception) {
                values2 = exception.values;
              }
            }
            if (values2) {
              const obj3 = closure_0(entries[1]);
              const tmp37 = entries;
              if (obj3.isErrorLike(entries.originalException)) {
                const obj7 = getExceptionGroup(tmp37.originalException);
                entries = obj7.entries();
                closure_0 = entries[Symbol.iterator]();
              }
              v3 = 3;
              const obj8 = { value: closure_131_0, done: true };
              return obj8;
            }
            if (entries.syntheticException) {
              const obj4 = closure_0(entries[1]);
              if (obj4.isErrorLike(entries.syntheticException)) {
                stack = tmp38.syntheticException.stack;
                v1 = 3;
                v3 = 1;
                const obj9 = { value: v1(stack, obj5.getFramesToPop(entries.syntheticException)), done: false };
                obj5 = closure_0(entries[1]);
                return obj9;
              }
            }
          }
        } else if (1 === tmp4) {
          c5 = 0;
          closure_0.return();
          throw closure_4;
        } else if (2 === tmp4) {
          if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            closure_0.return();
            v3 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            closure_4 = value;
            const tmp23 = closure_4;
            if (tmp23) {
              v3(closure_131_0.exception.values[closure_2], closure_4);
            }
            c5 = 0;
          }
        } else if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          let obj = { value, done: true };
          return obj;
        } else {
          closure_5 = value;
          if (closure_131_0.exception) {
            let values = closure_5 && closure_131_0.exception.values;
            if (values) {
              v3(closure_131_0.exception.values[0], closure_5);
            }
          } else {
            let threads = closure_131_0.threads && closure_5;
            if (threads) {
              replaceThreadFramesInEvent(closure_131_0, closure_5);
            }
          }
        }
        if (closure_0 !== undefined) {
          c5 = 1;
          c0 = tmp48;
          entries = closure_2(c0, 2);
          closure_2 = entries[0];
          stack = entries[1];
          const stack2 = stack.stack;
          v1 = 2;
          v3 = 1;
          const obj11 = { value: v1(stack2, obj12.getFramesToPop(stack)), done: false };
          obj12 = closure_0(entries[1]);
          return obj11;
        }
      } catch (tmp50) {
        closure_4 = tmp50;
        if (0 === c5) {
          v3 = 3;
          throw tmp50;
        } else {
          v1 = 1;
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
  return closure_3(undefined, undefined, undefined, function*() {
    let obj12;
    function convertReactNativeFramesToSentryFrames(arg0) {
      closure_0 = arg0;
      return closure_3(undefined, undefined, undefined, function() {
        const self = this;
        let c1 = 0;
        return (function*(arg0) {
          if (c1 === 2) {
            c1 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else {
            const tmp8 = arg0;
            if (tmp2 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                let obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              try {
                c1 = 2;
                if (arg0 === 1) {
                  c1 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c1 = 3;
                  let obj3 = { value, done: true };
                  return obj3;
                } else {
                  _self = self;
                  const tmp4 = globalThis;
                  c1 = 3;
                  let obj = {
                    value: Promise.all(_self.map((item) => {
                              closure_0 = item;
                              return closure_2_3(closure_0, undefined, undefined, function*() {
                                let column;
                                if (c0 === 2) {
                                  c0 = 3;
                                  throw new TypeError("Generator functions may not be called on executing generators");
                                } else if (tmp2 === 3) {
                                  if (arg0 === 1) {
                                    throw value;
                                  } else if (arg0 === 2) {
                                    const obj2 = { value, done: true };
                                    return obj2;
                                  } else {
                                    return { value: "IconComponent", done: null };
                                  }
                                } else {
                                  try {
                                    c0 = 2;
                                    if (arg0 === 1) {
                                      c0 = 3;
                                      throw value;
                                    } else if (arg0 === 2) {
                                      c0 = 3;
                                      const obj3 = { value, done: true };
                                      return obj3;
                                    } else {
                                      column = column.column && tmp8.lineNumber && undefined !== tmp8.file;
                                      if (column) {
                                        const file = tmp8.file;
                                        column = !file.includes("node_modules");
                                      }
                                      if (column) {
                                        const file2 = tmp8.file;
                                        column = !file2.includes("native code");
                                      }
                                      const obj = { lineno: null, colno: null, filename: null, function: null, in_app: column };
                                      ({ lineNumber: obj.lineno, column: obj.colno, file: obj.filename, methodName: obj.function } = column);
                                      c0 = 3;
                                      const obj4 = { value: obj, done: true };
                                      return obj4;
                                    }
                                  } catch (tmp4) {
                                    c0 = 3;
                                    throw tmp4;
                                  }
                                }
                              });
                            })),
                    done: true
                  };
                  return obj;
                }
              } catch (tmp6) {
                c1 = 3;
                throw tmp6;
              }
            }
          }
        })();
      });
    }
    if (c5 === 2) {
      c5 = 3;
      let str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else {
      const str2 = "Unable to symbolicate stack trace: ";
      const str3 = "stack";
      if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        let closure_2;
        try {
          let closure_1;
          let closure_4;
          c5 = 2;
          let tmp4 = c4;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              let obj4 = { value, done: true };
              return obj4;
            } else {
              closure_1 = tmp;
              closure_0 = undefined;
              let stack;
              closure_2 = undefined;
              closure_3 = undefined;
              closure_4 = undefined;
              c3 = 1;
              const obj11 = closure_0(closure_1[2]);
              const parseErrorStackResult = obj11.parseErrorStack(closure_0);
              c4 = 2;
              c5 = 1;
              const obj5 = { value: obj12.symbolicateStackTrace(parseErrorStackResult), done: false };
              obj12 = closure_0(closure_1[2]);
              return obj5;
            }
          } else if (1 === tmp4) {
            c3 = 0;
            const message = closure_2;
            const _Error = Error;
            if (message instanceof Error) {
              const debug2 = closure_0(closure_1[3]).debug;
              const _HermesInternal = HermesInternal;
              debug2.warn("Unable to symbolicate stack trace: " + message.message);
            }
            c5 = 3;
            return { value: null, done: true };
          } else if (2 === tmp4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              closure_0 = value;
              const tmp43 = closure_0;
              if (tmp43) {
                let substr;
                if ("stack" in closure_0) {
                  stack = tmp16.stack;
                } else {
                  stack = tmp16;
                }
                const _Math = Math;
                closure_2 = Math.max(closure_129_1 - 1, 0);
                if (closure_2) {
                  substr = arr.slice(closure_2);
                } else {
                  substr = arr;
                }
                closure_3 = substr.filter((file) => {
                  file = file.file;
                  if (file) {
                    const str = file.file;
                    file = null === str.match(closure_1_4);
                  }
                  return file;
                });
                c4 = 3;
                c5 = 1;
                const obj7 = { value: convertReactNativeFramesToSentryFrames(closure_3), done: false };
                return obj7;
              } else {
                const debug = closure_0(closure_1[3]).debug;
                debug.error("React Native DevServer could not symbolicate the stack trace.");
                c3 = 0;
                c5 = 3;
                return { value: null, done: true };
              }
            }
          } else if (3 === tmp4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              const tmp6 = closure_1;
              closure_4 = value;
              let tmp8 = closure_1;
              let obj3 = closure_0(closure_1[2]);
              c4 = 4;
              c5 = 1;
              const obj9 = { value: obj3.fetchSourceContext(closure_4), done: false };
              return obj9;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            c3 = 0;
            c5 = 3;
            let obj = { value, done: true };
            return obj;
          }
        } catch (tmp35) {
          closure_2 = tmp35;
          if (0 === c3) {
            c5 = 3;
            throw tmp35;
          } else {
            c4 = 1;
          }
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
let closure_3 = this && this.__awaiter || ((arg0, arg1, arg2, arg3) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let _Promise = arg2;
  const Promise = arg2;
  closure_3 = arg3;
  if (!arg2) {
    let tmp = globalThis;
    _Promise = Promise;
  }
  const _Promise1 = new _Promise(function(fn, arg1) {
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
        fn(done.value);
      } else {
        let tmp1 = done.value;
        const value = tmp1;
        if (!(tmp1 instanceof Promise)) {
          const self = this;
          const self2 = this;
          tmp1 = new tmp((fn) => {
            fn(value);
          });
        }
        tmp1.then(fulfilled, iter);
      }
    }
    let items = closure_1;
    const tmp = iter;
    const apply = iter.apply;
    const tmp2 = closure_0;
    if (!closure_1) {
      items = [];
    }
    iter = apply(tmp2, items);
    const iter2 = iter.next();
    let value = iter2.value;
    if (iter2.done) {
      const tmp5 = fn(value);
    } else {
      let tmp32 = value;
      if (!(value instanceof fulfilled)) {
        let self = this;
        let self2 = this;
        tmp32 = new tmp3((fn) => {
          fn(value);
        });
      }
      tmp32.then(fulfilled, rejected);
    }
  });
  return _Promise1;
});
let items = ["ReactNativeRenderer-dev\\.js$", "MessageQueue\\.js$"];
const regExp = new RegExp(items.join("|"));

export const debugSymbolicatorIntegration = () => ({
  name: "DebugSymbolicator",
  setupOnce() {

  },
  processEvent
});