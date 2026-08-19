// === Module 14540: commonTriggerPointConfiguration ===

// Module 14540 (commonTriggerPointConfiguration)
import obj132 from "obj132" /* 2 */;
import ExperimentBuckets from "ExperimentBuckets" /* 4289 */;
import registeredExperimentIds from "registeredExperimentIds" /* 7660 */;

const commonTriggerPointConfiguration = new registeredExperimentIds.CommonTriggerPointConfiguration([], ExperimentBuckets.CommonTriggerPoints.QUEST_BAR_RENDERED, { location: "quest bar rendered" });
const result = obj132.fileFinishedImporting("modules/experiments/trigger_points/QuestBarRenderedTriggerPoint.tsx");

export const QuestBarRenderedTriggerPoint = commonTriggerPointConfiguration;