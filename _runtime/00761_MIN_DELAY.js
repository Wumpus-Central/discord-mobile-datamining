// _runtime/00761_MIN_DELAY.js
import asyncGeneratorStep from "00005_asyncGeneratorStep.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let c3 = 100;
let c4 = 5000;

export const MIN_DELAY = 100;
export const START_DELAY = 5000;
export function makeOfflineTransport(arg0) {
  closure_0 = arg0;
  function log() {
    const items = [...arguments];
    if (closure_0(log[1]).DEBUG_BUILD) {
      const debug = closure_0(tmp2[2]).debug;
      log = debug.log;
      const items1 = ["[Offline]:"];
      HermesBuiltin.arraySpread(items, 1);
      HermesBuiltin.apply(items1, debug);
    }
    tmp2 = log;
  }
  return (createStore) => {
    closure_0 = createStore;
    function flushIn(arg0) {
      if (timerId) {
        const _clearTimeout = clearTimeout;
        clearTimeout(timerId);
      }
      timerId = setTimeout(
        asyncGeneratorStep(async () => {
          if (c3 === 2) {
            c3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp4 === 3) {
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
                  closure_0 = tmp2;
                  closure_128_0 = undefined;
                  c2 = undefined;
                  c2 = 1;
                  c3 = 1;
                  const obj1 = { value: closure_2_3.shift(), done: false };
                  return obj1;
                }
              } else if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj2 = { value, done: true };
                return obj2;
              } else {
                closure_128_0 = value;
                if (closure_128_0) {
                  tmp5("Attempting to send previously queued event");
                  const _Date = Date;
                  const date = new Date();
                  closure_128_0[0].sent_at = date.toISOString();
                  closure_129_7(closure_128_0, true).catch((error) => {
                    closure_1_1("Failed to retry sending", error);
                  });
                  const promise = closure_129_7(closure_128_0, true);
                }
                c3 = 3;
                return { value: "HermesInternal", done: null };
              }
            } catch (tmp18) {
              c3 = tmp;
              throw tmp18;
            }
          }
        }),
        arg0,
      );
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
        if (tmp) {
          const _clearTimeout = clearTimeout;
          clearTimeout(timerId);
        }
        const _setTimeout = setTimeout;
        timerId = setTimeout(
          asyncGeneratorStep(async () => {
            if (c3 === 2) {
              c3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp4 === 3) {
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
                    closure_0 = tmp2;
                    closure_128_0 = undefined;
                    c2 = undefined;
                    c2 = 1;
                    c3 = 1;
                    const obj1 = { value: closure_2_3.shift(), done: false };
                    return obj1;
                  }
                } else if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj2 = { value, done: true };
                  return obj2;
                } else {
                  closure_128_0 = value;
                  if (closure_128_0) {
                    tmp5("Attempting to send previously queued event");
                    const _Date = Date;
                    const date = new Date();
                    closure_128_0[0].sent_at = date.toISOString();
                    closure_129_7(closure_128_0, true).catch((error) => {
                      closure_1_1("Failed to retry sending", error);
                    });
                    const promise = closure_129_7(closure_128_0, true);
                  }
                  c3 = 3;
                  return { value: "HermesInternal", done: null };
                }
              } catch (tmp18) {
                c3 = tmp;
                throw tmp18;
              }
            }
          }),
          closure_4,
        );
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
      const self = this;
      const apply = closure_8.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    closure_8 = async function _send(arg0) {
      if (1 === tmp6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          return { value, done: true };
        } else {
          if (!closure_130_1) {
            let obj13 = createStore(729);
            if (obj13.envelopeContainsItemType(closure_130_0, ["replay_event", "replay_recording"])) {
              c6 = 2;
              c7 = 1;
              return { value: closure_131_3.push(closure_130_0), done: false };
            }
          }
          c5 = 1;
          if (closure_131_0.shouldSend) {
            c6 = 6;
            c7 = 1;
            return { value: closure_131_0.shouldSend(closure_130_0), done: false };
          }
        }
      } else if (2 === tmp6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          return { value, done: true };
        } else {
          closure_131_5(closure_2_3);
          c7 = 3;
          let obj5 = { value: {}, done: true };
          return obj5;
        }
      } else if (3 === tmp6) {
        c5 = 0;
        closure_130_4 = closure_4;
        c6 = 4;
        c7 = 1;
        return {
          value: (function shouldQueue(arg0, arg1, arg2) {
            const result = createStore(729).envelopeContainsItemType(arg0, ["client_report"]);
            let tmp2 = !result;
            if (!result) {
              shouldStore = shouldStore.shouldStore;
              let shouldStoreResult = !shouldStore;
              if (shouldStore) {
                shouldStoreResult = obj2.shouldStore(arg0, arg1, arg2);
              }
              tmp2 = shouldStoreResult;
              obj2 = shouldStore;
            }
            return tmp2;
          })(closure_130_0, closure_130_4, closure_131_4),
          done: false,
        };
      } else if (4 === tmp6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          return { value, done: true };
        } else if (value) {
          if (closure_130_1) {
            c6 = 8;
            c7 = 1;
            return { value: closure_131_3.unshift(closure_130_0), done: false };
          } else {
            c6 = 7;
            c7 = 1;
            return { value: closure_131_3.push(closure_130_0), done: false };
          }
        } else {
          throw closure_130_4;
        }
      } else if (5 === tmp6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          return { value, done: true };
        } else {
          closure_130_2 = value;
          closure_130_3 = closure_2_3;
          if (!closure_130_2) {
            closure_131_5(closure_130_3);
            closure_131_4 = closure_2_4;
            c5 = 0;
            c7 = 3;
          } else {
            const headers = closure_130_2.headers;
            let prop;
            if (headers != null) {
              prop = headers["retry-after"];
            }
            if (!prop) {
              const headers2 = closure_130_2.headers;
              let prop1;
              if (headers2 != null) {
                prop1 = headers2["x-sentry-rate-limits"];
              }
              if (prop1) {
                closure_130_3 = 60000;
              } else {
                let num9 = closure_130_2.statusCode;
                if (!num9) {
                  num9 = 0;
                }
                if (num9 >= 400) {
                  c5 = 0;
                  c7 = 3;
                  return { value: closure_130_2, done: true };
                }
              }
            }
          }
          obj5 = createStore(744);
          closure_130_3 = obj5.parseRetryAfterHeader(closure_130_2.headers["retry-after"]);
        }
      } else if (6 === tmp6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          return { value, done: true };
        } else if (false === value) {
          const _Error = Error;
          const error = new Error("Envelope not sent because `shouldSend` callback returned false");
          throw error;
        }
      } else {
        if (7 === tmp6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            obj13 = { value, done: true };
            return obj13;
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          return { value, done: true };
        }
        closure_131_6();
        closure_1("Error sending. Event queued.", closure_130_4);
        c7 = 3;
        return { value: {}, done: true };
      }
      await closure_131_1.send(closure_130_0);
      closure_3 = tmp2;
      closure_130_0 = shouldStore;
      let flag = closure_1;
      if (closure_1 === undefined) {
        flag = false;
      }
      closure_130_1 = flag;
      return "PX_16";
    };
    closure_1 = closure_0(createStore);
    if (createStore.createStore) {
      closure_3 = createStore.createStore(createStore);
      closure_4 = closure_1_4;
      if (createStore.flushAtStartup) {
        if (!timerId) {
          if (tmp7) {
            let _clearTimeout = clearTimeout;
            clearTimeout(timerId);
          }
          let _setTimeout = setTimeout;
          timerId = setTimeout(
            asyncGeneratorStep(async () => {
              if (c3 === 2) {
                c3 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp4 === 3) {
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
                      closure_0 = tmp2;
                      closure_128_0 = undefined;
                      c2 = undefined;
                      c2 = 1;
                      c3 = 1;
                      const obj1 = { value: closure_2_3.shift(), done: false };
                      return obj1;
                    }
                  } else if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    const obj2 = { value, done: true };
                    return obj2;
                  } else {
                    closure_128_0 = value;
                    if (closure_128_0) {
                      tmp5("Attempting to send previously queued event");
                      const _Date = Date;
                      const date = new Date();
                      closure_128_0[0].sent_at = date.toISOString();
                      closure_129_7(closure_128_0, true).catch((error) => {
                        closure_1_1("Failed to retry sending", error);
                      });
                      const promise = closure_129_7(closure_128_0, true);
                    }
                    c3 = 3;
                    return { value: "HermesInternal", done: null };
                  }
                } catch (tmp18) {
                  c3 = tmp;
                  throw tmp18;
                }
              }
            }),
            closure_4,
          );
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
      let obj = {
        send,
        flush(arg0) {
          if (undefined === arg0) {
            closure_4 = c4;
            if (timerId) {
              const _clearTimeout = clearTimeout;
              clearTimeout(timerId);
            }
            const _setTimeout = setTimeout;
            timerId = setTimeout(
              asyncGeneratorStep(async () => {
                if (c3 === 2) {
                  c3 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp4 === 3) {
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
                        closure_0 = tmp2;
                        closure_128_0 = undefined;
                        c2 = undefined;
                        c2 = 1;
                        c3 = 1;
                        const obj1 = { value: closure_2_3.shift(), done: false };
                        return obj1;
                      }
                    } else if (arg0 === 1) {
                      c3 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c3 = 3;
                      const obj2 = { value, done: true };
                      return obj2;
                    } else {
                      closure_128_0 = value;
                      if (closure_128_0) {
                        tmp5("Attempting to send previously queued event");
                        const _Date = Date;
                        const date = new Date();
                        closure_128_0[0].sent_at = date.toISOString();
                        closure_129_7(closure_128_0, true).catch((error) => {
                          closure_1_1("Failed to retry sending", error);
                        });
                        const promise = closure_129_7(closure_128_0, true);
                      }
                      c3 = 3;
                      return { value: "HermesInternal", done: null };
                    }
                  } catch (tmp18) {
                    c3 = tmp;
                    throw tmp18;
                  }
                }
              }),
              c3,
            );
            let unref = typeof timerId !== "number";
            if (typeof timerId !== "number") {
              unref = timerId.unref;
            }
            if (unref) {
              timerId.unref();
            }
          }
          return closure_1.flush(arg0);
        },
      };
      return obj;
    } else {
      let _Error = Error;
      let error = new Error("No `createStore` function was provided");
      throw error;
    }
  };
}
