// discord_app/modules/guild_scheduled_events/useInterestedEventUsers.tsx
import { useMemo } from "noop";
import scheduledEventSort from "scheduledEventSort";
import { GuildScheduledEventUserResponses as closure_4 } from "GUILD_EVENT_MAX_NAME_LENGTH";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

const result = require("GUILD_EVENT_MAX_NAME_LENGTH").fileFinishedImporting("modules/guild_scheduled_events/useInterestedEventUsers.tsx");

export default function useInterestedEventUsers(arg0, arg1) {
  const _require = arg0;
  const dependencyMap = arg1;
  let items = [stateFromStoresArray1];
  const items1 = [arg0];
  const stateFromStoresArray = _initialize.useStateFromStoresArray(items, () => Object.values(stateFromStoresArray1.getUsersForGuildEvent(closure_0, null)), items1);
  const obj = _initialize;
  const items2 = [stateFromStoresArray1];
  const items3 = [arg0, arg1];
  stateFromStoresArray1 = _initialize.useStateFromStoresArray(items2, () => Object.values(stateFromStoresArray1.getUsersForGuildEvent(closure_0, closure_1)), items3);
  const items4 = [stateFromStoresArray, stateFromStoresArray1];
  return stateFromStoresArray(() => {
    function addUserToAllInterested(user_id) {
      if (!set.has(user_id.user_id)) {
        items.push(user_id);
        set.add(user_id.user_id);
      }
    }
    let closure_0 = stateFromStoresArray1.reduce((arg0, user_id) => {
      arg0[user_id.user_id] = user_id;
      return arg0;
    }, {});
    const found = items.filter((arg0) => {
      let tmp2 = null == tmp;
      if (!tmp2) {
        tmp2 = tmp.response === outer1_4.INTERESTED;
      }
      return tmp2;
    });
    const found1 = stateFromStoresArray1.filter((response) => response.response === constants.INTERESTED);
    const set = new Set();
    items = [];
    const item = found.forEach(addUserToAllInterested);
    const item1 = found1.forEach(addUserToAllInterested);
    return items;
  }, items4);
};