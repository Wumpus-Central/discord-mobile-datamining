// === Module 9594: openPremiumUpsellActionSheet ===

// Module 9594 (openPremiumUpsellActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5171 */;
import size from "module_2" /* 2 */;

const PremiumUpsellActionSheetKey = "PremiumUpsellActionSheetKey";
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx");

export default function openPremiumUpsellActionSheet(featureName, analyticsLocations, onDismiss, appEntryKey) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(9595, dependencyMap.paths), PremiumUpsellActionSheetKey, { featureName, analyticsLocations, onDismiss, appEntryKey });
};
export const PREMIUM_UPSELL_ACTION_SHEET_KEY = "PremiumUpsellActionSheetKey";