// === Module 14406: UserProfileTryItOutGetPremiumUpsell ===

// Module 14406 (UserProfileTryItOutGetPremiumUpsell)
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6779 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6799 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 8862 */;
import openPremiumModalDefault from "openPremiumModal" /* 8894 */;
import usePremiumFeatureUpsellGetNitroDefault from "usePremiumFeatureUpsellGetNitro" /* 9623 */;
import UserProfileFloatingUpsellDefault from "UserProfileFloatingUpsell" /* 14366 */;
import noop from "module_19" /* 19 */;

require = fn;
const Constants = fn(1074);
({ AnalyticsObjects: closure_4, AnalyticsPages: hasOwnProperty, AnalyticsSections: metroRequire } = Constants);
const jsx = fn(21).jsx;
let items = [AnalyticsLocationDefault.USER_SETTINGS_TRY_OUT_PREMIUM];
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileTryItOutGetPremiumUpsell.tsx");

export default function UserProfileTryItOutGetPremiumUpsell(onLayout) {
  let analyticsLocations;
  let nitroTrialCtaOverride = analyticsLocations(7062).useNitroTrialCtaOverride("user_profile_premium_upsell_card");
  analyticsLocations = useAnalyticsLocationsDefault(items).analyticsLocations;
  items = [analyticsLocations];
  let callback = noop.useCallback(() => {
    const obj = { analyticsLocation: { page: constants2.USER_SETTINGS, section: constants3.SETTINGS_CUSTOMIZE_PROFILE_TRY_IT_OUT, object: constants.BUTTON_CTA }, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
    openPremiumModalDefault(obj);
  }, items);
  let obj = analyticsLocations(7062);
  ({ loading, onPress } = usePremiumFeatureUpsellGetNitroDefault(false, callback, constants2.USER_SETTINGS, undefined, items));
  const tmp5 = usePremiumFeatureUpsellGetNitroDefault(false, callback, constants2.USER_SETTINGS, undefined, items);
  const mobileNitroPreviewDirectCheckoutEnabled = analyticsLocations(14407).useMobileNitroPreviewDirectCheckoutEnabled();
  const obj3 = { text: null, buttonText: null, buttonVariant: "experimental_premium-primary", loading: null, onButtonPress: null, onLayout: null };
  const obj2 = analyticsLocations(14407);
  const intl = analyticsLocations(1115).intl;
  obj3.text = intl.string(analyticsLocations(1115).t["MswR/h"]);
  if (nitroTrialCtaOverride == null) {
    const intl2 = tmp(1115).intl;
    nitroTrialCtaOverride = intl2.string(tmp(1115).t.pj0XBN);
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
  return jsx(UserProfileFloatingUpsellDefault, { text: null, buttonText: null, buttonVariant: "experimental_premium-primary", loading: null, onButtonPress: null, onLayout: null });
};