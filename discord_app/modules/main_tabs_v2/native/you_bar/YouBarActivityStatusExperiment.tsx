// discord_app/modules/main_tabs_v2/native/you_bar/YouBarActivityStatusExperiment.tsx
import apex_ApexExperimentDefault from "../../../experiments/apex/ApexExperiment.tsx";

const tmp2 = apex_ApexExperimentDefault({
  name: "2026-05-you-bar-activity-status",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
let closure_0 = tmp2;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarActivityStatusExperiment.tsx");

export const YouBarActivityStatusExperiment = tmp2;
export const useYouBarActivityStatusEnabled = function useYouBarActivityStatusEnabled(YouBar) {
  return closure_0.useConfig({ location: YouBar }).enabled;
};
