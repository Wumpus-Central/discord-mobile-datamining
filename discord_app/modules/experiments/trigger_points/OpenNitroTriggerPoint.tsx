// discord_app/modules/experiments/trigger_points/OpenNitroTriggerPoint.tsx
import ExperimentConstants from "../ExperimentConstants.tsx";
import Helpers from "Helpers.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(
  [],
  ExperimentConstants.CommonTriggerPoints.OPEN_NITRO,
  { location: "open nitro tab/settings" },
);
const result = size.fileFinishedImporting("modules/experiments/trigger_points/OpenNitroTriggerPoint.tsx");

export const OpenNitroTriggerPoint = commonTriggerPointConfiguration;
