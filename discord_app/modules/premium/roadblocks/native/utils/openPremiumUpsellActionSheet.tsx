// === Module 7541: openPremiumUpsellActionSheet ===

// Module 7541 (openPremiumUpsellActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2010 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4413 */;

const PremiumUpsellActionSheetKey = "PremiumUpsellActionSheetKey";
const result = set.fileFinishedImporting("modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx");

export default function openPremiumUpsellActionSheet(featureName, subfeatureName, analyticsLocations, onDismiss) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { featureName, subfeatureName, analyticsLocations, onDismiss };
  obj.openLazy(asyncRequireImpl(7542, dependencyMap.paths), PremiumUpsellActionSheetKey, obj);
};
export const PREMIUM_UPSELL_ACTION_SHEET_KEY = "PremiumUpsellActionSheetKey";