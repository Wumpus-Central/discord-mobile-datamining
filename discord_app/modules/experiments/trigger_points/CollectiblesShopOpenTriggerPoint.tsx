// === Module 17428: CollectiblesShopOpenTriggerPoint ===

// Module 17428 (CollectiblesShopOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5630 */;
import Helpers from "Helpers" /* 9218 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.COLLECTIBLES_SHOP_OPEN, { location: "collectibles shop open" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/CollectiblesShopOpenTriggerPoint.tsx");

export const CollectiblesShopOpenTriggerPoint = commonTriggerPointConfiguration;