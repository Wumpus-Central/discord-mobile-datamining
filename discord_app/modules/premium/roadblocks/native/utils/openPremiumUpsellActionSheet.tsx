// === Module 9035: openPremiumUpsellActionSheet ===

// Module 9035 (openPremiumUpsellActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import size from "module_2" /* 2 */;

const PremiumUpsellActionSheetKey = "PremiumUpsellActionSheetKey";
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx");

export default function openPremiumUpsellActionSheet(featureName, analyticsLocations, stack, appEntryKey) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(9036, dependencyMap.paths), PremiumUpsellActionSheetKey, { featureName, analyticsLocations, appEntryKey }, stack);
};
export const PREMIUM_UPSELL_ACTION_SHEET_KEY = "PremiumUpsellActionSheetKey";