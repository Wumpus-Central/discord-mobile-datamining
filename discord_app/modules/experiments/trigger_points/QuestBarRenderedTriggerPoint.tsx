// === Module 15016: commonTriggerPointConfiguration ===

// Module 15016 (commonTriggerPointConfiguration)
import set from "set" /* 2 */;
import ExperimentBuckets from "ExperimentBuckets" /* 4392 */;
import registeredExperimentIds from "registeredExperimentIds" /* 10804 */;

const commonTriggerPointConfiguration = new registeredExperimentIds.CommonTriggerPointConfiguration([], ExperimentBuckets.CommonTriggerPoints.QUEST_BAR_RENDERED, { location: "quest bar rendered" });
const result = set.fileFinishedImporting("modules/experiments/trigger_points/QuestBarRenderedTriggerPoint.tsx");

export const QuestBarRenderedTriggerPoint = commonTriggerPointConfiguration;