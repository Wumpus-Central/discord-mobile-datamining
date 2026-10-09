// discord_app/modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx
import asyncRequireImpl from "../../../../../../_runtime/02000_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const PremiumUpsellActionSheetKey = "PremiumUpsellActionSheetKey";
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx");

export default function openPremiumUpsellActionSheet(featureName, analyticsLocations, onDismiss, appEntryKey) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(9251, dependencyMap.paths), PremiumUpsellActionSheetKey, {
    featureName,
    analyticsLocations,
    onDismiss,
    appEntryKey,
  });
}
export const PREMIUM_UPSELL_ACTION_SHEET_KEY = "PremiumUpsellActionSheetKey";
