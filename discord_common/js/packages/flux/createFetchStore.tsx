// discord_common/js/packages/flux/createFetchStore.tsx
import discord_common_shallowEqual from "../shallow-equal/shallowEqual.tsx";
import BackoffDefault from "../backoff/Backoff.tsx";
import _mod570 from "../../../../_runtime/metro/00570__.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";

require = fn;
function areStatesEqual(colors, current) {
  if (Array.isArray(colors)) {
    const _Array = Array;
    if (Array.isArray(current)) {
      let result = discord_common_shallowEqual.areArraysShallowEqual(colors, current);
    }
    return result;
  }
  result = Object.is(colors, current);
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
const ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useMemoArray(colors) {
      const tmp = _slicedToArray(React5(colors), 2);
      const first = tmp[0];
      let result = colors === first;
      if (!result) {
        result = discord_common_shallowEqual.areArraysShallowEqual(colors, first);
      }
      if (!result) {
        tmp[1](colors);
      }
      return first;
    }
  : function useMemoArray(colors) {
      const tmp = _slicedToArray(React5(colors), 2);
      const first = tmp[0];
      let result = colors === first;
      if (!result) {
        result = discord_common_shallowEqual.areArraysShallowEqual(colors, first);
      }
      if (!result) {
        tmp[1](colors);
      }
      return first;
    };
const module_570 = fn(570);
let closure_14 = module_570.create(() => {
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
export function createFetchStore(ApplicationStore, arg1) {
  ({
    getQueryId: importDefault,
    get: dependencyMap,
    load: asyncGeneratorStep,
    getIsLoading: _slicedToArray,
    getError: closure_5,
    retryConfig,
  } = arg1);
  if (retryConfig === undefined) {
    retryConfig = {};
  }
  let num = retryConfig.maxRetries;
  if (num === undefined) {
    num = 5;
  }
  let backoff = retryConfig.backoff;
  if (backoff === undefined) {
    backoff = loader;
  }
  let retryableErrors = retryConfig.retryableErrors;
  if (retryableErrors === undefined) {
    retryableErrors = getUseStoreState;
  }
  ({ staleAfter: HTTPResponseError, failureStaleAfter: closure_10 } = arg1);
  getUseStoreState = function getUseStoreState(queryId) {
    if (null == queryId) {
      return closure_14;
    } else {
      value = map.get(queryId);
      if (null == value) {
        const obj3 = _mod570.create(() => ({
          isLoading: false,
          error: null,
          backoff: closure_1_7(),
          lastSuccessAt: null,
          failureLockedUntil: null,
        }));
        const result = map.set(queryId, obj3);
        value = obj3;
      }
      return value;
    }
  };
  loader = function loader() {
    const self = this;
    const apply = closure_14.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
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
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "IconComponent" };
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
              let obj3 = { value, done: true };
              return obj3;
            } else {
              closure_3 = tmp3;
              closure_2 = tmp7;
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
              let useStoreState = queryId.useStoreState;
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
              return { value: "Reflect", done: null };
            }
          } else {
            if (1 === tmp7) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 3;
                const obj4 = { value, done: true };
                return obj4;
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
                        return { value: "IconComponent", done: "IconComponent" };
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
                            return { value: "IconComponent", done: "IconComponent" };
                          }
                        }
                        failureLockedUntil = closure_130_3.getState().failureLockedUntil;
                        if (null != failureLockedUntil) {
                          const _Date2 = Date;
                          if (Date.now() < failureLockedUntil) {
                            c7 = 3;
                            return { value: "IconComponent", done: "IconComponent" };
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
                    const obj5 = { value: HermesBuiltin.apply(items2, undefined), done: false };
                    return obj5;
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
                            const retryAfter = status.retryAfter;
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
                const obj6 = { error: closure_130_8, isLoading: false };
                closure_130_3.setState(obj6);
                if (closure_131_8(closure_130_8)) {
                  if (closure_131_6 > backoff.fails) {
                    c6 = 4;
                    c7 = 1;
                    const obj7 = {
                      value: backoff.failAsync(
                        (function getRetryAfterMs(retryAfter) {
                          retryAfter = retryAfter.retryAfter;
                          let tmp;
                          if (typeof retryAfter === "number") {
                            const _Number = Number;
                            if (Number.isFinite(retryAfter)) {
                              if (retryAfter > 0) {
                                tmp = retryAfter;
                              }
                            }
                          }
                          let num2 = 0;
                          if (null != tmp) {
                            num2 = 1000 * tmp;
                          }
                          return num2;
                        })(closure_130_8),
                      ),
                      done: false,
                    };
                    return obj7;
                  }
                }
                if (null != closure_131_10) {
                  const obj8 = { failureLockedUntil: null };
                  const _Date3 = Date;
                  obj8.failureLockedUntil = Date.now() + 1000 * closure_131_10;
                  closure_130_3.setState(obj8);
                }
              } else if (3 === tmp7) {
                if (arg0 === 1) {
                  c7 = 3;
                  throw value;
                } else if (arg0 !== 2) {
                  backoff.succeed();
                  const obj9 = { error: null, isLoading: false, lastSuccessAt: null, failureLockedUntil: null };
                  let _Date = Date;
                  obj9.lastSuccessAt = Date.now();
                  closure_130_3.setState(obj9);
                  c5 = 0;
                }
              } else if (4 === tmp7) {
                if (arg0 === 1) {
                  c7 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c7 = 3;
                  const obj10 = { value, done: true };
                  return obj10;
                } else {
                  const obj11 = {
                    queryId: closure_130_0,
                    args: closure_130_1,
                    useStoreState: closure_130_3,
                    refetch: closure_130_2,
                  };
                  c6 = 5;
                  c7 = 1;
                  const obj12 = { value: closure_131_13(obj11), done: false };
                  return obj12;
                }
              } else if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 3;
                const obj = { value, done: true };
                return obj;
              }
              c5 = 0;
              c7 = 3;
              const obj13 = { value, done: true };
              return obj13;
            }
            c7 = 3;
          }
        } catch (tmp80) {
          closure_4 = tmp80;
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp80;
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
    let queryId;
    c2 = undefined;
    const tmp = closure_1_10(HermesBuiltin.copyRestArgs());
    ApplicationStore = tmp;
    let tmp3 = ApplicationStore;
    if (!Array.isArray(ApplicationStore)) {
      let items = [tmp2];
      tmp3 = items;
    }
    const tmp4 = queryId(...tmp);
    queryId = tmp4;
    if (null == tmp4) {
      value = closure_14;
    } else {
      value = map.get(tmp4);
      if (null == value) {
        const obj6 = ApplicationStore(570).create(() => ({
          isLoading: false,
          error: null,
          backoff: closure_1_7(),
          lastSuccessAt: null,
          failureLockedUntil: null,
        }));
        const result = map.set(tmp4, obj6);
        value = obj6;
        const obj2 = ApplicationStore(570);
      }
    }
    c2 = value;
    const items1 = [tmp];
    let stateFromStores = ApplicationStore(573).useStateFromStores(
      tmp3,
      () => {
        let applyResult;
        if (_slicedToArray != null) {
          const items = [];
          HermesBuiltin.arraySpread(closure_0, 0);
          applyResult = HermesBuiltin.apply(items, undefined);
        }
        return applyResult;
      },
      items1,
    );
    const obj3 = ApplicationStore(573);
    tmp2 = ApplicationStore;
    const valueResult = value((isLoading) => {
      isLoading = null == closure_1_4;
      if (isLoading) {
        isLoading = isLoading.isLoading;
      }
      return isLoading;
    });
    const items2 = [tmp];
    let stateFromStores1 = ApplicationStore(573).useStateFromStores(
      tmp3,
      () => {
        let applyResult;
        if (closure_2_5 != null) {
          const items = [];
          HermesBuiltin.arraySpread(closure_0, 0);
          applyResult = HermesBuiltin.apply(items, undefined);
        }
        return applyResult;
      },
      items2,
    );
    const obj4 = ApplicationStore(573);
    const valueResult1 = value((error) => {
      error = null;
      if (null == closure_1_5) {
        error = error.error;
      }
      return error;
    });
    const items3 = [tmp];
    const stateFromStores2 = ApplicationStore(573).useStateFromStores(
      tmp3,
      () => dependencyMap(...closure_0),
      items3,
      map,
    );
    const items4 = [tmp4, tmp, value];
    num(() => {
      loader({ queryId, args, useStoreState });
    }, items4);
    const items5 = [tmp4, tmp, value];
    let tmp17 = null;
    const obj5 = ApplicationStore(573);
    if (stateFromStores2 !== retryableErrors) {
      tmp17 = stateFromStores2;
    }
    const obj8 = { data: tmp17, error: null, isLoading: null, refetch: null };
    if (stateFromStores1 == null) {
      stateFromStores1 = valueResult1;
    }
    obj8.error = stateFromStores1;
    if (stateFromStores == null) {
      stateFromStores = valueResult;
    }
    obj8.isLoading = stateFromStores;
    obj8.refetch = closure_1_5(() => {
      loader({ queryId, args, useStoreState, refetch: true });
    }, items5);
    return obj8;
  }
  const map = new Map();
  useCfsHook.refetch = asyncGeneratorStep(async () => {
    closure_0 = [...arguments];
    c3 = 0;
    c4 = 0;
    const iter = (async (arg0) => {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "IconComponent" };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_2 = tmp5;
              closure_1 = tmp2;
              closure_129_0 = closure_0;
              closure_129_1 = undefined;
              closure_129_2 = undefined;
              c3 = 1;
              c4 = 1;
              return { value: "Reflect", done: null };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              const items = [];
              HermesBuiltin.arraySpread(closure_129_0, 0);
              closure_129_1 = HermesBuiltin.apply(items, undefined);
              closure_129_2 = closure_130_12(closure_129_1);
              backoff = closure_129_2.getState().backoff;
              backoff.succeed();
              closure_129_2.setState({ failureLockedUntil: null });
              const obj5 = { queryId: closure_129_1, args: closure_129_0, useStoreState: closure_129_2, refetch: true };
              c3 = 2;
              c4 = 1;
              const obj6 = { value: closure_130_13(obj5), done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c4 = 3;
            return { value: "IconComponent", done: "IconComponent" };
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
  useCfsHook.fetchMany = asyncGeneratorStep(async () => {
    closure_0 = [...arguments];
    c2 = 0;
    c3 = 0;
    const iter = (async (arg0) => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "IconComponent" };
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
              let obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp2;
              closure_129_0 = closure_0;
              c2 = 1;
              c3 = 1;
              return { value: "Reflect", done: null };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              let obj4 = { value, done: true };
              return obj4;
            } else {
              c2 = 2;
              c3 = 1;
              const obj5 = {
                value: Promise.all(
                  closure_129_0.map((args) => {
                    const tmp = closure_1_1(...args);
                    const obj = { queryId: tmp, args, useStoreState: null };
                    if (null == tmp) {
                      value = closure_2_14;
                    } else {
                      value = closure_1_11.get(tmp);
                      if (null == value) {
                        const obj4 = closure_0(dependencyMap[6]).create(() => ({
                          isLoading: false,
                          error: null,
                          backoff: closure_1_7(),
                          lastSuccessAt: null,
                          failureLockedUntil: null,
                        }));
                        const result = closure_1_11.set(tmp, obj4);
                        value = obj4;
                        const obj3 = closure_0(dependencyMap[6]);
                      }
                    }
                    obj.useStoreState = value;
                    return closure_1_13(obj);
                  }),
                ),
                done: false,
              };
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            let obj = { value, done: true };
            return obj;
          } else {
            c3 = 3;
            return { value: "IconComponent", done: "IconComponent" };
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
  useCfsHook.refetchMany = asyncGeneratorStep(async () => {
    closure_0 = [...arguments];
    c2 = 0;
    c3 = 0;
    const iter = (async (arg0) => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "IconComponent" };
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
              let obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp2;
              closure_129_0 = closure_0;
              c2 = 1;
              c3 = 1;
              return { value: "Reflect", done: null };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              c2 = 2;
              c3 = 1;
              const obj5 = {
                value: Promise.all(
                  closure_129_0.map((args) => {
                    const tmp = closure_1_1(...args);
                    if (null == tmp) {
                      value = closure_2_14;
                    } else {
                      value = closure_1_11.get(tmp);
                      if (null == value) {
                        const obj2 = closure_0(dependencyMap[6]).create(() => ({
                          isLoading: false,
                          error: null,
                          backoff: closure_1_7(),
                          lastSuccessAt: null,
                          failureLockedUntil: null,
                        }));
                        const result = closure_1_11.set(tmp, obj2);
                        value = obj2;
                        const obj3 = closure_0(dependencyMap[6]);
                      }
                    }
                    backoff = value.getState().backoff;
                    backoff.succeed();
                    value.setState({ failureLockedUntil: null });
                    return closure_1_13({ queryId: tmp, args, useStoreState: value, refetch: true });
                  }),
                ),
                done: false,
              };
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c3 = 3;
            return { value: "IconComponent", done: "IconComponent" };
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
}
