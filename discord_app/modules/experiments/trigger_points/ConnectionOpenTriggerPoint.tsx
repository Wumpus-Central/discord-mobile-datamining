// === Module 13746: ConnectionOpenTriggerPoint ===

// Module 13746 (ConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4523 */;
import Helpers from "Helpers" /* 10898 */;
import ContentInventoryExperiments from "ContentInventoryExperiments" /* 13747 */;
import size from "module_2" /* 2 */;

const items = [ContentInventoryExperiments.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, ExperimentConstants.CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;