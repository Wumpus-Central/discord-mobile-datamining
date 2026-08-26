// === Module 8593: openPremiumUpsellActionSheet ===

// Module 8593 (openPremiumUpsellActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4411 */;

const PremiumUpsellActionSheetKey = "PremiumUpsellActionSheetKey";
const result = set.fileFinishedImporting("modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx");

export default function openPremiumUpsellActionSheet(featureName, subfeatureName, analyticsLocations) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { featureName, subfeatureName, analyticsLocations };
  obj.openLazy(asyncRequireImpl(8594, dependencyMap.paths), PremiumUpsellActionSheetKey, obj);
};
export const PREMIUM_UPSELL_ACTION_SHEET_KEY = "PremiumUpsellActionSheetKey";