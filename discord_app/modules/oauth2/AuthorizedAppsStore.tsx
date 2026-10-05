// discord_app/modules/oauth2/AuthorizedAppsStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import ConnectedAppsStore from "../../stores/ConnectedAppsStore.tsx";
import MessageStore from "../../stores/MessageStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
const FetchState = { NOT_FETCHED: "NOT_FETCHED", FETCHING: "FETCHING", FETCHED: "FETCHED" };
let map = new Map();
let closure_8 = [];
let closure_9 = [];
let NOT_FETCHED = FetchState.NOT_FETCHED;
const map1 = new Map();
let closure_12 = 0;
const Store = get_initializedDefault.Store;
class AuthorizedAppsStore extends Store {
  initialize() {
    this.waitFor(ChannelStore, ConnectedAppsStore, MessageStore);
  }
  getNewestTokenForApplication(application_id) {
    let tmp = null;
    if (null != application_id) {
      let value = map.get(application_id);
      if (value == null) {
        value = null;
      }
      tmp = value;
    }
    return tmp;
  }
  getNewestTokens() {
    return closure_8;
  }
  getNewestTokensForNonChildrenApplications() {
    return closure_9;
  }
  getFetchState() {
    return NOT_FETCHED;
  }
  getFetchStateForApplication(arg0) {
    if (NOT_FETCHED !== obj.FETCHING) {
      let value;
      if (NOT_FETCHED !== tmp.FETCHED) {
        value = map1.get(arg0);
        if (value == null) {
          value = NOT_FETCHED;
        }
      }
      return value;
    }
    value = NOT_FETCHED;
  }
  getApplicationFetchStateVersion() {
    return closure_12;
  }
}
const prototype = AuthorizedAppsStore.prototype;
AuthorizedAppsStore.displayName = "AuthorizedAppsStore";
const obj2 = {
  USER_AUTHORIZED_APPS_REQUEST: function handleUserAuthorizedAppsRequest(request) {
    if ("full" === request.request.type) {
      updateFetchStates(obj.FETCHING);
    } else {
      updateFetchStates(obj.FETCHING, request.request.applicationIds);
    }
  },
  USER_AUTHORIZED_APPS_REQUEST_CANCELLED: function handleUserAuthorizedAppsRequestCancelled(applicationIds) {
    let flag = false;
    applicationIds = applicationIds.applicationIds;
    for (const item10008 of applicationIds) {
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
    let tmp12;
    let tmp13;
    const FETCHED = obj.FETCHED;
    if (isFullFetch.isFullFetch) {
      updateFetchStates(FETCHED);
      const _Map = Map;
      const _Object3 = Object;
      const entries = Object.entries(isFullFetch.tokens);
      const self = this;
      const self2 = this;
      map = new Map(entries.filter(GlobalUtils.isObjectEntryNotNullish));
      recomputeFromAppTokens();
    } else {
      const _Object = Object;
      updateFetchStates(FETCHED, Object.keys(isFullFetch.tokens));
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
    const obj = { id: application.id, application, scopes: application.scopes };
    const result = map.set(application.id, obj);
    const items = [...map.values()];
    closure_8 = items;
    closure_9 = items.filter((application) => null == application.application.parent_id);
  },
  OAUTH2_TOKEN_DELETE: function handleOAuth2TokenDelete(id) {
    id = id.id;
    const value = map.get(id.applicationId);
    if (null != value) {
      if (value.id === id) {
        map.delete(value.application.id);
        const items = [];
        HermesBuiltin.arraySpread(items, map.values(), 0);
        closure_8 = items;
        closure_9 = items.filter((application) => null == application.application.parent_id);
      }
    }
    return false;
  },
  LOGOUT: function handleLogout() {
    new Map();
    closure_8 = [];
    closure_9 = [];
    NOT_FETCHED = obj.NOT_FETCHED;
    map1.clear();
    closure_12 = closure_12 + 1;
  },
};
const authorizedAppsStore = new AuthorizedAppsStore(DispatcherDefault, obj2);
let result = size.fileFinishedImporting("modules/oauth2/AuthorizedAppsStore.tsx");

export default authorizedAppsStore;
export { FetchState };
