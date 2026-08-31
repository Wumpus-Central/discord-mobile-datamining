// === Module 11833: useGuildSearchContext ===

// Module 11833 (useGuildSearchContext)
import _modDef38 from "module_38" /* 38 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "ensureGuildLoaded" /* 1387 */;
import { SearchTypes } from "ME" /* 676 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/search/native/hooks/useSearchContext.tsx");

export const useGuildSearchContext = function useGuildSearchContext(guildId) {
  closure_0 = guildId;
  const items = [guildId];
  return React.useMemo(() => ({ type: closure_1_5.GUILD, guildId: closure_0 }), items);
};
export const useGuildChannelSearchContext = function useGuildChannelSearchContext(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  const items = [arg0, arg1];
  return React.useMemo(() => ({ type: closure_1_5.GUILD_CHANNEL, guildId: closure_0, channelId: closure_1 }), items);
};
export const getChannelDetailsSearchContext = function getChannelDetailsSearchContext(id, guildId, isThreadResult) {
  if (isThreadResult) {
    _modDef38(null != guildId, "[useChannelDetailsSearchContext] Thread must have a guild id");
    let obj = { type: null, guildId: null, channelId: null };
    obj[0] = SearchTypes.THREAD;
    obj[1] = guildId;
    obj[2] = id;
  } else if (null == guildId) {
    obj = { type: null, channelId: null };
    obj[0] = SearchTypes.CHANNEL;
    obj[1] = id;
  } else {
    obj = { type: null, guildId: null, channelId: null };
    obj[0] = SearchTypes.GUILD_CHANNEL;
    obj[1] = guildId;
    obj[2] = id;
  }
  return obj;
};
export const useChannelDetailsSearchContext = function useChannelDetailsSearchContext(channelId, guildId) {
  const _require = channelId;
  closure_1 = guildId;
  const items = [closure_4];
  stateFromStores = _require(stateFromStores[4]).useStateFromStores(items, () => {
    const channel = closure_1_4.getChannel(closure_0);
    let flag;
    if (channel != null) {
      flag = channel.isThread();
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
  const items1 = [channelId, guildId, stateFromStores];
  return React.useMemo(() => {
    if (stateFromStores) {
      guildId(stateFromStores[3])(null != tmp2, "[useChannelDetailsSearchContext] Thread must have a guild id");
      let obj = { type: null, guildId: null, channelId: null };
      obj[0] = closure_1_5.THREAD;
      obj[1] = tmp2;
      obj[2] = tmp;
    } else if (null == tmp2) {
      obj = { type: null, channelId: null };
      obj[0] = closure_1_5.CHANNEL;
      obj[1] = tmp;
    } else {
      obj = { type: null, guildId: null, channelId: null };
      obj[0] = closure_1_5.GUILD_CHANNEL;
      obj[1] = tmp2;
      obj[2] = tmp;
    }
    return obj;
  }, items1);
};