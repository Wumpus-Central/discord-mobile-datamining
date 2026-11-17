// === Module 19819: OpenUserSettingsTriggerPoint ===

// Module 19819 (OpenUserSettingsTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5527 */;
import Helpers from "Helpers" /* 9728 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.OPEN_USER_SETTINGS, { location: "open user settings" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/OpenUserSettingsTriggerPoint.tsx");

export const OpenUserSettingsTriggerPoint = commonTriggerPointConfiguration;