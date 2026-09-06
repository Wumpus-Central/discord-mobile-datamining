// discord_app/modules/media_engine/ProcessBoostExperiment.tsx
import Constants from "../../../discord_common/js/packages/media-engine/Constants.tsx";
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

const ProcessPriority = Constants.ProcessPriority;
let obj = {
  name: "2026-02-process-boost-on-voice",
  kind: "user",
  defaultConfig: { processPriority: ProcessPriority.HIGH, threadPriorityConfiguration: 0 },
  variations: null,
};
obj = {
  1: null,
  2: { processPriority: ProcessPriority.NORMAL, threadPriorityConfiguration: 0 },
  3: { processPriority: ProcessPriority.NORMAL, threadPriorityConfiguration: 1 },
  4: { processPriority: ProcessPriority.NORMAL, threadPriorityConfiguration: 2 },
};
obj[4] = { processPriority: ProcessPriority.NORMAL, threadPriorityConfiguration: 3 };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/ProcessBoostExperiment.tsx");

export const ProcessBoostExperiment = apexExperiment;
