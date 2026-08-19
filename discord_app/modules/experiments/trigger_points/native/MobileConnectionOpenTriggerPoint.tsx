// === Module 13244: commonTriggerPointConfiguration ===

// Module 13244 (commonTriggerPointConfiguration)
import obj132 from "obj132" /* 2 */;
import ExperimentBuckets from "ExperimentBuckets" /* 4289 */;
import registeredExperimentIds from "registeredExperimentIds" /* 7660 */;

const commonTriggerPointConfiguration = new registeredExperimentIds.CommonTriggerPointConfiguration([], ExperimentBuckets.CommonTriggerPoints.CONNECTION_OPEN_MOBILE, { location: "app open mobile" });
const result = obj132.fileFinishedImporting("modules/experiments/trigger_points/native/MobileConnectionOpenTriggerPoint.tsx");

export const MobileConnectionOpenTriggerPoint = commonTriggerPointConfiguration;