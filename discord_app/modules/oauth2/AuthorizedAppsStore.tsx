// === Module 5289: recomputeFromAppTokens ===

// Module 5289 (recomputeFromAppTokens)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment" /* 1370 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import isConnected from "isConnected" /* 5290 */;
import reinjectEphemerals from "reinjectEphemerals" /* 4994 */;

require = fn;
function recomputeFromAppTokens() {
  const items = [...map.values()];
  closure_9 = items.filter((item, index) => null == item.application.parent_id);
}
function updateFetchStates(FETCHED, applicationIds) {
  if (null == applicationIds) {
    closure_10 = FETCHED;
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
let obj = { NOT_FETCHED: "NOT_FETCHED", FETCHING: "FETCHING", FETCHED: "FETCHED" };
let map = new Map();
let closure_8 = [];
let closure_9 = [];
let NOT_FETCHED = obj.NOT_FETCHED;
const map1 = new Map();
let c12 = 0;
const Store = initializeDefault.Store;
class AuthorizedAppsStore extends Store {
}
const prototype = AuthorizedAppsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_3, closure_4, closure_5);
};
prototype["getNewestTokenForApplication"] = function getNewestTokenForApplication(id) {
  let tmp = null;
  if (null != id) {
    let value = map.get(id);
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
      let value = map1.get(arg0);
      if (value == null) {
        value = NOT_FETCHED;
      }
    }
    return value;
  }
  value = NOT_FETCHED;
};
prototype["getApplicationFetchStateVersion"] = function getApplicationFetchStateVersion() {
  return c12;
};
AuthorizedAppsStore.displayName = "AuthorizedAppsStore";
obj = {
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
      if (map1.get(item10008) === map1.FETCHING) {
        let deleteResult = map1.delete(item10008);
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
      updateFetchStates(FETCHED);
      const _Map = Map;
      const _Object3 = Object;
      const entries = Object.entries(isFullFetch.tokens);
      map = new Map(entries.filter(isDiscordFrontendDevelopment.isObjectEntryNotNullish));
      recomputeFromAppTokens();
    } else {
      const _Object = Object;
      updateFetchStates(FETCHED, Object.keys(isFullFetch.tokens));
      const _Object2 = Object;
      const entries1 = Object.entries(isFullFetch.tokens);
      const tmp5 = entries1[Symbol.iterator]();
      while (tmp5 !== undefined) {
        let tmp11 = callback(tmp8, 2);
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
    closure_9 = items.filter((item, index) => null == item.application.parent_id);
  },
  OAUTH2_TOKEN_DELETE: function handleOAuth2TokenDelete(applicationId) {
    const value = map.get(applicationId.applicationId);
    if (null != value) {
      if (value.id === applicationId.id) {
        map.delete(value.application.id);
        const items = [];
        HermesBuiltin.arraySpread(map.values(), 0);
        closure_9 = items.filter((item, index) => null == item.application.parent_id);
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
const authorizedAppsStore = new AuthorizedAppsStore(dispatcherDefault, obj);
let result = require("obj132").fileFinishedImporting("modules/oauth2/AuthorizedAppsStore.tsx");

export default authorizedAppsStore;
export const FetchState = obj;