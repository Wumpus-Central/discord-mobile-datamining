// === Module 15553: commonTriggerPointConfiguration ===

// Module 15553 (commonTriggerPointConfiguration)
import set from "set" /* 2 */;
import ExperimentBuckets from "ExperimentBuckets" /* 4359 */;
import registeredExperimentIds from "registeredExperimentIds" /* 10406 */;

const commonTriggerPointConfiguration = new registeredExperimentIds.CommonTriggerPointConfiguration([], ExperimentBuckets.CommonTriggerPoints.DM_GDM_LIST_RENDER, { location: "dm/gdm list rendered" });
const result = set.fileFinishedImporting("modules/experiments/trigger_points/DmGdmListRenderTriggerPoint.tsx");

export const DmGdmListRenderTriggerPoint = commonTriggerPointConfiguration;