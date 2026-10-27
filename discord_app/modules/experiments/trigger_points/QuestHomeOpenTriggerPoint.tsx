// === Module 16473: QuestHomeOpenTriggerPoint ===

// Module 16473 (QuestHomeOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5192 */;
import Helpers from "Helpers" /* 10567 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.QUEST_HOME_OPEN, { location: "open quest home" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/QuestHomeOpenTriggerPoint.tsx");

export const QuestHomeOpenTriggerPoint = commonTriggerPointConfiguration;