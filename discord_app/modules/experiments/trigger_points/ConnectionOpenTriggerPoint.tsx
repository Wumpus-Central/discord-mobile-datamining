// === Module 13231: commonTriggerPointConfiguration ===

// Module 13231 (commonTriggerPointConfiguration)
import set from "set" /* 2 */;
import ExperimentBuckets from "ExperimentBuckets" /* 4358 */;
import registeredExperimentIds from "registeredExperimentIds" /* 7585 */;
import apexExperiment from "apexExperiment" /* 13232 */;

const items = [apexExperiment.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new registeredExperimentIds.CommonTriggerPointConfiguration(items, ExperimentBuckets.CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = set.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;