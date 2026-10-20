// === Module 14821: ConnectionOpenTriggerPoint ===

// Module 14821 (ConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5152 */;
import Helpers from "Helpers" /* 10493 */;
import ContentInventoryExperiments from "ContentInventoryExperiments" /* 14822 */;
import size from "module_2" /* 2 */;

const items = [ContentInventoryExperiments.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, ExperimentConstants.CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;