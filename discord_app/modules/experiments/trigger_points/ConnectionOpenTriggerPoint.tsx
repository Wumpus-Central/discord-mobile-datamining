// === Module 15264: ConnectionOpenTriggerPoint ===

// Module 15264 (ConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5227 */;
import Helpers from "Helpers" /* 10599 */;
import ContentInventoryExperiments from "ContentInventoryExperiments" /* 15265 */;
import size from "module_2" /* 2 */;

const items = [ContentInventoryExperiments.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, ExperimentConstants.CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;