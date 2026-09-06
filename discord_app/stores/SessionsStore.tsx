// === Module 4578: SessionsStore ===

// Module 4578 (SessionsStore)
import _modDef12 from "module_12" /* 12 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

function handleUpdate(sessions) {
  closure_4 = {};
  sessions = sessions.sessions;
  const item = sessions.forEach((sessionId) => {
    closure_1_4[sessionId.sessionId] = sessionId;
  });
}
let closure_3 = Object.freeze([]);
let closure_4 = {};
const Store = initializeDefault.Store;
class SessionsStore extends Store {
}
const prototype = SessionsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(AuthenticationStore);
};
prototype["getSessions"] = function getSessions() {
  return closure_4;
};
prototype["getSession"] = function getSession() {
  const sessionId = AuthenticationStore.getSessionId();
  let sessionById = null;
  if (null != sessionId) {
    const self = this;
    sessionById = this.getSessionById(sessionId);
  }
  return sessionById;
};
prototype["getRemoteActivities"] = function getRemoteActivities() {
  const sessionId = AuthenticationStore.getSessionId();
  const found = _modDef12.find(closure_4, (active) => {
    active = active.active;
    if (active) {
      active = active.sessionId !== closure_0;
    }
    return active;
  });
  return null != found ? found.activities : closure_3;
};
prototype["getHiddenActivities"] = function getHiddenActivities() {
  const sessionId = AuthenticationStore.getSessionId();
  const found = _modDef12.find(closure_4, (active) => {
    active = active.active;
    if (active) {
      active = active.sessionId !== closure_0;
    }
    return active;
  });
  if (null != found) {
    if (null != found.hiddenActivities) {
      let hiddenActivities = found.hiddenActivities;
    }
    return hiddenActivities;
  }
  hiddenActivities = closure_3;
};
prototype["getSessionById"] = function getSessionById(sessionId) {
  return closure_4[sessionId];
};
prototype["getActiveSession"] = function getActiveSession() {
  return _modDef12.find(closure_4, (active) => active.active);
};
prototype["getRemoteApplicationActivity"] = function getRemoteApplicationActivity(application_id) {
  closure_0 = application_id;
  if (null == application_id) {
    return null;
  } else {
    const sessionId = AuthenticationStore.getSessionId();
    const found = _modDef12.find(closure_4, (active) => {
      active = active.active;
      if (active) {
        active = active.sessionId !== closure_1;
      }
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
};
SessionsStore.displayName = "SessionsStore";
const sessionsStore = new SessionsStore(DispatcherDefault, { CONNECTION_OPEN: handleUpdate, SESSIONS_REPLACE: handleUpdate });
const size = fn(2);
const result = size.fileFinishedImporting("stores/SessionsStore.tsx");

export default sessionsStore;