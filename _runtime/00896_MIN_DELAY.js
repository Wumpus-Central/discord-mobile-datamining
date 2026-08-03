// === Module 896: MIN_DELAY ===

// Module 896 (MIN_DELAY)
import asyncGeneratorStep from "asyncGeneratorStep";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let c3 = 100;
let c4 = 5000;

export const MIN_DELAY = 100;
export const START_DELAY = 5000;
export function makeOfflineTransport(arg0) {
  let closure_0 = arg0;
  function log() {
    const items = [...arguments];
    if (callback(log[1]).DEBUG_BUILD) {
      const debug = callback(log[2]).debug;
      log = debug.log;
      const items1 = ["[Offline]:"];
      HermesBuiltin.arraySpread(items, 1);
      HermesBuiltin.apply(items1, debug);
    }
  }
  return (createStore) => {
    const callback = createStore;
    function flushIn(arg0) {
      if (timerId) {
        const _clearTimeout = clearTimeout;
        clearTimeout(timerId);
      }
      timerId = setTimeout(outer2_2(function*() {
        if (arr === 2) {
          arr = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp4 === 3) {
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
            arr = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                arr = 3;
                throw arg1;
              } else if (arg0 === 2) {
                arr = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let closure_1 = tmp5;
                let table = tmp2;
                table = undefined;
                c2 = undefined;
                c2 = 1;
                arr = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = arr.shift();
                return obj1;
              }
            } else if (arg0 === 1) {
              arr = 3;
              throw arg1;
            } else if (arg0 === 2) {
              arr = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              table = arg1;
              if (table) {
                outer1_1("Attempting to send previously queued event");
                const _Date = Date;
                const date = new Date();
                table[0].sent_at = date.toISOString();
                callback(table, true).catch((arg0) => {
                  tmp5("Failed to retry sending", arg0);
                });
                const promise = callback(table, true);
              }
              arr = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp18) {
            arr = tmp;
            throw tmp18;
          }
        }
      }), arg0);
      let unref = typeof timerId === "__REMOTEDEV__";
      if (typeof timerId !== "Object") {
        unref = timerId.unref;
      }
      if (unref) {
        timerId.unref();
      }
    }
    function flushWithBackOff() {
      if (!timerId) {
        if (tmp) {
          const _clearTimeout = clearTimeout;
          clearTimeout(timerId);
        }
        const _setTimeout = setTimeout;
        timerId = setTimeout(outer2_2(function*() {
          if (arr === 2) {
            arr = 3;
            HermesBuiltin.throwTypeError();
          } else if (tmp4 === 3) {
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
              arr = 2;
              if (0 === c2) {
                if (arg0 === 1) {
                  arr = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  arr = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  let closure_1 = tmp5;
                  let table = tmp2;
                  table = undefined;
                  c2 = undefined;
                  c2 = 1;
                  arr = 1;
                  const obj1 = { value: null, done: false };
                  obj1[0] = arr.shift();
                  return obj1;
                }
              } else if (arg0 === 1) {
                arr = 3;
                throw arg1;
              } else if (arg0 === 2) {
                arr = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else {
                table = arg1;
                if (table) {
                  outer1_1("Attempting to send previously queued event");
                  const _Date = Date;
                  const date = new Date();
                  table[0].sent_at = date.toISOString();
                  callback(table, true).catch((arg0) => {
                    tmp5("Failed to retry sending", arg0);
                  });
                  const promise = callback(table, true);
                }
                arr = 3;
                return { value: "HermesInternal", done: null };
              }
            } catch (tmp18) {
              arr = tmp;
              throw tmp18;
            }
          }
        }), closure_4);
        let unref = typeof timerId === "__REMOTEDEV__";
        if (typeof timerId !== "Object") {
          unref = timerId.unref;
        }
        if (unref) {
          timerId.unref();
        }
        const _Math = Math;
        closure_4 = Math.min(2 * closure_4, 3600000);
        const tmp2 = closure_4;
      }
    }
    function send(arg0) {
      const self = this;
      const apply = _send.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    function _send() {
      const self = this;
      const tmp = outer2_2((arg0) => {
        let closure_0 = arg0;
        let closure_1 = arg1;
        let c6 = 0;
        let c7 = 0;
        let c5 = 0;
        const iter = (function*(arg0) {
          if (c7 === 2) {
            c7 = 3;
            HermesBuiltin.throwTypeError();
          } else if (tmp5 === 3) {
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
              c7 = 2;
              if (0 === v02) {
                if (arg0 === 1) {
                  c7 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c7 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  let c3 = tmp2;
                  let config = tmp6;
                  let flag;
                  if (flag === undefined) {
                    flag = false;
                  }
                  config = undefined;
                  c3 = undefined;
                  v02 = 1;
                  c7 = 1;
                  return { value: "ct", done: "Array" };
                }
              } else {
                if (1 === tmp6) {
                  if (arg0 === 1) {
                    c7 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c7 = 3;
                    const obj1 = { value: null, done: true };
                    obj1[0] = arg1;
                    return obj1;
                  } else {
                    if (!outer2_1) {
                      let obj13 = outer2_0(outer2_1[3]);
                      if (obj13.envelopeContainsItemType(outer2_0, ["replay_event", "replay_recording"])) {
                        v02 = 2;
                        c7 = 1;
                        let obj2 = { value: null, done: false };
                        obj2[0] = outer2_3.push(outer2_0);
                        return obj2;
                      }
                    }
                    let v0 = 1;
                    if (outer2_0.shouldSend) {
                      v02 = 6;
                      c7 = 1;
                      const obj3 = { value: null, done: false };
                      obj3[0] = outer2_0.shouldSend(outer2_0);
                      return obj3;
                    }
                  }
                } else if (2 === tmp6) {
                  if (arg0 === 1) {
                    c7 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c7 = 3;
                    const obj4 = { value: null, done: true };
                    obj4[0] = arg1;
                    return obj4;
                  } else {
                    v0(outer2_3);
                    c7 = 3;
                    let obj5 = { value: null, done: true };
                    obj5[0] = {};
                    return obj5;
                  }
                } else if (3 === tmp6) {
                  v0 = 0;
                  const outer2_4 = closure_4;
                  v02 = 4;
                  c7 = 1;
                  const obj6 = { value: null, done: false };
                  obj6[0] = (function shouldQueue() { ... })(outer2_0, outer2_4, outer2_4);
                  return obj6;
                } else if (4 === tmp6) {
                  if (arg0 === 1) {
                    c7 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c7 = 3;
                    const obj7 = { value: null, done: true };
                    obj7[0] = arg1;
                    return obj7;
                  } else if (arg1) {
                    if (outer2_1) {
                      v02 = 8;
                      c7 = 1;
                      const obj8 = { value: null, done: false };
                      obj8[0] = arr.unshift(outer2_0);
                      return obj8;
                    } else {
                      v02 = 7;
                      c7 = 1;
                      const obj9 = { value: null, done: false };
                      obj9[0] = arr.push(outer2_0);
                      return obj9;
                    }
                  } else {
                    throw outer2_4;
                  }
                } else if (5 === tmp6) {
                  if (arg0 === 1) {
                    c7 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    v0 = 0;
                    c7 = 3;
                    const obj10 = { value: null, done: true };
                    obj10[0] = arg1;
                    return obj10;
                  } else {
                    config = arg1;
                    c3 = outer2_3;
                    if (!config) {
                      v0(outer2_3);
                      closure_4 = outer2_4;
                      v0 = 0;
                      c7 = 3;
                    } else {
                      const headers = config.headers;
                      let prop;
                      if (headers != null) {
                        prop = headers["retry-after"];
                      }
                      if (!prop) {
                        const headers2 = outer2_2.headers;
                        let prop1;
                        if (headers2 != null) {
                          prop1 = headers2["x-sentry-rate-limits"];
                        }
                        if (prop1) {
                          c3 = 60000;
                        } else {
                          let num9 = config.statusCode;
                          if (!num9) {
                            num9 = 0;
                          }
                          if (num9 >= 400) {
                            v0 = 0;
                            c7 = 3;
                            const obj11 = { value: null, done: true };
                            obj11[0] = config;
                            return obj11;
                          }
                        }
                      }
                    }
                    obj5 = outer2_0(outer2_1[4]);
                    outer2_3 = obj5.parseRetryAfterHeader(outer2_2.headers["retry-after"]);
                  }
                } else if (6 === tmp6) {
                  if (arg0 === 1) {
                    c7 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    v0 = 0;
                    c7 = 3;
                    const obj12 = { value: null, done: true };
                    obj12[0] = arg1;
                    return obj12;
                  } else if (false === arg1) {
                    const _Error = Error;
                    const error = new Error("Envelope not sent because `shouldSend` callback returned false");
                    throw error;
                  }
                } else {
                  if (7 === tmp6) {
                    if (arg0 === 1) {
                      c7 = 3;
                      throw arg1;
                    } else if (arg0 === 2) {
                      c7 = 3;
                      obj13 = { value: null, done: true };
                      obj13[0] = arg1;
                      return obj13;
                    }
                  } else if (arg0 === 1) {
                    c7 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c7 = 3;
                    obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  }
                  v02();
                  callback("Error sending. Event queued.", closure_4);
                  c7 = 3;
                  const obj14 = { value: null, done: true };
                  obj14[0] = {};
                  return obj14;
                }
                v02 = 5;
                c7 = 1;
                const obj15 = { value: null, done: false };
                obj15[0] = outer2_1.send(outer2_0);
                return obj15;
              }
            } catch (tmp69) {
              closure_4 = tmp69;
              if (tmp3 === v0) {
                c7 = tmp;
                throw tmp69;
              } else {
                v02 = tmp;
              }
            }
          }
        })();
        iter.next();
        return iter;
      });
      const _send = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    let closure_1 = callback(createStore);
    if (createStore.createStore) {
      let closure_3 = createStore.createStore(createStore);
      let closure_4 = outer1_4;
      if (createStore.flushAtStartup) {
        if (!timerId) {
          if (tmp7) {
            let _clearTimeout = clearTimeout;
            clearTimeout(timerId);
          }
          let _setTimeout = setTimeout;
          timerId = setTimeout(outer1_2(function*() {
            if (arr === 2) {
              arr = 3;
              HermesBuiltin.throwTypeError();
            } else if (tmp4 === 3) {
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
                arr = 2;
                if (0 === c2) {
                  if (arg0 === 1) {
                    arr = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    arr = 3;
                    obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  } else {
                    let closure_1 = tmp5;
                    let table = tmp2;
                    table = undefined;
                    c2 = undefined;
                    c2 = 1;
                    arr = 1;
                    const obj1 = { value: null, done: false };
                    obj1[0] = arr.shift();
                    return obj1;
                  }
                } else if (arg0 === 1) {
                  arr = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  arr = 3;
                  const obj2 = { value: null, done: true };
                  obj2[0] = arg1;
                  return obj2;
                } else {
                  table = arg1;
                  if (table) {
                    outer1_1("Attempting to send previously queued event");
                    const _Date = Date;
                    const date = new Date();
                    table[0].sent_at = date.toISOString();
                    callback(table, true).catch((arg0) => {
                      tmp5("Failed to retry sending", arg0);
                    });
                    const promise = callback(table, true);
                  }
                  arr = 3;
                  return { value: "HermesInternal", done: null };
                }
              } catch (tmp18) {
                arr = tmp;
                throw tmp18;
              }
            }
          }), closure_4);
          let unref = typeof timerId === "__REMOTEDEV__";
          if (typeof timerId !== "Object") {
            unref = timerId.unref;
          }
          if (unref) {
            timerId.unref();
          }
          let _Math = Math;
          closure_4 = Math.min(2 * closure_4, 3600000);
          const tmp8 = closure_4;
        }
      }
      let obj = { send: null, flush: null };
      obj[0] = send;
      obj[1] = function flush(arg0) {
        if (undefined === arg0) {
          let closure_4 = outer2_4;
          if (timerId) {
            const _clearTimeout = clearTimeout;
            clearTimeout(timerId);
          }
          const _setTimeout = setTimeout;
          timerId = setTimeout(outer2_2(function*() {
            if (arr === 2) {
              arr = 3;
              HermesBuiltin.throwTypeError();
            } else if (tmp4 === 3) {
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
                arr = 2;
                if (0 === c2) {
                  if (arg0 === 1) {
                    arr = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    arr = 3;
                    obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  } else {
                    let closure_1 = tmp5;
                    let table = tmp2;
                    table = undefined;
                    c2 = undefined;
                    c2 = 1;
                    arr = 1;
                    const obj1 = { value: null, done: false };
                    obj1[0] = arr.shift();
                    return obj1;
                  }
                } else if (arg0 === 1) {
                  arr = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  arr = 3;
                  const obj2 = { value: null, done: true };
                  obj2[0] = arg1;
                  return obj2;
                } else {
                  table = arg1;
                  if (table) {
                    outer1_1("Attempting to send previously queued event");
                    const _Date = Date;
                    const date = new Date();
                    table[0].sent_at = date.toISOString();
                    callback(table, true).catch((arg0) => {
                      tmp5("Failed to retry sending", arg0);
                    });
                    const promise = callback(table, true);
                  }
                  arr = 3;
                  return { value: "HermesInternal", done: null };
                }
              } catch (tmp18) {
                arr = tmp;
                throw tmp18;
              }
            }
          }), outer2_3);
          let unref = typeof timerId === "__REMOTEDEV__";
          if (typeof timerId !== "Object") {
            unref = timerId.unref;
          }
          if (unref) {
            timerId.unref();
          }
          const tmp2 = outer2_3;
        }
        return closure_1.flush(arg0);
      };
      return obj;
    } else {
      let _Error = Error;
      let error = new Error("No `createStore` function was provided");
      throw error;
    }
  };
}