// discord_app/modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx
import obj132 from "../../../../../../_runtime/00002_obj132.js";
import asyncRequireImpl from "../../../../../../_runtime/02007_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";

const PremiumUpsellActionSheetKey = "PremiumUpsellActionSheetKey";
const result = obj132.fileFinishedImporting("modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx");

export default function openPremiumUpsellActionSheet(featureName, subfeatureName, analyticsLocations) {
  const obj = { featureName, subfeatureName, analyticsLocations };
  obj.openLazy(asyncRequireImpl(8480, dependencyMap.paths), PremiumUpsellActionSheetKey, obj);
};
export const PREMIUM_UPSELL_ACTION_SHEET_KEY = "PremiumUpsellActionSheetKey";