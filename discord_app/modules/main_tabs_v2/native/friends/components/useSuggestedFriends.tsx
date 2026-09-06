// discord_app/modules/main_tabs_v2/native/friends/components/useSuggestedFriends.tsx
import _modDef12 from "../../../../../../_runtime/metro/00012__.js";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import FriendSuggestionStore from "../../../../friend_suggestions/FriendSuggestionStore.tsx";

const require = fn;
const SuggestedFriendSource = fn(12699).SuggestedFriendSource;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/useSuggestedFriends.tsx");

export default function useSuggestedFriends(arg0) {
  let obj = arg0;
  if (arg0 == null) {
    obj = {};
  }
  let flag = obj.isConnected;
  const items = [FriendSuggestionStore];
  stateFromStoresArray = stateFromStoresArray(flag[4]).useStateFromStoresArray(items, () =>
    suggestions.getSuggestions(),
  );
  const tmp = _slicedToArray(noop.useState([]), 2);
  const added = tmp[0];
  if (flag == null) {
    flag = true;
  }
  const items1 = [added, stateFromStoresArray, flag];
  const memo = noop.useMemo(() => {
    if (flag) {
      const found = first.filter((source) => source.source === constants.USER_SUGGESTIONS);
      const mapped = stateFromStoresArray.map((user) => {
        const obj = {
          user: user.user,
          friendSuggestionName: null,
          source: constants.USER_SUGGESTIONS,
          contactNames: user.contactNames,
        };
        const name = user.name;
        obj.friendSuggestionName = name;
        return obj;
      });
      return _modDef12
        .unionBy(found, mapped, (user) => user.user.id)
        .sort((user, user2) => {
          const name = added(4404).getName(user.user);
          const obj = added(4404);
          return name.localeCompare(added(4404).getName(user2.user));
        });
    } else {
      return [];
    }
  }, items1);
  obj = {
    added,
    setAdded: tmp[1],
    friendSuggestions: memo,
    numFriendSuggestions: flag ? memo.length : stateFromStoresArray.length,
  };
  return obj;
}
