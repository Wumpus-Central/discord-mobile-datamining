// discord_app/modules/search/native/hooks/useSearchContext.tsx
import _modDef38 from "../../../../../_runtime/metro/00038__.js";
import noop from "../../../../../_runtime/00019_noop.js";
import ensureGuildLoaded from "../../../../stores/ChannelStore.tsx";
import { SearchTypes } from "../../../../Constants.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/search/native/hooks/useSearchContext.tsx");

export const useGuildSearchContext = function useGuildSearchContext(guildId) {
  closure_0 = guildId;
  const items = [guildId];
  return React.useMemo(() => ({ type: SearchTypes.GUILD, guildId: closure_0 }), items);
};
export const useGuildChannelSearchContext = function useGuildChannelSearchContext(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  const items = [arg0, arg1];
  return React.useMemo(() => ({ type: SearchTypes.GUILD_CHANNEL, guildId: closure_0, channelId: closure_1 }), items);
};
export const getChannelDetailsSearchContext = function getChannelDetailsSearchContext(channelId, guildId, isThreadResult) {
  if (isThreadResult) {
    _modDef38(null != guildId, "[useChannelDetailsSearchContext] Thread must have a guild id");
    let obj = { type: null, guildId: null, channelId: null };
    obj[0] = SearchTypes.THREAD;
    obj[1] = guildId;
    obj[2] = channelId;
  } else if (null == guildId) {
    obj = { type: null, channelId: null };
    obj[0] = SearchTypes.CHANNEL;
    obj[1] = channelId;
  } else {
    obj = { type: null, guildId: null, channelId: null };
    obj[0] = SearchTypes.GUILD_CHANNEL;
    obj[1] = guildId;
    obj[2] = channelId;
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
      guildId(stateFromStores[3])(null != guildId, "[useChannelDetailsSearchContext] Thread must have a guild id");
      let obj = { type: null, guildId: null, channelId: null };
      obj[0] = SearchTypes.THREAD;
      obj[1] = guildId;
      obj[2] = closure_0;
    } else if (null == guildId) {
      obj = { type: null, channelId: null };
      obj[0] = SearchTypes.CHANNEL;
      obj[1] = closure_0;
    } else {
      obj = { type: null, guildId: null, channelId: null };
      obj[0] = SearchTypes.GUILD_CHANNEL;
      obj[1] = guildId;
      obj[2] = closure_0;
    }
    return obj;
  }, items1);
};