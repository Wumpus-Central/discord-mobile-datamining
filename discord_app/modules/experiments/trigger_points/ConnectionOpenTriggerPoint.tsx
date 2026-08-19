// === Module 13241: commonTriggerPointConfiguration ===

// Module 13241 (commonTriggerPointConfiguration)
import obj132 from "obj132" /* 2 */;
import ExperimentBuckets from "ExperimentBuckets" /* 4289 */;
import registeredExperimentIds from "registeredExperimentIds" /* 7660 */;
import apexExperiment from "apexExperiment" /* 13242 */;

const items = [apexExperiment.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new registeredExperimentIds.CommonTriggerPointConfiguration(items, ExperimentBuckets.CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = obj132.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;