// === Module 11828: useWelcomeScreenEnabled ===

// Module 11828 (useWelcomeScreenEnabled)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import createChannelRecord from "createChannelRecord" /* 1395 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import handleConnectionOpen from "handleConnectionOpen" /* 1979 */;

const isGuildTextChannelType = createChannelRecord.isGuildTextChannelType;
const GuildFeatures = ME.GuildFeatures;
const result = obj132.fileFinishedImporting("modules/welcome_screen/useWelcomeScreenEnabled.tsx");

export default function useWelcomeScreenEnabled(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  const items = [closure_3, closure_4, closure_5];
  return _require(589).useStateFromStores(items, () => {
    const guild = closure_1_4.getGuild(closure_1);
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
          const channel = closure_1_3.getChannel(closure_0);
          let tmp9 = closure_0 === closure_1_5.getChannelId(closure_1) && null != channel && channel.getGuildId() === guild.id;
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