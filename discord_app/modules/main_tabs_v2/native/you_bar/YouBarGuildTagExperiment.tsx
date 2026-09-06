// === Module 16368: YouBarGuildTagExperiment ===

// Module 16368 (YouBarGuildTagExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-07-you-bar-guild-tag", kind: "user", defaultConfig: { showGuildTag: false }, variations: { 0: { showGuildTag: false }, 1: { showGuildTag: true } } });
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarGuildTagExperiment.tsx");

export default apexExperiment;
export const useIsYouBarGuildTagEnabled = function useIsYouBarGuildTagEnabled(YouBar) {
  return apexExperiment.useConfig({ location: YouBar }).showGuildTag;
};
export const getIsYouBarGuildTagEnabled = function getIsYouBarGuildTagEnabled(location) {
  return apexExperiment.getConfig({ location }).showGuildTag;
};