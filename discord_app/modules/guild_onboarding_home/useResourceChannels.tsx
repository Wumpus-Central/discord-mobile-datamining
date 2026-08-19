// === Module 15815: useResourceChannels ===

// Module 15815 (useResourceChannels)
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import handleSettingsLoadSuccess from "handleSettingsLoadSuccess" /* 5048 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/guild_onboarding_home/useResourceChannels.tsx");

export default function useResourceChannels(arg0) {
  const _require = arg0;
  const items = [closure_3, closure_2];
  return _require(647).useStateFromStoresArray(items, () => {
    const resourceChannels = closure_1_3.getResourceChannels(closure_0);
    return resourceChannels.filter((item, index) => null != channel.getChannel(item.channelId));
  });
};