// === Module 14202: UserProfilePremiumUpsellCard ===

// Module 14202 (UserProfilePremiumUpsellCard)
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import Text_Text from "Text/Text" /* 4832 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6411 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6583 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6603 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 8663 */;
import openPremiumModalDefault from "openPremiumModal" /* 8695 */;
import usePremiumFeatureUpsellGetNitroDefault from "usePremiumFeatureUpsellGetNitro" /* 9422 */;
import UserProfileUpsellCardDefault from "UserProfileUpsellCard" /* 14180 */;
import noop from "module_19" /* 19 */;

require = fn;
function UpsellCardLayout(arg0) {
  ({ style, ctaText, description, disabled, onPress } = arg0);
  const obj = { style, ctaText, showLinearGradient: true, disabled, onPress, children: jsx(Text_Text.Text, { variant: "text-sm/normal", maxFontSizeMultiplier: 2.5, children: description }) };
  return jsx(UserProfileUpsellCardDefault, { style, ctaText, showLinearGradient: true, disabled, onPress, children: jsx(Text_Text.Text, { variant: "text-sm/normal", maxFontSizeMultiplier: 2.5, children: description }) });
}
function PreviewNitroCard(style) {
  let navigation;
  navigation = navigation(1485).useNavigation();
  items = [navigation];
  const obj2 = { style: style.style, ctaText: null, description: null, onPress: null };
  const callback = noop.useCallback(() => {
    UserSettingsModalActionCreatorsDefault.setSection(constants4.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
    navigation.push(constants4.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
  }, items);
  const intl = navigation(1115).intl;
  obj2.ctaText = intl.string(navigation(1115).t.PxUx8e);
  const intl2 = navigation(1115).intl;
  obj2.description = intl2.string(navigation(1115).t.Tii53U);
  obj2.onPress = callback;
  return <UpsellCardLayout style={style.style} ctaText={null} description={null} onPress={null} />;
}
function GetNitroCard(style) {
  let analyticsLocations;
  let nitroTrialCtaOverride = analyticsLocations(6866).useNitroTrialCtaOverride("user_profile_premium_upsell_card");
  analyticsLocations = useAnalyticsLocationsDefault(items).analyticsLocations;
  items = [analyticsLocations];
  let callback = noop.useCallback(() => {
    const obj = { analyticsLocation: { page: constants2.USER_SETTINGS, section: constants3.SETTINGS_CUSTOMIZE_PROFILE_TRY_IT_OUT, object: constants.BUTTON_CTA }, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
    openPremiumModalDefault(obj);
  }, items);
  let obj = analyticsLocations(6866);
  ({ loading, onPress } = usePremiumFeatureUpsellGetNitroDefault(false, callback, constants2.USER_SETTINGS, undefined, items));
  const tmp5 = usePremiumFeatureUpsellGetNitroDefault(false, callback, constants2.USER_SETTINGS, undefined, items);
  const mobileNitroPreviewDirectCheckoutEnabled = analyticsLocations(14203).useMobileNitroPreviewDirectCheckoutEnabled();
  const obj3 = { style: style.style, ctaText: null, description: null, disabled: null, onPress: null };
  if (nitroTrialCtaOverride == null) {
    const intl = tmp(1115).intl;
    nitroTrialCtaOverride = intl.string(tmp(1115).t.pj0XBN);
  }
  obj3.ctaText = nitroTrialCtaOverride;
  const intl2 = tmp(1115).intl;
  obj3.description = intl2.string(analyticsLocations(1115).t.ZFR9LF);
  let tmp9 = mobileNitroPreviewDirectCheckoutEnabled;
  if (mobileNitroPreviewDirectCheckoutEnabled) {
    tmp9 = loading;
  }
  obj3.disabled = tmp9;
  if (mobileNitroPreviewDirectCheckoutEnabled) {
    callback = onPress;
  }
  obj3.onPress = callback;
  return <UpsellCardLayout style={style.style} ctaText={null} description={null} disabled={null} onPress={null} />;
}
const Constants = fn(1074);
({ AnalyticsObjects: closure_4, AnalyticsPages: hasOwnProperty, AnalyticsSections: metroRequire, UserSettingsSections: closure_7 } = Constants);
const jsx = fn(21).jsx;
let items = [AnalyticsLocationDefault.USER_SETTINGS_TRY_OUT_PREMIUM];
const createStyles = fn(4836);
let closure_10 = createStyles.createStyles((bottom) => {
  const obj = { container: { position: "absolute", bottom, start: 0, end: 0 } };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePremiumUpsellCard.tsx");

export const UserProfilePremiumUpsellCard = function UserProfilePremiumUpsellCard(isTryItOut) {
  return jsx(isTryItOut.isTryItOut ? GetNitroCard : PreviewNitroCard, { style: closure_10(useSafeAreaInsetsDefault().bottom).container });
};