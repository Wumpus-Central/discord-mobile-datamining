// discord_app/modules/collectibles/native/useOpenNitroSubscribeActionSheet.tsx
import noop from "noop";
import ME from "ME";
import { PremiumTypes } from "GuildFeatures";

let c3;
let c4;
({ AnalyticsPages: c3, AnalyticsSections: c4 } = ME);
const result = require("GuildFeatures").fileFinishedImporting("modules/collectibles/native/useOpenNitroSubscribeActionSheet.tsx");

export default function useOpenNitroSubscribeActionSheet() {
  let COLLECTIBLES_SHOP = arg0;
  if (arg0 === undefined) {
    COLLECTIBLES_SHOP = constants.COLLECTIBLES_SHOP;
  }
  let analyticsLocations;
  analyticsLocations = COLLECTIBLES_SHOP(analyticsLocations[3])().analyticsLocations;
  const items = [analyticsLocations, COLLECTIBLES_SHOP];
  return React.useCallback(() => {
    obj = { analyticsLocation: obj, analyticsLocations, premiumType: outer1_5.TIER_2 };
    obj = { page: outer1_3.COLLECTIBLES_SHOP, section: COLLECTIBLES_SHOP };
    COLLECTIBLES_SHOP(analyticsLocations[4])(obj);
  }, items);
};