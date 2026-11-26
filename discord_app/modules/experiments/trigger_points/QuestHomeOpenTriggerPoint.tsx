// === Module 16671: QuestHomeOpenTriggerPoint ===

// Module 16671 (QuestHomeOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5661 */;
import Helpers from "Helpers" /* 9260 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.QUEST_HOME_OPEN, { location: "open quest home" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/QuestHomeOpenTriggerPoint.tsx");

export const QuestHomeOpenTriggerPoint = commonTriggerPointConfiguration;