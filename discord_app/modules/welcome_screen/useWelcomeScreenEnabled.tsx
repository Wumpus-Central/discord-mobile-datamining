// discord_app/modules/welcome_screen/useWelcomeScreenEnabled.tsx
import Constants from "../../Constants.tsx";
import ChannelRecord from "../../records/ChannelRecord.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

const isGuildTextChannelType = ChannelRecord.isGuildTextChannelType;
const GuildFeatures = Constants.GuildFeatures;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0;
      let closure_1;
      let first;
      _require = arg0;
      dependencyMap = arg1;
      const obj = require("react");
      const cResult = obj.c(4);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore, GuildStore, SelectedChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg0) {
        let tmp8;
        if (cResult[2] === arg1) {
          tmp8 = cResult[3];
        }
        const tmpResult = tmp(504);
        return tmpResult.useStateFromStores(first, tmp8);
      }
      const fn = function _() {
        const guild = GuildStore.getGuild(closure_1);
        let hasItem;
        if (guild != null) {
          const features = guild.features;
          hasItem = features.has(GuildFeatures.WELCOME_SCREEN_ENABLED);
        }
        if (true === hasItem) {
          const features2 = guild.features;
          if (features2.has(GuildFeatures.COMMUNITY)) {
            const features3 = guild.features;
            if (features3.has(GuildFeatures.GUILD_SERVER_GUIDE)) {
              return false;
            } else {
              const channel = ChannelStore.getChannel(closure_0);
              const tmp9 =
                closure_0 === SelectedChannelStore.getChannelId(closure_1) &&
                null != channel &&
                channel.getGuildId() === guild.id &&
                isGuildTextChannelType(channel.type);
              return tmp9;
            }
          }
        }
        return false;
      };
      cResult[1] = arg0;
      cResult[2] = arg1;
      cResult[3] = fn;
      tmp8 = fn;
    }
  : (arg0, arg1) => {
      let closure_0;
      let closure_1;
      _require = arg0;
      dependencyMap = arg1;
      const items = [ChannelStore, GuildStore, SelectedChannelStore];
      const obj = require("get initialized");
      return obj.useStateFromStores(items, () => {
        const guild = GuildStore.getGuild(closure_1);
        let hasItem;
        if (guild != null) {
          const features = guild.features;
          hasItem = features.has(GuildFeatures.WELCOME_SCREEN_ENABLED);
        }
        if (true === hasItem) {
          const features2 = guild.features;
          if (features2.has(GuildFeatures.COMMUNITY)) {
            const features3 = guild.features;
            if (features3.has(GuildFeatures.GUILD_SERVER_GUIDE)) {
              return false;
            } else {
              const channel = ChannelStore.getChannel(closure_0);
              const tmp9 =
                closure_0 === SelectedChannelStore.getChannelId(closure_1) &&
                null != channel &&
                channel.getGuildId() === guild.id &&
                isGuildTextChannelType(channel.type);
              return tmp9;
            }
          }
        }
        return false;
      });
    };
const result = size.fileFinishedImporting("modules/welcome_screen/useWelcomeScreenEnabled.tsx");

export default tmp2;
