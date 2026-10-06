// _runtime/metro/01038__.js
import _mod693 from "00693__.js";
import _mod877 from "00877__.js";
import _mod998 from "00998__.js";

const require = globalThis.__r;
let _require, c4, c5, set;

const f83025 = (arg0, arg1) => {
  closure_0 = arg0;
  let closure_1 = arg1;
  let c2 = false;
  const timeout = setTimeout(() => {
    const tmp = c2;
    if (!tmp) {
      c2 = true;
      closure_1("Fetching native frames took too long. Dropping frames.");
    }
  }, 2000);
  const NATIVE = closure_0(closure_1_1[0]).NATIVE;
  nativeFrames = NATIVE.fetchNativeFrames();
  const nextPromise = nativeFrames.then((result) => {
    const tmp = c2;
    if (!tmp) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_3);
      c2 = true;
      if (result) {
        closure_0(result);
      } else {
        closure_1("Native frames response is null.");
      }
    }
  });
  nextPromise.then(undefined, (arg0) => {
    const tmp = c2;
    if (!tmp) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_3);
      c2 = true;
      closure_1(arg0);
    }
  });
};
function fetchNativeFrames() {
  const promise = new Promise(f83025);
  return promise;
}
function isClose(arg0, arg1) {
  return Math.abs(arg0 - arg1) < 0.05;
}
let closure_2 =
  (this && this.__awaiter) ||
  ((arg0, arg1, arg2, arg3) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let _Promise = arg2;
    const Promise = arg2;
    let closure_3 = arg3;
    if (!arg2) {
      let tmp = globalThis;
      _Promise = Promise;
    }
    const _Promise1 = new _Promise(function (fn, arg1) {
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
const NativeFrames = "NativeFrames";
function nativeFramesIntegration() {
  let asyncExpiringMap;
  let c0;
  _require = null;
  asyncExpiringMap = new require("AsyncExpiringMap").AsyncExpiringMap({ ttl: 60000 });
  const asyncExpiringMap1 = new require("AsyncExpiringMap").AsyncExpiringMap({ ttl: 2000 });
  function fetchStartFramesForSpan(spanContext) {
    const spanId = spanContext.spanContext().spanId;
    let str = "child";
    const obj = _mod998;
    if (obj.isRootSpan(spanContext)) {
      str = "root";
    }
    let debug = _mod693.debug;
    debug.log("[" + NativeFrames + "] Fetching frames for " + str + " span start (" + spanId + ").");
    set = asyncExpiringMap.set;
    let promise = new Promise((arg0) => {
      let closure_0 = arg0;
      const promise = new Promise(f83025);
      const nextPromise = promise.then((result) => closure_0(result));
      nextPromise.then(undefined, (arg0) => {
        const debug = closure_2_0(asyncExpiringMap[2]).debug;
        debug.log("[" + fetchStartFramesForSpan + "] Error while fetching native frames.", arg0);
        closure_0(null);
      });
    });
    const result = set(spanId, promise);
  }
  function fetchEndFramesForSpan(arg0) {
    let closure_0 = arg0;
    return asyncExpiringMap1(undefined, undefined, undefined, async function () {
      let tmp;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let tmp65;
        let c3;
        try {
          let timestamp;
          let nativeFrames;
          let closure_4;
          let closure_5;
          let closure_6;
          let spanId;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              set = tmp;
              timestamp = undefined;
              tmp65 = undefined;
              nativeFrames = undefined;
              closure_4 = undefined;
              closure_5 = undefined;
              closure_6 = undefined;
              const obj11 = timestamp(asyncExpiringMap[2]);
              timestamp = obj11.timestampInSeconds();
              spanId = timestamp.spanContext().spanId;
              const obj12 = set;
              if (set.has(spanId)) {
                const obj7 = timestamp(asyncExpiringMap[3]);
                if (obj7.isRootSpan(timestamp)) {
                  const debug4 = timestamp(asyncExpiringMap[2]).debug;
                  const _HermesInternal4 = HermesInternal;
                  const logResult = debug4.log(
                    "[" + fetchStartFramesForSpan + "] Fetch frames for root span end (" + spanId + ").",
                  );
                  const self = this;
                  const self2 = this;
                  set = tmp65.set;
                  let promise = new Promise((arg0) => {
                    closure_0 = arg0;
                    const promise = new Promise(f83025);
                    let nextPromise = promise.then((nativeFrames) => {
                      const obj = { timestamp, nativeFrames };
                      closure_0(obj);
                    });
                    nextPromise.then(undefined, (arg0) => {
                      const debug = timestamp(set[2]).debug;
                      debug.log("[" + nativeFrames + "] Error while fetching native frames.", arg0);
                      closure_0(null);
                    });
                  });
                  const result = set(spanId, promise);
                }
                c3 = 1;
                c4 = 2;
                c5 = 1;
                const obj4 = { value: obj12.get(spanId), done: false };
                return obj4;
              }
            }
          } else if (1 === c4) {
            c3 = 0;
            let closure_7 = tmp65;
            const debug3 = timestamp(asyncExpiringMap[2]).debug;
            const _HermesInternal3 = HermesInternal;
            debug3.log(
              "[" + fetchStartFramesForSpan + "] Error while capturing end frames for span " + spanId + ".",
              closure_7,
            );
          } else if (2 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              tmp65 = value;
              if (tmp65) {
                c4 = 3;
                c5 = 1;
                const obj6 = { value: fetchNativeFrames(), done: false };
                return obj6;
              } else {
                const debug2 = timestamp(asyncExpiringMap[2]).debug;
                const _HermesInternal2 = HermesInternal;
                debug2.log(
                  "[" +
                    fetchStartFramesForSpan +
                    "] No start frames found for span " +
                    spanId +
                    ", skipping frame data.",
                );
                c3 = 0;
                c5 = 3;
                const obj8 = { value: undefined, done: true };
                return obj8;
              }
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            nativeFrames = value;
            closure_4 = nativeFrames.totalFrames - tmp65.totalFrames;
            closure_5 = nativeFrames.slowFrames - tmp65.slowFrames;
            closure_6 = nativeFrames.frozenFrames - tmp65.frozenFrames;
            let tmp7 = closure_4 > 0 || closure_5 > 0;
            if (!tmp7) {
              tmp7 = closure_6 > 0;
            }
            if (tmp7) {
              const attr = timestamp.setAttribute("frames.total", closure_4);
              const attr1 = timestamp.setAttribute("frames.slow", closure_5);
              const attr2 = timestamp.setAttribute("frames.frozen", closure_6);
              let debug = timestamp(asyncExpiringMap[2]).debug;
              const _HermesInternal = HermesInternal;
              const str = "[";
              debug.log(
                "[" +
                  fetchStartFramesForSpan +
                  "] Attached frame data to span " +
                  spanId +
                  ": total=" +
                  closure_4 +
                  ", slow=" +
                  closure_5 +
                  ", frozen=" +
                  closure_6,
              );
            }
            let obj = timestamp(asyncExpiringMap[3]);
            if (!obj.isRootSpan(timestamp)) {
              const obj10 = { timestamp, nativeFrames };
            }
            c3 = 0;
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp65) {
          if (0 === c3) {
            c5 = 3;
            throw tmp65;
          } else {
            c4 = 1;
          }
        }
      }
    });
  }
  return {
    name: fetchStartFramesForSpan,
    setup(on) {
      if (_mod877.NATIVE.enableNative) {
        const NATIVE = _mod877.NATIVE;
        const result = NATIVE.enableNativeFramesTracking();
        on.on("spanStart", fetchStartFramesForSpan);
        on.on("spanEnd", fetchEndFramesForSpan);
      } else {
        const debug = _mod693.debug;
        const _HermesInternal = HermesInternal;
        debug.warn(
          "[" +
            NativeFrames +
            "] This is not available on the Web, Expo Go and other platforms without native modules.",
        );
      }
    },
    processEvent(arg0) {
      let closure_0 = arg0;
      return asyncExpiringMap1(undefined, undefined, undefined, async () => {
        let obj11;
        let obj12;
        let obj13;
        let value;
        if (c3 === 2) {
          c3 = 3;
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
            let measurements;
            let op;
            let span_id;
            let closure_3;
            let nativeFrames;
            let closure_5;
            let obj10;
            c3 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                let closure_1 = tmp3;
                value = 0;
                measurements = undefined;
                op = undefined;
                span_id = undefined;
                closure_3 = undefined;
                nativeFrames = undefined;
                closure_5 = undefined;
                obj10 = undefined;
                if ("transaction" === value.type) {
                  if (value.transaction) {
                    if (value.contexts) {
                      if (value.contexts.trace) {
                        if (value.timestamp) {
                          if (value.contexts.trace.span_id) {
                            op = value.contexts.trace.op;
                            span_id = value.contexts.trace.span_id;
                            c2 = 1;
                            c3 = 1;
                            const obj4 = { value: closure_1.pop(span_id), done: false };
                            return obj4;
                          }
                        }
                      }
                    }
                  }
                }
                c3 = 3;
                const obj5 = { value, done: true };
                return obj5;
              }
            } else if (1 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else {
                closure_3 = value;
                if (closure_3) {
                  c2 = 2;
                  c3 = 1;
                  const obj7 = { value: c2.pop(span_id), done: false };
                  return obj7;
                } else {
                  const debug6 = value(asyncExpiringMap[2]).debug;
                  const _HermesInternal6 = HermesInternal;
                  debug6.warn(
                    "[" +
                      fetchStartFramesForSpan +
                      "] Start frames of transaction " +
                      closure_129_0.transaction +
                      " (eventId, " +
                      closure_129_0.event_id +
                      ") are missing, but the transaction already ended.",
                  );
                  c3 = 3;
                  const obj8 = { value: closure_129_0, done: true };
                  return obj8;
                }
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              closure_5 = value;
              const tmp106 = closure_5;
              if (tmp106) {
                let tmp75;
                if (isClose(closure_5.timestamp, closure_129_0.timestamp)) {
                  const debug3 = value(asyncExpiringMap[2]).debug;
                  const _HermesInternal3 = HermesInternal;
                  debug3.log(
                    "[" + fetchStartFramesForSpan + "] Using frames from root span end (spanId, " + span_id + ").",
                  );
                  nativeFrames = closure_5.nativeFrames;
                }
                obj10 = { frames_total: obj11, frames_frozen: obj12, frames_slow: obj13 };
                obj11 = { value: nativeFrames.totalFrames - closure_3.totalFrames, unit: "none" };
                obj12 = { value: nativeFrames.frozenFrames - closure_3.frozenFrames, unit: "none" };
                obj13 = { value: nativeFrames.slowFrames - closure_3.slowFrames, unit: "none" };
                if (obj10.frames_frozen.value <= 0) {
                  if (obj10.frames_slow.value <= 0) {
                    if (obj10.frames_total.value <= 0) {
                      const debug5 = value(asyncExpiringMap[2]).debug;
                      const _HermesInternal5 = HermesInternal;
                      debug5.warn(
                        "[" +
                          fetchStartFramesForSpan +
                          "] Detected zero slow or frozen frames. Not adding measurements to spanId (" +
                          span_id +
                          ").",
                      );
                      tmp75 = closure_129_0;
                    }
                    c3 = 3;
                    const obj14 = { value: tmp75, done: true };
                    return obj14;
                  }
                }
                const debug4 = value(asyncExpiringMap[2]).debug;
                const _JSON = JSON;
                const _HermesInternal4 = HermesInternal;
                debug4.log(
                  "[" +
                    fetchStartFramesForSpan +
                    "] Adding measurements to " +
                    op +
                    " transaction " +
                    closure_129_0.transaction +
                    ": " +
                    JSON.stringify(obj10, undefined, 2),
                );
                measurements = closure_129_0.measurements;
                if (null !== measurements) {
                  let obj15;
                  if (undefined !== measurements) {
                    obj15 = measurements;
                  }
                  tmp63.measurements = tmp65(tmp67({}, obj15), obj10);
                  tmp75 = closure_129_0;
                }
                obj15 = {};
              }
              const tmp9 = value;
              if (tmp9) {
                if (isClose(value.timestamp, closure_129_0.timestamp)) {
                  const debug2 = value(asyncExpiringMap[2]).debug;
                  const _HermesInternal2 = HermesInternal;
                  debug2.log(
                    "[" +
                      fetchStartFramesForSpan +
                      "] Using native frames from last child span end (spanId, " +
                      span_id +
                      ").",
                  );
                  nativeFrames = value.nativeFrames;
                }
              }
              const debug = value(asyncExpiringMap[2]).debug;
              const _HermesInternal = HermesInternal;
              debug.warn(
                "[" +
                  fetchStartFramesForSpan +
                  "] Frames were collected within larger than margin of error delay for spanId (" +
                  span_id +
                  "). Dropping the inaccurate values.",
              );
              c3 = 3;
              const obj = { value: closure_129_0, done: true };
              return obj;
            }
          } catch (tmp101) {
            c3 = 3;
            throw tmp101;
          }
        }
      });
    },
  };
}

export const createNativeFramesIntegrations = function (enableNative) {
  let asyncExpiringMap;
  let c0;
  let fetchEndFramesForSpan;
  let tmp = enableNative;
  if (!tmp) {
    const tmp2 = _require;
    const tmp3 = asyncExpiringMap;
    if (require("00877__.js").NATIVE.enableNative) {
      let NATIVE = tmp2(tmp3[0]).NATIVE;
      let result = NATIVE.disableNativeFramesTracking();
    }
  }
  if (typeof fetchEndFramesForSpan === "function") {
    _require = null;
    let tmp7 = asyncExpiringMap;
    let self = this;
    let self2 = this;
    asyncExpiringMap = new require("AsyncExpiringMap").AsyncExpiringMap({ ttl: 60000 });
    let tmp9 = asyncExpiringMap;
    const self3 = this;
    const self4 = this;
    const asyncExpiringMap1 = new require("AsyncExpiringMap").AsyncExpiringMap({ ttl: 2000 });
    function fetchStartFramesForSpan(spanContext) {
      const spanId = spanContext.spanContext().spanId;
      let str = "child";
      const obj = _mod998;
      if (obj.isRootSpan(spanContext)) {
        str = "root";
      }
      let debug = _mod693.debug;
      debug.log("[" + NativeFrames + "] Fetching frames for " + str + " span start (" + spanId + ").");
      set = asyncExpiringMap.set;
      let promise = new Promise((arg0) => {
        let closure_0 = arg0;
        const promise = new Promise(f83025);
        const nextPromise = promise.then((result) => closure_0(result));
        nextPromise.then(undefined, (arg0) => {
          const debug = closure_2_0(asyncExpiringMap[2]).debug;
          debug.log("[" + fetchStartFramesForSpan + "] Error while fetching native frames.", arg0);
          closure_0(null);
        });
      });
      const result = set(spanId, promise);
    }
    fetchEndFramesForSpan = function fetchEndFramesForSpan(arg0) {
      let closure_0 = arg0;
      return asyncExpiringMap1(undefined, undefined, undefined, async function () {
        let tmp;
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          let tmp65;
          let c3;
          try {
            let timestamp;
            let nativeFrames;
            let closure_4;
            let closure_5;
            let closure_6;
            let spanId;
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                set = tmp;
                timestamp = undefined;
                tmp65 = undefined;
                nativeFrames = undefined;
                closure_4 = undefined;
                closure_5 = undefined;
                closure_6 = undefined;
                const obj11 = timestamp(asyncExpiringMap[2]);
                timestamp = obj11.timestampInSeconds();
                spanId = timestamp.spanContext().spanId;
                const obj12 = set;
                if (set.has(spanId)) {
                  const obj7 = timestamp(asyncExpiringMap[3]);
                  if (obj7.isRootSpan(timestamp)) {
                    const debug4 = timestamp(asyncExpiringMap[2]).debug;
                    const _HermesInternal4 = HermesInternal;
                    const logResult = debug4.log(
                      "[" + fetchStartFramesForSpan + "] Fetch frames for root span end (" + spanId + ").",
                    );
                    const self = this;
                    const self2 = this;
                    set = tmp65.set;
                    let promise = new Promise((arg0) => {
                      closure_0 = arg0;
                      const promise = new Promise(f83025);
                      let nextPromise = promise.then((nativeFrames) => {
                        const obj = { timestamp, nativeFrames };
                        closure_0(obj);
                      });
                      nextPromise.then(undefined, (arg0) => {
                        const debug = timestamp(set[2]).debug;
                        debug.log("[" + nativeFrames + "] Error while fetching native frames.", arg0);
                        closure_0(null);
                      });
                    });
                    const result = set(spanId, promise);
                  }
                  c3 = 1;
                  c4 = 2;
                  c5 = 1;
                  const obj4 = { value: obj12.get(spanId), done: false };
                  return obj4;
                }
              }
            } else if (1 === c4) {
              c3 = 0;
              let closure_7 = tmp65;
              const debug3 = timestamp(asyncExpiringMap[2]).debug;
              const _HermesInternal3 = HermesInternal;
              debug3.log(
                "[" + fetchStartFramesForSpan + "] Error while capturing end frames for span " + spanId + ".",
                closure_7,
              );
            } else if (2 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                const obj5 = { value, done: true };
                return obj5;
              } else {
                tmp65 = value;
                if (tmp65) {
                  c4 = 3;
                  c5 = 1;
                  const obj6 = { value: fetchNativeFrames(), done: false };
                  return obj6;
                } else {
                  const debug2 = timestamp(asyncExpiringMap[2]).debug;
                  const _HermesInternal2 = HermesInternal;
                  debug2.log(
                    "[" +
                      fetchStartFramesForSpan +
                      "] No start frames found for span " +
                      spanId +
                      ", skipping frame data.",
                  );
                  c3 = 0;
                  c5 = 3;
                  const obj8 = { value: undefined, done: true };
                  return obj8;
                }
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              nativeFrames = value;
              closure_4 = nativeFrames.totalFrames - tmp65.totalFrames;
              closure_5 = nativeFrames.slowFrames - tmp65.slowFrames;
              closure_6 = nativeFrames.frozenFrames - tmp65.frozenFrames;
              let tmp7 = closure_4 > 0 || closure_5 > 0;
              if (!tmp7) {
                tmp7 = closure_6 > 0;
              }
              if (tmp7) {
                const attr = timestamp.setAttribute("frames.total", closure_4);
                const attr1 = timestamp.setAttribute("frames.slow", closure_5);
                const attr2 = timestamp.setAttribute("frames.frozen", closure_6);
                let debug = timestamp(asyncExpiringMap[2]).debug;
                const _HermesInternal = HermesInternal;
                const str = "[";
                debug.log(
                  "[" +
                    fetchStartFramesForSpan +
                    "] Attached frame data to span " +
                    spanId +
                    ": total=" +
                    closure_4 +
                    ", slow=" +
                    closure_5 +
                    ", frozen=" +
                    closure_6,
                );
              }
              let obj = timestamp(asyncExpiringMap[3]);
              if (!obj.isRootSpan(timestamp)) {
                const obj10 = { timestamp, nativeFrames };
              }
              c3 = 0;
            }
            c5 = 3;
            return { value: "IconComponent", done: null };
          } catch (tmp65) {
            if (0 === c3) {
              c5 = 3;
              throw tmp65;
            } else {
              c4 = 1;
            }
          }
        }
      });
    };
    let obj = {
      name: fetchStartFramesForSpan,
      setup(on) {
        if (_mod877.NATIVE.enableNative) {
          const NATIVE = _mod877.NATIVE;
          const result = NATIVE.enableNativeFramesTracking();
          on.on("spanStart", fetchStartFramesForSpan);
          on.on("spanEnd", fetchEndFramesForSpan);
        } else {
          const debug = _mod693.debug;
          const _HermesInternal = HermesInternal;
          debug.warn(
            "[" +
              NativeFrames +
              "] This is not available on the Web, Expo Go and other platforms without native modules.",
          );
        }
      },
      processEvent(arg0) {
        let closure_0 = arg0;
        return asyncExpiringMap1(undefined, undefined, undefined, async () => {
          let obj11;
          let obj12;
          let obj13;
          let value;
          if (c3 === 2) {
            c3 = 3;
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
              let measurements;
              let op;
              let span_id;
              let closure_3;
              let nativeFrames;
              let closure_5;
              let obj10;
              c3 = 2;
              if (0 === c2) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  let closure_1 = tmp3;
                  value = 0;
                  measurements = undefined;
                  op = undefined;
                  span_id = undefined;
                  closure_3 = undefined;
                  nativeFrames = undefined;
                  closure_5 = undefined;
                  obj10 = undefined;
                  if ("transaction" === value.type) {
                    if (value.transaction) {
                      if (value.contexts) {
                        if (value.contexts.trace) {
                          if (value.timestamp) {
                            if (value.contexts.trace.span_id) {
                              op = value.contexts.trace.op;
                              span_id = value.contexts.trace.span_id;
                              c2 = 1;
                              c3 = 1;
                              const obj4 = { value: closure_1.pop(span_id), done: false };
                              return obj4;
                            }
                          }
                        }
                      }
                    }
                  }
                  c3 = 3;
                  const obj5 = { value, done: true };
                  return obj5;
                }
              } else if (1 === c2) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj6 = { value, done: true };
                  return obj6;
                } else {
                  closure_3 = value;
                  if (closure_3) {
                    c2 = 2;
                    c3 = 1;
                    const obj7 = { value: c2.pop(span_id), done: false };
                    return obj7;
                  } else {
                    const debug6 = value(asyncExpiringMap[2]).debug;
                    const _HermesInternal6 = HermesInternal;
                    debug6.warn(
                      "[" +
                        fetchStartFramesForSpan +
                        "] Start frames of transaction " +
                        closure_129_0.transaction +
                        " (eventId, " +
                        closure_129_0.event_id +
                        ") are missing, but the transaction already ended.",
                    );
                    c3 = 3;
                    const obj8 = { value: closure_129_0, done: true };
                    return obj8;
                  }
                }
              } else if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj9 = { value, done: true };
                return obj9;
              } else {
                closure_5 = value;
                const tmp106 = closure_5;
                if (tmp106) {
                  let tmp75;
                  if (isClose(closure_5.timestamp, closure_129_0.timestamp)) {
                    const debug3 = value(asyncExpiringMap[2]).debug;
                    const _HermesInternal3 = HermesInternal;
                    debug3.log(
                      "[" + fetchStartFramesForSpan + "] Using frames from root span end (spanId, " + span_id + ").",
                    );
                    nativeFrames = closure_5.nativeFrames;
                  }
                  obj10 = { frames_total: obj11, frames_frozen: obj12, frames_slow: obj13 };
                  obj11 = { value: nativeFrames.totalFrames - closure_3.totalFrames, unit: "none" };
                  obj12 = { value: nativeFrames.frozenFrames - closure_3.frozenFrames, unit: "none" };
                  obj13 = { value: nativeFrames.slowFrames - closure_3.slowFrames, unit: "none" };
                  if (obj10.frames_frozen.value <= 0) {
                    if (obj10.frames_slow.value <= 0) {
                      if (obj10.frames_total.value <= 0) {
                        const debug5 = value(asyncExpiringMap[2]).debug;
                        const _HermesInternal5 = HermesInternal;
                        debug5.warn(
                          "[" +
                            fetchStartFramesForSpan +
                            "] Detected zero slow or frozen frames. Not adding measurements to spanId (" +
                            span_id +
                            ").",
                        );
                        tmp75 = closure_129_0;
                      }
                      c3 = 3;
                      const obj14 = { value: tmp75, done: true };
                      return obj14;
                    }
                  }
                  const debug4 = value(asyncExpiringMap[2]).debug;
                  const _JSON = JSON;
                  const _HermesInternal4 = HermesInternal;
                  debug4.log(
                    "[" +
                      fetchStartFramesForSpan +
                      "] Adding measurements to " +
                      op +
                      " transaction " +
                      closure_129_0.transaction +
                      ": " +
                      JSON.stringify(obj10, undefined, 2),
                  );
                  measurements = closure_129_0.measurements;
                  if (null !== measurements) {
                    let obj15;
                    if (undefined !== measurements) {
                      obj15 = measurements;
                    }
                    tmp63.measurements = tmp65(tmp67({}, obj15), obj10);
                    tmp75 = closure_129_0;
                  }
                  obj15 = {};
                }
                const tmp9 = value;
                if (tmp9) {
                  if (isClose(value.timestamp, closure_129_0.timestamp)) {
                    const debug2 = value(asyncExpiringMap[2]).debug;
                    const _HermesInternal2 = HermesInternal;
                    debug2.log(
                      "[" +
                        fetchStartFramesForSpan +
                        "] Using native frames from last child span end (spanId, " +
                        span_id +
                        ").",
                    );
                    nativeFrames = value.nativeFrames;
                  }
                }
                const debug = value(asyncExpiringMap[2]).debug;
                const _HermesInternal = HermesInternal;
                debug.warn(
                  "[" +
                    fetchStartFramesForSpan +
                    "] Frames were collected within larger than margin of error delay for spanId (" +
                    span_id +
                    "). Dropping the inaccurate values.",
                );
                c3 = 3;
                const obj = { value: closure_129_0, done: true };
                return obj;
              }
            } catch (tmp101) {
              c3 = 3;
              throw tmp101;
            }
          }
        });
      },
    };
    return obj;
  } else {
    let str = "Trying to call a non-function";
    throw new TypeError("Trying to call a non-function");
  }
};
export { nativeFramesIntegration };
