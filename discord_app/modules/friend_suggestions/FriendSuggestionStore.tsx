// === Module 7662: initialize ===

// Module 7662 (initialize)
import applyDefault from "apply" /* 12 */;
import initializeDefault from "initialize" /* 504 */;
import dispatcherDefault from "dispatcher" /* 573 */;
import _modDef7663 from "module_7663" /* 7663 */;
import maybeDispatchDevOnlyDummyFriendSuggestionsDefault from "maybeDispatchDevOnlyDummyFriendSuggestions" /* 7664 */;
import closure_2 from "createdAt" /* 1385 */;
import closure_3 from "mergeGuildAvatar" /* 1371 */;

let closure_4 = {};
let c5 = 0;
let c6 = false;
let c7 = false;
const Store = initializeDefault.Store;
class FriendSuggestionStore extends Store {
}
const prototype = FriendSuggestionStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_3);
};
prototype["getSuggestionCount"] = function getSuggestionCount() {
  return c5;
};
prototype["getSuggestions"] = function getSuggestions() {
  const entries = Object.entries(closure_4);
  return entries.map((arg0) => {
    [, tmp] = arg0;
    return tmp;
  });
};
prototype["getSuggestion"] = function getSuggestion(id) {
  return table[id];
};
FriendSuggestionStore.displayName = "FriendSuggestionStore";
const friendSuggestionStore = new FriendSuggestionStore(dispatcherDefault, {
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
        const response = _modDef7663.fetch();
        const obj = _modDef7663;
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
      let obj = { key: null, name: null, user: null, mutualFriendsCount: null, contactNames: null };
      obj[0] = suggestion.suggested_user.id;
      const firstResult = applyDefault.first(suggestion.reasons);
      let name;
      if (firstResult != null) {
        name = firstResult.name;
      }
      obj[1] = name;
      const tmp9 = new closure_2(suggestion.suggested_user);
      obj[2] = tmp9;
      obj[3] = suggestion.mutual_friends_count;
      obj[4] = [];
      if (null != obj[obj.key]) {
        return false;
      } else {
        closure_5 = closure_5 + 1;
        obj = {};
        const merged = Object.assign(obj);
        obj[obj.key] = obj;
      }
      const obj2 = applyDefault;
    }
  },
  FRIEND_SUGGESTION_DELETE: function handleFriendSuggestionDelete(arg0) {
    const diff = closure_5 - 1;
    closure_5 = diff;
    closure_5 = Math.max(0, diff);
    delete tmp2[tmp];
  },
  LOAD_FRIEND_SUGGESTIONS_SUCCESS: function handleLoadFriendSuggestionsSuccess(suggestions) {
    c6 = false;
    let obj = applyDefault;
    const mapped = applyDefault.chain(suggestions.suggestions).map((contact_names) => {
      if (null != contact_names.contact_names) {
        if (contact_names.contact_names.length >= 2) {
          contact_names = contact_names.contact_names;
          const substr = contact_names.slice(0, 2);
        }
        const obj = { key: null, name: null, user: null, mutualFriendsCount: null, contactNames: null };
        obj[0] = contact_names.suggested_user.id;
        const firstResult = callback(table[2]).first(contact_names.reasons);
        let name;
        if (firstResult != null) {
          name = firstResult.name;
        }
        obj[1] = name;
        const tmp9 = new closure_2(contact_names.suggested_user);
        obj[2] = tmp9;
        obj[3] = contact_names.mutual_friends_count;
        obj[4] = [];
        return obj;
      }
    });
    const chainResult = applyDefault.chain(suggestions.suggestions);
    closure_4 = mapped.keyBy((key) => key.key).value();
    const iter = mapped.keyBy((key) => key.key);
    applyDefault.keys(closure_4).length;
  },
  LOAD_FRIEND_SUGGESTIONS_FAILURE: function handleLoadFriendSuggestionsFailure() {
    c6 = false;
    closure_4 = {};
  }
});
const result = require("set").fileFinishedImporting("modules/friend_suggestions/FriendSuggestionStore.tsx");

export default friendSuggestionStore;
export const transformFriendSuggestions = function transformFriendSuggestions(arg0) {
  const obj = applyDefault;
  const mapped = applyDefault.chain(arg0).map((contact_names) => {
    if (null != contact_names.contact_names) {
      if (contact_names.contact_names.length >= 2) {
        contact_names = contact_names.contact_names;
        const substr = contact_names.slice(0, 2);
      }
      const obj = { key: null, name: null, user: null, mutualFriendsCount: null, contactNames: null };
      obj[0] = contact_names.suggested_user.id;
      const firstResult = callback(table[2]).first(contact_names.reasons);
      let name;
      if (firstResult != null) {
        name = firstResult.name;
      }
      obj[1] = name;
      const tmp9 = new closure_2(contact_names.suggested_user);
      obj[2] = tmp9;
      obj[3] = contact_names.mutual_friends_count;
      obj[4] = [];
      return obj;
    }
  });
  const chainResult = applyDefault.chain(arg0);
  return mapped.keyBy((key) => key.key).value();
};