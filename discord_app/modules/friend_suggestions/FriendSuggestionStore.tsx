// === Module 7662: FriendSuggestionStore ===

// Module 7662 (FriendSuggestionStore)
import _modDef12 from "module_12" /* 12 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import FriendSuggestionActionCreatorsDefault from "FriendSuggestionActionCreators" /* 7663 */;
import maybeDispatchDevOnlyDummyFriendSuggestionsDefault from "maybeDispatchDevOnlyDummyFriendSuggestions" /* 7664 */;
import UserRecord from "UserRecord" /* 1385 */;
import UserStore from "UserStore" /* 1371 */;

let dependencyMap = {};
let c6 = false;
let c7 = false;
const Store = initializeDefault.Store;
class FriendSuggestionStore extends Store {
}
const prototype = FriendSuggestionStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(UserStore);
};
prototype["getSuggestionCount"] = function getSuggestionCount() {
  return length;
};
prototype["getSuggestions"] = function getSuggestions() {
  const entries = Object.entries(closure_4);
  return entries.map((item) => {
    [, tmp] = item;
    return tmp;
  });
};
prototype["getSuggestion"] = function getSuggestion(id) {
  return dependencyMap[id];
};
FriendSuggestionStore.displayName = "FriendSuggestionStore";
const friendSuggestionStore = new FriendSuggestionStore(DispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen(friendSuggestionCount) {
    closure_4 = {};
    friendSuggestionCount = friendSuggestionCount.friendSuggestionCount;
    if (friendSuggestionCount > 0) {
      c7 = true;
      let flag2 = !c6;
      if (!c6) {
        flag2 = true;
      }
      if (flag2) {
        c6 = true;
        c7 = false;
        const response = FriendSuggestionActionCreatorsDefault.fetch();
      }
    } else {
      maybeDispatchDevOnlyDummyFriendSuggestionsDefault();
    }
  },
  FRIEND_SUGGESTION_CREATE: function handleFriendSuggestionCreate(suggestion) {
    suggestion = suggestion.suggestion;
    if (null != suggestion.contact_names) {
      if (suggestion.contact_names.length >= 2) {
        const contact_names = suggestion.contact_names;
        const substr = contact_names.slice(0, 2);
      }
      let obj = { key: suggestion.suggested_user.id, name: null, user: null, mutualFriendsCount: null, contactNames: null };
      const firstResult = _modDef12.first(suggestion.reasons);
      let name;
      if (firstResult != null) {
        name = firstResult.name;
      }
      obj.name = name;
      const tmp9 = new UserRecord(suggestion.suggested_user);
      obj.user = tmp9;
      obj.mutualFriendsCount = suggestion.mutual_friends_count;
      obj.contactNames = [];
      if (null != dependencyMap[obj.key]) {
        return false;
      } else {
        obj = {};
        const merged = Object.assign(dependencyMap);
        obj[obj.key] = obj;
        dependencyMap = obj;
      }
    }
  },
  FRIEND_SUGGESTION_DELETE: function handleFriendSuggestionDelete(arg0) {
    const diff = length - 1;
    length = Math.max(0, diff);
    delete tmp2[tmp];
  },
  LOAD_FRIEND_SUGGESTIONS_SUCCESS: function handleLoadFriendSuggestionsSuccess(suggestions) {
    c6 = false;
    const mapped = _modDef12.chain(suggestions.suggestions).map((contact_names) => {
      if (null != contact_names.contact_names) {
        if (contact_names.contact_names.length >= 2) {
          contact_names = contact_names.contact_names;
          const substr = contact_names.slice(0, 2);
        }
        const obj = { key: contact_names.suggested_user.id, name: null, user: null, mutualFriendsCount: null, contactNames: null };
        const firstResult = _modDef12.first(contact_names.reasons);
        let name;
        if (firstResult != null) {
          name = firstResult.name;
        }
        obj.name = name;
        const tmp9 = new UserRecord(contact_names.suggested_user);
        obj.user = tmp9;
        obj.mutualFriendsCount = contact_names.mutual_friends_count;
        obj.contactNames = [];
        return obj;
      }
    });
    const chainResult = _modDef12.chain(suggestions.suggestions);
    closure_4 = mapped.keyBy((key) => key.key).value();
    const iter = mapped.keyBy((key) => key.key);
    _modDef12.keys(closure_4).length;
  },
  LOAD_FRIEND_SUGGESTIONS_FAILURE: function handleLoadFriendSuggestionsFailure() {
    c6 = false;
    closure_4 = {};
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/friend_suggestions/FriendSuggestionStore.tsx");

export default friendSuggestionStore;
export const transformFriendSuggestions = function transformFriendSuggestions(arg0) {
  const mapped = _modDef12.chain(arg0).map((contact_names) => {
    if (null != contact_names.contact_names) {
      if (contact_names.contact_names.length >= 2) {
        contact_names = contact_names.contact_names;
        const substr = contact_names.slice(0, 2);
      }
      const obj = { key: contact_names.suggested_user.id, name: null, user: null, mutualFriendsCount: null, contactNames: null };
      const firstResult = _modDef12.first(contact_names.reasons);
      let name;
      if (firstResult != null) {
        name = firstResult.name;
      }
      obj.name = name;
      const tmp9 = new UserRecord(contact_names.suggested_user);
      obj.user = tmp9;
      obj.mutualFriendsCount = contact_names.mutual_friends_count;
      obj.contactNames = [];
      return obj;
    }
  });
  const chainResult = _modDef12.chain(arg0);
  return mapped.keyBy((key) => key.key).value();
};