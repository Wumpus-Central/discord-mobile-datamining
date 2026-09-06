// _runtime/metro/01027__.js
import _mod682 from "00682__.js";
import NativeModules from "../00866_NativeModules.js";
import _mod987 from "00987__.js";

require = arg1;
let dependencyMap = arg6;
function fetchNativeFrames() {
  return new Promise((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c2 = false;
    const timeout = setTimeout(() => {
      if (!c2) {
        c2 = true;
        closure_1("Fetching native frames took too long. Dropping frames.");
      }
    }, 2000);
    const NATIVE = closure_0(866).NATIVE;
    const nativeFrames = NATIVE.fetchNativeFrames();
    nativeFrames.then((result) => {
      if (!c2) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_3);
        c2 = true;
        if (result) {
          closure_0(result);
        } else {
          closure_1("Native frames response is null.");
        }
      }
    }).then(undefined, (arg0) => {
      if (!c2) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_3);
        c2 = true;
        closure_1(arg0);
      }
    });
  });
}
function isClose(arg0, arg1) {
  return Math.abs(arg0 - arg1) < 0.05;
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
const NativeFrames = "NativeFrames";
function nativeFramesIntegration() {
  _require = null;
  asyncExpiringMap = new require("AsyncExpiringMap").AsyncExpiringMap({ ttl: 60000 });
  const asyncExpiringMap1 = new require("AsyncExpiringMap").AsyncExpiringMap({ ttl: 2000 });
  function fetchStartFramesForSpan(spanContext) {
    const spanId = spanContext.spanContext().spanId;
    let str = "child";
    if (obj.isRootSpan(spanContext)) {
      str = "root";
    }
    let debug = _mod682.debug;
    debug.log("[" + NativeFrames + "] Fetching frames for " + str + " span start (" + spanId + ").");
    obj = _mod987;
    const result = asyncExpiringMap.set(spanId, new Promise((arg0) => {
      closure_0 = arg0;
      const promise = new Promise((arg0, arg1) => {
        closure_0 = arg0;
        closure_1 = arg1;
        c2 = false;
        const timeout = setTimeout(() => {
          if (!c2) {
            c2 = true;
            closure_1("Fetching native frames took too long. Dropping frames.");
          }
        }, 2000);
        const NATIVE = closure_0(866).NATIVE;
        const nativeFrames = NATIVE.fetchNativeFrames();
        nativeFrames.then((result) => {
          if (!c2) {
            const _clearTimeout = clearTimeout;
            clearTimeout(closure_3);
            c2 = true;
            if (result) {
              closure_0(result);
            } else {
              closure_1("Native frames response is null.");
            }
          }
        }).then(undefined, (arg0) => {
          if (!c2) {
            const _clearTimeout = clearTimeout;
            clearTimeout(closure_3);
            c2 = true;
            closure_1(arg0);
          }
        });
      });
      new Promise((arg0, arg1) => {
        closure_0 = arg0;
        closure_1 = arg1;
        c2 = false;
        const timeout = setTimeout(() => {
          if (!c2) {
            c2 = true;
            closure_1("Fetching native frames took too long. Dropping frames.");
          }
        }, 2000);
        const NATIVE = closure_0(866).NATIVE;
        const nativeFrames = NATIVE.fetchNativeFrames();
        nativeFrames.then((result) => {
          if (!c2) {
            const _clearTimeout = clearTimeout;
            clearTimeout(closure_3);
            c2 = true;
            if (result) {
              closure_0(result);
            } else {
              closure_1("Native frames response is null.");
            }
          }
        }).then(undefined, (arg0) => {
          if (!c2) {
            const _clearTimeout = clearTimeout;
            clearTimeout(closure_3);
            c2 = true;
            closure_1(arg0);
          }
        });
      }).then((result) => closure_0(result)).then(undefined, (arg0) => {
        const debug = closure_2_0(asyncExpiringMap[2]).debug;
        debug.log("[" + fetchStartFramesForSpan + "] Error while fetching native frames.", arg0);
        closure_0(null);
      });
    }));
    let promise = new Promise((arg0) => {
      closure_0 = arg0;
      const promise = new Promise((arg0, arg1) => {
        closure_0 = arg0;
        closure_1 = arg1;
        c2 = false;
        const timeout = setTimeout(() => {
          if (!c2) {
            c2 = true;
            closure_1("Fetching native frames took too long. Dropping frames.");
          }
        }, 2000);
        const NATIVE = closure_0(866).NATIVE;
        const nativeFrames = NATIVE.fetchNativeFrames();
        nativeFrames.then((result) => {
          if (!c2) {
            const _clearTimeout = clearTimeout;
            clearTimeout(closure_3);
            c2 = true;
            if (result) {
              closure_0(result);
            } else {
              closure_1("Native frames response is null.");
            }
          }
        }).then(undefined, (arg0) => {
          if (!c2) {
            const _clearTimeout = clearTimeout;
            clearTimeout(closure_3);
            c2 = true;
            closure_1(arg0);
          }
        });
      });
      new Promise((arg0, arg1) => {
        closure_0 = arg0;
        closure_1 = arg1;
        c2 = false;
        const timeout = setTimeout(() => {
          if (!c2) {
            c2 = true;
            closure_1("Fetching native frames took too long. Dropping frames.");
          }
        }, 2000);
        const NATIVE = closure_0(866).NATIVE;
        const nativeFrames = NATIVE.fetchNativeFrames();
        nativeFrames.then((result) => {
          if (!c2) {
            const _clearTimeout = clearTimeout;
            clearTimeout(closure_3);
            c2 = true;
            if (result) {
              closure_0(result);
            } else {
              closure_1("Native frames response is null.");
            }
          }
        }).then(undefined, (arg0) => {
          if (!c2) {
            const _clearTimeout = clearTimeout;
            clearTimeout(closure_3);
            c2 = true;
            closure_1(arg0);
          }
        });
      }).then((result) => closure_0(result)).then(undefined, (arg0) => {
        const debug = closure_2_0(asyncExpiringMap[2]).debug;
        debug.log("[" + fetchStartFramesForSpan + "] Error while fetching native frames.", arg0);
        closure_0(null);
      });
    });
  }
  function fetchEndFramesForSpan(arg0) {
    closure_0 = arg0;
    return asyncExpiringMap1(undefined, undefined, undefined, async () => {
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
              let obj5 = tmp7;
              closure_128_0 = undefined;
              closure_128_1 = undefined;
              closure_128_2 = undefined;
              closure_128_3 = undefined;
              closure_128_4 = undefined;
              closure_128_5 = undefined;
              closure_128_6 = undefined;
              closure_128_0 = obj5(682).timestampInSeconds();
              const spanId = obj5.spanContext().spanId;
              closure_128_1 = spanId;
              if (tmp3.has(spanId)) {
                let obj6 = obj5(987);
                if (obj6.isRootSpan(obj5)) {
                  const debug4 = obj5(682).debug;
                  const _HermesInternal4 = HermesInternal;
                  debug4.log("[" + fetchStartFramesForSpan + "] Fetch frames for root span end (" + spanId + ").");
                  let promise = new Promise((arg0) => {
                    closure_0 = arg0;
                    const promise = new Promise((arg0, arg1) => {
                      closure_0 = arg0;
                      closure_1 = arg1;
                      c2 = false;
                      const timeout = setTimeout(() => { ... }, 2000);
                      const NATIVE = closure_0(866).NATIVE;
                      const nativeFrames = NATIVE.fetchNativeFrames();
                      nativeFrames.then(() => { ... }).then(undefined, () => { ... });
                    });
                    new Promise((arg0, arg1) => {
                      closure_0 = arg0;
                      closure_1 = arg1;
                      c2 = false;
                      const timeout = setTimeout(() => { ... }, 2000);
                      const NATIVE = closure_0(866).NATIVE;
                      const nativeFrames = NATIVE.fetchNativeFrames();
                      nativeFrames.then(() => { ... }).then(undefined, () => { ... });
                    }).then((nativeFrames) => {
                      closure_0({ timestamp, nativeFrames });
                    }).then(undefined, (arg0) => {
                      const debug = obj5(682).debug;
                      debug.log("[" + c3 + "] Error while fetching native frames.", arg0);
                      closure_0(null);
                    });
                  });
                  const result = tmp70.set(spanId, promise);
                }
                c3 = 1;
                c4 = 2;
                c5 = 1;
                const obj1 = { value: tmp3.get(spanId), done: false };
                return obj1;
              }
              const obj11 = obj5(682);
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              closure_128_7 = tmp70;
              const debug3 = obj5(682).debug;
              const _HermesInternal3 = HermesInternal;
              debug3.log("[" + fetchStartFramesForSpan + "] Error while capturing end frames for span " + closure_128_1 + ".", closure_128_7);
            } else if (2 === tmp7) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                const obj2 = { value, done: true };
                return obj2;
              } else {
                closure_128_2 = value;
                if (closure_128_2) {
                  c4 = 3;
                  c5 = 1;
                  const obj3 = { value: fetchNativeFrames(), done: false };
                  return obj3;
                } else {
                  const debug2 = obj5(682).debug;
                  const _HermesInternal2 = HermesInternal;
                  debug2.log("[" + fetchStartFramesForSpan + "] No start frames found for span " + closure_128_1 + ", skipping frame data.");
                  c3 = 0;
                  c5 = 3;
                  const obj4 = { value: undefined, done: true };
                  return obj4;
                }
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_128_3 = value;
              closure_128_4 = closure_128_3.totalFrames - closure_128_2.totalFrames;
              closure_128_5 = closure_128_3.slowFrames - closure_128_2.slowFrames;
              closure_128_6 = closure_128_3.frozenFrames - closure_128_2.frozenFrames;
              let tmp10 = closure_128_4 > 0;
              if (!tmp10) {
                tmp10 = closure_128_5 > 0;
              }
              if (!tmp10) {
                tmp10 = closure_128_6 > 0;
              }
              if (tmp10) {
                const attr = closure_129_0.setAttribute("frames.total", closure_128_4);
                const attr1 = closure_129_0.setAttribute("frames.slow", closure_128_5);
                const attr2 = closure_129_0.setAttribute("frames.frozen", closure_128_6);
                let debug = obj5(682).debug;
                const _HermesInternal = HermesInternal;
                debug.log("[" + fetchStartFramesForSpan + "] Attached frame data to span " + closure_128_1 + ": total=" + closure_128_4 + ", slow=" + closure_128_5 + ", frozen=" + closure_128_6);
              }
              obj = obj5(987);
              if (!obj.isRootSpan(closure_129_0)) {
                obj5 = { timestamp: closure_128_0, nativeFrames: closure_128_3 };
              }
              c3 = 0;
            }
            c3 = 0;
            c5 = 3;
            obj6 = { value, done: true };
            return obj6;
          }
          c5 = 3;
        } catch (tmp70) {
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp70;
          } else {
            c4 = tmp;
          }
        }
      }
    });
  }
  return {
    name: fetchStartFramesForSpan,
    setup(on) {
      if (NativeModules.NATIVE.enableNative) {
        const NATIVE = NativeModules.NATIVE;
        const result = NATIVE.enableNativeFramesTracking();
        on.on("spanStart", fetchStartFramesForSpan);
        on.on("spanEnd", fetchEndFramesForSpan);
      } else {
        const debug = _mod682.debug;
        const _HermesInternal = HermesInternal;
        debug.warn("[" + NativeFrames + "] This is not available on the Web, Expo Go and other platforms without native modules.");
      }
    },
    processEvent(arg0) {
      closure_0 = arg0;
      return asyncExpiringMap1(undefined, undefined, undefined, async () => {
        if (c3 === 2) {
          c3 = 3;
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
            c3 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                dependencyMap = tmp4;
                value = 0;
                closure_128_0 = undefined;
                let op;
                closure_128_2 = undefined;
                closure_128_3 = undefined;
                let nativeFrames;
                closure_128_5 = undefined;
                closure_128_6 = undefined;
                if ("transaction" === value.type) {
                  if (value.transaction) {
                    if (value.contexts) {
                      if (value.contexts.trace) {
                        if (value.timestamp) {
                          if (value.contexts.trace.span_id) {
                            op = value.contexts.trace.op;
                            const span_id = value.contexts.trace.span_id;
                            closure_128_2 = span_id;
                            c2 = 1;
                            c3 = 1;
                            const obj1 = { value: dependencyMap.pop(span_id), done: false };
                            return obj1;
                          }
                        }
                      }
                    }
                  }
                }
                c3 = 3;
                const obj2 = { value, done: true };
                return obj2;
              }
            } else if (1 === tmp4) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                closure_128_3 = value;
                if (closure_128_3) {
                  c2 = 2;
                  c3 = 1;
                  const obj4 = { value: c2.pop(closure_128_2), done: false };
                  return obj4;
                } else {
                  const debug6 = value(682).debug;
                  const _HermesInternal6 = HermesInternal;
                  debug6.warn("[" + fetchStartFramesForSpan + "] Start frames of transaction " + closure_129_0.transaction + " (eventId, " + closure_129_0.event_id + ") are missing, but the transaction already ended.");
                  c3 = 3;
                  const obj5 = { value: closure_129_0, done: true };
                  return obj5;
                }
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              closure_128_5 = value;
              if (closure_128_5) {
                if (isClose(closure_128_5.timestamp, closure_129_0.timestamp)) {
                  const debug3 = value(682).debug;
                  const _HermesInternal3 = HermesInternal;
                  debug3.log("[" + fetchStartFramesForSpan + "] Using frames from root span end (spanId, " + closure_128_2 + ").");
                  nativeFrames = closure_128_5.nativeFrames;
                }
                const obj7 = { frames_total: null, frames_frozen: null, frames_slow: null };
                const obj8 = { value: nativeFrames.totalFrames - closure_128_3.totalFrames, unit: "none" };
                obj7.frames_total = obj8;
                const obj9 = { value: nativeFrames.frozenFrames - closure_128_3.frozenFrames, unit: "none" };
                obj7.frames_frozen = obj9;
                const obj10 = { value: nativeFrames.slowFrames - closure_128_3.slowFrames, unit: "none" };
                obj7.frames_slow = obj10;
                closure_128_6 = obj7;
                if (closure_128_6.frames_frozen.value <= 0) {
                  if (closure_128_6.frames_slow.value <= 0) {
                    c3 = 3;
                  }
                  const debug5 = value(682).debug;
                  const _HermesInternal5 = HermesInternal;
                  debug5.warn("[" + fetchStartFramesForSpan + "] Detected zero slow or frozen frames. Not adding measurements to spanId (" + closure_128_2 + ").");
                }
                const debug4 = value(682).debug;
                const _JSON = JSON;
                const _HermesInternal4 = HermesInternal;
                debug4.log("[" + fetchStartFramesForSpan + "] Adding measurements to " + op + " transaction " + closure_129_0.transaction + ": " + JSON.stringify(closure_128_6, undefined, 2));
                const measurements = closure_129_0.measurements;
                closure_128_0 = measurements;
                if (null !== measurements) {
                  if (undefined !== closure_128_0) {
                    let obj11 = closure_128_0;
                  }
                  tmp64.measurements = tmp66(tmp68({}, obj11), closure_128_6);
                }
                obj11 = {};
              }
              if (value) {
                if (isClose(value.timestamp, closure_129_0.timestamp)) {
                  const debug2 = value(682).debug;
                  const _HermesInternal2 = HermesInternal;
                  debug2.log("[" + fetchStartFramesForSpan + "] Using native frames from last child span end (spanId, " + closure_128_2 + ").");
                  nativeFrames = value.nativeFrames;
                }
              }
              const debug = value(682).debug;
              const _HermesInternal = HermesInternal;
              debug.warn("[" + fetchStartFramesForSpan + "] Frames were collected within larger than margin of error delay for spanId (" + closure_128_2 + "). Dropping the inaccurate values.");
              c3 = 3;
              obj = { value: closure_129_0, done: true };
              return obj;
            }
          } catch (tmp103) {
            c3 = tmp;
            throw tmp103;
          }
        }
      });
    }
  };
}

export const createNativeFramesIntegrations = (enableNative2) => {
  if (!enableNative2) {
    if (require("NativeModules").NATIVE.enableNative) {
      let NATIVE = tmp(tmp2[0]).NATIVE;
      let result = NATIVE.disableNativeFramesTracking();
    }
    tmp = _require;
    tmp2 = asyncExpiringMap;
  }
  if (typeof fetchEndFramesForSpan === "function") {
    _require = null;
    asyncExpiringMap = new require("AsyncExpiringMap").AsyncExpiringMap({ ttl: 60000 });
    const asyncExpiringMap1 = new require("AsyncExpiringMap").AsyncExpiringMap({ ttl: 2000 });
    function fetchStartFramesForSpan(spanContext) {
      const spanId = spanContext.spanContext().spanId;
      let str = "child";
      if (obj.isRootSpan(spanContext)) {
        str = "root";
      }
      let debug = _mod682.debug;
      debug.log("[" + NativeFrames + "] Fetching frames for " + str + " span start (" + spanId + ").");
      obj = _mod987;
      const result = asyncExpiringMap.set(spanId, new Promise((arg0) => {
        closure_0 = arg0;
        const promise = new Promise((arg0, arg1) => {
          closure_0 = arg0;
          closure_1 = arg1;
          c2 = false;
          const timeout = setTimeout(() => {
            if (!c2) {
              c2 = true;
              closure_1("Fetching native frames took too long. Dropping frames.");
            }
          }, 2000);
          const NATIVE = closure_0(866).NATIVE;
          const nativeFrames = NATIVE.fetchNativeFrames();
          nativeFrames.then((result) => {
            if (!c2) {
              const _clearTimeout = clearTimeout;
              clearTimeout(closure_3);
              c2 = true;
              if (result) {
                closure_0(result);
              } else {
                closure_1("Native frames response is null.");
              }
            }
          }).then(undefined, (arg0) => {
            if (!c2) {
              const _clearTimeout = clearTimeout;
              clearTimeout(closure_3);
              c2 = true;
              closure_1(arg0);
            }
          });
        });
        new Promise((arg0, arg1) => {
          closure_0 = arg0;
          closure_1 = arg1;
          c2 = false;
          const timeout = setTimeout(() => {
            if (!c2) {
              c2 = true;
              closure_1("Fetching native frames took too long. Dropping frames.");
            }
          }, 2000);
          const NATIVE = closure_0(866).NATIVE;
          const nativeFrames = NATIVE.fetchNativeFrames();
          nativeFrames.then((result) => {
            if (!c2) {
              const _clearTimeout = clearTimeout;
              clearTimeout(closure_3);
              c2 = true;
              if (result) {
                closure_0(result);
              } else {
                closure_1("Native frames response is null.");
              }
            }
          }).then(undefined, (arg0) => {
            if (!c2) {
              const _clearTimeout = clearTimeout;
              clearTimeout(closure_3);
              c2 = true;
              closure_1(arg0);
            }
          });
        }).then((result) => closure_0(result)).then(undefined, (arg0) => {
          const debug = closure_2_0(asyncExpiringMap[2]).debug;
          debug.log("[" + fetchStartFramesForSpan + "] Error while fetching native frames.", arg0);
          closure_0(null);
        });
      }));
      let promise = new Promise((arg0) => {
        closure_0 = arg0;
        const promise = new Promise((arg0, arg1) => {
          closure_0 = arg0;
          closure_1 = arg1;
          c2 = false;
          const timeout = setTimeout(() => {
            if (!c2) {
              c2 = true;
              closure_1("Fetching native frames took too long. Dropping frames.");
            }
          }, 2000);
          const NATIVE = closure_0(866).NATIVE;
          const nativeFrames = NATIVE.fetchNativeFrames();
          nativeFrames.then((result) => {
            if (!c2) {
              const _clearTimeout = clearTimeout;
              clearTimeout(closure_3);
              c2 = true;
              if (result) {
                closure_0(result);
              } else {
                closure_1("Native frames response is null.");
              }
            }
          }).then(undefined, (arg0) => {
            if (!c2) {
              const _clearTimeout = clearTimeout;
              clearTimeout(closure_3);
              c2 = true;
              closure_1(arg0);
            }
          });
        });
        new Promise((arg0, arg1) => {
          closure_0 = arg0;
          closure_1 = arg1;
          c2 = false;
          const timeout = setTimeout(() => {
            if (!c2) {
              c2 = true;
              closure_1("Fetching native frames took too long. Dropping frames.");
            }
          }, 2000);
          const NATIVE = closure_0(866).NATIVE;
          const nativeFrames = NATIVE.fetchNativeFrames();
          nativeFrames.then((result) => {
            if (!c2) {
              const _clearTimeout = clearTimeout;
              clearTimeout(closure_3);
              c2 = true;
              if (result) {
                closure_0(result);
              } else {
                closure_1("Native frames response is null.");
              }
            }
          }).then(undefined, (arg0) => {
            if (!c2) {
              const _clearTimeout = clearTimeout;
              clearTimeout(closure_3);
              c2 = true;
              closure_1(arg0);
            }
          });
        }).then((result) => closure_0(result)).then(undefined, (arg0) => {
          const debug = closure_2_0(asyncExpiringMap[2]).debug;
          debug.log("[" + fetchStartFramesForSpan + "] Error while fetching native frames.", arg0);
          closure_0(null);
        });
      });
    }
    fetchEndFramesForSpan = function fetchEndFramesForSpan(arg0) {
      closure_0 = arg0;
      return asyncExpiringMap1(undefined, undefined, undefined, async () => {
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
                let obj5 = tmp7;
                closure_128_0 = undefined;
                closure_128_1 = undefined;
                closure_128_2 = undefined;
                closure_128_3 = undefined;
                closure_128_4 = undefined;
                closure_128_5 = undefined;
                closure_128_6 = undefined;
                closure_128_0 = obj5(682).timestampInSeconds();
                const spanId = obj5.spanContext().spanId;
                closure_128_1 = spanId;
                if (tmp3.has(spanId)) {
                  let obj6 = obj5(987);
                  if (obj6.isRootSpan(obj5)) {
                    const debug4 = obj5(682).debug;
                    const _HermesInternal4 = HermesInternal;
                    debug4.log("[" + fetchStartFramesForSpan + "] Fetch frames for root span end (" + spanId + ").");
                    let promise = new Promise((arg0) => {
                      closure_0 = arg0;
                      const promise = new Promise((arg0, arg1) => {
                        closure_0 = arg0;
                        closure_1 = arg1;
                        c2 = false;
                        const timeout = setTimeout(() => { ... }, 2000);
                        const NATIVE = closure_0(866).NATIVE;
                        const nativeFrames = NATIVE.fetchNativeFrames();
                        nativeFrames.then(() => { ... }).then(undefined, () => { ... });
                      });
                      new Promise((arg0, arg1) => {
                        closure_0 = arg0;
                        closure_1 = arg1;
                        c2 = false;
                        const timeout = setTimeout(() => { ... }, 2000);
                        const NATIVE = closure_0(866).NATIVE;
                        const nativeFrames = NATIVE.fetchNativeFrames();
                        nativeFrames.then(() => { ... }).then(undefined, () => { ... });
                      }).then((nativeFrames) => {
                        closure_0({ timestamp, nativeFrames });
                      }).then(undefined, (arg0) => {
                        const debug = obj5(682).debug;
                        debug.log("[" + c3 + "] Error while fetching native frames.", arg0);
                        closure_0(null);
                      });
                    });
                    const result = tmp70.set(spanId, promise);
                  }
                  c3 = 1;
                  c4 = 2;
                  c5 = 1;
                  const obj1 = { value: tmp3.get(spanId), done: false };
                  return obj1;
                }
                const obj11 = obj5(682);
              }
            } else {
              if (1 === tmp7) {
                c3 = 0;
                closure_128_7 = tmp70;
                const debug3 = obj5(682).debug;
                const _HermesInternal3 = HermesInternal;
                debug3.log("[" + fetchStartFramesForSpan + "] Error while capturing end frames for span " + closure_128_1 + ".", closure_128_7);
              } else if (2 === tmp7) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  c5 = 3;
                  const obj2 = { value, done: true };
                  return obj2;
                } else {
                  closure_128_2 = value;
                  if (closure_128_2) {
                    c4 = 3;
                    c5 = 1;
                    const obj3 = { value: fetchNativeFrames(), done: false };
                    return obj3;
                  } else {
                    const debug2 = obj5(682).debug;
                    const _HermesInternal2 = HermesInternal;
                    debug2.log("[" + fetchStartFramesForSpan + "] No start frames found for span " + closure_128_1 + ", skipping frame data.");
                    c3 = 0;
                    c5 = 3;
                    const obj4 = { value: undefined, done: true };
                    return obj4;
                  }
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 !== 2) {
                closure_128_3 = value;
                closure_128_4 = closure_128_3.totalFrames - closure_128_2.totalFrames;
                closure_128_5 = closure_128_3.slowFrames - closure_128_2.slowFrames;
                closure_128_6 = closure_128_3.frozenFrames - closure_128_2.frozenFrames;
                let tmp10 = closure_128_4 > 0;
                if (!tmp10) {
                  tmp10 = closure_128_5 > 0;
                }
                if (!tmp10) {
                  tmp10 = closure_128_6 > 0;
                }
                if (tmp10) {
                  const attr = closure_129_0.setAttribute("frames.total", closure_128_4);
                  const attr1 = closure_129_0.setAttribute("frames.slow", closure_128_5);
                  const attr2 = closure_129_0.setAttribute("frames.frozen", closure_128_6);
                  let debug = obj5(682).debug;
                  const _HermesInternal = HermesInternal;
                  debug.log("[" + fetchStartFramesForSpan + "] Attached frame data to span " + closure_128_1 + ": total=" + closure_128_4 + ", slow=" + closure_128_5 + ", frozen=" + closure_128_6);
                }
                obj = obj5(987);
                if (!obj.isRootSpan(closure_129_0)) {
                  obj5 = { timestamp: closure_128_0, nativeFrames: closure_128_3 };
                }
                c3 = 0;
              }
              c3 = 0;
              c5 = 3;
              obj6 = { value, done: true };
              return obj6;
            }
            c5 = 3;
          } catch (tmp70) {
            if (tmp4 === c3) {
              c5 = tmp2;
              throw tmp70;
            } else {
              c4 = tmp;
            }
          }
        }
      });
    };
    let obj = {
      name: fetchStartFramesForSpan,
      setup(on) {
          if (NativeModules.NATIVE.enableNative) {
            const NATIVE = NativeModules.NATIVE;
            const result = NATIVE.enableNativeFramesTracking();
            on.on("spanStart", fetchStartFramesForSpan);
            on.on("spanEnd", fetchEndFramesForSpan);
          } else {
            const debug = _mod682.debug;
            const _HermesInternal = HermesInternal;
            debug.warn("[" + NativeFrames + "] This is not available on the Web, Expo Go and other platforms without native modules.");
          }
        },
      processEvent(arg0) {
          closure_0 = arg0;
          return asyncExpiringMap1(undefined, undefined, undefined, async () => {
            if (c3 === 2) {
              c3 = 3;
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
                c3 = 2;
                if (0 === c2) {
                  if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    obj = { value, done: true };
                    return obj;
                  } else {
                    dependencyMap = tmp4;
                    value = 0;
                    closure_128_0 = undefined;
                    let op;
                    closure_128_2 = undefined;
                    closure_128_3 = undefined;
                    let nativeFrames;
                    closure_128_5 = undefined;
                    closure_128_6 = undefined;
                    if ("transaction" === value.type) {
                      if (value.transaction) {
                        if (value.contexts) {
                          if (value.contexts.trace) {
                            if (value.timestamp) {
                              if (value.contexts.trace.span_id) {
                                op = value.contexts.trace.op;
                                const span_id = value.contexts.trace.span_id;
                                closure_128_2 = span_id;
                                c2 = 1;
                                c3 = 1;
                                const obj1 = { value: dependencyMap.pop(span_id), done: false };
                                return obj1;
                              }
                            }
                          }
                        }
                      }
                    }
                    c3 = 3;
                    const obj2 = { value, done: true };
                    return obj2;
                  }
                } else if (1 === tmp4) {
                  if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    closure_128_3 = value;
                    if (closure_128_3) {
                      c2 = 2;
                      c3 = 1;
                      const obj4 = { value: c2.pop(closure_128_2), done: false };
                      return obj4;
                    } else {
                      const debug6 = value(682).debug;
                      const _HermesInternal6 = HermesInternal;
                      debug6.warn("[" + fetchStartFramesForSpan + "] Start frames of transaction " + closure_129_0.transaction + " (eventId, " + closure_129_0.event_id + ") are missing, but the transaction already ended.");
                      c3 = 3;
                      const obj5 = { value: closure_129_0, done: true };
                      return obj5;
                    }
                  }
                } else if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj6 = { value, done: true };
                  return obj6;
                } else {
                  closure_128_5 = value;
                  if (closure_128_5) {
                    if (isClose(closure_128_5.timestamp, closure_129_0.timestamp)) {
                      const debug3 = value(682).debug;
                      const _HermesInternal3 = HermesInternal;
                      debug3.log("[" + fetchStartFramesForSpan + "] Using frames from root span end (spanId, " + closure_128_2 + ").");
                      nativeFrames = closure_128_5.nativeFrames;
                    }
                    const obj7 = { frames_total: null, frames_frozen: null, frames_slow: null };
                    const obj8 = { value: nativeFrames.totalFrames - closure_128_3.totalFrames, unit: "none" };
                    obj7.frames_total = obj8;
                    const obj9 = { value: nativeFrames.frozenFrames - closure_128_3.frozenFrames, unit: "none" };
                    obj7.frames_frozen = obj9;
                    const obj10 = { value: nativeFrames.slowFrames - closure_128_3.slowFrames, unit: "none" };
                    obj7.frames_slow = obj10;
                    closure_128_6 = obj7;
                    if (closure_128_6.frames_frozen.value <= 0) {
                      if (closure_128_6.frames_slow.value <= 0) {
                        c3 = 3;
                      }
                      const debug5 = value(682).debug;
                      const _HermesInternal5 = HermesInternal;
                      debug5.warn("[" + fetchStartFramesForSpan + "] Detected zero slow or frozen frames. Not adding measurements to spanId (" + closure_128_2 + ").");
                    }
                    const debug4 = value(682).debug;
                    const _JSON = JSON;
                    const _HermesInternal4 = HermesInternal;
                    debug4.log("[" + fetchStartFramesForSpan + "] Adding measurements to " + op + " transaction " + closure_129_0.transaction + ": " + JSON.stringify(closure_128_6, undefined, 2));
                    const measurements = closure_129_0.measurements;
                    closure_128_0 = measurements;
                    if (null !== measurements) {
                      if (undefined !== closure_128_0) {
                        let obj11 = closure_128_0;
                      }
                      tmp64.measurements = tmp66(tmp68({}, obj11), closure_128_6);
                    }
                    obj11 = {};
                  }
                  if (value) {
                    if (isClose(value.timestamp, closure_129_0.timestamp)) {
                      const debug2 = value(682).debug;
                      const _HermesInternal2 = HermesInternal;
                      debug2.log("[" + fetchStartFramesForSpan + "] Using native frames from last child span end (spanId, " + closure_128_2 + ").");
                      nativeFrames = value.nativeFrames;
                    }
                  }
                  const debug = value(682).debug;
                  const _HermesInternal = HermesInternal;
                  debug.warn("[" + fetchStartFramesForSpan + "] Frames were collected within larger than margin of error delay for spanId (" + closure_128_2 + "). Dropping the inaccurate values.");
                  c3 = 3;
                  obj = { value: closure_129_0, done: true };
                  return obj;
                }
              } catch (tmp103) {
                c3 = tmp;
                throw tmp103;
              }
            }
          });
        }
    };
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
export { nativeFramesIntegration };