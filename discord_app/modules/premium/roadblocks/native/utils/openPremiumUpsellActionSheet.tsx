// === Module 8479: openPremiumUpsellActionSheet ===

// Module 8479 (openPremiumUpsellActionSheet)
import obj132 from "obj132" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;

const PremiumUpsellActionSheetKey = "PremiumUpsellActionSheetKey";
const result = obj132.fileFinishedImporting("modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx");

export default function openPremiumUpsellActionSheet(featureName, subfeatureName, analyticsLocations) {
  const obj = { featureName, subfeatureName, analyticsLocations };
  obj.openLazy(asyncRequireImpl(8480, dependencyMap.paths), PremiumUpsellActionSheetKey, obj);
};
export const PREMIUM_UPSELL_ACTION_SHEET_KEY = "PremiumUpsellActionSheetKey";