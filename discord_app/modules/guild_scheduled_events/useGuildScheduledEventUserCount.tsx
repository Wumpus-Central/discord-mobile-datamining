// discord_app/modules/guild_scheduled_events/useGuildScheduledEventUserCount.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import noop from "../../../_runtime/00019_noop.js";
import scheduledEventSort from "GuildScheduledEventStore.tsx";

const useEffect = noop.useEffect;
const result = obj132.fileFinishedImporting("modules/guild_scheduled_events/useGuildScheduledEventUserCount.tsx");

export default function useGuildScheduledEventUserCount(arg0, arg1, arg2) {
  const _require = arg0;
  closure_1 = arg1;
  dependencyMap = arg2;
  let items = [closure_4];
  let items1 = [arg1, arg0, arg2];
  const stateFromStores = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => closure_1_4.getUserCount(closure_1, closure_2));
  useEffect(() => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = null != callback;
    }
    if (tmp2) {
      if (null != table) {
        const items = [tmp7];
        let items1 = items;
      } else {
        items1 = [];
      }
      const guildEventUserCounts = callback(table[3]).getGuildEventUserCounts(closure_0, callback, items1);
      const obj = callback(table[3]);
    }
  }, items1);
  return stateFromStores;
};