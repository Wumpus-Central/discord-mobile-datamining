// === Module 12501: useConjurePublishHistory ===

// Module 12501 (useConjurePublishHistory)
import util from "util" /* 1114 */;
import _modDef2044 from "module_2044" /* 2044 */;
import _modDef3865 from "module_3865" /* 3865 */;
import conjurePublishHistoryRequests from "conjurePublishHistoryRequests" /* 12502 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/history/useConjurePublishHistory.tsx");

export function publishHistoryTitle(publishedAt) {
  const intl = util.intl;
  const obj = { date: _modDef2044(publishedAt).format("LLL") };
  return intl.formatToPlainString(_modDef3865["/spQzC"], obj);
}
export function useConjurePublishHistory(projectId) {
  _require = projectId;
  const memo = nextCursor.useMemo(() => new Map(), []);
  [arr, importDefault] = historyLoad(nextCursor.useState([null]), 2);
  let atResult = arr.at(-1);
  if (atResult == null) {
    atResult = null;
  }
  dependencyMap = atResult;
  let items = [projectId, atResult];
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
}
export function useConjurePublishHistoryNotes(projectId, id, notesCache) {
  _require = projectId;
  closure_1 = id;
  dependencyMap = notesCache;
  const combined = "" + projectId + "/" + id;
  const items = [projectId, id, notesCache, combined];
  const callback = noop.useCallback(() => {
    value = notesCache.get(combined);
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
        let result = notesCache.set(combined, obj3);
        return nextPromise;
      }
    }
  }, items);
  const historyLoad = require("useConjureHistoryData").useHistoryLoad(callback);
  let state = notesCache.get(combined);
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
}