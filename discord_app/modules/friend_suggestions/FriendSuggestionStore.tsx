import createdAt from "createdAt";
import mergeGuildAvatar from "mergeGuildAvatar";
import { Store } from "initialize";

let closure_4 = {};
let c5 = 0;
let c6 = false;
let c7 = false;
class FriendSuggestionStore extends Store {
}
const prototype = FriendSuggestionStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(mergeGuildAvatar);
};
prototype["getSuggestionCount"] = function getSuggestionCount() {
  return c5;
};
prototype["getSuggestions"] = function getSuggestions() {
  const entries = Object.entries(closure_4);
  return entries.map((arg0) => {
    let tmp;
    [, tmp] = arg0;
    return tmp;
  });
};
prototype["getSuggestion"] = function getSuggestion(id) {
  return table[id];
};
FriendSuggestionStore.displayName = "FriendSuggestionStore";
const friendSuggestionStore = new FriendSuggestionStore(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen(friendSuggestionCount) {
    let closure_4 = {};
    friendSuggestionCount = friendSuggestionCount.friendSuggestionCount;
    if (friendSuggestionCount > 0) {
      let c7 = true;
      let flag2 = !c6;
      if (!c6) {
        flag2 = true;
      }
      if (flag2) {
        c6 = true;
        c7 = false;
        const response = importDefault(7032).fetch();
        const obj = importDefault(7032);
      }
    } else {
      importDefault(7033)();
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
      const firstResult = importDefault(12).first(suggestion.reasons);
      let name;
      if (firstResult != null) {
        name = firstResult.name;
      }
      obj[1] = name;
      const tmp9 = new createdAt(suggestion.suggested_user);
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
      const obj2 = importDefault(12);
    }
  },
  FRIEND_SUGGESTION_DELETE: function handleFriendSuggestionDelete(arg0) {
    const diff = closure_5 - 1;
    closure_5 = diff;
    closure_5 = Math.max(0, diff);
    delete tmp2[tmp];
  },
  LOAD_FRIEND_SUGGESTIONS_SUCCESS: function handleLoadFriendSuggestionsSuccess(suggestions) {
    let c6 = false;
    let obj = importDefault(12);
    const mapped = importDefault(12).chain(suggestions.suggestions).map((contact_names) => {
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
        const tmp9 = new createdAt(contact_names.suggested_user);
        obj[2] = tmp9;
        obj[3] = contact_names.mutual_friends_count;
        obj[4] = [];
        return obj;
      }
    });
    const chainResult = importDefault(12).chain(suggestions.suggestions);
    let closure_4 = mapped.keyBy((key) => key.key).value();
    const iter = mapped.keyBy((key) => key.key);
    importDefault(12).keys(closure_4).length;
  },
  LOAD_FRIEND_SUGGESTIONS_FAILURE: function handleLoadFriendSuggestionsFailure() {
    let c6 = false;
    let closure_4 = {};
  }
});
const result = require("apply").fileFinishedImporting("modules/friend_suggestions/FriendSuggestionStore.tsx");

export default friendSuggestionStore;
export const transformFriendSuggestions = function transformFriendSuggestions(arg0) {
  const obj = importDefault(12);
  const mapped = importDefault(12).chain(arg0).map((contact_names) => {
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
      const tmp9 = new createdAt(contact_names.suggested_user);
      obj[2] = tmp9;
      obj[3] = contact_names.mutual_friends_count;
      obj[4] = [];
      return obj;
    }
  });
  const chainResult = importDefault(12).chain(arg0);
  return mapped.keyBy((key) => key.key).value();
};