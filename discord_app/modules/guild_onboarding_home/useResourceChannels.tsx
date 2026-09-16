// === Module 16695: useResourceChannels ===

// Module 16695 (useResourceChannels)
import ChannelStore from "ChannelStore" /* 1958 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 4825 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/useResourceChannels.tsx");

export default function useResourceChannels(arg0) {
  _require = arg0;
  const items = [GuildOnboardingHomeSettingsStore, ChannelStore];
  return require("useStateFromStores").useStateFromStoresArray(items, () => {
    const resourceChannels = GuildOnboardingHomeSettingsStore.getResourceChannels(closure_0);
    return resourceChannels.filter((channelId) => null != channel.getChannel(channelId.channelId));
  });
};