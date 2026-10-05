// discord_app/modules/friend_suggestions/FriendSuggestionStore.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import FriendSuggestionActionCreatorsDefault from "FriendSuggestionActionCreators.tsx";
import maybeDispatchDevOnlyDummyFriendSuggestionsDefault from "maybeDispatchDevOnlyDummyFriendSuggestions.tsx";
import UserRecord from "../../records/UserRecord.tsx";
import UserStore from "../../stores/UserStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_4;

const f94412 = function (contact_names) {
  let name;
  let tmp7;
  if (null != contact_names.contact_names) {
    if (contact_names.contact_names.length >= 2) {
      contact_names = contact_names.contact_names;
      const substr = contact_names.slice(0, 2);
    }
    const obj = {
      key: contact_names.suggested_user.id,
      name,
      user: tmp7,
      mutualFriendsCount: contact_names.mutual_friends_count,
      contactNames: [],
    };
    const obj2 = _modDef12;
    const firstResult = obj2.first(contact_names.reasons);
    name = undefined;
    if (firstResult != null) {
      name = firstResult.name;
    }
    const self = this;
    const self2 = this;
    tmp7 = new UserRecord(contact_names.suggested_user);
    return obj;
  }
};
const f94413 = (key) => key.key;
const React3 = {};
let friendSuggestionCount = 0;
let c6 = false;
let c7 = false;
const Store = get_initializedDefault.Store;
class FriendSuggestionStore extends Store {
  initialize() {
    this.waitFor(UserStore);
  }
  getSuggestionCount() {
    return friendSuggestionCount;
  }
  getSuggestions() {
    const entries = Object.entries(closure_4);
    return entries.map((item) => {
      let tmp;
      [, tmp] = item;
      return tmp;
    });
  }
  getSuggestion(id) {
    return closure_4[id];
  }
}
const prototype = FriendSuggestionStore.prototype;
FriendSuggestionStore.displayName = "FriendSuggestionStore";
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen(friendSuggestionCount) {
    closure_4 = {};
    friendSuggestionCount = friendSuggestionCount.friendSuggestionCount;
    if (friendSuggestionCount > 0) {
      c7 = true;
      const tmp5 = !c6 && true;
      if (tmp5) {
        c6 = true;
        c7 = false;
        const obj = FriendSuggestionActionCreatorsDefault;
        const response = obj.fetch();
      }
    } else {
      maybeDispatchDevOnlyDummyFriendSuggestionsDefault();
    }
  },
  FRIEND_SUGGESTION_CREATE: function handleFriendSuggestionCreate(suggestion) {
    let name;
    let tmp7;
    suggestion = suggestion.suggestion;
    if (null != suggestion.contact_names) {
      if (suggestion.contact_names.length >= 2) {
        const contact_names = suggestion.contact_names;
        const substr = contact_names.slice(0, 2);
      }
      const obj = {
        key: suggestion.suggested_user.id,
        name,
        user: tmp7,
        mutualFriendsCount: suggestion.mutual_friends_count,
        contactNames: [],
      };
      const obj2 = _modDef12;
      const firstResult = obj2.first(suggestion.reasons);
      name = undefined;
      if (firstResult != null) {
        name = firstResult.name;
      }
      const self = this;
      const self2 = this;
      tmp7 = new UserRecord(suggestion.suggested_user);
      if (null != closure_4[obj.key]) {
        return false;
      } else {
        friendSuggestionCount = friendSuggestionCount + 1;
        const obj3 = {};
        const merged = Object.assign(closure_4);
        obj3[obj.key] = obj;
        closure_4 = obj3;
      }
    }
  },
  FRIEND_SUGGESTION_DELETE: function handleFriendSuggestionDelete(arg0) {
    const diff = friendSuggestionCount - 1;
    friendSuggestionCount = Math.max(0, diff);
    delete closure_4[arg0.suggestedUserId];
  },
  LOAD_FRIEND_SUGGESTIONS_SUCCESS: function handleLoadFriendSuggestionsSuccess(suggestions) {
    c6 = false;
    suggestions = suggestions.suggestions;
    let obj = _modDef12;
    const chainResult = obj.chain(suggestions);
    const mapped = chainResult.map(f94412);
    const iter = mapped.keyBy(f94413);
    closure_4 = iter.value();
    const obj3 = _modDef12;
    friendSuggestionCount = obj3.keys(closure_4).length;
  },
  LOAD_FRIEND_SUGGESTIONS_FAILURE: function handleLoadFriendSuggestionsFailure() {
    c6 = false;
    closure_4 = {};
  },
};
const friendSuggestionStore = new FriendSuggestionStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/friend_suggestions/FriendSuggestionStore.tsx");

export default friendSuggestionStore;
export const transformFriendSuggestions = function transformFriendSuggestions(arg0) {
  const obj = _modDef12;
  const chainResult = obj.chain(arg0);
  const mapped = chainResult.map(f94412);
  const iter = mapped.keyBy(f94413);
  return iter.value();
};
