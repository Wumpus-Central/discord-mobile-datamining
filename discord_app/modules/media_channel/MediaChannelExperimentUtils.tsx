// discord_app/modules/media_channel/MediaChannelExperimentUtils.tsx
import set from "../../../_runtime/00002_set.js";
import ME from "../../Constants.tsx";

const GuildFeatures = ME.GuildFeatures;
const result = set.fileFinishedImporting("modules/media_channel/MediaChannelExperimentUtils.tsx");

export const useGuildEligibleForMediaChannels = function useGuildEligibleForMediaChannels(stateFromStores) {
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  if (null == id) {
    return false;
  } else {
    const features = stateFromStores.features;
    return (
      ((features.has(GuildFeatures.CREATOR_MONETIZABLE) ||
        features.has(GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)) &&
        features.has(GuildFeatures.COMMUNITY)) ||
      features.has(GuildFeatures.INTERNAL_EMPLOYEE_ONLY)
    );
  }
};
