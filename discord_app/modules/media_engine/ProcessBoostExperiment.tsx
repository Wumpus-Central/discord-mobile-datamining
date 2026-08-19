// discord_app/modules/media_engine/ProcessBoostExperiment.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import DesktopSources from "../../../discord_common/js/packages/media-engine/Constants.tsx";
import ApexExperiment from "../experiments/apex/index.tsx";

const ProcessPriority = DesktopSources.ProcessPriority;
const obj = { 1: null, 2: obj1, 3: obj2, 4: obj3 };
obj[4] = { processPriority: ProcessPriority.NORMAL, threadPriorityConfiguration: 3 };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-02-process-boost-on-voice", kind: "user", defaultConfig: obj, variations: obj });
const result = obj132.fileFinishedImporting("modules/media_engine/ProcessBoostExperiment.tsx");

export const ProcessBoostExperiment = apexExperiment;