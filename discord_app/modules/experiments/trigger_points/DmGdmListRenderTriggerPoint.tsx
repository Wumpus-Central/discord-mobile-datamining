// === Module 17227: DmGdmListRenderTriggerPoint ===

// Module 17227 (DmGdmListRenderTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5152 */;
import Helpers from "Helpers" /* 10493 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.DM_GDM_LIST_RENDER, { location: "dm/gdm list rendered" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/DmGdmListRenderTriggerPoint.tsx");

export const DmGdmListRenderTriggerPoint = commonTriggerPointConfiguration;