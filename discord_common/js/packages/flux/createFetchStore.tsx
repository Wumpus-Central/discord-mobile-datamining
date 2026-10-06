// discord_common/js/packages/flux/createFetchStore.tsx
import shallowEqual from "../shallow-equal/shallowEqual.tsx";
import BackoffDefault from "../backoff/Backoff.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../discord_app/modules/react_compiler/ReactCompilerGating.tsx";
import 00570__ from "../../../../_runtime/metro/00570__.js";
import size from "../../../../_runtime/metro/00002__.js";

let error, isLoading, map;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
function areStatesEqual(colors, current) {
  if (Array.isArray(colors)) {
    let result;
    const _Array = Array;
    if (Array.isArray(current)) {
      const obj = shallowEqual;
      result = obj.areArraysShallowEqual(colors, current);
    }
    return result;
  }
  result = Object.is(colors, current);
}
function defaultRetryableErrors(status) {
  let tmp = status instanceof HTTPResponseError;
  if (tmp) {
    tmp = status.status >= 500 || 429 === status.status;
    const tmp2 = status.status >= 500 || 429 === status.status;
  }
  return tmp;
}
function defaultBackoff() {
  const tmp = new BackoffDefault();
  return tmp;
}
({ useCallback: hasOwnProperty, useEffect: metroRequire, useState: metroImportDefault } = react);
const SymbolResult = Symbol("NO_DATA");
const metroImportAll = SymbolResult;
class HTTPResponseError extends Error {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.name = "HTTPResponseError";
    applyArgumentsResult.status = 0;
    return applyArgumentsResult;
  }
  setStatus(status) {
    this.status = status;
  }
  setRetryAfter(retryAfter) {
    this.retryAfter = retryAfter;
  }
}
const prototype = HTTPResponseError.prototype;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((colors) => {
  let first;
  let tmp3;
  [first, tmp3] = metroImportDefault(colors);
  let result = colors === first;
  if (!result) {
    const obj = shallowEqual;
    result = obj.areArraysShallowEqual(colors, first);
  }
  if (!result) {
    tmp3(colors);
  }
  return first;
}) : ((colors) => {
  let first;
  let tmp3;
  [first, tmp3] = metroImportDefault(colors);
  let result = colors === first;
  if (!result) {
    const obj = shallowEqual;
    result = obj.areArraysShallowEqual(colors, first);
  }
  if (!result) {
    tmp3(colors);
  }
  return first;
});
let closure_14 = module_570.create(() => {
  const obj = { isLoading: false, error: null, backoff: new BackoffDefault(), lastSuccessAt: null, failureLockedUntil: null };
  new BackoffDefault();
  return obj;
});
let result = size.fileFinishedImporting("../discord_common/js/packages/flux/createFetchStore.tsx");

export const NO_DATA = SymbolResult;
export const createFetchStore = function createFetchStore(ApplicationStore, arg1) {
  let closure_5;
  let getUseStoreState;
  let loader;
  let retryConfig;
  const f134252 = () => {
    obj = { isLoading: false, error: null, backoff: closure_1_7(), lastSuccessAt: null, failureLockedUntil: null };
    return obj;
  };
  ({ getQueryId: importDefault, get: dependencyMap, load: _asyncToGenerator, getIsLoading: _slicedToArray, getError: closure_5, retryConfig } = arg1);
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
      let value = map.get(queryId);
      if (null == value) {
        const obj2 = module_570;
        const obj3 = obj2.create(f134252);
        const result = map.set(queryId, obj3);
        value = obj3;
      }
      return value;
    }
  };
  loader = function loader() {
    return obj(...arguments);
  };
  let obj = function _loader() {
    obj = _asyncToGenerator(async (arg0) => {
      let closure_2;
      let closure_3;
      let closure_4;
      let queryId = arg0;
      let c6 = 0;
      let c7 = 0;
      let c5 = 0;
      const iter = (async function(arg0) {
        let args;
        let c1;
        let fail;
        let refetch;
        let useStoreState;
        function isCachedDataStale(useStoreState, arg1) {
          if (null == arg1) {
            return false;
          } else {
            const lastSuccessAt = useStoreState.getState().lastSuccessAt;
            let tmp2 = null == lastSuccessAt;
            if (!tmp2) {
              const _Date = Date;
              tmp2 = Date.now() - lastSuccessAt > 1000 * arg1;
            }
            return tmp2;
          }
        }
        function makeError(status) {
          if (status instanceof Error) {
            return status;
          } else {
            if (typeof status === "object") {
              if (null != status) {
                if ("status" in status) {
                  if (typeof status.status === "number") {
                    retryAfter = status.retryAfter;
                    let tmp3;
                    if (typeof retryAfter === "number") {
                      const _Number = Number;
                      if (Number.isFinite(retryAfter)) {
                        if (retryAfter > 0) {
                          tmp3 = retryAfter;
                        }
                      }
                    }
                    if ("body" in status) {
                      if (null != status.body) {
                        if (typeof status.body === "object") {
                          if ("message" in status.body) {
                            const _String2 = String;
                            const self4 = this;
                            const obj3 = new closure_1_9(String(status.body.message));
                            obj3.setStatus(status.status);
                            obj3.setRetryAfter(tmp3);
                            return obj3;
                          }
                        }
                      }
                    }
                    const _Object = Object;
                    const entries = Object.entries(status);
                    const mapped = entries.map((item) => {
                      let tmp;
                      let tmp2;
                      [tmp, tmp2] = item;
                      return "" + tmp + ": [" + String(tmp2) + "]";
                    });
                    const self3 = this;
                    const obj2 = new closure_1_9(mapped.join(","));
                    obj2.setStatus(status.status);
                    obj2.setRetryAfter(tmp3);
                    return obj2;
                  }
                }
              }
            }
            const _Error = Error;
            const _String = String;
            const self = this;
            const self2 = this;
            error = new Error(String(status));
            const tmp2 = error;
            return error;
          }
        }
        if (1 === tmp4) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            return { value, done: true };
          } else {
            backoff = useStoreState.getState().backoff;
            let applyResult;
            if (closure_131_4 != null) {
              const items = [];
              HermesBuiltin.arraySpread(items, c1, 0);
              applyResult = HermesBuiltin.apply(closure_131_4, items, undefined);
            }
            isLoading = applyResult;
            if (applyResult == null) {
              isLoading = useStoreState.getState().isLoading;
            }
            let closure_5 = isLoading;
            if (null != queryId) {
              const tmp88 = closure_5;
              if (!tmp88) {
                const tmp40 = refetch;
                if (!tmp40) {
                  const items1 = [];
                  HermesBuiltin.arraySpread(items1, c1, 0);
                  let closure_6 = HermesBuiltin.apply(closure_131_2, items1, undefined);
                  if (closure_6 === closure_1_8) {
                    c7 = 3;
                    return { value: "IconComponent", done: null };
                  } else {
                    if (null != closure_6) {
                      if (!isCachedDataStale(useStoreState, closure_131_9)) {
                        c7 = 3;
                        return { value: "IconComponent", done: null };
                      }
                    }
                    const failureLockedUntil = useStoreState.getState().failureLockedUntil;
                    if (null != failureLockedUntil) {
                      const _Date2 = Date;
                      if (Date.now() < failureLockedUntil) {
                        c7 = 3;
                        return { value: "IconComponent", done: null };
                      }
                    }
                  }
                }
                c5 = 1;
                useStoreState.setState({ isLoading: true });
                const items2 = [];
                HermesBuiltin.arraySpread(items2, c1, 0);
                c6 = 3;
                c7 = 1;
                const obj5 = { value: HermesBuiltin.apply(closure_131_3, items2, undefined), done: false };
                return obj5;
              }
            }
          }
        } else if (2 === tmp4) {
          c5 = 0;
          error = makeError(fail);
          const obj6 = { error, isLoading: false };
          useStoreState.setState(obj6);
          if (closure_131_8(error)) {
            if (closure_131_6 > backoff.fails) {
              let self = this;
              let self2 = this;
              let promise = new Promise((arg0, arg1) => {
                let closure_0 = arg0;
                let closure_1 = arg1;
                retryAfter = retryAfter.retryAfter;
                let tmp2;
                fail = fail.fail;
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
                fail(() => {
                  obj = { queryId, args, useStoreState, refetch };
                  const promise = closure_3_13(obj);
                  promise.then(closure_0, closure_1);
                }, num2);
              });
              c6 = 4;
              c7 = 1;
              return { value: promise, done: false };
            }
          }
          if (null != closure_131_10) {
            const _Date3 = Date;
            const setState2 = useStoreState.setState;
            const obj8 = { failureLockedUntil: Date.now() + 1000 * closure_131_10 };
            setState2(obj8);
          }
        } else if (3 === tmp4) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          } else {
            backoff.succeed();
            let _Date = Date;
            const setState = useStoreState.setState;
            const obj10 = { error: null, isLoading: false, lastSuccessAt: Date.now(), failureLockedUntil: null };
            setState(obj10);
            c5 = 0;
          }
        } else if (arg0 === 1) {
          let num2 = 3;
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          obj = { value, done: true };
          return obj;
        }
        await "IconComponent";
        useStoreState = tmp;
        queryId = queryId.queryId;
        ({ args: c1, refetch } = queryId);
        const tmp91 = queryId;
        if (refetch === undefined) {
          refetch = false;
        }
        useStoreState = tmp91.useStoreState ?? getUseStoreState(queryId);
        return "Reflect";
      })();
      iter.next();
      return iter;
    });
    return obj(...arguments);
  };
  function useCfsHook() {
    let args;
    let useStoreState;
    let value;
    let queryId;
    let c2;
    const tmp = closure_10(HermesBuiltin.copyRestArgs());
    ApplicationStore = tmp;
    let tmp3 = ApplicationStore;
    const tmp2 = ApplicationStore;
    if (!Array.isArray(ApplicationStore)) {
      let items = [tmp2];
      tmp3 = items;
    }
    const tmp4 = queryId(...tmp);
    queryId = tmp4;
    if (null == tmp4) {
      value = map;
    } else {
      value = map.get(tmp4);
      if (null == value) {
        const obj2 = ApplicationStore(dependencyMap[6]);
        const obj6 = obj2.create(f134252);
        const result = map.set(tmp4, obj6);
        value = obj6;
      }
    }
    c2 = value;
    const items1 = [tmp];
    const obj3 = ApplicationStore(dependencyMap[7]);
    let stateFromStores = obj3.useStateFromStores(tmp3, () => {
      let applyResult;
      if (_slicedToArray != null) {
        const items = [];
        HermesBuiltin.arraySpread(items, args, 0);
        applyResult = HermesBuiltin.apply(_slicedToArray, items, undefined);
      }
      return applyResult;
    }, items1);
    const items2 = [tmp];
    const valueResult = value((isLoading) => {
      isLoading = null == closure_1_4 && isLoading.isLoading;
      return isLoading;
    });
    const obj4 = ApplicationStore(dependencyMap[7]);
    let stateFromStores1 = obj4.useStateFromStores(tmp3, () => {
      let applyResult;
      if (closure_5 != null) {
        const items = [];
        HermesBuiltin.arraySpread(items, args, 0);
        applyResult = HermesBuiltin.apply(closure_5, items, undefined);
      }
      return applyResult;
    }, items2);
    const items3 = [tmp];
    const valueResult1 = value((error) => {
      error = null;
      if (null == closure_1_5) {
        error = error.error;
      }
      return error;
    });
    const obj5 = ApplicationStore(dependencyMap[7]);
    const stateFromStores2 = obj5.useStateFromStores(tmp3, () => dependencyMap(...closure_0), items3, map);
    const items4 = [tmp4, tmp, value];
    num(() => {
      obj = { queryId, args, useStoreState };
      loader(obj);
    }, items4);
    const items5 = [tmp4, tmp, value];
    let tmp17 = null;
    const tmp16 = closure_5(() => {
      obj = { queryId, args, useStoreState, refetch: true };
      loader(obj);
    }, items5);
    if (stateFromStores2 !== retryableErrors) {
      tmp17 = stateFromStores2;
    }
    const obj8 = { data: tmp17, error: stateFromStores1, isLoading: stateFromStores, refetch: tmp16 };
    if (stateFromStores1 == null) {
      stateFromStores1 = valueResult1;
    }
    if (stateFromStores == null) {
      stateFromStores = valueResult;
    }
    return obj8;
  }
  map = new Map();
  useCfsHook.refetch = _asyncToGenerator(async () => {
    const args = [...arguments];
    let c3 = 0;
    let c4 = 0;
    const iter = (async () => {
      const items = [];
      HermesBuiltin.arraySpread(items, args, 0);
      queryId = HermesBuiltin.apply(closure_130_1, items, undefined);
      useStoreState = closure_130_12(queryId);
      backoff = useStoreState.getState().backoff;
      backoff.succeed();
      useStoreState.setState({ failureLockedUntil: null });
      const obj5 = { queryId, args, useStoreState, refetch: true };
      await closure_130_13(obj5);
      await "IconComponent";
      useStoreState = tmp5;
      queryId = tmp;
      return "Reflect";
    })();
    iter.next();
    return iter;
  });
  useCfsHook.fetchMany = _asyncToGenerator(async () => {
    let closure_1;
    let closure_0 = [...arguments];
    let c2 = 0;
    let c3 = 0;
    const iter = (async () => {
      await Promise.all(closure_0.map((args) => {
        let value;
        const tmp = closure_1_1(...args);
        obj = { queryId: tmp, args, useStoreState: value };
        if (null == tmp) {
          value = closure_2_14;
        } else {
          value = closure_1_11.get(tmp);
          if (null == value) {
            const obj3 = closure_0(c2[6]);
            const obj4 = obj3.create(f134252);
            const result = closure_1_11.set(tmp, obj4);
            value = obj4;
          }
        }
        return closure_1_13(obj);
      }));
      await "IconComponent";
      return "Reflect";
    })();
    iter.next();
    return iter;
  });
  useCfsHook.refetchMany = _asyncToGenerator(async () => {
    let closure_1;
    let closure_0 = [...arguments];
    let c2 = 0;
    let c3 = 0;
    const iter = (async () => {
      await Promise.all(closure_0.map((args) => {
        let value;
        const tmp = closure_1_1(...args);
        if (null == tmp) {
          value = obj;
        } else {
          value = closure_1_11.get(tmp);
          if (null == value) {
            const obj3 = closure_0(c2[6]);
            const obj2 = obj3.create(f134252);
            const result = closure_1_11.set(tmp, obj2);
            value = obj2;
          }
        }
        backoff = value.getState().backoff;
        backoff.succeed();
        value.setState({ failureLockedUntil: null });
        const obj4 = { queryId: tmp, args, useStoreState: value, refetch: true };
        return closure_1_13(obj4);
      }));
      await "IconComponent";
      return "Reflect";
    })();
    iter.next();
    return iter;
  });
  return useCfsHook;
};