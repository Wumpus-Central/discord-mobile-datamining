// === Module 14337: useGuildHeaderCounts ===

// Module 14337 (useGuildHeaderCounts)
import _mod12 from "module_12" /* 12 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import noop from "module_19" /* 19 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4748 */;
import GuildHeaderCountsStore from "GuildHeaderCountsStore" /* 14338 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_action_sheet/native/useGuildHeaderCounts.tsx");

export const useGuildHeaderCounts = function useGuildHeaderCounts(id) {
  _require = id;
  closure_129_0 = id;
  const items = [GuildMemberCountStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let num = GuildMemberCountStore.getMemberCount(closure_0);
    if (num == null) {
      num = 0;
    }
    return num;
  });
  closure_130_0 = "GUILD_HEADER_MEMBER_COUNT";
  closure_130_1 = id;
  closure_130_2 = stateFromStores;
  const items1 = ["GUILD_HEADER_MEMBER_COUNT", id];
  const memo = noop.useMemo(() => _mod12.throttle((count) => {
    DispatcherDefault.dispatch({ type, count, guildId });
  }, 3000), items1);
  closure_130_3 = memo;
  const items2 = [memo];
  const effect = noop.useEffect(() => () => closure_1_3.cancel(), items2);
  const items3 = [memo, stateFromStores];
  const effect1 = noop.useEffect(() => {
    if (dependencyMap > 0) {
      noop(tmp);
    }
  }, items3);
  const obj = require("initialize");
  const items4 = [GuildHeaderCountsStore];
  closure_131_0 = id;
  const stateFromStores1 = require("initialize").useStateFromStores(items4, () => GuildHeaderCountsStore.getMemberCount(closure_0));
  const obj2 = require("initialize");
  const items5 = [GuildMemberCountStore];
  const stateFromStores2 = require("initialize").useStateFromStores(items5, () => {
    let num = GuildMemberCountStore.getOnlineCount(closure_0);
    if (num == null) {
      num = 0;
    }
    return num;
  });
  closure_132_0 = "GUILD_HEADER_ONLINE_COUNT";
  closure_132_1 = id;
  closure_132_2 = stateFromStores2;
  const items6 = ["GUILD_HEADER_ONLINE_COUNT", id];
  const memo1 = noop.useMemo(() => _mod12.throttle((count) => {
    DispatcherDefault.dispatch({ type, count, guildId });
  }, 3000), items6);
  closure_132_3 = memo1;
  const items7 = [memo1];
  const effect2 = noop.useEffect(() => () => closure_1_3.cancel(), items7);
  const items8 = [memo1, stateFromStores2];
  const effect3 = noop.useEffect(() => {
    if (dependencyMap > 0) {
      noop(tmp);
    }
  }, items8);
  const obj3 = require("initialize");
  const items9 = [GuildHeaderCountsStore];
  const obj5 = { memberCount: stateFromStores1, onlineCount: require("initialize").useStateFromStores(items9, () => GuildHeaderCountsStore.getOnlineCount(closure_0)), activeChannelsCount: null };
  const obj4 = require("initialize");
  const items10 = [GuildHeaderCountsStore];
  obj5.activeChannelsCount = require("initialize").useStateFromStores(items10, () => GuildHeaderCountsStore.getActiveChannelsCount(closure_0));
  return obj5;
};