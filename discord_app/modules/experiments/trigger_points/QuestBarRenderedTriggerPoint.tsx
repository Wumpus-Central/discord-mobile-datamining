// discord_app/modules/experiments/trigger_points/QuestBarRenderedTriggerPoint.tsx
const commonTriggerPointConfiguration = new require("registeredExperimentIds").CommonTriggerPointConfiguration([], require("ExperimentBuckets").CommonTriggerPoints.QUEST_BAR_RENDERED, { location: "quest bar rendered" });
const result = require("set").fileFinishedImporting("modules/experiments/trigger_points/QuestBarRenderedTriggerPoint.tsx");

export const QuestBarRenderedTriggerPoint = commonTriggerPointConfiguration;