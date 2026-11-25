// === Module 9552: openPremiumUpsellActionSheet ===

// Module 9552 (openPremiumUpsellActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import size from "module_2" /* 2 */;

const PremiumUpsellActionSheetKey = "PremiumUpsellActionSheetKey";
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx");

export default function openPremiumUpsellActionSheet(featureName, analyticsLocations, stack, appEntryKey) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(9553, dependencyMap.paths), PremiumUpsellActionSheetKey, { featureName, analyticsLocations, appEntryKey }, stack);
};
export const PREMIUM_UPSELL_ACTION_SHEET_KEY = "PremiumUpsellActionSheetKey";