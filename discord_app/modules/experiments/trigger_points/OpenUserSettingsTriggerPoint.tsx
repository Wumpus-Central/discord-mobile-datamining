// === Module 17285: OpenUserSettingsTriggerPoint ===

// Module 17285 (OpenUserSettingsTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4638 */;
import Helpers from "Helpers" /* 11057 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.OPEN_USER_SETTINGS, { location: "open user settings" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/OpenUserSettingsTriggerPoint.tsx");

export const OpenUserSettingsTriggerPoint = commonTriggerPointConfiguration;