// === Module 7107: AuthorizedAppsStore ===

// Module 7107 (AuthorizedAppsStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import _slicedToArray from "module_32" /* 32 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import ConnectedAppsStore from "ConnectedAppsStore" /* 7108 */;
import MessageStore from "MessageStore" /* 4781 */;

require = fn;
function recomputeFromAppTokens() {
  const items = [...map.values()];
  closure_8 = items;
  closure_9 = items.filter((application) => null == application.application.parent_id);
}
function updateFetchStates(FETCHED, applicationIds) {
  if (null == applicationIds) {
    NOT_FETCHED = FETCHED;
    map1.clear();
    closure_12 = closure_12 + 1;
  } else {
    const tmp2 = applicationIds[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let result = map1.set(tmp4, FETCHED);
      continue;
    }
    closure_12 = closure_12 + 1;
  }
}
let FetchState = { NOT_FETCHED: "NOT_FETCHED", FETCHING: "FETCHING", FETCHED: "FETCHED" };
let map = new Map();
let closure_8 = [];
let closure_9 = [];
let NOT_FETCHED = FetchState.NOT_FETCHED;
const map1 = new Map();
let closure_12 = 0;
const Store = initializeDefault.Store;
class AuthorizedAppsStore extends Store {
}
const prototype = AuthorizedAppsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ChannelStore, ConnectedAppsStore, MessageStore);
};
prototype["getNewestTokenForApplication"] = function getNewestTokenForApplication(applicationId) {
  let tmp = null;
  if (null != applicationId) {
    value = map.get(applicationId);
    if (value == null) {
      value = null;
    }
    tmp = value;
  }
  return tmp;
};
prototype["getNewestTokens"] = function getNewestTokens() {
  return closure_8;
};
prototype["getNewestTokensForNonChildrenApplications"] = function getNewestTokensForNonChildrenApplications() {
  return closure_9;
};
prototype["getFetchState"] = function getFetchState() {
  return NOT_FETCHED;
};
prototype["getFetchStateForApplication"] = function getFetchStateForApplication(arg0) {
  if (NOT_FETCHED !== obj.FETCHING) {
    if (NOT_FETCHED !== tmp.FETCHED) {
      value = map1.get(arg0);
      if (value == null) {
        value = NOT_FETCHED;
      }
    }
    return value;
  }
  value = NOT_FETCHED;
};
prototype["getApplicationFetchStateVersion"] = function getApplicationFetchStateVersion() {
  return closure_12;
};
AuthorizedAppsStore.displayName = "AuthorizedAppsStore";
FetchState = {
  USER_AUTHORIZED_APPS_REQUEST: function handleUserAuthorizedAppsRequest(request) {
    if ("full" === request.request.type) {
      updateFetchStates(obj.FETCHING);
    } else {
      updateFetchStates(obj.FETCHING, request.request.applicationIds);
    }
  },
  USER_AUTHORIZED_APPS_REQUEST_CANCELLED: function handleUserAuthorizedAppsRequestCancelled(arg0) {
    let flag = false;
    for (const item10008 of tmp) {
      let obj = map1;
      let tmp2 = item10008;
      if (map1.get(item10008) === obj.FETCHING) {
        let deleteResult = obj.delete(tmp2);
        flag = true;
      }
      continue;
    }
    if (flag) {
      closure_12 = closure_12 + 1;
    }
  },
  USER_AUTHORIZED_APPS_REQUEST_FAILED: function handleUserAuthorizedAppsRequestFailed(request) {
    if ("full" === request.request.type) {
      updateFetchStates(obj.FETCHED);
    } else {
      updateFetchStates(obj.FETCHED, request.request.applicationIds);
    }
  },
  USER_AUTHORIZED_APPS_UPDATE: function handleAuthorizedAppsUpdate(isFullFetch) {
    const FETCHED = obj.FETCHED;
    if (isFullFetch.isFullFetch) {
      tmp(FETCHED);
      const _Map = Map;
      const _Object3 = Object;
      const entries = Object.entries(isFullFetch.tokens);
      map = new Map(entries.filter(GlobalUtils.isObjectEntryNotNullish));
      recomputeFromAppTokens();
    } else {
      const _Object = Object;
      tmp(FETCHED, Object.keys(isFullFetch.tokens));
      const _Object2 = Object;
      const entries1 = Object.entries(isFullFetch.tokens);
      const tmp5 = entries1[Symbol.iterator]();
      while (tmp5 !== undefined) {
        let tmp11 = _slicedToArray(tmp8, 2);
        [tmp12, tmp13] = tmp11;
        if (null == tmp13) {
          let deleteResult = map.delete(tmp12);
        } else {
          let result = map.set(tmp12, tmp14);
        }
        continue;
      }
      recomputeFromAppTokens();
    }
  },
  OAUTH2_TOKEN_CREATE: function handleOAuth2TokenCreate(application) {
    application = application.application;
    const result = map.set(application.id, { id: application.id, application, scopes: application.scopes });
    const items = [...map.values()];
    closure_8 = items;
    closure_9 = items.filter((application) => null == application.application.parent_id);
  },
  OAUTH2_TOKEN_DELETE: function handleOAuth2TokenDelete(applicationId) {
    value = map.get(applicationId.applicationId);
    if (null != value) {
      if (value.id === applicationId.id) {
        map.delete(value.application.id);
        const items = [];
        HermesBuiltin.arraySpread(map.values(), 0);
        closure_8 = items;
        closure_9 = items.filter((application) => null == application.application.parent_id);
      }
    }
    return false;
  },
  LOGOUT: function handleLogout() {
    map = new Map();
    closure_8 = [];
    closure_9 = [];
    NOT_FETCHED = obj.NOT_FETCHED;
    map1.clear();
    closure_12 = closure_12 + 1;
  }
};
const authorizedAppsStore = new AuthorizedAppsStore(DispatcherDefault, FetchState);
const size = fn(2);
let result = size.fileFinishedImporting("modules/oauth2/AuthorizedAppsStore.tsx");

export default authorizedAppsStore;
export { FetchState };