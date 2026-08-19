// === Module 15311: useSuggestedFriends ===

// Module 15311 (useSuggestedFriends)
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import initialize from "initialize" /* 5410 */;
import { SuggestedFriendSource } from "SuggestedFriendSource" /* 11872 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/friends/components/useSuggestedFriends.tsx");

export default function useSuggestedFriends(arg0) {
  let obj = arg0;
  if (arg0 == null) {
    obj = {};
  }
  let flag = obj.isConnected;
  const items = [closure_5];
  stateFromStoresArray = stateFromStoresArray(flag[4]).useStateFromStoresArray(items, () => suggestions.getSuggestions());
  const tmp = callback(React.useState([]), 2);
  const first = tmp[0];
  if (flag == null) {
    flag = true;
  }
  const items1 = [first, stateFromStoresArray, flag];
  const memo = React.useMemo(() => {
    if (flag) {
      const found = first.filter((item, index) => item.source === constants.USER_SUGGESTIONS);
      const mapped = stateFromStoresArray.map((item, index) => {
        const obj = { user: item.user, friendSuggestionName: name, source: constants.USER_SUGGESTIONS, contactNames: item.contactNames };
        name = item.name;
        return obj;
      });
      let obj = first(flag[5]);
      return first(flag[5]).unionBy(found, mapped, (user) => user.user.id).sort((user, user2) => {
        const name = callback(4219).getName(user.user);
        const obj = callback(4219);
        return name.localeCompare(callback(4219).getName(user2.user));
      });
    } else {
      return [];
    }
  }, items1);
  obj = { added: first, setAdded: tmp[1], friendSuggestions: memo, numFriendSuggestions: flag ? memo.length : stateFromStoresArray.length };
  return obj;
};