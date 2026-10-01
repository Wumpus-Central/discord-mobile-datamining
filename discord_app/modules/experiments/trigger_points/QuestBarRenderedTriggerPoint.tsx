// === Module 14930: QuestBarRenderedTriggerPoint ===

// Module 14930 (QuestBarRenderedTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4762 */;
import Helpers from "Helpers" /* 10466 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.QUEST_BAR_RENDERED, { location: "quest bar rendered" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/QuestBarRenderedTriggerPoint.tsx");

export const QuestBarRenderedTriggerPoint = commonTriggerPointConfiguration;