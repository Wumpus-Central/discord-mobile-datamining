// === Module 14893: QuestBarRenderedTriggerPoint ===

// Module 14893 (QuestBarRenderedTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4751 */;
import Helpers from "Helpers" /* 10440 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.QUEST_BAR_RENDERED, { location: "quest bar rendered" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/QuestBarRenderedTriggerPoint.tsx");

export const QuestBarRenderedTriggerPoint = commonTriggerPointConfiguration;