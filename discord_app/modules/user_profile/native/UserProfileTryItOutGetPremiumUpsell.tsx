// discord_app/modules/user_profile/native/UserProfileTryItOutGetPremiumUpsell.tsx
import useAnalyticsLocationsDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import openPremiumModalDefault from "../../../components_native/premium/openPremiumModal.tsx";
import PremiumFeaturesCards from "../../user_settings/premium/native/PremiumFeaturesCards.tsx";
import usePremiumFeatureUpsellGetNitroDefault from "../../premium/roadblocks/native/hooks/usePremiumFeatureUpsellGetNitro.tsx";
import UserProfileFloatingUpsellDefault from "UserProfileFloatingUpsell.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const Constants = fn(1085);
({ AnalyticsObjects: closure_4, AnalyticsPages: hasOwnProperty, AnalyticsSections: metroRequire } = Constants);
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileTryItOutGetPremiumUpsell.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function UserProfileTryItOutGetPremiumUpsell(onLayout) {
      const cResult = analyticsLocations(576).c(12);
      onLayout = onLayout.onLayout;
      let obj = analyticsLocations(576);
      const nitroTrialCtaOverride = analyticsLocations(7168).useNitroTrialCtaOverride(
        "user_profile_premium_upsell_card",
      );
      analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
      if (cResult[0] !== analyticsLocations) {
        const fn = function o() {
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
        let tmp6 = fn;
      } else {
        tmp6 = cResult[1];
      }
      const obj2 = analyticsLocations(7168);
      ({ loading, onPress } = usePremiumFeatureUpsellGetNitroDefault(false, tmp6, constants2.USER_SETTINGS));
      const tmp7 = usePremiumFeatureUpsellGetNitroDefault(false, tmp6, constants2.USER_SETTINGS);
      const mobileNitroPreviewDirectCheckoutEnabled =
        analyticsLocations(14920).useMobileNitroPreviewDirectCheckoutEnabled();
      if (cResult[2] !== tmp6) {
        const intl = tmp(1126).intl;
        const obj3 = { onClick: tmp6 };
        const formatResult = intl.format(tmp(1126).t.TmfgI2, obj3);
        cResult[2] = tmp6;
        cResult[3] = formatResult;
        let tmp9 = formatResult;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] !== nitroTrialCtaOverride) {
        let stringResult = nitroTrialCtaOverride;
        if (nitroTrialCtaOverride == null) {
          const intl2 = tmp(1126).intl;
          stringResult = intl2.string(tmp(1126).t.pj0XBN);
        }
        cResult[4] = nitroTrialCtaOverride;
        cResult[5] = stringResult;
        let tmp11 = stringResult;
      } else {
        tmp11 = cResult[5];
      }
      let tmp14 = mobileNitroPreviewDirectCheckoutEnabled;
      if (mobileNitroPreviewDirectCheckoutEnabled) {
        tmp14 = loading;
      }
      if (mobileNitroPreviewDirectCheckoutEnabled) {
        tmp6 = onPress;
      }
      if (cResult[6] === onLayout) {
        if (cResult[7] === tmp9) {
          if (cResult[8] === tmp11) {
            if (cResult[9] === tmp14) {
              if (cResult[10] === tmp6) {
                let tmp15 = cResult[11];
              }
              return tmp15;
            }
          }
        }
      }
      const tmp16 = jsx(UserProfileFloatingUpsellDefault, {
        text: tmp9,
        buttonText: tmp11,
        buttonVariant: "experimental_premium-primary",
        loading: tmp14,
        onButtonPress: tmp6,
        onLayout,
      });
      cResult[6] = onLayout;
      cResult[7] = tmp9;
      cResult[8] = tmp11;
      cResult[9] = tmp14;
      cResult[10] = tmp6;
      cResult[11] = tmp16;
      tmp15 = tmp16;
      const tmpResult = analyticsLocations(14920);
    }
  : function UserProfileTryItOutGetPremiumUpsell(onLayout) {
      let analyticsLocations;
      let nitroTrialCtaOverride = analyticsLocations(7168).useNitroTrialCtaOverride("user_profile_premium_upsell_card");
      analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
      const items = [analyticsLocations];
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
      let obj = analyticsLocations(7168);
      ({ loading, onPress } = usePremiumFeatureUpsellGetNitroDefault(false, callback, constants2.USER_SETTINGS));
      const tmp5 = usePremiumFeatureUpsellGetNitroDefault(false, callback, constants2.USER_SETTINGS);
      const mobileNitroPreviewDirectCheckoutEnabled =
        analyticsLocations(14920).useMobileNitroPreviewDirectCheckoutEnabled();
      const obj3 = {
        text: null,
        buttonText: null,
        buttonVariant: "experimental_premium-primary",
        loading: null,
        onButtonPress: null,
        onLayout: null,
      };
      const obj2 = analyticsLocations(14920);
      const intl = analyticsLocations(1126).intl;
      obj3.text = intl.format(analyticsLocations(1126).t.TmfgI2, { onClick: callback });
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
