// === Module 17392: OpenUserSettingsTriggerPoint ===

// Module 17392 (OpenUserSettingsTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4977 */;
import Helpers from "Helpers" /* 10150 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.OPEN_USER_SETTINGS, { location: "open user settings" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/OpenUserSettingsTriggerPoint.tsx");

export const OpenUserSettingsTriggerPoint = commonTriggerPointConfiguration;