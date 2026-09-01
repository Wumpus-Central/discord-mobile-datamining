// discord_app/modules/experiments/trigger_points/QuestBarRenderedTriggerPoint.tsx
import set from "../../../../_runtime/00002_set.js";
import ExperimentBuckets from "../ExperimentConstants.tsx";
import registeredExperimentIds from "Helpers.tsx";

const commonTriggerPointConfiguration = new registeredExperimentIds.CommonTriggerPointConfiguration(
  [],
  ExperimentBuckets.CommonTriggerPoints.QUEST_BAR_RENDERED,
  { location: "quest bar rendered" },
);
const result = set.fileFinishedImporting("modules/experiments/trigger_points/QuestBarRenderedTriggerPoint.tsx");

export const QuestBarRenderedTriggerPoint = commonTriggerPointConfiguration;
