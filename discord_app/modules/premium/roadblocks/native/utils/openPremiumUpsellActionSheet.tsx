// === Module 9046: openPremiumUpsellActionSheet ===

// Module 9046 (openPremiumUpsellActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import size from "module_2" /* 2 */;

const PremiumUpsellActionSheetKey = "PremiumUpsellActionSheetKey";
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx");

export default function openPremiumUpsellActionSheet(featureName, analyticsLocations, stack, appEntryKey) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(9047, dependencyMap.paths), PremiumUpsellActionSheetKey, { featureName, analyticsLocations, appEntryKey }, stack);
};
export const PREMIUM_UPSELL_ACTION_SHEET_KEY = "PremiumUpsellActionSheetKey";