// discord_app/modules/friend_suggestions/FriendSuggestionStore.tsx
import applyDefault from "../../../_runtime/00012_apply.js";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import _modDef5411 from "FriendSuggestionActionCreators.tsx";
import maybeDispatchDevOnlyDummyFriendSuggestionsDefault from "maybeDispatchDevOnlyDummyFriendSuggestions.tsx";
import createdAt from "../../records/UserRecord.tsx";
import mergeGuildAvatar from "../../stores/UserStore.tsx";

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
  return entries.map((item, index) => {
    [, tmp] = item;
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
        const response = _modDef5411.fetch();
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
    }
  },
  FRIEND_SUGGESTION_DELETE: function handleFriendSuggestionDelete(arg0) {
    const diff = closure_5 - 1;
    closure_5 = Math.max(0, diff);
    delete tmp2[tmp];
  },
  LOAD_FRIEND_SUGGESTIONS_SUCCESS: function handleLoadFriendSuggestionsSuccess(suggestions) {
    c6 = false;
    const mapped = applyDefault.chain(suggestions.suggestions).map((item, index) => {
      if (null != item.contact_names) {
        if (item.contact_names.length >= 2) {
          const contact_names = item.contact_names;
          const substr = contact_names.slice(0, 2);
        }
        const obj = { key: null, name: null, user: null, mutualFriendsCount: null, contactNames: null };
        obj[0] = item.suggested_user.id;
        const firstResult = callback(table[2]).first(item.reasons);
        let name;
        if (firstResult != null) {
          name = firstResult.name;
        }
        obj[1] = name;
        const tmp9 = new closure_2(item.suggested_user);
        obj[2] = tmp9;
        obj[3] = item.mutual_friends_count;
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
const result = require("obj132").fileFinishedImporting("modules/friend_suggestions/FriendSuggestionStore.tsx");

export default friendSuggestionStore;
export const transformFriendSuggestions = function transformFriendSuggestions(arg0) {
  const mapped = applyDefault.chain(arg0).map((item, index) => {
    if (null != item.contact_names) {
      if (item.contact_names.length >= 2) {
        const contact_names = item.contact_names;
        const substr = contact_names.slice(0, 2);
      }
      const obj = { key: null, name: null, user: null, mutualFriendsCount: null, contactNames: null };
      obj[0] = item.suggested_user.id;
      const firstResult = callback(table[2]).first(item.reasons);
      let name;
      if (firstResult != null) {
        name = firstResult.name;
      }
      obj[1] = name;
      const tmp9 = new closure_2(item.suggested_user);
      obj[2] = tmp9;
      obj[3] = item.mutual_friends_count;
      obj[4] = [];
      return obj;
    }
  });
  const chainResult = applyDefault.chain(arg0);
  return mapped.keyBy((key) => key.key).value();
};