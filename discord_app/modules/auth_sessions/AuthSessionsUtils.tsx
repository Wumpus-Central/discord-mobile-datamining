// === Module 14092: useAuthSessions ===

// Module 14092 (useAuthSessions)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import tDefault from "t" /* 3975 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "fetchFingerprint" /* 1218 */;
import closure_5 from "handleInit" /* 14093 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/auth_sessions/AuthSessionsUtils.tsx");

export const useAuthSessions = function useAuthSessions() {
  const items = [closure_5];
  stateFromStoresObject = stateFromStoresObject(589).useStateFromStoresObject(items, () => sessions.getSessions());
  const items1 = [stateFromStoresObject];
  return React.useMemo(() => {
    const otherSessions = [...authSessionIdHash];
    authSessionIdHash = closure_1_4.getAuthSessionIdHash();
    let currentSession = null;
    if (null != authSessionIdHash) {
      const findIndexResult = otherSessions.findIndex((id_hash) => id_hash.id_hash === authSessionIdHash);
      currentSession = null;
      if (findIndexResult >= 0) {
        currentSession = otherSessions.splice(findIndexResult, 1)[0];
      }
    }
    const sorted = otherSessions.sort((approx_last_used_time, approx_last_used_time2) => {
      approx_last_used_time = approx_last_used_time2.approx_last_used_time;
      approx_last_used_time2 = approx_last_used_time.approx_last_used_time;
      return approx_last_used_time.valueOf() - approx_last_used_time2.valueOf();
    });
    return { currentSession, otherSessions };
  }, items1);
};
export const formatDate = function formatDate(arg0) {
  const timestamp = Date.now();
  if ((timestamp - arg0.valueOf()) / 1000 / 60 / 60 < 1) {
    const intl = getSystemLocale.intl;
    let stringResult = intl.string(getSystemLocale.t.TXCmfL);
  } else {
    stringResult = tDefault(arg0).fromNow();
    const obj = tDefault(arg0);
  }
  return stringResult;
};