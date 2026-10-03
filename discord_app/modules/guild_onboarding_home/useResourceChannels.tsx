// === Module 16510: useResourceChannels ===

// Module 16510 (useResourceChannels)
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 5077 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/useResourceChannels.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildOnboardingHomeSettingsStore, ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      const resourceChannels = GuildOnboardingHomeSettingsStore.getResourceChannels(closure_0);
      return resourceChannels.filter((channelId) => null != channel.getChannel(channelId.channelId));
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = require("c");
  return require("useStateFromStores").useStateFromStoresArray(first, tmp7);
}) : ((arg0) => {
  _require = arg0;
  const items = [GuildOnboardingHomeSettingsStore, ChannelStore];
  return require("useStateFromStores").useStateFromStoresArray(items, () => {
    const resourceChannels = GuildOnboardingHomeSettingsStore.getResourceChannels(closure_0);
    return resourceChannels.filter((channelId) => null != channel.getChannel(channelId.channelId));
  });
});