// discord_app/modules/welcome_screen/useWelcomeScreenEnabled.tsx
import { isGuildTextChannelType } from "createChannelRecord";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import handleConnectionOpen from "handleConnectionOpen";
import { GuildFeatures } from "ME";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

const result = require("createGuildRecordFromRust").fileFinishedImporting("modules/welcome_screen/useWelcomeScreenEnabled.tsx");

export default function useWelcomeScreenEnabled(arg0, arg1) {
  const _require = arg0;
  const dependencyMap = arg1;
  const items = [ensureGuildLoaded, createGuildRecordFromRust, handleConnectionOpen];
  return _initialize.useStateFromStores(items, () => {
    const guild = outer1_4.getGuild(closure_1);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(outer1_6.WELCOME_SCREEN_ENABLED);
    }
    if (true === hasItem) {
      const features2 = guild.features;
      if (features2.has(outer1_6.COMMUNITY)) {
        const features3 = guild.features;
        if (features3.has(tmp5.GUILD_SERVER_GUIDE)) {
          return false;
        } else {
          const channel = outer1_3.getChannel(closure_0);
          let tmp9 = closure_0 === outer1_5.getChannelId(closure_1) && null != channel && channel.getGuildId() === guild.id;
          if (tmp9) {
            tmp9 = outer1_2(channel.type);
          }
          return tmp9;
        }
      }
      tmp5 = outer1_6;
    }
    return false;
  });
};