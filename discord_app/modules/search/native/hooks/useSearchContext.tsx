// === Module 12299: useSearchContext ===

// Module 12299 (useSearchContext)
import _modDef38 from "module_38" /* 38 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;

const require = fn;
const SearchTypes = fn(1074).SearchTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/hooks/useSearchContext.tsx");

export const useGuildSearchContext = function useGuildSearchContext(guildId) {
  const items = [guildId];
  return noop.useMemo(() => ({ type: SearchTypes.GUILD, guildId }), items);
};
export const useGuildChannelSearchContext = function useGuildChannelSearchContext(guildId, channelId) {
  const items = [guildId, channelId];
  return noop.useMemo(() => ({ type: SearchTypes.GUILD_CHANNEL, guildId, channelId }), items);
};
export const getChannelDetailsSearchContext = function getChannelDetailsSearchContext(channelId, guildId, isThreadResult) {
  if (isThreadResult) {
    _modDef38(null != guildId, "[useChannelDetailsSearchContext] Thread must have a guild id");
    let obj = { type: SearchTypes.THREAD, guildId, channelId };
  } else if (null == guildId) {
    obj = { type: SearchTypes.CHANNEL, channelId };
  } else {
    obj = { type: SearchTypes.GUILD_CHANNEL, guildId, channelId };
  }
  return obj;
};
export const useChannelDetailsSearchContext = function useChannelDetailsSearchContext(channelId, guildId) {
  _require = channelId;
  closure_1 = guildId;
  const items = [ChannelStore];
  stateFromStores = require("useStateFromStores").useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(closure_0);
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
  return noop.useMemo(() => {
    if (stateFromStores) {
      _modDef38(null != tmp2, "[useChannelDetailsSearchContext] Thread must have a guild id");
      let obj = { type: SearchTypes.THREAD, guildId: tmp2, channelId: tmp };
    } else if (null == tmp2) {
      obj = { type: SearchTypes.CHANNEL, channelId: tmp };
    } else {
      obj = { type: SearchTypes.GUILD_CHANNEL, guildId: tmp2, channelId: tmp };
    }
    return obj;
  }, items1);
};