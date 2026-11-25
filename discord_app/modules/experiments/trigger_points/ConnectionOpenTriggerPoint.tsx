// === Module 15133: ConnectionOpenTriggerPoint ===

// Module 15133 (ConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5630 */;
import Helpers from "Helpers" /* 9218 */;
import ContentInventoryExperiments from "ContentInventoryExperiments" /* 15134 */;
import size from "module_2" /* 2 */;

const items = [ContentInventoryExperiments.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, ExperimentConstants.CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;