// discord_app/modules/video_calls/native/useIsFiveButtonLayout.tsx
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let afkChannelId;
      let closure_0;
      let first;
      let tmp14;
      let tmp16;
      let tmp17;
      let tmp19;
      let tmp6;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(9);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function u() {
          return ChannelStore.getChannel(closure_0);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = require("get initialized");
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      const tmpResult3 = require("VoiceChatHooks");
      let isConnectedToVoiceChannel = tmpResult3.useIsConnectedToVoiceChannel(stateFromStores);
      let guild_id;
      if (stateFromStores != null) {
        guild_id = stateFromStores.guild_id;
      }
      if (guild_id == null) {
        guild_id = null;
      }
      let guild_id1;
      const tmp10 = guild_id(9080);
      if (stateFromStores != null) {
        guild_id1 = stateFromStores.guild_id;
      }
      if (guild_id1 == null) {
        guild_id1 = null;
      }
      let id;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      const tmp10Result = tmp10(guild_id1, id);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildStore];
        cResult[3] = items1;
        tmp14 = items1;
      } else {
        tmp14 = cResult[3];
      }
      if (cResult[4] !== guild_id) {
        const fn2 = function _() {
          return GuildStore.getGuild(guild_id);
        };
        const items2 = [guild_id];
        cResult[4] = guild_id;
        cResult[5] = fn2;
        cResult[6] = items2;
        tmp17 = items2;
        tmp16 = fn2;
      } else {
        tmp16 = cResult[5];
        tmp17 = cResult[6];
      }
      const tmpResult4 = require("get initialized");
      const stateFromStores1 = tmpResult4.useStateFromStores(tmp14, tmp16, tmp17);
      if (stateFromStores1 != null) {
        afkChannelId = stateFromStores1.afkChannelId;
      }
      if (cResult[7] !== stateFromStores) {
        let flag;
        if (stateFromStores != null) {
          flag = stateFromStores.isGuildVoice();
        }
        if (flag == null) {
          flag = false;
        }
        cResult[7] = stateFromStores;
        cResult[8] = flag;
        tmp19 = flag;
      } else {
        tmp19 = cResult[8];
      }
      let id1;
      const tmp9Result = guild_id(9081);
      if (stateFromStores != null) {
        id1 = stateFromStores.id;
      }
      const tmp9ResultResult = tmp9Result(id1);
      const tmp23 = guild_id(6774)();
      if (isConnectedToVoiceChannel) {
        isConnectedToVoiceChannel = tmp10Result;
      }
      if (isConnectedToVoiceChannel) {
        if (!tmp19) {
          tmp19 = tmp9ResultResult;
        }
        isConnectedToVoiceChannel = tmp19;
      }
      if (isConnectedToVoiceChannel) {
        isConnectedToVoiceChannel = !tmp23;
      }
      if (isConnectedToVoiceChannel) {
        isConnectedToVoiceChannel = afkChannelId !== arg0;
      }
      return isConnectedToVoiceChannel;
    }
  : (arg0) => {
      let afkChannelId;
      let closure_0;
      _require = arg0;
      const items = [ChannelStore];
      const obj = require("get initialized");
      const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(closure_0));
      const obj3 = require("VoiceChatHooks");
      let isConnectedToVoiceChannel = obj3.useIsConnectedToVoiceChannel(stateFromStores);
      let guild_id;
      const tmp = _require;
      if (stateFromStores != null) {
        guild_id = stateFromStores.guild_id;
      }
      if (guild_id == null) {
        guild_id = null;
      }
      let guild_id1;
      const tmp6 = guild_id(9080);
      if (stateFromStores != null) {
        guild_id1 = stateFromStores.guild_id;
      }
      if (guild_id1 == null) {
        guild_id1 = null;
      }
      let id;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      const items1 = [GuildStore];
      const items2 = [guild_id];
      const tmp6Result = tmp6(guild_id1, id);
      const tmpResult = tmp(504);
      const stateFromStores1 = tmpResult.useStateFromStores(items1, () => GuildStore.getGuild(guild_id), items2);
      if (stateFromStores1 != null) {
        afkChannelId = stateFromStores1.afkChannelId;
      }
      let flag;
      if (stateFromStores != null) {
        flag = stateFromStores.isGuildVoice();
      }
      if (flag == null) {
        flag = false;
      }
      let id1;
      const tmp5Result = guild_id(9081);
      if (stateFromStores != null) {
        id1 = stateFromStores.id;
      }
      const tmp5ResultResult = tmp5Result(id1);
      const tmp14 = guild_id(6774)();
      if (isConnectedToVoiceChannel) {
        isConnectedToVoiceChannel = tmp6Result;
      }
      if (isConnectedToVoiceChannel) {
        if (!flag) {
          flag = tmp5ResultResult;
        }
        isConnectedToVoiceChannel = flag;
      }
      if (isConnectedToVoiceChannel) {
        isConnectedToVoiceChannel = !tmp14;
      }
      if (isConnectedToVoiceChannel) {
        isConnectedToVoiceChannel = afkChannelId !== arg0;
      }
      return isConnectedToVoiceChannel;
    };
const result = size.fileFinishedImporting("modules/video_calls/native/useIsFiveButtonLayout.tsx");

export const useIsFiveButtonLayout = tmp2;
