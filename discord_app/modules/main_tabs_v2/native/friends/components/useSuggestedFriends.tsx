// === Module 15063: useSuggestedFriends ===

// Module 15063 (useSuggestedFriends)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import initialize from "initialize";
import { SuggestedFriendSource } from "SuggestedFriendSource";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/main_tabs_v2/native/friends/components/useSuggestedFriends.tsx");

export default function useSuggestedFriends(arg0) {
  let obj = arg0;
  if (arg0 == null) {
    obj = {};
  }
  let flag = obj.isConnected;
  const items = [initialize];
  stateFromStoresArray = stateFromStoresArray(flag[4]).useStateFromStoresArray(items, () => suggestions.getSuggestions());
  const tmp = callback(React.useState([]), 2);
  const first = tmp[0];
  if (flag == null) {
    flag = true;
  }
  const items1 = [first, stateFromStoresArray, flag];
  const memo = React.useMemo(() => {
    if (flag) {
      const found = first.filter((source) => source.source === constants.USER_SUGGESTIONS);
      const mapped = stateFromStoresArray.map((user) => {
        const obj = { user: user.user, friendSuggestionName: null, source: null, contactNames: null };
        const name = user.name;
        obj[1] = name;
        obj[2] = constants.USER_SUGGESTIONS;
        obj[3] = user.contactNames;
        return obj;
      });
      let obj = first(flag[5]);
      return first(flag[5]).unionBy(found, mapped, (user) => user.user.id).sort((user, user2) => {
        const name = callback(4032).getName(user.user);
        const obj = callback(4032);
        return name.localeCompare(callback(4032).getName(user2.user));
      });
    } else {
      return [];
    }
  }, items1);
  obj = { added: first, setAdded: tmp[1], friendSuggestions: memo, numFriendSuggestions: flag ? memo.length : stateFromStoresArray.length };
  return obj;
};