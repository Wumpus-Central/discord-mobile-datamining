// discord_app/modules/welcome_screen/useWelcomeScreenEnabled.tsx
import Constants from "../../Constants.tsx";
import ChannelRecord from "../../records/ChannelRecord.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const isGuildTextChannelType = ChannelRecord.isGuildTextChannelType;
const GuildFeatures = Constants.GuildFeatures;
const result = size.fileFinishedImporting("modules/welcome_screen/useWelcomeScreenEnabled.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useWelcomeScreenEnabled(arg0, arg1) {
      _require = arg0;
      dependencyMap = arg1;
      const cResult = require("c").c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore, GuildStore, SelectedChannelStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg0) {
        if (cResult[2] === arg1) {
          let tmp8 = cResult[3];
        }
        return tmp(504).useStateFromStores(first, tmp8);
      }
      const fn = function f() {
        guild = GuildStore.getGuild(closure_1);
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
              let tmp9 =
                closure_0 === SelectedChannelStore.getChannelId(closure_1) &&
                null != channel &&
                channel.getGuildId() === guild.id;
              if (tmp9) {
                tmp9 = isGuildTextChannelType(channel.type);
              }
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
      const obj = require("c");
      tmp = _require;
    }
  : function useWelcomeScreenEnabled(arg0, arg1) {
      _require = arg0;
      dependencyMap = arg1;
      const items = [ChannelStore, GuildStore, SelectedChannelStore];
      return require("initialize").useStateFromStores(items, () => {
        guild = GuildStore.getGuild(closure_1);
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
              let tmp9 =
                closure_0 === SelectedChannelStore.getChannelId(closure_1) &&
                null != channel &&
                channel.getGuildId() === guild.id;
              if (tmp9) {
                tmp9 = isGuildTextChannelType(channel.type);
              }
              return tmp9;
            }
          }
        }
        return false;
      });
    };
