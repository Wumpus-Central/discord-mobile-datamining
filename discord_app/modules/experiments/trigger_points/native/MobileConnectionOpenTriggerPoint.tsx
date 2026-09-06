// discord_app/modules/experiments/trigger_points/native/MobileConnectionOpenTriggerPoint.tsx
import ExperimentConstants from "../../ExperimentConstants.tsx";
import Helpers from "../Helpers.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(
  [],
  ExperimentConstants.CommonTriggerPoints.CONNECTION_OPEN_MOBILE,
  { location: "app open mobile" },
);
const result = size.fileFinishedImporting(
  "modules/experiments/trigger_points/native/MobileConnectionOpenTriggerPoint.tsx",
);

export const MobileConnectionOpenTriggerPoint = commonTriggerPointConfiguration;
