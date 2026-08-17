// discord_app/modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;

const PremiumUpsellActionSheetKey = "PremiumUpsellActionSheetKey";
const result = set.fileFinishedImporting("modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx");

export default function openPremiumUpsellActionSheet(featureName, subfeatureName, analyticsLocations) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { featureName, subfeatureName, analyticsLocations };
  obj.openLazy(asyncRequireImpl(8480, dependencyMap.paths), PremiumUpsellActionSheetKey, obj);
};
export const PREMIUM_UPSELL_ACTION_SHEET_KEY = "PremiumUpsellActionSheetKey";