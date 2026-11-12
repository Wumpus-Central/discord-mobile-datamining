// === Module 15203: OpenNitroTriggerPoint ===

// Module 15203 (OpenNitroTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5470 */;
import Helpers from "Helpers" /* 9648 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.OPEN_NITRO, { location: "open nitro tab/settings" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/OpenNitroTriggerPoint.tsx");

export const OpenNitroTriggerPoint = commonTriggerPointConfiguration;