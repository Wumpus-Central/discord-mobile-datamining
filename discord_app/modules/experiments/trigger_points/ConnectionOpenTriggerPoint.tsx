// === Module 15920: ConnectionOpenTriggerPoint ===

// Module 15920 (ConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5357 */;
import Helpers from "Helpers" /* 10806 */;
import ContentInventoryExperiments from "ContentInventoryExperiments" /* 15921 */;
import size from "module_2" /* 2 */;

const items = [ContentInventoryExperiments.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, ExperimentConstants.CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;