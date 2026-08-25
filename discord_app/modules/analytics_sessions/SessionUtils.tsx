// === Module 7078: result ===

// Module 7078 (result)
import setDefault from "set" /* 687 */;

const result = 30 * setDefault.Millis.MINUTE;
let c0 = result;
const result1 = require("set").fileFinishedImporting("modules/analytics_sessions/SessionUtils.tsx");

export const SESSION_IDLE_TIMEOUT_MILLIS = result;
export const CLIENT_SESSION_STORAGE_VERSION = 1;
export const isSessionExpired = function isSessionExpired(lastUsedTimestamp) {
  const sum = closure_0 + lastUsedTimestamp.lastUsedTimestamp;
  return sum - Date.now() <= 0;
};
export const timestampOrZero = function timestampOrZero(arg0) {
  let num = 0;
  if (null != arg0) {
    const _Number = Number;
    num = Number(arg0);
  }
  return num;
};