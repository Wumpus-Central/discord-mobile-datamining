// discord_app/modules/analytics_sessions/SessionAdGenerator.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import SentryUtilsDefault from "../../utils/SentryUtils.native.tsx";
import v1 from "../../../_runtime/01256_v1.js";
import SessionUtils from "SessionUtils.tsx";

require = fn;
let closure_3 = 12 * DurationsDefault.Millis.HOUR;
let c4 = null;
const size = fn(2);
const result = size.fileFinishedImporting("modules/analytics_sessions/SessionAdGenerator.tsx");

export const getOrRefreshAdSession = function getOrRefreshAdSession(shouldExtendSession) {
  let flag = shouldExtendSession;
  if (shouldExtendSession === undefined) {
    flag = false;
  }
  const timestamp = Date.now();
  if (null != _null) {
    const _Date = Date;
    const timestamp1 = Date.now();
    if (timestamp1 < _null.createdAtTimestamp) {
      let obj = { category: "ad", message: null };
      const _HermesInternal = HermesInternal;
      obj.message =
        "future facing timestamp Date.now(): " + timestamp1 + ", initialized timestamp: " + tmp11.createdAtTimestamp;
      obj.addBreadcrumb(obj);
      let flag2 = true;
    } else {
      const diff = timestamp1 - tmp11.lastUsedTimestamp;
      flag2 = diff > SessionUtils.SESSION_IDLE_TIMEOUT_MILLIS || timestamp1 - tmp11.createdAtTimestamp > closure_3;
    }
    if (!flag2) {
      if (flag) {
        _null.lastUsedTimestamp = timestamp;
      }
      let tmp9 = _null;
    }
    return tmp9;
  }
  obj = {
    uuid: v1.v4(),
    createdAtTimestamp: timestamp,
    lastUsedTimestamp: timestamp,
    version: SessionUtils.CLIENT_SESSION_STORAGE_VERSION,
  };
  _null = obj;
  DispatcherDefault.dispatch({ type: "AD_SESSION_RESET" });
  tmp9 = _null;
};
export function clearAdSession() {
  c4 = null;
}
export function getCurrentAdSession() {
  return c4;
}
export const isAdSessionExpired = function isAdSessionExpired(createdAtTimestamp) {
  const timestamp = Date.now();
  if (timestamp < createdAtTimestamp.createdAtTimestamp) {
    const obj = { category: "ad", message: null };
    const _HermesInternal = HermesInternal;
    obj.message =
      "future facing timestamp Date.now(): " +
      timestamp +
      ", initialized timestamp: " +
      createdAtTimestamp.createdAtTimestamp;
    obj.addBreadcrumb(obj);
    return true;
  } else {
    const diff = timestamp - createdAtTimestamp.lastUsedTimestamp;
    return (
      diff > SessionUtils.SESSION_IDLE_TIMEOUT_MILLIS || timestamp - createdAtTimestamp.createdAtTimestamp > closure_3
    );
  }
};
