// === Module 11251: addToApplicationIdToGuildIds ===

// Module 11251 (addToApplicationIdToGuildIds)
import initializeDefault from "initialize" /* 589 */;
import setDefault from "set" /* 687 */;
import dispatcherDefault from "dispatcher" /* 709 */;

function addToApplicationIdToGuildIds(applicationId) {
  applicationId = applicationId.applicationId;
  if (null == closure_3.applicationIdToGuildIds[applicationId]) {
    const _Set = Set;
    const set = new Set();
    tmp.applicationIdToGuildIds[applicationId] = set;
  }
  closure_3.applicationIdToGuildIds[applicationId].add(applicationId.guildId);
  closure_3.applicationIdToGuildIds[applicationId] = new Set(closure_3.applicationIdToGuildIds[applicationId]);
}
let obj = { NOT_FETCHED: 0, [0]: "NOT_FETCHED", FETCHING: 1, [1]: "FETCHING", FETCHED: 2, [2]: "FETCHED", ERROR: 3, [3]: "ERROR" };
let closure_3 = { applicationIdToGuildIds: {}, lastFetchTimeMs: null, nextFetchRetryTimeMs: null, fetchState: obj.NOT_FETCHED };
const PersistedStore = initializeDefault.PersistedStore;
class MyGuildApplicationsStore extends PersistedStore {
}
const prototype = MyGuildApplicationsStore.prototype;
prototype["initialize"] = function initialize(applicationIdToGuildIds) {
  if (null != applicationIdToGuildIds) {
    ({ lastFetchTimeMs: closure_3.lastFetchTimeMs, nextFetchRetryTimeMs: closure_3.nextFetchRetryTimeMs, fetchState: closure_3.fetchState } = applicationIdToGuildIds);
    for (const key10009 in arg0.applicationIdToGuildIds) {
      let tmp3 = key10009;
      let tmp4 = closure_3;
      let _Set = Set;
      let tmp5 = new.target;
      let tmp6 = new.target;
      let set = new Set(arg0.applicationIdToGuildIds[key10009]);
      let tmp8 = set;
      closure_3.applicationIdToGuildIds[key10009] = set;
      continue;
    }
  }
};
prototype["getState"] = function getState() {
  return closure_3;
};
prototype["getGuildIdsForApplication"] = function getGuildIdsForApplication(arg0) {
  if (null != arg0) {
    return closure_3.applicationIdToGuildIds[arg0];
  }
};
prototype["getLastFetchTimeMs"] = function getLastFetchTimeMs() {
  return closure_3.lastFetchTimeMs;
};
prototype["getNextFetchRetryTimeMs"] = function getNextFetchRetryTimeMs() {
  return closure_3.nextFetchRetryTimeMs;
};
prototype["getFetchState"] = function getFetchState() {
  return closure_3.fetchState;
};
MyGuildApplicationsStore.displayName = "MyGuildApplicationsStore";
MyGuildApplicationsStore.persistKey = "MyGuildApplicationsStore";
obj = {
  LOGOUT: function handleLogout() {
    closure_3.applicationIdToGuildIds = {};
    closure_3.lastFetchTimeMs = null;
    closure_3.nextFetchRetryTimeMs = null;
    closure_3.fetchState = obj.NOT_FETCHED;
  },
  FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS: function handleGuildApplicationsFetch() {
    closure_3.fetchState = obj.FETCHING;
  },
  FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS: function handleGuildApplicationsFetchSuccess(guildIdToApplicationIds) {
    guildIdToApplicationIds = guildIdToApplicationIds.guildIdToApplicationIds;
    closure_3.fetchState = obj.FETCHED;
    closure_3.lastFetchTimeMs = Date.now();
    closure_3.applicationIdToGuildIds = {};
    closure_3.nextFetchRetryTimeMs = null;
    for (const key10015 in guildIdToApplicationIds) {
      let tmp4 = key10015;
      let tmp5 = guildIdToApplicationIds[key10015];
      let tmp6 = tmp5;
      let tmp = tmp5;
      for (const item10017 of tmp5) {
        let tmp2 = addToApplicationIdToGuildIds;
        obj = { applicationId: null, guildId: null };
        obj[0] = item10017;
        obj[1] = key10015;
        let tmp3 = addToApplicationIdToGuildIds(obj);
        continue;
      }
    }
  },
  FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE: function handleGuildApplicationsFetchFailure(retryAfterSeconds) {
    retryAfterSeconds = retryAfterSeconds.retryAfterSeconds;
    closure_3.fetchState = obj.ERROR;
    if (null != retryAfterSeconds) {
      const _Date = Date;
      const result = retryAfterSeconds * setDefault.Millis.SECOND;
      tmp.nextFetchRetryTimeMs = Date.now() + result;
    }
  },
  INTEGRATION_CREATE: function handleIntegrationCreate(application) {
    application = application.application;
    if (null != application) {
      const id = application.id;
      if (null == closure_3.applicationIdToGuildIds[id]) {
        const _Set = Set;
        const set = new Set();
        tmp13.applicationIdToGuildIds[id] = set;
      }
      closure_3.applicationIdToGuildIds[id].add(tmp);
      const _Set2 = Set;
      const set1 = new Set(closure_3.applicationIdToGuildIds[id]);
      closure_3.applicationIdToGuildIds[id] = set1;
      obj = closure_3.applicationIdToGuildIds[id];
    }
  },
  INTEGRATION_DELETE: function handleIntegrationDelete(applicationId) {
    applicationId = applicationId.applicationId;
    if (null != applicationId) {
      if (null != closure_3.applicationIdToGuildIds[applicationId]) {
        tmp2.applicationIdToGuildIds[applicationId].delete(tmp);
        const _Set = Set;
        const set = new Set(tmp2.applicationIdToGuildIds[applicationId]);
        tmp2.applicationIdToGuildIds[applicationId] = set;
        obj = tmp2.applicationIdToGuildIds[applicationId];
      }
    }
  }
};
const myGuildApplicationsStore = new MyGuildApplicationsStore(dispatcherDefault, obj);
let result = require("set").fileFinishedImporting("modules/global_discovery_apps/stores/MyGuildApplicationsStore.tsx");

export default myGuildApplicationsStore;
export const FetchState = obj;