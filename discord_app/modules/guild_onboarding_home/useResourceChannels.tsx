// discord_app/modules/guild_onboarding_home/useResourceChannels.tsx
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp7;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(3);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildOnboardingHomeSettingsStore, ChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function s() {
          let channel;
          const resourceChannels = GuildOnboardingHomeSettingsStore.getResourceChannels(closure_0);
          return resourceChannels.filter((channelId) => null != channel.getChannel(channelId.channelId));
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = tmp(573);
      return tmpResult.useStateFromStoresArray(first, tmp7);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [GuildOnboardingHomeSettingsStore, ChannelStore];
      const obj = require("useStateFromStores");
      return obj.useStateFromStoresArray(items, () => {
        let channel;
        const resourceChannels = GuildOnboardingHomeSettingsStore.getResourceChannels(closure_0);
        return resourceChannels.filter((channelId) => null != channel.getChannel(channelId.channelId));
      });
    };
const result = size.fileFinishedImporting("modules/guild_onboarding_home/useResourceChannels.tsx");

export default tmp2;
