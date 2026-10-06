// discord_app/modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx
import asyncRequire from "../../../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const PremiumUpsellActionSheetKey = "PremiumUpsellActionSheetKey";
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx");

export default function openPremiumUpsellActionSheet(
  featureName,
  subfeatureName,
  analyticsLocations,
  onDismiss,
  appEntryKey,
) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { featureName, subfeatureName, analyticsLocations, onDismiss, appEntryKey };
  obj.openLazy(asyncRequire(7492, dependencyMap.paths), PremiumUpsellActionSheetKey, obj2);
}
export const PREMIUM_UPSELL_ACTION_SHEET_KEY = "PremiumUpsellActionSheetKey";
