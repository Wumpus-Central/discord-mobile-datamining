// === Module 13500: ConnectionOpenTriggerPoint ===

// Module 13500 (ConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4777 */;
import Helpers from "Helpers" /* 10540 */;
import ContentInventoryExperiments from "ContentInventoryExperiments" /* 13501 */;
import size from "module_2" /* 2 */;

const items = [ContentInventoryExperiments.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, ExperimentConstants.CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;