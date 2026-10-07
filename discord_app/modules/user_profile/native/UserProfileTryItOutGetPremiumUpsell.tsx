// discord_app/modules/user_profile/native/UserProfileTryItOutGetPremiumUpsell.tsx
import useAnalyticsLocationsDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import PremiumFeaturesCards from "../../user_settings/premium/native/PremiumFeaturesCards.tsx";
import openPremiumModalDefault from "../../../components_native/premium/openPremiumModal.tsx";
import usePremiumFeatureUpsellGetNitroDefault from "../../premium/roadblocks/native/hooks/usePremiumFeatureUpsellGetNitro.tsx";
import UserProfileFloatingUpsellDefault from "UserProfileFloatingUpsell.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const Constants = fn(1085);
({ AnalyticsObjects: closure_4, AnalyticsPages: hasOwnProperty, AnalyticsSections: metroRequire } = Constants);
const jsx = fn(21).jsx;
let items = [AnalyticsLocationDefault.USER_SETTINGS_TRY_OUT_PREMIUM];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileTryItOutGetPremiumUpsell.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (onLayout) => {
      const cResult = analyticsLocations(576).c(10);
      onLayout = onLayout.onLayout;
      let obj = analyticsLocations(576);
      const nitroTrialCtaOverride = analyticsLocations(6968).useNitroTrialCtaOverride(
        "user_profile_premium_upsell_card",
      );
      analyticsLocations = useAnalyticsLocationsDefault(items).analyticsLocations;
      if (cResult[0] !== analyticsLocations) {
        const fn = function n() {
          const obj = {
            analyticsLocation: {
              page: constants2.USER_SETTINGS,
              section: constants3.SETTINGS_CUSTOMIZE_PROFILE_TRY_IT_OUT,
              object: constants.BUTTON_CTA,
            },
            analyticsLocations,
            premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING,
          };
          openPremiumModalDefault(obj);
        };
        cResult[0] = analyticsLocations;
        cResult[1] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[1];
      }
      const obj2 = analyticsLocations(6968);
      ({ loading, onPress } = usePremiumFeatureUpsellGetNitroDefault(
        false,
        tmp7,
        constants2.USER_SETTINGS,
        undefined,
        items,
      ));
      const tmp8 = usePremiumFeatureUpsellGetNitroDefault(false, tmp7, constants2.USER_SETTINGS, undefined, items);
      const mobileNitroPreviewDirectCheckoutEnabled =
        analyticsLocations(14493).useMobileNitroPreviewDirectCheckoutEnabled();
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t["MswR/h"]);
        cResult[2] = stringResult;
        let tmp10 = stringResult;
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
        let tmp12 = stringResult1;
      } else {
        tmp12 = cResult[4];
      }
      let tmp15 = mobileNitroPreviewDirectCheckoutEnabled;
      if (mobileNitroPreviewDirectCheckoutEnabled) {
        tmp15 = loading;
      }
      if (mobileNitroPreviewDirectCheckoutEnabled) {
        tmp7 = onPress;
      }
      if (cResult[5] === onLayout) {
        if (cResult[6] === tmp12) {
          if (cResult[7] === tmp15) {
            if (cResult[8] === tmp7) {
              let tmp16 = cResult[9];
            }
            return tmp16;
          }
        }
      }
      const tmp17 = jsx(UserProfileFloatingUpsellDefault, {
        text: tmp10,
        buttonText: tmp12,
        buttonVariant: "experimental_premium-primary",
        loading: tmp15,
        onButtonPress: tmp7,
        onLayout,
      });
      cResult[5] = onLayout;
      cResult[6] = tmp12;
      cResult[7] = tmp15;
      cResult[8] = tmp7;
      cResult[9] = tmp17;
      tmp16 = tmp17;
      const tmpResult = analyticsLocations(14493);
    }
  : (onLayout) => {
      let analyticsLocations;
      let nitroTrialCtaOverride = analyticsLocations(6968).useNitroTrialCtaOverride("user_profile_premium_upsell_card");
      analyticsLocations = useAnalyticsLocationsDefault(items).analyticsLocations;
      items = [analyticsLocations];
      let callback = noop.useCallback(() => {
        const obj = {
          analyticsLocation: {
            page: constants2.USER_SETTINGS,
            section: constants3.SETTINGS_CUSTOMIZE_PROFILE_TRY_IT_OUT,
            object: constants.BUTTON_CTA,
          },
          analyticsLocations,
          premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING,
        };
        openPremiumModalDefault(obj);
      }, items);
      let obj = analyticsLocations(6968);
      ({ loading, onPress } = usePremiumFeatureUpsellGetNitroDefault(
        false,
        callback,
        constants2.USER_SETTINGS,
        undefined,
        items,
      ));
      const tmp5 = usePremiumFeatureUpsellGetNitroDefault(false, callback, constants2.USER_SETTINGS, undefined, items);
      const mobileNitroPreviewDirectCheckoutEnabled =
        analyticsLocations(14493).useMobileNitroPreviewDirectCheckoutEnabled();
      const obj3 = {
        text: null,
        buttonText: null,
        buttonVariant: "experimental_premium-primary",
        loading: null,
        onButtonPress: null,
        onLayout: null,
      };
      const obj2 = analyticsLocations(14493);
      const intl = analyticsLocations(1126).intl;
      obj3.text = intl.string(analyticsLocations(1126).t["MswR/h"]);
      if (nitroTrialCtaOverride == null) {
        const intl2 = tmp(1126).intl;
        nitroTrialCtaOverride = intl2.string(tmp(1126).t.pj0XBN);
      }
      obj3.buttonText = nitroTrialCtaOverride;
      let tmp9 = mobileNitroPreviewDirectCheckoutEnabled;
      if (mobileNitroPreviewDirectCheckoutEnabled) {
        tmp9 = loading;
      }
      obj3.loading = tmp9;
      if (mobileNitroPreviewDirectCheckoutEnabled) {
        callback = onPress;
      }
      obj3.onButtonPress = callback;
      obj3.onLayout = onLayout.onLayout;
      return jsx(UserProfileFloatingUpsellDefault, {
        text: null,
        buttonText: null,
        buttonVariant: "experimental_premium-primary",
        loading: null,
        onButtonPress: null,
        onLayout: null,
      });
    };
