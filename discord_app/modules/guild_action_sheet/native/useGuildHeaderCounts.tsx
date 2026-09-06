// === Module 13970: useGuildHeaderCounts ===

// Module 13970 (useGuildHeaderCounts)
import closure_3 from "noop" /* 19 */;
import closure_4 from "handleInviteData" /* 4480 */;
import closure_5 from "initialize" /* 13971 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_action_sheet/native/useGuildHeaderCounts.tsx");

export const useGuildHeaderCounts = function useGuildHeaderCounts(id) {
  let GUILD_HEADER_ONLINE_COUNT = id;
  let obj = GUILD_HEADER_ONLINE_COUNT(stateFromStores2[5]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let num = closure_1_4.getMemberCount(GUILD_HEADER_ONLINE_COUNT);
    if (num == null) {
      num = 0;
    }
    return num;
  });
  GUILD_HEADER_ONLINE_COUNT = "GUILD_HEADER_MEMBER_COUNT";
  closure_1 = id;
  stateFromStores2 = stateFromStores;
  let memo1;
  const items1 = ["GUILD_HEADER_MEMBER_COUNT", id];
  const memo = memo1.useMemo(() => GUILD_HEADER_ONLINE_COUNT(stateFromStores2[3]).throttle((count) => {
    let obj = closure_1_1(closure_1_2[4]);
    obj = { type: closure_0, count, guildId: closure_1 };
    obj.dispatch(obj);
  }, 3000), items1);
  memo1 = memo;
  const items2 = [memo];
  const effect = memo1.useEffect(() => () => closure_3.cancel(), items2);
  const items3 = [memo, stateFromStores];
  const effect1 = memo1.useEffect(() => {
    if (stateFromStores2 > 0) {
      memo1(tmp);
    }
  }, items3);
  const items4 = [closure_5];
  GUILD_HEADER_ONLINE_COUNT = id;
  const stateFromStores1 = GUILD_HEADER_ONLINE_COUNT(stateFromStores2[5]).useStateFromStores(items4, () => closure_1_5.getMemberCount(GUILD_HEADER_ONLINE_COUNT));
  const obj2 = GUILD_HEADER_ONLINE_COUNT(stateFromStores2[5]);
  const items5 = [closure_4];
  stateFromStores2 = GUILD_HEADER_ONLINE_COUNT(stateFromStores2[5]).useStateFromStores(items5, () => {
    let num = closure_1_4.getOnlineCount(GUILD_HEADER_ONLINE_COUNT);
    if (num == null) {
      num = 0;
    }
    return num;
  });
  GUILD_HEADER_ONLINE_COUNT = "GUILD_HEADER_ONLINE_COUNT";
  closure_1 = id;
  memo1 = undefined;
  const items6 = ["GUILD_HEADER_ONLINE_COUNT", id];
  memo1 = memo1.useMemo(() => GUILD_HEADER_ONLINE_COUNT(stateFromStores2[3]).throttle((count) => {
    let obj = closure_1_1(closure_1_2[4]);
    obj = { type: closure_0, count, guildId: closure_1 };
    obj.dispatch(obj);
  }, 3000), items6);
  const items7 = [memo1];
  const effect2 = memo1.useEffect(() => () => closure_3.cancel(), items7);
  const items8 = [memo1, stateFromStores2];
  const effect3 = memo1.useEffect(() => {
    if (stateFromStores2 > 0) {
      memo1(tmp);
    }
  }, items8);
  const obj3 = GUILD_HEADER_ONLINE_COUNT(stateFromStores2[5]);
  const items9 = [closure_5];
  obj = { memberCount: stateFromStores1, onlineCount: GUILD_HEADER_ONLINE_COUNT(stateFromStores2[5]).useStateFromStores(items9, () => closure_1_5.getOnlineCount(GUILD_HEADER_ONLINE_COUNT)), activeChannelsCount: null };
  const obj4 = GUILD_HEADER_ONLINE_COUNT(stateFromStores2[5]);
  const items10 = [closure_5];
  obj[2] = GUILD_HEADER_ONLINE_COUNT(stateFromStores2[5]).useStateFromStores(items10, () => closure_1_5.getActiveChannelsCount(GUILD_HEADER_ONLINE_COUNT));
  return obj;
};