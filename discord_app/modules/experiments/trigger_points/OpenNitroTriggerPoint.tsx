// === Module 13731: OpenNitroTriggerPoint ===

// Module 13731 (OpenNitroTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4673 */;
import Helpers from "Helpers" /* 11077 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.OPEN_NITRO, { location: "open nitro tab/settings" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/OpenNitroTriggerPoint.tsx");

export const OpenNitroTriggerPoint = commonTriggerPointConfiguration;