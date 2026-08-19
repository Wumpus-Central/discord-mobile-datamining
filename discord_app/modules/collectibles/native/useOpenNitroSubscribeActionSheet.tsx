// discord_app/modules/collectibles/native/useOpenNitroSubscribeActionSheet.tsx
import noop from "../../../../_runtime/00019_noop.js";
import ME from "../../../Constants.tsx";
import { PremiumTypes } from "../../premium/PremiumConstants.tsx";

({ AnalyticsPages: c3, AnalyticsSections: c4 } = ME);
const result = require("obj132").fileFinishedImporting("modules/collectibles/native/useOpenNitroSubscribeActionSheet.tsx");

export default function useOpenNitroSubscribeActionSheet() {
  let COLLECTIBLES_SHOP = arg0;
  if (arg0 === undefined) {
    COLLECTIBLES_SHOP = constants.COLLECTIBLES_SHOP;
  }
  let analyticsLocations;
  analyticsLocations = COLLECTIBLES_SHOP(analyticsLocations[3])().analyticsLocations;
  const items = [analyticsLocations, COLLECTIBLES_SHOP];
  return React.useCallback(() => {
    const obj = { page: closure_1_3.COLLECTIBLES_SHOP, section: COLLECTIBLES_SHOP };
    COLLECTIBLES_SHOP(analyticsLocations[4])(obj);
  }, items);
};