// === Module 13717: OpenNitroTriggerPoint ===

// Module 13717 (OpenNitroTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4672 */;
import Helpers from "Helpers" /* 11070 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.OPEN_NITRO, { location: "open nitro tab/settings" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/OpenNitroTriggerPoint.tsx");

export const OpenNitroTriggerPoint = commonTriggerPointConfiguration;