// === Module 11951: useSearchContext ===

// Module 11951 (useSearchContext)
import _modDef38 from "module_38" /* 38 */;
import c from "c" /* 576 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2064 */;

const require = globalThis.__r;

require = fn;
const SearchTypes = fn(1085).SearchTypes;
fn(558);
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGuildSearchContext(guildId) {
  const cResult = c.c(2);
  if (cResult[0] !== guildId) {
    const obj2 = { type: SearchTypes.GUILD, guildId };
    cResult[0] = guildId;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : (function useGuildSearchContext(guildId) {
  const items = [guildId];
  return noop.useMemo(() => ({ type: SearchTypes.GUILD, guildId }), items);
});
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGuildChannelSearchContext(guildId, channelId) {
  const cResult = c.c(3);
  if (cResult[0] === channelId) {
    if (cResult[1] === guildId) {
      let tmp2 = cResult[2];
    }
    return tmp2;
  }
  const obj2 = { type: SearchTypes.GUILD_CHANNEL, guildId, channelId };
  cResult[0] = channelId;
  cResult[1] = guildId;
  cResult[2] = obj2;
  tmp2 = obj2;
}) : (function useGuildChannelSearchContext(guildId, channelId) {
  const items = [guildId, channelId];
  return noop.useMemo(() => ({ type: SearchTypes.GUILD_CHANNEL, guildId, channelId }), items);
});
function getChannelDetailsSearchContext(channelId, guildId, isThreadResult) {
  if (isThreadResult) {
    _modDef38(null != guildId, "[useChannelDetailsSearchContext] Thread must have a guild id");
    const obj2 = { type: SearchTypes.THREAD, guildId, channelId };
    let obj = obj2;
  } else if (null == guildId) {
    const obj3 = { type: SearchTypes.CHANNEL, channelId };
    obj = obj3;
  } else {
    obj = { type: SearchTypes.GUILD_CHANNEL, guildId, channelId };
  }
  return obj;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/hooks/useSearchContext.tsx");

export const useGuildSearchContext = tmp2;
export const useGuildChannelSearchContext = tmp3;
export { getChannelDetailsSearchContext };
export const useChannelDetailsSearchContext = ReactCompilerGating.isReactCompilerEnabled() ? (function useChannelDetailsSearchContext(channelId, guildId) {
  _require = channelId;
  let obj = dependencyMap;
  const cResult = require("c").c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function h() {
      const channel = ChannelStore.getChannel(closure_0);
      let flag;
      if (channel != null) {
        flag = channel.isThread();
      }
      if (flag == null) {
        flag = false;
      }
      return flag;
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[2];
  }
  const obj2 = require("c");
  const stateFromStores = require("useStateFromStores").useStateFromStores(first, tmp5);
  if (cResult[3] === channelId) {
    if (cResult[4] === guildId) {
      if (cResult[5] === stateFromStores) {
        return cResult[6];
      }
    }
  }
  let tmp7 = null;
  if (stateFromStores) {
    tmp7 = tmp7 != guildId;
    _modDef38(tmp7, "[useChannelDetailsSearchContext] Thread must have a guild id");
    obj = { type: SearchTypes.THREAD, guildId, channelId };
    let obj4 = obj;
  } else if (tmp7 == guildId) {
    const obj3 = { type: SearchTypes.CHANNEL, channelId };
    obj4 = obj3;
  } else {
    obj4 = { type: SearchTypes.GUILD_CHANNEL, guildId, channelId };
  }
  cResult[3] = channelId;
  cResult[4] = guildId;
  cResult[5] = stateFromStores;
  cResult[6] = obj4;
  const tmpResult = require("useStateFromStores");
}) : (function useChannelDetailsSearchContext(channelId, guildId) {
  _require = channelId;
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
      _modDef38(null != guildId, "[useChannelDetailsSearchContext] Thread must have a guild id");
      const obj2 = { type: SearchTypes.THREAD, guildId, channelId };
      let obj = obj2;
    } else if (null == guildId) {
      const obj3 = { type: SearchTypes.CHANNEL, channelId };
      obj = obj3;
    } else {
      obj = { type: SearchTypes.GUILD_CHANNEL, guildId, channelId };
    }
    return obj;
  }, items1);
});