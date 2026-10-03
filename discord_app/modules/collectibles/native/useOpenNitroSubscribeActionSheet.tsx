// discord_app/modules/collectibles/native/useOpenNitroSubscribeActionSheet.tsx
import openPremiumPlanSelectionActionSheetDefault from "../../premium/native/openPremiumPlanSelectionActionSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const Constants = fn(1085);
({ AnalyticsPages: closure_4, AnalyticsSections: hasOwnProperty } = Constants);
const PremiumTypes = fn(1379).PremiumTypes;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/useOpenNitroSubscribeActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let COLLECTIBLES_SHOP = arg0;
      const cResult = COLLECTIBLES_SHOP(576).c(3);
      if (undefined === arg0) {
        COLLECTIBLES_SHOP = constants2.COLLECTIBLES_SHOP;
      }
      analyticsLocations = analyticsLocations(6657)().analyticsLocations;
      if (cResult[0] === analyticsLocations) {
        if (cResult[1] === COLLECTIBLES_SHOP) {
          let tmp4 = cResult[2];
        }
        return tmp4;
      }
      const fn = function n() {
        const obj = {
          analyticsLocation: { page: constants.COLLECTIBLES_SHOP, section: COLLECTIBLES_SHOP },
          analyticsLocations,
          premiumType: PremiumTypes.TIER_2,
        };
        openPremiumPlanSelectionActionSheetDefault(obj);
      };
      cResult[0] = analyticsLocations;
      cResult[1] = COLLECTIBLES_SHOP;
      cResult[2] = fn;
      tmp4 = fn;
      let obj = COLLECTIBLES_SHOP(576);
    }
  : () => {
      let COLLECTIBLES_SHOP = arg0;
      if (arg0 === undefined) {
        COLLECTIBLES_SHOP = constants2.COLLECTIBLES_SHOP;
      }
      let analyticsLocations;
      analyticsLocations = analyticsLocations(6657)().analyticsLocations;
      const items = [analyticsLocations, COLLECTIBLES_SHOP];
      return noop.useCallback(() => {
        const obj = {
          analyticsLocation: { page: constants.COLLECTIBLES_SHOP, section: COLLECTIBLES_SHOP },
          analyticsLocations,
          premiumType: PremiumTypes.TIER_2,
        };
        openPremiumPlanSelectionActionSheetDefault(obj);
      }, items);
    };
