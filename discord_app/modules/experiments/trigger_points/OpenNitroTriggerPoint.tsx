// === Module 13662: OpenNitroTriggerPoint ===

// Module 13662 (OpenNitroTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4638 */;
import Helpers from "Helpers" /* 11057 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.OPEN_NITRO, { location: "open nitro tab/settings" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/OpenNitroTriggerPoint.tsx");

export const OpenNitroTriggerPoint = commonTriggerPointConfiguration;