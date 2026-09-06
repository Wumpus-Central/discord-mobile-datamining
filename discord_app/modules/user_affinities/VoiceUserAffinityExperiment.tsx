// discord_app/modules/user_affinities/VoiceUserAffinityExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

const apexExperiment = ApexExperiment.createApexExperiment({
  kind: "user",
  name: "2025-08-voice-user-affinity",
  defaultConfig: { enabled: false },
  variations: {
    0: { enabled: false, sortType: "PX_16" },
    1: { enabled: true, sortType: "vc_probability" },
    2: { enabled: true, sortType: "communication_probability" },
  },
});
const result = size.fileFinishedImporting("modules/user_affinities/VoiceUserAffinityExperiment.tsx");

export default apexExperiment;
export const getVoiceUserAffinitySortType = function getVoiceUserAffinitySortType(location) {
  return apexExperiment.getConfig({ location }).sortType;
};
export const useVoiceUserAffinitySortType = function useVoiceUserAffinitySortType(useVoiceChannelUsers) {
  return apexExperiment.useConfig({ location: useVoiceChannelUsers }).sortType;
};
