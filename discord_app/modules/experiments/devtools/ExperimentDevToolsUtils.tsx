// discord_app/modules/experiments/devtools/ExperimentDevToolsUtils.tsx
import ExperimentManager from "../ExperimentManager.tsx";
import experiment2 from "../../../../discord_common/js/packages/protos/discord_protos/discord_experimentation/v1/experiment.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const obj = { id: -1, label: "Not Eligible", shortLabel: "Not Eligible", type: experiment2.Variation_Type.OVERRIDE };
const result = size.fileFinishedImporting("modules/experiments/devtools/ExperimentDevToolsUtils.tsx");

export const getExperimentVariantsForDevTools = function getExperimentVariantsForDevTools(experiment) {
  if (experiment.system !== ExperimentManager.ExperimentSystem.APEX) {
    let variants = experiment.variants;
  } else {
    const items = [obj];
    variants = items.concat(experiment.variants);
  }
  return variants;
};
