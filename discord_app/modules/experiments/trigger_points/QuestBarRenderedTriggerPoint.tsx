// discord_app/modules/experiments/trigger_points/QuestBarRenderedTriggerPoint.tsx
import ExperimentConstants from "../ExperimentConstants.tsx";
import Helpers from "Helpers.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(
  [],
  ExperimentConstants.CommonTriggerPoints.QUEST_BAR_RENDERED,
  { location: "quest bar rendered" },
);
const result = size.fileFinishedImporting("modules/experiments/trigger_points/QuestBarRenderedTriggerPoint.tsx");

export const QuestBarRenderedTriggerPoint = commonTriggerPointConfiguration;
