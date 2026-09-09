// === Module 13718: ConnectionOpenTriggerPoint ===

// Module 13718 (ConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4491 */;
import Helpers from "Helpers" /* 10841 */;
import ContentInventoryExperiments from "ContentInventoryExperiments" /* 13719 */;
import size from "module_2" /* 2 */;

const items = [ContentInventoryExperiments.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, ExperimentConstants.CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;