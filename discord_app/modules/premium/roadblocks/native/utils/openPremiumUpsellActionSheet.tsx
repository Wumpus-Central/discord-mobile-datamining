// discord_app/modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx
import set from "../../../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../../../_runtime/02008_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";

const PremiumUpsellActionSheetKey = "PremiumUpsellActionSheetKey";
const result = set.fileFinishedImporting("modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx");

export default function openPremiumUpsellActionSheet(featureName, subfeatureName, analyticsLocations) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { featureName, subfeatureName, analyticsLocations };
  obj.openLazy(asyncRequireImpl(8519, dependencyMap.paths), PremiumUpsellActionSheetKey, obj);
};
export const PREMIUM_UPSELL_ACTION_SHEET_KEY = "PremiumUpsellActionSheetKey";