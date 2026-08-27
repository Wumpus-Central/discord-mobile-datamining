// === Module 12107: useWelcomeScreenEnabled ===

// Module 12107 (useWelcomeScreenEnabled)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import createChannelRecord from "createChannelRecord" /* 1395 */;
import closure_3 from "ensureGuildLoaded" /* 1391 */;
import closure_4 from "createGuildRecordFromRust" /* 1910 */;
import closure_5 from "handleConnectionOpen" /* 1981 */;

const isGuildTextChannelType = createChannelRecord.isGuildTextChannelType;
const GuildFeatures = ME.GuildFeatures;
const result = set.fileFinishedImporting("modules/welcome_screen/useWelcomeScreenEnabled.tsx");

export default function useWelcomeScreenEnabled(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  const items = [closure_3, closure_4, closure_5];
  return _require(589).useStateFromStores(items, () => {
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