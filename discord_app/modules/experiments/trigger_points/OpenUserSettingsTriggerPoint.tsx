// === Module 16904: OpenUserSettingsTriggerPoint ===

// Module 16904 (OpenUserSettingsTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4477 */;
import Helpers from "Helpers" /* 10809 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.OPEN_USER_SETTINGS, { location: "open user settings" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/OpenUserSettingsTriggerPoint.tsx");

export const OpenUserSettingsTriggerPoint = commonTriggerPointConfiguration;