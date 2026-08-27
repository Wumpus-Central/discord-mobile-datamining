// === Module 13257: commonTriggerPointConfiguration ===

// Module 13257 (commonTriggerPointConfiguration)
import set from "set" /* 2 */;
import ExperimentBuckets from "ExperimentBuckets" /* 4359 */;
import registeredExperimentIds from "registeredExperimentIds" /* 10406 */;
import apexExperiment from "apexExperiment" /* 13258 */;

const items = [apexExperiment.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new registeredExperimentIds.CommonTriggerPointConfiguration(items, ExperimentBuckets.CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = set.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;