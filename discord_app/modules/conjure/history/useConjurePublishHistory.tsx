// === Module 12276: useConjurePublishHistory ===

// Module 12276 (useConjurePublishHistory)
import util from "util" /* 1128 */;
import _modDef2049 from "module_2049" /* 2049 */;
import _modDef3830 from "module_3830" /* 3830 */;
import conjurePublishHistoryRequests from "conjurePublishHistoryRequests" /* 12277 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
fn(558);
const ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjurePublishHistory(arg0) {
  _require = arg0;
  const cResult = require("c").c(19);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const _Map = Map;
    const map = new Map();
    cResult[0] = map;
    let first = map;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [null];
    cResult[1] = items;
    let tmp9 = items;
  } else {
    tmp9 = cResult[1];
  }
  const obj = require("c");
  const tmp = _require;
  [arr2, importDefault] = historyLoad(nextCursor.useState(tmp9), 2);
  if (cResult[2] !== arr2) {
    let atResult = arr2.at(-1);
    if (atResult == null) {
      atResult = null;
    }
    cResult[2] = arr2;
    cResult[3] = atResult;
    let tmp11 = atResult;
  } else {
    tmp11 = cResult[3];
  }
  dependencyMap = tmp11;
  if (cResult[4] === tmp11) {
    if (cResult[5] === arg0) {
      let tmp14 = cResult[6];
    }
    historyLoad = tmp(12272).useHistoryLoad(tmp14);
    nextCursor = null;
    if ("loaded" === historyLoad.state.status) {
      nextCursor = historyLoad.state.data.nextCursor;
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class P {
        constructor() {
          return closure_1((arr) => {
            let substr = arr;
            if (arr.length > 1) {
              substr = arr.slice(0, -1);
            }
            return substr;
          });
        }
      }
      cResult[7] = P;
    } else {
      class P {
        constructor() {
          return closure_1((arr) => {
            let substr = arr;
            if (arr.length > 1) {
              substr = arr.slice(0, -1);
            }
            return substr;
          });
        }
      }
    }
    if (cResult[8] !== nextCursor) {
      class C {
        constructor() {
          if (null != nextCursor) {
            tmp = closure_1;
            tmp2 = closure_1((arg0) => {
              const items = [];
              items[HermesBuiltin.arraySpread(arg0, 0)] = nextCursor;
              return items;
            });
          }
          return;
        }
      }
      cResult[8] = nextCursor;
      cResult[9] = C;
    } else {
      class C {
        constructor() {
          if (null != nextCursor) {
            tmp = closure_1;
            tmp2 = closure_1((arg0) => {
              const items = [];
              items[HermesBuiltin.arraySpread(arg0, 0)] = nextCursor;
              return items;
            });
          }
          return;
        }
      }
    }
    if (cResult[10] !== historyLoad) {
      class C {
        constructor() {
          if (null != nextCursor) {
            tmp = closure_1;
            tmp2 = closure_1((arg0) => {
              const items = [];
              items[HermesBuiltin.arraySpread(arg0, 0)] = nextCursor;
              return items;
            });
          }
          return;
        }
      }
      cResult[10] = historyLoad;
      cResult[11] = tmp23;
    } else {
      class C {
        constructor() {
          if (null != nextCursor) {
            tmp = closure_1;
            tmp2 = closure_1((arg0) => {
              const items = [];
              items[HermesBuiltin.arraySpread(arg0, 0)] = nextCursor;
              return items;
            });
          }
          return;
        }
      }
    }
    if (cResult[12] === arr2.length) {
      class C {
        constructor() {
          if (null != nextCursor) {
            tmp = closure_1;
            tmp2 = closure_1((arg0) => {
              const items = [];
              items[HermesBuiltin.arraySpread(arg0, 0)] = nextCursor;
              return items;
            });
          }
          return;
        }
      }
    }
    const obj2 = { state: historyLoad.state, notesCache: first, page: arr2.length, hasPrevious: arr2.length > 1, hasNext: null != nextCursor, previous: P, next: C, retry: tmp23 };
    cResult[12] = arr2.length;
    cResult[13] = historyLoad.state;
    cResult[14] = arr2.length > 1;
    cResult[15] = null != nextCursor;
    cResult[16] = C;
    cResult[17] = tmp23;
    cResult[18] = obj2;
    const tmpResult = tmp(12272);
  }
  const fn = function p() {
    return conjurePublishHistoryRequests.fetchPublishHistory(closure_0, closure_2);
  };
  cResult[4] = tmp11;
  cResult[5] = arg0;
  cResult[6] = fn;
  tmp14 = fn;
  const tmp10 = historyLoad(nextCursor.useState(tmp9), 2);
}) : (function useConjurePublishHistory(arg0) {
  _require = arg0;
  const memo = nextCursor.useMemo(() => new Map(), []);
  [arr, importDefault] = historyLoad(nextCursor.useState([null]), 2);
  let atResult = arr.at(-1);
  if (atResult == null) {
    atResult = null;
  }
  dependencyMap = atResult;
  let items = [arg0, atResult];
  const callback = nextCursor.useCallback(() => conjurePublishHistoryRequests.fetchPublishHistory(closure_0, atResult), items);
  const tmp2 = historyLoad(nextCursor.useState([null]), 2);
  historyLoad = require("useConjureHistoryData").useHistoryLoad(callback);
  nextCursor = null;
  if ("loaded" === historyLoad.state.status) {
    nextCursor = historyLoad.state.data.nextCursor;
  }
  return {
    state: historyLoad.state,
    notesCache: memo,
    page: arr.length,
    hasPrevious: arr.length > 1,
    hasNext: null != nextCursor,
    previous() {
      return importDefault((arr) => {
        let substr = arr;
        if (arr.length > 1) {
          substr = arr.slice(0, -1);
        }
        return substr;
      });
    },
    next() {
      if (null != nextCursor) {
        importDefault((arg0) => {
          const items = [];
          items[HermesBuiltin.arraySpread(arg0, 0)] = nextCursor;
          return items;
        });
      }
    },
    retry() {
      importDefault([null]);
      historyLoad.retry();
    }
  };
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/history/useConjurePublishHistory.tsx");

export const publishHistoryTitle = function publishHistoryTitle(publishedAt) {
  const intl = util.intl;
  const obj = { date: _modDef2049(publishedAt).format("LLL") };
  return intl.formatToPlainString(_modDef3830["/spQzC"], obj);
};
export const useConjurePublishHistory = tmp2;
export const useConjurePublishHistoryNotes = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjurePublishHistoryNotes(arg0, arg1, get) {
  _require = arg0;
  closure_1 = arg1;
  dependencyMap = get;
  const cResult = require("c").c(11);
  const combined = "" + arg0 + "/" + arg1;
  if (cResult[0] === get) {
    if (cResult[1] === combined) {
      if (cResult[2] === arg1) {
        if (cResult[3] === arg0) {
          let tmp5 = cResult[4];
        }
        const historyLoad = require("useConjureHistoryData").useHistoryLoad(tmp5);
        if (cResult[5] === get) {
          if (cResult[6] === combined) {
            let state = cResult[7];
          }
          let status;
          if (state != null) {
            status = state.status;
          }
          if ("loaded" !== status) {
            state = historyLoad.state;
          }
          if (cResult[8] === historyLoad) {
            if (cResult[9] === state) {
              let tmp10 = cResult[10];
            }
            return tmp10;
          }
          const obj2 = {};
          const merged = Object.assign(historyLoad);
          obj2.state = state;
          cResult[8] = historyLoad;
          cResult[9] = state;
          cResult[10] = obj2;
          tmp10 = obj2;
        }
        value = get.get(combined);
        cResult[5] = get;
        cResult[6] = combined;
        cResult[7] = value;
        state = value;
        const tmpResult = require("useConjureHistoryData");
      }
    }
  }
  const fn = function u() {
    value = get.get(combined);
    let status;
    if (value != null) {
      status = value.status;
    }
    if ("loaded" === status) {
      return Promise.resolve(value.data);
    } else {
      let status1;
      if (value != null) {
        status1 = value.status;
      }
      if ("loading" === status1) {
        return value.promise;
      } else {
        const publishHistoryNotes = conjurePublishHistoryRequests.fetchPublishHistoryNotes(closure_0, closure_1);
        const nextPromise = publishHistoryNotes.then((data) => {
          const result = map.set(combined, { status: "loaded", data, nowMs: Date.now() });
          return data;
        }, (arg0) => {
          map.delete(combined);
          throw arg0;
        });
        const obj3 = { status: "loading", promise: nextPromise };
        let result = get.set(combined, obj3);
        return nextPromise;
      }
    }
  };
  cResult[0] = get;
  cResult[1] = combined;
  cResult[2] = arg1;
  cResult[3] = arg0;
  cResult[4] = fn;
  tmp5 = fn;
}) : (function useConjurePublishHistoryNotes(arg0, arg1, get) {
  _require = arg0;
  closure_1 = arg1;
  dependencyMap = get;
  const combined = "" + arg0 + "/" + arg1;
  const items = [arg0, arg1, get, combined];
  const callback = noop.useCallback(() => {
    value = get.get(combined);
    let status;
    if (value != null) {
      status = value.status;
    }
    if ("loaded" === status) {
      return Promise.resolve(value.data);
    } else {
      let status1;
      if (value != null) {
        status1 = value.status;
      }
      if ("loading" === status1) {
        return value.promise;
      } else {
        const publishHistoryNotes = conjurePublishHistoryRequests.fetchPublishHistoryNotes(closure_0, closure_1);
        const nextPromise = publishHistoryNotes.then((data) => {
          const result = map.set(combined, { status: "loaded", data, nowMs: Date.now() });
          return data;
        }, (arg0) => {
          map.delete(combined);
          throw arg0;
        });
        const obj3 = { status: "loading", promise: nextPromise };
        let result = get.set(combined, obj3);
        return nextPromise;
      }
    }
  }, items);
  const historyLoad = require("useConjureHistoryData").useHistoryLoad(callback);
  let state = get.get(combined);
  const obj2 = {};
  const merged = Object.assign(historyLoad);
  let status;
  if (state != null) {
    status = state.status;
  }
  if ("loaded" !== status) {
    state = historyLoad.state;
  }
  obj2.state = state;
  return obj2;
});