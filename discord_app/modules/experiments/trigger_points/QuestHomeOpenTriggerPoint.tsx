// === Module 17300: QuestHomeOpenTriggerPoint ===

// Module 17300 (QuestHomeOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5363 */;
import Helpers from "Helpers" /* 10856 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.QUEST_HOME_OPEN, { location: "open quest home" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/QuestHomeOpenTriggerPoint.tsx");

export const QuestHomeOpenTriggerPoint = commonTriggerPointConfiguration;