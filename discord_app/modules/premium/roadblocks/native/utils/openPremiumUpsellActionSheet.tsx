// discord_app/modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx
const PremiumUpsellActionSheetKey = "PremiumUpsellActionSheetKey";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx");

export default function openPremiumUpsellActionSheet(featureName, subfeatureName) {
  let obj = require("../../../../action_sheet/native/ActionSheetActionCreators.tsx");
  obj = { featureName, subfeatureName };
  obj.openLazy(require("../../../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(8182, dependencyMap.paths), PremiumUpsellActionSheetKey, obj);
};
export const PREMIUM_UPSELL_ACTION_SHEET_KEY = "PremiumUpsellActionSheetKey";