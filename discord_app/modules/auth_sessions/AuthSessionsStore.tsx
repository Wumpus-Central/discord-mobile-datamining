// discord_app/modules/auth_sessions/AuthSessionsStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";

function handleInit() {
  closure_0 = [];
}
let closure_0 = [];
const Store = initializeDefault.Store;
class AuthSessionsStore extends Store {
}
AuthSessionsStore.prototype["getSessions"] = function getSessions() {
  return closure_0;
};
AuthSessionsStore.displayName = "AuthSessionsStore";
const authSessionsStore = new AuthSessionsStore(dispatcherDefault, {
  LOGOUT: handleInit,
  LOGIN_SUCCESS: handleInit,
  FETCH_AUTH_SESSIONS_SUCCESS: function handleFetchAuthSessionsSuccess(sessions) {
    sessions = sessions.sessions;
    closure_0 = sessions.map((item, index) => {
      const obj = {};
      const merged = Object.assign(item);
      obj.approx_last_used_time = new Date(item.approx_last_used_time);
      return obj;
    });
  },
  LOGOUT_AUTH_SESSIONS_SUCCESS: function handleLogoutAuthSessionsSuccess(arg0) {
    let items;
    items = [...items];
    c1 = false;
    for (const item10014 of tmp) {
      let tmp2 = (function _loop(item10014) {
        items = item10014;
        const findIndexResult = items.findIndex((item, index) => item.id_hash === closure_0);
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
  }
});
const result = require("obj132").fileFinishedImporting("modules/auth_sessions/AuthSessionsStore.tsx");

export default authSessionsStore;