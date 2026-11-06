// === Module 9062: useGuildScheduledEventUserCount ===

// Module 9062 (useGuildScheduledEventUserCount)
import _mod19 from "module_19" /* 19 */;
import GuildScheduledEventManagerDefault from "GuildScheduledEventManager" /* 9063 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6935 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const useEffect = _mod19.useEffect;
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useGuildScheduledEventUserCount.tsx");

export default function useGuildScheduledEventUserCount(guild_id, id, recurrenceId) {
  _require = guild_id;
  closure_1 = id;
  dependencyMap = recurrenceId;
  items = [GuildScheduledEventStore];
  let items1 = [id, guild_id, recurrenceId];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildScheduledEventStore.getUserCount(closure_1, closure_2));
  useEffect(() => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = null != closure_1;
    }
    if (tmp2) {
      if (null != closure_2) {
        items = [tmp7];
        let items1 = items;
      } else {
        items1 = [];
      }
      const guildEventUserCounts = GuildScheduledEventManagerDefault.getGuildEventUserCounts(closure_0, closure_1, items1);
    }
  }, items1);
  return stateFromStores;
};