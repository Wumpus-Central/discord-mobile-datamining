// === Module 6009: getOrRefreshAdSession ===

// Module 6009 (getOrRefreshAdSession)
const require = arg1;
let closure_3 = 12 * require("set").Millis.HOUR;
let c4 = null;
const result = require("result").fileFinishedImporting("modules/analytics_sessions/SessionAdGenerator.tsx");

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
      obj = importDefault(1208);
      obj = { category: "ad", message: null };
      const _HermesInternal = HermesInternal;
      obj[1] = "future facing timestamp Date.now(): " + timestamp1 + ", initialized timestamp: " + tmp11.createdAtTimestamp;
      obj.addBreadcrumb(obj);
      let flag2 = true;
    } else {
      const diff = timestamp1 - tmp11.lastUsedTimestamp;
      flag2 = diff > require(5734) /* result */.SESSION_IDLE_TIMEOUT_MILLIS || timestamp1 - tmp11.createdAtTimestamp > closure_3;
    }
    if (!flag2) {
      if (flag) {
        obj.lastUsedTimestamp = timestamp;
      }
      let tmp9 = obj;
    }
    return tmp9;
  }
  obj = { uuid: null, createdAtTimestamp: null, lastUsedTimestamp: null, version: null };
  obj[0] = require(514) /* v1 */.v4();
  obj[1] = timestamp;
  obj[2] = timestamp;
  obj[3] = require(5734) /* result */.CLIENT_SESSION_STORAGE_VERSION;
  const obj4 = require(514) /* v1 */;
  importDefault(709).dispatch({ type: "AD_SESSION_RESET" });
  tmp9 = obj;
};
export function clearAdSession() {
  let c4 = null;
}
export function getCurrentAdSession() {
  return c4;
}
export const isAdSessionExpired = function isAdSessionExpired(createdAtTimestamp) {
  const timestamp = Date.now();
  if (timestamp < createdAtTimestamp.createdAtTimestamp) {
    let obj = importDefault(1208);
    obj = { category: "ad", message: null };
    const _HermesInternal = HermesInternal;
    obj[1] = "future facing timestamp Date.now(): " + timestamp + ", initialized timestamp: " + createdAtTimestamp.createdAtTimestamp;
    obj.addBreadcrumb(obj);
    return true;
  } else {
    const diff = timestamp - createdAtTimestamp.lastUsedTimestamp;
    return diff > require(5734) /* result */.SESSION_IDLE_TIMEOUT_MILLIS || timestamp - createdAtTimestamp.createdAtTimestamp > closure_3;
  }
};