// === Module 9791: useInterestedEventUsers ===

// Module 9791 (useInterestedEventUsers)
import _mod19 from "module_19" /* 19 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 1963 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7526 */;
import size from "module_2" /* 2 */;

const useMemo = _mod19.useMemo;
let closure_4 = GuildScheduledEventsConstants.GuildScheduledEventUserResponses;
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useInterestedEventUsers.tsx");

export default function useInterestedEventUsers(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  let items = [stateFromStoresArray1];
  const items1 = [arg0];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items, () => Object.values(GuildScheduledEventStore.getUsersForGuildEvent(closure_0, null)), items1);
  const obj = require("initialize");
  const items2 = [stateFromStoresArray1];
  const items3 = [arg0, arg1];
  stateFromStoresArray1 = require("initialize").useStateFromStoresArray(items2, () => Object.values(GuildScheduledEventStore.getUsersForGuildEvent(closure_0, closure_1)), items3);
  const items4 = [stateFromStoresArray, stateFromStoresArray1];
  return stateFromStoresArray(() => {
    function addUserToAllInterested(user_id) {
      if (!set.has(user_id.user_id)) {
        items.push(user_id);
        set.add(user_id.user_id);
      }
    }
    closure_0 = stateFromStoresArray1.reduce((acc, user_id) => {
      acc[user_id.user_id] = user_id;
      return acc;
    }, {});
    const found = stateFromStoresArray.filter((item) => {
      let tmp2 = null == tmp;
      if (!tmp2) {
        tmp2 = tmp.response === constants.INTERESTED;
      }
      return tmp2;
    });
    const found1 = stateFromStoresArray1.filter((response) => response.response === constants.INTERESTED);
    const set = new Set();
    const items = [];
    const item = found.forEach(addUserToAllInterested);
    const item1 = found1.forEach(addUserToAllInterested);
    return items;
  }, items4);
};