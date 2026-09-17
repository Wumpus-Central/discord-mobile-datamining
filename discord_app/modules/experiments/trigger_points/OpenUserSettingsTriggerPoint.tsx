// === Module 17154: OpenUserSettingsTriggerPoint ===

// Module 17154 (OpenUserSettingsTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4556 */;
import Helpers from "Helpers" /* 10963 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.OPEN_USER_SETTINGS, { location: "open user settings" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/OpenUserSettingsTriggerPoint.tsx");

export const OpenUserSettingsTriggerPoint = commonTriggerPointConfiguration;