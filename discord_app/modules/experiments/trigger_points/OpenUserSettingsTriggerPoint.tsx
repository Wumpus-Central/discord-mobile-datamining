// discord_app/modules/experiments/trigger_points/OpenUserSettingsTriggerPoint.tsx
import set from "../../../../_runtime/00002_set.js";
import ExperimentBuckets from "../ExperimentConstants.tsx";
import registeredExperimentIds from "Helpers.tsx";

const commonTriggerPointConfiguration = new registeredExperimentIds.CommonTriggerPointConfiguration(
  [],
  ExperimentBuckets.CommonTriggerPoints.OPEN_USER_SETTINGS,
  { location: "open user settings" },
);
const result = set.fileFinishedImporting("modules/experiments/trigger_points/OpenUserSettingsTriggerPoint.tsx");

export const OpenUserSettingsTriggerPoint = commonTriggerPointConfiguration;
