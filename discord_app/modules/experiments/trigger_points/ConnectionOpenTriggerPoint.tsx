// === Module 14688: ConnectionOpenTriggerPoint ===

// Module 14688 (ConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5076 */;
import Helpers from "Helpers" /* 10404 */;
import ContentInventoryExperiments from "ContentInventoryExperiments" /* 14689 */;
import size from "module_2" /* 2 */;

const items = [ContentInventoryExperiments.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, ExperimentConstants.CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;