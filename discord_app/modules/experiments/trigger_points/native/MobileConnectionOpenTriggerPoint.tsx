// === Module 13260: commonTriggerPointConfiguration ===

// Module 13260 (commonTriggerPointConfiguration)
import set from "set" /* 2 */;
import ExperimentBuckets from "ExperimentBuckets" /* 4359 */;
import registeredExperimentIds from "registeredExperimentIds" /* 10406 */;

const commonTriggerPointConfiguration = new registeredExperimentIds.CommonTriggerPointConfiguration([], ExperimentBuckets.CommonTriggerPoints.CONNECTION_OPEN_MOBILE, { location: "app open mobile" });
const result = set.fileFinishedImporting("modules/experiments/trigger_points/native/MobileConnectionOpenTriggerPoint.tsx");

export const MobileConnectionOpenTriggerPoint = commonTriggerPointConfiguration;