// discord_common/js/packages/flux/createFetchStore.tsx
import discord_common_shallowEqual from "../shallow-equal/shallowEqual.tsx";
import BackoffDefault from "../backoff/Backoff.tsx";
import _mod560 from "../../../../_runtime/metro/00560__.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";

require = fn;
function areStatesEqual(items, current) {
  if (Array.isArray(items)) {
    const _Array = Array;
    if (Array.isArray(current)) {
      let result = discord_common_shallowEqual.areArraysShallowEqual(items, current);
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
  return new BackoffDefault();
}
const noop = fn(19);
({ useCallback: hasOwnProperty, useEffect: metroRequire, useState: closure_7 } = noop);
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
const module_560 = fn(560);
let closure_13 = module_560.create(() => {
  const obj = {
    isLoading: false,
    error: null,
    backoff: new BackoffDefault(),
    lastSuccessAt: null,
    failureLockedUntil: null,
  };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("../discord_common/js/packages/flux/createFetchStore.tsx");

export const NO_DATA = SymbolResult;
export const createFetchStore = function createFetchStore(ApplicationStore, initialize) {
  ({
    getQueryId: importDefault,
    get: dependencyMap,
    load: asyncGeneratorStep,
    getIsLoading: _slicedToArray,
    getError: closure_5,
    retryConfig,
  } = initialize);
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
  getUseStoreState = function getUseStoreState(queryId) {
    if (null == queryId) {
      return closure_13;
    } else {
      let obj = map;
      value = map.get(queryId);
      if (null == value) {
        obj = _mod560.create(() => ({
          isLoading: false,
          error: null,
          backoff: closure_1_7(),
          lastSuccessAt: null,
          failureLockedUntil: null,
        }));
        const result = obj.set(queryId, obj);
        value = obj;
      }
      return value;
    }
  };
  function loader() {
    const self = this;
    const apply = closure_14.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  closure_14 = async function _loader(arg0) {
    let queryId = arg0;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    let iter = (async (arg0) => {
      if (c7 === 2) {
        c7 = 3;
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              let useStoreState = tmp3;
              refetch = tmp7;
              closure_130_0 = undefined;
              closure_130_1 = undefined;
              closure_130_2 = undefined;
              closure_130_3 = undefined;
              queryId = queryId.queryId;
              closure_130_0 = queryId;
              ({ args: closure_130_1, refetch } = queryId);
              if (refetch === undefined) {
                refetch = false;
              }
              closure_130_2 = refetch;
              useStoreState = queryId.useStoreState;
              if (useStoreState === undefined) {
                useStoreState = getUseStoreState(queryId);
              }
              closure_130_3 = useStoreState;
              backoff = undefined;
              closure_130_5 = undefined;
              closure_130_6 = undefined;
              let failureLockedUntil;
              closure_130_8 = undefined;
              c6 = 1;
              c7 = 1;
              return { value: "PX_16", done: true };
            }
          } else {
            if (1 === tmp7) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 3;
                const obj1 = { value, done: true };
                return obj1;
              } else {
                backoff = closure_130_3.getState().backoff;
                let applyResult;
                if (closure_131_4 != null) {
                  const items = [];
                  HermesBuiltin.arraySpread(closure_130_1, 0);
                  applyResult = HermesBuiltin.apply(items, undefined);
                }
                isLoading = applyResult;
                if (applyResult == null) {
                  isLoading = closure_130_3.getState().isLoading;
                }
                closure_130_5 = isLoading;
                if (null != closure_130_0) {
                  if (!closure_130_5) {
                    if (!closure_130_2) {
                      const items1 = [];
                      HermesBuiltin.arraySpread(closure_130_1, 0);
                      closure_130_6 = HermesBuiltin.apply(items1, undefined);
                      if (closure_130_6 === closure_1_8) {
                        c7 = 3;
                        return { value: "HermesInternal", done: null };
                      } else {
                        if (null != closure_130_6) {
                          if (
                            !(function isCachedDataStale(getState, arg1) {
                              if (null == arg1) {
                                return false;
                              } else {
                                const lastSuccessAt = getState.getState().lastSuccessAt;
                                let tmp2 = null == lastSuccessAt;
                                if (!tmp2) {
                                  const _Date = Date;
                                  tmp2 = Date.now() - lastSuccessAt > 1000 * arg1;
                                }
                                return tmp2;
                              }
                            })(closure_130_3, closure_131_9)
                          ) {
                            c7 = 3;
                            return { value: "HermesInternal", done: null };
                          }
                        }
                        failureLockedUntil = closure_130_3.getState().failureLockedUntil;
                        if (null != failureLockedUntil) {
                          const _Date2 = Date;
                          if (Date.now() < failureLockedUntil) {
                            c7 = 3;
                            return { value: "HermesInternal", done: null };
                          }
                        }
                      }
                    }
                    c5 = 1;
                    closure_130_3.setState({ isLoading: true });
                    const items2 = [];
                    HermesBuiltin.arraySpread(closure_130_1, 0);
                    c6 = 3;
                    c7 = 1;
                    let obj2 = { value: HermesBuiltin.apply(items2, undefined), done: false };
                    return obj2;
                  }
                }
              }
            } else {
              if (2 === tmp7) {
                c5 = 0;
                closure_130_8 = (function makeError(status) {
                  if (status instanceof Error) {
                    return status;
                  } else {
                    if (typeof status === "object") {
                      if (null != status) {
                        if ("status" in status) {
                          if (typeof status.status === "number") {
                            retryAfter = status.retryAfter;
                            let tmp5;
                            if (typeof retryAfter === "number") {
                              const _Number = Number;
                              if (Number.isFinite(retryAfter)) {
                                if (retryAfter > 0) {
                                  tmp5 = retryAfter;
                                }
                              }
                            }
                            if ("body" in status) {
                              if (null != status.body) {
                                if (typeof status.body === "object") {
                                  if ("message" in status.body) {
                                    const _String2 = String;
                                    const obj3 = new closure_1_9(String(status.body.message));
                                    obj3.setStatus(status.status);
                                    obj3.setRetryAfter(tmp5);
                                    return obj3;
                                  }
                                }
                              }
                            }
                            const _Object = Object;
                            const entries = Object.entries(status);
                            const mapped = entries.map((item) => {
                              [tmp, tmp2] = item;
                              return "" + tmp + ": [" + String(tmp2) + "]";
                            });
                            const obj2 = new closure_1_9(mapped.join(","));
                            obj2.setStatus(status.status);
                            obj2.setRetryAfter(tmp5);
                            return obj2;
                          }
                        }
                      }
                    }
                    const _Error = Error;
                    const _String = String;
                    const error = new Error(String(status));
                    return error;
                  }
                })(closure_4);
                let obj3 = { error: closure_130_8, isLoading: false };
                closure_130_3.setState(obj3);
                if (closure_131_8(closure_130_8)) {
                  if (closure_131_6 > backoff.fails) {
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
                      closure_4.fail(() => {
                        closure_3_13({ queryId, args, useStoreState, refetch }).then(closure_0, closure_1);
                      }, num2);
                    });
                    c6 = 4;
                    c7 = 1;
                    const obj4 = { value: promise, done: false };
                    return obj4;
                  }
                }
                if (null != closure_131_10) {
                  const obj5 = { failureLockedUntil: null };
                  const _Date3 = Date;
                  obj5.failureLockedUntil = Date.now() + 1000 * closure_131_10;
                  closure_130_3.setState(obj5);
                }
              } else if (3 === tmp7) {
                if (arg0 === 1) {
                  c7 = 3;
                  throw value;
                } else if (arg0 !== 2) {
                  backoff.succeed();
                  const obj6 = { error: null, isLoading: false, lastSuccessAt: null, failureLockedUntil: null };
                  let _Date = Date;
                  obj6.lastSuccessAt = Date.now();
                  closure_130_3.setState(obj6);
                  c5 = 0;
                }
              } else if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 3;
                obj = { value, done: true };
                return obj;
              }
              c5 = 0;
              c7 = 3;
              const obj7 = { value, done: true };
              return obj7;
            }
            c7 = 3;
          }
        } catch (tmp75) {
          closure_4 = tmp75;
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
  };
  function useCfsHook() {
    let items = [...arguments];
    let queryId;
    c2 = undefined;
    const tmp = _slicedToArray(backoff(items), 2);
    const args = tmp[0];
    let result = items === args;
    if (!result) {
      let obj = ApplicationStore(558);
      result = obj.areArraysShallowEqual(items, args);
    }
    if (!result) {
      tmp[1](items);
    }
    let tmp8 = args;
    if (!Array.isArray(args)) {
      const items1 = [tmp7];
      tmp8 = items1;
    }
    const tmp9 = queryId(...first);
    queryId = tmp9;
    if (null == tmp9) {
      value = loader;
    } else {
      value = map.get(tmp9);
      if (null == value) {
        obj = ApplicationStore(560).create(() => ({
          isLoading: false,
          error: null,
          backoff: closure_1_7(),
          lastSuccessAt: null,
          failureLockedUntil: null,
        }));
        const result1 = map.set(tmp9, obj);
        value = obj;
        const obj3 = ApplicationStore(560);
      }
    }
    c2 = value;
    const items2 = [args];
    let stateFromStores = ApplicationStore(563).useStateFromStores(
      tmp8,
      () => {
        let applyResult;
        if (_slicedToArray != null) {
          const items = [];
          HermesBuiltin.arraySpread(first, 0);
          applyResult = HermesBuiltin.apply(items, undefined);
        }
        return applyResult;
      },
      items2,
    );
    const obj4 = ApplicationStore(563);
    tmp7 = args;
    const valueResult = value((isLoading) => {
      isLoading = null == closure_1_4;
      if (isLoading) {
        isLoading = isLoading.isLoading;
      }
      return isLoading;
    });
    const items3 = [args];
    let stateFromStores1 = ApplicationStore(563).useStateFromStores(
      tmp8,
      () => {
        let applyResult;
        if (closure_2_5 != null) {
          const items = [];
          HermesBuiltin.arraySpread(first, 0);
          applyResult = HermesBuiltin.apply(items, undefined);
        }
        return applyResult;
      },
      items3,
    );
    const obj5 = ApplicationStore(563);
    const valueResult1 = value((error) => {
      error = null;
      if (null == closure_1_5) {
        error = error.error;
      }
      return error;
    });
    const items4 = [args];
    const stateFromStores2 = ApplicationStore(563).useStateFromStores(
      tmp8,
      () => dependencyMap(...first),
      items4,
      areStatesEqual,
    );
    const items5 = [tmp9, args, value];
    num(() => {
      loader({ queryId, args, useStoreState });
    }, items5);
    const items6 = [tmp9, args, value];
    let tmp22 = null;
    const obj6 = ApplicationStore(563);
    if (stateFromStores2 !== retryableErrors) {
      tmp22 = stateFromStores2;
    }
    obj = { data: tmp22, error: null, isLoading: null, refetch: null };
    if (stateFromStores1 == null) {
      stateFromStores1 = valueResult1;
    }
    obj.error = stateFromStores1;
    if (stateFromStores == null) {
      stateFromStores = valueResult;
    }
    obj.isLoading = stateFromStores;
    obj.refetch = closure_1_5(() => {
      loader({ queryId, args, useStoreState, refetch: true });
    }, items6);
    return obj;
  }
  map = new Map();
  useCfsHook.refetch = asyncGeneratorStep(async () => {
    closure_0 = [...arguments];
    c3 = 0;
    c4 = 0;
    const iter = (async () => {
      const items = [];
      HermesBuiltin.arraySpread(closure_129_0, 0);
      closure_129_1 = HermesBuiltin.apply(items, undefined);
      closure_129_2 = closure_130_12(closure_129_1);
      backoff = closure_129_2.getState().backoff;
      backoff.succeed();
      closure_129_2.setState({ failureLockedUntil: null });
      await closure_130_13({
        queryId: closure_129_1,
        args: closure_129_0,
        useStoreState: closure_129_2,
        refetch: true,
      });
      await "HermesInternal";
      closure_1 = tmp2;
      closure_129_0 = closure_0;
      return "PX_16";
    })();
    iter.next();
    return iter;
  });
  useCfsHook.fetchMany = asyncGeneratorStep(async () => {
    closure_0 = [...arguments];
    c2 = 0;
    c3 = 0;
    const iter = (async () => {
      await Promise.all(
        closure_129_0.map((args) => {
          const tmp = closure_1_1(...args);
          let obj = { queryId: tmp, args, useStoreState: null };
          if (null == tmp) {
            value = loader;
          } else {
            value = closure_1_11.get(tmp);
            if (null == value) {
              obj = closure_0(dependencyMap[5]).create(() => ({
                isLoading: false,
                error: null,
                backoff: closure_1_7(),
                lastSuccessAt: null,
                failureLockedUntil: null,
              }));
              const result = closure_1_11.set(tmp, obj);
              value = obj;
              const obj3 = closure_0(dependencyMap[5]);
            }
          }
          obj.useStoreState = value;
          return closure_1_13(obj);
        }),
      );
      await "HermesInternal";
      closure_1 = tmp2;
      closure_129_0 = closure_0;
      return "PX_16";
    })();
    iter.next();
    return iter;
  });
  useCfsHook.refetchMany = asyncGeneratorStep(async () => {
    closure_0 = [...arguments];
    c2 = 0;
    c3 = 0;
    const iter = (async () => {
      await Promise.all(
        closure_129_0.map((args) => {
          const tmp = closure_1_1(...args);
          if (null == tmp) {
            value = loader;
          } else {
            let obj = closure_1_11;
            value = closure_1_11.get(tmp);
            if (null == value) {
              obj = closure_0(dependencyMap[5]).create(() => ({
                isLoading: false,
                error: null,
                backoff: closure_1_7(),
                lastSuccessAt: null,
                failureLockedUntil: null,
              }));
              const result = obj.set(tmp, obj);
              value = obj;
              const obj3 = closure_0(dependencyMap[5]);
            }
          }
          backoff = value.getState().backoff;
          backoff.succeed();
          value.setState({ failureLockedUntil: null });
          obj = { queryId: tmp, args, useStoreState: value, refetch: true };
          return closure_1_13(obj);
        }),
      );
      await "HermesInternal";
      closure_1 = tmp2;
      closure_129_0 = closure_0;
      return "PX_16";
    })();
    iter.next();
    return iter;
  });
  return useCfsHook;
};
