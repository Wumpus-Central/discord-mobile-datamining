// === Module 16120: commonTriggerPointConfiguration ===

// Module 16120 (commonTriggerPointConfiguration)
import obj132 from "obj132" /* 2 */;
import ExperimentBuckets from "ExperimentBuckets" /* 4289 */;
import registeredExperimentIds from "registeredExperimentIds" /* 7660 */;

const commonTriggerPointConfiguration = new registeredExperimentIds.CommonTriggerPointConfiguration([], ExperimentBuckets.CommonTriggerPoints.OPEN_USER_SETTINGS, { location: "open user settings" });
const result = obj132.fileFinishedImporting("modules/experiments/trigger_points/OpenUserSettingsTriggerPoint.tsx");

export const OpenUserSettingsTriggerPoint = commonTriggerPointConfiguration;