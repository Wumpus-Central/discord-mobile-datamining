// === Module 14608: AuthSessionsStore ===

// Module 14608 (AuthSessionsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

function handleInit() {
  items = [];
}
let items = [];
const Store = get_initializedDefault.Store;
class AuthSessionsStore extends Store {
  getSessions() {
    return items;
  }
}
const prototype = AuthSessionsStore.prototype;
AuthSessionsStore.displayName = "AuthSessionsStore";
let obj = {
  LOGOUT: handleInit,
  LOGIN_SUCCESS: handleInit,
  FETCH_AUTH_SESSIONS_SUCCESS: function handleFetchAuthSessionsSuccess(sessions) {
    sessions = sessions.sessions;
    items = sessions.map((approx_last_used_time) => {
      const obj = { approx_last_used_time: new Date(approx_last_used_time.approx_last_used_time) };
      const merged = Object.assign(approx_last_used_time);
      new Date(approx_last_used_time.approx_last_used_time);
      return obj;
    });
  },
  LOGOUT_AUTH_SESSIONS_SUCCESS: function handleLogoutAuthSessionsSuccess(sessionIdHashes) {
    function _loop(item10014) {
      let closure_0 = item10014;
      const findIndexResult = items.findIndex((id_hash) => id_hash.id_hash === closure_0);
      if (findIndexResult >= 0) {
        items.splice(findIndexResult, 1);
        c1 = true;
      }
    }
    sessionIdHashes = sessionIdHashes.sessionIdHashes;
    items = undefined;
    items = [...items];
    let c1 = false;
    for (const item10014 of sessionIdHashes) {
      let tmp = _loop(item10014);
      continue;
    }
    const tmp2 = c1;
    if (!tmp2) {
      return false;
    }
  }
};
const authSessionsStore = new AuthSessionsStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/auth_sessions/AuthSessionsStore.tsx");

export default authSessionsStore;