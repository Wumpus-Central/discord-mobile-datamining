// === Module 11563: useGetOrFetchApplicationBatched ===

// Module 11563 (useGetOrFetchApplicationBatched)
import Timers from "Timers" /* 4447 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 4788 */;

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
  let _pending = this._pending;
  const item = _pending.forEach((item) => {
    const _lastFetchedAttempted = self._lastFetchedAttempted;
    const result = _lastFetchedAttempted.set(item, Date.now());
    items.push(item);
  });
  _pending = this._pending;
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
let size = Object.create(ApplicationFetchManager.prototype);
let closure_129_0 = size;
size._lastFetchedAttempted = new Map();
let map = new Map();
size._pending = new Set();
let delayedCall = new fn(4447).DelayedCall(32, () => obj._flush());
size._flushHandler = delayedCall;
size = fn(2);
let result = size.fileFinishedImporting("modules/applications/useGetOrFetchApplicationBatched.tsx");

export const useRequestApplication = function useRequestApplication(arg0) {
  closure_0 = arg0;
  const items = [arg0];
  const effect = noop.useEffect(() => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = "" !== closure_0;
    }
    if (tmp2) {
      size.request(closure_0);
    }
  }, items);
};
export const useGetOrFetchApplicationBatched = function useGetOrFetchApplicationBatched(applicationId) {
  _require = applicationId;
  closure_129_0 = applicationId;
  const items = [applicationId];
  const effect = noop.useEffect(() => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = "" !== closure_0;
    }
    if (tmp2) {
      size.request(closure_0);
    }
  }, items);
  const items1 = [ApplicationStore];
  const items2 = [applicationId];
  return require("initialize").useStateFromStores(items1, () => {
    let application = null;
    if (null != closure_0) {
      application = null;
      if ("" !== closure_0) {
        application = ApplicationStore.getApplication(closure_0);
      }
    }
    return application;
  }, items2);
};