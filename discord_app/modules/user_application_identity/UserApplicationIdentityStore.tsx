// discord_app/modules/user_application_identity/UserApplicationIdentityStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

const f98493 = (application_id) => {
  const items = [application_id.application_id, application_id];
  return items;
};
const FetchState = { NOT_FETCHED: "NOT_FETCHED", FETCHING: "FETCHING", FETCHED: "FETCHED" };
let map = new Map();
const map1 = new Map();
const Store = get_initializedDefault.Store;
class UserApplicationIdentityStore extends Store {
  getUserIdentities(arg0) {
    const value = map.get(arg0);
    let identities;
    if (value != null) {
      identities = value.identities;
    }
    if (identities == null) {
      identities = null;
    }
    return identities;
  }
  getUserIdentityByApplication(arg0, arg1) {
    const value = map.get(arg0);
    let value2;
    if (value != null) {
      const byApplication = value.byApplication;
      value2 = byApplication.get(arg1);
    }
    if (value2 == null) {
      value2 = null;
    }
    return value2;
  }
  getFetchState(arg0) {
    let NOT_FETCHED = map1.get(arg0);
    if (NOT_FETCHED == null) {
      NOT_FETCHED = obj.NOT_FETCHED;
    }
    return NOT_FETCHED;
  }
  isFetchingUser(arg0) {
    return this.getFetchState(arg0) === obj.FETCHING;
  }
}
const prototype = UserApplicationIdentityStore.prototype;
let obj2 = {
  USER_APPLICATION_IDENTITY_FETCH_USER_START: function handleFetchUserStart(userId) {
    const result = map1.set(userId.userId, obj.FETCHING);
  },
  USER_APPLICATION_IDENTITY_FETCH_USER_SUCCESS: function handleFetchUserSuccess(userId) {
    let identities;
    const result = map1.set(userId.userId, obj.FETCHED);
    ({ userId, identities } = userId);
    map = new Map(identities.map(f98493));
    const result1 = map.set(userId, { identities, byApplication: map });
    const result2 = map1.set(userId, obj.FETCHED);
  },
  USER_APPLICATION_IDENTITY_FETCH_USER_FAILURE: function handleFetchUserFailure(userId) {
    const result = map1.set(userId.userId, obj.FETCHED);
  },
  USER_APPLICATION_IDENTITY_REMOVE: function handleRemoveIdentity(user_id) {
    let closure_0 = user_id;
    const value = map.get(user_id.user_id);
    if (null == value) {
      return false;
    } else {
      user_id = user_id.user_id;
      const identities = value.identities;
      const found = identities.filter(
        (application_id) => application_id.application_id !== application_id.application_id,
      );
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map(found.map(f98493));
      const obj2 = { identities: found, byApplication: map };
      const result = obj.set(user_id, obj2);
      const result1 = map1.set(user_id, obj.FETCHED);
    }
  },
};
const userApplicationIdentityStore = new UserApplicationIdentityStore(DispatcherDefault, obj2);
let result = size.fileFinishedImporting("modules/user_application_identity/UserApplicationIdentityStore.tsx");

export default userApplicationIdentityStore;
export { FetchState };
