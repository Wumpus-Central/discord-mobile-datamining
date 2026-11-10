// === Module 17412: QuestHomeOpenTriggerPoint ===

// Module 17412 (QuestHomeOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5357 */;
import Helpers from "Helpers" /* 10806 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.QUEST_HOME_OPEN, { location: "open quest home" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/QuestHomeOpenTriggerPoint.tsx");

export const QuestHomeOpenTriggerPoint = commonTriggerPointConfiguration;