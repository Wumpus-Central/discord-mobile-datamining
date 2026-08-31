// === Module 13435: apexExperiment ===

// Module 13435 (apexExperiment)
import set from "set" /* 2 */;
import DesktopSources from "DesktopSources" /* 4512 */;
import ApexExperiment from "ApexExperiment" /* 1468 */;

const ProcessPriority = DesktopSources.ProcessPriority;
let obj = { processPriority: ProcessPriority.HIGH, threadPriorityConfiguration: 0 };
obj = { 1: null, 2: obj1, 3: obj2, 4: obj3 };
obj[4] = { processPriority: ProcessPriority.NORMAL, threadPriorityConfiguration: 3 };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-02-process-boost-on-voice", kind: "user", defaultConfig: obj, variations: obj });
const result = set.fileFinishedImporting("modules/media_engine/ProcessBoostExperiment.tsx");

export const ProcessBoostExperiment = apexExperiment;