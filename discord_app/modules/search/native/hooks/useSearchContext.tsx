// discord_app/modules/search/native/hooks/useSearchContext.tsx
import noop from "noop";
import ensureGuildLoaded from "ensureGuildLoaded";
import { SearchTypes } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/search/native/hooks/useSearchContext.tsx");

export const useGuildSearchContext = function useGuildSearchContext(guildId) {
  let closure_0 = guildId;
  const items = [guildId];
  return React.useMemo(() => ({ type: outer1_5.GUILD, guildId: closure_0 }), items);
};
export const useGuildChannelSearchContext = function useGuildChannelSearchContext(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const items = [arg0, arg1];
  return React.useMemo(() => ({ type: outer1_5.GUILD_CHANNEL, guildId: closure_0, channelId: closure_1 }), items);
};
export const getChannelDetailsSearchContext = function getChannelDetailsSearchContext(id, guildId, isThreadResult) {
  if (isThreadResult) {
    require("../../../../../_runtime/metro/00038__.js")(null != guildId, "[useChannelDetailsSearchContext] Thread must have a guild id");
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
  let closure_1 = guildId;
  const items = [ensureGuildLoaded];
  stateFromStores = _require(stateFromStores[4]).useStateFromStores(items, () => {
    const channel = outer1_4.getChannel(closure_0);
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
      obj[0] = outer1_5.THREAD;
      obj[1] = tmp2;
      obj[2] = tmp;
    } else if (null == tmp2) {
      obj = { type: null, channelId: null };
      obj[0] = outer1_5.CHANNEL;
      obj[1] = tmp;
    } else {
      obj = { type: null, guildId: null, channelId: null };
      obj[0] = outer1_5.GUILD_CHANNEL;
      obj[1] = tmp2;
      obj[2] = tmp;
    }
    return obj;
  }, items1);
};