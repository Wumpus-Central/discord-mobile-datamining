// === Module 12741: map ===

// Module 12741 (map)
import initializeDefault from "initialize" /* 586 */;
import dispatcherDefault from "dispatcher" /* 706 */;

let obj = { NOT_FETCHED: "NOT_FETCHED", FETCHING: "FETCHING", FETCHED: "FETCHED" };
let map = new Map();
const map1 = new Map();
const Store = initializeDefault.Store;
class UserApplicationIdentityStore extends Store {
}
const prototype = UserApplicationIdentityStore.prototype;
prototype["getUserIdentities"] = function getUserIdentities(arg0) {
  const value = map.get(arg0);
  let identities;
  if (value != null) {
    identities = value.identities;
  }
  if (identities == null) {
    identities = null;
  }
  return identities;
};
prototype["getUserIdentityByApplication"] = function getUserIdentityByApplication(closure_0, closure_1) {
  let value = map.get(closure_0);
  value = undefined;
  if (value != null) {
    const byApplication = value.byApplication;
    value = byApplication.get(closure_1);
  }
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["getFetchState"] = function getFetchState(arg0) {
  let NOT_FETCHED = map1.get(arg0);
  if (NOT_FETCHED == null) {
    NOT_FETCHED = obj.NOT_FETCHED;
  }
  return NOT_FETCHED;
};
prototype["isFetchingUser"] = function isFetchingUser(arg0) {
  return this.getFetchState(arg0) === obj.FETCHING;
};
obj = {
  USER_APPLICATION_IDENTITY_FETCH_USER_START: function handleFetchUserStart(userId) {
    const result = map1.set(userId.userId, obj.FETCHING);
  },
  USER_APPLICATION_IDENTITY_FETCH_USER_SUCCESS: function handleFetchUserSuccess(userId) {
    const result = map1.set(userId.userId, obj.FETCHED);
    ({ userId, identities } = userId);
    map = new Map(identities.map((application_id) => {
      const items = [application_id.application_id, application_id];
      return items;
    }));
    const result1 = map.set(userId, { identities, byApplication: map });
    const result2 = map1.set(userId, obj.FETCHED);
  },
  USER_APPLICATION_IDENTITY_FETCH_USER_FAILURE: function handleFetchUserFailure(userId) {
    const result = map1.set(userId.userId, obj.FETCHED);
  },
  USER_APPLICATION_IDENTITY_REMOVE: function handleRemoveIdentity(user_id) {
    obj = user_id;
    obj = map;
    const value = map.get(user_id.user_id);
    if (null == value) {
      return false;
    } else {
      user_id = user_id.user_id;
      const identities = value.identities;
      const found = identities.filter((application_id) => application_id.application_id !== user_id.application_id);
      const _Map = Map;
      map = new Map(found.map((application_id) => {
        const items = [application_id.application_id, application_id];
        return items;
      }));
      obj = { identities: null, byApplication: null };
      obj[0] = found;
      obj[1] = map;
      const result = obj.set(user_id, obj);
      const result1 = map1.set(user_id, obj.FETCHED);
    }
  }
};
const userApplicationIdentityStore = new UserApplicationIdentityStore(dispatcherDefault, obj);
let result = require("set").fileFinishedImporting("modules/user_application_identity/UserApplicationIdentityStore.tsx");

export default userApplicationIdentityStore;
export const FetchState = obj;