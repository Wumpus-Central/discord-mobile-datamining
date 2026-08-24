// discord_app/modules/experiments/trigger_points/QuestHomeOpenTriggerPoint.tsx
import set from "../../../../_runtime/00002_set.js";
import ExperimentBuckets from "../ExperimentConstants.tsx";
import registeredExperimentIds from "Helpers.tsx";

const commonTriggerPointConfiguration = new registeredExperimentIds.CommonTriggerPointConfiguration([], ExperimentBuckets.CommonTriggerPoints.QUEST_HOME_OPEN, { location: "open quest home" });
const result = set.fileFinishedImporting("modules/experiments/trigger_points/QuestHomeOpenTriggerPoint.tsx");

export const QuestHomeOpenTriggerPoint = commonTriggerPointConfiguration;