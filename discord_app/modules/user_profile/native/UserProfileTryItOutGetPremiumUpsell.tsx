// discord_app/modules/user_profile/native/UserProfileTryItOutGetPremiumUpsell.tsx
import useAnalyticsLocationsDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import openPremiumModalDefault from "../../../components_native/premium/openPremiumModal.tsx";
import PremiumFeaturesCards from "../../user_settings/premium/native/PremiumFeaturesCards.tsx";
import UserProfileFloatingUpsellDefault from "UserProfileFloatingUpsell.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const Constants = fn(1072);
({ AnalyticsObjects: closure_4, AnalyticsPages: hasOwnProperty, AnalyticsSections: metroRequire } = Constants);
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileTryItOutGetPremiumUpsell.tsx");

export default function UserProfileTryItOutGetPremiumUpsell(onLayout) {
  let analyticsLocations;
  let nitroTrialCtaOverride = analyticsLocations(7626).useNitroTrialCtaOverride("user_profile_premium_upsell_card");
  analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  const items = [analyticsLocations];
  const callback = noop.useCallback(() => {
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
  const obj2 = {
    text: null,
    buttonText: null,
    buttonVariant: "experimental_premium-primary",
    onButtonPress: null,
    onLayout: null,
  };
  let obj = analyticsLocations(7626);
  const intl = analyticsLocations(1113).intl;
  obj2.text = intl.format(analyticsLocations(1113).t.TmfgI2, { onClick: callback });
  if (nitroTrialCtaOverride == null) {
    const intl2 = tmp(1113).intl;
    nitroTrialCtaOverride = intl2.string(tmp(1113).t.pj0XBN);
  }
  obj2.buttonText = nitroTrialCtaOverride;
  obj2.onButtonPress = callback;
  obj2.onLayout = onLayout.onLayout;
  return jsx(UserProfileFloatingUpsellDefault, {
    text: null,
    buttonText: null,
    buttonVariant: "experimental_premium-primary",
    onButtonPress: null,
    onLayout: null,
  });
}
