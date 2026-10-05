// discord_app/modules/applications/useGetOrFetchApplicationBatched.tsx
import Timers from "../../../discord_common/js/packages/timers/Timers.tsx";
import react from "../../../_runtime/00019_react.js";
import ApplicationStore from "ApplicationStore.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

class ApplicationFetchManager {
  constructor() {
    obj = Object.create(new.target.prototype);
    obj._lastFetchedAttempted = new Map();
    new Map();
    obj._pending = new Set();
    new Set();
    const delayedCall = new Timers.DelayedCall(32, () => obj._flush());
    obj._flushHandler = delayedCall;
    return obj;
  }
  request(arg0) {
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
        const _flushHandler = self._flushHandler;
        _flushHandler.delay(false);
      }
    }
  }
  _flush() {
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
      obj = items(items1[3]);
      const chunkResult = obj.chunk(items1, 20);
      const item2 = chunkResult.forEach((item) => {
        obj = items(items1[4]);
        const applications = obj.fetchApplications(item, false);
      });
    }
    if (items2.length > 0) {
      const obj2 = items(items1[3]);
      const chunkResult1 = obj2.chunk(items2, 20);
      const item3 = chunkResult1.forEach((item) => {
        obj = items(items1[4]);
        const applications = obj.fetchApplications(item, true);
      });
    }
  }
}
const prototype = ApplicationFetchManager.prototype;
let obj = Object.create(ApplicationFetchManager.prototype);
const map = new Map();
obj._lastFetchedAttempted = map;
const set = new Set();
obj._pending = set;
let delayedCall = new Timers.DelayedCall(32, () => obj._flush());
obj._flushHandler = delayedCall;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let tmp2;
      let tmp3;
      _require = arg0;
      obj = require("react");
      const cResult = obj.c(3);
      if (cResult[0] !== arg0) {
        const fn = function s() {
          const tmp2 = null != closure_0 && "" !== closure_0;
          if (tmp2) {
            obj.request(closure_0);
          }
        };
        const items = [arg0];
        cResult[0] = arg0;
        cResult[1] = fn;
        cResult[2] = items;
        tmp3 = items;
        tmp2 = fn;
      } else {
        tmp2 = cResult[1];
        tmp3 = cResult[2];
      }
      const effect = react.useEffect(tmp2, tmp3);
    }
  : (arg0) => {
      let closure_0 = arg0;
      const items = [arg0];
      const effect = react.useEffect(() => {
        const tmp2 = null != closure_0 && "" !== closure_0;
        if (tmp2) {
          obj.request(closure_0);
        }
      }, items);
    };
let closure_6 = tmp6;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp7;
      let tmp8;
      _require = arg0;
      obj = require("react");
      const cResult = obj.c(4);
      closure_6(arg0);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ApplicationStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function c() {
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
        tmp8 = items1;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp7, tmp8);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      closure_6(arg0);
      const items = [ApplicationStore];
      const items1 = [arg0];
      obj = require("get initialized");
      return obj.useStateFromStores(
        items,
        () => {
          let application = null;
          if (null != closure_0) {
            application = null;
            if ("" !== closure_0) {
              application = ApplicationStore.getApplication(closure_0);
            }
          }
          return application;
        },
        items1,
      );
    };
let result = size.fileFinishedImporting("modules/applications/useGetOrFetchApplicationBatched.tsx");

export const useRequestApplication = tmp6;
export const useGetOrFetchApplicationBatched = tmp7;
