// === Module 6147: useGuildOnboardingAvailable ===

// Module 6147 (useGuildOnboardingAvailable)
import closure_2 from "initialize" /* 1984 */;
import { GuildFeatures } from "ME" /* 676 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_onboarding/useGuildOnboardingAvailable.tsx");

export default function useGuildOnboardingAvailable(features) {
  const _require = features;
  const items = [closure_2];
  let stateFromStores = _require(589).useStateFromStores(items, () => {
    let id;
    if (closure_0 != null) {
      id = tmp.id;
    }
    if (null == id) {
      return false;
    } else {
      return closure_1_2.isFullServerPreview(tmp.id) && closure_1_2.isOnboardingEnabled(tmp.id);
    }
  });
  if (!stateFromStores) {
    let hasItem;
    if (features != null) {
      features = features.features;
      hasItem = features.has(GuildFeatures.GUILD_ONBOARDING_HAS_PROMPTS);
    }
    stateFromStores = hasItem;
  }
  return stateFromStores;
};
export const isGuildOnboardingAvailable = function isGuildOnboardingAvailable(guild) {
  if (null == guild) {
    return false;
  } else {
    let hasItem = closure_2.isFullServerPreview(guild.id) && closure_2.isOnboardingEnabled(guild.id);
    if (!hasItem) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.GUILD_ONBOARDING_HAS_PROMPTS);
    }
    return hasItem;
  }
};