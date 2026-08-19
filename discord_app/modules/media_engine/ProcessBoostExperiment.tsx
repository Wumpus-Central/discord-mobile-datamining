// === Module 13087: apexExperiment ===

// Module 13087 (apexExperiment)
import obj132 from "obj132" /* 2 */;
import DesktopSources from "DesktopSources" /* 4529 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const ProcessPriority = DesktopSources.ProcessPriority;
const obj = { 1: null, 2: obj1, 3: obj2, 4: obj3 };
obj[4] = { processPriority: ProcessPriority.NORMAL, threadPriorityConfiguration: 3 };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-02-process-boost-on-voice", kind: "user", defaultConfig: obj, variations: obj });
const result = obj132.fileFinishedImporting("modules/media_engine/ProcessBoostExperiment.tsx");

export const ProcessBoostExperiment = apexExperiment;