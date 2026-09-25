// === Module 13219: ConnectionOpenTriggerPoint ===

// Module 13219 (ConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4747 */;
import Helpers from "Helpers" /* 10259 */;
import ContentInventoryExperiments from "ContentInventoryExperiments" /* 13220 */;
import size from "module_2" /* 2 */;

const items = [ContentInventoryExperiments.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, ExperimentConstants.CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;