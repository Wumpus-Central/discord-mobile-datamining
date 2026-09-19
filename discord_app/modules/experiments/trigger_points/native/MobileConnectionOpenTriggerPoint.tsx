// === Module 13953: MobileConnectionOpenTriggerPoint ===

// Module 13953 (MobileConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4672 */;
import Helpers from "Helpers" /* 11070 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.CONNECTION_OPEN_MOBILE, { location: "app open mobile" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/native/MobileConnectionOpenTriggerPoint.tsx");

export const MobileConnectionOpenTriggerPoint = commonTriggerPointConfiguration;