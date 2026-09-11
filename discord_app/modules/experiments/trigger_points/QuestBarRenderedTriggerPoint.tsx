// === Module 15247: QuestBarRenderedTriggerPoint ===

// Module 15247 (QuestBarRenderedTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4523 */;
import Helpers from "Helpers" /* 10898 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.QUEST_BAR_RENDERED, { location: "quest bar rendered" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/QuestBarRenderedTriggerPoint.tsx");

export const QuestBarRenderedTriggerPoint = commonTriggerPointConfiguration;