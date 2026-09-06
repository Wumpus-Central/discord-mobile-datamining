// discord_app/modules/quests/experiments/BountiesModalTransitionsRefactorExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj = {
  name: "2026-07-bounties-modal-transitions-refactor",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: null,
};
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/quests/experiments/BountiesModalTransitionsRefactorExperiment.tsx");

export const BountiesModalTransitionsRefactorExperiment = apexExperiment;
export const useIsBountiesModalTransitionsRefactorEnabled = function useIsBountiesModalTransitionsRefactorEnabled(
  VIDEO_MODAL_MOBILE,
) {
  return apexExperiment.useConfig({ location: VIDEO_MODAL_MOBILE }).enabled;
};
