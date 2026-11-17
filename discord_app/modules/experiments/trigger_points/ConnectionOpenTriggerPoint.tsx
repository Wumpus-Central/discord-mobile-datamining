// === Module 16232: ConnectionOpenTriggerPoint ===

// Module 16232 (ConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5527 */;
import Helpers from "Helpers" /* 9728 */;
import ContentInventoryExperiments from "ContentInventoryExperiments" /* 16233 */;
import size from "module_2" /* 2 */;

const items = [ContentInventoryExperiments.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, ExperimentConstants.CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;