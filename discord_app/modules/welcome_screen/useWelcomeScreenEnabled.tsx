// === Module 13603: useWelcomeScreenEnabled ===

// Module 13603 (useWelcomeScreenEnabled)
import Constants from "Constants" /* 1071 */;
import ChannelRecord from "ChannelRecord" /* 4865 */;
import ChannelStore from "ChannelStore" /* 4861 */;
import GuildStore from "GuildStore" /* 4883 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4915 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const isGuildTextChannelType = ChannelRecord.isGuildTextChannelType;
const GuildFeatures = Constants.GuildFeatures;
const result = size.fileFinishedImporting("modules/welcome_screen/useWelcomeScreenEnabled.tsx");

export default function useWelcomeScreenEnabled(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  items = [ChannelStore, GuildStore, SelectedChannelStore];
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
          let tmp9 = closure_0 === SelectedChannelStore.getChannelId(closure_1) && null != channel && channel.getGuildId() === guild.id;
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