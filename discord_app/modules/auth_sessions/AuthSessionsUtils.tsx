// === Module 13852: useAuthSessions ===

// Module 13852 (useAuthSessions)
import noop from "noop";
import fetchFingerprint from "fetchFingerprint";
import handleInit from "handleInit";

const require = arg1;
const result = require("handleInit").fileFinishedImporting("modules/auth_sessions/AuthSessionsUtils.tsx");

export const useAuthSessions = function useAuthSessions() {
  const items = [handleInit];
  stateFromStoresObject = stateFromStoresObject(589).useStateFromStoresObject(items, () => sessions.getSessions());
  const items1 = [stateFromStoresObject];
  return React.useMemo(() => {
    const otherSessions = [...authSessionIdHash];
    authSessionIdHash = outer1_4.getAuthSessionIdHash();
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
    const intl = require(1236) /* getSystemLocale */.intl;
    let stringResult = intl.string(require(1236) /* getSystemLocale */.t.TXCmfL);
  } else {
    stringResult = importDefault(3837)(arg0).fromNow();
    const obj = importDefault(3837)(arg0);
  }
  return stringResult;
};