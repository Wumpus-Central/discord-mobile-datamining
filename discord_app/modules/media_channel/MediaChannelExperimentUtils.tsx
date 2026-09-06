// discord_app/modules/media_channel/MediaChannelExperimentUtils.tsx
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const GuildFeatures = Constants.GuildFeatures;
const result = size.fileFinishedImporting("modules/media_channel/MediaChannelExperimentUtils.tsx");

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
