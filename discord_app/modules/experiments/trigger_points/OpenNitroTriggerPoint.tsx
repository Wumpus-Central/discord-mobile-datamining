// discord_app/modules/experiments/trigger_points/OpenNitroTriggerPoint.tsx
import set from "../../../../_runtime/00002_set.js";
import ExperimentBuckets from "../ExperimentConstants.tsx";
import registeredExperimentIds from "Helpers.tsx";

const commonTriggerPointConfiguration = new registeredExperimentIds.CommonTriggerPointConfiguration(
  [],
  ExperimentBuckets.CommonTriggerPoints.OPEN_NITRO,
  { location: "open nitro tab/settings" },
);
const result = set.fileFinishedImporting("modules/experiments/trigger_points/OpenNitroTriggerPoint.tsx");

export const OpenNitroTriggerPoint = commonTriggerPointConfiguration;
