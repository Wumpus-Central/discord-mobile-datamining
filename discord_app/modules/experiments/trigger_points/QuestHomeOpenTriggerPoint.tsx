// === Module 16530: QuestHomeOpenTriggerPoint ===

// Module 16530 (QuestHomeOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5441 */;
import Helpers from "Helpers" /* 9143 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.QUEST_HOME_OPEN, { location: "open quest home" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/QuestHomeOpenTriggerPoint.tsx");

export const QuestHomeOpenTriggerPoint = commonTriggerPointConfiguration;