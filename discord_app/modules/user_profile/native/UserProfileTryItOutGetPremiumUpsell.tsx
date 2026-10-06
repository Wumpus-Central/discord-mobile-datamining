// discord_app/modules/user_profile/native/UserProfileTryItOutGetPremiumUpsell.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import useAnalyticsLocationsDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import PremiumFeaturesCards from "../../user_settings/premium/native/PremiumFeaturesCards.tsx";
import openPremiumModalDefault from "../../../components_native/premium/openPremiumModal.tsx";
import usePremiumFeatureUpsellGetNitroDefault from "../../premium/roadblocks/native/hooks/usePremiumFeatureUpsellGetNitro.tsx";
import UserProfileFloatingUpsellDefault from "UserProfileFloatingUpsell.tsx";
import react from "../../../../_runtime/00019_react.js";
import Constants from "../../../Constants.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let onLayout;

let closure_4;
let hasOwnProperty;
let metroRequire;
({ AnalyticsObjects: closure_4, AnalyticsPages: hasOwnProperty, AnalyticsSections: metroRequire } = Constants);
const jsx = Fragment.jsx;
let items = [AnalyticsLocationDefault.USER_SETTINGS_TRY_OUT_PREMIUM];
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onLayout) => {
      let analyticsLocations;
      let loading;
      let onPress;
      let tmp10;
      let tmp12;
      let tmp7;
      let tmp = analyticsLocations;
      let obj = analyticsLocations(576);
      const cResult = obj.c(10);
      onLayout = onLayout.onLayout;
      let obj2 = analyticsLocations(6968);
      const nitroTrialCtaOverride = obj2.useNitroTrialCtaOverride("user_profile_premium_upsell_card");
      analyticsLocations = useAnalyticsLocationsDefault(items).analyticsLocations;
      if (cResult[0] !== analyticsLocations) {
        const fn = function n() {
          let obj2;
          const obj = {
            analyticsLocation: obj2,
            analyticsLocations,
            premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING,
          };
          obj2 = {
            page: hasOwnProperty.USER_SETTINGS,
            section: metroRequire.SETTINGS_CUSTOMIZE_PROFILE_TRY_IT_OUT,
            object: constants.BUTTON_CTA,
          };
          const tmp = openPremiumModalDefault;
          tmp(obj);
        };
        cResult[0] = analyticsLocations;
        cResult[1] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[1];
      }
      ({ loading, onPress } = usePremiumFeatureUpsellGetNitroDefault(
        false,
        tmp7,
        constants2.USER_SETTINGS,
        undefined,
        items,
      ));
      usePremiumFeatureUpsellGetNitroDefault(false, tmp7, constants2.USER_SETTINGS, undefined, items);
      const tmpResult = tmp(14493);
      const mobileNitroPreviewDirectCheckoutEnabled = tmpResult.useMobileNitroPreviewDirectCheckoutEnabled();
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t["MswR/h"]);
        cResult[2] = stringResult;
        tmp10 = stringResult;
      } else {
        tmp10 = cResult[2];
      }
      if (cResult[3] !== nitroTrialCtaOverride) {
        let stringResult1 = nitroTrialCtaOverride;
        if (nitroTrialCtaOverride == null) {
          const intl2 = tmp(1126).intl;
          stringResult1 = intl2.string(tmp(1126).t.pj0XBN);
        }
        cResult[3] = nitroTrialCtaOverride;
        cResult[4] = stringResult1;
        tmp12 = stringResult1;
      } else {
        tmp12 = cResult[4];
      }
      if (mobileNitroPreviewDirectCheckoutEnabled) {
        tmp7 = onPress;
      }
      if (cResult[5] === onLayout) {
        if (cResult[6] === tmp12) {
          if (cResult[7] === (mobileNitroPreviewDirectCheckoutEnabled && loading)) {
            let tmp16;
            if (cResult[8] === tmp7) {
              tmp16 = cResult[9];
            }
            return tmp16;
          }
        }
      }
      const tmp17 = jsx(UserProfileFloatingUpsellDefault, {
        text: tmp10,
        buttonText: tmp12,
        buttonVariant: "experimental_premium-primary",
        loading: mobileNitroPreviewDirectCheckoutEnabled && loading,
        onButtonPress: tmp7,
        onLayout,
      });
      cResult[5] = onLayout;
      cResult[6] = tmp12;
      cResult[7] = mobileNitroPreviewDirectCheckoutEnabled && loading;
      cResult[8] = tmp7;
      cResult[9] = tmp17;
      tmp16 = tmp17;
    }
  : (onLayout) => {
      let loading;
      let onPress;
      let analyticsLocations;
      let tmp = analyticsLocations;
      onLayout = onLayout.onLayout;
      let obj = analyticsLocations(6968);
      let nitroTrialCtaOverride = obj.useNitroTrialCtaOverride("user_profile_premium_upsell_card");
      analyticsLocations = useAnalyticsLocationsDefault(items).analyticsLocations;
      items = [analyticsLocations];
      let callback = react.useCallback(() => {
        let obj2;
        const obj = {
          analyticsLocation: obj2,
          analyticsLocations,
          premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING,
        };
        obj2 = {
          page: hasOwnProperty.USER_SETTINGS,
          section: metroRequire.SETTINGS_CUSTOMIZE_PROFILE_TRY_IT_OUT,
          object: constants.BUTTON_CTA,
        };
        const tmp = openPremiumModalDefault;
        tmp(obj);
      }, items);
      ({ loading, onPress } = usePremiumFeatureUpsellGetNitroDefault(
        false,
        callback,
        constants2.USER_SETTINGS,
        undefined,
        items,
      ));
      usePremiumFeatureUpsellGetNitroDefault(false, callback, constants2.USER_SETTINGS, undefined, items);
      let obj2 = analyticsLocations(14493);
      const mobileNitroPreviewDirectCheckoutEnabled = obj2.useMobileNitroPreviewDirectCheckoutEnabled();
      UserProfileFloatingUpsellDefault;
      const intl = analyticsLocations(1126).intl;
      if (nitroTrialCtaOverride == null) {
        const intl2 = tmp(1126).intl;
        nitroTrialCtaOverride = intl2.string(tmp(1126).t.pj0XBN);
      }
      if (mobileNitroPreviewDirectCheckoutEnabled) {
        callback = onPress;
      }
      return (
        <tmp8
          text={intl.string(analyticsLocations(1126).t["MswR/h"])}
          buttonText={nitroTrialCtaOverride}
          buttonVariant="experimental_premium-primary"
          loading={mobileNitroPreviewDirectCheckoutEnabled && loading}
          onButtonPress={callback}
          onLayout={onLayout}
        />
      );
    };
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileTryItOutGetPremiumUpsell.tsx");

export default tmp3;
