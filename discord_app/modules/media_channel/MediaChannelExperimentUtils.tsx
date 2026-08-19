// === Module 8846: useGuildEligibleForMediaChannels ===

// Module 8846 (useGuildEligibleForMediaChannels)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;

const GuildFeatures = ME.GuildFeatures;
const result = obj132.fileFinishedImporting("modules/media_channel/MediaChannelExperimentUtils.tsx");

export const useGuildEligibleForMediaChannels = function useGuildEligibleForMediaChannels(stateFromStores) {
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  if (null == id) {
    return false;
  } else {
    const features = stateFromStores.features;
    return (features.has(GuildFeatures.CREATOR_MONETIZABLE) || features.has(GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)) && features.has(GuildFeatures.COMMUNITY) || features.has(GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
  }
};