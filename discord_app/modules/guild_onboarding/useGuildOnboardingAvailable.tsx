// === Module 11882: useGuildOnboardingAvailable ===

// Module 11882 (useGuildOnboardingAvailable)
import ImpersonateStore from "ImpersonateStore" /* 4822 */;

const require = globalThis.__r;

const require = fn;
const GuildFeatures = fn(1071).GuildFeatures;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding/useGuildOnboardingAvailable.tsx");

export default function useGuildOnboardingAvailable(features) {
  _require = features;
  items = [ImpersonateStore];
  let stateFromStores = require("initialize").useStateFromStores(items, () => {
    let id;
    if (user != null) {
      id = user.id;
    }
    if (null == id) {
      return false;
    } else {
      return ImpersonateStore.isFullServerPreview(user.id) && ImpersonateStore.isOnboardingEnabled(user.id);
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
export function isGuildOnboardingAvailable(guild) {
  if (null == guild) {
    return false;
  } else {
    let hasItem = ImpersonateStore.isFullServerPreview(guild.id) && ImpersonateStore.isOnboardingEnabled(guild.id);
    if (!hasItem) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.GUILD_ONBOARDING_HAS_PROMPTS);
    }
    return hasItem;
  }
}