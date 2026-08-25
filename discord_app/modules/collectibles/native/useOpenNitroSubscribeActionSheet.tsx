// === Module 9714: useOpenNitroSubscribeActionSheet ===

// Module 9714 (useOpenNitroSubscribeActionSheet)
import closure_2 from "noop" /* 19 */;
import ME from "ME" /* 676 */;
import { PremiumTypes } from "GuildFeatures" /* 1924 */;

({ AnalyticsPages: c3, AnalyticsSections: c4 } = ME);
const result = require("set").fileFinishedImporting("modules/collectibles/native/useOpenNitroSubscribeActionSheet.tsx");

export default function useOpenNitroSubscribeActionSheet() {
  let COLLECTIBLES_SHOP = arg0;
  if (arg0 === undefined) {
    COLLECTIBLES_SHOP = constants.COLLECTIBLES_SHOP;
  }
  let analyticsLocations;
  analyticsLocations = COLLECTIBLES_SHOP(analyticsLocations[3])().analyticsLocations;
  const items = [analyticsLocations, COLLECTIBLES_SHOP];
  return React.useCallback(() => {
    obj = { analyticsLocation: obj, analyticsLocations, premiumType: closure_1_5.TIER_2 };
    obj = { page: closure_1_3.COLLECTIBLES_SHOP, section: COLLECTIBLES_SHOP };
    COLLECTIBLES_SHOP(analyticsLocations[4])(obj);
  }, items);
};