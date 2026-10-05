// discord_app/modules/search/native/hooks/useSearchContext.tsx
import _modDef38 from "../../../../../_runtime/metro/00038__.js";
import react2 from "../../../../../_runtime/00576_react.js";
import Constants from "../../../../Constants.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const SearchTypes = Constants.SearchTypes;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let tmp2;
      const obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] !== guildId) {
        const obj2 = { type: SearchTypes.GUILD, guildId };
        cResult[0] = guildId;
        cResult[1] = obj2;
        tmp2 = obj2;
      } else {
        tmp2 = cResult[1];
      }
      return tmp2;
    }
  : (guildId) => {
      const items = [guildId];
      return react.useMemo(() => ({ type: SearchTypes.GUILD, guildId }), items);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId, channelId) => {
      const obj = react2;
      const cResult = obj.c(3);
      if (cResult[0] === channelId) {
        let tmp2;
        if (cResult[1] === guildId) {
          tmp2 = cResult[2];
        }
        return tmp2;
      }
      const obj2 = { type: SearchTypes.GUILD_CHANNEL, guildId, channelId };
      cResult[0] = channelId;
      cResult[1] = guildId;
      cResult[2] = obj2;
      tmp2 = obj2;
    }
  : (guildId, channelId) => {
      const items = [guildId, channelId];
      return react.useMemo(() => ({ type: SearchTypes.GUILD_CHANNEL, guildId, channelId }), items);
    };
ReactCompilerGating = ReactCompilerGating_mod;
function getChannelDetailsSearchContext(channelId, guildId, isThreadResult) {
  let obj;
  const tmp = isThreadResult;
  if (tmp) {
    _modDef38(null != guildId, "[useChannelDetailsSearchContext] Thread must have a guild id");
    obj = { type: SearchTypes.THREAD, guildId, channelId };
    const obj2 = { type: SearchTypes.THREAD, guildId, channelId };
  } else if (null == guildId) {
    obj = { type: SearchTypes.CHANNEL, channelId };
    const obj3 = { type: SearchTypes.CHANNEL, channelId };
  } else {
    obj = { type: SearchTypes.GUILD_CHANNEL, guildId, channelId };
  }
  return obj;
}
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId, guildId) => {
      let first;
      let obj4;
      let tmp6;
      _require = channelId;
      const obj = require("react");
      const cResult = obj.c(7);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        const fn = function o() {
          const channel = ChannelStore.getChannel(channelId);
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
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(573);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      if (cResult[3] === channelId) {
        if (cResult[4] === guildId) {
          let tmp8;
          if (cResult[5] === stateFromStores) {
            tmp8 = cResult[6];
          }
          return tmp8;
        }
      }
      if (stateFromStores) {
        _modDef38(null != guildId, "[useChannelDetailsSearchContext] Thread must have a guild id");
        obj4 = { type: SearchTypes.THREAD, guildId, channelId };
        const obj2 = { type: SearchTypes.THREAD, guildId, channelId };
      } else if (null == guildId) {
        obj4 = { type: SearchTypes.CHANNEL, channelId };
        const obj3 = { type: SearchTypes.CHANNEL, channelId };
      } else {
        obj4 = { type: SearchTypes.GUILD_CHANNEL, guildId, channelId };
      }
      cResult[3] = channelId;
      cResult[4] = guildId;
      cResult[5] = stateFromStores;
      cResult[6] = obj4;
      tmp8 = obj4;
    }
  : (channelId, guildId) => {
      let stateFromStores;
      _require = channelId;
      let obj = require("useStateFromStores");
      const items = [ChannelStore];
      stateFromStores = obj.useStateFromStores(items, () => {
        const channel = ChannelStore.getChannel(channelId);
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
      return react.useMemo(() => {
        let obj;
        if (stateFromStores) {
          _modDef38(null != guildId, "[useChannelDetailsSearchContext] Thread must have a guild id");
          obj = { type: SearchTypes.THREAD, guildId, channelId };
          const obj2 = { type: SearchTypes.THREAD, guildId, channelId };
        } else if (null == guildId) {
          obj = { type: SearchTypes.CHANNEL, channelId };
          const obj3 = { type: SearchTypes.CHANNEL, channelId };
        } else {
          obj = { type: SearchTypes.GUILD_CHANNEL, guildId, channelId };
        }
        return obj;
      }, items1);
    };
const result = size.fileFinishedImporting("modules/search/native/hooks/useSearchContext.tsx");

export const useGuildSearchContext = tmp2;
export const useGuildChannelSearchContext = tmp3;
export { getChannelDetailsSearchContext };
export const useChannelDetailsSearchContext = tmp4;
