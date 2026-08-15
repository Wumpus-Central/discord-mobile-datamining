// discord_app/modules/auth_sessions/AuthSessionsUtils.tsx
import noop from "noop";
import fetchFingerprint from "fetchFingerprint";
import handleInit from "handleInit";
import { t } from "../../../_runtime/03975_t.js";
import { getSystemLocale } from "../../intl/index.native.tsx";

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
    const intl = getSystemLocale.intl;
    let stringResult = intl.string(getSystemLocale.t.TXCmfL);
  } else {
    stringResult = t(arg0).fromNow();
    const obj = t(arg0);
  }
  return stringResult;
};