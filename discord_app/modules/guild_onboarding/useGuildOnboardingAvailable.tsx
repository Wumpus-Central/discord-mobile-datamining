// discord_app/modules/guild_onboarding/useGuildOnboardingAvailable.tsx
import ImpersonateStore from "../impersonate/ImpersonateStore.tsx";

const require = fn;
const GuildFeatures = fn(1074).GuildFeatures;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding/useGuildOnboardingAvailable.tsx");

export default function useGuildOnboardingAvailable(features) {
  _require = features;
  const items = [ImpersonateStore];
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
}
export const isGuildOnboardingAvailable = function isGuildOnboardingAvailable(guild) {
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
};
