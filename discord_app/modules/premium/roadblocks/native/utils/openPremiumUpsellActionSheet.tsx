import { asyncRequireImpl } from "../../../../../../_runtime/01959_asyncRequireImpl.js";
import { ACTION_SHEET_HEIGHT_HALF } from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
// discord_app/modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx
const PremiumUpsellActionSheetKey = "PremiumUpsellActionSheetKey";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx");

export default function openPremiumUpsellActionSheet(featureName, subfeatureName) {
  let obj = ACTION_SHEET_HEIGHT_HALF;
  obj = { featureName, subfeatureName };
  obj.openLazy(asyncRequireImpl /* asyncRequireImpl */(8182, dependencyMap.paths), PremiumUpsellActionSheetKey, obj);
};
export const PREMIUM_UPSELL_ACTION_SHEET_KEY = "PremiumUpsellActionSheetKey";