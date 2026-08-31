// === Module 642: areStatesEqual ===

// Module 642 (areStatesEqual)
import failsDefault from "fails" /* 584 */;
import shallowEqual from "shallowEqual" /* 643 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import keys from "keys" /* 644 */;

require = arg1;
function areStatesEqual(items, current) {
  if (Array.isArray(items)) {
    const _Array = Array;
    if (Array.isArray(current)) {
      let result = shallowEqual.areArraysShallowEqual(items, current);
      const obj = shallowEqual;
    }
    return result;
  }
  result = Object.is(items, current);
}
function defaultRetryableErrors(status) {
  let tmp = status instanceof HTTPResponseError;
  if (tmp) {
    let tmp2 = status.status >= 500;
    if (!tmp2) {
      tmp2 = 429 === status.status;
    }
    tmp = tmp2;
  }
  return tmp;
}
function defaultBackoff() {
  return new failsDefault();
}
({ useCallback: c5, useEffect: closure_6, useState: error } = noop);
const SymbolResult = Symbol("NO_DATA");
class HTTPResponseError extends Error {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.name = "HTTPResponseError";
    applyArgumentsResult.status = 0;
    return applyArgumentsResult;
  }
}
const prototype = HTTPResponseError.prototype;
prototype["setStatus"] = function setStatus(status) {
  this.status = status;
};
prototype["setRetryAfter"] = function setRetryAfter(retryAfter) {
  this.retryAfter = retryAfter;
};
let closure_13 = keys.create(() => {
  const obj = { isLoading: false, error: null, backoff: new failsDefault(), lastSuccessAt: null, failureLockedUntil: null };
  return obj;
});
let result = require("set").fileFinishedImporting("../discord_common/js/packages/flux/createFetchStore.tsx");

export const NO_DATA = SymbolResult;
export const createFetchStore = function createFetchStore(importDefaultResult, initialize) {
  closure_0 = importDefaultResult;
  ({ getQueryId: importDefault, get: dependencyMap, load: closure_3, getIsLoading: closure_4, getError: closure_5, retryConfig } = initialize);
  if (retryConfig === undefined) {
    retryConfig = {};
  }
  let num = retryConfig.maxRetries;
  if (num === undefined) {
    num = 5;
  }
  let backoff = retryConfig.backoff;
  if (backoff === undefined) {
    backoff = getUseStoreState;
  }
  let retryableErrors = retryConfig.retryableErrors;
  if (retryableErrors === undefined) {
    retryableErrors = map;
  }
  ({ staleAfter: HTTPResponseError, failureStaleAfter: areStatesEqual } = initialize);
  map = undefined;
  getUseStoreState = function getUseStoreState(arg0) {
    if (null == arg0) {
      return loader;
    } else {
      let obj = map;
      let value = map.get(arg0);
      if (null == value) {
        obj = importDefaultResult(closure_1_2[5]).create(() => ({ isLoading: false, error: null, backoff: callback(), lastSuccessAt: null, failureLockedUntil: null }));
        const result = obj.set(arg0, obj);
        value = obj;
        const obj2 = importDefaultResult(closure_1_2[5]);
      }
      return value;
    }
  };
  function loader(param) {
    const self = this;
    const apply = _loader.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  function _loader() {
    const self = this;
    const tmp = closure_1_3((arg0) => {
      closure_0 = arg0;
      c6 = 0;
      let failureLockedUntil = 0;
      c5 = 0;
      const iter = (function*(arg0) {
        if (c7 === 2) {
          c7 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else {
          try {
            c7 = 2;
            if (0 === c6) {
              if (arg0 === 1) {
                c7 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c7 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let useStoreState = tmp3;
                refetch = tmp7;
                let queryId;
                isLoading = undefined;
                refetch = undefined;
                useStoreState = undefined;
                queryId = queryId.queryId;
                ({ args: isLoading, refetch } = queryId);
                if (refetch === undefined) {
                  refetch = false;
                }
                useStoreState = queryId.useStoreState;
                if (useStoreState === undefined) {
                  useStoreState = closure_1_12(queryId);
                }
                c4 = undefined;
                c5 = undefined;
                c6 = undefined;
                c7 = undefined;
                let callback;
                c6 = 1;
                c7 = 1;
                return { value: "Object", done: true };
              }
            } else {
              if (1 === tmp7) {
                if (arg0 === 1) {
                  c7 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c7 = 3;
                  obj1 = { value: null, done: true };
                  obj1[0] = arg1;
                  return obj1;
                } else {
                  backoff = closure_2_3.getState().backoff;
                  let applyResult;
                  if (c4 != null) {
                    const items = [];
                    HermesBuiltin.arraySpread(isLoading, 0);
                    applyResult = HermesBuiltin.apply(items, undefined);
                  }
                  isLoading = applyResult;
                  if (applyResult == null) {
                    isLoading = useStoreState.getState().isLoading;
                  }
                  c5 = isLoading;
                  if (null != queryId) {
                    if (!c5) {
                      if (!refetch) {
                        const items1 = [];
                        HermesBuiltin.arraySpread(isLoading, 0);
                        c6 = HermesBuiltin.apply(items1, undefined);
                        if (c6 === closure_1_8) {
                          c7 = 3;
                          return { value: "HermesInternal", done: "HermesInternal" };
                        } else {
                          if (null != c6) {
                            if (!(function isCachedDataStale(useStoreState, closure_1_9) {
                              if (null == closure_1_9) {
                                return false;
                              } else {
                                const lastSuccessAt = useStoreState.getState().lastSuccessAt;
                                let tmp2 = null == lastSuccessAt;
                                if (!tmp2) {
                                  const _Date = Date;
                                  tmp2 = Date.now() - lastSuccessAt > 1000 * closure_1_9;
                                }
                                return tmp2;
                              }
                            })(useStoreState, closure_1_9)) {
                              c7 = 3;
                              return { value: "HermesInternal", done: "HermesInternal" };
                            }
                          }
                          failureLockedUntil = closure_1_3.getState().failureLockedUntil;
                          if (null != failureLockedUntil) {
                            const _Date2 = Date;
                            if (Date.now() < failureLockedUntil) {
                              c7 = 3;
                              return { value: "HermesInternal", done: "HermesInternal" };
                            }
                          }
                        }
                      }
                      c5 = 1;
                      closure_1_3.setState({ isLoading: true });
                      const items2 = [];
                      HermesBuiltin.arraySpread(closure_1_1, 0);
                      c6 = 3;
                      c7 = 1;
                      let obj2 = { value: null, done: false };
                      obj2[0] = HermesBuiltin.apply(items2, undefined);
                      return obj2;
                    }
                  }
                  const tmp93 = c4;
                }
              } else {
                if (2 === tmp7) {
                  c5 = 0;
                  callback = (function makeError(c4) {
                    if (c4 instanceof Error) {
                      return c4;
                    } else {
                      if (typeof c4 === "object") {
                        if (null != c4) {
                          if ("status" in c4) {
                            if (typeof c4.status === "number") {
                              const retryAfter = c4.retryAfter;
                              let tmp5;
                              if (typeof retryAfter === "number") {
                                const _Number = Number;
                                if (Number.isFinite(retryAfter)) {
                                  if (retryAfter > 0) {
                                    tmp5 = retryAfter;
                                  }
                                }
                              }
                              if ("body" in c4) {
                                if (null != c4.body) {
                                  if (typeof c4.body === "object") {
                                    if ("message" in c4.body) {
                                      const _String2 = String;
                                      const obj3 = new closure_9(String(c4.body.message));
                                      obj3.setStatus(c4.status);
                                      obj3.setRetryAfter(tmp5);
                                      return obj3;
                                    }
                                  }
                                }
                              }
                              const _Object = Object;
                              const entries = Object.entries(c4);
                              const mapped = entries.map(() => { ... });
                              const obj2 = new closure_9(mapped.join(","));
                              obj2.setStatus(c4.status);
                              obj2.setRetryAfter(tmp5);
                              return obj2;
                            }
                          }
                        }
                      }
                      const _Error = Error;
                      const _String = String;
                      error = new Error(String(c4));
                      return error;
                    }
                  })(c4);
                  let obj3 = { error: null, isLoading: false };
                  obj3[0] = callback;
                  useStoreState.setState(obj3);
                  if (callback(callback)) {
                    if (c6 > c4.fails) {
                      const promise = new Promise((arg0, arg1) => {
                        closure_0 = arg0;
                        closure_1 = arg1;
                        retryAfter = retryAfter.retryAfter;
                        let tmp2;
                        if (typeof retryAfter === "number") {
                          const _Number = Number;
                          if (Number.isFinite(retryAfter)) {
                            if (retryAfter > 0) {
                              tmp2 = retryAfter;
                            }
                          }
                        }
                        let num2 = 0;
                        if (null != tmp2) {
                          num2 = 1000 * tmp2;
                        }
                        _undefined.fail(() => { ... }, num2);
                      });
                      c6 = 4;
                      c7 = 1;
                      const obj4 = { value: null, done: false };
                      obj4[0] = promise;
                      return obj4;
                    }
                  }
                  if (null != closure_10) {
                    const obj5 = { failureLockedUntil: null };
                    const _Date3 = Date;
                    obj5[0] = Date.now() + 1000 * closure_10;
                    useStoreState.setState(obj5);
                  }
                } else if (3 === tmp7) {
                  if (arg0 === 1) {
                    c7 = 3;
                    throw arg1;
                  } else if (arg0 !== 2) {
                    c4.succeed();
                    const obj6 = { error: null, isLoading: false, lastSuccessAt: null, failureLockedUntil: null };
                    let _Date = Date;
                    obj6[2] = Date.now();
                    useStoreState.setState(obj6);
                    c5 = 0;
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
                c5 = 0;
                c7 = 3;
                const obj7 = { value: null, done: true };
                obj7[0] = arg1;
                return obj7;
              }
              c7 = 3;
            }
          } catch (tmp75) {
            c4 = tmp75;
            if (tmp4 === c5) {
              c7 = tmp2;
              throw tmp75;
            } else {
              c6 = tmp;
            }
          }
        }
      })();
      iter.next();
      return iter;
    });
    closure_14 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  function useCfsHook() {
    let items = [...arguments];
    let first;
    let callback;
    c2 = undefined;
    const tmp = closure_1_4(backoff(items), 2);
    first = tmp[0];
    let result = items === first;
    if (!result) {
      let obj = importDefaultResult(closure_1_2[3]);
      result = obj.areArraysShallowEqual(items, first);
    }
    if (!result) {
      tmp[1](items);
    }
    let tmp8 = first;
    if (!Array.isArray(first)) {
      const items1 = [tmp7];
      tmp8 = items1;
    }
    const tmp9 = callback(...first);
    callback = tmp9;
    if (null == tmp9) {
      let value = loader;
    } else {
      value = map.get(tmp9);
      if (null == value) {
        obj = importDefaultResult(closure_1_2[5]).create(() => ({ isLoading: false, error: null, backoff: callback(), lastSuccessAt: null, failureLockedUntil: null }));
        const result1 = obj2.set(tmp9, obj);
        value = obj;
        const obj3 = importDefaultResult(closure_1_2[5]);
      }
      obj2 = map;
    }
    c2 = value;
    const items2 = [first];
    let stateFromStores = importDefaultResult(closure_1_2[6]).useStateFromStores(tmp8, () => {
      let applyResult;
      if (closure_1_4 != null) {
        const items = [];
        HermesBuiltin.arraySpread(first, 0);
        applyResult = HermesBuiltin.apply(items, undefined);
      }
      return applyResult;
    }, items2);
    const obj4 = importDefaultResult(closure_1_2[6]);
    tmp7 = first;
    const valueResult = value((isLoading) => {
      isLoading = null == closure_4;
      if (isLoading) {
        isLoading = isLoading.isLoading;
      }
      return isLoading;
    });
    const items3 = [first];
    let stateFromStores1 = importDefaultResult(closure_1_2[6]).useStateFromStores(tmp8, () => {
      let applyResult;
      if (closure_1_5 != null) {
        const items = [];
        HermesBuiltin.arraySpread(first, 0);
        applyResult = HermesBuiltin.apply(items, undefined);
      }
      return applyResult;
    }, items3);
    const obj5 = importDefaultResult(closure_1_2[6]);
    const valueResult1 = value((error) => {
      error = null;
      if (null == closure_5) {
        error = error.error;
      }
      return error;
    });
    const items4 = [first];
    const stateFromStores2 = importDefaultResult(closure_1_2[6]).useStateFromStores(tmp8, () => _undefined(...first), items4, closure_1_10);
    const items5 = [tmp9, first, value];
    num(() => {
      closure_1_13({ queryId: closure_1, args: first, useStoreState: c2 });
    }, items5);
    const items6 = [tmp9, first, value];
    let tmp22 = null;
    const obj6 = importDefaultResult(closure_1_2[6]);
    if (stateFromStores2 !== retryableErrors) {
      tmp22 = stateFromStores2;
    }
    obj = { data: tmp22, error: null, isLoading: null, refetch: null };
    if (stateFromStores1 == null) {
      stateFromStores1 = valueResult1;
    }
    obj[1] = stateFromStores1;
    if (stateFromStores == null) {
      stateFromStores = valueResult;
    }
    obj[2] = stateFromStores;
    obj[3] = closure_1_5(() => {
      closure_1_13({ queryId: closure_1, args: first, useStoreState: c2, refetch: true });
    }, items6);
    return obj;
  }
  map = new Map();
  useCfsHook.refetch = callback(() => {
    closure_0 = [...arguments];
    c3 = 0;
    c4 = 0;
    const iter = (function*() {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let store = tmp5;
              closure_1 = tmp2;
              closure_1 = undefined;
              store = undefined;
              c3 = 1;
              c4 = 1;
              return { value: "Object", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              const items = [];
              HermesBuiltin.arraySpread(closure_0, 0);
              closure_1 = HermesBuiltin.apply(items, undefined);
              store = callback(closure_1);
              backoff = store.getState().backoff;
              backoff.succeed();
              store.setState({ failureLockedUntil: null });
              const obj2 = { queryId: null, args: null, useStoreState: null, refetch: true };
              obj2[0] = closure_1;
              obj2[1] = closure_0;
              obj2[2] = store;
              c3 = 2;
              c4 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = callback2(obj2);
              return obj3;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c4 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp7) {
          c4 = tmp;
          throw tmp7;
        }
      }
    })();
    iter.next();
    return iter;
  });
  useCfsHook.fetchMany = callback(() => {
    closure_0 = [...arguments];
    c2 = 0;
    c3 = 0;
    const iter = (function*() {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp2;
              c2 = 1;
              c3 = 1;
              return { value: "Object", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              c2 = 2;
              c3 = 1;
              let obj2 = { value: null, done: false };
              obj2[0] = Promise.all(closure_0.map((args) => {
                const tmp = tmp2(...args);
                let obj = { queryId: tmp, args, useStoreState: null };
                if (null == tmp) {
                  let value = closure_1_13;
                } else {
                  value = closure_11.get(tmp);
                  if (null == value) {
                    obj = callback(table[5]).create(() => ({ isLoading: false, error: null, backoff: callback(), lastSuccessAt: null, failureLockedUntil: null }));
                    const result = obj2.set(tmp, obj);
                    value = obj;
                    const obj3 = callback(table[5]);
                  }
                  obj2 = closure_11;
                }
                obj[2] = value;
                return closure_13(obj);
              }));
              return obj2;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c3 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp10) {
          c3 = tmp;
          throw tmp10;
        }
      }
    })();
    iter.next();
    return iter;
  });
  useCfsHook.refetchMany = callback(() => {
    closure_0 = [...arguments];
    c2 = 0;
    c3 = 0;
    const iter = (function*() {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp2;
              c2 = 1;
              c3 = 1;
              return { value: "Object", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              c2 = 2;
              c3 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = Promise.all(closure_0.map((args) => {
                const tmp = tmp2(...args);
                if (null == tmp) {
                  let value = closure_1_13;
                } else {
                  let obj = closure_11;
                  value = closure_11.get(tmp);
                  if (null == value) {
                    obj = callback(table[5]).create(() => ({ isLoading: false, error: null, backoff: callback(), lastSuccessAt: null, failureLockedUntil: null }));
                    const result = obj.set(tmp, obj);
                    value = obj;
                    const obj3 = callback(table[5]);
                    tmp2 = callback;
                  }
                }
                backoff = value.getState().backoff;
                backoff.succeed();
                value.setState({ failureLockedUntil: null });
                obj = { queryId: tmp, args, useStoreState: value, refetch: true };
                return callback2(obj);
              }));
              return obj2;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c3 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp10) {
          c3 = tmp;
          throw tmp10;
        }
      }
    })();
    iter.next();
    return iter;
  });
  return useCfsHook;
};