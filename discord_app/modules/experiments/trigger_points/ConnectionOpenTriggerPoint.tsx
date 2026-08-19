// discord_app/modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import ExperimentBuckets from "../ExperimentConstants.tsx";
import registeredExperimentIds from "Helpers.tsx";
import apexExperiment from "../../content_inventory/ContentInventoryExperiments.tsx";

const items = [apexExperiment.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new registeredExperimentIds.CommonTriggerPointConfiguration(items, ExperimentBuckets.CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = obj132.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;