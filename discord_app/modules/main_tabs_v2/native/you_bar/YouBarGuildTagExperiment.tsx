// discord_app/modules/main_tabs_v2/native/you_bar/YouBarGuildTagExperiment.tsx
import set from "../../../../../_runtime/00002_set.js";
import ApexExperiment from "../../../experiments/apex/index.tsx";

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-07-you-bar-guild-tag", kind: "user", defaultConfig: { showGuildTag: false }, variations: { 0: { showGuildTag: false }, 1: { showGuildTag: true } } });
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarGuildTagExperiment.tsx");

export default apexExperiment;
export const useIsYouBarGuildTagEnabled = function useIsYouBarGuildTagEnabled(YouBar) {
  return apexExperiment.useConfig({ location: YouBar }).showGuildTag;
};
export const getIsYouBarGuildTagEnabled = function getIsYouBarGuildTagEnabled(location) {
  return apexExperiment.getConfig({ location }).showGuildTag;
};