// discord_app/modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx
import ExperimentConstants from "../ExperimentConstants.tsx";
import Helpers from "Helpers.tsx";
import ContentInventoryExperiments from "../../content_inventory/ContentInventoryExperiments.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const items = [ContentInventoryExperiments.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(
  items,
  ExperimentConstants.CommonTriggerPoints.CONNECTION_OPEN,
  { location: "app open" },
);
const result = size.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;
