// discord_app/modules/guild_scheduled_events/useGuildScheduledEventUserCount.tsx
import _mod19 from "../../../_runtime/metro/00019__.js";
import GuildScheduledEventManagerDefault from "GuildScheduledEventManager.tsx";
import GuildScheduledEventStore from "GuildScheduledEventStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const useEffect = _mod19.useEffect;
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useGuildScheduledEventUserCount.tsx");

export default function useGuildScheduledEventUserCount(arg0, arg1, arg2) {
  _require = arg0;
  closure_1 = arg1;
  dependencyMap = arg2;
  let items = [GuildScheduledEventStore];
  let items1 = [arg1, arg0, arg2];
  const stateFromStores = require("initialize").useStateFromStores(items, () =>
    GuildScheduledEventStore.getUserCount(closure_1, closure_2),
  );
  useEffect(() => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = null != closure_1;
    }
    if (tmp2) {
      if (null != closure_2) {
        const items = [tmp7];
        let items1 = items;
      } else {
        items1 = [];
      }
      const guildEventUserCounts = GuildScheduledEventManagerDefault.getGuildEventUserCounts(
        closure_0,
        closure_1,
        items1,
      );
    }
  }, items1);
  return stateFromStores;
}
