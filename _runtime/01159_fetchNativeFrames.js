// _runtime/01159_fetchNativeFrames.js
const require = arg1;
const dependencyMap = arg6;
function fetchNativeFrames() {
  return new Promise((arg0, arg1) => {
    const callback = arg0;
    const table = arg1;
    c2 = false;
    const timeout = setTimeout(() => {
      if (!c2) {
        c2 = true;
        callback2("Fetching native frames took too long. Dropping frames.");
      }
    }, 2000);
    const NATIVE = callback(table[0]).NATIVE;
    const nativeFrames = NATIVE.fetchNativeFrames();
    nativeFrames.then((arg0) => {
      if (!c2) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_3);
        c2 = true;
        if (arg0) {
          callback(arg0);
        } else {
          callback2("Native frames response is null.");
        }
      }
    }).then(undefined, (arg0) => {
      if (!c2) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_3);
        c2 = true;
        callback2(arg0);
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
    _Promise = new _Promise((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
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
const NativeFrames = "NativeFrames";
function nativeFramesIntegration() {
  const _require = null;
  asyncExpiringMap = new _require(asyncExpiringMap[1]).AsyncExpiringMap({ ttl: 60000 });
  const asyncExpiringMap1 = new _require(asyncExpiringMap[1]).AsyncExpiringMap({ ttl: 2000 });
  function fetchStartFramesForSpan(spanContext) {
    const spanId = spanContext.spanContext().spanId;
    let str = "child";
    if (obj.isRootSpan(spanContext)) {
      str = "root";
    }
    let debug = _null(asyncExpiringMap[2]).debug;
    debug.log("[" + fetchStartFramesForSpan + "] Fetching frames for " + str + " span start (" + spanId + ").");
    obj = _null(asyncExpiringMap[3]);
    const tmp = _null;
    const tmp2 = asyncExpiringMap;
    const result = asyncExpiringMap.set(spanId, new Promise((arg0) => {
      closure_0 = arg0;
      const promise = new Promise((arg0, arg1) => {
        const callback = arg0;
        const table = arg1;
        c2 = false;
        const timeout = setTimeout(() => {
          if (!c2) {
            c2 = true;
            callback2("Fetching native frames took too long. Dropping frames.");
          }
        }, 2000);
        const NATIVE = callback(table[0]).NATIVE;
        const nativeFrames = NATIVE.fetchNativeFrames();
        nativeFrames.then((arg0) => {
          if (!c2) {
            const _clearTimeout = clearTimeout;
            clearTimeout(closure_3);
            c2 = true;
            if (arg0) {
              callback(arg0);
            } else {
              callback2("Native frames response is null.");
            }
          }
        }).then(undefined, (arg0) => {
          if (!c2) {
            const _clearTimeout = clearTimeout;
            clearTimeout(closure_3);
            c2 = true;
            callback2(arg0);
          }
        });
      });
      new Promise((arg0, arg1) => {
        const callback = arg0;
        const table = arg1;
        c2 = false;
        const timeout = setTimeout(() => {
          if (!c2) {
            c2 = true;
            callback2("Fetching native frames took too long. Dropping frames.");
          }
        }, 2000);
        const NATIVE = callback(table[0]).NATIVE;
        const nativeFrames = NATIVE.fetchNativeFrames();
        nativeFrames.then((arg0) => {
          if (!c2) {
            const _clearTimeout = clearTimeout;
            clearTimeout(closure_3);
            c2 = true;
            if (arg0) {
              callback(arg0);
            } else {
              callback2("Native frames response is null.");
            }
          }
        }).then(undefined, (arg0) => {
          if (!c2) {
            const _clearTimeout = clearTimeout;
            clearTimeout(closure_3);
            c2 = true;
            callback2(arg0);
          }
        });
      }).then((arg0) => callback(arg0)).then(undefined, (arg0) => {
        const debug = callback(closure_1_1[2]).debug;
        debug.log("[" + closure_1_3 + "] Error while fetching native frames.", arg0);
        callback(null);
      });
    }));
  }
  function fetchEndFramesForSpan(arg0) {
    closure_0 = arg0;
    return asyncExpiringMap1(undefined, undefined, undefined, function*() {
      if (c5 === 2) {
        c5 = 3;
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
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let spanId = tmp3;
              let obj5 = tmp7;
              obj5 = undefined;
              spanId = undefined;
              c2 = undefined;
              c3 = undefined;
              c4 = undefined;
              c5 = undefined;
              closure_6 = undefined;
              obj5 = obj5(closure_2_1[2]).timestampInSeconds();
              spanId = obj5.spanContext().spanId;
              if (closure_1_1.has(spanId)) {
                let obj6 = obj5(closure_2_1[3]);
                if (obj6.isRootSpan(obj5)) {
                  const debug4 = obj5(closure_2_1[2]).debug;
                  const _HermesInternal4 = HermesInternal;
                  debug4.log("[" + closure_2_3 + "] Fetch frames for root span end (" + spanId + ").");
                  let promise = new Promise((arg0) => {
                    closure_0 = arg0;
                    const promise = new Promise((arg0, arg1) => {
                      const callback = arg0;
                      const table = arg1;
                      c2 = false;
                      const timeout = setTimeout(() => { ... }, 2000);
                      const NATIVE = callback(table[0]).NATIVE;
                      const nativeFrames = NATIVE.fetchNativeFrames();
                      nativeFrames.then(() => { ... }).then(undefined, () => { ... });
                    });
                    new Promise((arg0, arg1) => {
                      const callback = arg0;
                      const table = arg1;
                      c2 = false;
                      const timeout = setTimeout(() => { ... }, 2000);
                      const NATIVE = callback(table[0]).NATIVE;
                      const nativeFrames = NATIVE.fetchNativeFrames();
                      nativeFrames.then(() => { ... }).then(undefined, () => { ... });
                    }).then((nativeFrames) => {
                      callback({ timestamp: callback, nativeFrames });
                    }).then(undefined, (arg0) => {
                      const debug = callback(spanId[2]).debug;
                      debug.log("[" + c3 + "] Error while fetching native frames.", arg0);
                      callback(null);
                    });
                  });
                  const result = closure_1_2.set(spanId, promise);
                }
                c3 = 1;
                c4 = 2;
                c5 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj12.get(spanId);
                return obj1;
              }
              const obj11 = obj5(closure_2_1[2]);
              obj12 = closure_1_1;
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              closure_7 = c2;
              const debug3 = obj5(closure_2_1[2]).debug;
              const _HermesInternal3 = HermesInternal;
              debug3.log("[" + closure_2_3 + "] Error while capturing end frames for span " + closure_2_1 + ".", closure_7);
            } else if (2 === tmp7) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else {
                closure_2 = arg1;
                if (closure_2) {
                  c4 = 3;
                  c5 = 1;
                  const obj3 = { value: null, done: false };
                  obj3[0] = closure_2_5();
                  return obj3;
                } else {
                  const debug2 = obj5(closure_2_1[2]).debug;
                  const _HermesInternal2 = HermesInternal;
                  debug2.log("[" + closure_2_3 + "] No start frames found for span " + closure_2_1 + ", skipping frame data.");
                  c3 = 0;
                  c5 = 3;
                  const obj4 = { value: null, done: true };
                  obj4[0] = undefined;
                  return obj4;
                }
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              c3 = arg1;
              c4 = c3.totalFrames - c2.totalFrames;
              c5 = c3.slowFrames - c2.slowFrames;
              closure_6 = c3.frozenFrames - c2.frozenFrames;
              let tmp10 = c4 > 0;
              if (!tmp10) {
                tmp10 = c5 > 0;
              }
              if (!tmp10) {
                tmp10 = closure_6 > 0;
              }
              if (tmp10) {
                const attr = obj5.setAttribute("frames.total", c4);
                const attr1 = obj5.setAttribute("frames.slow", c5);
                const attr2 = obj5.setAttribute("frames.frozen", closure_6);
                let debug = obj5(closure_2_1[2]).debug;
                const _HermesInternal = HermesInternal;
                debug.log("[" + closure_2_3 + "] Attached frame data to span " + spanId + ": total=" + c4 + ", slow=" + c5 + ", frozen=" + closure_6);
              }
              obj = obj5(closure_2_1[3]);
              if (!obj.isRootSpan(obj5)) {
                obj5 = { timestamp: null, nativeFrames: null };
                obj5[0] = obj5;
                obj5[1] = c3;
              }
              c3 = 0;
            }
            c3 = 0;
            c5 = 3;
            obj6 = { value: null, done: true };
            obj6[0] = arg1;
            return obj6;
          }
          c5 = 3;
        } catch (tmp70) {
          c2 = tmp70;
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
      if (_null(asyncExpiringMap[0]).NATIVE.enableNative) {
        const NATIVE = tmp(tmp2[0]).NATIVE;
        const result = NATIVE.enableNativeFramesTracking();
        on.on("spanStart", fetchStartFramesForSpan);
        on.on("spanEnd", fetchEndFramesForSpan);
      } else {
        const debug = tmp(tmp2[2]).debug;
        const _HermesInternal = HermesInternal;
        debug.warn("[" + fetchStartFramesForSpan + "] This is not available on the Web, Expo Go and other platforms without native modules.");
      }
    },
    processEvent(arg0) {
      let measurements = arg0;
      return asyncExpiringMap1(undefined, undefined, undefined, function*() {
        if (c3 === 2) {
          c3 = 3;
          let throwTypeErrorResult = HermesBuiltin.throwTypeError();
        } else {
          throwTypeErrorResult = arg1;
          throwTypeErrorResult = arg0;
          throwTypeErrorResult = tmp2;
          if (tmp3 === 3) {
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
              c3 = 2;
              if (0 === arr) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c3 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  let op = tmp4;
                  c0 = 0;
                  c0 = undefined;
                  op = undefined;
                  arr = undefined;
                  c3 = undefined;
                  c4 = undefined;
                  let timestamp;
                  c6 = undefined;
                  throwTypeErrorResult = closure_1_0;
                  if ("transaction" === closure_1_0.type) {
                    if (closure_1_0.transaction) {
                      if (closure_1_0.contexts) {
                        if (closure_1_0.contexts.trace) {
                          if (closure_1_0.timestamp) {
                            if (closure_1_0.contexts.trace.span_id) {
                              throwTypeErrorResult = closure_1_0;
                              op = closure_1_0.contexts.trace.op;
                              throwTypeErrorResult = closure_1_0;
                              const span_id = closure_1_0.contexts.trace.span_id;
                              arr = span_id;
                              throwTypeErrorResult = closure_1_1;
                              arr = 1;
                              c3 = 1;
                              obj1 = { value: null, done: false };
                              obj1[0] = closure_1_1.pop(span_id);
                              return obj1;
                            }
                          }
                        }
                      }
                    }
                  }
                  c3 = 3;
                  const obj2 = { value: null, done: true };
                  obj2[0] = closure_1_0;
                  return obj2;
                }
              } else if (1 === tmp4) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj3 = { value: null, done: true };
                  obj3[0] = arg1;
                  return obj3;
                } else {
                  throwTypeErrorResult = c0;
                  closure_3 = arg1;
                  throwTypeErrorResult = closure_3;
                  throwTypeErrorResult = op;
                  if (closure_3) {
                    arr = 2;
                    c3 = 1;
                    const obj4 = { value: null, done: false };
                    obj4[0] = arr.pop(closure_2_2);
                    return obj4;
                  } else {
                    const debug6 = measurements(closure_2_1[2]).debug;
                    const _HermesInternal6 = HermesInternal;
                    debug6.warn("[" + closure_3 + "] Start frames of transaction " + c0.transaction + " (eventId, " + c0.event_id + ") are missing, but the transaction already ended.");
                    c3 = 3;
                    const obj5 = { value: null, done: true };
                    obj5[0] = c0;
                    return obj5;
                  }
                }
              } else if (arg0 === 1) {
                c3 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj6 = { value: null, done: true };
                obj6[0] = arg1;
                return obj6;
              } else {
                throwTypeErrorResult = c0;
                timestamp = arg1;
                throwTypeErrorResult = timestamp;
                if (timestamp) {
                  if (obj7(timestamp.timestamp, c0.timestamp)) {
                    const debug3 = measurements(closure_2_1[2]).debug;
                    const _HermesInternal3 = HermesInternal;
                    debug3.log("[" + closure_3 + "] Using frames from root span end (spanId, " + arr + ").");
                    let nativeFrames = closure_1_5.nativeFrames;
                  }
                  obj7 = { frames_total: null, frames_frozen: null, frames_slow: null };
                  const obj8 = { value: null, unit: "none" };
                  obj8[0] = closure_2_4.totalFrames - closure_3.totalFrames;
                  obj7[0] = obj8;
                  const obj9 = { value: null, unit: "none" };
                  obj9[0] = closure_2_4.frozenFrames - closure_3.frozenFrames;
                  obj7[1] = obj9;
                  const obj10 = { value: null, unit: "none" };
                  obj10[0] = closure_2_4.slowFrames - closure_3.slowFrames;
                  obj7[2] = obj10;
                  if (obj7.frames_frozen.value <= 0) {
                    if (obj7.frames_slow.value <= 0) {
                      c3 = 3;
                    }
                    const debug5 = measurements(closure_2_1[2]).debug;
                    const _HermesInternal5 = HermesInternal;
                    debug5.warn("[" + closure_3 + "] Detected zero slow or frozen frames. Not adding measurements to spanId (" + closure_2_2 + ").");
                  }
                  const debug4 = measurements(closure_2_1[2]).debug;
                  const _JSON = JSON;
                  const _HermesInternal4 = HermesInternal;
                  debug4.log("[" + closure_3 + "] Adding measurements to " + closure_2_1 + " transaction " + c0.transaction + ": " + JSON.stringify(obj7, undefined, 2));
                  measurements = c0.measurements;
                  if (null !== measurements) {
                    if (undefined !== measurements) {
                      let obj11 = measurements;
                    }
                    tmp64.measurements = tmp66(tmp68({}, obj11), c6);
                  }
                  obj11 = {};
                }
                if (closure_1_0) {
                  if (obj7(closure_1_0.timestamp, c0.timestamp)) {
                    const debug2 = measurements(closure_2_1[2]).debug;
                    const _HermesInternal2 = HermesInternal;
                    debug2.log("[" + closure_3 + "] Using native frames from last child span end (spanId, " + arr + ").");
                    nativeFrames = closure_1_0.nativeFrames;
                  }
                }
                const debug = measurements(closure_2_1[2]).debug;
                const _HermesInternal = HermesInternal;
                debug.warn("[" + closure_3 + "] Frames were collected within larger than margin of error delay for spanId (" + arr + "). Dropping the inaccurate values.");
                c3 = 3;
                obj = { value: null, done: true };
                obj[0] = c0;
                return obj;
              }
            } catch (throwTypeErrorResult) {
              c3 = throwTypeErrorResult;
              throw throwTypeErrorResult;
            }
          }
        }
      });
    }
  };
}
arg5.createNativeFramesIntegrations = (arg0) => {
  if (!arg0) {
    if (_require(asyncExpiringMap[0]).NATIVE.enableNative) {
      let NATIVE = tmp(tmp2[0]).NATIVE;
      let result = NATIVE.disableNativeFramesTracking();
    }
    tmp = _require;
    tmp2 = asyncExpiringMap;
  }
  if (typeof fetchEndFramesForSpan !== "function") {
    HermesBuiltin.throwTypeError();
  }
  _require = null;
  asyncExpiringMap = new _require(asyncExpiringMap[1]).AsyncExpiringMap({ ttl: 60000 });
  const asyncExpiringMap1 = new _require(asyncExpiringMap[1]).AsyncExpiringMap({ ttl: 2000 });
  function fetchStartFramesForSpan(spanContext) {
    const spanId = spanContext.spanContext().spanId;
    let str = "child";
    if (obj.isRootSpan(spanContext)) {
      str = "root";
    }
    let debug = _null(asyncExpiringMap[2]).debug;
    debug.log("[" + fetchStartFramesForSpan + "] Fetching frames for " + str + " span start (" + spanId + ").");
    obj = _null(asyncExpiringMap[3]);
    const tmp = _null;
    const tmp2 = asyncExpiringMap;
    const result = asyncExpiringMap.set(spanId, new Promise((arg0) => {
      closure_0 = arg0;
      const promise = new Promise((arg0, arg1) => {
        const callback = arg0;
        const table = arg1;
        c2 = false;
        const timeout = setTimeout(() => {
          if (!c2) {
            c2 = true;
            callback2("Fetching native frames took too long. Dropping frames.");
          }
        }, 2000);
        const NATIVE = callback(table[0]).NATIVE;
        const nativeFrames = NATIVE.fetchNativeFrames();
        nativeFrames.then((arg0) => {
          if (!c2) {
            const _clearTimeout = clearTimeout;
            clearTimeout(closure_3);
            c2 = true;
            if (arg0) {
              callback(arg0);
            } else {
              callback2("Native frames response is null.");
            }
          }
        }).then(undefined, (arg0) => {
          if (!c2) {
            const _clearTimeout = clearTimeout;
            clearTimeout(closure_3);
            c2 = true;
            callback2(arg0);
          }
        });
      });
      new Promise((arg0, arg1) => {
        const callback = arg0;
        const table = arg1;
        c2 = false;
        const timeout = setTimeout(() => {
          if (!c2) {
            c2 = true;
            callback2("Fetching native frames took too long. Dropping frames.");
          }
        }, 2000);
        const NATIVE = callback(table[0]).NATIVE;
        const nativeFrames = NATIVE.fetchNativeFrames();
        nativeFrames.then((arg0) => {
          if (!c2) {
            const _clearTimeout = clearTimeout;
            clearTimeout(closure_3);
            c2 = true;
            if (arg0) {
              callback(arg0);
            } else {
              callback2("Native frames response is null.");
            }
          }
        }).then(undefined, (arg0) => {
          if (!c2) {
            const _clearTimeout = clearTimeout;
            clearTimeout(closure_3);
            c2 = true;
            callback2(arg0);
          }
        });
      }).then((arg0) => callback(arg0)).then(undefined, (arg0) => {
        const debug = callback(closure_1_1[2]).debug;
        debug.log("[" + closure_1_3 + "] Error while fetching native frames.", arg0);
        callback(null);
      });
    }));
  }
  fetchEndFramesForSpan = function fetchEndFramesForSpan(arg0) {
    closure_0 = arg0;
    return asyncExpiringMap1(undefined, undefined, undefined, function*() {
      if (c5 === 2) {
        c5 = 3;
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
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let spanId = tmp3;
              let obj5 = tmp7;
              obj5 = undefined;
              spanId = undefined;
              c2 = undefined;
              c3 = undefined;
              c4 = undefined;
              c5 = undefined;
              closure_6 = undefined;
              obj5 = obj5(closure_2_1[2]).timestampInSeconds();
              spanId = obj5.spanContext().spanId;
              if (closure_1_1.has(spanId)) {
                let obj6 = obj5(closure_2_1[3]);
                if (obj6.isRootSpan(obj5)) {
                  const debug4 = obj5(closure_2_1[2]).debug;
                  const _HermesInternal4 = HermesInternal;
                  debug4.log("[" + closure_2_3 + "] Fetch frames for root span end (" + spanId + ").");
                  let promise = new Promise((arg0) => {
                    closure_0 = arg0;
                    const promise = new Promise((arg0, arg1) => {
                      const callback = arg0;
                      const table = arg1;
                      c2 = false;
                      const timeout = setTimeout(() => { ... }, 2000);
                      const NATIVE = callback(table[0]).NATIVE;
                      const nativeFrames = NATIVE.fetchNativeFrames();
                      nativeFrames.then(() => { ... }).then(undefined, () => { ... });
                    });
                    new Promise((arg0, arg1) => {
                      const callback = arg0;
                      const table = arg1;
                      c2 = false;
                      const timeout = setTimeout(() => { ... }, 2000);
                      const NATIVE = callback(table[0]).NATIVE;
                      const nativeFrames = NATIVE.fetchNativeFrames();
                      nativeFrames.then(() => { ... }).then(undefined, () => { ... });
                    }).then((nativeFrames) => {
                      callback({ timestamp: callback, nativeFrames });
                    }).then(undefined, (arg0) => {
                      const debug = callback(spanId[2]).debug;
                      debug.log("[" + c3 + "] Error while fetching native frames.", arg0);
                      callback(null);
                    });
                  });
                  const result = closure_1_2.set(spanId, promise);
                }
                c3 = 1;
                c4 = 2;
                c5 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj12.get(spanId);
                return obj1;
              }
              const obj11 = obj5(closure_2_1[2]);
              obj12 = closure_1_1;
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              closure_7 = c2;
              const debug3 = obj5(closure_2_1[2]).debug;
              const _HermesInternal3 = HermesInternal;
              debug3.log("[" + closure_2_3 + "] Error while capturing end frames for span " + closure_2_1 + ".", closure_7);
            } else if (2 === tmp7) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else {
                closure_2 = arg1;
                if (closure_2) {
                  c4 = 3;
                  c5 = 1;
                  const obj3 = { value: null, done: false };
                  obj3[0] = closure_2_5();
                  return obj3;
                } else {
                  const debug2 = obj5(closure_2_1[2]).debug;
                  const _HermesInternal2 = HermesInternal;
                  debug2.log("[" + closure_2_3 + "] No start frames found for span " + closure_2_1 + ", skipping frame data.");
                  c3 = 0;
                  c5 = 3;
                  const obj4 = { value: null, done: true };
                  obj4[0] = undefined;
                  return obj4;
                }
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              c3 = arg1;
              c4 = c3.totalFrames - c2.totalFrames;
              c5 = c3.slowFrames - c2.slowFrames;
              closure_6 = c3.frozenFrames - c2.frozenFrames;
              let tmp10 = c4 > 0;
              if (!tmp10) {
                tmp10 = c5 > 0;
              }
              if (!tmp10) {
                tmp10 = closure_6 > 0;
              }
              if (tmp10) {
                const attr = obj5.setAttribute("frames.total", c4);
                const attr1 = obj5.setAttribute("frames.slow", c5);
                const attr2 = obj5.setAttribute("frames.frozen", closure_6);
                let debug = obj5(closure_2_1[2]).debug;
                const _HermesInternal = HermesInternal;
                debug.log("[" + closure_2_3 + "] Attached frame data to span " + spanId + ": total=" + c4 + ", slow=" + c5 + ", frozen=" + closure_6);
              }
              obj = obj5(closure_2_1[3]);
              if (!obj.isRootSpan(obj5)) {
                obj5 = { timestamp: null, nativeFrames: null };
                obj5[0] = obj5;
                obj5[1] = c3;
              }
              c3 = 0;
            }
            c3 = 0;
            c5 = 3;
            obj6 = { value: null, done: true };
            obj6[0] = arg1;
            return obj6;
          }
          c5 = 3;
        } catch (tmp70) {
          c2 = tmp70;
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
  return {
    name: fetchStartFramesForSpan,
    setup(on) {
      if (_null(asyncExpiringMap[0]).NATIVE.enableNative) {
        const NATIVE = tmp(tmp2[0]).NATIVE;
        const result = NATIVE.enableNativeFramesTracking();
        on.on("spanStart", fetchStartFramesForSpan);
        on.on("spanEnd", fetchEndFramesForSpan);
      } else {
        const debug = tmp(tmp2[2]).debug;
        const _HermesInternal = HermesInternal;
        debug.warn("[" + fetchStartFramesForSpan + "] This is not available on the Web, Expo Go and other platforms without native modules.");
      }
    },
    processEvent(arg0) {
      let measurements = arg0;
      return asyncExpiringMap1(undefined, undefined, undefined, function*() {
        if (c3 === 2) {
          c3 = 3;
          let throwTypeErrorResult = HermesBuiltin.throwTypeError();
        } else {
          throwTypeErrorResult = arg1;
          throwTypeErrorResult = arg0;
          throwTypeErrorResult = tmp2;
          if (tmp3 === 3) {
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
              c3 = 2;
              if (0 === arr) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c3 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  let op = tmp4;
                  c0 = 0;
                  c0 = undefined;
                  op = undefined;
                  arr = undefined;
                  c3 = undefined;
                  c4 = undefined;
                  let timestamp;
                  c6 = undefined;
                  throwTypeErrorResult = closure_1_0;
                  if ("transaction" === closure_1_0.type) {
                    if (closure_1_0.transaction) {
                      if (closure_1_0.contexts) {
                        if (closure_1_0.contexts.trace) {
                          if (closure_1_0.timestamp) {
                            if (closure_1_0.contexts.trace.span_id) {
                              throwTypeErrorResult = closure_1_0;
                              op = closure_1_0.contexts.trace.op;
                              throwTypeErrorResult = closure_1_0;
                              const span_id = closure_1_0.contexts.trace.span_id;
                              arr = span_id;
                              throwTypeErrorResult = closure_1_1;
                              arr = 1;
                              c3 = 1;
                              obj1 = { value: null, done: false };
                              obj1[0] = closure_1_1.pop(span_id);
                              return obj1;
                            }
                          }
                        }
                      }
                    }
                  }
                  c3 = 3;
                  const obj2 = { value: null, done: true };
                  obj2[0] = closure_1_0;
                  return obj2;
                }
              } else if (1 === tmp4) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj3 = { value: null, done: true };
                  obj3[0] = arg1;
                  return obj3;
                } else {
                  throwTypeErrorResult = c0;
                  closure_3 = arg1;
                  throwTypeErrorResult = closure_3;
                  throwTypeErrorResult = op;
                  if (closure_3) {
                    arr = 2;
                    c3 = 1;
                    const obj4 = { value: null, done: false };
                    obj4[0] = arr.pop(closure_2_2);
                    return obj4;
                  } else {
                    const debug6 = measurements(closure_2_1[2]).debug;
                    const _HermesInternal6 = HermesInternal;
                    debug6.warn("[" + closure_3 + "] Start frames of transaction " + c0.transaction + " (eventId, " + c0.event_id + ") are missing, but the transaction already ended.");
                    c3 = 3;
                    const obj5 = { value: null, done: true };
                    obj5[0] = c0;
                    return obj5;
                  }
                }
              } else if (arg0 === 1) {
                c3 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj6 = { value: null, done: true };
                obj6[0] = arg1;
                return obj6;
              } else {
                throwTypeErrorResult = c0;
                timestamp = arg1;
                throwTypeErrorResult = timestamp;
                if (timestamp) {
                  if (obj7(timestamp.timestamp, c0.timestamp)) {
                    const debug3 = measurements(closure_2_1[2]).debug;
                    const _HermesInternal3 = HermesInternal;
                    debug3.log("[" + closure_3 + "] Using frames from root span end (spanId, " + arr + ").");
                    let nativeFrames = closure_1_5.nativeFrames;
                  }
                  obj7 = { frames_total: null, frames_frozen: null, frames_slow: null };
                  const obj8 = { value: null, unit: "none" };
                  obj8[0] = closure_2_4.totalFrames - closure_3.totalFrames;
                  obj7[0] = obj8;
                  const obj9 = { value: null, unit: "none" };
                  obj9[0] = closure_2_4.frozenFrames - closure_3.frozenFrames;
                  obj7[1] = obj9;
                  const obj10 = { value: null, unit: "none" };
                  obj10[0] = closure_2_4.slowFrames - closure_3.slowFrames;
                  obj7[2] = obj10;
                  if (obj7.frames_frozen.value <= 0) {
                    if (obj7.frames_slow.value <= 0) {
                      c3 = 3;
                    }
                    const debug5 = measurements(closure_2_1[2]).debug;
                    const _HermesInternal5 = HermesInternal;
                    debug5.warn("[" + closure_3 + "] Detected zero slow or frozen frames. Not adding measurements to spanId (" + closure_2_2 + ").");
                  }
                  const debug4 = measurements(closure_2_1[2]).debug;
                  const _JSON = JSON;
                  const _HermesInternal4 = HermesInternal;
                  debug4.log("[" + closure_3 + "] Adding measurements to " + closure_2_1 + " transaction " + c0.transaction + ": " + JSON.stringify(obj7, undefined, 2));
                  measurements = c0.measurements;
                  if (null !== measurements) {
                    if (undefined !== measurements) {
                      let obj11 = measurements;
                    }
                    tmp64.measurements = tmp66(tmp68({}, obj11), c6);
                  }
                  obj11 = {};
                }
                if (closure_1_0) {
                  if (obj7(closure_1_0.timestamp, c0.timestamp)) {
                    const debug2 = measurements(closure_2_1[2]).debug;
                    const _HermesInternal2 = HermesInternal;
                    debug2.log("[" + closure_3 + "] Using native frames from last child span end (spanId, " + arr + ").");
                    nativeFrames = closure_1_0.nativeFrames;
                  }
                }
                const debug = measurements(closure_2_1[2]).debug;
                const _HermesInternal = HermesInternal;
                debug.warn("[" + closure_3 + "] Frames were collected within larger than margin of error delay for spanId (" + arr + "). Dropping the inaccurate values.");
                c3 = 3;
                obj = { value: null, done: true };
                obj[0] = c0;
                return obj;
              }
            } catch (throwTypeErrorResult) {
              c3 = throwTypeErrorResult;
              throw throwTypeErrorResult;
            }
          }
        }
      });
    }
  };
};
arg5.nativeFramesIntegration = nativeFramesIntegration;