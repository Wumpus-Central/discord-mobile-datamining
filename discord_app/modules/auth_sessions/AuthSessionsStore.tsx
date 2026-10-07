// discord_app/modules/auth_sessions/AuthSessionsStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";

function handleInit() {
  items = [];
}
let items = [];
const Store = initializeDefault.Store;
class AuthSessionsStore extends Store {}
AuthSessionsStore.prototype["getSessions"] = function getSessions() {
  return items;
};
AuthSessionsStore.displayName = "AuthSessionsStore";
const authSessionsStore = new AuthSessionsStore(DispatcherDefault, {
  LOGOUT: handleInit,
  LOGIN_SUCCESS: handleInit,
  FETCH_AUTH_SESSIONS_SUCCESS: function handleFetchAuthSessionsSuccess(sessions) {
    sessions = sessions.sessions;
    items = sessions.map((approx_last_used_time) => {
      const obj = {};
      const merged = Object.assign(approx_last_used_time);
      obj.approx_last_used_time = new Date(approx_last_used_time.approx_last_used_time);
      return obj;
    });
  },
  LOGOUT_AUTH_SESSIONS_SUCCESS: function handleLogoutAuthSessionsSuccess(arg0) {
    items = undefined;
    items = [...items];
    c1 = false;
    for (const item10014 of tmp) {
      let tmp2 = (function _loop(item10014) {
        closure_0 = item10014;
        const findIndexResult = items.findIndex((id_hash) => id_hash.id_hash === closure_0);
        if (findIndexResult >= 0) {
          items.splice(findIndexResult, 1);
          c1 = true;
        }
      })(item10014);
      continue;
    }
    if (!c1) {
      return false;
    }
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth_sessions/AuthSessionsStore.tsx");

export default authSessionsStore;
