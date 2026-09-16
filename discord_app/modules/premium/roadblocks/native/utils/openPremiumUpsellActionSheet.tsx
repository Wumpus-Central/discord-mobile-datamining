// === Module 7964: openPremiumUpsellActionSheet ===

// Module 7964 (openPremiumUpsellActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4605 */;
import size from "module_2" /* 2 */;

const PremiumUpsellActionSheetKey = "PremiumUpsellActionSheetKey";
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx");

export default function openPremiumUpsellActionSheet(featureName, subfeatureName, analyticsLocations, onDismiss) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(7965, dependencyMap.paths), PremiumUpsellActionSheetKey, { featureName, subfeatureName, analyticsLocations, onDismiss });
};
export const PREMIUM_UPSELL_ACTION_SHEET_KEY = "PremiumUpsellActionSheetKey";