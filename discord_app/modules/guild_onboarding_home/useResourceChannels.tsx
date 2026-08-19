// discord_app/modules/guild_onboarding_home/useResourceChannels.tsx
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";
import handleSettingsLoadSuccess from "GuildOnboardingHomeSettingsStore.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/guild_onboarding_home/useResourceChannels.tsx");

export default function useResourceChannels(arg0) {
  const _require = arg0;
  const items = [closure_3, closure_2];
  return require("../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStoresArray(items, () => {
    const resourceChannels = closure_1_3.getResourceChannels(closure_0);
    return resourceChannels.filter((item, index) => null != channel.getChannel(item.channelId));
  });
};