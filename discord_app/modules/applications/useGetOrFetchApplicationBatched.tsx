// discord_app/modules/applications/useGetOrFetchApplicationBatched.tsx
import noop from "../../../_runtime/00019_noop.js";
import addApplication from "ApplicationStore.tsx";
import obj132 from "../../../_runtime/00002_obj132.js";

let obj132 = fn;
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
  const item = _pending.forEach((item, index) => {
    const _lastFetchedAttempted = self._lastFetchedAttempted;
    const result = _lastFetchedAttempted.set(item, Date.now());
    items.push(item);
  });
  _pending = this._pending;
  _pending.clear();
  const items1 = [];
  const items2 = [];
  const item1 = items.forEach((item, index) => {
    if (closure_1_4.didFetchingApplicationFail(item)) {
      items2.push(item);
    } else {
      items1.push(item);
    }
  });
  if (items1.length > 0) {
    const obj = items(items1[3]);
    const item2 = items(items1[3]).chunk(items1, 20).forEach((item, index) => {
      const applications = items(items1[4]).fetchApplications(item, false);
    });
    const chunkResult = items(items1[3]).chunk(items1, 20);
  }
  if (items2.length > 0) {
    const obj2 = items(items1[3]);
    const item3 = items(items1[3]).chunk(items2, 20).forEach((item, index) => {
      const applications = items(items1[4]).fetchApplications(item, true);
    });
    const chunkResult1 = items(items1[3]).chunk(items2, 20);
  }
};
obj132 = Object.create(ApplicationFetchManager.prototype);
obj132._lastFetchedAttempted = new Map();
let map = new Map();
obj132._pending = new Set();
let delayedCall = new require("start").DelayedCall(32, () => obj._flush());
obj132._flushHandler = delayedCall;
let result = obj132.fileFinishedImporting("modules/applications/useGetOrFetchApplicationBatched.tsx");

export const useRequestApplication = function useRequestApplication(arg0) {
  closure_0 = arg0;
  const items = [arg0];
  const effect = React.useEffect(() => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = "" !== closure_0;
    }
    if (tmp2) {
      obj132.request(closure_0);
    }
  }, items);
};
export const useGetOrFetchApplicationBatched = function useGetOrFetchApplicationBatched(applicationId) {
  const items = [applicationId];
  const effect = React.useEffect(() => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = "" !== closure_0;
    }
    if (tmp2) {
      obj132.request(closure_0);
    }
  }, items);
  const items1 = [closure_4];
  const items2 = [applicationId];
  return applicationId(589).useStateFromStores(items1, () => {
    let application = null;
    if (null != closure_0) {
      application = null;
      if ("" !== closure_0) {
        application = closure_1_4.getApplication(closure_0);
      }
    }
    return application;
  }, items2);
};