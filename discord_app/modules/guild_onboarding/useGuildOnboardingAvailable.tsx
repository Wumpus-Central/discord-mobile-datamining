// discord_app/modules/guild_onboarding/useGuildOnboardingAvailable.tsx
import initialize from "initialize";
import { GuildFeatures } from "ME";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/guild_onboarding/useGuildOnboardingAvailable.tsx");

export default function useGuildOnboardingAvailable(features) {
  const _require = features;
  const items = [initialize];
  let stateFromStores = _initialize.useStateFromStores(items, () => {
    let id;
    if (closure_0 != null) {
      id = tmp.id;
    }
    if (null == id) {
      return false;
    } else {
      return outer1_2.isFullServerPreview(tmp.id) && outer1_2.isOnboardingEnabled(tmp.id);
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
    let hasItem = initialize.isFullServerPreview(guild.id) && initialize.isOnboardingEnabled(guild.id);
    if (!hasItem) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.GUILD_ONBOARDING_HAS_PROMPTS);
    }
    return hasItem;
  }
};