// === Module 12429: useWelcomeScreenEnabled ===

// Module 12429 (useWelcomeScreenEnabled)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import createChannelRecord from "createChannelRecord" /* 1390 */;
import closure_3 from "ensureGuildLoaded" /* 1386 */;
import closure_4 from "createGuildRecordFromRust" /* 1908 */;
import closure_5 from "handleConnectionOpen" /* 1980 */;

const isGuildTextChannelType = createChannelRecord.isGuildTextChannelType;
const GuildFeatures = ME.GuildFeatures;
const result = set.fileFinishedImporting("modules/welcome_screen/useWelcomeScreenEnabled.tsx");

export default function useWelcomeScreenEnabled(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  const items = [closure_3, closure_4, closure_5];
  return _require(586).useStateFromStores(items, () => {
    const guild = closure_1_4.getGuild(closure_1);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(closure_1_6.WELCOME_SCREEN_ENABLED);
    }
    if (true === hasItem) {
      const features2 = guild.features;
      if (features2.has(closure_1_6.COMMUNITY)) {
        const features3 = guild.features;
        if (features3.has(tmp5.GUILD_SERVER_GUIDE)) {
          return false;
        } else {
          const channel = closure_1_3.getChannel(closure_0);
          let tmp9 = closure_0 === closure_1_5.getChannelId(closure_1) && null != channel && channel.getGuildId() === guild.id;
          if (tmp9) {
            tmp9 = closure_1_2(channel.type);
          }
          return tmp9;
        }
      }
      tmp5 = closure_1_6;
    }
    return false;
  });
};