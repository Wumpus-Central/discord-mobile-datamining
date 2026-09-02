// === Module 15868: useSuggestedFriends ===

// Module 15868 (useSuggestedFriends)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "initialize" /* 7416 */;
import { SuggestedFriendSource } from "SuggestedFriendSource" /* 12461 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/friends/components/useSuggestedFriends.tsx");

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
      const found = first.filter((source) => source.source === constants.USER_SUGGESTIONS);
      const mapped = stateFromStoresArray.map((user) => {
        const obj = { user: user.user, friendSuggestionName: name, source: constants.USER_SUGGESTIONS, contactNames: user.contactNames };
        name = user.name;
        return obj;
      });
      let obj = first(flag[5]);
      return first(flag[5]).unionBy(found, mapped, (user) => user.user.id).sort((user, user2) => {
        const name = callback(4322).getName(user.user);
        const obj = callback(4322);
        return name.localeCompare(callback(4322).getName(user2.user));
      });
    } else {
      return [];
    }
  }, items1);
  obj = { added: first, setAdded: tmp[1], friendSuggestions: memo, numFriendSuggestions: flag ? memo.length : stateFromStoresArray.length };
  return obj;
};