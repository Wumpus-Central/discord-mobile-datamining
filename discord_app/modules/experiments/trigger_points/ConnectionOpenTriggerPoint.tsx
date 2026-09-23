// === Module 14049: ConnectionOpenTriggerPoint ===

// Module 14049 (ConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4743 */;
import Helpers from "Helpers" /* 11153 */;
import ContentInventoryExperiments from "ContentInventoryExperiments" /* 14050 */;
import size from "module_2" /* 2 */;

const items = [ContentInventoryExperiments.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, ExperimentConstants.CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;