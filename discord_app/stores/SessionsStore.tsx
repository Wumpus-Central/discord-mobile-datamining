// discord_app/stores/SessionsStore.tsx
import applyDefault from "apply" /* 12 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import closure_2 from "fetchFingerprint" /* 1218 */;

function handleUpdate(sessions) {
  closure_4 = {};
  sessions = sessions.sessions;
  const item = sessions.forEach((sessionId) => {
    closure_4[sessionId.sessionId] = sessionId;
  });
}
let closure_3 = Object.freeze([]);
let closure_4 = {};
const Store = initializeDefault.Store;
class SessionsStore extends Store {
}
const prototype = SessionsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_2);
};
prototype["getSessions"] = function getSessions() {
  return closure_4;
};
prototype["getSession"] = function getSession() {
  const sessionId = store.getSessionId();
  let sessionById = null;
  if (null != sessionId) {
    const self = this;
    sessionById = this.getSessionById(sessionId);
  }
  return sessionById;
};
prototype["getRemoteActivities"] = function getRemoteActivities() {
  importDefault = store.getSessionId();
  const found = applyDefault.find(closure_4, (active) => {
    active = active.active;
    if (active) {
      active = active.sessionId !== closure_0;
    }
    return active;
  });
  return null != found ? found.activities : closure_3;
};
prototype["getHiddenActivities"] = function getHiddenActivities() {
  importDefault = store.getSessionId();
  const found = applyDefault.find(closure_4, (active) => {
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
  return table[sessionId];
};
prototype["getActiveSession"] = function getActiveSession() {
  return applyDefault.find(closure_4, (active) => active.active);
};
prototype["getRemoteApplicationActivity"] = function getRemoteApplicationActivity(application_id) {
  importDefault = application_id;
  if (null == application_id) {
    return null;
  } else {
    dependencyMap = store.getSessionId();
    const found = applyDefault.find(closure_4, (active) => {
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
    const arr3 = applyDefault;
  }
};
SessionsStore.displayName = "SessionsStore";
const sessionsStore = new SessionsStore(dispatcherDefault, { CONNECTION_OPEN: handleUpdate, SESSIONS_REPLACE: handleUpdate });
const result = require("set").fileFinishedImporting("stores/SessionsStore.tsx");

export default sessionsStore;