// === Module 11703: MyGuildApplicationsStore ===

// Module 11703 (MyGuildApplicationsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import DurationsDefault from "Durations" /* 1102 */;
import size from "module_2" /* 2 */;

let set;

function addToApplicationIdToGuildIds(applicationId) {
  applicationId = applicationId.applicationId;
  const guildId = applicationId.guildId;
  if (null == closure_3.applicationIdToGuildIds[applicationId]) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    const applicationIdToGuildIds = closure_3.applicationIdToGuildIds;
    applicationIdToGuildIds[applicationId] = new Set();
    set = new Set();
  }
  const obj = closure_3.applicationIdToGuildIds[applicationId];
  obj.add(guildId);
  const applicationIdToGuildIds2 = closure_3.applicationIdToGuildIds;
  applicationIdToGuildIds2[applicationId] = new Set(closure_3.applicationIdToGuildIds[applicationId]);
  new Set(closure_3.applicationIdToGuildIds[applicationId]);
}
const FetchState = { NOT_FETCHED: 0, [0]: "NOT_FETCHED", FETCHING: 1, [1]: "FETCHING", FETCHED: 2, [2]: "FETCHED", ERROR: 3, [3]: "ERROR" };
const _false = { applicationIdToGuildIds: {}, lastFetchTimeMs: null, nextFetchRetryTimeMs: null, fetchState: FetchState.NOT_FETCHED };
const PersistedStore = get_initializedDefault.PersistedStore;
class MyGuildApplicationsStore extends PersistedStore {
  initialize(applicationIdToGuildIds) {
    if (null != applicationIdToGuildIds) {
      ({ lastFetchTimeMs: closure_3.lastFetchTimeMs, nextFetchRetryTimeMs: closure_3.nextFetchRetryTimeMs, fetchState: closure_3.fetchState } = applicationIdToGuildIds);
      for (const key10009 in applicationIdToGuildIds.applicationIdToGuildIds) {
        let _Set = Set;
        let self = this;
        let self2 = this;
        applicationIdToGuildIds = closure_3.applicationIdToGuildIds;
        set = new Set(applicationIdToGuildIds.applicationIdToGuildIds[key10009]);
        applicationIdToGuildIds[key10009] = set;
        continue;
      }
    }
  }
  getState() {
    return closure_3;
  }
  getGuildIdsForApplication(arg0) {
    if (null != arg0) {
      return closure_3.applicationIdToGuildIds[arg0];
    }
  }
  getLastFetchTimeMs() {
    return closure_3.lastFetchTimeMs;
  }
  getNextFetchRetryTimeMs() {
    return closure_3.nextFetchRetryTimeMs;
  }
  getFetchState() {
    return closure_3.fetchState;
  }
}
const prototype = MyGuildApplicationsStore.prototype;
MyGuildApplicationsStore.displayName = "MyGuildApplicationsStore";
MyGuildApplicationsStore.persistKey = "MyGuildApplicationsStore";
const obj2 = {
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
        const self = this;
        const self2 = this;
        const applicationIdToGuildIds = closure_3.applicationIdToGuildIds;
        applicationIdToGuildIds[id] = new Set();
        set = new Set();
      }
      const obj = closure_3.applicationIdToGuildIds[id];
      obj.add(tmp);
      const _Set2 = Set;
      const self3 = this;
      const self4 = this;
      const applicationIdToGuildIds2 = closure_3.applicationIdToGuildIds;
      applicationIdToGuildIds2[id] = new Set(closure_3.applicationIdToGuildIds[id]);
      const set1 = new Set(closure_3.applicationIdToGuildIds[id]);
    }
  },
  INTEGRATION_DELETE: function handleIntegrationDelete(applicationId) {
    applicationId = applicationId.applicationId;
    if (null != applicationId) {
      if (null != closure_3.applicationIdToGuildIds[applicationId]) {
        const obj = closure_3.applicationIdToGuildIds[applicationId];
        obj.delete(tmp);
        const _Set = Set;
        const self = this;
        const self2 = this;
        const applicationIdToGuildIds = closure_3.applicationIdToGuildIds;
        applicationIdToGuildIds[applicationId] = new Set(closure_3.applicationIdToGuildIds[applicationId]);
        set = new Set(closure_3.applicationIdToGuildIds[applicationId]);
      }
    }
  }
};
const myGuildApplicationsStore = new MyGuildApplicationsStore(DispatcherDefault, obj2);
let result = size.fileFinishedImporting("modules/global_discovery_apps/stores/MyGuildApplicationsStore.tsx");

export default myGuildApplicationsStore;
export { FetchState };