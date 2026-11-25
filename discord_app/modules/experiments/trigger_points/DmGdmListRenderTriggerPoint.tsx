// === Module 17720: DmGdmListRenderTriggerPoint ===

// Module 17720 (DmGdmListRenderTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5630 */;
import Helpers from "Helpers" /* 9218 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.DM_GDM_LIST_RENDER, { location: "dm/gdm list rendered" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/DmGdmListRenderTriggerPoint.tsx");

export const DmGdmListRenderTriggerPoint = commonTriggerPointConfiguration;