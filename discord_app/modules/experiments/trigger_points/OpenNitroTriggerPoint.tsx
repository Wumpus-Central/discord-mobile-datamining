// === Module 14765: OpenNitroTriggerPoint ===

// Module 14765 (OpenNitroTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5191 */;
import Helpers from "Helpers" /* 10564 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.OPEN_NITRO, { location: "open nitro tab/settings" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/OpenNitroTriggerPoint.tsx");

export const OpenNitroTriggerPoint = commonTriggerPointConfiguration;