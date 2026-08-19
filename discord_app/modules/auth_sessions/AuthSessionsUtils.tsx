// discord_app/modules/auth_sessions/AuthSessionsUtils.tsx
import getSystemLocale from "../../intl/index.native.tsx";
import tDefault from "../../../_runtime/03975_t.js";
import noop from "../../../_runtime/00019_noop.js";
import fetchFingerprint from "../../stores/AuthenticationStore.tsx";
import handleInit from "AuthSessionsStore.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/auth_sessions/AuthSessionsUtils.tsx");

export const useAuthSessions = function useAuthSessions() {
  const items = [closure_5];
  stateFromStoresObject = stateFromStoresObject(589).useStateFromStoresObject(items, () => sessions.getSessions());
  const items1 = [stateFromStoresObject];
  return React.useMemo(() => {
    const otherSessions = [...authSessionIdHash];
    authSessionIdHash = closure_1_4.getAuthSessionIdHash();
    let currentSession = null;
    if (null != authSessionIdHash) {
      const findIndexResult = otherSessions.findIndex((item, index) => item.id_hash === authSessionIdHash);
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