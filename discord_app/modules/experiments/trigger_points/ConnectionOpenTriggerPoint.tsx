// === Module 13950: ConnectionOpenTriggerPoint ===

// Module 13950 (ConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4672 */;
import Helpers from "Helpers" /* 11070 */;
import ContentInventoryExperiments from "ContentInventoryExperiments" /* 13951 */;
import size from "module_2" /* 2 */;

const items = [ContentInventoryExperiments.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, ExperimentConstants.CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;