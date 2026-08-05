// discord_app/modules/guild_onboarding_home/useResourceChannels.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import handleSettingsLoadSuccess from "handleSettingsLoadSuccess";
import { defaultAreStatesEqual } from "../../../discord_common/js/packages/flux/useStateFromStores.tsx";

const require = arg1;
const result = require("defaultAreStatesEqual").fileFinishedImporting("modules/guild_onboarding_home/useResourceChannels.tsx");

export default function useResourceChannels(arg0) {
  const _require = arg0;
  const items = [handleSettingsLoadSuccess, ensureGuildLoaded];
  return _defaultAreStatesEqual.useStateFromStoresArray(items, () => {
    const resourceChannels = outer1_3.getResourceChannels(closure_0);
    return resourceChannels.filter((channelId) => null != channel.getChannel(channelId.channelId));
  });
};