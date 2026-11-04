// === Module 9943: openPremiumUpsellActionSheet ===

// Module 9943 (openPremiumUpsellActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import size from "module_2" /* 2 */;

const PremiumUpsellActionSheetKey = "PremiumUpsellActionSheetKey";
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx");

export default function openPremiumUpsellActionSheet(featureName, analyticsLocations, onDismiss, appEntryKey) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(9944, dependencyMap.paths), PremiumUpsellActionSheetKey, { featureName, analyticsLocations, onDismiss, appEntryKey });
};
export const PREMIUM_UPSELL_ACTION_SHEET_KEY = "PremiumUpsellActionSheetKey";