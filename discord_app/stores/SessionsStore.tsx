// discord_app/stores/SessionsStore.tsx
import _modDef12 from "../../_runtime/metro/00012__.js";
import get_initializedDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import AuthenticationStore from "AuthenticationStore.tsx";
import size from "../../_runtime/metro/00002__.js";

let active;

function handleUpdate(sessions) {
  closure_4 = {};
  sessions = sessions.sessions;
  const item = sessions.forEach((sessionId) => {
    closure_1_4[sessionId.sessionId] = sessionId;
  });
}
let closure_3 = Object.freeze([]);
const React3 = {};
const Store = get_initializedDefault.Store;
class SessionsStore extends Store {
  initialize() {
    this.waitFor(AuthenticationStore);
  }
  getSessions() {
    return closure_4;
  }
  getSession() {
    const sessionId = AuthenticationStore.getSessionId();
    let sessionById = null;
    if (null != sessionId) {
      const self = this;
      sessionById = this.getSessionById(sessionId);
    }
    return sessionById;
  }
  getRemoteActivities() {
    const sessionId = AuthenticationStore.getSessionId();
    const arr = _modDef12;
    const found = arr.find(closure_4, (active) => {
      active = active.active && active.sessionId !== closure_0;
      return active;
    });
    return null != found ? found.activities : closure_3;
  }
  getHiddenActivities() {
    const sessionId = AuthenticationStore.getSessionId();
    const arr = _modDef12;
    const found = arr.find(closure_4, (active) => {
      active = active.active && active.sessionId !== closure_0;
      return active;
    });
    if (null != found) {
      let hiddenActivities;
      if (null != found.hiddenActivities) {
        hiddenActivities = found.hiddenActivities;
      }
      return hiddenActivities;
    }
    hiddenActivities = closure_3;
  }
  getSessionById(sessionId) {
    return closure_4[sessionId];
  }
  getActiveSession() {
    const arr = _modDef12;
    return arr.find(closure_4, (active) => active.active);
  }
  getRemoteApplicationActivity(application_id) {
    let closure_0 = application_id;
    if (null == application_id) {
      return null;
    } else {
      const sessionId = AuthenticationStore.getSessionId();
      const arr3 = _modDef12;
      const found = arr3.find(closure_4, (active) => {
        active = active.active && active.sessionId !== closure_1;
        return active;
      });
      if (null == found) {
        return null;
      } else {
        const activities = found.activities;
        let found1 = activities.find((application_id) => application_id.application_id === closure_0);
        if (null == found1) {
          const hiddenActivities = found.hiddenActivities;
          let found2;
          if (hiddenActivities != null) {
            found2 = hiddenActivities.find((application_id) => application_id.application_id === closure_0);
          }
          found1 = found2;
        }
        return found1;
      }
    }
  }
}
const prototype = SessionsStore.prototype;
SessionsStore.displayName = "SessionsStore";
const obj = { CONNECTION_OPEN: handleUpdate, SESSIONS_REPLACE: handleUpdate };
const sessionsStore = new SessionsStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/SessionsStore.tsx");

export default sessionsStore;
