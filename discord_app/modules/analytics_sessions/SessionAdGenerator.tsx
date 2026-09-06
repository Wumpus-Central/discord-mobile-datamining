// === Module 7721: getOrRefreshAdSession ===

// Module 7721 (getOrRefreshAdSession)
import dispatcherDefault from "dispatcher" /* 573 */;
import setDefault from "set" /* 1090 */;
import _modDef1232 from "module_1232" /* 1232 */;
import v1 from "v1" /* 1256 */;
import result2 from "result" /* 7471 */;

require = arg1;
let closure_3 = 12 * setDefault.Millis.HOUR;
let c4 = null;
const result = require("set").fileFinishedImporting("modules/analytics_sessions/SessionAdGenerator.tsx");

export const getOrRefreshAdSession = function getOrRefreshAdSession(shouldExtendSession) {
  let flag = shouldExtendSession;
  if (shouldExtendSession === undefined) {
    flag = false;
  }
  const timestamp = Date.now();
  if (null != obj) {
    const _Date = Date;
    const timestamp1 = Date.now();
    if (timestamp1 < obj.createdAtTimestamp) {
      obj = _modDef1232;
      obj = { category: "ad", message: null };
      const _HermesInternal = HermesInternal;
      obj[1] = "future facing timestamp Date.now(): " + timestamp1 + ", initialized timestamp: " + tmp11.createdAtTimestamp;
      obj.addBreadcrumb(obj);
      let flag2 = true;
    } else {
      const diff = timestamp1 - tmp11.lastUsedTimestamp;
      flag2 = diff > result2.SESSION_IDLE_TIMEOUT_MILLIS || timestamp1 - tmp11.createdAtTimestamp > closure_3;
    }
    if (!flag2) {
      if (flag) {
        obj.lastUsedTimestamp = timestamp;
      }
      let tmp9 = obj;
    }
    return tmp9;
  }
  obj = { uuid: v1.v4(), createdAtTimestamp: timestamp, lastUsedTimestamp: timestamp, version: result2.CLIENT_SESSION_STORAGE_VERSION };
  const obj4 = v1;
  dispatcherDefault.dispatch({ type: "AD_SESSION_RESET" });
  tmp9 = obj;
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
    let obj = _modDef1232;
    obj = { category: "ad", message: null };
    const _HermesInternal = HermesInternal;
    obj[1] = "future facing timestamp Date.now(): " + timestamp + ", initialized timestamp: " + createdAtTimestamp.createdAtTimestamp;
    obj.addBreadcrumb(obj);
    return true;
  } else {
    const diff = timestamp - createdAtTimestamp.lastUsedTimestamp;
    return diff > result2.SESSION_IDLE_TIMEOUT_MILLIS || timestamp - createdAtTimestamp.createdAtTimestamp > closure_3;
  }
};