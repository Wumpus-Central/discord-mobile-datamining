// === Module 15183: ConnectionOpenTriggerPoint ===

// Module 15183 (ConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5661 */;
import Helpers from "Helpers" /* 9260 */;
import ContentInventoryExperiments from "ContentInventoryExperiments" /* 15184 */;
import size from "module_2" /* 2 */;

const items = [ContentInventoryExperiments.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, ExperimentConstants.CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;