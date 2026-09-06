// === Module 12075: MyGuildApplicationsStore ===

// Module 12075 (MyGuildApplicationsStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import DurationsDefault from "Durations" /* 1090 */;

function addToApplicationIdToGuildIds(applicationId) {
  applicationId = applicationId.applicationId;
  if (null == closure_3.applicationIdToGuildIds[applicationId]) {
    const _Set = Set;
    const set = new Set();
    closure_3.applicationIdToGuildIds[applicationId] = set;
  }
  closure_3.applicationIdToGuildIds[applicationId].add(applicationId.guildId);
  closure_3.applicationIdToGuildIds[applicationId] = new Set(closure_3.applicationIdToGuildIds[applicationId]);
  const set1 = new Set(closure_3.applicationIdToGuildIds[applicationId]);
}
let FetchState = { NOT_FETCHED: 0, [0]: "NOT_FETCHED", FETCHING: 1, [1]: "FETCHING", FETCHED: 2, [2]: "FETCHED", ERROR: 3, [3]: "ERROR" };
let closure_3 = { applicationIdToGuildIds: {}, lastFetchTimeMs: null, nextFetchRetryTimeMs: null, fetchState: FetchState.NOT_FETCHED };
const PersistedStore = initializeDefault.PersistedStore;
class MyGuildApplicationsStore extends PersistedStore {
}
const prototype = MyGuildApplicationsStore.prototype;
prototype["initialize"] = function initialize(applicationIdToGuildIds) {
  if (null != applicationIdToGuildIds) {
    ({ lastFetchTimeMs: closure_3.lastFetchTimeMs, nextFetchRetryTimeMs: closure_3.nextFetchRetryTimeMs, fetchState: closure_3.fetchState } = applicationIdToGuildIds);
    for (const key10009 in arg0.applicationIdToGuildIds) {
      let _Set = Set;
      let tmp5 = new.target;
      let tmp6 = new.target;
      let set = new Set(arg0.applicationIdToGuildIds[key10009]);
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
FetchState = {
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
    let obj;
    guildIdToApplicationIds = guildIdToApplicationIds.guildIdToApplicationIds;
    closure_3.fetchState = obj.FETCHED;
    closure_3.lastFetchTimeMs = Date.now();
    closure_3.applicationIdToGuildIds = {};
    closure_3.nextFetchRetryTimeMs = null;
    for (const key10015 in guildIdToApplicationIds) {
      let tmp5 = guildIdToApplicationIds[key10015];
      for (const item10017 of tmp5) {
        obj = { applicationId: item10017, guildId: key10015 };
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
      const result = retryAfterSeconds * DurationsDefault.Millis.SECOND;
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
        closure_3.applicationIdToGuildIds[id] = set;
      }
      closure_3.applicationIdToGuildIds[id].add(tmp);
      const _Set2 = Set;
      const set1 = new Set(closure_3.applicationIdToGuildIds[id]);
      closure_3.applicationIdToGuildIds[id] = set1;
    }
  },
  INTEGRATION_DELETE: function handleIntegrationDelete(applicationId) {
    applicationId = applicationId.applicationId;
    if (null != applicationId) {
      if (null != closure_3.applicationIdToGuildIds[applicationId]) {
        closure_3.applicationIdToGuildIds[applicationId].delete(tmp);
        const _Set = Set;
        const set = new Set(closure_3.applicationIdToGuildIds[applicationId]);
        closure_3.applicationIdToGuildIds[applicationId] = set;
      }
    }
  }
};
const myGuildApplicationsStore = new MyGuildApplicationsStore(DispatcherDefault, FetchState);
const size = fn(2);
let result = size.fileFinishedImporting("modules/global_discovery_apps/stores/MyGuildApplicationsStore.tsx");

export default myGuildApplicationsStore;
export { FetchState };