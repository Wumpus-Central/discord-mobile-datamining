// === Module 16250: commonTriggerPointConfiguration ===

// Module 16250 (commonTriggerPointConfiguration)
import set from "set" /* 2 */;
import ExperimentBuckets from "ExperimentBuckets" /* 4294 */;
import registeredExperimentIds from "registeredExperimentIds" /* 7519 */;

const commonTriggerPointConfiguration = new registeredExperimentIds.CommonTriggerPointConfiguration([], ExperimentBuckets.CommonTriggerPoints.OPEN_USER_SETTINGS, { location: "open user settings" });
const result = set.fileFinishedImporting("modules/experiments/trigger_points/OpenUserSettingsTriggerPoint.tsx");

export const OpenUserSettingsTriggerPoint = commonTriggerPointConfiguration;