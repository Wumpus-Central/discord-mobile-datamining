// === Module 15041: ConnectionOpenTriggerPoint ===

// Module 15041 (ConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5192 */;
import Helpers from "Helpers" /* 10567 */;
import ContentInventoryExperiments from "ContentInventoryExperiments" /* 15042 */;
import size from "module_2" /* 2 */;

const items = [ContentInventoryExperiments.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, ExperimentConstants.CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;