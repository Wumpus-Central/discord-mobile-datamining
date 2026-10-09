// === Module 10678: useGetOrFetchApplicationBatched ===

// Module 10678 (useGetOrFetchApplicationBatched)
import Timers from "Timers" /* 2059 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5437 */;

const require = globalThis.__r;

require = fn;
class ApplicationFetchManager {
  constructor() {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    map = new Map();
    obj._lastFetchedAttempted = map;
    set = new Set();
    obj._pending = set;
    delayedCall = new closure_0(closure_2[2]).DelayedCall(32, () => obj._flush());
    obj._flushHandler = delayedCall;
    return obj;
  }
}
const prototype = ApplicationFetchManager.prototype;
prototype["request"] = function request(arg0) {
  const self = this;
  const _pending = this._pending;
  if (!_pending.has(arg0)) {
    const _lastFetchedAttempted = self._lastFetchedAttempted;
    value = _lastFetchedAttempted.get(arg0);
    let tmp3 = null != value;
    if (tmp3) {
      const _Date = Date;
      tmp3 = Date.now() - value < 60000;
    }
    if (!tmp3) {
      const _pending2 = self._pending;
      _pending2.add(arg0);
      self._flushHandler.delay(false);
      const _flushHandler = self._flushHandler;
    }
  }
};
prototype["_flush"] = function _flush() {
  const self = this;
  const items = [];
  const _pending1 = this._pending;
  const item = _pending1.forEach((item) => {
    const _lastFetchedAttempted = self._lastFetchedAttempted;
    const result = _lastFetchedAttempted.set(item, Date.now());
    items.push(item);
  });
  const _pending = this._pending;
  _pending.clear();
  const items1 = [];
  const items2 = [];
  const item1 = items.forEach((item) => {
    if (ApplicationStore.didFetchingApplicationFail(item)) {
      items2.push(item);
    } else {
      items1.push(item);
    }
  });
  if (items1.length > 0) {
    const obj = items(items1[3]);
    const item2 = items(items1[3]).chunk(items1, 20).forEach((item) => {
      const applications = items(items1[4]).fetchApplications(item, false);
    });
    const chunkResult = items(items1[3]).chunk(items1, 20);
  }
  if (items2.length > 0) {
    const obj2 = items(items1[3]);
    const item3 = items(items1[3]).chunk(items2, 20).forEach((item) => {
      const applications = items(items1[4]).fetchApplications(item, true);
    });
    const chunkResult1 = items(items1[3]).chunk(items2, 20);
  }
};
const obj4 = Object.create(ApplicationFetchManager.prototype);
let closure_129_0 = obj4;
obj4._lastFetchedAttempted = new Map();
let map = new Map();
obj4._pending = new Set();
let delayedCall = new fn(2059).DelayedCall(32, () => obj._flush());
obj4._flushHandler = delayedCall;
let ReactCompilerGating = fn(558);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useRequestApplication(arg0) {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] !== arg0) {
    const fn = function c() {
      let tmp2 = null != closure_0;
      if (tmp2) {
        tmp2 = "" !== closure_0;
      }
      if (tmp2) {
        obj4.request(closure_0);
      }
    };
    const items = [arg0];
    cResult[0] = arg0;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp3 = items;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const effect = noop.useEffect(tmp2, tmp3);
}) : (function useRequestApplication(arg0) {
  closure_0 = arg0;
  const items = [arg0];
  const effect = noop.useEffect(() => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = "" !== closure_0;
    }
    if (tmp2) {
      obj4.request(closure_0);
    }
  }, items);
});
let closure_6 = tmp6;
ReactCompilerGating = fn(558);
const set = new Set();
const size = fn(2);
let result = size.fileFinishedImporting("modules/applications/useGetOrFetchApplicationBatched.tsx");

export const useRequestApplication = tmp6;
export const useGetOrFetchApplicationBatched = ReactCompilerGating.isReactCompilerEnabled() ? (function useGetOrFetchApplicationBatched(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  closure_6(arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ApplicationStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      let application = null;
      if (null != closure_0) {
        application = null;
        if ("" !== closure_0) {
          application = ApplicationStore.getApplication(closure_0);
        }
      }
      return application;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp7, tmp8);
}) : (function useGetOrFetchApplicationBatched(arg0) {
  _require = arg0;
  closure_6(arg0);
  const items = [ApplicationStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    let application = null;
    if (null != closure_0) {
      application = null;
      if ("" !== closure_0) {
        application = ApplicationStore.getApplication(closure_0);
      }
    }
    return application;
  }, items1);
});