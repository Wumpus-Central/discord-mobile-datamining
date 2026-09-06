// discord_app/modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx
import asyncRequireImpl from "../../../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const PremiumUpsellActionSheetKey = "PremiumUpsellActionSheetKey";
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx");

export default function openPremiumUpsellActionSheet(featureName, subfeatureName, analyticsLocations, onDismiss) {
  const obj = { featureName, subfeatureName, analyticsLocations, onDismiss };
  obj.openLazy(asyncRequireImpl(7851, dependencyMap.paths), PremiumUpsellActionSheetKey, obj);
}
export const PREMIUM_UPSELL_ACTION_SHEET_KEY = "PremiumUpsellActionSheetKey";
