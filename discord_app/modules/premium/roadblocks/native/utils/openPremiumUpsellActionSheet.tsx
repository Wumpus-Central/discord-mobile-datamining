// === Module 8096: openPremiumUpsellActionSheet ===

// Module 8096 (openPremiumUpsellActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4724 */;
import size from "module_2" /* 2 */;

const PremiumUpsellActionSheetKey = "PremiumUpsellActionSheetKey";
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx");

export default function openPremiumUpsellActionSheet(featureName, subfeatureName, analyticsLocations, onDismiss, appEntryKey) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(8097, dependencyMap.paths), PremiumUpsellActionSheetKey, { featureName, subfeatureName, analyticsLocations, onDismiss, appEntryKey });
};
export const PREMIUM_UPSELL_ACTION_SHEET_KEY = "PremiumUpsellActionSheetKey";