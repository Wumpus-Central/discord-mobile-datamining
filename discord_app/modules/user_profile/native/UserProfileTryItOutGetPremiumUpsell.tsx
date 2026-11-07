// === Module 16858: UserProfileTryItOutGetPremiumUpsell ===

// Module 16858 (UserProfileTryItOutGetPremiumUpsell)
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7387 */;
import openPremiumModalDefault from "openPremiumModal" /* 10027 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 10028 */;
import UserProfileFloatingUpsellDefault from "UserProfileFloatingUpsell" /* 16855 */;
import noop from "module_19" /* 19 */;

require = fn;
const Constants = fn(1072);
({ AnalyticsObjects: closure_4, AnalyticsPages: hasOwnProperty, AnalyticsSections: closure_6 } = Constants);
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileTryItOutGetPremiumUpsell.tsx");

export default function UserProfileTryItOutGetPremiumUpsell(onLayout) {
  let analyticsLocations;
  let nitroTrialCtaOverride = analyticsLocations(7702).useNitroTrialCtaOverride("user_profile_premium_upsell_card");
  analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  items = [analyticsLocations];
  const callback = noop.useCallback(() => {
    const obj = { analyticsLocation: { page: constants2.USER_SETTINGS, section: constants3.SETTINGS_CUSTOMIZE_PROFILE_TRY_IT_OUT, object: constants.BUTTON_CTA }, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
    openPremiumModalDefault(obj);
  }, items);
  const obj2 = { text: null, buttonText: null, buttonVariant: "experimental_premium-primary", onButtonPress: null, onLayout: null };
  let obj = analyticsLocations(7702);
  const intl = analyticsLocations(1113).intl;
  obj2.text = intl.format(analyticsLocations(1113).t.TmfgI2, { onClick: callback });
  if (nitroTrialCtaOverride == null) {
    const intl2 = tmp(1113).intl;
    nitroTrialCtaOverride = intl2.string(tmp(1113).t.pj0XBN);
  }
  obj2.buttonText = nitroTrialCtaOverride;
  obj2.onButtonPress = callback;
  obj2.onLayout = onLayout.onLayout;
  return jsx(UserProfileFloatingUpsellDefault, { text: null, buttonText: null, buttonVariant: "experimental_premium-primary", onButtonPress: null, onLayout: null });
};