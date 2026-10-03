// === Module 15701: CollectiblesShopOpenTriggerPoint ===

// Module 15701 (CollectiblesShopOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4777 */;
import Helpers from "Helpers" /* 10540 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.COLLECTIBLES_SHOP_OPEN, { location: "collectibles shop open" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/CollectiblesShopOpenTriggerPoint.tsx");

export const CollectiblesShopOpenTriggerPoint = commonTriggerPointConfiguration;