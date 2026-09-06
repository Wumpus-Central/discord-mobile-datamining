// === Module 13694: MobileConnectionOpenTriggerPoint ===

// Module 13694 (MobileConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4477 */;
import Helpers from "Helpers" /* 10809 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.CONNECTION_OPEN_MOBILE, { location: "app open mobile" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/native/MobileConnectionOpenTriggerPoint.tsx");

export const MobileConnectionOpenTriggerPoint = commonTriggerPointConfiguration;