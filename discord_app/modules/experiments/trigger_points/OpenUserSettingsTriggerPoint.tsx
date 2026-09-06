// discord_app/modules/experiments/trigger_points/OpenUserSettingsTriggerPoint.tsx
import ExperimentConstants from "../ExperimentConstants.tsx";
import Helpers from "Helpers.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(
  [],
  ExperimentConstants.CommonTriggerPoints.OPEN_USER_SETTINGS,
  { location: "open user settings" },
);
const result = size.fileFinishedImporting("modules/experiments/trigger_points/OpenUserSettingsTriggerPoint.tsx");

export const OpenUserSettingsTriggerPoint = commonTriggerPointConfiguration;
