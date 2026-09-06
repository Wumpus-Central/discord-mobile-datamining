// discord_app/modules/experiments/trigger_points/QuestHomeOpenTriggerPoint.tsx
import ExperimentConstants from "../ExperimentConstants.tsx";
import Helpers from "Helpers.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(
  [],
  ExperimentConstants.CommonTriggerPoints.QUEST_HOME_OPEN,
  { location: "open quest home" },
);
const result = size.fileFinishedImporting("modules/experiments/trigger_points/QuestHomeOpenTriggerPoint.tsx");

export const QuestHomeOpenTriggerPoint = commonTriggerPointConfiguration;
