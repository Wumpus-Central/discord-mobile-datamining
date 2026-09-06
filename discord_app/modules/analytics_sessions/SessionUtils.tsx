// === Module 7471: SessionUtils ===

// Module 7471 (SessionUtils)
import DurationsDefault from "Durations" /* 1090 */;

const result = 30 * DurationsDefault.Millis.MINUTE;
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/analytics_sessions/SessionUtils.tsx");

export const SESSION_IDLE_TIMEOUT_MILLIS = result;
export const CLIENT_SESSION_STORAGE_VERSION = 1;
export const isSessionExpired = function isSessionExpired(lastUsedTimestamp) {
  const sum = result + lastUsedTimestamp.lastUsedTimestamp;
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