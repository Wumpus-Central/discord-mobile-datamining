// === Module 11125: request ===

// Module 11125 (request)
import closure_3 from "noop" /* 19 */;
import closure_4 from "addApplication" /* 4489 */;
import set from "set" /* 2 */;

let set = arg1;
class ApplicationFetchManager {
  constructor() {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    map = new Map();
    obj._lastFetchedAttempted = map;
    set = new Set();
    obj._pending = set;
    delayedCall = new require("start").DelayedCall(32, () => obj._flush());
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
    const value = _lastFetchedAttempted.get(arg0);
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
  const item = _pending.forEach((arg0) => {
    const _lastFetchedAttempted = self._lastFetchedAttempted;
    const result = _lastFetchedAttempted.set(arg0, Date.now());
    items.push(arg0);
  });
  _pending = this._pending;
  _pending.clear();
  const items1 = [];
  const items2 = [];
  const item1 = items.forEach((applicationId) => {
    if (closure_1_4.didFetchingApplicationFail(applicationId)) {
      items2.push(applicationId);
    } else {
      items1.push(applicationId);
    }
  });
  if (items1.length > 0) {
    const obj = items(items1[3]);
    const item2 = items(items1[3]).chunk(items1, 20).forEach((arg0) => {
      const applications = items(items1[4]).fetchApplications(arg0, false);
    });
    const chunkResult = items(items1[3]).chunk(items1, 20);
  }
  if (items2.length > 0) {
    const obj2 = items(items1[3]);
    const item3 = items(items1[3]).chunk(items2, 20).forEach((arg0) => {
      const applications = items(items1[4]).fetchApplications(arg0, true);
    });
    const chunkResult1 = items(items1[3]).chunk(items2, 20);
  }
};
set = Object.create(ApplicationFetchManager.prototype);
set._lastFetchedAttempted = new Map();
set = new Set();
set._pending = set;
let delayedCall = new require("start").DelayedCall(32, () => obj._flush());
set._flushHandler = delayedCall;
let result = set.fileFinishedImporting("modules/applications/useGetOrFetchApplicationBatched.tsx");

export const useRequestApplication = function useRequestApplication(arg0) {
  closure_0 = arg0;
  const items = [arg0];
  const effect = React.useEffect(() => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = "" !== tmp;
    }
    if (tmp2) {
      closure_1_5.request(tmp);
    }
  }, items);
};
export const useGetOrFetchApplicationBatched = function useGetOrFetchApplicationBatched(applicationId) {
  const items = [applicationId];
  const effect = React.useEffect(() => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = "" !== tmp;
    }
    if (tmp2) {
      closure_1_5.request(tmp);
    }
  }, items);
  const items1 = [closure_4];
  const items2 = [applicationId];
  return applicationId(589).useStateFromStores(items1, () => {
    let application = null;
    if (null != closure_0) {
      application = null;
      if ("" !== tmp) {
        application = closure_1_4.getApplication(tmp);
      }
    }
    return application;
  }, items2);
};