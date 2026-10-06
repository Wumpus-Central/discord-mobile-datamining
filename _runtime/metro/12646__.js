// === Module 12646: ? ===

// Module 12646
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;

let c2, c6, c7;

let c3 = 100;
let c4 = 5000;

export const MIN_DELAY = 100;
export const START_DELAY = 5000;
export function makeOfflineTransport(arg0) {
  let closure_0 = arg0;
  function log() {
    const items = [...arguments];
    if (closure_0(log[1]).DEBUG_BUILD) {
      const logger = closure_0(log[2]).logger;
      const info = logger.info;
      const items1 = ["[Offline]:"];
      HermesBuiltin.arraySpread(items1, items, 1);
      HermesBuiltin.apply(info, items1, logger);
    }
  }
  return function(createStore) {
    let timerId;
    let tmp5;
    closure_0 = createStore;
    function flushIn(arg0) {
      const tmp = timerId;
      if (tmp) {
        const _clearTimeout = clearTimeout;
        clearTimeout(timerId);
      }
      timerId = setTimeout(_asyncToGenerator(async function() {
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            obj = { value, done: true };
            return obj;
          } else {
            return { value: "IconComponent", done: null };
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
                const obj2 = { value, done: true };
                return obj2;
              } else {
                closure_0 = undefined;
                c2 = 1;
                c3 = 1;
                const obj3 = { value: closure_2_3.shift(), done: false };
                return obj3;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_0 = value;
              const tmp21 = closure_0;
              if (tmp21) {
                tmp4("Attempting to send previously queued event");
                const _Date = Date;
                const self = this;
                const self2 = this;
                const first = closure_0[0];
                const date = new Date();
                first.sent_at = date.toISOString();
                const promise = closure_129_7(closure_0, true);
                promise.catch((error) => {
                  closure_1_1("Failed to retry sending", error);
                });
              }
              c3 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp16) {
            c3 = 3;
            throw tmp16;
          }
        }
      }), arg0);
      let unref = typeof timerId !== "number";
      if (typeof timerId !== "number") {
        unref = timerId.unref;
      }
      if (unref) {
        timerId.unref();
      }
    }
    function flushWithBackOff() {
      if (!timerId) {
        const tmp2 = closure_4;
        if (tmp) {
          const _clearTimeout = clearTimeout;
          clearTimeout(timerId);
        }
        const _setTimeout = setTimeout;
        timerId = setTimeout(_asyncToGenerator(async function() {
          if (c3 === 2) {
            c3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              obj = { value, done: true };
              return obj;
            } else {
              return { value: "IconComponent", done: null };
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
                  const obj2 = { value, done: true };
                  return obj2;
                } else {
                  closure_0 = undefined;
                  c2 = 1;
                  c3 = 1;
                  const obj3 = { value: closure_2_3.shift(), done: false };
                  return obj3;
                }
              } else if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                closure_0 = value;
                const tmp21 = closure_0;
                if (tmp21) {
                  tmp4("Attempting to send previously queued event");
                  const _Date = Date;
                  const self = this;
                  const self2 = this;
                  const first = closure_0[0];
                  const date = new Date();
                  first.sent_at = date.toISOString();
                  const promise = closure_129_7(closure_0, true);
                  promise.catch((error) => {
                    closure_1_1("Failed to retry sending", error);
                  });
                }
                c3 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp16) {
              c3 = 3;
              throw tmp16;
            }
          }
        }), tmp2);
        let unref = typeof timerId !== "number";
        if (typeof timerId !== "number") {
          unref = timerId.unref;
        }
        if (unref) {
          timerId.unref();
        }
        const _Math = Math;
        closure_4 = Math.min(2 * closure_4, 3600000);
      }
    }
    function send(arg0) {
      return obj(...arguments);
    }
    let obj = function _send() {
      obj = _asyncToGenerator(async (arg0) => {
        let shouldStore;
        let value;
        function shouldQueue(shouldStore, arg1, arg2) {
          obj = createStore(closure_3_1[3]);
          const result = obj.envelopeContainsItemType(shouldStore, ["client_report"]);
          let tmp2 = !result;
          if (tmp2) {
            const obj2 = shouldStore;
            shouldStore = shouldStore.shouldStore;
            let shouldStoreResult = !shouldStore;
            if (shouldStore) {
              shouldStoreResult = obj2.shouldStore(shouldStore, arg1, arg2);
            }
            tmp2 = shouldStoreResult;
          }
          return tmp2;
        }
        closure_1 = arg1;
        if (c7 === 2) {
          c7 = 3;
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
          try {
            let flag;
            c7 = 2;
            const tmp4 = c6;
            if (0 === c6) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                closure_3 = tmp;
                value = tmp4;
                flag = closure_1;
                if (closure_1 === undefined) {
                  flag = false;
                }
                value = undefined;
                c3 = undefined;
                c6 = 1;
                c7 = 1;
                return { value: "Reflect", done: true };
              }
            } else if (1 === tmp4) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                const tmp75 = flag;
                if (!tmp75) {
                  const obj14 = createStore(closure_2_1[3]);
                  if (obj14.envelopeContainsItemType(shouldStore, ["replay_event", "replay_recording"])) {
                    c6 = 2;
                    c7 = 1;
                    const obj6 = { value: closure_131_3.push(shouldStore), done: false };
                    return obj6;
                  }
                }
                c5 = 1;
                c6 = 5;
                c7 = 1;
                const obj7 = { value: closure_131_1.send(shouldStore), done: false };
                return obj7;
              }
            } else if (2 === tmp4) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 3;
                const obj8 = { value, done: true };
                return obj8;
              } else {
                closure_131_5(closure_2_3);
                c7 = 3;
                const obj9 = { value: {}, done: true };
                return obj9;
              }
            } else if (3 === tmp4) {
              c5 = 0;
              c6 = 4;
              c7 = 1;
              const obj10 = { value: shouldQueue(shouldStore, closure_4, closure_4), done: false };
              return obj10;
            } else if (4 === tmp4) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 3;
                const obj11 = { value, done: true };
                return obj11;
              } else if (value) {
                if (flag) {
                  c6 = 7;
                  c7 = 1;
                  const obj12 = { value: closure_131_3.unshift(shouldStore), done: false };
                  return obj12;
                } else {
                  c6 = 6;
                  c7 = 1;
                  const obj13 = { value: closure_131_3.push(shouldStore), done: false };
                  return obj13;
                }
              } else {
                throw closure_4;
              }
            } else if (5 === tmp4) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                c7 = 3;
                const obj15 = { value, done: true };
                return obj15;
              } else {
                c3 = closure_2_3;
                const tmp73 = value;
                if (tmp73) {
                  if (value.headers) {
                    if (value.headers["retry-after"]) {
                      const obj5 = createStore(closure_2_1[4]);
                      c3 = obj5.parseRetryAfterHeader(value.headers["retry-after"]);
                    }
                  }
                  if (value.headers) {
                    if (value.headers["x-sentry-rate-limits"]) {
                      c3 = 60000;
                    }
                  }
                  const num7 = value.statusCode || 0;
                  if (num7 >= 400) {
                    c5 = 0;
                    c7 = 3;
                    const obj16 = { value, done: true };
                    return obj16;
                  }
                }
                closure_131_5(c3);
                closure_4 = closure_2_4;
                c5 = 0;
                c7 = 3;
                const obj17 = { value, done: true };
                return obj17;
              }
            } else {
              if (6 === tmp4) {
                if (arg0 === 1) {
                  c7 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c7 = 3;
                  const obj18 = { value, done: true };
                  return obj18;
                }
              } else if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 3;
                obj = { value, done: true };
                return obj;
              }
              closure_131_6();
              closure_1("Error sending. Event queued.", closure_4);
              c7 = 3;
              const obj19 = { value: {}, done: true };
              return obj19;
            }
          } catch (tmp64) {
            closure_4 = tmp64;
            if (0 === c5) {
              c7 = 3;
              throw tmp64;
            } else {
              c6 = 3;
            }
          }
        }
      });
      return obj(...arguments);
    };
    let closure_1 = closure_0(createStore);
    if (createStore.createStore) {
      let closure_3 = createStore.createStore(createStore);
      let closure_4 = closure_1_4;
      if (createStore.flushAtStartup) {
        if (!timerId) {
          const tmp6 = closure_4;
          if (tmp5) {
            const tmp7 = globalThis;
            let _clearTimeout = clearTimeout;
            clearTimeout(timerId);
          }
          const tmp10 = globalThis;
          let _setTimeout = setTimeout;
          timerId = setTimeout(_asyncToGenerator(async function() {
            if (c3 === 2) {
              c3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                obj = { value, done: true };
                return obj;
              } else {
                return { value: "IconComponent", done: null };
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
                    const obj2 = { value, done: true };
                    return obj2;
                  } else {
                    closure_0 = undefined;
                    c2 = 1;
                    c3 = 1;
                    const obj3 = { value: closure_2_3.shift(), done: false };
                    return obj3;
                  }
                } else if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  closure_0 = value;
                  const tmp21 = closure_0;
                  if (tmp21) {
                    tmp4("Attempting to send previously queued event");
                    const _Date = Date;
                    const self = this;
                    const self2 = this;
                    const first = closure_0[0];
                    const date = new Date();
                    first.sent_at = date.toISOString();
                    const promise = closure_129_7(closure_0, true);
                    promise.catch((error) => {
                      closure_1_1("Failed to retry sending", error);
                    });
                  }
                  c3 = 3;
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp16) {
                c3 = 3;
                throw tmp16;
              }
            }
          }), tmp6);
          let unref = typeof timerId !== "number";
          if (typeof timerId !== "number") {
            unref = timerId.unref;
          }
          if (unref) {
            timerId.unref();
          }
          let _Math = Math;
          closure_4 = Math.min(2 * closure_4, 3600000);
        }
      }
      obj = {
        send,
        flush(arg0) {
            if (undefined === arg0) {
              closure_4 = c4;
              const tmp3 = timerId;
              if (tmp3) {
                const tmp4 = globalThis;
                const _clearTimeout = clearTimeout;
                clearTimeout(timerId);
              }
              const _setTimeout = setTimeout;
              timerId = setTimeout(_asyncToGenerator(async function() {
                if (c3 === 2) {
                  c3 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp3 === 3) {
                  if (arg0 === 1) {
                    throw value;
                  } else if (arg0 === 2) {
                    obj = { value, done: true };
                    return obj;
                  } else {
                    return { value: "IconComponent", done: null };
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
                        const obj2 = { value, done: true };
                        return obj2;
                      } else {
                        closure_0 = undefined;
                        c2 = 1;
                        c3 = 1;
                        const obj3 = { value: closure_2_3.shift(), done: false };
                        return obj3;
                      }
                    } else if (arg0 === 1) {
                      c3 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c3 = 3;
                      const obj4 = { value, done: true };
                      return obj4;
                    } else {
                      closure_0 = value;
                      const tmp21 = closure_0;
                      if (tmp21) {
                        tmp4("Attempting to send previously queued event");
                        const _Date = Date;
                        const self = this;
                        const self2 = this;
                        const first = closure_0[0];
                        const date = new Date();
                        first.sent_at = date.toISOString();
                        const promise = closure_129_7(closure_0, true);
                        promise.catch((error) => {
                          closure_1_1("Failed to retry sending", error);
                        });
                      }
                      c3 = 3;
                      return { value: "IconComponent", done: null };
                    }
                  } catch (tmp16) {
                    c3 = 3;
                    throw tmp16;
                  }
                }
              }), c3);
              let unref = typeof timerId !== "number";
              if (typeof timerId !== "number") {
                unref = timerId.unref;
              }
              if (unref) {
                timerId.unref();
              }
            }
            return closure_1.flush(arg0);
          }
      };
      return obj;
    } else {
      let tmp = globalThis;
      const _Error = Error;
      let self = this;
      let self2 = this;
      const error = new Error("No `createStore` function was provided");
      let tmp3 = error;
      throw error;
    }
  };
}