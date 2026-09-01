// discord_app/modules/partner_perks/xbox/game_pass_perks/XboxGamePassPerksExperiment.tsx
import set from "../../../../../_runtime/00002_set.js";
import ApexExperiment from "../../../experiments/apex/index.tsx";

const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-03-crepe",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
const result = set.fileFinishedImporting("modules/partner_perks/xbox/game_pass_perks/XboxGamePassPerksExperiment.tsx");

export default apexExperiment;
export const useIsXboxGamePassPerksEnabled = function useIsXboxGamePassPerksEnabled(location) {
  return apexExperiment.useConfig({ location }).enabled;
};
export const getIsXboxGamePassPerksEnabled = function getIsXboxGamePassPerksEnabled(canUseMonthlyOrbs) {
  return apexExperiment.getConfig({ location: canUseMonthlyOrbs }).enabled;
};
