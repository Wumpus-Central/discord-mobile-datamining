// === Module 13767: ConnectionOpenTriggerPoint ===

// Module 13767 (ConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4522 */;
import Helpers from "Helpers" /* 10879 */;
import ContentInventoryExperiments from "ContentInventoryExperiments" /* 13768 */;
import size from "module_2" /* 2 */;

const items = [ContentInventoryExperiments.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, ExperimentConstants.CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;