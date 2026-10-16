// === Module 14691: MobileConnectionOpenTriggerPoint ===

// Module 14691 (MobileConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5076 */;
import Helpers from "Helpers" /* 10404 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.CONNECTION_OPEN_MOBILE, { location: "app open mobile" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/native/MobileConnectionOpenTriggerPoint.tsx");

export const MobileConnectionOpenTriggerPoint = commonTriggerPointConfiguration;