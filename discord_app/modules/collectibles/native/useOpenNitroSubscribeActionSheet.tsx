// discord_app/modules/collectibles/native/useOpenNitroSubscribeActionSheet.tsx
import openPremiumPlanSelectionActionSheetDefault from "../../premium/native/openPremiumPlanSelectionActionSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const Constants = fn(1074);
({ AnalyticsPages: c3, AnalyticsSections: closure_4 } = Constants);
const PremiumTypes = fn(1373).PremiumTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/useOpenNitroSubscribeActionSheet.tsx");

export default function useOpenNitroSubscribeActionSheet() {
  let COLLECTIBLES_SHOP = arg0;
  if (arg0 === undefined) {
    COLLECTIBLES_SHOP = constants2.COLLECTIBLES_SHOP;
  }
  let analyticsLocations;
  analyticsLocations = COLLECTIBLES_SHOP(analyticsLocations[3])().analyticsLocations;
  const items = [analyticsLocations, COLLECTIBLES_SHOP];
  return noop.useCallback(() => {
    let obj = { analyticsLocation: null, analyticsLocations, premiumType: PremiumTypes.TIER_2 };
    obj = { page: constants.COLLECTIBLES_SHOP, section: COLLECTIBLES_SHOP };
    obj.analyticsLocation = obj;
    openPremiumPlanSelectionActionSheetDefault(obj);
  }, items);
}
